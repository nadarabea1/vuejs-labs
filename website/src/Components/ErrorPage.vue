<template>
    <div>
        <h1 class="alert alert-danger">Oops....</h1>
        <button class="btn" @click="HandleBack()">Back To Home</button>
    </div>
</template>

<script>
export default {
    name: 'ErrorPage',
    methods: {
        HandleBack() {
            this.$router.push("/")
        }
    }
}
</script>

<style scoped></style>