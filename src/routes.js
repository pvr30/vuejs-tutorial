import {createRouter, createWebHistory} from "vue-router"
import HomeComp from "./components/HomeComp.vue"
import LoginComp from "./components/LoginComp.vue"
import ProfileComp from "./components/ProfileComp.vue"


const routes = [
    {
        name:'HomeComp',
        path: "",
        component: HomeComp
    },
    {
        name:'LoginComp',
        path: "/login",
        component: LoginComp
    },
    {
        name:'ProfileComp',
        path: "/profile/:name/",
        component: ProfileComp
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;