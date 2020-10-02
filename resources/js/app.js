require('./bootstrap');
import VueRouter from 'vue-router'
import Vuetify from 'vuetify';
import MainApp from "./components/admin/Dashboard";
import routes from './routes'
import axios from "axios";



window.Vue = require('vue');
Vue.use(Vuetify);
Vue.use(VueRouter)


const router = new VueRouter({
    mode:'history',
    routes // raccourci pour `routes: routes`
})

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('welcome', require('./components/Welcome.vue').default);

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    theme: { dark: true },
    router,
    components:{
        MainApp
    }
});
