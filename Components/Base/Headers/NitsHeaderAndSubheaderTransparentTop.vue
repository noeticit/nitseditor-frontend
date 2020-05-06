<template>
<!--    <div class="">-->
<!--        <div class=" bg-black  w-full">-->
<!--            <nav class=" container mx-auto flex items-center justify-between flex-wrap px-4 lg:px-0 h-10 w-full">-->
<!--                <div class=" flex items-center flex-shrink-0 mt-2">-->
<!--                    <div class="text-white ml-6 ">All Cities</div>-->
<!--                    <div class="">-->
<!--                        <svg class="h-4 w-4 ml-1" version="1.1" id="Chevron_down" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"-->
<!--                             y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">-->
<!--                            <path fill="#FFFFFF" d="M4.516,7.548c0.436-0.446,1.043-0.481,1.576,0L10,11.295l3.908-3.747c0.533-0.481,1.141-0.446,1.574,0-->
<!--                                c0.436,0.445,0.408,1.197,0,1.615c-0.406,0.418-4.695,4.502-4.695,4.502C10.57,13.888,10.285,14,10,14s-0.57-0.112-0.789-0.335-->
<!--                                c0,0-4.287-4.084-4.695-4.502C4.107,8.745,4.08,7.993,4.516,7.548z"/>-->
<!--                        </svg>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="w-full h-full block lg:flex lg:items-center lg:w-auto hidden">-->
<!--                    <div class="lg:flex-grow font-small  flex flex-col lg:flex-row pb-4 lg:pb-0 text-white text-sm">-->
<!--                        <div class=" flex items-center flex-shrink-0 mr-4 mt-3">-->
<!--                            <div class="">-->
<!--                                <svg class="h-4 w-4" version="1.1" id="Phone" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"-->
<!--                                     viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">-->
<!--                                    <path fill="#FFFFFF" d="M11.229,11.229c-1.583,1.582-3.417,3.096-4.142,2.371c-1.037-1.037-1.677-1.941-3.965-0.102-->
<!--                                        c-2.287,1.838-0.53,3.064,0.475,4.068c1.16,1.16,5.484,0.062,9.758-4.211c4.273-4.274,5.368-8.598,4.207-9.758-->
<!--                                        c-1.005-1.006-2.225-2.762-4.063-0.475c-1.839,2.287-0.936,2.927,0.103,3.965C14.324,7.812,12.811,9.646,11.229,11.229z"/>-->
<!--                                </svg>-->
<!--                            </div>-->
<!--                            <div class="text-white ml-1">+1800-123-7890</div>-->
<!--                        </div>-->
<!--                        <div class=" flex items-center flex-shrink-0 mt-3">-->
<!--                            <div class="">-->
<!--                                <svg class="h-4 w-4 ml-4" version="1.1" id="Download" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"-->
<!--                                     viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">-->
<!--                                    <path fill="#FFFFFF" d="M15,7h-3V1H8v6H5l5,5L15,7z M19.338,13.532c-0.21-0.224-1.611-1.723-2.011-2.114-->
<!--                                    C17.062,11.159,16.683,11,16.285,11h-1.757l3.064,2.994h-3.544c-0.102,0-0.194,0.052-0.24,0.133L12.992,16H7.008l-0.816-1.873-->
<!--                                    c-0.046-0.081-0.139-0.133-0.24-0.133H2.408L5.471,11H3.715c-0.397,0-0.776,0.159-1.042,0.418c-0.4,0.392-1.801,1.891-2.011,2.114-->
<!--                                    c-0.489,0.521-0.758,0.936-0.63,1.449l0.561,3.074c0.128,0.514,0.691,0.936,1.252,0.936h16.312c0.561,0,1.124-0.422,1.252-0.936-->
<!--                                    l0.561-3.074C20.096,14.468,19.828,14.053,19.338,13.532z"/>-->
<!--                                </svg>-->
<!--                            </div>-->
<!--                            <div class="text-white ml-1">Download App</div>-->
<!--                        </div>-->
<!--                        <div class="ml-4 ">-->
<!--                            <div  class="border block lg:inline-block lg:mt-12 mx-4 lg:h-25 lg:py-1 px-2 rounded-full hover:bg-white hover:text-black">-->
<!--                                Sell/Rent Your Property-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="hover:text-gray-400 mt-3">-->
<!--                            <a href="" class="border-l-4 lg:border-l-0 block mt-4 lg:inline-block lg:mt-0 mx-2 lg:h-25 lg:py-10 px-2">-->
<!--                                Login/Register-->
<!--                            </a>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->



