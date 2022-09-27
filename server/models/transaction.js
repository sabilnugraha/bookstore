'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.hasMany(models.Cart, {
        as: "cart",
        foreignKey: {
          name: "idTransaction",
        },
      });
      Transaction.belongsTo(models.User, {
        as: "buyer",
        foreignKey: {
          name: "userId",
        },
      });
    }
  }
  Transaction.init({
    userId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    totalamount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};