import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en.json";
import spTranslation from "./locales/sp.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    sp: {
      translation: spTranslation,
    },
  },
  lng: "sp",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
