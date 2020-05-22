<template>
    <div class="relative">
        <img src="/project-assets/images/school_image.jpg" alt="education image">

        <nav class="fixed top-0 py-6 px-8 mx-auto bg-white w-screen opacity-50 ">
            <div class="flex justify-between">
                <div class="float-left text-white ml-24">
                    <img class="h-12 w-48 pr-5" src="/nits-assets/images/nits-editor-logo.png">
                </div>
                <div class="mr-24 text-lg font-semibold">
                    <div class="float-right">
                        <div v-for="item in menus" class="inline-block cursor-pointer p-2 text-black mx-3">
                            <a class="flex-shrink-0 tracking-widest text-black text-sm uppercase" href="#">{{item}}</a>
                        </div>
                        <div class="inline-block cursor-pointer pt-2 text-black mx-3">
                            <svg @click="box = ! box" class="w-5 h-5 cursor-pointer text-black" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 00.898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 002.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 003.115-.844l3.799 3.801a.953.953 0 001.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 014.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 01-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"/>
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
            <div class="pl-32 pr-10 ml-48" v-if="box">
                <input class="w-full h-8 ml-2 border border-black mt-4 py-1 px-10 bg-transparent rounded placeholder-black text-sm focus:outline-none antialiased tracking-wide font-medium text-black leading-norma" type="text" placeholder="Search">
            </div>
        </nav>

        <div class="absolute bottom-0 px-56 mb-16 ">
            <h2 class="mb-64 ml-64 py-24 text-center pl-12 font-black text-5xl text-white ">{{center_header}}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NitsHSemiTransparentLight",
        props:{
            menus : Array,
            center_header:{
                type: String,
                required: true
            },

        },
        data(){
            return{
                box:false,
                isVisible: false,
                Visible: false,
            }
        }
    }
</script>

<style scoped>

</style>