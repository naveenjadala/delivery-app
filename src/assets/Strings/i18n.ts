import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en_string.json';
import fr from './dt_string.json';

const resources = {
  en: { translation: en },
  fr: { translation: fr },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr', // Set the default language here
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;