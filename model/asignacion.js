//añadir campo cantidad
const { Sequelize, DataTypes, Model } = require('sequelize');

class Asignacion extends Model {
  // definiciones de atributos y métodos

  static init(sequelize) {
    super.init({
        cantidad: {type: DataTypes.INTEGER}
      }, {
        sequelize,
        modelName: 'Asignacion'
      });
      
    }
}

module.exports = Asignacion;