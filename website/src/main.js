import { createApp } from 'vue'
import App from './App.vue'
import HomePage from './Components/HomePage.vue'
import TodosPage from './Components/TodosPage.vue'
import AddTodos from './Components/AddTodos.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ErrorPage from './Components/ErrorPage.vue'


const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/todos',
        component: TodosPage
    },
    {
        path: '/add',
        component: AddTodos
    },
    {
        path: '/add/:id',
        component: AddTodos
    },
    {
        path: '/:NotFound(.*)',
        component: ErrorPage,
        meta: { hideNabar: true }
    }
]
let router = createRouter({
    history: createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app')


