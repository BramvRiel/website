/*
 * GET home page.
 */
import express = require('express');
import { Menu, Location } from '../menu/Menu';
import { Translations } from './../translations/Translations';
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    let menu = new Menu(Location.About);
    let ondersteundetalen = ['en-US', 'nl-NL'];
    ondersteundetalen.filter((a) => {
        return req.headers["accept-language"].indexOf(a) > -1;
    });
    let taal = ondersteundetalen.pop();
    res.render('index', { ...Translations.GetTranslation(taal), ...menu });
});

export default router;