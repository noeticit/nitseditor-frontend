<template>
    <div   class="h-full w-full" :class="mode"@change="toggle">
        <nav class="app relative py-4 px-8 mx-auto bg-transparent w-screen mt-5">
            <div class="flex justify-between">
                <div class="float-left border-r text-black">
                    <img class="h-12 w-48 pr-5" src="/nits-assets/images/nits-editor-logo.png">
                </div>
                <div class=" text-lg ml-64 font-semibold">
                    <div class="float-right ml-32">
                        <div class="relative inline-block" @mouseover="isVisible = true" @mouseleave="isVisible = false" @keydown.enter="isVisible = !isVisible">
                            <div class="inline-flex items-center justify-between px-2 py-1 font-medium  transition-all duration-500 rounded-md focus:outline-none focus:text-brand-900 sm:focus:shadow-outline">
                                <span class="flex-shrink-0 text-sm">{{label1}}</span>
<!--                                <svg fill="currentColor" viewBox="0 0 20 20" class="flex-shrink-0 w-5 h-5 ml-1">-->
<!--                                    <path :class="{ 'rotate-180': isVisible }" class="transition duration-300 ease-in-out origin-center transform" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>-->
<!--                                </svg>-->
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
                        </div>

                        <div class="relative inline-block" @mouseover="Visible = true" @mouseleave="Visible = false" @keydown.enter="Visible = !Visible">
                            <div class="inline-flex items-center justify-between px-2 py-1 font-medium  transition-all duration-500 rounded-md focus:outline-none focus:text-brand-900 sm:focus:shadow-outline">
                                <span class="flex-shrink-0 text-sm">{{label2}}</span>
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
                        </div>

                        <div class="inline-block cursor-pointer  p-1 mx-3">
                            <a class="text-sm" href="#">{{label3}}</a>
                        </div>
                        <div class="inline-block cursor-pointer  p-1 mx-3">
                            <a class="text-sm" href="#">{{label4}}</a>
                        </div>
                        <div class="inline-block cursor-pointer p-1  mx-3">
                            <a class="text-sm" href="#">{{label5}}</a>
                        </div>
                        <div class="inline-block cursor-pointer p-2  mx-3">
                            <a class="text-sm" href="#">{{label6}}</a>
                        </div>
                        <div class="inline-block cursor-pointer p-2  mx-3">
                            <a class="text-sm" href="#">{{label7}}</a>
                        </div>
                    </div>
                </div>
                <div class="border-l ">
                    <svg @click="box = ! box" class="w-5 h-5 mt-4 cursor-pointer text-gray-500 mx-10" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 00.898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 002.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 003.115-.844l3.799 3.801a.953.953 0 001.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 014.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 01-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"/>
                    </svg>
                </div>
                <div class="mt-2">
                    <nits-toggle-button
                            :mode="mode"
                            @toggle="$emit('toggle')"
                    />
                </div>
            </div>
            <div class="pl-32 pr-10 ml-48" v-if="box">
                <input class="w-full h-8 ml-2 border border-teal-300 mt-4 py-1 px-10 bg-gray-100 rounded placeholder-teal-600 text-sm focus:outline-none antialiased tracking-wide font-medium text-teal-600 leading-norma" type="text" placeholder="Search">
            </div>
        </nav>


        <div class="m-auto max-w-6xl p-12">
            <div class="flex flex-col md:flex-row">
                <div class="md:w-1/2 max-w-md flex flex-col justify-center">
                    <div class="md:text-5xl text-2xl uppercase font-black">Awesome tool for your future team</div>
                    <div class="text-xl mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <div class="my-5 h-16">
                        <div class="shadow-md font-medium py-2 px-4 text-yellow-100
                cursor-pointer bg-yellow-600 hover:bg-yellow-500 rounded text-lg text-center w-48">Join us now</div>
                    </div>
                </div>
                <div class="flex md:justify-end w-full md:w-1/2 -mt-5">
                    <div class="bg-dots">
                        <div class="shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4">
                            <img alt="card img" class="rounded-t" src="https://s.spielwarenmesse.de/fileadmin/data_archive/Relaunch_Spielwarenmesse/magazine/header/20190618_Header_Memes.jpg">
                            <div class="text-2xl p-10 "><img alt="quote" class="float-left mr-1" src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<!--        <div class="flex justify-center items-center" x-data="{toggle: '0'}">-->
<!--            <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js" defer></script>-->

<!--            <div class="relative rounded-full w-12 h-6 transition duration-200 ease-linear"-->
<!--                 :class="[toggle === '1' ? 'bg-green-400' : 'bg-gray-400']">-->
<!--                <label for="toggle"-->
<!--                       class="absolute left-0 bg-white border-2 mb-2 w-6 h-6 rounded-full transition transform duration-100 ease-linear cursor-pointer"-->
<!--                       :class="[toggle === '1' ? 'translate-x-full border-green-400' : 'translate-x-0 border-gray-400']"></label>-->
<!--                <input type="checkbox" id="toggle" name="toggle"-->
<!--                       class="appearance-none w-full h-full active:outline-none focus:outline-none"-->
<!--                       @click="toggle === '0' ? toggle = '1' : toggle = '0'"/>-->
<!--            </div>-->
<!--        </div>-->

    </div>
</template>

<script>
    export default {
        name: "NitsHLight",
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
               mode: 'dark',

           }
        },
        methods:{
            toggle(){
                if (this.mode === "dark"){
                    this.mode = "light"
                } else {
                    this.mode = "dark"
                }
            }
        }
    }
</script>

<style scoped>
    @import url('https://use.fontawesome.com/releases/v5.8.1/css/all.css');
    .app{

        /*font-size: 1rem;*/
        /*width: calc(100% - 20px);*/
        /*min-height: 100vh;*/
        /*padding: 10px;*/
        /*display: flex;*/
        /*justify-content: center;*/
        /*align-items: flex-start;*/
        /*transition: all .5s ease-in-out;*/

        /*color: #333;*/
        /*background-color: #efefef;*/
    }
    .dark{
        background-color: #192734;
        color: #f3f3f3;

    }
    .bg-dots{
        background-image: url(https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5dea7a12bb83ab1f13040de5_cx-dots.svg);
        background-repeat: no-repeat
    }
    .shadow-toggle {
        box-shadow: 1px 0px 2px 1px rgba(0, 0, 0, 0.1), -1px 1px 4px 1px rgba(0, 0, 0, 0.06);
    }

    .left-4 {
        left: 4%;
    }

    .left-96 {
        left: 96%
    }



</style>