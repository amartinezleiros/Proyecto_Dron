
const { Sequelize, DataTypes, Model } = require('sequelize');
const Usuario = require('./Usuario')
/**
 * algo a ver si aparece 
 */
class Admin extends Usuario {
<<<<<<< HEAD
  // definiciones de atributos y métodos
  /**
   * ñlkasdñljasñlkfdjñlakdfjñalkjfdñkv
   * @param {*} sequelize 
   */
=======


>>>>>>> 96ef35117ee246da9d79e62e746af918209af58e
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