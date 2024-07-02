const express = require("express")
const sql = require("mysql2")
const cors = require("cors")
const bodyParser = require("body-parser")
require("dotenv").config()

const app = express()
app.use(cors())
app.use(bodyParser.json())

const db = sql.createConnection({
    host:       process.env.MYSQL_HOST,
    user:       process.env.MYSQL_USER,
    password:   process.env.MYSQL_PASSWORD,
    database:   process.env.MYSQL_DATABASE
})

app.listen(8080, () => {
    console.log("Listening on part 8080.")
})