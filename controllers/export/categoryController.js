const config = require("../../configs/config.json")

const get = (req, res) => {
    res.render("export/category", {
        user : req.user,
        flash : req.flash(),
        ip : config.app.ip
    })
}

const post = (req, res) => {

}

module.exports = {
    get,
    post
}