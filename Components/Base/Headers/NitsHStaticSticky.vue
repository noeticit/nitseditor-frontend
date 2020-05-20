<template>
    <div class="">
        <div class="bg-white shadow-lg fixed top-0 w-full">
            <nav class=" sm:container mx-auto flex items-center justify-between flex-wrap px-4 lg:px-0 h-18 w-full">

                <div class="block lg:hidden py-5 flex" >
                    <div class="flex items-center sm:px-3 sm:py-2" >
                        <button @click="responsive_tab =! responsive_tab">
                            <svg class="w-8 h-8" version="1.1" id="Menu" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                            <path fill="#606060" d="M16.4,9H3.6C3.048,9,3,9.447,3,10c0,0.553,0.048,1,0.6,1h12.8c0.552,0,0.6-0.447,0.6-1S16.952,9,16.4,9z
                                 M16.4,13H3.6C3.048,13,3,13.447,3,14c0,0.553,0.048,1,0.6,1h12.8c0.552,0,0.6-0.447,0.6-1S16.952,13,16.4,13z M3.6,7h12.8
                                C16.952,7,17,6.553,17,6s-0.048-1-0.6-1H3.6C3.048,5,3,5.447,3,6S3.048,7,3.6,7z"/>
                        </svg>
                        </button>
                    </div>
                </div>
                <div class=" flex items-center flex-shrink-0 md:px-6  md:py-5  lg:border-r-2">
                    <a class="" href="">
                        <img class="w-48 h-auto" src="/nits-assets/images/logo.png">
                    </a>
                    <!--                <a class="w-20 h-18" src="/nits-assets/images/logo.png"></a>-->
                </div>
                <div class="block lg:hidden py-5 flex" >
                    <div class=" flex flex-row">
                        <div class="block mt-4 lg:inline-block lg:mt-0 sm:ml-5 mr-2 lg:h-25 lg:py-10 " @click="search = ! search">
                            <!--                            <a href="">-->
                            <svg class="w-4 h-4 cursor-pointer" version="1.1" id="Magnifying_glass" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                 y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill="#606060" d="M17.545,15.467l-3.779-3.779c0.57-0.935,0.898-2.035,0.898-3.21c0-3.417-2.961-6.377-6.378-6.377
                                    C4.869,2.1,2.1,4.87,2.1,8.287c0,3.416,2.961,6.377,6.377,6.377c1.137,0,2.2-0.309,3.115-0.844l3.799,3.801
                                    c0.372,0.371,0.975,0.371,1.346,0l0.943-0.943C18.051,16.307,17.916,15.838,17.545,15.467z M4.004,8.287
                                    c0-2.366,1.917-4.283,4.282-4.283c2.366,0,4.474,2.107,4.474,4.474c0,2.365-1.918,4.283-4.283,4.283
                                    C6.111,12.76,4.004,10.652,4.004,8.287z"/>
                            </svg>
                            <!--                            </a>-->
                        </div>
                        <div class=" block mt-4 lg:inline-block lg:mt-0 sm:ml-4 sm:mr-4 lg:h-25 lg:py-10 ">
                            <svg class="w-4 h-4 cursor-pointer" version="1.1" id="Shopping_cart" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                 y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill="#606060" d="M13,17c0,1.104,0.894,2,2,2c1.104,0,2-0.896,2-2c0-1.106-0.896-2-2-2C13.894,15,13,15.894,13,17z M3,17
                                    c0,1.104,0.895,2,2,2c1.103,0,2-0.896,2-2c0-1.106-0.897-2-2-2C3.895,15,3,15.894,3,17z M6.547,12.172L17.615,9.01
                                    C17.826,8.949,18,8.721,18,8.5V3H4V1.4C4,1.18,3.819,1,3.601,1H0.399C0.18,1,0,1.18,0,1.4V3h2l1.91,8.957L4,12.9v1.649
                                    c0,0.219,0.18,0.4,0.4,0.4h13.2c0.22,0,0.4-0.182,0.4-0.4V13H6.752C5.602,13,5.578,12.449,6.547,12.172z"/>
                            </svg>
                        </div>
                    </div>

                </div>
                <div class="block lg:hidden w-full h-full block lg:flex lg:items-center lg:w-auto"  v-if="responsive_tab">
                    <ul class="lg:flex-grow uppercase  flex flex-col lg:flex-row pb-4 lg:pb-0 ">
                        <li class="flex flex-row cursor-pointer " @mouseover="isVisibleResponsiveHeader1 = true" @mouseleave="isVisibleResponsiveHeader1 = false" @keydown.enter="isVisibleResponsiveHeader1 = !isVisibleResponsiveHeader1">
                            <div class="w-11/12 pb-4 border-b-2 block mt-4 lg:inline-block lg:mt-0 ml-4 lg:h-25 lg:py-10 pl-2 hover:text-teal-500 text-gray-800 text-sm font-medium">
                                {{label1}}
                            </div>
                            <div class="pb-4 border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">
                                <svg class="h-4  w-4" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                     y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                    <path fill="#606060" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                                    c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                                </svg>
                            </div>
                        </li>
                        <li class="flex flex-row ml-4 cursor-pointer" v-show="isVisibleResponsiveHeader1" >
                            <div class="w-11/12 pb-4 border-b-2 block mt-4 lg:inline-block lg:mt-0 ml-4 lg:h-25 lg:py-10 pl-2 text-gray-600 text-sm ">
                                home
                            </div>
                            <div class="pb-4 border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">
                            </div>
                        </li>
                        <li class="flex flex-row  cursor-pointer">
                            <div class="pb-4 w-11/12 border-b-2 hover:text-teal-400 block mt-4 lg:inline-block lg:mt-0 ml-4 lg:h-25 lg:py-10 pl-2 text-gray-700 text-sm font-medium">
                                {{label2}}
                            </div>
                            <div class="pb-4  border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">
                                <svg class="h-4  w-4" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                     y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                    <path fill="#606060" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                                    c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                                </svg>
                            </div>
                        </li>
                        <li class="flex flex-row  cursor-pointer">
                            <div class="pb-4 w-11/12 border-b-2 block mt-4 lg:inline-block lg:mt-0 ml-4 lg:h-25 lg:py-10 pl-2 hover:text-teal-400 text-gray-700 text-sm font-medium">
                                {{label3}}
                            </div>
                            <div class="pb-4  border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">
                                <svg class="h-4  w-4" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                     y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                    <path fill="#606060" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                                    c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                                </svg>
                            </div>
                        </li>
                        <li class="flex flex-row  cursor-pointer">
                            <div class="pb-4 w-11/12 hover:text-teal-400 border-b-2 block mt-4 lg:inline-block lg:mt-0 ml-4 lg:h-25 lg:py-10 pl-2 text-gray-700 text-sm font-medium">
                                {{label4}}
                            </div>
                            <div class="pb-4  border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">
                                <svg class="h-4  w-4" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                     y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                    <path fill="#606060" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                                    c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                                </svg>
                            </div>
                        </li>
                        <li class="flex flex-row cursor-pointer">
                            <div class="pb-4 w-11/12 hover:text-teal-400 border-b-2 block mt-4 lg:inline-block lg:mt-0 ml-4 lg:h-25 lg:py-10 pl-2 text-gray-700 text-sm font-medium">
                                {{label5}}
                            </div>
                            <div class="pb-4  border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">
                                <svg class="h-4  w-4" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                     y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                    <path fill="#606060" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                                    c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                                </svg>
                            </div>
                        </li>
                        <li class="flex flex-row cursor-pointer">
                            <div class="pb-4 w-11/12 hover:text-teal-400 border-b-2 block mt-4 lg:inline-block lg:mt-0 ml-4 lg:h-25 lg:py-10 pl-2 text-gray-700 text-sm font-medium">
                                {{label6}}
                            </div>
                            <div class="pb-4  border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">
                                <svg class="h-4  w-4" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                     y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                    <path fill="#606060" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                                    c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                                </svg>
                            </div>
                        </li>
                        <li class="flex flex-row cursor-pointer">
                            <div class="pb-4 hover:text-teal-400 w-11/12 border-b-2 block mt-4 lg:inline-block lg:mt-0 ml-4 lg:h-25 lg:py-10 pl-2 text-gray-700 text-sm font-medium">
                                {{label7}}
                            </div>
                            <div class="pb-4  border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">
                                <svg class="h-4  w-4" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                     y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                    <path fill="#606060" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                                    c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                                </svg>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="w-full h-full block lg:flex lg:items-center lg:w-auto hidden">
                        <ul class="lg:flex-grow font-medium uppercase flex flex-col lg:flex-row pb-4 lg:pb-0 text-gray-700 text-sm">
                        <li class="hover:text-teal-400" v-for="item in staticsticky" @mouseover="isVisibleHeader1 = true" @mouseleave="isVisibleHeader1 = false" @keydown.enter="isVisibleHeader1 = !isVisibleHeader1">
                            <a href="" class="border-l-4 lg:border-l-0 block mt-4 lg:inline-block lg:mt-0 mx-4 lg:h-25 lg:py-10 px-2">
                                {{ item }}
                            </a>
                            <transition enter-active-class="transition duration-300 ease-out transform" enter-class="-translate-y-3 scale-95 opacity-0" enter-to-class="translate-y-0 scale-100 opacity-100" leave-active-class="transition duration-150 ease-in transform" leave-class="translate-y-0 opacity-100" leave-to-class="-translate-y-3 opacity-0">
                                <ul  class="dropdown-menu absolute  text-gray-600 bg-white border-t-2 border-teal-400" v-show="isVisibleHeader1">
                                <li class=" hover:text-teal-400"  @mouseover="isVisible1 = true" @mouseleave="isVisible1 = false" @keydown.enter="isVisible1 = !isVisible1"><a class="rounded-t  hover:bg-pink-100 py-4 px-4 block whitespace-no-wrap flex " href="#">
                                    <spam class="flex " >HOME-Coperate, Portfolio, blog</spam>
                                    <span>
