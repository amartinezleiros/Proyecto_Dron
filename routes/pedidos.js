var express = require('express');
const Pedido = require('../model/pedido');
var router = express.Router();

router.get('/', async function(req, res) {
  let pedidos = await Pedido.findAll();
  res.render("pedido-lista", {pedidos});

});

//Mostrar formulario de pedido
router.get('/nuevo', function(req, res) {
  res.render("pedido-form");
});

router.post('/nuevo', function(req, res) {
  res.redirect("/:id");
});
module.exports = router;