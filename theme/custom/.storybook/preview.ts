import '../style.css';
import type { Preview } from '@storybook/react';
import i18n from './i18next';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
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
