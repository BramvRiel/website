"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET home page.
 */
const express = require("express");
const Menu_1 = require("../menu/Menu");
const Translations_1 = require("./../translations/Translations");
const router = express.Router();
router.get('/', (req, res) => {
    let menu = new Menu_1.Menu(Menu_1.Location.About);
    let ondersteundetalen = ['en-US', 'nl-NL'];
    ondersteundetalen.filter((a) => {
        return req.headers["accept-language"].indexOf(a) > -1;
    });
    let taal = ondersteundetalen.pop();
    res.render('index', Object.assign({}, Translations_1.Translations.GetTranslation(taal), menu));
});
exports.default = router;
//# sourceMappingURL=index.js.map