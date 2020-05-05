<template>
    <div class="">
        <div class=" fixed w-full">
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
                <div class=" flex items-center flex-shrink-0 px-6  py-5 ">
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
                    <ul class="lg:flex-grow font-medium uppercase flex flex-col lg:flex-row pb-4 lg:pb-0 text-gray-700 text-sm">
                        <li class="hover:text-teal-400 mt-2">
                            <a href="" >
                                <div class="border block lg:inline-block  rounded-full p-4 m-1 bg-white hover:bg-teal-500">
                                    <svg class="w-6 h-6 " version="1.1" id="Home" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                         viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                        <path fill="#000000" d="M18.672,11H17v6c0,0.445-0.194,1-1,1h-4v-6H8v6H4c-0.806,0-1-0.555-1-1v-6H1.328
                                        c-0.598,0-0.47-0.324-0.06-0.748L9.292,2.22C9.487,2.018,9.743,1.918,10,1.908c0.257,0.01,0.513,0.109,0.708,0.312l8.023,8.031
                                        C19.142,10.676,19.27,11,18.672,11z"/>
                                    </svg>
                                </div>
                                <div class="ml-4">
                                    INTRO
                                </div>
                            </a>
                        </li>
                        <li class="text-teal-400 hover:text-teal-400 mt-2">
                            <a href="" >
                                <div class="border block lg:inline-block  rounded-full p-4 m-1 ml-2 bg-white hover:bg-teal-500">
                                    <svg class="w-6 h-6" version="1.1" id="Star" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                         viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                        <path fill="#000000" d="M10,1.3l2.388,6.722H18.8l-5.232,3.948l1.871,6.928L10,14.744l-5.438,4.154l1.87-6.928L1.199,8.022h6.412
                                            L10,1.3z"/>
                                    </svg>
                                </div>
                                <div class="ml-4">
                                    SKILLS
                                </div>
                            </a>
                        </li>
                        <li class="hover:text-teal-400 mt-2">
                            <a href="" >
                                <div class="border block lg:inline-block  rounded-full p-4 m-1 ml-2 bg-white hover:bg-teal-500">
                                    <svg class="w-6 h-6" version="1.1" id="User" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                         viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                        <path fill="#000000" d="M7.725,2.146c-1.016,0.756-1.289,1.953-1.239,2.59C6.55,5.515,6.708,6.529,6.708,6.529
                                            s-0.313,0.17-0.313,0.854C6.504,9.1,7.078,8.359,7.196,9.112c0.284,1.814,0.933,1.491,0.933,2.481c0,1.649-0.68,2.42-2.803,3.334
                                            C3.196,15.845,1,17,1,19v1h18v-1c0-2-2.197-3.155-4.328-4.072c-2.123-0.914-2.801-1.684-2.801-3.334c0-0.99,0.647-0.667,0.932-2.481
                                            c0.119-0.753,0.692-0.012,0.803-1.729c0-0.684-0.314-0.854-0.314-0.854s0.158-1.014,0.221-1.793c0.065-0.817-0.398-2.561-2.3-3.096
                                            c-0.333-0.34-0.558-0.881,0.466-1.424C9.439,0.112,8.918,1.284,7.725,2.146z"/>
                                    </svg>
                                </div>
                                <div class="ml-4">
                                    ABOUT
                                </div>
                            </a>
                        </li>
                        <li class="hover:text-teal-400 mt-2">
                            <a href="" >
                            <div class="border block lg:inline-block  rounded-full p-4 m-1 ml-2 bg-white hover:bg-teal-500">
                                <svg class="w-6 h-6" version="1.1" id="Sweden" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                        <g>
                                            <path fill="#000000" d="M18,4H9v5h10V5C19,4.447,18.553,4,18,4z M1,15c0,0.553,0.248,1,0.8,1H7v-5H1V15z M9,16h9
                                                c0.553,0,1-0.447,1-1v-4H9V16z M1,5v4h6V4H1.8C1.248,4,1,4.447,1,5z"/>
                                        </g>
                                </svg>

                            </div>
                                <div class="ml-4">
                                    BLOGS
                                </div>
                        </a>
                        </li>
                        <li class="hover:text-teal-400 mt-2">
                            <a href="" >
                                <div class="border block lg:inline-block  rounded-full p-4 m-1 ml-2 bg-white hover:bg-teal-500">
                                    <svg class="w-6 h-6" version="1.1" id="Pencil" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                         viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                        <path fill="#000000" d="M14.69,2.661c-1.894-1.379-3.242-1.349-3.754-1.266c-0.144,0.023-0.265,0.106-0.35,0.223l-4.62,6.374
                                            l-2.263,3.123c-0.277,0.382-0.437,0.836-0.462,1.307l-0.296,5.624c-0.021,0.405,0.382,0.698,0.76,0.553l5.256-2.01
                                            c0.443-0.17,0.828-0.465,1.106-0.849l1.844-2.545l5.036-6.949c0.089-0.123,0.125-0.273,0.1-0.423
                                            C16.963,5.297,16.56,4.021,14.69,2.661z M8.977,15.465l-2.043,0.789c-0.08,0.031-0.169,0.006-0.221-0.062
                                            c-0.263-0.335-0.576-0.667-1.075-1.03c-0.499-0.362-0.911-0.558-1.31-0.706c-0.08-0.03-0.131-0.106-0.126-0.192l0.122-2.186
                                            l0.549-0.755c0,0,1.229-0.169,2.833,0.998c1.602,1.166,1.821,2.388,1.821,2.388L8.977,15.465z"/>
                                    </svg>
                                </div>
                                <div class="ml-3">
                                    ARTICLES
                                </div>
                            </a>
                        </li>
                        <li class="hover:text-teal-400 mt-2">
                            <a href="" >
                                <div class="border block lg:inline-block  rounded-full p-4 m-1 ml-2 bg-white hover:bg-teal-500">
                                    <svg class="w-6 h-6" version="1.1" id="Mail" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                         viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                        <path fill="#000000" d="M1.574,5.286c0.488,0.262,7.248,3.894,7.5,4.029C9.326,9.45,9.652,9.514,9.98,9.514
                                            c0.328,0,0.654-0.064,0.906-0.199s7.012-3.767,7.5-4.029C18.875,5.023,19.337,4,18.44,4H1.521C0.624,4,1.086,5.023,1.574,5.286z
                                             M18.613,7.489c-0.555,0.289-7.387,3.849-7.727,4.027s-0.578,0.199-0.906,0.199s-0.566-0.021-0.906-0.199S1.941,7.777,1.386,7.488
                                            C0.996,7.284,1,7.523,1,7.707S1,15,1,15c0,0.42,0.566,1,1,1h16c0.434,0,1-0.58,1-1c0,0,0-7.108,0-7.292S19.004,7.285,18.613,7.489z"
                                        />
                                    </svg>
                                </div>
                                <div class="ml-4">
                                    CONTACT
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>



            </nav>
        </div>
        <div class=" w-full h-11/12 ">
            <a class="">
<!--                <img class=" h-auto" src="/nits-assets/images/demo.jpg">-->
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NitsHeaderWithIcon",
        data(){
            return{
                responsive_tab :false,
            }
        }
    }
</script>

<style scoped>

</style>