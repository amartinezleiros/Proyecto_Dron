const { Sequelize, DataTypes, Model } = require('sequelize');
const Usuario = require('./Usuario')


/**
 * CLASE Cliente
 * HEREDA DE Usuario
 * Atributo propio: ubicacion(string)
 * Funciones propias: ver_pedido_propio(), hacer_pedido().
 */
class Cliente extends Usuario {

  static init(sequelize) {
    super.init({
        Ubicacion: {type: DataTypes.STRING, allowNull: false}
      }, {
        sequelize,
        modelName: 'Cliente',
        
      });
      
}

ver_pedido_propio(){}
hacer_pedido(){}

}

module.exports = Cliente;