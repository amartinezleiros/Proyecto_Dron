const {Sequelize, Model} = require('sequelize'); 
const Admin = require('./model/Admin');
const Cliente = require('./model/Cliente');
const Farmaco = require('./model/Farmaco');
const Gestor = require('./model/Gestor');
const Pedido = require('./model/Pedido');
const Usuario = require('./model/Usuario');
 

const connection = new Sequelize('mariadb://root:maria123@localhost:3306/FARMADRON');

connection.authenticate().then(() => { 
    
    Admin.init(connection); 
    Cliente.init(connection); 
    Farmaco.init(connection); 
    Gestor.init(connection); 
    Pedido.init(connection); 
    Usuario.init(connection); 
    

    Admin.belongsTo(usuario);
    Cliente.belongsTo(usuario);
    Farmaco.belongsTo(pedido);
    Gestor.belongsTo(usuario);
    Usuario.hasMany(pedido);
    Pedido.belongsTo(usuario);

    model.sync(); }) .catch(err => {   
    
    console.log(err);
});

    