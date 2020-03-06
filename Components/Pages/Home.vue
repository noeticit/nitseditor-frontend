<template>
    <div class="flex-center position-ref full-height">
        <div class="top-right links">
            <router-link to="/">Home</router-link>
            <router-link to="/">Login</router-link>
            <router-link to="/register" >Register</router-link>
        </div>

        <div class="content">
            <div class="title m-b-md">
                Nits Editor
            </div>

            <div class="links">
                <a href="https://nitseditor.com/docs">Docs</a>
                <a href="https://github.com/laravel/laravel">GitHub</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
    .full-height {
        height: 100vh;
    }

    .flex-center {
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .position-ref {
        position: relative;
    }

    .top-right {
        position: absolute;
        right: 10px;
        top: 18px;
    }

    .content {
        text-align: center;
    }

    .title {
        font-size: 84px;
    }

    .links > a {
        color: #636b6f;
        padding: 0 25px;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: .1rem;
        text-decoration: none;
        text-transform: uppercase;
    }

    .m-b-md {
        margin-bottom: 30px;
    }
</style>
