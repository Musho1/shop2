const {Sequelize,Model,DataTypes}=require('sequelize')
const sequelize=new Sequelize('shop','user1','123456',{
    host:'localhost',
    dialect:'mysql'
})
class User extends Model{}
User.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:DataTypes.STRING,
    surname:DataTypes.STRING,
    login:DataTypes.STRING,
    password:DataTypes.STRING,
    admin:DataTypes.STRING,
},{
    sequelize,
    modelName:'User'
})



class Slider extends Model{}
Slider.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },

    image:DataTypes.STRING,
    imgName:DataTypes.STRING
},{
    sequelize,
    modelName:'Slider'
})


class Product extends Model{}
Product.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:DataTypes.STRING,
    price:DataTypes.INTEGER,

},{
    sequelize,
    modelName:'Product'
})



class ProductImg extends Model{}
ProductImg.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    image:DataTypes.STRING,
    name:DataTypes.STRING,
    ProductImg_id:DataTypes.INTEGER
},{
    sequelize,
    modelName:'ProductImg'
})









Product.hasMany(ProductImg,{foreignKey:'ProductImg_id'})
ProductImg.belongsTo(Product,{foreignKey:'ProductImg_id'})



User.sync()
Slider.sync()
Product.sync()
ProductImg.sync()



module.exports={  User,Slider,Product,ProductImg}