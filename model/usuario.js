const { Sequelize, DataTypes, Model } = require('sequelize');

class usuario extends Model {
  // definiciones de atributos y métodos

    static init(sequelize) {
        Model.init({
            nombre: {type: DataTypes.STRING, allowNull: false},
            apellidos: {type: DataTypes.STRING},
            email: {type: DataTypes.STRING, unique: true, allowNull: false}, 
            password: {type: DataTypes.STRING},
            rol: {type: DataTypes.ENUM("cliente", "administrador", "gestor")}
          }, {
            sequelize,
            modelName: 'usuario'
          });
          
    }
  }
  module.exports = usuario;



