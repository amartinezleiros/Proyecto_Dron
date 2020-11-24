const { Sequelize, DataTypes, Model } = require('sequelize');
const Usuario = require('./Usuario')



/**
 * CLASE Gestor
 * HEREDA DE Usuario
 * Funciones propias: gestionar_pedido().
 */
class Gestor extends Usuario {
  // definiciones de atributos y métodos

  static init(sequelize) {
    super.init({

      }, {
        sequelize,
        modelName: 'Gestor',
        
      });
      
}

gestionar_pedido(){}

}

module.exports = Gestor;