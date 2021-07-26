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


// User.hasMany(order,{foreignKey:'order_key'})
User.sync()
Slider.sync()
module.exports={User,Slider}