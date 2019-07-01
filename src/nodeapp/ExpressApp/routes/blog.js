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
let defaultarticle = null;
let defaultHHTML = null;
fs.readFile('./articles/default.md', 'utf8', (_err, contents) => {
    if (_err) {
        console.log(_err);
    }
    else {
        defaultarticle = contents;
        defaultHHTML = md.render(defaultarticle);
        article = md.render(contents);
    }
});
router.get('/', (req, res) => {
    res.render('blog/article', { title: 'My first article!', article: article });
});
router.get('/edit', (req, res) => {
    res.render('blog/editor', { markdown: defaultarticle, html: defaultHHTML });
});
exports.default = router;
//# sourceMappingURL=blog.js.map