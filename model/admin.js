const { Sequelize, DataTypes, Model } = require('sequelize');
const Usuario = require('./Usuario')
/**
 * algo a ver si aparece 
 */
class Admin extends Usuario {
  // definiciones de atributos y métodos
  /**
   * ñlkasdñljasñlkfdjñlakdfjñalkjfdñkv
   * @param {*} sequelize 
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