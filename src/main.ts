import 'primevue/resources/themes/aura-dark-amber/theme.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext'
import MenuBar from 'primevue/menubar'
import Avatar from 'primevue/avatar'

const app = createApp(App)
app.use(PrimeVue, { ripple: true })
app.component('InputText', InputText)
app.component('MenuBar', MenuBar)
// eslint-disable-next-line vue/multi-word-component-names
app.component('Avatar', Avatar)

app.use(router)
app.mount('#app')
