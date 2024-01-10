import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify.js'
import axios from 'axios';

const apiClient = axios.create({
    baseURL: `${process.env.VUE_APP_BASEURL}:${process.env.VUE_APP_PORT}`, 
    timeout: 600000,
});

apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

const app = createApp(App);

app.config.globalProperties.$apiClient = apiClient;

app.use(vuetify);
app.use(router);

app.mount('#app')
