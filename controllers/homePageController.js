const get = (req, res) => {
    res.render("homePage", {
        flash : req.flash(),
        user : req.user
    })
}

module.exports = {
    get
}