<!--            </nav>-->
<!--        </div>-->
<!--        <div class="  fixed w-full">-->
<!--            <nav class=" container mx-auto flex items-center justify-between flex-wrap px-4 lg:px-0 h-18 w-full">-->

<!--                <div class="block lg:hidden py-5 flex" >-->
<!--                    <div class="flex items-center px-3 py-2" >-->
<!--                        <button @click="responsive_tab =! responsive_tab">-->
<!--                            <svg class="w-8 h-8" version="1.1" id="Menu" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"-->
<!--                                 viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">-->
<!--                            <path fill="#000000" d="M16.4,9H3.6C3.048,9,3,9.447,3,10c0,0.553,0.048,1,0.6,1h12.8c0.552,0,0.6-0.447,0.6-1S16.952,9,16.4,9z-->
<!--                                 M16.4,13H3.6C3.048,13,3,13.447,3,14c0,0.553,0.048,1,0.6,1h12.8c0.552,0,0.6-0.447,0.6-1S16.952,13,16.4,13z M3.6,7h12.8-->
<!--                                C16.952,7,17,6.553,17,6s-0.048-1-0.6-1H3.6C3.048,5,3,5.447,3,6S3.048,7,3.6,7z"/>-->
<!--                        </svg>-->
<!--                        </button>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class=" flex items-center flex-shrink-0 px-6  py-5">-->
<!--                    <a class="">-->
<!--                        <img class="w-48 h-auto" src="/nits-assets/images/logo.png">-->
<!--                    </a>-->
<!--                    &lt;!&ndash;                <a class="w-20 h-18" src="/nits-assets/images/logo.png"></a>&ndash;&gt;-->
<!--                </div>-->
<!--                <div class="block lg:hidden py-5 flex" >-->
<!--                    <div class=" flex flex-row">-->
<!--                        <div class="block mt-4 lg:inline-block lg:mt-0 ml-5 lg:h-25 lg:py-10 ">-->
<!--                            <svg class="w-4 h-4" version="1.1" id="Magnifying_glass" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"-->
<!--                                 y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">-->
<!--                                <path fill="#000000" d="M17.545,15.467l-3.779-3.779c0.57-0.935,0.898-2.035,0.898-3.21c0-3.417-2.961-6.377-6.378-6.377-->
<!--                                    C4.869,2.1,2.1,4.87,2.1,8.287c0,3.416,2.961,6.377,6.377,6.377c1.137,0,2.2-0.309,3.115-0.844l3.799,3.801-->
<!--                                    c0.372,0.371,0.975,0.371,1.346,0l0.943-0.943C18.051,16.307,17.916,15.838,17.545,15.467z M4.004,8.287-->
<!--                                    c0-2.366,1.917-4.283,4.282-4.283c2.366,0,4.474,2.107,4.474,4.474c0,2.365-1.918,4.283-4.283,4.283-->
<!--                                    C6.111,12.76,4.004,10.652,4.004,8.287z"/>-->
<!--                            </svg>-->
<!--                        </div>-->
<!--                        <div class=" block mt-4 lg:inline-block lg:mt-0 ml-4 mr-4 lg:h-25 lg:py-10 ">-->
<!--                            <svg class="w-4 h-4" version="1.1" id="Shopping_cart" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"-->
<!--                                 y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">-->
<!--                                <path fill="#000000" d="M13,17c0,1.104,0.894,2,2,2c1.104,0,2-0.896,2-2c0-1.106-0.896-2-2-2C13.894,15,13,15.894,13,17z M3,17-->
<!--                                    c0,1.104,0.895,2,2,2c1.103,0,2-0.896,2-2c0-1.106-0.897-2-2-2C3.895,15,3,15.894,3,17z M6.547,12.172L17.615,9.01-->
<!--                                    C17.826,8.949,18,8.721,18,8.5V3H4V1.4C4,1.18,3.819,1,3.601,1H0.399C0.18,1,0,1.18,0,1.4V3h2l1.91,8.957L4,12.9v1.649-->
<!--                                    c0,0.219,0.18,0.4,0.4,0.4h13.2c0.22,0,0.4-0.182,0.4-0.4V13H6.752C5.602,13,5.578,12.449,6.547,12.172z"/>-->
<!--                            </svg>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                </div>-->
<!--                <div class="block lg:hidden w-full h-full block lg:flex lg:items-center lg:w-auto"  v-if="responsive_tab">-->
<!--                    <ul class="lg:flex-grow uppercase  flex flex-col lg:flex-row pb-4 lg:pb-0 ">-->
<!--                        <li class="flex flex-row ">-->
<!--                            <div class="w-11/12 pb-4 border-b-2 block mt-4 lg:inline-block lg:mt-0 ml-4 lg:h-25 lg:py-10 pl-2 text-gray-700 text-sm font-medium">-->
<!--                                HOME-->
<!--                            </div>-->
<!--                            <div class="pb-4 border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">-->
<!--                                <svg class="h-4  w-4" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"-->
<!--                                     y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">-->
<!--                                    <path fill="#000000" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908-->
<!--                                    c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>-->
<!--                                </svg>-->
<!--                            </div>-->
<!--                        </li>-->
<!--                        <li class="flex flex-row ">-->
<!--                            <div class="pb-4 w-11/12 border-b-2 block mt-4 lg:inline-block lg:mt-0 ml-4 lg:h-25 lg:py-10 pl-2 text-gray-700 text-sm font-medium">-->
<!--                                FEATURES-->
<!--                            </div>-->
<!--                            <div class="pb-4  border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">-->
<!--                                <svg class="h-4  w-4" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"-->
<!--                                     y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">-->
<!--                                    <path fill="#000000" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908-->
<!--                                    c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>-->
<!--                                </svg>-->
<!--                            </div>-->
<!--                        </li>-->
<!--                        <li class="flex flex-row ">-->
<!--                            <div class="pb-4 w-11/12 border-b-2 block mt-4 lg:inline-block lg:mt-0 ml-4 lg:h-25 lg:py-10 pl-2 text-gray-700 text-sm font-medium">-->
<!--                                PAGES-->
<!--                            </div>-->
<!--                            <div class="pb-4  border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">-->
<!--                                <svg class="h-4  w-4" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"-->
<!--                                     y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">-->
<!--                                    <path fill="#000000" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908-->
<!--                                    c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>-->
<!--                                </svg>-->
<!--                            </div>-->
<!--                        </li>-->
<!--                        <li class="flex flex-row ">-->
<!--                            <div class="pb-4 w-11/12 border-b-2 block mt-4 lg:inline-block lg:mt-0 ml-4 lg:h-25 lg:py-10 pl-2 text-gray-700 text-sm font-medium">-->
<!--                                PORTFOLIO-->
<!--                            </div>-->
<!--                            <div class="pb-4  border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">-->
<!--                                <svg class="h-4  w-4" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"-->
<!--                                     y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">-->
<!--                                    <path fill="#000000" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908-->
<!--                                    c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>-->
<!--                                </svg>-->
<!--                            </div>-->
<!--                        </li>-->
<!--                        <li class="flex flex-row ">-->
<!--                            <div class="pb-4 w-11/12 border-b-2 block mt-4 lg:inline-block lg:mt-0 ml-4 lg:h-25 lg:py-10 pl-2 text-gray-700 text-sm font-medium">-->
<!--                                BLOG-->
<!--                            </div>-->
<!--                            <div class="pb-4  border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">-->
<!--                                <svg class="h-4  w-4" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"-->
<!--                                     y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">-->
<!--                                    <path fill="#000000" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908-->
<!--                                    c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>-->
<!--                                </svg>-->
<!--                            </div>-->
<!--                        </li>-->
<!--                        <li class="flex flex-row ">-->
<!--                            <div class="pb-4 w-11/12 border-b-2 block mt-4 lg:inline-block lg:mt-0 ml-4 lg:h-25 lg:py-10 pl-2 text-gray-700 text-sm font-medium">-->
<!--                                SHOP-->
<!--                            </div>-->
<!--                            <div class="pb-4  border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">-->
<!--                                <svg class="h-4  w-4" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"-->
<!--                                     y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">-->
<!--                                    <path fill="#000000" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908-->
<!--                                    c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>-->
<!--                                </svg>-->
<!--                            </div>-->
<!--                        </li>-->
<!--                        <li class="flex flex-row ">-->
<!--                            <div class="pb-4 w-11/12 border-b-2 block mt-4 lg:inline-block lg:mt-0 ml-4 lg:h-25 lg:py-10 pl-2 text-gray-700 text-sm font-medium">-->
<!--                                SHOTCODES-->
<!--                            </div>-->
<!--                            <div class="pb-4  border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">-->
<!--                                <svg class="h-4  w-4" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"-->
<!--                                     y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">-->
<!--                                    <path fill="#000000" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908-->
<!--                                    c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>-->
<!--                                </svg>-->
<!--                            </div>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </div>-->