<!--                                        <svg class="h-3  w-3 mt-1 items-end" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"-->
                                        <!--                                             y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">-->
                                        <!--                                            <path fill="#606060" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908-->
                                        <!--                                            c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>-->
                                        <!--                                        </svg>-->
                                    </span>
                                </a></li>
                                <!--                                <ul  class="dropdown-menu absolute  text-gray-600 bg-white " v-show="isVisible1">-->
                                <!--                                    <li class="hover:text-teal-400"><a class="rounded-t  hover:bg-pink-100 py-4 px-4 block whitespace-no-wrap flex " href="#">-->
                                <!--                                        <spam class="flex  ">HOME-Coperate</spam>-->
                                <!--                                        <span>-->
                                <!--                                    </span>-->
                                <!--                                    </a></li>-->
                                <!--                                </ul>-->
                                <li class=""  @mouseover="isVisible1 = true" @mouseleave="isVisible1 = false" @keydown.enter="isVisible1 = !isVisible1"><a class="rounded-t  hover:bg-pink-100 py-4 px-4 block whitespace-no-wrap flex " href="#">
                                    <spam class="flex  hover:text-teal-400" >HOME-Coperate, Portfolio, blog</spam>
                                    <span>

                                    </span>
                                </a></li>
                            </ul>
                            </transition>
                        </li>

