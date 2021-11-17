import { createApp } from 'vue'
import App from './App.vue'
import getSecrets from '@netlify/functions'

Vue.use(getSecrets)

createApp(App).mount('#app')