<!--                <div class="w-full h-full block lg:flex lg:items-center lg:w-auto hidden">-->
<!--                    <ul class="lg:flex-grow font-medium uppercase flex flex-col lg:flex-row pb-4 lg:pb-0 text-white text-sm">-->
<!--                        <li class="hover:text-gray-400">-->
<!--                            <a href="" class="border-l-4 lg:border-l-0 block mt-4 lg:inline-block lg:mt-0 mx-4 lg:h-25 lg:py-10 px-2">-->
<!--                                HOME-->
<!--                            </a>-->
<!--                        </li>-->
<!--                        <li class=" hover:text-gray-400">-->
<!--                            <a href="" class="border-l-4 lg:border-l-0 block mt-4 lg:inline-block lg:mt-0  mx-4 lg:h-25 lg:py-10 px-2">-->
<!--                                FEATURES-->
<!--                            </a>-->
<!--                        </li>-->
<!--                        <li class="hover:text-gray-400">-->
<!--                            <a href="" class="border-l-4 lg:border-l-0 block mt-4 lg:inline-block lg:mt-0 mx-4 lg:h-25 lg:py-10 px-2">-->
<!--                                PROPERTIES-->
<!--                            </a>-->
<!--                        </li>-->
<!--                        <li class="hover:text-gray-400">-->
<!--                            <a href="" class="border-l-4 lg:border-l-0 block mt-4 lg:inline-block lg:mt-0 mx-4 lg:h-25 lg:py-10 px-2">-->
<!--                                BUILDERS-->
<!--                            </a>-->
<!--                        </li>-->
<!--                        <li class="hover:text-gray-400">-->
<!--                            <a href="" class="border-l-4 lg:border-l-0 block mt-4 lg:inline-block lg:mt-0 mx-4 lg:h-25 lg:py-10 px-2">-->
<!--                                SERVICES-->
<!--                            </a>-->
<!--                        </li>-->
<!--                        <li class="hover:text-gray-400">-->
<!--                            <a href="" class="border-l-4 lg:border-l-0  block mt-4 lg:inline-block lg:mt-0 mx-4 lg:h-25 lg:py-10 px-2">-->
<!--                                LISTING-->
<!--                            </a>-->
<!--                        </li>-->
<!--                        <li class="hover:text-gray-400">-->
<!--                            <a href="" class="border-l-4 lg:border-l-0  block mt-4 lg:inline-block lg:mt-0 mx-4 lg:h-25 lg:py-10 px-2">-->
<!--                                &lt;!&ndash;                            lg:border-b-4&ndash;&gt;-->
<!--                                CONTACT-->
<!--                            </a>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </div>-->



