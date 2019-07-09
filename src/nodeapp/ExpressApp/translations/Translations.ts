import { TranslationDutch } from "./TranslationDutch";
import { TranslationEngels } from "./TranslationEnglish";

export class Translations {
    static GetTranslation(taal: string): object {
        switch (taal) {
            case 'nl-NL':
                return new TranslationDutch();
            case 'en-EN':
                return new TranslationEngels();
            default:
                return new TranslationDutch();
        }
    }
};