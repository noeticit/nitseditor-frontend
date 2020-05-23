<template>
    <nav class="relative mx-auto bg-transparent w-screen">
        <div class="flex justify-between w-full">
            <div class=" text-lg  font-bold">
                <div class="flex pl-48 float-right">
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
            <div class="flex pr-40">
                <div class="hover:bg-gray-200">
                    <div class="my-4 mx-3 inline-block hover:text-teal-500 text-xs cursor-pointer text-gray-700">
                        {{location}}
                    </div>
                </div>
                <div class="border-l hover:bg-gray-200">
                    <div class="my-4 mx-4 inline-block hover:text-teal-500 text-xs cursor-pointer text-gray-700">
                        {{faqs}}
                    </div>
                </div>
                <div class="border-l hover:bg-gray-200">
                    <div class="my-4 mx-3 inline-block hover:text-teal-500 text-xs cursor-pointer text-gray-700">
                        {{contact}}
                    </div>
                </div>
            </div>
        </div>

        <div class="relative py-6 px-10 mx-auto bg-gray-100 w-screen">
            <div class="flex justify-between">
                <div class="float-left ml-32 text-black">
                    <img class="h-12 w-48 pr-5" :src="logo">
                </div>
                <div class=" text-lg ml-24 font-semibold">
                    <div class="flex float-right ml-24">
                        <div class="border-r px-10 flex">
                            <div class="inline-block cursor-default text-gray-700 p-1 mx-3">
                                <svg class="h-10 w-10 " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M11.229 11.229c-1.583 1.582-3.417 3.096-4.142 2.371-1.037-1.037-1.677-1.941-3.965-.102-2.287 1.838-.53 3.064.475 4.068 1.16 1.16 5.484.062 9.758-4.211 4.273-4.274 5.368-8.598 4.207-9.758-1.005-1.006-2.225-2.762-4.063-.475-1.839 2.287-.936 2.927.103 3.965.722.725-.791 2.559-2.373 4.142z"/>
                                </svg>
                            </div>
                            <div class="flex-col">
                                <div class="text-gray-600 text-sm font-light ">{{call}}</div>
                                <div class="text-orange-500 ">{{number}}</div>
                            </div>
                        </div>
                        <div class="flex border-r px-5">
                            <div class="inline-block cursor-default text-gray-700 p-1  mx-3">
                                <svg class="h-10 w-10 " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M1.574 5.286l7.5 4.029c.252.135.578.199.906.199.328 0 .654-.064.906-.199l7.5-4.029c.489-.263.951-1.286.054-1.286H1.521c-.897 0-.435 1.023.053 1.286zm17.039 2.203l-7.727 4.027c-.34.178-.578.199-.906.199s-.566-.021-.906-.199-7.133-3.739-7.688-4.028C.996 7.284 1 7.523 1 7.707V15c0 .42.566 1 1 1h16c.434 0 1-.58 1-1V7.708c0-.184.004-.423-.387-.219z"/>
                                </svg>
                            </div>
                            <div class="flex-col">
                                <div class="text-gray-600 text-sm font-light ">{{email}}</div>
                                <div class="text-orange-500 ">{{email_id}}</div>
                            </div>
                        </div>
                        <div class="flex mr-16">
                            <div class="inline-block cursor-default text-gray-700 p-1  mx-3">
                                <svg class="h-10 w-10 " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M7.376 6.745c-.447.275 1.197 4.242 1.598 4.888a1.206 1.206 0 002.053-1.266c-.397-.648-3.205-3.898-3.651-3.622zm-.335-4.343a8.98 8.98 0 015.918 0c.329.114.765-.115.572-.611-.141-.36-.277-.712-.332-.855-.131-.339-.6-.619-.804-.665C11.623.097 10.823 0 10 0S8.377.097 7.604.271c-.204.046-.672.326-.803.665l-.332.855c-.193.496.243.726.572.611zm12.057.784a10.132 10.132 0 00-1.283-1.285c-.153-.129-.603-.234-.888.051l-1.648 1.647a9.27 9.27 0 011.155.966c.362.361.677.752.966 1.155l1.647-1.647c.286-.286.181-.735.051-.887zM10 2.9A8.1 8.1 0 001.899 11 8.1 8.1 0 0010 19.101 8.1 8.1 0 0010 2.9zm0 14.201A6.1 6.1 0 1110.001 4.9 6.1 6.1 0 0110 17.1z"/>
                                </svg>
                            </div>
                            <div class="flex-col">
                                <div class="text-gray-600 text-sm font-light">{{open}}</div>
                                <div class="text-orange-500 ">{{day_time}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="sticky top-0 mx-auto bg-transparent w-screen">
            <div class="flex justify-between">
                <div class="flex text-lg ml-64 pl-48 h-24 font-semibold">
                    <nits-menus class="mt-8" :menus="menus"></nits-menus>
                    <div class="inline-block cursor-pointer mt-10 text-gray-700">
                        <svg @click="box = ! box" class="w-5 h-5 cursor-pointer text-gray-700 mx-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 00.898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 002.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 003.115-.844l3.799 3.801a.953.953 0 001.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 014.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 01-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="pl-32 pr-10 ml-48" v-if="box">
                <input class="w-full h-8 ml-2 border border-teal-300 mt-4 py-1 px-10 bg-gray-100 rounded placeholder-teal-600 text-sm focus:outline-none antialiased tracking-wide font-medium text-teal-600 leading-norma" type="text" placeholder="Search">
            </div>
        </div>
        <div class="h-screen w-screen bg-gray-200"></div>
    </nav>
</template>

<script>
    export default {
        name: "NitsHAndSubH",

        props: {
            location: {
                type: String,
                required: true
            },
            faqs: {
                type: String,
                required: true
            },
            contact: {
                type: String,
                required: true
            },
            call: {
                type: String,
                required: true
            },
            number: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            email_id: {
                type: String,
                required: true
            },
            open: {
                type: String,
                required: true
            },
            day_time: {
                type: String,
                required: true
            },
            menus: Array,
            logo: {
                type: String,
                required: true
            },
        },
        data(){
            return{
                box:false,
                isVisible: false,
                Visible: false,
                onVisible: false,
                isDropdown: false,
                isDrop: false,
                onDropdown: false,
                onDrop: false,
            }
        }
    }
</script>

<style scoped>

</style>