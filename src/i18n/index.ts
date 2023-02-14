import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import langTrans, { LANGUAGES } from "./languages";

i18n.use(initReactI18next).init({
  resources: {
    ...langTrans,
  },
  lng: LANGUAGES.en,
  fallbackLng: LANGUAGES.cn,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
