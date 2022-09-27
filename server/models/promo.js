'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Promo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Promo.belongsTo(models.Product, {
        as: "promo",
        foreignKey: {
          name: "idBook",
        },
      });
    }
  }
  Promo.init({
    idBook: DataTypes.INTEGER,
    promoprice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Promo',
  });
  return Promo;
};