import '../style.css';
import type { Preview } from '@storybook/react-vite';
import i18n from './i18next';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    
    i18n,
  },
  initialGlobals: {
    locale: 'en',
    locales: {
      en: { title: 'English' },
      fr: { title: 'Français' },
    },
  },
};

export default preview;
