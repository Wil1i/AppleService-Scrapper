const config = require("../../configs/config.json")

const get = (req, res) => {
    res.render("export/search", {
        flash : req.flash(),
        user : req.user,
        ip : config.app.ip
    })
}

const post = (req, res) => {

}

module.exports = {
    get,
    post
}