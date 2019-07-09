/*
 * GET blog article.
 */
import express = require('express');
import markdown = require('markdown-it');
import fs = require('fs');

import { Menu, Location } from '../menu/Menu';
import { promisify } from 'util';
let menu = new Menu(Location.Blog);

const router: express.Router = express.Router();
const md: markdown = markdown();
md.use(require('markdown-it-highlightjs'));
md.renderer.rules.table_open = function (tokens, idx, options, env, self) {
    var token = tokens[idx];
    token.attrPush(['class', 'table table-sm table-striped table-bordered']);
    return self.renderToken(tokens, idx, options);
};
let defaultarticle: string = null;
let defaultHHTML: string = null;
fs.readFile('./articles/default.md', 'utf8', (_err: NodeJS.ErrnoException, contents: string) => {
    if (_err) {
        console.log(_err);
    } else {
        defaultarticle = contents;
        defaultHHTML = md.render(defaultarticle);
    }
});

const readFile = promisify(fs.readFile);

async function GetMd(filename: string): Promise<string> {
    let article: string = null;
    article = md.render((await readFile('./articles/' + filename, 'utf-8')).replace(/^\uFEFF/, ''));
    return article;
}

router.get('/', (req: express.Request, res: express.Response) => {
    res.render('blog/index', { ...menu });
});
router.get('/articles/:md', async (req: express.Request, res: express.Response) => {
    let article: string = await GetMd(req.params.md);
    await res.render('blog/article', { ...menu, ...{ title: 'My first article!', article: article } });
});
router.get('/edit', (req: express.Request, res: express.Response) => {
    res.render('blog/editor', { ...menu, ...{ markdown: defaultarticle, html: defaultHHTML } });
});

export default router;