"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TranslationDutch_1 = require("./TranslationDutch");
const TranslationEnglish_1 = require("./TranslationEnglish");
class Translations {
    static GetTranslation(taal) {
        switch (taal) {
            case 'nl-NL':
                return new TranslationDutch_1.TranslationDutch();
            case 'en-EN':
                return new TranslationEnglish_1.TranslationEngels();
            default:
                return new TranslationDutch_1.TranslationDutch();
        }
    }
}
exports.Translations = Translations;
;
//# sourceMappingURL=Translations.js.map