'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasOne(models.Promo,{
        as:'profile',
        foreignKey:{
          name: 'idBook'
        }
      });
      Product.belongsToMany(models.Category, {
        as: "categories",
        through: {
          model: "Productcategory",
          as: "bridge",
        },
        foreignKey: "idProduct",
      });
      Product.hasMany(models.Cart, {
        as: "cart",
        foreignKey: {
          name: "idBook",
        },
      });
    }
  }
  Product.init({
    title: DataTypes.STRING,
    pages: DataTypes.INTEGER,
    author: DataTypes.STRING,
    price: DataTypes.INTEGER,
    desc: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    file: DataTypes.STRING,
    promo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};