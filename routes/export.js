let {Router} = require("express")
const { isUserLoggedIn } = require("../utils/auth")

Router = new Router()

const categoryController = require("../controllers/export/categoryController")
Router.get("/category",isUserLoggedIn, categoryController.get)
Router.post("/category", isUserLoggedIn, categoryController.post)

const searchController = require("../controllers/export/searchController")
Router.get("/search", isUserLoggedIn, searchController.get)
Router.post("/search", isUserLoggedIn, searchController.post)

module.exports = Router