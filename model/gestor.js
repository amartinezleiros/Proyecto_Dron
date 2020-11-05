const { Sequelize, DataTypes, usuario } = require('sequelize');

class gestor extends usuario {
  // definiciones de atributos y métodos

  static init(sequelize) {
    usuario.init({

      }, {
        sequelize,
        modelName: 'gestor',
        gestionar_pedido();
      });
      gestor.belongsTo(usuario);
}
}

module.exports = gestor;