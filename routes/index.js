var express = require('express');
var Usuario = require('../model/usuario');
var router = express.Router();

var router = express.Router();

router.get('/', function(req, res, next) {
  res.render("login");
});

router.get('/pedido-form', function(req, res, next) {
    res.render("pedido-form");
  });

  router.get('/pedido-lista', function(req, res, next) {
    res.render("pedido-lista");
  });
  


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
        res.redirect("/usuario/:id"); 
    } else {
        res.render("login", {error: "Email o contraseña incorrectos"});
    }
})

router.get('/passwordlost', function (req, res, next) {
    res.render("passwordlost");
  });

  router.get('/registro', function (req, res, next) {
    res.render("registro");
  });


module.exports = router;
