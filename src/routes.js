const express = require('express');
var routes = express.Router();
require('dotenv/config');
routes
.get('/teste', async function (req, res, next){return res.json("teste")})


module.exports = routes;