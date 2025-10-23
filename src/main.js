import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useTheme } from './composables/useTheme'
import './styles/tailwind.css'

const app = createApp(App)

// Initialize theme on app start
const { initTheme } = useTheme()
initTheme()

app.use(router)

app.mount('#app')