<!--                        <li class="text-teal-400 hover:text-teal-400"   @mouseover="isVisibleHeader2 = true" @mouseleave="isVisibleHeader2 = false" @keydown.enter="isVisibleHeader2 = !isVisibleHeader2">-->
<!--                            <a href="" class="border-l-4 lg:border-l-0 block mt-4 lg:inline-block lg:mt-0  mx-4 lg:h-25 lg:py-10 px-2">-->
<!--                                {{label2}}-->
<!--                            </a>-->
<!--                            <transition enter-active-class="transition duration-300 ease-out transform" enter-class="-translate-y-3 scale-95 opacity-0" enter-to-class="translate-y-0 scale-100 opacity-100" leave-active-class="transition duration-150 ease-in transform" leave-class="translate-y-0 opacity-100" leave-to-class="-translate-y-3 opacity-0">-->
<!--                                <ul  class="dropdown-menu absolute  text-gray-600 bg-white border-t-2 border-teal-400" v-show="isVisibleHeader2">-->
<!--                                <li class=" hover:text-teal-400"><a class="rounded-t  hover:bg-pink-100 py-4 px-4 block whitespace-no-wrap flex " href="#">-->
<!--                                    <spam class="flex " >HOME-Coperate, Portfolio, blog</spam>-->
<!--                                    <span>-->
<!--&lt;!&ndash;                                        <svg class="h-3  w-3 mt-1 items-end" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"&ndash;&gt;-->
<!--                                        &lt;!&ndash;                                             y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">&ndash;&gt;-->
<!--                                        &lt;!&ndash;                                            <path fill="#606060" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908&ndash;&gt;-->
<!--                                        &lt;!&ndash;                                            c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>&ndash;&gt;-->
<!--                                        &lt;!&ndash;                                        </svg>&ndash;&gt;-->
<!--                                    </span>-->
<!--                                </a></li>-->
<!--                                <li class=""><a class="rounded-t  hover:bg-pink-100 py-4 px-4 block whitespace-no-wrap flex " href="#">-->
<!--                                    <spam class="flex  hover:text-teal-400" >HOME-Coperate, Portfolio, blog</spam>-->
<!--                                    <span>-->

