<template>
    <div class=" text-lg  font-semibold">
        <div class="float-right">
            <div v-for="item in menus" class="inline-block cursor-default text-white p-2  mx-3">
<!--                <a class="text-sm uppercase tracking-wider" href="#">{{item.name}}</a>-->
                <router-link class="text-sm uppercase tracking-wider" :to="item.link">
                    {{item.name}}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NitsLightMenus",
        props:{
            menus: Array
        },
    }
</script>

<style scoped>

</style>