import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { createRouter, createWebHistory } from 'vue-router';
import AllTodo from './components/OptionAPI/AllTodo.vue';
import store from './Store';
import GetTodoAllTodoById from './components/OptionAPI/getTodoById.vue';
import EditAndCreateTodoAllTodo from './components/OptionAPI/editAndCreateTodo.vue';
import DisplayAllTodo from './components/ComposationAPI/DisplayAllTodos.vue';
import EditAndCreate from './components/ComposationAPI/editAndCreate.vue';

const routes = [
    {
        path: '/option-api', // Use a more descriptive path
        component: AllTodo,
        children: [
            { path: '', component: AllTodo },
            { path: 'add', component: EditAndCreateTodoAllTodo },
            { path: 'edit/:id', component: EditAndCreateTodoAllTodo },
            { path: ':id', component: GetTodoAllTodoById }, // Moved to be a child route
        ]
    },
    {
        path: '/composation-api', // Use a more descriptive path
        component: DisplayAllTodo,
        children: [
            { path: '', component: DisplayAllTodo },
            { path: 'add', component: EditAndCreate },
            { path: 'edit/:id', component: EditAndCreate },
        ]
    },
    { path: '/:pathMatch(.*)*', redirect: '/' }, // Redirect to home for unknown paths
    { path: '/:pathMatch(.*)', redirect: '/' }, // Redirect to home for unknown paths
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(store).use(router).mount('#app');
