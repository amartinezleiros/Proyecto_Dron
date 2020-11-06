const {Sequelize, Model} = require('sequelize'); 
const Admin = require('./model/Admin');
const Cliente = require('./model/Cliente');
const Farmaco = require('./model/Farmaco');
const Gestor = require('./model/Gestor');
const Pedido = require('./model/Pedido');
const Usuario = require('./model/Usuario');
 

const connection = new Sequelize('mariadb://root:maria123@localhost:3306/FARMADRON');

connection.authenticate().then(() => { 
    
 
    Farmaco.init(connection); 
    Pedido.init(connection);  
    Usuario.init(connection); 

    Usuario.hasMany(Pedido);
    Pedido.belongsTo(Usuario);
    Farmaco.belongsToMany(Pedido, { through: 'Asignacion' });

    connection.sync();

    }) .catch(err => {   
    
    console.log(err);
});



    