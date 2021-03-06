const express=require('express');

const PORt=5001
const cors=require('cors')
const app=express()
const jwt=require('jsonwebtoken')
const fileUpload = require('express-fileupload')
const passport =require('passport')
const fs=require('fs')

app.use(cors({
    origin:true,
    methods:["GET",'POST'],
    credentials:true
}))


app.use(express.json())
app.use (passport.initialize())
app.use(fileUpload())
app.use('/public', express.static('public'))
const path = require('path');

const { User , Slider , Product, ProductImg ,Category,Product_Category} = require('./db')


app.post('/',(req,res)=>{
    let data=''
    req.on("data" , (info)=>{
        data+=info
    })
    req.on('end',async()=>{
        data=JSON.parse(data)
        const users = await User.findAll();
        let send=true
        users.map((elm)=>{
            if(elm.login===data.login){
                send=false
            }
        })
        if(send){
            let x=await User.create(data)
            res.send('ok')
        }
        else {
            res.status(404).send({
                message: 'An account with the same mail already exists'
             });
        }
    })
})

app.post('/login',(req,res)=>{
    let data=''
    req.on("data" , (info)=>{
        data+=info
    })
    req.on('end',async()=>{
        data=JSON.parse(data)
        const users = await User.findAll();
        let send=false
        users.map((elm)=>{
            if(elm.login===data.login){
                if(elm.password===data.password){
                    send=true
                    const token=jwt.sign({
                        login:elm.login,
                        name:elm.name,
                        surname:elm.surname,
                        id:elm.id,
                        admin:elm.admin,
                    },'ss',{expiresIn:60*60})
                    res.send({token:`Bearer ${token}`})
                }
            }
        })
        if(!send){
            return res.status(404).send({
                message: 'This is an error!'
             });
        }

    })
})


app.post('/GetUserByToken',(req,res)=>{
    jwt.verify(req.body.Authorization.split(' ')[1],'ss',(err,aurhData)=>{
        if(err){
            res.sendStatus(403)
        }
        else{
            res.json({
                aurhData
            })
        }
    })
})


app.get('/getsliderfile',async(req,res)=>{
    const slider = await Slider.findAll();
    res.send({slider:slider})
})


  app.post('/uploadFileAPI', async(req, res) => {

    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
    const myFile = req.files.file;
    const image=`http://localhost:5001/public/${myFile.name}`
    let x=await Slider.create({image:image,imgName:myFile.name})

    myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
      

        if (err) {
            return res.status(500).send({ msg: "Error occured" });
        }

        return res.send({name: myFile.name, path: `/${myFile.name}`});
    });
})

app.post('/deletimg', async (req, res) => {
    try {
        fs.unlinkSync(`./public/${req.body.name}`);
        res.status(201).send({ message: "Image deleted" });
        
        Slider.destroy({
            where: {id:req.body.id}
           }).then(() => {
            res.status(204).end();
           });
    } catch (e) {
        res.status(400).send({ message: "Error deleting image!", error: e.toString(), req: req.body });
    }
});


app.post('/UploadPhotoForProduct',async(req,res)=>{
    let product=JSON.parse(req.body.data)

    let x=await Product.create({name:product.name,price:+product.price,Description:product.description})
    console.log(req.body)
    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
    req.files.images.map(async(elm)=>{
        const myFile = elm;
        const image=`http://localhost:5001/public/${myFile.name}`
        let y=await ProductImg.create({image:image,name:myFile.name,ProductImg_id:x.dataValues.id}) 
        myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
        });
    })

    product.category.map(async(elm)=>{
        let z=await Product_Category.create({Product_id:x.dataValues.id,Categori_id:+elm}) 
    })
    res.send('ok')
})

app.get('/getAllProduct',async(req,res)=>{     
     const product = await Product.findAll({
        include: Category
      });
    res.send({product:product})
})


app.get('/getcategoris',async(req,res)=>{
    const category=await Category.findAll()
    res.send({category:category}) 
})

app.post('/getProductbyCategory',async(req,res)=>{
    let id=''
    if(req.body.type='Top'){
        id=1
    }
    const post = await Product_Category.findAll({
        include: {
            model: Product,
            include: ProductImg
          },
        where: {
            Categori_id: 1
        }
    });
    res.send({product_Category:post}) 
})




app.post('/GetAllproduct',async(req,res)=>{
    const product = await Product.findAll({
        include: ProductImg,
    });
    res.send({product:product})
})


app.post('/romovebyid',async(req,res)=>{
    console.log(req.body.id,req.body.product_id)
    Product_Category.destroy({
        where: {id:req.body.product_id}
    })
    Product.destroy({
        where:{id:req.body.product_id}
    })
    res.send('ok')
})


app.listen(PORt,()=>console.log('ok'))