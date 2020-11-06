const { Sequelize, DataTypes, Model } = require('sequelize');

class Farmaco extends Model {
  // definiciones de atributos y métodos

  static init(sequelize) {
    super.init({
        nombre: {type: DataTypes.STRING, allowNull: false},
        peso: {type: DataTypes.FLOAT}
      }, {
        sequelize,
        modelName: 'Farmaco'
      });
      
    }
}

module.exports = Farmaco;
