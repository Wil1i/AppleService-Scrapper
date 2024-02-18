const passport = require("passport")

const get = (req, res) => {
    res.render("login", {flash : req.flash(), user : req.user})
}

const post = passport.authenticate("local", {
    failureFlash : true,
    failureRedirect : "/login",
    session : true,
    successRedirect: "/"
})

const loginSuccess = (req, res) => {
    res.redirect(req.session.redirectTo || "/")
    delete req.session.redirectTo
}

module.exports = {
    get,
    post,
    loginSuccess
}