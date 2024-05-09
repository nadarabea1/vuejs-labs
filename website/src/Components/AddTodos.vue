<template>
  <div>
    <form action="" @submit.prevent="this.$route.params.id ? HandlePutReq() : HandlePostReq()">
      <div class="form-group">
        <label for="id">ID:</label>
        <input type="number" class="form-control" id="id" v-model.trim.lazy="id">
      </div>
      <div class="form-group">
        <label for="userid">User ID:</label>
        <input type="number" class="form-control" id="userid" v-model.number.lazy="userId">
      </div>
      <div class="form-group">
        <label for="todo">Todo:</label>
        <input type="text" class="form-control" id="todo" v-model.number.lazy="todo">
      </div>
      <div class="form-group">
        <label for="status">Satus:</label>
        <input type="number" class="form-control" id="status" v-model.number.lazy="status">
      </div>
      <div class="add-btn m-3">
        <button type="submit" class="btn">Done</button>
      </div>
      <!-- <button>Submit</button> -->
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "AddTodos",
  data() {
    return {
      id: 0,
      userId: 0,
      todo: "",
      status: false,
    }
  },
  created() {
    if (this.$route.params.id) {
      this.getTodoById();
    }
  },
  methods: {
    HandleSubmit() {
      if (this.id) {
        this.HandlePutReq();
      } else {
        this.HandlePostReq();
      }
    },
    getTodoById() {
      axios.get(`http://localhost:2000/todos/${this.$route.params.id}`)
        .then((response) => {
          this.id = response.data.id;
          this.userId = response.data.userId;
          this.todo = response.data.todo;
          console.log(response.data);
          if (response.data.completed === true) {
            this.status = 1;
          } else {
            this.status = 0;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    HandlePostReq() {
      const editStatus = this.status !== 0;
      axios.post('http://localhost:2000/todos', {
        id: this.id,
        userId: this.userId,
        todo: this.todo,
        completed: editStatus
      })
        .then((response) => {
          console.log(response.data);
          this.$router.push('/todos');
        })
        .catch((error) => {
          console.log(error);
        });
    },

    HandlePutReq() {
      const editStatus = this.status === 1; // Set to true if status is 1, false otherwise

      axios.put(`http://localhost:2000/todos/${this.id}`, {
        id: this.id,
        userId: this.userId,
        todo: this.todo,
        completed: editStatus
      })
        .then((response) => {
          console.log(response.data);
          this.$router.push('/todos');
        })
        .catch((error) => {
          console.log(error);
        });

    },

  },
}
</script>

<style scoped></style>