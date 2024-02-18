const sequelize = require("sequelize")
const config = require("./config.json")

const db = new sequelize(config.db.name, config.db.username, config.db.password, {
    host : "localhost",
    dialect : "mysql"
})

try {
    db.authenticate()
    console.log("DataBase is running")
} catch (error) {
    console.log(`DataBase connection error `, e)
}

module.exports = db