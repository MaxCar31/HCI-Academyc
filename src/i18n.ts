import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa los archivos de traducción
import translationES from './locales/es/translation.json';
import translationTR from './locales/tr/translation.json';

// Configuración de i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: translationES,
      },
      tr: {
        translation: translationTR,
      },
    },
    lng: 'es', 
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;