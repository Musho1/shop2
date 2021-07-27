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
    Description:DataTypes.STRING,
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




class Category extends Model{}
Category.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:DataTypes.STRING,
    
},{
    sequelize,
    modelName:'Category'
})




class Product_Category extends Model{}
Product_Category.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    Product_id:DataTypes.INTEGER,
    Categori_id:DataTypes.INTEGER,
},{
    sequelize,
    modelName:'Product_Category'
})




// Product_Category.hasMany(Product,{foreignKey:'Product_id'})
// Product_Category.hasMany(Category,{foreignKey:'Categori_id'})
Product_Category.belongsTo(Product,{foreignKey:'Product_id'})
Product_Category.belongsTo(Category,{foreignKey:'Categori_id'})

// User.belongsToMany(Profile, { through: Product_Category });
// Profile.belongsToMany(User, { through: Product_Category });


// Product_Category.associate = (models) => {
//     Product_Category.belongsTo(Product, { foreignKey: 'Product_id',});
//     Product_Category.belongsTo(Category.Genre, { foreignKey: 'Categori_id',});
//   }


//   Category.associate = (models) => {
//     Category.hasMany(Product);
//     Category.belongsToMany(Product);
//   }
//   Product.associate = (models) => {
//     Product.hasMany(Category);
//     Product.belongsToMany(Category);
//   }








Product.hasMany(ProductImg,{foreignKey:'ProductImg_id'})
ProductImg.belongsTo(Product,{foreignKey:'ProductImg_id'})


User.sync()
Slider.sync()
Product.sync()
ProductImg.sync()
Category.sync()
Product_Category.sync()

module.exports={  User,Slider,Product,ProductImg,Category,Product_Category}