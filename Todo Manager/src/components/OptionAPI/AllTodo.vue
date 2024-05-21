<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-12">
        <h1 class="text-center mb-4 display-6">All Todos</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">UserID</th>
              <th scope="col">Todo</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
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
              <td class="d-flex">
                <button class="btn btn-danger me-1" @click="deleteTodo(todo.id)">Delete</button>
                <router-link class="btn btn-success" :to="'/edit/' + todo.id">Edit..</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  created() {
    this.$store.dispatch('getAllTodos');
  },
  methods: {
    async deleteTodo(id) {
      try {
        await this.$store.dispatch('deleteTodo', id);
        this.$router.push('/');
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped></style>
