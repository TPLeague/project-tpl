// plugins/vuetify.js
import * as directives from 'vuetify/directives';
import * as components from 'vuetify/components';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Ensure the Vuetify styles are imported
import {
  VExpansionPanel,
  VExpansionPanelTitle,
  VExpansionPanelText,
} from 'vuetify/components';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme: {
        dark: false,
        colors: {
          primary: '#2952c3',
          secondary: '#f56a00',
          accent: '#ffd700',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
          background: '#ffffff',
        },
        components: {
          VExpansionPanel,
          VExpansionPanelTitle,
          VExpansionPanelText,
          // ... other components
        },
      },
    },
  },
});

export default vuetify;
