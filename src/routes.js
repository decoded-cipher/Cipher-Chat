import Vue from 'vue'
import VueRouter from "vue-router";

import Login from './components/Login.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'Login',
            component: Login
        }
    ],
    mode: 'history'
})

export default router;