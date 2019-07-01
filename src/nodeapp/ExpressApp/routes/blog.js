"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET blog article.
 */
const express = require("express");
const markdown = require("markdown-it");
const fs = require("fs");
const router = express.Router();
const md = markdown("commonmark");
let article = null;
fs.readFile('./articles/article1.md', 'utf8', (_err, contents) => {
    if (_err) {
        console.log(_err);
    }
    else {
        article = md.render(contents);
    }
});
router.get('/', (req, res) => {
    res.render('blog/article', { title: 'My first article!', article: article });
});
exports.default = router;
//# sourceMappingURL=blog.js.map