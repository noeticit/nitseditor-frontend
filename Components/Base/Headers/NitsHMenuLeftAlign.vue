<template>
    <div class="justify-between items-center ">
        <div class="relative">
            <img class="w-screen h-screen" src="/nits-assets/images/joel.jpg">
        </div>
        <div class="flex fixed top-0 justify-between items-center py-4 bg-transparent">
            <div class="flex-shrink-0 ml-8 cursor-pointer">
                <img class="h-12 w-48" src="/nits-assets/images/nits-editor-logo.png">
            </div>
            <div class="ml-16 pl-5">
                <ul class="hidden md:flex overflow-x-hidden uppercase">
                    <li class="mr-8 p-1 border-b-2 border-orange-500 inline-block" @mouseover="isVisible = true" @mouseleave="isVisible = false" @keydown.enter="isVisible = !isVisible">
                        <div class="inline-flex items-center justify-between px-2 py-1 font-medium  transition-all duration-500 rounded-md focus:outline-none focus:text-brand-900 sm:focus:shadow-outline">
                            <span class="text-gray-700 tracking-widest antialiased text-xs hover:text-teal-500 font-medium">{{label1}}</span>
                        </div>
                        <transition enter-active-class="transition duration-300 ease-out transform" enter-class="-translate-y-3 scale-95 opacity-0" enter-to-class="translate-y-0 scale-100 opacity-100" leave-active-class="transition duration-150 ease-in transform" leave-class="translate-y-0 opacity-100" leave-to-class="-translate-y-3 opacity-0">
                            <div v-show="isVisible" class="absolute pt-2">
                                <div class="relative py-1 bg-white border border-gray-200 rounded-md shadow-xl">
                                    <div class="absolute top-0 w-4 h-4 origin-center transform rotate-45 translate-x-5 -translate-y-2 bg-white border-t border-l border-gray-200 rounded-sm pointer-events-none"></div>
                                    <div class="relative">
                                        <a href="#" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">Noetic IT Service</a>
                                        <a href="#" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">Noetic IT Service</a>
                                        <a href="#" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">Noetic IT Service</a>
                                        <a href="#" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">Noetic IT Service</a>
                                        <a href="#" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">Noetic IT Service</a>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </li>
                    <li class="mr-8 p-1 " @mouseover="Visible = true" @mouseleave="Visible = false" @keydown.enter="Visible = !Visible">
                        <div class="inline-flex items-center justify-between px-2 py-1 font-medium  transition-all duration-500 rounded-md focus:outline-none focus:text-brand-900 sm:focus:shadow-outline">
                            <span class="text-gray-700 tracking-widest antialiased text-xs hover:text-teal-500 font-mediu">{{label2}}</span>
                        </div>
                        <transition enter-active-class="transition duration-300 ease-out transform" enter-class="-translate-y-3 scale-95 opacity-0" enter-to-class="translate-y-0 scale-100 opacity-100" leave-active-class="transition duration-150 ease-in transform" leave-class="translate-y-0 opacity-100" leave-to-class="-translate-y-3 opacity-0">
                            <div v-show="Visible" class="absolute pt-2">
                                <div class="relative py-1 bg-white border border-gray-200 rounded-md shadow-xl">
                                    <div class="absolute top-0 w-4 h-4 origin-center transform rotate-45 translate-x-5 -translate-y-2 bg-white border-t border-l border-gray-200 rounded-sm pointer-events-none"></div>
                                    <div class="relative">
                                        <a href="#" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">Noetic IT Service</a>
                                        <a href="#" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">Noetic IT Service</a>
                                        <a href="#" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">Noetic IT Service</a>
                                        <a href="#" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">Noetic IT Service</a>
                                        <a href="#" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">Noetic IT Service</a>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </li>
                    <li class="mr-8 p-1">
                        <a class="text-gray-700 tracking-widest antialiased text-xs hover:text-teal-500 font-medium" href="#">{{label3}}</a>
                    </li>
                    <li class="mr-8 p-1">
                        <a class="text-gray-700 tracking-widest antialiased text-xs hover:text-teal-500 font-medium" href="#">{{label4}}</a>
                    </li>
                    <li class="mr-8 p-1">
                        <a class="text-gray-700 tracking-widest antialiased text-xs hover:text-teal-500 font-medium" href="#">{{label5}}</a>
                    </li>
                    <li class="mr-8 p-1">
                        <a class="text-gray-700 tracking-widest antialiased text-xs hover:text-teal-500 font-medium" href="#">{{label6}}</a>
                    </li>
                    <li @click="box = ! box" class="mr-8 p-1">
                        <svg class="w-4 h-4 mt-1 cursor-pointer text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 00.898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 002.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 003.115-.844l3.799 3.801a.953.953 0 001.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 014.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 01-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"/>
                        </svg>
                    </li>
                </ul>
            </div>
            <div class="absolute flex top-0 w-full " v-if="box">
                <input class="w-full h-20 ml-2 border border-gray-500 mt-4 py-1 px-10 bg-gray-100 rounded placeholder-teal-600 text-sm focus:outline-none antialiased tracking-wide font-medium text-teal-600 leading-norma" type="text" placeholder="Search">

                <svg @click="box = ! box" class="h-5 w-5 mt-12 ml-4 text-black hover:text-red-700" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2.939 12.789L10 11.729l-3.061 3.06-1.729-1.728L8.271 10l-3.06-3.061L6.94 5.21 10 8.271l3.059-3.061 1.729 1.729L11.729 10l3.06 3.061-1.728 1.728z"/>
                </svg>
            </div>
        </div>
        <div class="h-screen w-screen"></div>

    </div>
    
    
</template>

<script>
    export default {
        name: "NitsHMenuLeftAlign",
        props:{
            label1:{
                type: String,
                required: true
            },
            label2:{
                type: String,
                required: true
            },
            label3:{
                type: String,
                required: true
            },
            label4:{
                type: String,
                required: true
            },
            label5:{
                type: String,
                required: true
            },
            label6:{
                type: String,
                required: true
            },


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