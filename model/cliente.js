const { Sequelize, DataTypes, Model } = require('sequelize');
const Usuario = require('./Usuario')

class Cliente extends Usuario {
  // definiciones de atributos y métodos

  static init(sequelize) {
    Model.init({
        Ubicacion: {type: DataTypes.STRING, allowNull: false}
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