<template>
  <div class="container mt-3">
    <h2
      v-if="!paramsId"
      class="display-5 mt-3 text-center">
      Add Todo
    </h2>
    <h2
      v-else
      class="display-5 mt-3 text-center">
      Edit Todo
    </h2>

    <form @submit.prevent="!paramsId ? addTodo() : updateTodo()">
      <div class="mb-3">
        <label
          for="todo"
          class="form-label"
          >Todo</label
        >
        <input
          type="text"
          class="form-control"
          id="todo"
          v-model.lazy.trim="todo" />
      </div>
      <div class="mb-3">
        <label
          for="completed"
          class="form-label"
          >Completed</label
        >
        <input
          type="checkbox"
          class="form-check-input"
          id="completed"
          v-model="completed" />
      </div>
      <div class="mb-3">
        <label
          for="userId"
          class="form-label"
          >User ID</label
        >
        <input
          type="number"
          class="form-control"
          id="userId"
          v-model.lazy.number="userId" />
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        v-if="!paramsId">
        Add
      </button>
      <button
        type="submit"
        class="btn btn-primary"
        v-else>
        Update
      </button>
    </form>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'editAndCreateTodo',
  setup() {
    const store = useStore();
    const router = useRouter();
    const todo = ref('');
    const completed = ref(false);
    const userId = ref(0);

    const paramsId = computed(() => router.currentRoute.value.params.id);

    const getTodoDetails = async () => {
      if (paramsId.value) {
        console.log(paramsId.value);
        try {
          await store.dispatch('getTodoById', paramsId.value);
          todo.value = store.state.todo.todo;
          completed.value = store.state.todo.completed;
          userId.value = store.state.todo.userId;
        } catch (error) {
          console.error('Error fetching todo details:', error);
        }
      }
    };
    onMounted(getTodoDetails);

    const addTodo = async () => {
      try {
        await store.dispatch('createTodo', {
          todo: todo.value,
          completed: completed.value,
          userId: userId.value,
        });
        router.push('/todos');
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    };

    const updateTodo = async () => {
      try {
        await store.dispatch('updateTodo', {
          id: paramsId.value,
          updatedTodo: {
            todo: todo.value,
            completed: completed.value,
            userId: userId.value,
          },
        });
        router.push('/todos');
      } catch (error) {
        console.error('Error updating todo:', error);
      }
    };

    return {
      paramsId,
      todo,
      completed,
      userId,
      addTodo,
      updateTodo,
    };
  },
};
</script>

<style scoped></style>
