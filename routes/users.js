var express = require('express');
var Usuario = require('../model/usuario');


var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let usuarios = await Usuario.findAll();
  res.render("userlist", {usuarios});
});


router.get('/:id', async function (req, res) {
  let id = req.params.id;
  try { 
    let usuario = await Usuario.findByPk(id);
    res.render("pedido-lista", {usuario});  
  } catch(err) {
    res.render("error");
  }
})

router.post('/id', function (req, res) {
  
})



module.exports = router;
