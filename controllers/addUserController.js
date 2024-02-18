const User = require("../models/User")
const config = require("../configs/config.json")

const get = (req, res) => {
    res.render("addUser", {
        flash : req.flash(),
        user : req.user,
    })
}

const post = async (req, res) => {
    if(!req.body.password || !req.body.mainPassword || !req.body.username) {
        req.flash("error", "مقادیر خواسته شده را کامل پر کنید.");
        return res.redirect("/register")
    }

    if(req.body.mainPassword == config.app.websitePassword){
        User.create({
            username : req.body.username,
            password : await User.encryptPassword(req.body.password)
        })
    }
    return res.redirect("/login")
}

module.exports = {
    get,
    post
}