"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TranslationNederlands_1 = require("./TranslationNederlands");
const TranslationEnglish_1 = require("./TranslationEnglish");
class Translations {
    static GetTranslation(taal) {
        switch (taal) {
            case 'nl-NL':
                return new TranslationNederlands_1.TranslationNederlands();
            case 'en-EN':
                return new TranslationEnglish_1.TranslationEngels();
            default:
                return new TranslationNederlands_1.TranslationNederlands();
        }
    }
}
exports.Translations = Translations;
;
//# sourceMappingURL=Translations.js.map