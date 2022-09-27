'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.hasMany(models.Product, {
        as: "product",
        foreignKey: {
          name: "idBook",
        },
      });
      Cart.belongsTo(models.User, {
        as: "buyer",
        foreignKey: {
          name: "idUser",
        },
      });
      Cart.belongsTo(models.Transaction, {
        as: "transaction",
        foreignKey: {
          name: "idTransaction",
        },
      });
    }
  }
  Cart.init({
    idBook: DataTypes.INTEGER,
    idTransaction: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};