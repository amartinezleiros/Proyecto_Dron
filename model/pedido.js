const { Sequelize, DataTypes, Model } = require('sequelize');

class Pedido extends Model {
  // definiciones de atributos y métodos

  static init(sequelize) {
    super.init({
        Fecha: {type: DataTypes.DATE, allowNull: false},
    
        Estado: {type: DataTypes.ENUM ("Enviado", "No enviado")}
      }, {
        sequelize,
        modelName: 'Pedido'
      });
     
}
}

module.exports = Pedido;


