const { Sequelize, DataTypes, Model } = require('sequelize');
const Usuario = require('./Usuario')

class Admin extends Model {
  // definiciones de atributos y métodos

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