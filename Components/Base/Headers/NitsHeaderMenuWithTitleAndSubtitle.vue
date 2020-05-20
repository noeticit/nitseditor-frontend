<template>
    <div class="">
        <div class=" justify-between w-full  border-b-2 ">
            <div class=" flex">
            <div class="flex ml-40 sm:pl-4">
                <div class="hover:bg-gray-200">
                    <div class="my-4 mx-3 inline-block hover:text-teal-500 text-xs cursor-pointer text-gray-700">
                        HOME
                    </div>
                </div>
                <div class="border-l hover:bg-gray-200">
                    <div class="my-4 mx-4 inline-block hover:text-teal-500 text-xs cursor-pointer text-gray-700">
                        FAQS
                    </div>
                </div>
                <div class="border-l hover:bg-gray-200">
                    <div class="my-4 mx-3 inline-block hover:text-teal-500 text-xs cursor-pointer text-gray-700">
                        CONTACT
                    </div>
                </div>
                <div class="border-l border-r hover:bg-gray-200">
                    <div class="my-4 mx-3 inline-block hover:text-teal-500 text-xs cursor-pointer text-gray-700">
                        LOGIN
                    </div>
                </div>
            </div>
                <div class="flex pl-48 ml-1/3 float-right">
                    <div class="border-r">
                        <div class="inline-block hover:text-blue-800  cursor-pointer text-blue-700  ">
                            <svg class="h-5 w-5  my-4 mx-3 " xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="border-r">
                        <div class="inline-block cursor-pointer hover:text-teal-600  text-teal-500">
                            <svg class="h-5 w-5  my-4 mx-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M17.316 6.246c.008.162.011.326.011.488 0 4.99-3.797 10.742-10.74 10.742-2.133 0-4.116-.625-5.787-1.697a7.577 7.577 0 005.588-1.562 3.779 3.779 0 01-3.526-2.621 3.858 3.858 0 001.705-.065 3.779 3.779 0 01-3.028-3.703v-.047a3.766 3.766 0 001.71.473 3.775 3.775 0 01-1.168-5.041 10.716 10.716 0 007.781 3.945 3.813 3.813 0 01-.097-.861 3.773 3.773 0 013.774-3.773 3.77 3.77 0 012.756 1.191 7.602 7.602 0 002.397-.916 3.789 3.789 0 01-1.66 2.088 7.55 7.55 0 002.168-.594 7.623 7.623 0 01-1.884 1.953z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="border-r">
                        <div class="inline-block hover:text-gray-500 cursor-pointer  text-gray-700 ">
                            <svg class="h-5 w-5 my-4 mx-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M13.18 11.309c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799zm4.526-4.683c.149-.365.155-2.439-.635-4.426 0 0-1.811.199-4.551 2.08-.575-.16-1.548-.238-2.519-.238-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002 1.732-.002c1.506 0 7.467-.115 7.467-7.301 0-1.652-.566-2.863-1.494-3.871zm-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115 0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531.735.676 1.045 1.49 1.045 2.369 0 3.666-2.937 4.115-6.709 4.115zm-3.207-5.606c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801.719 0 1.301-.807 1.301-1.801 0-.992-.582-1.799-1.301-1.799z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="border-r">
                        <div class="inline-block hover:text-red-900 cursor-pointer  text-red-800">
                            <svg class="h-5 w-5 my-4 mx-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M8.617 13.227C8.091 15.981 7.45 18.621 5.549 20c-.586-4.162.861-7.287 1.534-10.605-1.147-1.93.138-5.812 2.555-4.855 2.975 1.176-2.576 7.172 1.15 7.922 3.891.781 5.479-6.75 3.066-9.199C10.369-.275 3.708 3.18 4.528 8.245c.199 1.238 1.478 1.613.511 3.322-2.231-.494-2.897-2.254-2.811-4.6.138-3.84 3.449-6.527 6.771-6.9 4.201-.471 8.144 1.543 8.689 5.494.613 4.461-1.896 9.293-6.389 8.945-1.218-.095-1.728-.699-2.682-1.279z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="border-r">
                        <div class="inline-block hover:text-gray-500 cursor-pointer text-gray-700">
                            <svg class="h-5 w-5 my-4 mx-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M9.565 7.421C8.207 5.007 6.754 3.038 6.648 2.893A7.876 7.876 0 002.311 8.38c.206.004 3.482.043 7.254-.959zm.978 2.64a11 11 0 01.309-.094 26.219 26.219 0 00-.637-1.336C6.169 9.843 2.287 9.755 2.15 9.751c-.003.084-.007.166-.007.25 0 2.019.763 3.861 2.016 5.252l-.005-.006s2.15-3.814 6.389-5.186zm-5.372 6.133v-.004c-.058-.045-.12-.086-.178-.135.106.085.178.139.178.139zM8.118 2.372a.546.546 0 01-.015.004c.006-.002.014-.002.014-.002l.001-.002zm7.071 1.732A7.83 7.83 0 0010 2.143c-.639 0-1.258.078-1.852.221.12.16 1.595 2.119 2.938 4.584 2.962-1.109 4.081-2.812 4.103-2.844zM10 19.2a9.2 9.2 0 01-9.199-9.199A9.199 9.199 0 0110 .8a9.2 9.2 0 019.2 9.201A9.2 9.2 0 0110 19.2zm1.336-7.914c-4.611 1.607-6.134 4.838-6.165 4.904a7.818 7.818 0 004.828 1.666 7.83 7.83 0 003.067-.621c-.116-.689-.573-3.096-1.679-5.967a1.464 1.464 0 01-.051.018zm.354-3.166c.184.373.358.754.523 1.139.059.135.114.272.17.406 2.713-.342 5.385.238 5.473.256a7.84 7.84 0 00-1.787-4.912c-.018.023-1.279 1.843-4.379 3.111zm1.171 2.785c1.031 2.836 1.449 5.142 1.529 5.611a7.858 7.858 0 003.367-5.27c-.156-.05-2.356-.747-4.896-.341z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="">
                        <div class="inline-block hover:text-orange-500 cursor-pointer  text-orange-700">
                            <svg class="h-5 w-5 my-4 mx-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 2.3C.172 2.3 0 3.174 0 10s.172 7.7 10 7.7 10-.874 10-7.7-.172-7.7-10-7.7zm3.205 8.034l-4.49 2.096c-.393.182-.715-.022-.715-.456V8.026c0-.433.322-.638.715-.456l4.49 2.096c.393.184.393.484 0 .668z"/>
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="bg-white shadow-lg w-full">

            <nav class=" container mx-auto flex items-center justify-between flex-wrap px-4 lg:px-0 h-18 w-full">

                <div class="block lg:hidden py-5 flex" >
                    <div class="flex items-center px-3 py-2" >
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
                                <path fill="#606060" d="M17.545,15.467l-3.779-3.779c0.57-0.935,0.898-2.035,0.898-3.21c0-3.417-2.961-6.377-6.378-6.377
                                    C4.869,2.1,2.1,4.87,2.1,8.287c0,3.416,2.961,6.377,6.377,6.377c1.137,0,2.2-0.309,3.115-0.844l3.799,3.801
                                    c0.372,0.371,0.975,0.371,1.346,0l0.943-0.943C18.051,16.307,17.916,15.838,17.545,15.467z M4.004,8.287
                                    c0-2.366,1.917-4.283,4.282-4.283c2.366,0,4.474,2.107,4.474,4.474c0,2.365-1.918,4.283-4.283,4.283
                                    C6.111,12.76,4.004,10.652,4.004,8.287z"/>
                            </svg>
                        </div>
                        <div class=" block mt-4 lg:inline-block lg:mt-0 ml-4 mr-4 lg:h-25 lg:py-10 ">
                            <svg class="w-4 h-4" version="1.1" id="Shopping_cart" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
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
                        <li class="flex flex-row "  v-for="item in menu">
                            <div class="w-11/12 pb-4 border-b-2 block mt-4 lg:inline-block lg:mt-0 ml-4 lg:h-25 lg:py-10 pl-2 text-gray-700 text-sm font-medium">
                                {{item}}
                            </div>
                            <div class="pb-4 border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">
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
                    <ul class="lg:flex-grow font-medium flex flex-col lg:flex-row pb-4 lg:pb-0  text-sm">
                        <li class="hover:bg-teal-500 hover:text-white border-r lg:border-r uppercase"  v-for="item in menu">
                            <a href="" class=" block mt-4 lg:inline-block lg:mt-0 mx-2 lg:h-25 lg:py-10 px-2 hover:text-white">
                                <div class="ml-2 text-gray-700">{{item}}</div>
                                <span class="text-gray-500 m-2"  v-for="item in submenu">{{item}}</span>
                            </a>
                        </li>
                    </ul>
                    <div class="hover:text-teal-400 lg:w-24 flex flex-row">
                        <div class="block mt-4 lg:inline-block lg:mt-0 ml-5 lg:h-25 lg:py-10 ">
                            <svg class="w-4 h-4" version="1.1" id="Magnifying_glass" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                 y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill="#606060" d="M17.545,15.467l-3.779-3.779c0.57-0.935,0.898-2.035,0.898-3.21c0-3.417-2.961-6.377-6.378-6.377
                                    C4.869,2.1,2.1,4.87,2.1,8.287c0,3.416,2.961,6.377,6.377,6.377c1.137,0,2.2-0.309,3.115-0.844l3.799,3.801
                                    c0.372,0.371,0.975,0.371,1.346,0l0.943-0.943C18.051,16.307,17.916,15.838,17.545,15.467z M4.004,8.287
                                    c0-2.366,1.917-4.283,4.282-4.283c2.366,0,4.474,2.107,4.474,4.474c0,2.365-1.918,4.283-4.283,4.283
                                    C6.111,12.76,4.004,10.652,4.004,8.287z"/>
                            </svg>
                        </div>
                        <div class=" block mt-4 lg:inline-block lg:mt-0 ml-4 mr-4 lg:h-25 lg:py-10 ">
                            <svg class="w-4 h-4" version="1.1" id="Shopping_cart" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
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
        name: "NitsHeaderMenuWithTitleAndSubtitle",
        props: {
            menu: Array,
            submenu: Array
        },
        data(){
            return{
                responsive_tab :false,
            }
        }
    }
</script>

<style scoped>

</style>