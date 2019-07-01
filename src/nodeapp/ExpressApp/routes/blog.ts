/*
 * GET blog article.
 */
import express = require('express');
import markdown = require('markdown-it');
import fs = require('fs');

const router: express.Router = express.Router();
const md: markdown = markdown("commonmark");
let article: string = null;

fs.readFile('./articles/article1.md', 'utf8', (_err: NodeJS.ErrnoException, contents: string) => {
    if (_err) {
        console.log(_err);
    } else {
        article = md.render(contents);
    }
});

router.get('/', (req: express.Request, res: express.Response) => {
    res.render('blog/article', { title: 'My first article!', article: article });
});

export default router;