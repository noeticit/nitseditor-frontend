<template>
    <div class="hidden md:flex overflow-x-hidden mr-10 font-semibold">
        <div v-for="item in menu" class="mr-6 p-1">
            <a class="text-gray-700 text-sm tracking-widest hover:text-blue-500 uppercase" href="#">{{item}}</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NitsMenus",
        props: {
            menu: Array,
        }
    }
</script>

<style scoped>

</style>