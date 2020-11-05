const { Sequelize, DataTypes, usuario } = require('sequelize');
const Usuario = require('./Usuario')

class Admin extends Usuario {
  // definiciones de atributos y métodos

  static init(sequelize) {
    usuario.init({

      }, {
        sequelize,
        modelName: 'Admin',
        
      });
      
}

alta_cliente(){}
ver_pedido(){}

}

module.exports = Admin;