<!--            </nav>-->
<!--        </div>-->

<!--        <div class=" w-full h-11/12 ">-->
<!--            <a class="">-->
<!--                <img class=" h-auto" src="/nits-assets/images/demo.jpg">-->
<!--            </a>-->
<!--        </div>-->
<!--    </div>-->


    <div class="bg-white font-sans ">
        <nav class="bg-gray-200 h-16  ">
            <div class="flex justify-between ">
                <div class="mx-4 my-1">
                    <svg class=" h-16 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 272.1">
                        <path d="M142.8 120.1c-5.7 0-10.2 4.9-10.2 11s4.6 11 10.2 11c5.7 0 10.2-4.9 10.2-11s-4.6-11-10.2-11zM106.3 120.1c-5.7 0-10.2 4.9-10.2 11s4.6 11 10.2 11c5.7 0 10.2-4.9 10.2-11 .1-6.1-4.5-11-10.2-11z"/><path d="M191.4 36.9h-134c-11.3 0-20.5 9.2-20.5 20.5v134c0 11.3 9.2 20.5 20.5 20.5h113.4l-5.3-18.3 12.8 11.8 12.1 11.1 21.6 18.7V57.4c-.1-11.3-9.3-20.5-20.6-20.5zm-38.6 129.5s-3.6-4.3-6.6-8c13.1-3.7 18.1-11.8 18.1-11.8-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.4-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.6-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.2-1.8-1-2.8-1.7-2.8-1.7s4.8 7.9 17.5 11.7c-3 3.8-6.7 8.2-6.7 8.2-22.1-.7-30.5-15.1-30.5-15.1 0-31.9 14.4-57.8 14.4-57.8 14.4-10.7 28-10.4 28-10.4l1 1.2c-18 5.1-26.2 13-26.2 13s2.2-1.2 5.9-2.8c10.7-4.7 19.2-5.9 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.5 0 0-7.9-7.5-24.9-12.6l1.4-1.6s13.7-.3 28 10.4c0 0 14.4 25.9 14.4 57.8 0-.1-8.4 14.3-30.5 15zM303.8 79.7h-33.2V117l22.1 19.9v-36.2h11.8c7.5 0 11.2 3.6 11.2 9.4v27.7c0 5.8-3.5 9.7-11.2 9.7h-34v21.1h33.2c17.8.1 34.5-8.8 34.5-29.2v-29.8c.1-20.8-16.6-29.9-34.4-29.9zm174 59.7v-30.6c0-11 19.8-13.5 25.8-2.5l18.3-7.4c-7.2-15.8-20.3-20.4-31.2-20.4-17.8 0-35.4 10.3-35.4 30.3v30.6c0 20.2 17.6 30.3 35 30.3 11.2 0 24.6-5.5 32-19.9l-19.6-9c-4.8 12.3-24.9 9.3-24.9-1.4zM417.3 113c-6.9-1.5-11.5-4-11.8-8.3.4-10.3 16.3-10.7 25.6-.8l14.7-11.3c-9.2-11.2-19.6-14.2-30.3-14.2-16.3 0-32.1 9.2-32.1 26.6 0 16.9 13 26 27.3 28.2 7.3 1 15.4 3.9 15.2 8.9-.6 9.5-20.2 9-29.1-1.8l-14.2 13.3c8.3 10.7 19.6 16.1 30.2 16.1 16.3 0 34.4-9.4 35.1-26.6 1-21.7-14.8-27.2-30.6-30.1zm-67 55.5h22.4V79.7h-22.4v88.8zM728 79.7h-33.2V117l22.1 19.9v-36.2h11.8c7.5 0 11.2 3.6 11.2 9.4v27.7c0 5.8-3.5 9.7-11.2 9.7h-34v21.1H728c17.8.1 34.5-8.8 34.5-29.2v-29.8c0-20.8-16.7-29.9-34.5-29.9zm-162.9-1.2c-18.4 0-36.7 10-36.7 30.5v30.3c0 20.3 18.4 30.5 36.9 30.5 18.4 0 36.7-10.2 36.7-30.5V109c0-20.4-18.5-30.5-36.9-30.5zm14.4 60.8c0 6.4-7.2 9.7-14.3 9.7-7.2 0-14.4-3.1-14.4-9.7V109c0-6.5 7-10 14-10 7.3 0 14.7 3.1 14.7 10v30.3zM682.4 109c-.5-20.8-14.7-29.2-33-29.2h-35.5v88.8h22.7v-28.2h4l20.6 28.2h28L665 138.1c10.7-3.4 17.4-12.7 17.4-29.1zm-32.6 12h-13.2v-20.3h13.2c14.1 0 14.1 20.3 0 20.3z"/>
                    </svg>
                </div>

                <div class="dropdown inline-block relative mx-4 my-1">
                    <button class="h-10 w-10 rounded-full m-2 bg-white overflow-hidden"   @mouseover="onOver" @mouseleave="onLeave">
                        <svg class=" h-full w-full " version="1.1" id="User" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                            <path fill="#000000" d="M7.725,2.146c-1.016,0.756-1.289,1.953-1.239,2.59C6.55,5.515,6.708,6.529,6.708,6.529
	                        s-0.313,0.17-0.313,0.854C6.504,9.1,7.078,8.359,7.196,9.112c0.284,1.814,0.933,1.491,0.933,2.481c0,1.649-0.68,2.42-2.803,3.334
	                        C3.196,15.845,1,17,1,19v1h18v-1c0-2-2.197-3.155-4.328-4.072c-2.123-0.914-2.801-1.684-2.801-3.334c0-0.99,0.647-0.667,0.932-2.481
	                        c0.119-0.753,0.692-0.012,0.803-1.729c0-0.684-0.314-0.854-0.314-0.854s0.158-1.014,0.221-1.793c0.065-0.817-0.398-2.561-2.3-3.096
	                        c-0.333-0.34-0.558-0.881,0.466-1.424C9.439,0.112,8.918,1.284,7.725,2.146z"/>
                    </svg>
                    </button>
                    <ul class="dropdown-menu absolute right-0 text-gray-700 pt-1 " ref="dropdown">
                        <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap flex" href="#">
                            <spam class="flex">
                                <svg class="h-4 w-4 my-1 mx-2" version="1.1" id="Cog" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                     viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                    <path fill="#808080" d="M16.783,10c0-1.049,0.646-1.875,1.617-2.443c-0.176-0.584-0.407-1.145-0.692-1.672
	                                c-1.089,0.285-1.97-0.141-2.711-0.883c-0.741-0.74-0.968-1.621-0.683-2.711c-0.527-0.285-1.088-0.518-1.672-0.691
	                                C12.074,2.57,11.047,3.215,10,3.215c-1.048,0-2.074-0.645-2.643-1.615C6.772,1.773,6.213,2.006,5.686,2.291
	                                c0.285,1.09,0.059,1.971-0.684,2.711C4.262,5.744,3.381,6.17,2.291,5.885C2.006,6.412,1.774,6.973,1.6,7.557
	                                C2.57,8.125,3.215,8.951,3.215,10c0,1.047-0.645,2.074-1.615,2.643c0.175,0.584,0.406,1.144,0.691,1.672
	                                c1.09-0.285,1.971-0.059,2.711,0.682c0.741,0.742,0.969,1.623,0.684,2.711c0.527,0.285,1.087,0.518,1.672,0.693
	                                c0.568-0.973,1.595-1.617,2.643-1.617c1.047,0,2.074,0.645,2.643,1.617c0.584-0.176,1.144-0.408,1.672-0.693
	                                c-0.285-1.088-0.059-1.969,0.683-2.711c0.741-0.74,1.622-1.166,2.711-0.883c0.285-0.527,0.517-1.086,0.692-1.672
	                                C17.429,11.873,16.783,11.047,16.783,10z M10,13.652c-2.018,0-3.653-1.635-3.653-3.652c0-2.018,1.636-3.654,3.653-3.654
	                                c2.018,0,3.652,1.637,3.652,3.654C13.652,12.018,12.018,13.652,10,13.652z"/>
                            </svg>
                            </spam>
                            <spam class="flex">General Settings</spam>
                        </a></li>

                        <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap flex" href="#">
                            <spam class="flex">
                                <svg class="h-4 w-4 my-1 mx-2" version="1.1" id="Users" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                        <path fill="#808080" d="M15.989,19.129c0-2.246-2.187-3.389-4.317-4.307c-2.123-0.914-2.801-1.684-2.801-3.334
	                                    c0-0.989,0.648-0.667,0.932-2.481c0.12-0.752,0.692-0.012,0.802-1.729c0-0.684-0.313-0.854-0.313-0.854s0.159-1.013,0.221-1.793
	                                    c0.064-0.817-0.398-2.56-2.301-3.095C7.88,1.195,7.655,0.654,8.679,0.112c-2.24-0.104-2.761,1.068-3.954,1.93
	                                    c-1.015,0.756-1.289,1.953-1.24,2.59c0.065,0.78,0.223,1.793,0.223,1.793s-0.314,0.17-0.314,0.854
	                                    c0.11,1.718,0.684,0.977,0.803,1.729C4.481,10.822,5.13,10.5,5.13,11.489c0,1.65-0.212,2.21-2.336,3.124
	                                    C0.663,15.53,0,17,0.011,19.129C0.014,19.766,0,20,0,20h16C16,20,15.989,19.766,15.989,19.129z M18.528,13.365
	                                     c-1.135-0.457-1.605-1.002-1.605-2.066c0-0.641,0.418-0.432,0.602-1.603c0.077-0.484,0.447-0.008,0.518-1.115
	                                     c0-0.441-0.202-0.551-0.202-0.551s0.103-0.656,0.143-1.159c0.05-0.627-0.364-2.247-2.268-2.247c-1.903,0-2.318,1.62-2.269,2.247
	                                     c0.042,0.502,0.144,1.159,0.144,1.159s-0.202,0.109-0.202,0.551c0.071,1.107,0.441,0.631,0.518,1.115
	                                    c0.184,1.172,0.602,0.963,0.602,1.603c0,1.064-0.438,1.562-1.809,2.152c-0.069,0.029-0.12,0.068-0.183,0.102
	                                    c1.64,0.712,4.226,1.941,4.838,4.447H20c0,0,0-1.906,0-2.318C20,14.682,19.727,13.848,18.528,13.365z"/>
                                </svg>
                            </spam>
                            <spam class="flex">My Profile</spam>
                        </a></li>

                        <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap flex" href="#">
                            <spam class="flex">
                                <svg  class="h-4 w-4 my-1 mx-2" version="1.1" id="Log_out" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                    <path fill="#808080" d="M19,10l-6-5v3H6v4h7v3L19,10z M3,3h8V1H3C1.9,1,1,1.9,1,3v14c0,1.1,0.9,2,2,2h8v-2H3V3z"/>
                                </svg>
                            </spam>
                            <spam class="flex">Signout</spam>
                        </a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="flex mx-8 my-5">
            <div class=" w-1/5  rounded-lg">

                <section class="">
                    <article class="border-b">
                        <div class="border-l-2 bg-grey-lightest border-indigo">
                            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none bg-white">
                            <span class="text-indigo font-thin text-xl">
                                Search
                            </span>
                                <div class="rounded-full border border border-indigo w-7 h-7 flex items-center justify-center bg-indigo">
                                    <button @click="search =! search">
                                        <svg aria-hidden="true" data-reactid="281" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <polyline points="18 15 12 9 6 15">
                                            </polyline>
                                        </svg>
                                    </button>
                                </div>
                            </header>
                            <div class="bg-white">
                                <div class=""  v-if="search">
                                    <input class="bg-gray-200  h-10 pr-16 rounded-lg my-5 mx-6 px-5 pr-16"
                                           type="search" name="search" placeholder="Search">
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="border-b">
                        <div class="border-l-2 bg-grey-lightest border-indigo">
                            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none bg-white">
                            <span class="text-indigo font-thin text-xl">
                                State
                            </span>
                                <div class="rounded-full border border border-indigo w-7 h-7 flex items-center justify-center bg-indigo">
                                    <button @click="state =! state">
                                        <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <polyline points="6 9 12 15 18 9">
                                            </polyline>
                                        </svg>
                                    </button>
                                </div>
                            </header>
                            <div class="bg-white ">
                                <div class="my-3 "  v-if="state">
                                    <label class=" items-center ml-8 pt-8 ">
                                        <input type="checkbox" class="checkbox" name="statename" value="gujarat">
                                        <span class="ml-2 pt-8">Gujarat</span>
                                    </label>
                                    <label class=" items-center ml-8 pt-8 ">
                                        <input type="checkbox" class="checkbox" name="statename" value="goa">
                                        <span class="ml-2 pt-8">Goa</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </article>


                </section>
            </div>

            <div class="max-h-full flex  mx-8">
                <div class=" bg-gray-300 rounded-lg  shadow overflow-x-auto">
                    <table class="w-full whitespace-no-wrap overflow-hidden ">
                        <thead>
                        <tr class="text-left">
                            <th class="px-8 py-3 text-gray-700 font-bold uppercase ">Number</th>
                            <th class="px-8 py-3 text-gray-700 font-bold uppercase ">Name</th>
                            <th class="px-8 py-3 text-gray-700 font-bold uppercase ">Email</th>
                            <th class="px-8 py-3 text-gray-700 font-bold uppercase ">Date</th>
                            <th class="px-8 py-3 text-gray-700 font-bold uppercase ">Amount</th>
                            <th class="px-8 py-3 text-gray-700 font-bold uppercase ">Status</th>
                        </tr>
                        </thead>
                        <tbody class="bg-white">
                        <tr class=" overflow-hidden">
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 items-center flex">A123</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">ABC</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">ABC@gmail.com</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">01 April 2020</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">₹12,000</span>
                            </td>
                            <td class="border-t">
									<span class="px-6 py-4 flex items-center">
										<span class=" text-sm uppercase bg-green-200 text-green-800 font-semibold rounded-full px-2 py-1">Completed</span>
									</span>
                            </td>
                        </tr>
                        <tr class=" overflow-hidden">
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 items-center flex">A123</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">ABC</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">ABC@gmail.com</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">01 April 2020</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">₹12,000</span>
                            </td>
                            <td class="border-t">
									<span class="px-6 py-4 flex items-center">
										<span class=" text-sm uppercase bg-red-200 text-red-800 font-semibold rounded-full px-2 py-1">Pending</span>
									</span>
                            </td>
                        </tr>
                        <tr class=" overflow-hidden">
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 items-center flex">A123</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">ABC</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">ABC@gmail.com</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">01 April 2020</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">₹12,000</span>
                            </td>
                            <td class="border-t">
									<span class="px-6 py-4 flex items-center">
										<span class=" text-sm uppercase bg-green-200 text-green-800 font-semibold rounded-full px-2 py-1">Completed</span>
									</span>
                            </td>
                        </tr>
                        <tr class=" overflow-hidden">
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 items-center flex">A123</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">ABC</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">ABC@gmail.com</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">01 April 2020</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">₹12,000</span>
                            </td>
                            <td class="border-t">
									<span class="px-6 py-4 flex items-center">
										<span class=" text-sm uppercase bg-green-200 text-green-800 font-semibold rounded-full px-2 py-1">Completed</span>
									</span>
                            </td>
                        </tr>
                        <tr class=" overflow-hidden">
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 items-center flex">A123</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">ABC</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">ABC@gmail.com</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">01 April 2020</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">₹12,000</span>
                            </td>
                            <td class="border-t">
									<span class="px-6 py-4 flex items-center">
										<span class=" text-sm uppercase bg-red-200 text-red-800 font-semibold rounded-full px-2 py-1">Pending</span>
									</span>
                            </td>
                        </tr>
                        <tr class=" overflow-hidden">
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 items-center flex">A123</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">ABC</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">ABC@gmail.com</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">01 April 2020</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">₹12,000</span>
                            </td>
                            <td class="border-t">
									<span class="px-6 py-4 flex items-center">
										<span class=" text-sm uppercase bg-green-200 text-green-800 font-semibold rounded-full px-2 py-1">Completed</span>
									</span>
                            </td>
                        </tr>
                        <tr class=" overflow-hidden">
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 items-center flex">A123</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">ABC</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">ABC@gmail.com</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">01 April 2020</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">₹12,000</span>
                            </td>
                            <td class="border-t">
									<span class="px-6 py-4 flex items-center">
										<span class=" text-sm uppercase bg-red-200 text-red-800 font-semibold rounded-full px-2 py-1">Pending</span>
									</span>
                            </td>
                        </tr>
                        <tr class=" overflow-hidden">
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 items-center flex">A123</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">ABC</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">ABC@gmail.com</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">01 April 2020</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">₹12,000</span>
                            </td>
                            <td class="border-t">
									<span class="px-6 py-4 flex items-center">
										<span class=" text-sm uppercase bg-red-200 text-red-800 font-semibold rounded-full px-2 py-1">Pending</span>
									</span>
                            </td>
                        </tr>
                        <tr class=" overflow-hidden">
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 items-center flex">A123</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">ABC</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">ABC@gmail.com</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">01 April 2020</span>
                            </td>
                            <td class="border-t">
                                <span class="text-gray-700 px-6 py-4 flex items-center">₹12,000</span>
                            </td>
                            <td class="border-t">
									<span class="px-6 py-4 flex items-center">
										<span class=" text-sm uppercase bg-green-200 text-green-800 font-semibold rounded-full px-2 py-1">Completed</span>
									</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>



    </div>


</template>

<script>
    export default {
        name: "NitsHeaderAndSubheaderTransparentTop",
        data(){
            return{
                responsive_tab :false,
            }
        },

        methods:{
            onOver(){
                this.$refs.dropdown.visible = true;
            },
            onLeave(){
                this.$refs.dropdown.visible = false;
            }
        }
    }
</script>

<style scoped>

</style>