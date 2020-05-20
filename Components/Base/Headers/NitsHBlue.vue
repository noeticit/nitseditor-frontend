<template>
    <div class="flex fixed top-0 w-full justify-between items-center shadow-lg py-4 bg-white">
        <div class="flex-shrink-0 ml-10 cursor-pointer">
            <img class="h-16 w-56 pr-5" :src="logo">
        </div>
        <div class="hidden md:flex overflow-x-hidden mr-10 font-semibold">
            <div v-for="item in menu" class="mr-6 p-1 ">
                <a class="text-gray-700 text-sm tracking-widest hover:text-blue-500 uppercase" href="#">{{item}}</a>
            </div>
        </div>
<!--        <div v-if="box" class="hero fixed top-0  w-full flex">-->
<!--            <div class="w-full h-24 mb-5 bg-white pl-2 pr-2  border rounded flex justify-between items-center relative shadow">-->
<!--                <input type="search" name="search" id="search" placeholder="Search" class="appearance-none bg-white px-16 w-full outline-none focus:outline-none active:outline-none"/>-->
<!--                <div class="mr-2">-->
<!--                    <svg @click="box = ! box" class="h-6 w-6 mt-2 ml-4 text-gray-500 hover:text-red-700" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
<!--                        <path fill-rule="evenodd" d="M16 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2.939 12.789L10 11.729l-3.061 3.06-1.729-1.728L8.271 10l-3.06-3.061L6.94 5.21 10 8.271l3.059-3.061 1.729 1.729L11.729 10l3.06 3.061-1.728 1.728z"/>-->
<!--                    </svg>-->
<!--                </div>-->
<!--            </div>-->
<!--&lt;!&ndash;            <div class="-mr-16 pl-1">&ndash;&gt;-->
<!--&lt;!&ndash;                &ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--        </div>-->

<!--            <router-link to="/login">-->
        <base-solid-button class="mr-10" Solid="login" url="/login"></base-solid-button>
<!--    </router-link>-->

    </div>
</template>

<script>
    export default {
        name: "NitsHBlue",
        props: {
            menu: Array,
            dropdown1: {
                type: String,
                required: true
            },
            dropdown2: {
                type: String,
                required: true
            },
            logo: {
                type: String,
                required: true
            },

        },
        data(){
            return{
                responsive_tab :false,
                menu: false,
                box4: false,
                isVisible: false,
                Visible: false,
                onVisible: false,
                isDropdown: false,
                isDrop: false,
                onDropdown: false,
                onDrop: false,
                box: false
            }
        }
    }
</script>

<style scoped>

</style>