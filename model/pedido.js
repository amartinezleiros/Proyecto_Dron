const { Sequelize, DataTypes, Model } = require('sequelize');


/**
 * CLASE Pedido
 * HEREDA DE Model
 * Atributo propio: Fecha(date), Estado(enum).
 */
class Pedido extends Model {
  // definiciones de atributos y métodos

  static init(sequelize) {
    super.init({
        Fecha: {type: DataTypes.DATE, allowNull: true, defaultValue:Sequelize.NOW},
        Estado: {type: DataTypes.ENUM ("Enviado", "No enviado"), defaultValue:"No enviado"}
      }, {
        sequelize,
        modelName: 'Pedido'
      });
     
}
}

module.exports = Pedido;


