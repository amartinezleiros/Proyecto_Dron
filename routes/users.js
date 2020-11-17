var express = require('express');
var Usuario = require('../model/usuario');
var Pedido = require('../model/pedido');
const Farmaco = require('../model/farmaco');
const Asignacion = require('../model/asignacion');


var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let usuarios = await Usuario.findAll();
  res.render("userlist", {usuarios});
});



router.get('/:id', async function (req, res) {
  let id = req.params.id;
  try { 
    let usuario = await Usuario.findByPk(id, {include:Pedido});
    res.render("pedido-lista", {usuario});  
  } catch(err) {
    res.render("error");
  }
})

router.post('/:id/nuevo-pedido', async function(req, res) {
  let id = req.params.id;
  let pedido = new Pedido({UsuarioId:id});
      await pedido.save();
      res.redirect("/users/" + id + "/pedidos/" + pedido.id);
});

router.get("/:id/pedidos/:pedidoid", async function(req, res) {
  let id = req.params.id;
  let pedidoid = req.params.pedidoid;
  let usuario = req.session.usuario;
  try { 
    console.log({pedidoid});
    let pedido = await Pedido.findByPk(pedidoid, {
      include: [
        {model: Asignacion, include:[Farmaco]}
      ]
    });
    console.log(pedido);
    let farmaco = await Farmaco.findAll();
    res.render("pedido-form", {pedido, farmaco, usuario});  
  } catch(err) {
    res.render("error", {message:err.message});
  }
})

router.post("/:id/pedidos/:pedidoid", async function(req, res) {
  let id = req.params.id;
  let usuarioid = req.session.usuario.id;
  let PedidoId = parseInt (req.params.pedidoid);
  let FarmacoId = parseInt (req.body.farmaco);
  let cantidad = parseInt (req.body.cantidad);
  let asignacion = new Asignacion( {FarmacoId, cantidad, PedidoId});
  console.log(asignacion);
      await asignacion.save();
  try { 
    let pedido = await Pedido.findByPk(PedidoId, {
      include: [
        {model: Asignacion, include:[Farmaco]}
      ]
    });
    console.log(pedido);
    let farmaco = await Farmaco.findAll();
    res.redirect("/users/" + usuarioid + "/pedidos/" + PedidoId) 
  } catch(err) {
    res.render("error", {message:err.message});
  }
})

router.post("/:usuarioid/nuevo-pedido/:pedidoid/checkout",  function (req, res) {
  let usuarioid = req.params.usuarioid;
  let pedidoid = req.params.pedidoid;
  res.render ("checkout", {usuarioid, pedidoid});
})









module.exports = router;
