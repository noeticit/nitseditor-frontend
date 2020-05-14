<template>
    <div class="relative">
        <div class=" border-b">
            <div class="flex h-10 ml-16 mt-4 ">
               <div>
                   <p class=" text-gray-700">
                       <strong>Call:</strong>
                       1800-547-2145 |
                       <strong>Email:</strong>
                       info@nitseditor.com
                   </p>
               </div>
                <div class="flex absolute right-0 h-10 mr-40">
                   <div class="flex ">

                       <div class="inline-block border-r px-3">
                           <a class="" href="#">
                               <div class="flex font-semibold text-gray-700" >
                                   {{USD}}
    <!--                               USD-->
                                    <svg class="w-4 h-4  ml-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">-->
                                   <path fill-rule="evenodd" d="M13.42 7.86a.7.7 0 01.98 0c.27.27.27.7 0 .97l-3.91 3.83a.7.7 0 01-.98 0L5.6 8.83a.68.68 0 010-.97.7.7 0 01.97 0L10 11l3.42-3.14z"/>-->
                               </svg>
                               </div>
                           </a>
                       </div>
                       <div class="inline-block border-r px-3">
                           <a class="" href="#">
                               <div class="flex font-semibold text-gray-700" >
                                   {{EN}}
    <!--                               EN-->
                                   <svg class="w-4 h-4 ml-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">-->
                                       <path fill-rule="evenodd" d="M13.42 7.86a.7.7 0 01.98 0c.27.27.27.7 0 .97l-3.91 3.83a.7.7 0 01-.98 0L5.6 8.83a.68.68 0 010-.97.7.7 0 01.97 0L10 11l3.42-3.14z"/>-->
                                   </svg>
                               </div>
                           </a>
                       </div>
                       <div class="">
                           <a class="pl-2 mx-1 font-semibold text-gray-700" href="#">
                               LOGIN
                           </a>
                       </div>
                   </div>
                </div>
            </div>
        </div>

        <nav class="sticky top-0  bg-white flex w-screen h-32 ">
                <div class="flex justify-between">
                    <div class="float-left mt-6 ml-20 ">
                        <img src="/nits-assets/images/logo.png" alt="logo" class="h-20">
                    </div>
                    <div class="flex items-center " >
                        <div class="float-right ml-56">
                            <div class="inline-block pl-5 mx-3 ">
                                <a class=" text-gray-700 text-teal-500 font-semibold" href="">{{label1}}
    <!--                                HOME-->
                                </a>
                            </div>
                            <div class="inline-block pl-3 mx-3 ">
                                <a class=" text-gray-700 hover:text-teal-500 font-semibold" href="">{{label2}}
    <!--                                MEN-->
                                </a>
                            </div>
                            <div class="inline-block pl-3 mx-3 ">
                                <a class=" text-gray-700 hover:text-teal-500 font-semibold" href="">{{label3}}
    <!--                                WOMEN-->
                                </a>
                            </div>
                            <div class="inline-block pl-3 mx-3 ">
                                <a class=" text-gray-700 hover:text-teal-500 font-semibold" href="">{{label4}}
    <!--                                ACCESORIES-->
                                </a>
                            </div>
                            <div class="inline-block pl-3 mx-3 ">
                                <a class=" text-gray-700 hover:text-teal-500 font-semibold" href="">{{label5}}
    <!--                                SALE-->
                                </a>
                            </div>
                            <div class="inline-block pl-3 mx-3 ">
                                <a class=" text-gray-700 hover:text-teal-500 font-semibold" href="">{{label6}}
    <!--                                BLOG-->
                                </a>
                            </div>
                            <div class="inline-block pl-3 mx-3 ">
                                <a class=" text-gray-700 hover:text-teal-500 font-semibold" href="">{{label7}}
    <!--                                VIDEOS-->
                                </a>
                            </div>
                            <div class="inline-block pl-3 mx-3 ">
                                <a class=" text-gray-700 hover:text-teal-500 font-semibold" href="">{{label8}}
    <!--                                CONTACT-->
                                </a>
                            </div>

                        </div>

                    </div>

                    <div @click="searchbox = ! searchbox" class="  mt-2">
<!--                        <a  class=" py-2 px-24 text-gray-700 text-lg font-semibold rounded-lg" href="">-->
                            <svg class="w-5 h-5 mx-10 mt-12 " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M17.55 15.47l-3.78-3.78c.57-.94.9-2.04.9-3.21A6.52 6.52 0 008.28 2.1 6.18 6.18 0 002.1 8.3a6.52 6.52 0 006.38 6.37c1.13 0 2.2-.3 3.11-.84l3.8 3.8c.37.37.98.37 1.35 0l.94-.94c.37-.37.24-.84-.13-1.21zM4 8.29A4.28 4.28 0 018.3 4c2.36 0 4.47 2.11 4.47 4.48a4.28 4.28 0 01-4.28 4.28A4.62 4.62 0 014 8.3z"/>
                            </svg>
<!--                        </a>-->
                    </div>
                </div>

        </nav>

        <div class="absolute flex top-0 w-full " v-if="searchbox">
            <input class="w-full h-32 ml-2 border border-gray-300 mt-10 py-1 px-10 bg-white rounded placeholder-gray-700 text-xl focus:outline-none antialiased tracking-wide font-medium text-gray-700 leading-normal" type="text" placeholder="TYPE HERE..">

            <svg @click="searchbox = ! searchbox" class="h-5 w-5 mt-24 ml-0  " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2.939 12.789L10 11.729l-3.061 3.06-1.729-1.728L8.271 10l-3.06-3.061L6.94 5.21 10 8.271l3.059-3.061 1.729 1.729L11.729 10l3.06 3.061-1.728 1.728z"/>
            </svg>
        </div>

        <div class=" h-11/12 w-screen">
            <img src="/project-assets/images/HiRes1-150x150.jpg.jpg" class="w-screen h-full" alt=" image">
        </div>

    </div>
</template>

<script>
    export default {
        name: "NitsHeaderSubheaderTop",
        data(){
            return{
                searchbox: false,
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
            USD:{
                type: String,
                required: true
            },
            EN:{
                type: String,
                required: true
            },

        },

    }
</script>

<style scoped>

</style>