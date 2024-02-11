import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

/* import font awesome icon component */

createApp(App)
  .use(vuetify)
  .mount('#app')
