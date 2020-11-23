function necesitaAutenticacion(req, res, next) {
    if (req.session.usuario) next();
    else res.redirect("/");
}

function necesitaAdmin(req, res, next) {
    if (req.session.usuario && req.session.usuario.rol === "administrador") next();
    else res.redirect("/");
}

function necesitaGestor(req, res, next) {
    if (req.session.usuario && req.session.usuario.rol === "gestor") next();
    else res.redirect("/");
}


module.exports = { necesitaAutenticacion, necesitaAdmin, necesitaGestor };