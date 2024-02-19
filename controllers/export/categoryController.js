const get = (req, res) => {
    res.render("export/category", {
        user : req.user,
        flash : req.flash()
    })
}

const post = (req, res) => {

}

module.exports = {
    get,
    post
}