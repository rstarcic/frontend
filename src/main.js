import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify.js'
import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.VUE_APP_SERVER_URL, 
    timeout: 600000,
});

apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.authorization = `Bearer ${token}`;
        console.log('Interceptor Header:', config.headers.authorization);
    }
    return config;
});


const app = createApp(App);

app.config.globalProperties.$apiClient = apiClient;

app.use(vuetify);
app.use(router);

app.mount('#app')
