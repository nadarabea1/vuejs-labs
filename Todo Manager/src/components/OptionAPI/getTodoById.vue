<template>
  <div class="container mt-5">
    <div class="row">
      <h2 class="text-center mb-4 display-5">{{ todo.todo }}</h2>
      <div class="col-lg-6 col-md-8 col-sm-10 mx-auto">
        <div class="card shadow">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-6">
                <div class="image-container">
                  <!-- Placeholder image for todo -->
                  <img src="https://via.placeholder.com/300" alt="Todo Image" class="img-fluid rounded" />
                </div>
              </div>
              <div class="col-lg-6 mt-4 mt-lg-0">
                <h2 class="card-title">{{ todo.todo }}</h2>
                <p class="lead">{{ todo.completed ? 'Completed' : 'Not Completed' }}</p>
                <p class="lead">User ID: {{ todo.userId }}</p>
                <div class="d-flex justify-content-between align-items-center mt-4">
                  <router-link :to="'/todos/edit/' + todo.id" class="btn btn-primary w-50 me-1">Edit</router-link>
                  <button class="btn btn-danger w-50" @click="deleteTodo(todo.id)">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'getTodoById',
  computed: {
    todo() {
      return this.$store.state.todo;
    }
  },
  created() {
    this.$store.dispatch('getTodoById', this.$route.params.id);
  },
  methods: {
    async deleteTodo(id) {
      try {
        await this.$store.dispatch('deleteTodo', id);
        this.$router.push('/');
      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>

<style scoped>
.card {
  border: none;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.image-container {
  height: 250px;
  overflow: hidden;
  border-radius: 12px;
}

.img-fluid {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.lead {
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 1rem;
}

.btn {
  padding: 0.75rem 2rem;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  opacity: 0.8;
}
</style>
