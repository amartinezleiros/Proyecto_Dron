var express = require('express');
var Usuario = require('../model/usuario');
const { restart } = require('nodemon');
var router = express.Router();
var Pedido = require('../model/Pedido');

var router = express.Router();



router.get('/', function(req, res, next) {
  let usuario = req.session.usuario;
  if (req.session.usuario = usuario) {
  res.redirect("/users/" + usuario.id);
  } else {
  res.render("login"); }
});

router.get("/logout", function (req, res) {
  req.session.usuario = undefined;
  res.render("login")
  })

  router.post('/envio/:id', async function (req, res) {
    // Obtención de los datos del formulario
      let id = req.params.id;
      let pedido = await Pedido.findByPk(id);
      pedido.estado = "enviado";
      await pedido.save();
      let usuario = req.session.usuario;
      res.redirect("/users/" + usuario.id);
})



router.post('/',  async function (req, res) {
    let {email, password} = req.body;
    let usuario = await Usuario.findOne({
        attributes: ['id', 'email', 'nombre'],
        where: {
            email,
            password
        }
    });
    if (usuario) {
        req.session.usuario = usuario;
        res.redirect("/users/" + usuario.id);
    } else {
        res.render("login", {error: "Email o contraseña incorrectos"});
    }
})





router.get('/registro', function (req, res) {
  res.render("registro");
})

router.post('/registro', async function (req, res) {
    // Obtención de los datos del formulario
    let {nombre, apellidos, ubicacion, email, password, repassword} = req.body;

      if (password == repassword) {
      let usuario = new Usuario({nombre, apellidos, ubicacion, email, password, repassword});
      await usuario.save();
      res.redirect("/");
    } else {
      res.render("registro", {error: "Datos no válidos"});
       }
})

router.get('/registrogestor', function (req, res) {
  res.render("registrogestor");
})

router.post('/registrogestor', async function (req, res) {
    // Obtención de los datos del formulario
    let {rol, nombre, apellidos, email, password, repassword} = req.body;

      if (password == repassword) {
      let usuario = new Usuario({rol:"gestor",nombre, apellidos, email, password, repassword});
      await usuario.save();
      res.redirect("/");
    } else {
      res.render("registrogestor", {error: "Datos no válidos"});
       }
})





router.get('/passwordlost', function (req, res, next) {
    res.render("passwordlost");
  });

  router.get('/registro', function (req, res, next) {
    res.render("registro");
  });



module.exports = router;



