import Vue from 'vue'
import VueRouter from "vue-router";

import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'
import Chat from './components/Chat.vue'
import Profile from './components/Profile.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/signup',
            name: 'SignUp',
            component: SignUp
        },
        {
            path: '/chat',
            name: 'chat',
            component: Chat
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        }
    ],
    mode: 'history'
})

export default router;