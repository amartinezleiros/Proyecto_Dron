const { Sequelize, DataTypes, Model } = require('sequelize');



/**
 * CLASE Usuario
 * HEREDA DE Model
 * Atributo propio: nombre(string), apellidos(string), email(string), password(string), ubicacion(string), rol(enum).
 */
class Usuario extends Model {
  // definiciones de atributos y métodos

    static init(sequelize) {
      
        super.init({
            nombre: {type: DataTypes.STRING, allowNull: false},
            apellidos: {type: DataTypes.STRING},
            email: {type: DataTypes.STRING, unique: true, allowNull: false}, 
            password: {type: DataTypes.STRING},
            ubicacion: {type: DataTypes.STRING, allowNull: true},
            rol: {type: DataTypes.ENUM("cliente", "administrador", "gestor"), defaultValue:"cliente"}
          }, {
            sequelize,
            modelName: 'Usuario'
          });
          
        
          
    }
  }
  module.exports = Usuario;



