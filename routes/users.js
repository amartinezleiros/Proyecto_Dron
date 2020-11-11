var express = require('express');
var Usuario = require('../model/usuario');


var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let usuarios = await Usuario.findAll();
  res.render("listado-usuarios", {usuarios});
});

router.get('/nuevo', function (req, res) {
  res.render("alta-usuario");
})

router.post('/nuevo', async function (req, res) {
    // Obtención de los datos del formulario
    let {nombre, apellidos, email, password, repassword, ubicacion, rol} = req.body;

    if (password == repassword) {
      let usuario = new Usuario({nombre, apellidos, email, password, ubicacion, rol});
      await usuario.save();
      res.redirect("/usuarios");
    } else {
      //TODO: mostrar error
    }
})


router.get('/:id', function (req, res) {
  res.render("detalle-usuario");  
})

router.post('/:id', function (req, res) {
  
})



module.exports = router;
