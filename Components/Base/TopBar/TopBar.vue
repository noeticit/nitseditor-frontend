<template>
    <div class="top_bar">
        <div class="logo">
            <img class="h-12" src="/nits-assets/images/logo.png" alt="NitsEditor Logo">
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopBar"
    }
</script>

<style scoped>
.top_bar{
    background-color: #ffffff;
    width: 100%;
    margin: 0;
    border: 0;
    padding: 0;
    height: 50px;
    min-height: 50px;
    filter: none;
    background-image: none;
    z-index: 9995;
}
.logo {
    display: flex;
    }

</style>