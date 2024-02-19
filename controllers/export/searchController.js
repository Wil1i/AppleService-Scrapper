const get = (req, res) => {
    res.render("export/search", {
        flash : req.flash(),
        user : req.user
    })
}

const post = (req, res) => {

}

module.exports = {
    get,
    post
}