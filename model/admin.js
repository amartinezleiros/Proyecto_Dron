const { Sequelize, DataTypes, Model } = require('sequelize');
const Usuario = require('./Usuario')




/**
 * CLASE Admin
 * HEREDA DE USUARIO
 * FUNCIONES PROPIAS:
 * registro_gestor() para dar de alta gestores
 * ver_pedidos() para ver todos los pedidos hechos
 */

class Admin extends Usuario {


  static init(sequelize) {
    super.init({

      }, {
        sequelize,
        modelName: 'Admin',
        
      });
      
}

registro_gestor(){}
ver_pedidos(){}

}

module.exports = Admin;