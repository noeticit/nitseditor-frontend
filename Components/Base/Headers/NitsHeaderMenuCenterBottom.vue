<template>
    <div class="">
        <div class="flex h-24  mt-4 justify-center border-b">
            <div>
                <div class="items-center ">
                    <img src="/nits-assets/images/logo.png" alt="logo" class="h-20">
                </div>
            </div>
        </div>
        <nav class="flex sticky top-0 bg-white w-screen h-20 ">
            <div class="flex justify-between">

                <div class="flex ml-12 " >
                    <div class="float-right py-8 ml-64">
                        <div class="inline-block pl-4 mx-3 ">
                            <a class=" text-teal-600 font-semibold" href="">{{label1}}</a>
                        </div>
                        <div class="inline-block pl-2 mx-3 ">
                            <a class=" text-gray-800 hover:text-teal-600 font-semibold" href="">
                                {{label2}}
                            </a>
                        </div>
                        <div class="inline-block pl-2 mx-3 ">
                            <a class=" text-gray-800 hover:text-teal-600 font-semibold" href="">{{label3}}</a>
                        </div>
                        <div class="inline-block pl-2 mx-3 ">
                            <a class=" text-gray-800 hover:text-teal-600 font-semibold" href="">{{label4}}</a>
                        </div>
                        <div class="inline-block mx-3 ">
                            <a class=" text-gray-800 hover:text-teal-600 font-semibold" href="">{{label5}}</a>
                        </div>
                        <div class="inline-block mx-3 ">
                            <a class=" text-gray-800 hover:text-teal-600 font-semibold" href="">{{label6}}</a>
                        </div>
                        <div class="inline-block mx-3 ">
                            <a class=" text-gray-800 hover:text-teal-600 font-semibold" href="">{{label7}}</a>
                        </div>
                        <div class="inline-block mx-3  ">
                            <a class=" text-gray-800 hover:text-teal-600 font-semibold" href="">{{label8}}</a>
                        </div>

                    </div>

                </div>

                <div @click="box = ! box" class=" absolute right-0 mt-8 mr-32">
<!--                    <a @click="" class=" py-2 px-4 text-gray-800 text-lg font-semibold rounded-lg" href="">-->
                        <svg class="w-5 h-5 mx-64 " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M17.55 15.47l-3.78-3.78c.57-.94.9-2.04.9-3.21A6.52 6.52 0 008.28 2.1 6.18 6.18 0 002.1 8.3a6.52 6.52 0 006.38 6.37c1.13 0 2.2-.3 3.11-.84l3.8 3.8c.37.37.98.37 1.35 0l.94-.94c.37-.37.24-.84-.13-1.21zM4 8.29A4.28 4.28 0 018.3 4c2.36 0 4.47 2.11 4.47 4.48a4.28 4.28 0 01-4.28 4.28A4.62 4.62 0 014 8.3z"/>
                        </svg>
<!--                    </a>-->

                </div>
            </div>
            <div class="absolute flex top-0 w-full " v-if="box">
                <input class="w-full h-20 ml-2 border border-gray-300 py-1 px-10 bg-white rounded placeholder-gray-700 text-xl focus:outline-none antialiased tracking-wide font-medium text-teal-600 leading-normal" type="text" placeholder="TYPE HERE..">

                <svg @click="box = ! box" class="h-5 w-5 mt-6 mr-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2.939 12.789L10 11.729l-3.061 3.06-1.729-1.728L8.271 10l-3.06-3.061L6.94 5.21 10 8.271l3.059-3.061 1.729 1.729L11.729 10l3.06 3.061-1.728 1.728z"/>
                </svg>
            </div>

        </nav>

        <div class="absolute bottom-0 px-56 mb-16 ml-64 ">
            <h3 class=" font-black text-5xl text-white ">{{heading}}</h3>
        </div>
        <div class="h-11/12 w-screen">
            <img src="/project-assets/images/Regulatory-Compliance-Work-Blog.jpg" class="w-screen h-full" alt=" image">
        </div>
    </div>

</template>

<script>
    export default {
        name: "NitsHeaderMenuCenterBottom",
        data(){
            return{
                box: false
            }
        },

        props: {
            label1: {
                type: String,
                required: true
            },
            label2: {
                type: String,
                required: true
            },
            label3: {
                type: String,
                required: true
            },
            label4: {
                type: String,
                required: true
            },
            label5: {
                type: String,
                required: true
            },
            label6: {
                type: String,
                required: true
            },
            label7: {
                type: String,
                required: true
            },
            label8: {
                type: String,
                required: true
            },
            heading:{
                type: String,
                required: true
            }

        },

    }
</script>

<style scoped>

</style>