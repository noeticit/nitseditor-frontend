<template>
    <div>
        <nav class="relative py-4 px-8 mx-auto bg-transparent w-screen mt-5">
            <div class="flex justify-between">
                <div class="float-left border-r text-black">
                    <img class="h-12 w-48 pr-5" src="/nits-assets/images/nits-editor-logo.png">
                </div>

                <div class=" text-lg ml-64  font-bold">
                    <div class="float-right ml-40">
                        <div v-for="item in menu" class="inline-block hover:text-teal-500 cursor-pointer uppercase px-3 text-gray-700 mx-3">
                            <svg class="h-6 w-6 mb-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M13 17a2 2 0 103.999.001A2 2 0 0013 17zM3 17a2 2 0 104 0 2 2 0 00-4 0zm3.547-4.828L17.615 9.01A.564.564 0 0018 8.5V3H4V1.4c0-.22-.181-.4-.399-.4H.399A.401.401 0 000 1.4V3h2l1.91 8.957.09.943v1.649c0 .219.18.4.4.4h13.2c.22 0 .4-.182.4-.4V13H6.752c-1.15 0-1.174-.551-.205-.828z"/>
                            </svg>
                            <a class="text-sm" href="#">{{item}}</a>
                        </div>
<!--                        <div class="inline-block hover:text-teal-500 cursor-pointer px-2 text-gray-700 mx-3">-->
<!--                            <svg class="h-6 w-6 ml-6 mb-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
<!--                                <path fill-rule="evenodd" d="M5.719 14.75a.997.997 0 01-.664-.252L-.005 10l5.341-4.748a1 1 0 011.328 1.495L3.005 10l3.378 3.002a1 1 0 01-.664 1.748zm8.945-.002L20.005 10l-5.06-4.498a.999.999 0 10-1.328 1.495L16.995 10l-3.659 3.252a1 1 0 001.328 1.496zm-4.678 1.417l2-12a1 1 0 10-1.972-.329l-2 12a1 1 0 101.972.329z"/>-->
<!--                            </svg>-->
<!--                            <a class="text-sm" href="#">{{label7}}</a>-->
<!--                        </div>-->
                    </div>
                </div>
                <div class="border-l ">
                    <svg @click="box = ! box" class="w-5 h-5 mt-4 cursor-pointer hover:text-teal-500 text-gray-600 mx-10" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 00.898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 002.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 003.115-.844l3.799 3.801a.953.953 0 001.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 014.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 01-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"/>
                    </svg>
                </div>
            </div>
            <div class="pl-32 pr-10 ml-48" v-if="box">
                <input class="w-full h-8 ml-2 border border-teal-300 mt-4 py-1 px-10 bg-gray-100 rounded placeholder-teal-600 text-sm focus:outline-none antialiased tracking-wide font-medium text-teal-600 leading-norma" type="text" placeholder="Search">
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "NitsHIconWithText",
        props:{
            menu : Array,

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