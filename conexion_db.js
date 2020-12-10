require("dotenv").config();
const { Sequelize, Model, Association } = require("sequelize");
const Admin = require("./model/admin");
const Cliente = require("./model/cliente");
const Farmaco = require("./model/farmaco");
const Gestor = require("./model/gestor");
const Pedido = require("./model/pedido");
const Usuario = require("./model/usuario");
const Asignacion = require("./model/asignacion");

/* 'mariadb://root:maria123@localhost:3306/FARMADRON'
const connection = new Sequelize(process.env.DATABASE_URL); */

const connection = new Sequelize(
  "mariadb://root:maria123@localhost:3306/FARMADRON"
);

connection
  .authenticate()
  .then(() => {
    Farmaco.init(connection);
    Pedido.init(connection);
    Usuario.init(connection);
    Asignacion.init(connection);

    Usuario.hasMany(Pedido);
    Pedido.belongsTo(Usuario);
    Farmaco.belongsToMany(Pedido, { through: Asignacion });
    Pedido.hasMany(Asignacion);
    Asignacion.belongsTo(Farmaco);

    connection.sync();
  })
  .catch((err) => {
    console.log(err);
  });
