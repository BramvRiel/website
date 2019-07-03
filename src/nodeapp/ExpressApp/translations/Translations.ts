import { TranslationNederlands } from "./TranslationNederlands";
import { TranslationEngels } from "./TranslationEnglish";

export class Translations {
    static GetTranslation(taal: string): object {
        switch (taal) {
            case 'nl-NL':
                return new TranslationNederlands();
            case 'en-EN':
                return new TranslationEngels();
            default:
                return new TranslationNederlands();
        }
    }
};