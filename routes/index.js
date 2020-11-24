var express = require('express');
var Usuario = require('../model/usuario');
const { restart } = require('nodemon');
var router = express.Router();
var Pedido = require('../model/Pedido');

var router = express.Router();




/**
 * Render de la primera página (LOGIN)
 * Check si existen cookies en session
 * Si las hay te lleva a la pantalla principal de tu usuario
 * Si no, hace render del HTML login
 */
router.get('/', function(req, res, next) {
  let usuario = req.session.usuario;
  if (req.session.usuario = usuario) {
  res.redirect("/users/" + usuario.id);
  } else {
  res.render("login"); }
});




/**
 * Logearse con un botón que está dentro del HTML
 * Ese botón da un GET /logout
 * Borra las cookies y te lleva a login
 */
router.get("/logout", function (req, res) {
  req.session.usuario = undefined;
  res.render("login")
  })




  /**
 * En la página principal de GESTOR
 * El utilizar el CHECK para verificar el envio
 * Nos da este post que lo que hace es
 * Cambiar el estado de "No enviado" a "Enviado"
 *           NO FUNCIONA
 */
  router.post('/envio/:id', async function (req, res) {
    // Obtención de los datos del formulario
      let id = req.params.id;
      let pedido = await Pedido.findByPk(id);
      pedido.estado = "enviado";
      await pedido.save();
      let usuario = req.session.usuario;
      res.redirect("/users/" + usuario.id);
})


/**
 * Login si no tienes cookies
 * Coge los datos email y password con el POST a traves del HTML
 * Los compara con la base de datos y si concuerdan con la BD
 * Te logea y te lleva a la pág principal de tu usuario
 * En caso de ser los datos incorrectos, redirije a login marcando el ERROR.
 */
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




/**
 * REGISTRO
 * Al obtener un GET /registro de la pagina principal
 * Da un render del HTML registro
 */
router.get('/registro', function (req, res) {
  res.render("registro");
})



/**
 * Coge los datos adquiridos del html registro mediante un POST
 * Comprueba que la password sea igual que repassword
 * Crea ese usuario nuevo en la base de datos y te lleva a login
 * Si hay fallo, te devuelve a registro mostrando el error
 */
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



/**
 * Obtenemos un GET /registrogestor
 * Nos da un render del HTML registrogestor
 */
router.get('/registrogestor', function (req, res) {
  res.render("registrogestor");
})



/**
 * Coge los datos adquiridos del html registro mediante un POST
 * Comprueba que la password sea igual que repassword
 * Crea un usuario GESTOR por defecto y te lleva a tu pagina principal
 * Si hay fallo, te devuelve a registrogestor mostrando el error
 */
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




/**
 * Obtenemos un GET /passwordlost del INDEX
 * Hace un render del HTML passwordlost
 */
router.get('/passwordlost', function (req, res, next) {
    res.render("passwordlost");
  });



module.exports = router;



