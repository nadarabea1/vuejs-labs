import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
    state() {
        return {
            todos: []
        };
    },
    mutations: {
        SET_TODOS(state, todos) {
            state.todos = todos;
        },
        DELETE_TODO(state, todoId) {
            state.todos = state.todos.filter(todo => todo.id !== todoId);
        }
    },
    actions: {
        async fetchTodos({ commit }) {
            try {
                const response = await axios.get('http://localhost:3000/todos');
                commit('SET_TODOS', response.data.todos);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        },
        async deleteTodo({ commit }, todoId) {
            try {
                await axios.delete(`http://localhost:3000/todos/${todoId}`);
                commit('DELETE_TODO', todoId);
            } catch (error) {
                console.error('Error deleting todo:', error);
            }
        }
    },
    getters: {
        completedTodos(state) {
            return state.todos.filter(todo => todo.completed);
        },
        pendingTodos(state) {
            return state.todos.filter(todo => !todo.completed);
        }
    }
});

export default store;
