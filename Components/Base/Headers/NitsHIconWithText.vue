<template>
    <nav class="relative py-4 px-8 mx-auto bg-transparent w-screen mt-5">
        <div class="flex justify-between">
            <div class="float-left border-r text-black">
                <img class="h-12 w-48 pr-5" src="/nits-assets/images/nits-editor-logo.png">
            </div>
            <nits-bold-menus :menus="menus"></nits-bold-menus>
            <div class="border-l">
                <svg @click="box = ! box" class="w-5 h-5 mt-4 cursor-pointer hover:text-teal-500 text-gray-600 mx-10" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 00.898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 002.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 003.115-.844l3.799 3.801a.953.953 0 001.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 014.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 01-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"/>
                </svg>
            </div>
        </div>
        <div class="pl-32 pr-10 ml-48" v-if="box">
            <input class="w-full h-8 ml-2 border border-teal-300 mt-4 py-1 px-10 bg-gray-100 rounded placeholder-teal-600 text-sm focus:outline-none antialiased tracking-wide font-medium text-teal-600 leading-norma" type="text" placeholder="Search">
        </div>
    </nav>
</template>

<script>
    export default {
        name: "NitsHIconWithText",
        props:{
            menus : Array,
        },

        data(){
            return{
                box: false,
                isVisible: false,
                Visible: false,
            }
        }
    }
</script>

<style scoped>

</style>