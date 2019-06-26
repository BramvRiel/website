"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const app = require("./app");
var port = process.env.port || 20010;
http.createServer(app.handleExports).listen(port);
//# sourceMappingURL=server.js.map