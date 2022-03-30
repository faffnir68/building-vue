import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'

<<<<<<< HEAD:src/main.js
const GStore = reactive({
  flashMessage: ""
});

createApp(App)
  .use(store)
  .use(router)
  .provide('GStore', GStore)
  .mount('#app')
=======
createApp(App).use(router).mount('#app')
>>>>>>> 29db37f744f631d6c28930b345c84d3a7a1b2021:1-tasks-tracker/src/main.ts
