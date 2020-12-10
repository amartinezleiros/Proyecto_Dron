//añadir campo cantidad
const { Sequelize, DataTypes, Model } = require("sequelize");

/**
 * @class asignacion
 * HEREDA DE Model
 * Atributo propio: cantidad(int).
 */
class Asignacion extends Model {
  static init(sequelize) {
    super.init(
      {
        cantidad: { type: DataTypes.INTEGER },
      },
      {
        sequelize,
        modelName: "Asignacion",
      }
    );
  }
}

module.exports = Asignacion;
