<template>
  <div class="container mt-3">
      <h2 v-if="!paramsId" class="display-5 mt-3 text-center">Add Todo</h2>
      <h2 v-else class="display-5 mt-3 text-center">Edit Todo</h2>

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
            <select
              class="form-select"
              id="completed"
              v-model="completed">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
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

  export default {
      name: 'editAndCreateTodo',
      data(){
          return{
              todo: '',
              completed: false,
              userId: '',
              paramsId:''
          }
      },
      async created() {
          this.paramsId = this.$route.params.id;
          if (this.paramsId) {
              try {
                  await this.$store.dispatch('getTodoById', this.paramsId);
                  this.todo = this.$store.state.todo.todo;
                  this.completed = this.$store.state.todo.completed;
                  this.userId = this.$store.state.todo.userId;
              } catch (error) {
                  console.error('Error fetching todo details:', error);
              }
          }
      },
      methods:{
          async addTodo(){
              try{
                  await this.$store.dispatch('createTodo',{
                      todo: this.todo,
                      completed: this.completed,
                      userId: this.userId
                  });
                  this.$router.push('/');
              }catch(err){
                  console.log(err);
              }
          },
          async updateTodo(){
              try {
              await this.$store.dispatch('updateTodo', {
                  id: this.paramsId,
                  updatedTodo: {
                      todo: this.todo,
                      completed: this.completed,
                      userId: this.userId
                  }
              });
              this.$router.push('/');
          } catch (error) {
              console.error('Error updating todo:', error);
          }
          }
      }
  }
</script>

<style scoped>

</style>
