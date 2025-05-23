import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Router
import router from './router'

// Створення Vuetify з автоматичною реєстрацією компонентів
const vuetify = createVuetify({
  components,
  directives,
})

// Монтування
createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')



