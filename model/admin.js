
const { Sequelize, DataTypes, Model } = require('sequelize');
const Usuario = require('./Usuario')
/**
 * algo a ver si aparece 
 */
class Admin extends Usuario {
  // definiciones de atributos y métodos
  /**
   * Prueba de texto para ver si los comentarios funcionan
   * @param {*} sequelize comunicación con la base de datosd
   */
  static init(sequelize) {
    super.init({

      }, {
        sequelize,
        modelName: 'Admin',
        
      });
      
}

alta_cliente(){}
ver_pedido(){}

}

module.exports = Admin;