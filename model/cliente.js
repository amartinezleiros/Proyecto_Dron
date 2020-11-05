const { Sequelize, DataTypes, usuario } = require('sequelize');
const Usuario = require('./Usuario')

class Cliente extends Usuario {
  // definiciones de atributos y métodos

  static init(sequelize) {
    usuario.init({
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