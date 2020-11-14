#!/usr/bin/env node
require('dotenv').config()
var express = require('express'),
app = express(),
path = require('path')
favicon = require('serve-favicon'),
port = process.env.PORT || process.argv[2] || 3000;
app.use(express.json());
app.use(favicon(path.join(__dirname, 'assets/icon/icon.png')))
app.get('/', (req, res) => {
    res.json({'info':'This is the octodays'})
})
app.get('/octodex', (req, res) => {
    var day = new Date().getDay()
    res.contentType('image/png').header('Cache-Control', 'no-cache,max-age=600').sendFile(path.resolve(path.resolve(__dirname,`assets/octets/${day}.png`)));

})
app.listen(port, () => console.log(`server running at ${port}`))
