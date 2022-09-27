'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Profile,{
        as:'profile',
        foreignKey:{
          name: 'idUser'
        }
      });
       User.hasMany(models.Transaction, {
        as: "buyerTransactions",
        foreignKey: {
          name: "userId",
        },
      });
      User.hasMany(models.Cart, {
        as: "buyerCarts",
        foreignKey: {
          name: "idUser",
        },
      });
    }
  }
  User.init({
    Name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};