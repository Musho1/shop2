const express=require('express')

const PORt=5001
const cors=require('cors')
const app=express()
const jwt=require('jsonwebtoken')
const fileUpload = require('express-fileupload')
const passport =require('passport')


app.use(cors({
    origin:true,
    methods:["GET",'POST'],
    credentials:true
}))
app.use(express.static('public'))
app.use(express.json())
app.use (passport.initialize())
app.use(fileUpload())



const { User , Slider } = require('./db')

const {storage,upload}=require('./multer')

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






app.post("/api/image", upload.single('image'),(req, res, err) => {
    if (!req.file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        res.send({ msg:'Only image files (jpg, jpeg, png) are allowed!'})};
        const image = req.file.filename;
        console.log(image)
})

app.listen(PORt,()=>console.log('ok'))