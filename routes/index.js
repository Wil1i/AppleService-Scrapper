let {Router} = require("express")
const { isUserLoggedIn, isUserNotLoggedIn } = require("../utils/auth")

Router = new Router()

const homePageController = require("../controllers/homePageController")
Router.get("/", isUserLoggedIn, homePageController.get)

const loginController = require("../controllers/loginController")
Router.get("/login", loginController.get)
Router.post("/login", loginController.post)

const addUserController = require("../controllers/addUserController")
Router.get("/register", addUserController.get)
Router.post("/register", addUserController.post)

module.exports = Router