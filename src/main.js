import { createApp } from 'vue'
import { VueReCaptcha } from 'vue-recaptcha-v3' //
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)

// Register the reCAPTCHA plugin with your Site Key from Google Admin Console
app.use(VueReCaptcha, { 
  siteKey: '6Le22UksAAAAAMpxA41UfWVyoQ9RAc55WUIoSKiR', //
  loaderOptions: {
    autoHideBadge: true // Optional: hides the floating reCAPTCHA icon
  }
})

app.use(router)
app.mount('#app')