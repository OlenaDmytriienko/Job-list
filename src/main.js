import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './style/index.css'
import About from './views/About.vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App)
app.use(router)
app.use(VueGoogleMaps, {
          load: {
              key: 'AIzaSyBTPkx0SxRvqEhXSVXXekMP8YAINm0xKhY',
              map_ids:"a309f534efc0feb2",
          },
})

router.isReady().then(() => {
          console.log('isReady');
          app.mount('#app')
})
// createApp(App).use(store).use(router).mount('#app')
