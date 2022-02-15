import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// translation files
import * as en from "./locales/en/translation.json";
import * as de from "./locales/de/translation.json";
import * as fr from "./locales/fr/translation.json";

// utility functions
import { userLanguage } from "./Utils/Utils";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en, de, fr
    },
    lng: userLanguage(),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });
