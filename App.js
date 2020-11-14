#!/usr/bin/env node
require('dotenv').config()
var express = require('express'),
port = process.env.PORT || process.argv[2] || 3000;