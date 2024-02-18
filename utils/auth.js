const isUserLoggedIn = (req, res, next) => {
    if(!req.user) {
        req.flash("warning", "برای دیدن این صفحه وارد شوید")
        req.session.redirectTo = req.url
        return res.redirect("/login")
    }

    next()
}

const isUserNotLoggedIn = (req, res, next) => {
    if(req.user) return res.redirect("/dashboard")
    next()
}

module.exports = {
    isUserLoggedIn,
    isUserNotLoggedIn
}