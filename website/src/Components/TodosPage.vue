<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">UserID</th>
                    <th scope="col">Todo</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="todo in todos" :key="todo.id">
                    <td>{{ todo.id }}</td>
                    <td>{{ todo.userId }}</td>
                    <td>{{ todo.todo }}</td>
                    <td>
                        <span v-if="todo.completed">
                            <i class="fa-solid fa-check"></i>
                        </span>
                        <span v-else>
                            <i class="fa-solid fa-hourglass-start"></i>
                        </span>
                    </td>
                    <td><button class="btn btn-danger" @click="HandleDelete(todo.id)">Delete</button></td>
                    <td><router-link class="btn btn-success" :to="`/add/${todo.id}`">Edit..</router-link></td>
                </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "AddProduct",
    data() {
        return {
            todos: []
        }
    },
    methods: {
        getAllTodos() {
            axios.get('http://localhost:2000/todos')
                .then((response) => {
                    this.todos = response.data;
                    console.log(this.todos)
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        HandleDelete(id) {
            axios.delete(`http://localhost:2000/todos/${id}`)
                .then((response) => {
                    console.log(response.data);
                    this.getAllTodos();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    mounted() {
        this.getAllTodos();
    }
}
</script>

<style scoped>
.custom-btn {
    background-color: rgb(2, 79, 141);
    color: white;
}
</style>