<!--                                    </span>-->
<!--                                </a></li>-->
<!--                            </ul>-->
<!--                            </transition>-->
<!--                        </li>-->
<!--                        <li class="hover:text-teal-400">-->
<!--                            <a href="" class="border-l-4 lg:border-l-0 block mt-4 lg:inline-block lg:mt-0 mx-4 lg:h-25 lg:py-10 px-2">-->
<!--                                {{label3}}-->
<!--                            </a>-->
<!--                        </li>-->
<!--                        <li class="hover:text-teal-400">-->
<!--                            <a href="" class="border-l-4 lg:border-l-0 block mt-4 lg:inline-block lg:mt-0 mx-4 lg:h-25 lg:py-10 px-2">-->
<!--                                {{label4}}-->
<!--                            </a>-->
<!--                        </li>-->
<!--                        <li class="hover:text-teal-400">-->
<!--                            <a href="" class="border-l-4 lg:border-l-0 block mt-4 lg:inline-block lg:mt-0 mx-4 lg:h-25 lg:py-10 px-2">-->
<!--                                {{label5}}-->
<!--                            </a>-->
<!--                        </li>-->
<!--                        <li class="hover:text-teal-400">-->
<!--                            <a href="" class="border-l-4 lg:border-l-0  block mt-4 lg:inline-block lg:mt-0 mx-4 lg:h-25 lg:py-10 px-2">-->
<!--                                {{label6}}-->
<!--                            </a>-->
<!--                        </li>-->
<!--                        <li class="hover:text-teal-400">-->
<!--                            <a href="" class="border-l-4 lg:border-l-0  block mt-4 lg:inline-block lg:mt-0 mx-4 lg:h-25 lg:py-10 px-2">-->
<!--                                &lt;!&ndash;                            lg:border-b-4&ndash;&gt;-->
<!--                                {{label7}}-->
<!--                            </a>-->
<!--                        </li>-->
                    </ul>
                        <div class="hover:text-teal-400 border-l-4 lg:border-l-2 lg:w-24 flex flex-row">
                        <div class="block mt-4 lg:inline-block lg:mt-0 ml-5 lg:h-25 lg:py-10 " @click="search = ! search">
                            <svg class="w-4 h-4 cursor-pointer" version="1.1" id="Magnifying_glass" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                 y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill="#606060" d="M17.545,15.467l-3.779-3.779c0.57-0.935,0.898-2.035,0.898-3.21c0-3.417-2.961-6.377-6.378-6.377
                                    C4.869,2.1,2.1,4.87,2.1,8.287c0,3.416,2.961,6.377,6.377,6.377c1.137,0,2.2-0.309,3.115-0.844l3.799,3.801
                                    c0.372,0.371,0.975,0.371,1.346,0l0.943-0.943C18.051,16.307,17.916,15.838,17.545,15.467z M4.004,8.287
                                    c0-2.366,1.917-4.283,4.282-4.283c2.366,0,4.474,2.107,4.474,4.474c0,2.365-1.918,4.283-4.283,4.283
                                    C6.111,12.76,4.004,10.652,4.004,8.287z"/>
                            </svg>
                        </div>
                        <div class=" block mt-4 lg:inline-block lg:mt-0 ml-4 mr-4 lg:h-25 lg:py-10 ">
                            <svg class="w-4 h-4 cursor-pointer" version="1.1" id="Shopping_cart" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                 y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill="#606060" d="M13,17c0,1.104,0.894,2,2,2c1.104,0,2-0.896,2-2c0-1.106-0.896-2-2-2C13.894,15,13,15.894,13,17z M3,17
                                    c0,1.104,0.895,2,2,2c1.103,0,2-0.896,2-2c0-1.106-0.897-2-2-2C3.895,15,3,15.894,3,17z M6.547,12.172L17.615,9.01
                                    C17.826,8.949,18,8.721,18,8.5V3H4V1.4C4,1.18,3.819,1,3.601,1H0.399C0.18,1,0,1.18,0,1.4V3h2l1.91,8.957L4,12.9v1.649
                                    c0,0.219,0.18,0.4,0.4,0.4h13.2c0.22,0,0.4-0.182,0.4-0.4V13H6.752C5.602,13,5.578,12.449,6.547,12.172z"/>
                            </svg>
                        </div>
                    </div>

                </div>
            </nav>
            <div class="absolute  top-0 w-full " v-if="search">
                <div class="flex bg-white h-18">
                    <input class="w-full h-20 ml-2  lg:text-4xl text-gray-600 mt-4 py-1 px-10 bg-white  rounded placeholder-teal-600 text-sm focus:outline-none antialiased tracking-wide font-medium text-teal-600 leading-norma" type="text" placeholder="TYPE & HIT ENTER">

                    <svg @click="search = ! search" class="w-8 h-20 mt-4" version="1.1" id="Cross" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                        <path fill="#606060" d="M14.348,14.849c-0.469,0.469-1.229,0.469-1.697,0L10,11.819l-2.651,3.029c-0.469,0.469-1.229,0.469-1.697,0
                            c-0.469-0.469-0.469-1.229,0-1.697l2.758-3.15L5.651,6.849c-0.469-0.469-0.469-1.228,0-1.697s1.228-0.469,1.697,0L10,8.183
                            l2.651-3.031c0.469-0.469,1.228-0.469,1.697,0s0.469,1.229,0,1.697l-2.758,3.152l2.758,3.15
                            C14.817,13.62,14.817,14.38,14.348,14.849z"/>
                    </svg>
                </div>
            </div>
        </div>

        <div class=" w-full h-11/12 ">
            <a class="" >
                <img class=" h-auto" src="/nits-assets/images/demo.jpg">
            </a>
        </div>

