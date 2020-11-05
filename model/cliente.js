const { Sequelize, DataTypes, usuario } = require('sequelize');

class cliente extends usuario {
  // definiciones de atributos y métodos

  static init(sequelize) {
    usuario.init({
        Ubicacion: {type: DataTypes.STRING, allowNull: false}
      }, {
        sequelize,
        modelName: 'cliente',
        ver_pedido_propio();,
        modificar_perfil();,
        hacer_pedido();
      });
      
}
}

module.exports = cliente;