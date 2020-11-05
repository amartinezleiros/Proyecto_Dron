const { Sequelize, DataTypes, usuario } = require('sequelize');

class admin extends usuario {
  // definiciones de atributos y métodos

  static init(sequelize) {
    usuario.init({

      }, {
        sequelize,
        modelName: 'admin',
        alta_cliente();,
        ver_pedido();
      });
      
}
}

module.exports = admin;