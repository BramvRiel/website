"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET blog article.
 */
const express = require("express");
const markdown = require("markdown-it");
const fs = require("fs");
const Menu_1 = require("../menu/Menu");
const util_1 = require("util");
let menu = new Menu_1.Menu(Menu_1.Location.Blog);
const router = express.Router();
const md = markdown();
md.use(require('markdown-it-highlightjs'));
md.renderer.rules.table_open = function (tokens, idx, options, env, self) {
    var token = tokens[idx];
    token.attrPush(['class', 'table table-sm table-striped table-bordered']);
    return self.renderToken(tokens, idx, options);
};
let defaultarticle = null;
let defaultHHTML = null;
fs.readFile('./articles/default.md', 'utf8', (_err, contents) => {
    if (_err) {
        console.log(_err);
    }
    else {
        defaultarticle = contents;
        defaultHHTML = md.render(defaultarticle);
    }
});
const readFile = util_1.promisify(fs.readFile);
function GetMd(filename) {
    return __awaiter(this, void 0, void 0, function* () {
        let article = null;
        article = md.render((yield readFile('./articles/' + filename, 'utf-8')).replace(/^\uFEFF/, ''));
        return article;
    });
}
router.get('/', (req, res) => {
    res.render('blog/index', Object.assign({}, menu));
});
router.get('/articles/:md', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let article = yield GetMd(req.params.md);
    yield res.render('blog/article', Object.assign({}, menu, { title: 'My first article!', article: article }));
}));
router.get('/edit', (req, res) => {
    res.render('blog/editor', Object.assign({}, menu, { markdown: defaultarticle, html: defaultHHTML }));
});
exports.default = router;
//# sourceMappingURL=blog.js.map