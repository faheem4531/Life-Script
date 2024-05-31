import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en.json";
import spTranslation from "./locales/sp.json";


// Check for language preference in local storage
const storedLanguage =
  typeof window !== "undefined" ? localStorage.getItem("language") : null;

// Set the default language based on local storage or fallback to "en"
const defaultLanguage = storedLanguage === "Spanish" ? "sp" : "en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    sp: {
      translation: spTranslation,
    },
  },
  // lng: defaultLanguage,
  lng: 'en',
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});


export default i18n;



// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// import enTranslation from "./locales/en.json";
// import spTranslation from "./locales/sp.json";

// i18n.use(initReactI18next).init({
//   resources: {
//     en: {
//       translation: enTranslation,
//     },
//     sp: {
//       translation: spTranslation,
//     },
//   },
//   lng: "en",
//   fallbackLng: "en",
//   interpolation: {
//     escapeValue: false,
//   },
// });

// export default i18n;