<!--        <section class="px-4 py-4 sm:pt-56">-->
<!--            <div class="container mx-auto">-->
<!--                <div class="py-6 sm:py-8 sm:flex flex-wrap justify-between">-->
<!--                    <div class="w-full sm:w-1/2">-->
<!--                        <h3 class="text-xl lg:text-2xl font-regular text-blue-900">-->
<!--                            We’re your local-->
<!--                        </h3>-->
<!--                        <h1 class="text-2xl sm:text-xl lg:text-5xl font-semibold text-blue-900">-->
<!--                            website design company. Innovation starts with us.-->
<!--                        </h1>-->
<!--                        <p class="text-lg sm:text-sm lg:text-xl text-gray-700 py-4 mb-10">-->
<!--                            We craft unique and meaningful, experiences that will sublime your-->
<!--                            business. We are specialized team of programmers and web developers-->
<!--                            in PHP Laravel. We are reliable-->
<!--                        </p>-->
<!--                        <div class="flex items-center">-->
<!--                            <a href="" class="px-4 py-3 bg-blue-900 text-white rounded-lg mr-2 text-sm lg:text-lg">More about us</a>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="w-full sm:w-1/2">-->
<!--                        <div class="w-full mt-20 sm:mt-0">-->
<!--                            <img src="/nits-assets/images/hero.svg" alt="Website Design Agency" class="w-full h-full">-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->

