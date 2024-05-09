<template>
  <div>
    <!-- <div class="d-flex justify-content-center align-items-center main"> -->
    <UserForm @send="handleSend" />
    <div class="d-flex justify-content-center align-items-center main">
      <div class="d-flex justify-content-around">
        <button @click="showUser" class="btn m-2">User</button>
        <button @click="showAdmin" class="btn m-2">Admin</button>
      </div>
    </div>
    <div>
      <table v-if="currentPage === 'user' || currentPage === 'admin'" class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in filteredUsers()" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.role }}</td>
          </tr>
        </tbody>
      </table>
      <div v-else></div>
    </div>
  </div>
  <!-- </div>      -->
</template>

<script>
import UserForm from "./UserForm.vue";

export default {
  name: "HomePage",
  components: {
    UserForm,
  },
  data() {
    return {
      users: [],
      currentPage: null,
    };
  },
  methods: {
    handleSend(data) {
      this.users.push(data);
    },
    showUser() {
      this.currentPage = 'user';
    },
    showAdmin() {
      this.currentPage = 'admin';
    },
    filteredUsers() {
      if (this.currentPage === 'user' || this.currentPage === 'admin') {
        return this.users.filter(user => user.role.toLowerCase() === this.currentPage);
      }
      return [];
    },
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: around;
}

.btn {
  background-color: rgb(2, 79, 141);
  color: white;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.table th {
  background-color: rgb(2, 79, 141);
  color: white;
}
</style>
