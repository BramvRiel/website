import http = require('http');
import fs = require('fs');
import app = require('./app');

var port = process.env.port || 20010
http.createServer(app.handleExports).listen(port);
