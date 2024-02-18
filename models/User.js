const db = require("../configs/db")
const bcrypt = require("bcrypt")
const { DataTypes } = require("sequelize")

const User = db.define("users", {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },

    username : {
        type : DataTypes.TEXT
    },

    password : {
        type : DataTypes.TEXT
    }
})

User.sync()

User.validPassword = function (user, password) {
    return bcrypt.compareSync(password, user.password)
}

User.encryptPassword = async (password) => {
    const salt = bcrypt.genSaltSync(10)
    const hash = await bcrypt.hashSync(password, salt)
    return hash
}

module.exports = User