const { Sequelize, DataTypes, Model } = require('sequelize');
const Usuario = require('./Usuario')

class Gestor extends Usuario {
  // definiciones de atributos y métodos

  static init(sequelize) {
    Model.init({

      }, {
        sequelize,
        modelName: 'Gestor',
        
      });
      
}

gestionar_pedido(){}

}

module.exports = Gestor;