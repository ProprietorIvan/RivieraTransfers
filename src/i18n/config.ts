import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../../public/locales/en/common.json';
import fr from '../../public/locales/fr/common.json';
import it from '../../public/locales/it/common.json';

const resources = {
    en: { common: en },
    fr: { common: fr },
    it: { common: it },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n; 