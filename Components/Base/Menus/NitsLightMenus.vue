<template>
    <div class=" text-lg ml-56 font-semibold">
        <div class="float-right ml-32">
            <div v-for="item in menu" class="inline-block cursor-default text-white p-2  mx-3">
                <a class="text-sm uppercase tracking-wider" href="#">{{item}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NitsLightMenus",
        props:{
            menu: Array
        },
    }
</script>

<style scoped>

</style>