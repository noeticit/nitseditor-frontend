<template>
    <div class="relative">
        <img src="/project-assets/images/educational.jpg" class=" h-auto w-screen">
        <nav class="absolute top-0 py-4 px-8 mx-auto bg-transparent w-screen mt-5">
            <div class="flex justify-between">
                <div class="float-left text-white ml-16">
                    <img class="h-12 w-48 pr-5" src="/nits-assets/images/nits-editor-logo.png">
                </div>
                <div class="mr-16 text-lg font-semibold">
                    <div class="flex float-right">
                        <nits-light-menus :menus="menus"></nits-light-menus>
                        <div class="inline-block cursor-pointer pt-3 text-white ml-4">
                            <svg @click="box = ! box" class="w-5 h-5 cursor-pointer text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 00.898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 002.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 003.115-.844l3.799 3.801a.953.953 0 001.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 014.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 01-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pl-32 pr-10 ml-48" v-if="box">
                <input class="w-full h-8 ml-2 border border-white mt-4 py-1 px-10 bg-transparent rounded placeholder-white text-sm focus:outline-none antialiased tracking-wide font-medium text-white leading-norma" type="text" placeholder="Search">
            </div>
        </nav>
        <div class="absolute bottom-0 px-32 mb-16">
            <h2 class="mb-16 ml-64 text-center font-black text-5xl text-purple-500 ">{{header1}}<span class="text-white ml-1">{{header2}}</span></h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NitsHTransparent",
        props: {
            menus : Array,
            header1: {
                type: String,
                required: true
            },
            header2: {
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

        },
    }
</script>

<style scoped>

</style>