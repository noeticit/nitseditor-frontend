<template>
    <div class="">
        <div class=" bg-black  w-full">
            <nav class=" container mx-auto flex items-center justify-between flex-wrap px-4 lg:px-0 h-10 w-full">
                <div class=" flex items-center flex-shrink-0 mt-2">
                    <div class="text-white ml-6 ">All Cities</div>
                    <div class="">
                        <svg class="h-4 w-4 ml-1" version="1.1" id="Chevron_down" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                             y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                            <path fill="#FFFFFF" d="M4.516,7.548c0.436-0.446,1.043-0.481,1.576,0L10,11.295l3.908-3.747c0.533-0.481,1.141-0.446,1.574,0
                                c0.436,0.445,0.408,1.197,0,1.615c-0.406,0.418-4.695,4.502-4.695,4.502C10.57,13.888,10.285,14,10,14s-0.57-0.112-0.789-0.335
                                c0,0-4.287-4.084-4.695-4.502C4.107,8.745,4.08,7.993,4.516,7.548z"/>
                        </svg>
                    </div>
                </div>
                <div class="w-full h-full block lg:flex lg:items-center lg:w-auto hidden">
                    <div class="lg:flex-grow font-small  flex flex-col lg:flex-row pb-4 lg:pb-0 text-white text-sm">
                        <div class=" flex items-center flex-shrink-0 mr-4 mt-3">
                            <div class="">
                                <svg class="h-4 w-4" version="1.1" id="Phone" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                    <path fill="#FFFFFF" d="M11.229,11.229c-1.583,1.582-3.417,3.096-4.142,2.371c-1.037-1.037-1.677-1.941-3.965-0.102
                                        c-2.287,1.838-0.53,3.064,0.475,4.068c1.16,1.16,5.484,0.062,9.758-4.211c4.273-4.274,5.368-8.598,4.207-9.758
                                        c-1.005-1.006-2.225-2.762-4.063-0.475c-1.839,2.287-0.936,2.927,0.103,3.965C14.324,7.812,12.811,9.646,11.229,11.229z"/>
                                </svg>
                            </div>
                            <div class="text-white ml-1">+1800-123-7890</div>
                        </div>
                        <div class=" flex items-center flex-shrink-0 mt-3">
                            <div class="">
                                <svg class="h-4 w-4 ml-4" version="1.1" id="Download" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                    <path fill="#FFFFFF" d="M15,7h-3V1H8v6H5l5,5L15,7z M19.338,13.532c-0.21-0.224-1.611-1.723-2.011-2.114
                                    C17.062,11.159,16.683,11,16.285,11h-1.757l3.064,2.994h-3.544c-0.102,0-0.194,0.052-0.24,0.133L12.992,16H7.008l-0.816-1.873
                                    c-0.046-0.081-0.139-0.133-0.24-0.133H2.408L5.471,11H3.715c-0.397,0-0.776,0.159-1.042,0.418c-0.4,0.392-1.801,1.891-2.011,2.114
                                    c-0.489,0.521-0.758,0.936-0.63,1.449l0.561,3.074c0.128,0.514,0.691,0.936,1.252,0.936h16.312c0.561,0,1.124-0.422,1.252-0.936
                                    l0.561-3.074C20.096,14.468,19.828,14.053,19.338,13.532z"/>
                                </svg>
                            </div>
                            <div class="text-white ml-1">Download App</div>
                        </div>
                        <div class="ml-4 ">
                            <div  class="border block lg:inline-block lg:mt-12 mx-4 lg:h-25 lg:py-1 px-2 rounded-full hover:bg-white hover:text-black">
                                Sell/Rent Your Property
                            </div>
                        </div>
                        <div class="hover:text-gray-400 mt-3">
                            <a href="" class="border-l-4 lg:border-l-0 block mt-4 lg:inline-block lg:mt-0 mx-2 lg:h-25 lg:py-10 px-2">
                                Login/Register
                            </a>
                        </div>
                    </div>
                </div>



            </nav>
        </div>
        <div class="  fixed w-full">
            <nav class=" container mx-auto flex items-center justify-between flex-wrap px-4 lg:px-0 h-18 w-full">

                <div class="block lg:hidden py-5 flex" >
                    <div class="flex items-center px-3 py-2" >
                        <button @click="responsive_tab =! responsive_tab">
                            <svg class="w-8 h-8" version="1.1" id="Menu" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                            <path fill="#000000" d="M16.4,9H3.6C3.048,9,3,9.447,3,10c0,0.553,0.048,1,0.6,1h12.8c0.552,0,0.6-0.447,0.6-1S16.952,9,16.4,9z
                                 M16.4,13H3.6C3.048,13,3,13.447,3,14c0,0.553,0.048,1,0.6,1h12.8c0.552,0,0.6-0.447,0.6-1S16.952,13,16.4,13z M3.6,7h12.8
                                C16.952,7,17,6.553,17,6s-0.048-1-0.6-1H3.6C3.048,5,3,5.447,3,6S3.048,7,3.6,7z"/>
                        </svg>
                        </button>
                    </div>
                </div>
                <div class=" flex items-center flex-shrink-0 px-6  py-5">
                    <a class="">
                        <img class="w-48 h-auto" src="/nits-assets/images/logo.png">
                    </a>
                    <!--                <a class="w-20 h-18" src="/nits-assets/images/logo.png"></a>-->
                </div>
                <div class="block lg:hidden py-5 flex" >
                    <div class=" flex flex-row">
                        <div class="block mt-4 lg:inline-block lg:mt-0 ml-5 lg:h-25 lg:py-10 ">
                            <svg class="w-4 h-4" version="1.1" id="Magnifying_glass" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                 y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill="#000000" d="M17.545,15.467l-3.779-3.779c0.57-0.935,0.898-2.035,0.898-3.21c0-3.417-2.961-6.377-6.378-6.377
                                    C4.869,2.1,2.1,4.87,2.1,8.287c0,3.416,2.961,6.377,6.377,6.377c1.137,0,2.2-0.309,3.115-0.844l3.799,3.801
                                    c0.372,0.371,0.975,0.371,1.346,0l0.943-0.943C18.051,16.307,17.916,15.838,17.545,15.467z M4.004,8.287
                                    c0-2.366,1.917-4.283,4.282-4.283c2.366,0,4.474,2.107,4.474,4.474c0,2.365-1.918,4.283-4.283,4.283
                                    C6.111,12.76,4.004,10.652,4.004,8.287z"/>
                            </svg>
                        </div>
                        <div class=" block mt-4 lg:inline-block lg:mt-0 ml-4 mr-4 lg:h-25 lg:py-10 ">
                            <svg class="w-4 h-4" version="1.1" id="Shopping_cart" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                 y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill="#000000" d="M13,17c0,1.104,0.894,2,2,2c1.104,0,2-0.896,2-2c0-1.106-0.896-2-2-2C13.894,15,13,15.894,13,17z M3,17
                                    c0,1.104,0.895,2,2,2c1.103,0,2-0.896,2-2c0-1.106-0.897-2-2-2C3.895,15,3,15.894,3,17z M6.547,12.172L17.615,9.01
                                    C17.826,8.949,18,8.721,18,8.5V3H4V1.4C4,1.18,3.819,1,3.601,1H0.399C0.18,1,0,1.18,0,1.4V3h2l1.91,8.957L4,12.9v1.649
                                    c0,0.219,0.18,0.4,0.4,0.4h13.2c0.22,0,0.4-0.182,0.4-0.4V13H6.752C5.602,13,5.578,12.449,6.547,12.172z"/>
                            </svg>
                        </div>
                    </div>

                </div>
                <div class="block lg:hidden w-full h-full block lg:flex lg:items-center lg:w-auto"  v-if="responsive_tab">
                    <ul class="lg:flex-grow uppercase  flex flex-col lg:flex-row pb-4 lg:pb-0 ">
                        <li class="flex flex-row ">
                            <div class="w-11/12 pb-4 border-b-2 block mt-4 lg:inline-block lg:mt-0 ml-4 lg:h-25 lg:py-10 pl-2 text-gray-700 text-sm font-medium">
                                HOME
                            </div>
                            <div class="pb-4 border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">
                                <svg class="h-4  w-4" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                     y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                    <path fill="#000000" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                                    c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                                </svg>
                            </div>
                        </li>
                        <li class="flex flex-row ">
                            <div class="pb-4 w-11/12 border-b-2 block mt-4 lg:inline-block lg:mt-0 ml-4 lg:h-25 lg:py-10 pl-2 text-gray-700 text-sm font-medium">
                                FEATURES
                            </div>
                            <div class="pb-4  border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">
                                <svg class="h-4  w-4" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                     y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                    <path fill="#000000" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                                    c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                                </svg>
                            </div>
                        </li>
                        <li class="flex flex-row ">
                            <div class="pb-4 w-11/12 border-b-2 block mt-4 lg:inline-block lg:mt-0 ml-4 lg:h-25 lg:py-10 pl-2 text-gray-700 text-sm font-medium">
                                PAGES
                            </div>
                            <div class="pb-4  border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">
                                <svg class="h-4  w-4" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                     y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                    <path fill="#000000" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                                    c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                                </svg>
                            </div>
                        </li>
                        <li class="flex flex-row ">
                            <div class="pb-4 w-11/12 border-b-2 block mt-4 lg:inline-block lg:mt-0 ml-4 lg:h-25 lg:py-10 pl-2 text-gray-700 text-sm font-medium">
                                PORTFOLIO
                            </div>
                            <div class="pb-4  border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">
                                <svg class="h-4  w-4" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                     y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                    <path fill="#000000" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                                    c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                                </svg>
                            </div>
                        </li>
                        <li class="flex flex-row ">
                            <div class="pb-4 w-11/12 border-b-2 block mt-4 lg:inline-block lg:mt-0 ml-4 lg:h-25 lg:py-10 pl-2 text-gray-700 text-sm font-medium">
                                BLOG
                            </div>
                            <div class="pb-4  border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">
                                <svg class="h-4  w-4" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                     y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                    <path fill="#000000" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                                    c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                                </svg>
                            </div>
                        </li>
                        <li class="flex flex-row ">
                            <div class="pb-4 w-11/12 border-b-2 block mt-4 lg:inline-block lg:mt-0 ml-4 lg:h-25 lg:py-10 pl-2 text-gray-700 text-sm font-medium">
                                SHOP
                            </div>
                            <div class="pb-4  border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">
                                <svg class="h-4  w-4" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                     y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                    <path fill="#000000" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                                    c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                                </svg>
                            </div>
                        </li>
                        <li class="flex flex-row ">
                            <div class="pb-4 w-11/12 border-b-2 block mt-4 lg:inline-block lg:mt-0 ml-4 lg:h-25 lg:py-10 pl-2 text-gray-700 text-sm font-medium">
                                SHOTCODES
                            </div>
                            <div class="pb-4  border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">
                                <svg class="h-4  w-4" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                     y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                    <path fill="#000000" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                                    c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                                </svg>
                            </div>
                        </li>
                    </ul>
                </div>


                <div class="w-full h-full block lg:flex lg:items-center lg:w-auto hidden">
                    <ul class="lg:flex-grow font-medium uppercase flex flex-col lg:flex-row pb-4 lg:pb-0 text-white text-sm">
                        <li class="hover:text-gray-400">
                            <a href="" class="border-l-4 lg:border-l-0 block mt-4 lg:inline-block lg:mt-0 mx-4 lg:h-25 lg:py-10 px-2">
                                HOME
                            </a>
                        </li>
                        <li class=" hover:text-gray-400">
                            <a href="" class="border-l-4 lg:border-l-0 block mt-4 lg:inline-block lg:mt-0  mx-4 lg:h-25 lg:py-10 px-2">
                                FEATURES
                            </a>
                        </li>
                        <li class="hover:text-gray-400">
                            <a href="" class="border-l-4 lg:border-l-0 block mt-4 lg:inline-block lg:mt-0 mx-4 lg:h-25 lg:py-10 px-2">
                                PROPERTIES
                            </a>
                        </li>
                        <li class="hover:text-gray-400">
                            <a href="" class="border-l-4 lg:border-l-0 block mt-4 lg:inline-block lg:mt-0 mx-4 lg:h-25 lg:py-10 px-2">
                                BUILDERS
                            </a>
                        </li>
                        <li class="hover:text-gray-400">
                            <a href="" class="border-l-4 lg:border-l-0 block mt-4 lg:inline-block lg:mt-0 mx-4 lg:h-25 lg:py-10 px-2">
                                SERVICES
                            </a>
                        </li>
                        <li class="hover:text-gray-400">
                            <a href="" class="border-l-4 lg:border-l-0  block mt-4 lg:inline-block lg:mt-0 mx-4 lg:h-25 lg:py-10 px-2">
                                LISTING
                            </a>
                        </li>
                        <li class="hover:text-gray-400">
                            <a href="" class="border-l-4 lg:border-l-0  block mt-4 lg:inline-block lg:mt-0 mx-4 lg:h-25 lg:py-10 px-2">
                                <!--                            lg:border-b-4-->
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </div>



            </nav>
        </div>

        <div class=" w-full h-11/12 ">
            <a class="">
                <img class=" h-auto" src="/nits-assets/images/demo.jpg">
            </a>
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


    }
</script>

<style scoped>

</style>