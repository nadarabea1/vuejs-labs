<template>
    <div>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#" style="color:white">
                    <img src="https://cdn-icons-png.flaticon.com/128/2666/2666505.png" class="icon" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent" style="color:white">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-center">
                        <li class="nav-item">
                            <router-link class="nav-link active link-light" aria-current="page"
                                to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active link-light" aria-current="page"
                                to="/todos">Todos</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active link-light" aria-current="page" to="/add"><i
                                    class="fa-solid fa-plus"></i> Todos</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "NavBar",
};
</script>

<style scoped>
.navbar {
    background-color: rgb(2, 79, 141);
}

.icon {
    width: 30px
}
</style>