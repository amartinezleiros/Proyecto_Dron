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
      
}
}

module.exports = gestor;