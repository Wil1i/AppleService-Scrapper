const express = require("express")
const bodyParser = require("body-parser")
const flash = require("connect-flash")
const session = require("express-session")
const cookieParser = require("cookie-parser")
const passport = require("passport")
const config = require("./configs/config.json")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(flash())
app.use(cookieParser())
app.use(session({secret : config.app.secret}))
app.use(express.static(__dirname + "/public"))
app.use(passport.initialize())
app.use(passport.session())

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")

require("./utils/passport")

const exportRoutes = require("./routes/export")
app.use("/export", exportRoutes)

const indexRoutes = require("./routes/index")
app.use("/", indexRoutes)

app.listen(config.app.port, () => {
    console.log(`App is running on port ${config.app.port}`)
})