// plugins/vuetify.js
import * as directives from 'vuetify/directives';
import * as components from 'vuetify/components';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

const vuetify = createVuetify({
  components,
  directives,

  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme: {
        dark: false,
        colors: {
          primary: '#2952c3', // This color will be the primary color across the site
          secondary: '#f56a00', // This color will be used for secondary elements and accents
          accent: '#ffd700', // For highlighting accent elements
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
          background: '#ffffff', // Default background color
        },
      },
    },
  },
});

export default vuetify;
