const express=require('express');
const route = require('./routes/routes')
const bodyParser = require('body-parser');
const responseTime = require('response-time')
const dotenv=require('dotenv').config();



const mysctKey = process.env.Secret_Key;

const jwt=require('jsonwebtoken');

const app=express();
app.use(express.json());



/**
 * Configuring the database.
 */
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");

    next();
});

app.use(bodyParser.urlencoded({ extended: true }))
/**
 * parse application/json
 */
app.use(bodyParser.json());
var expressValidator = require('express-validator');
app.use(expressValidator());
var cors = require('cors')
app.use(responseTime());
app.use(cors())
app.use('/', route);
app.get('/', (req, res) => {
    res.json({ "message": "welcome to Farmconnect" });
});

app.listen(process.env.Port, () =>
console.log('server running at http://localhost:'+process.env.Port)


);

module.exports = app;