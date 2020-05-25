<template>
    <div class="flex fixed top-0 w-full justify-between items-center shadow-lg py-4 bg-white">
        <div class="flex-shrink-0 ml-10 cursor-pointer ">
            <a href="/"> <img class="h-16 w-46 pr-5" :src="logo"></a>
        </div>
        <nits-menus :menus="menu"></nits-menus>
        <button @click.prevent="login" class="mr-10 inline-block max-w-xs w-36 px-6 py-2 rounded-lg shadow-md bg-blue-500 hover:bg-blue-400 focus:outline-none focus:shadow-outline text-white text-sm tracking-wider font-semibold">
            LOGIN
        </button>
<!--        <base-solid-button class="mr-10" name="login" :url="url"></base-solid-button>-->
    </div>
</template>

<script>
    export default {
        name: "NitsHBlue",
        props: {
            menu: Array,
            logo: {
                type: String,
                required: true
            },
            url:{
                type: String,
            }

        },
        data(){
            return{

            }
        },
        methods:{
            login(){
                this.$router.push({ path:'/login'})
            }
        }
    }
</script>

<style scoped>

</style>