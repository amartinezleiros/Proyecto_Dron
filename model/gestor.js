const { Sequelize, DataTypes, usuario } = require('sequelize');
const Usuario = require('./Usuario')

class Gestor extends Usuario {
  // definiciones de atributos y métodos

  static init(sequelize) {
    usuario.init({

      }, {
        sequelize,
        modelName: 'Gestor',
        
      });
      
}

gestionar_pedido(){}

}

module.exports = Gestor;