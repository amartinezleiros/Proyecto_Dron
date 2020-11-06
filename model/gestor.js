const { Sequelize, DataTypes, Model } = require('sequelize');
const Usuario = require('./Usuario')

class Gestor extends Model {
  // definiciones de atributos y métodos

  static init(sequelize) {
    super.init({

      }, {
        sequelize,
        modelName: 'Gestor',
        
      });
      
}

gestionar_pedido(
  
){}

}

module.exports = Gestor;