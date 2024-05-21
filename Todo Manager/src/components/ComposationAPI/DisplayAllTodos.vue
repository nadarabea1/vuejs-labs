<template>
  <div class="container mt-4">
    <div class="row">
      <h3 class="display-6 text-center mt-4 mb-5">All todos</h3>
      <div class="col-md-4 mb-5" v-for="todo in todos" :key="todo.id">
        <div class="card h-100">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ todo.todo }}</h5>
            <p class="card-text lead">Completed: {{ todo.completed }}</p>
            <p class="card-text">User ID: {{ todo.userId }}</p>
            <div class="mt-auto card-footer">
              <button class="btn btn-danger" @click="deleteTodo(todo.id)">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
export default {
  name: 'DisplayAllTodo',
  setup() {
    const todos = ref([]);

    const store = useStore();

    onMounted(async () => {
      try {
        const response = await fetch('http://localhost:3000/todos');
        const data = await response.json();
        todos.value = data.todos;
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    });

    const deleteTodo = async (id) => {
      try {
        await store.dispatch('deleteTodo', id);
        todos.value = todos.value.filter(todo => todo.id !== id);
      } catch (error) {
        console.error('Error deleting todo:', error);
      }
    };

    return { todos, deleteTodo };
  }
};
</script>

<style scoped>
.card {
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-body {
  padding: 1.25rem;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.card-text {
  margin-bottom: 0.5rem;
}

.btn {
  transition: background-color 0.3s ease;
}
</style>
