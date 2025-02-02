import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "react-native-localize";

import en from "./locales/en.json";
import ru from "./locales/ru.json";

// Get device language
const locales = getLocales();
const deviceLanguage = locales.length > 0 ? locales[0].languageCode : "en";

i18next.use(initReactI18next).init({
  compatibilityJSON: "v4", // Ensures compatibility with React Native
  lng: "ru", // Default language
  fallbackLng: "en", // Fallback if device language is not supported
  resources: {
    en: { translation: en },
    ru: { translation: ru },
  },
  interpolation: {
    escapeValue: false, // Not needed for React
  },
});

export default i18next;
