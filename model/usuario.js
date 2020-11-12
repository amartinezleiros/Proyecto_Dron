const { Sequelize, DataTypes, Model } = require('sequelize');

class Usuario extends Model {
  // definiciones de atributos y métodos

    static init(sequelize) {
      
        super.init({
            nombre: {type: DataTypes.STRING, allowNull: false},
            apellidos: {type: DataTypes.STRING},
            email: {type: DataTypes.STRING, unique: true, allowNull: false}, 
            password: {type: DataTypes.STRING},
            ubicacion: {type: DataTypes.STRING, allowNull: true},
            rol: {type: DataTypes.ENUM("cliente", "administrador", "gestor")}
          }, {
            sequelize,
            modelName: 'Usuario'
          });
          
        
          
    }
  }
  module.exports = Usuario;



