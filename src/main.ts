import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import { VApp, VNavigationDrawer, VBtn, VIcon, VAppBar, VContainer, VMain } from 'vuetify/components'
import 'vuetify/styles'

import router from './router' // <-- ДОДАТИ

const vuetify = createVuetify({
  components: {
    VApp,
    VNavigationDrawer,
    VBtn,
    VIcon,
    VAppBar,
    VContainer,
    VMain,
  },
})

createApp(App)
  .use(vuetify)
  .use(router) // <-- ДОДАТИ
  .mount('#app')





