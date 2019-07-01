/*
 * GET blog article.
 */
import express = require('express');
import markdown = require('markdown-it');
import fs = require('fs');

const router: express.Router = express.Router();
const md: markdown = markdown("commonmark");
let article: string = null;
let defaultarticle: string = null;
let defaultHHTML: string = null;
fs.readFile('./articles/default.md', 'utf8', (_err: NodeJS.ErrnoException, contents: string) => {
    if (_err) {
        console.log(_err);
    } else {
        defaultarticle = contents;
        defaultHHTML = md.render(defaultarticle);
        article = md.render(contents);
    }
});

router.get('/', (req: express.Request, res: express.Response) => {
    res.render('blog/article', { title: 'My first article!', article: article });
});
router.get('/edit', (req: express.Request, res: express.Response) => {
    res.render('blog/editor', { markdown: defaultarticle, html: defaultHHTML });
});

export default router;