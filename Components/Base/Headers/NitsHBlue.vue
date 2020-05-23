<template>
    <div class="flex fixed top-0 w-full justify-between items-center shadow-lg py-4 bg-white">
        <div class="flex-shrink-0 ml-10 cursor-pointer ">
            <a href="/"> <img class="h-16 w-56 pr-5" :src="logo"></a>
        </div>
        <nits-menus :menus="menus"></nits-menus>
        <base-solid-button class="mr-10" Solid="login" url="/login"></base-solid-button>
    </div>
</template>

<script>
    export default {
        name: "NitsHBlue",
        props: {
            menus: Array,
            logo: {
                type: String,
                required: true
            },
            // url:{
            //     type: String,
            // }

        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>