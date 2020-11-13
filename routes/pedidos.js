var express = require('express');
var router = express.Router();

router.get('/', async function(req, res) {
  let pedidos = await("pedidos");

  
});

//Mostrar formulario de pedido
router.get('/nuevo', function(req, res) {
  res.render("pedido-form");
});

router.post('/nuevo', function(req, res) {
  res.redirect("/:id");
});
module.exports = router;