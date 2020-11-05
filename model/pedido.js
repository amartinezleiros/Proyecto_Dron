const { Sequelize, DataTypes, Model } = require('sequelize');

class Pedido extends Model {
  // definiciones de atributos y métodos

  static init(sequelize) {
    Model.init({
        Fecha: {type: DataTypes.DATE, allowNull: false},
        Id: {type: DataTypes.INTEGER},
        Estado: {type: DataTypes.ENUM}
      }, {
        sequelize,
        modelName: 'Pedido'
      });
     
}
}

module.exports = Pedido;


