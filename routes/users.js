var express = require('express');
var Usuario = require('../model/usuario');


var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let usuarios = await Usuario.findAll();
  res.render("userlist", {usuarios});
});

router.get('/registro', function (req, res) {
  res.render("registro");
})

router.post('/registro', async function (req, res) {
    // Obtención de los datos del formulario
    let {nombre, apellidos, ubicacion, email, password, repassword} = req.body;

    if (password == repassword) {
      let usuario = new Usuario({nombre, apellidos, ubicacion, email, password, repassword});
      await usuario.save();
      res.redirect("registro");
    } else {
       }
})


router.get('/usuario/:id', function (req, res) {
  res.render("detalle-usuario");  
})

router.post('/usuario/:id', function (req, res) {
  
})



module.exports = router;