<!--        </section>-->

<!--        <section>-->
<!--            <div>-->
<!--                <div class="container mx-auto">-->
<!--                    <div class="sm:flex flex-wrap justify-center items-center text-center">-->
<!--                        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4">-->
<!--                            <img src="/nits-assets/images/website-design.svg" alt="Website Design Agency" class="block mx-auto">-->
<!--                            <h3 class="text-2xl sm:text-xl lg:text-4xl text-blue-900 py-4">-->
<!--                                Website Design-->
<!--                            </h3>-->
<!--                            <p class="text-lg sm:text-sm lg:text-xl text-gray-700 py-4">-->
<!--                                Encompassing today’s website design technology to integrated and build solutions relevant to your business.-->
<!--                            </p>-->
<!--                        </div>-->
<!--                        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 sm:mt-16 md:mt-32 lg:mt-64">-->
<!--                            <img src="/nits-assets/images/business-branding.svg" alt="Branding for Website Design Agency" class="block mx-auto">-->
<!--                            <h3 class="text-2xl sm:text-xl lg:text-4xl text-blue-900 py-4">-->
<!--                                Branding-->
<!--                            </h3>-->
<!--                            <p class="text-lg sm:text-sm lg:text-xl text-gray-700 py-4">-->
<!--                                Share relevant, engaging, and inspirational brand messages to create a connection with your audience.-->
<!--                            </p>-->
<!--                        </div>-->
<!--                        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4">-->
<!--                            <img src="/nits-assets/images/website-marketing.svg" alt="Marketing for Website Design Agency" class="block mx-auto">-->
<!--                            <h3 class="text-2xl sm:text-xl lg:text-4xl text-blue-900 py-4">-->
<!--                                Marketing-->
<!--                            </h3>-->
<!--                            <p class="text-lg sm:text-sm lg:text-xl text-gray-700 py-4">-->
<!--                                Let us help you level up your search engine game, explore our solutions for digital marketing for your business.-->
<!--                            </p>-->
<!--                        </div>-->
<!--                        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 sm:mt-16 md:mt-32 lg:mt-64">-->
<!--                            <img src="/nits-assets/images/ecommerce-solutions.svg" alt="eCommerce for Website Design Agency" class="block mx-auto">-->
<!--                            <h3 class="text-2xl sm:text-xl lg:text-4xl text-blue-900 py-4">-->
<!--                                Ecommerce Solution-->
<!--                            </h3>-->
<!--                            <p class="text-lg sm:text-sm lg:text-xl text-gray-700 py-4">-->
<!--                                Ready to enhance your e-commerce solutions for brick-mortar stores, small-mid size business, large corporation.-->
<!--                            </p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </section>-->


    </div>
</template>

<script>
    export default {
        name: "NitsHStaticSticky",
        props: {
            name: {
                type: String,
                required: true
            },
            staticsticky: Array
        },
        data(){
            return{
                responsive_tab :false,
                isVisibleHeader1: false,
                isVisibleHeader2: false,
                isVisibleResponsiveHeader1: false,
                isVisibleResponsiveSubHeader1: false,
                search :false,
            }
        }
    }
</script>

<style scoped>

</style>