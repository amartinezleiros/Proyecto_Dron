var express = require("express");
var Usuario = require("../model/usuario");
var Pedido = require("../model/pedido");
const Farmaco = require("../model/farmaco");
const Asignacion = require("../model/asignacion");
const auth = require("../routes/auth");

var router = express.Router();

/**
 * MUESTRA UNA LISTA DE TODOS LOS USUARIOS
 * Al obtener un GET /users
 * Coge todos los datos de los usuarios en base de datos
 * Y hace un render del HTML userlist mostrando los datos
 */
router.get("/", async function (req, res, next) {
  let usuarios = await Usuario.findAll();
  res.render("userlist", { usuarios });
});

/**
 * SIMULA QUE LA 'FALSA' TRANSACCION HA SIDO CORRECTA
 * Obtenemos un GET /redir
 * Hace el render del HTML pagado
 */
router.get("/redir", function (req, res) {
  res.render("pagado");
});

/**
 * PÁGINA PRINCIPAL DE CADA USUARIO
 * Coge ID del usuario logeado con req.params.id y lo mete en una variable 'id'
 * Variables usuario(cliente), Pedidos(gestor), Pedidos1(administrador) son las encargadas de coger los datos requeridos
 * de la base de datos para ser utilizadas en el HTML según el ROL de cada uno
 * Variables cliente, admin y gestor son para que el HTML compruebe sus condicionales con estas variables
 * Hace el render de Pedido-lista el cual tiene condicionales y se abrirá una cosa u otra segun las variables anteriormente mencionadas
 * En caso de fallo muestra un error.
 */
router.get("/:id", async function (req, res) {
  let id = req.params.id;
  try {
    let usuario = await Usuario.findByPk(id, { include: Pedido });
    let Pedidos = await Pedido.findAll({ where: { estado: "No enviado" } });
    let Pedidos1 = await Pedido.findAll();
    let cliente = usuario.rol == "cliente";
    let admin = usuario.rol == "administrador";
    let gestor = usuario.rol == "gestor";
    res.render("pedido-lista", {
      usuario,
      cliente,
      admin,
      gestor,
      Pedidos,
      Pedidos1,
    });
  } catch (err) {
    res.render("error");
  }
});

/**
 * GENERAR UN NUEVO PEDIDO Y LLEVARNOS A LA PAGINA PARA HACERLO
 * Obtenemos un POST users/:id/nuevo-pedido
 * Donde el ID será el propio del usuario y conseguido mediante req.params.id
 * Con la variable pedido se genera un pedido nuevo en la base de datos
 * Nos redirije a /users/iduser/pedidos/pedidoid
 */
router.post("/:id/nuevo-pedido", async function (req, res) {
  let id = req.params.id;
  let pedido = new Pedido({ UsuarioId: id });
  await pedido.save();
  res.redirect("/users/" + id + "/pedidos/" + pedido.id);
});

/**
 * MOSTRAR PÁGINA PARA REALIZAR PEDIDO Y QUE VAYA MOSTRANDO LO QUE VAMOS PIDIENDO
 * Tras obtener un get /users/:id/pedidos/:pedidoid
 * Coge el :id con req.params.id
 * Coge :pedidoid con req.params.pedidoid
 * Dentro de la variable usuario mete los datos de session del usuario
 * En la variable pedido metemos los datos que en la vista asignacion están relacionados con el id de ese pedido mediante findByPk
 * Hace un render del HTML pedido-form mandandole los datos antes obtenidos del pedido, los farmacos y el usuario
 * En caso de error, saldrá un mensaje de error
 */
router.get("/:id/pedidos/:pedidoid", async function (req, res) {
  let id = req.params.id;
  let pedidoid = req.params.pedidoid;
  let usuario = req.session.usuario;
  try {
    console.log({ pedidoid });
    let pedido = await Pedido.findByPk(pedidoid, {
      include: [{ model: Asignacion, include: [Farmaco] }],
    });
    console.log(pedido);
    let farmaco = await Farmaco.findAll();
    res.render("pedido-form", { pedido, farmaco, usuario });
  } catch (err) {
    res.render("error", { message: err.message });
  }
});

/**
 * METER MEDICAMENTOS EN NUESTRO PEDIDO
 * Con la variable asignacion crea una nueva asignacion según los datos que le hayamos dado en el HYML y que obtiene con las variables PedidoId, FarmacoId, cantidad.
 * Nos redirije a la anterior función
 * En caso de error, nos lo muestra
 */
router.post("/:id/pedidos/:pedidoid", async function (req, res) {
  let id = req.params.id;
  let usuarioid = req.session.usuario.id;
  let PedidoId = parseInt(req.params.pedidoid);
  let FarmacoId = parseInt(req.body.farmaco);
  let cantidad = parseInt(req.body.cantidad);
  let asignacion = new Asignacion({ FarmacoId, cantidad, PedidoId });
  console.log(asignacion);
  await asignacion.save();
  try {
    res.redirect("/users/" + usuarioid + "/pedidos/" + PedidoId);
  } catch (err) {
    res.render("error", { message: err.message });
  }
});

/**
 * PROCEDER AL PAGO DEL PEDIDO
 * Tras darle al boton confirmar pedido
 * Hace un render de checkout
 */
router.post("/:usuarioid/nuevo-pedido/:pedidoid/checkout", function (req, res) {
  let usuarioid = req.params.usuarioid;
  let pedidoid = req.params.pedidoid;
  res.render("checkout", { usuarioid, pedidoid });
});

module.exports = router;
