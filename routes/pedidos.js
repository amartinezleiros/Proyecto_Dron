var express = require('express');
var router = express.Router();

//Mostrar formulario de pedido
router.get('/nuevo', function(req, res) {
  res.render("pedido-form");
});

module.exports = router;