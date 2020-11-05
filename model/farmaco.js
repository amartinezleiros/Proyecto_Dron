const { Sequelize, DataTypes, Model } = require('sequelize');

class farmaco extends Model {
  // definiciones de atributos y métodos

  static init(sequelize) {
    Model.init({
        nombre: {type: DataTypes.STRING, allowNull: false},
        peso: {type: DataTypes.FLOAT}
      }, {
        sequelize,
        modelName: 'farmaco'
      });
      
    }
}

module.exports = farmaco;
