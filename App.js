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
if(argv== '-v' ||argv == '--version'){
    console.log( `${pck.version}`)
  process.exit(1);
}
else if (argv =='-h'|| argv == '--help') { // checking undifined args
    console.log(`
    Usage: octodays <Port> 
`);
}
else if (argv =='-i'|| argv == '--issue') { // checking undifined args
  console.log(`
  Issues at ${pck.bugs.url} 
`);
}

else if (argv =='-a'|| argv == '--author') { // checking undifined args
  console.log(`
  Author: ${pck.author} 
`);
}

else if (argv =='-d'|| argv == '--docs') { // checking undifined args
  console.log(`
  Docs at ${pck.homepage} 
`);}

else{
    app.listen(port, () => console.log(`server running at ${port}`))
}
app.get('/', (req, res) => {
    res.json({'info':'This is the octodays'})
})
app.get('/octodex', (req, res) => {
    var day = new Date().getDay()
    res.contentType('image/png').header('Cache-Control', 'no-cache,max-age=600').sendFile(path.resolve(path.resolve(__dirname,`assets/octets/${day}.png`)));
})
