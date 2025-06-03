import { createApp, h } from 'vue';
import App from './App.vue';

// Pour le mode dev, charge un JSON de test
import resume from './resume.dev.json';

createApp({
  render: () => h(App, { resume })
}).mount('#app');