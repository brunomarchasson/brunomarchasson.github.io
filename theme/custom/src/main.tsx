import { createRoot } from 'react-dom/client';
import { Resume } from './Resume';
import resumeData from './storyResume.json';
import '../style.css';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './translations.json';

i18n
  .use(initReactI18next)
  .init({
    resources: translations,
    lng: 'fr',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Resume {...resumeData} />);
