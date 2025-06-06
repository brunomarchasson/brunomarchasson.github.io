import { createRoot } from 'react-dom/client';
import '../style.css';

import { App } from './app';

// i18n
//   .use(initReactI18next)
//   .init({
//     resources: translations,
//     lng: 'fr',
//     fallbackLng: 'en',
//     interpolation: { escapeValue: false },
//   });

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
