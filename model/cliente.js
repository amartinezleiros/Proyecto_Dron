const { Sequelize, DataTypes, Model } = require('sequelize');
const Usuario = require('./Usuario')


class Cliente extends Model {
  // definiciones de atributos y métodos

  static init(sequelize) {
    super.init({
        
      }, {
        sequelize,
        modelName: 'Cliente',
        
      });
      
}

ver_pedido_propio(){}
modificar_perfil(){}
hacer_pedido(){}

}

module.exports = Cliente;