#!/usr/bin/env node
require('dotenv').config()
var express = require('express'),
app = express(),
port = process.env.PORT || process.argv[2] || 3000;
app.use(express.json());

app.listen(port, () => console.log(`server running at ${port}`))
