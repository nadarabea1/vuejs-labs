<template>
  <div>
    <form @submit.prevent="HandleSubmit()">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" class="form-control" id="name" v-model.trim.lazy="FormValues.name">
      </div>
      <div class="form-group">
        <label for="age">Age:</label>
        <input type="number" class="form-control" id="age" v-model.number.lazy="FormValues.age">
      </div>
      <div class="form-group">
        <label for="dropdown">Role:</label>
        <select class="form-control" id="dropdown" v-model="FormValues.role">
          <option value="Admin">Admin</option>
          <option value="User" selected>User</option>
        </select>
      </div>

      <div class="add-btn m-3">
        <button type="submit" class="btn"
          @click="$emit('send', { name: FormValues.name, age: FormValues.age, role: FormValues.role })">Add</button>
      </div>
    </form>

    <!-- {{ users }} -->
  </div>
</template>

<script>
export default {
  name: "UserForm",
  data() {
    return {
      FormValues: {
        name: "",
        age: 0,
        role: "User",
      },
      users: [],
      admins: [],
    };
  },
  emits: ['send'],
  methods: {
    HandleSubmit() {
      this.users.push(this.FormValues);
      console.log(this.users);

    },
    method() {
      console.log("Method")
    }
  },
  computed: {
    compute() {
      return console.log("Computed")
    }
  }
}
</script>

<style scoped>
.btn {
  background-color: rgb(2, 79, 141);
  color: white;
}

.add-btn {
  display: flex;
  justify-content: space-around;
}
</style>