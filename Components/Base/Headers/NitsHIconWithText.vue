<template>
    <div>
        <nav class="relative py-4 px-8 mx-auto bg-transparent w-screen mt-5">
            <div class="flex justify-between">
                <div class="float-left border-r text-black">
                    <img class="h-12 w-48 pr-5" src="/nits-assets/images/nits-editor-logo.png">
                </div>

                <div class=" text-lg ml-64  font-bold">
                    <div class="float-right ml-40">
                        <div  @mouseover="Visible = true" @mouseleave="Visible = false" @keydown.enter="Visible = !Visible" class="inline-block hover:text-teal-500 cursor-pointer text-gray-700 px-2  mx-3">
                            <svg class="h-6 w-6 ml-2 mb-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M18.672 11H17v6c0 .445-.194 1-1 1h-4v-6H8v6H4c-.806 0-1-.555-1-1v-6H1.328c-.598 0-.47-.324-.06-.748L9.292 2.22c.195-.202.451-.302.708-.312.257.01.513.109.708.312l8.023 8.031c.411.425.539.749-.059.749z"/>
                            </svg>
                            <a class="text-sm  " href="#">{{label1}}</a>
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
                        </div>
                        <div @mouseover="isVisible = true" @mouseleave="isVisible = false" @keydown.enter="isVisible = !isVisible" class="inline-block cursor-pointer text-teal-500 px-2 mx-3">
                            <svg class="h-6 w-6 ml-6 mb-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 1C5.092 1 2 2.512 2 4.001v2c0 .918 6 6 6 6v6c-.001.684 1 1 2 1s2.001-.316 2-1v-6s6-5.082 6-6v-2C18 2.512 14.908 1 10 1zm0 5.123C6.409 6.122 3.862 4.79 3.862 4.292 3.86 3.797 6.41 2.461 10 2.463c3.59-.002 6.14 1.334 6.138 1.828 0 .499-2.547 1.831-6.138 1.832z"/>
                            </svg>
                            <a class="text-sm" href="#">{{label2}}</a>
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

                        </div>
                        <div class="inline-block hover:text-teal-500 cursor-pointer text-gray-700 px-2 mx-3">
                            <svg class="h-6 w-6 mb-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10.595 5.196l.446 1.371a4.135 4.135 0 011.441-.795c.59-.192 1.111-.3 1.582-.362l-.43-1.323a9.465 9.465 0 00-1.58.368 5.25 5.25 0 00-1.459.741zm.927 2.855l.446 1.371a4.135 4.135 0 011.441-.795c.59-.192 1.111-.3 1.582-.362l-.43-1.323a9.465 9.465 0 00-1.58.368 5.21 5.21 0 00-1.459.741zm.928 2.854l.446 1.371a4.135 4.135 0 011.441-.795c.59-.192 1.111-.3 1.582-.362l-.43-1.323a9.465 9.465 0 00-1.58.368 5.21 5.21 0 00-1.459.741zm-7.062 2.172l.43 1.323a8.745 8.745 0 011.492-.636 4.141 4.141 0 011.633-.203l-.446-1.371a5.25 5.25 0 00-1.615.257 9.406 9.406 0 00-1.494.63zM3.533 7.368l.43 1.323a8.825 8.825 0 011.492-.636 4.141 4.141 0 011.633-.203L6.643 6.48a5.263 5.263 0 00-1.616.258 9.406 9.406 0 00-1.494.63zm.927 2.855l.43 1.323a8.745 8.745 0 011.492-.636 4.141 4.141 0 011.633-.203L7.57 9.335a5.25 5.25 0 00-1.615.257 9.417 9.417 0 00-1.495.631zm6.604-8.813a5.26 5.26 0 00-3.053 2.559 5.257 5.257 0 00-3.973-.275C1.515 4.514.069 6.321.069 6.321l4.095 12.587c.126.387.646.477.878.143.499-.719 1.46-1.658 3.257-2.242 1.718-.558 2.969.054 3.655.578.272.208.662.06.762-.268.252-.827.907-2.04 2.61-2.593 1.799-.585 3.129-.389 3.956-.1.385.134.75-.242.625-.629L15.819 1.203s-2.232-.612-4.755.207zm-.113 13.846a5.208 5.208 0 00-3.141.044c-1.251.406-2.127.949-2.699 1.404L1.866 6.722c.358-.358 1.187-1.042 2.662-1.521 1.389-.451 2.528-.065 3.279.378l3.144 9.677zm6.894-2.689c-.731-.032-1.759.044-3.01.451a5.205 5.205 0 00-2.567 1.81L9.124 5.151c.346-.8 1.04-1.782 2.43-2.233 1.474-.479 2.547-.413 3.047-.334l3.244 9.983z"/>
                            </svg>
                            <a class="text-sm" href="#">{{label3}}</a>
                        </div>
                        <div class="inline-block hover:text-teal-500 cursor-pointer text-gray-700 px-2 mx-3">
                            <svg class="h-6 w-6 ml-6 mb-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M9 10h2v2h9s-.149-4.459-.2-5.854C19.75 4.82 19.275 4 17.8 4h-3.208l-1.197-2.256C13.064 1.121 12.951 1 12.216 1H7.783c-.735 0-.847.121-1.179.744-.165.311-.7 1.318-1.196 2.256H2.199c-1.476 0-1.945.82-2 2.146C.145 7.473 0 12 0 12h9v-2zM7.649 2.916c.23-.432.308-.516.817-.516h3.067c.509 0 .588.084.816.516L12.924 4h-5.85l.575-1.084zM11 15H9v-2H.5s.124 1.797.199 3.322C.73 16.955.917 18 2.499 18H17.5c1.582 0 1.765-1.047 1.8-1.678.087-1.568.2-3.322.2-3.322H11v2z"/>
                            </svg>
                            <a class="text-sm" href="#">{{label4}}</a>
                        </div>
                        <div class="inline-block hover:text-teal-500 cursor-pointer px-2 text-gray-700 mx-3">
                            <svg class="h-6 w-6 mb-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M14.69 2.661c-1.894-1.379-3.242-1.349-3.754-1.266a.538.538 0 00-.35.223l-4.62 6.374-2.263 3.123a2.447 2.447 0 00-.462 1.307l-.296 5.624a.56.56 0 00.76.553l5.256-2.01c.443-.17.828-.465 1.106-.849l1.844-2.545 5.036-6.949a.56.56 0 00.1-.423c-.084-.526-.487-1.802-2.357-3.162zM8.977 15.465l-2.043.789a.19.19 0 01-.221-.062 5.145 5.145 0 00-1.075-1.03 5.217 5.217 0 00-1.31-.706.192.192 0 01-.126-.192l.122-2.186.549-.755s1.229-.169 2.833.998c1.602 1.166 1.821 2.388 1.821 2.388l-.55.756z"/>
                            </svg>
                            <a class="text-sm" href="#">{{label5}}</a>
                        </div>
                        <div class="inline-block hover:text-teal-500 cursor-pointer px-2 text-gray-700 mx-3">
                            <svg class="h-6 w-6 mb-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M13 17a2 2 0 103.999.001A2 2 0 0013 17zM3 17a2 2 0 104 0 2 2 0 00-4 0zm3.547-4.828L17.615 9.01A.564.564 0 0018 8.5V3H4V1.4c0-.22-.181-.4-.399-.4H.399A.401.401 0 000 1.4V3h2l1.91 8.957.09.943v1.649c0 .219.18.4.4.4h13.2c.22 0 .4-.182.4-.4V13H6.752c-1.15 0-1.174-.551-.205-.828z"/>
                            </svg>
                            <a class="text-sm" href="#">{{label6}}</a>
                        </div>
                        <div class="inline-block hover:text-teal-500 cursor-pointer px-2 text-gray-700 mx-3">
                            <svg class="h-6 w-6 ml-6 mb-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M5.719 14.75a.997.997 0 01-.664-.252L-.005 10l5.341-4.748a1 1 0 011.328 1.495L3.005 10l3.378 3.002a1 1 0 01-.664 1.748zm8.945-.002L20.005 10l-5.06-4.498a.999.999 0 10-1.328 1.495L16.995 10l-3.659 3.252a1 1 0 001.328 1.496zm-4.678 1.417l2-12a1 1 0 10-1.972-.329l-2 12a1 1 0 101.972.329z"/>
                            </svg>
                            <a class="text-sm" href="#">{{label7}}</a>
                        </div>
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
            label7:{
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