#!/usr/bin/env node
require('dotenv').config()
var express = require('express'),
app = express(),
path = require('path'),
pck = require('./package.json'),  
favicon = require('express-favicon'),
argv = process.argv[2],
port = process.env.PORT || argv || 3000;
app.use(express.json());
app.use(favicon(path.join(__dirname, 'assets/icon/icon.png')))
if(argv== '-v' || '--version'){
    console.log( `${pck.version}`)
  process.exit(1);
  }

app.get('/', (req, res) => {
    res.json({'info':'This is the octodays'})
})
app.get('/octodex', (req, res) => {
    var day = new Date().getDay()
    res.contentType('image/png').header('Cache-Control', 'no-cache,max-age=600').sendFile(path.resolve(path.resolve(__dirname,`assets/octets/${day}.png`)));
})
app.listen(port, () => console.log(`server running at ${port}`))
