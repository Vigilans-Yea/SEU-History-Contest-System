import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Validator from 'vue-validator';
//import './components/login/validator.js';

Vue.use(VueRouter);
Vue.use(Validator);
//require('./components/login/validator.js')


const routes = [
 //   { path: '/image1', component: require('../Images/background1.jpg') },
    { path: '/', component: require('./components/home/home.vue.html') },
    { path: '/counter', component: require('./components/counter/counter.vue.html') },
    { path: '/fetchdata', component: require('./components/fetchdata/fetchdata.vue.html') },
    { path: '/login', component: require('./components/login/login.vue.html')  }
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue.html'))
});
