"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url = require("url");
const fs = require("fs");
function renderHtml(path, res) {
    fs.readFile(path, null, function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('File not found!');
        }
        else {
            res.write(data);
        }
        res.end();
    });
}
function handleExports(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var path = url.parse(req.url).pathname;
    switch (path) {
        case '/':
            renderHtml('./blog.html', res);
            break;
        case '/about':
            renderHtml('./about.html', res);
            break;
        case '/d2':
            renderHtml('./d2.html', res);
            break;
        default:
            res.writeHead(404);
            res.write('Route not defined!');
            res.end();
            break;
    }
}
exports.handleExports = handleExports;
;
//# sourceMappingURL=app.js.map