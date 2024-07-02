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
    console.log("Listening on port 8080.\nhttp://localhost:8080")
})

// defualt route return all career data
app.get('/', (req, res) => {
    db.query(`SELECT * FROM Careers`, (err,data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

// finds and returns specific career data from title
app.get('/getCareers', (req, res) => {
    db.query(`SELECT * FROM Careers WHERE id=${req.body.id}`, (err,data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

// finds and returns all weapon data for a given career
app.get('/getWeapons', (req, res) => {
    // query includes 2 joins to connect 3 tables
    const query = `SELECT weapons.weapon_name, weapons.weapon_type 
        FROM weapons, career_weapons, careers 
        WHERE careers.id = career_weapons.career_id and 
        career_weapons.weapon_id = weapons.id and
        careers.id = ${req.body.id}`
    db.query(query, (err,data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

// finds and returns all talent data for specified career
app.get('/getTalents', (req, res) => {
    db.query(`SELECT * FROM Talents WHERE career_id='${req.body.id}'`, (err,data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})