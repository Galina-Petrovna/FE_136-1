import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json'
import ru from './locales/ru.json'

const resources = {
    en: {
        translation: en,
    },
    ru: {
        translation: ru,
    }
}

i18n 
  .use(initReactI18next) 
  .use(LanguageDetector) 
  .init({
    resources, 
    lng: JSON.parse(localStorage.getItem(LanguageDetector)),
    fallbackLng: 'ru', 
  });

export default i18n;