<template>
   <div class="relative">
<!--      <img src="/project-assets/images/HiRes1-150x150.jpg.jpg" class="h-full w-full" alt=" image">-->

       <nav  class="sticky top-0 bg-white flex w-screen h-32 ">
        <div class="flex justify-between">
          <div class="float-left ml-20 mt-6 ">
            <img src="/nits-assets/images/nits-editor-logo.png" alt="logo" class="h-20">
          </div>

          <div class=" flex items-center ml-4" >
            <div class="float-right ml-64 mt-1">
<!--                <div class="inline-block pl-4 mx-5 " >-->
                    <ul class="lg:flex-grow font-medium uppercase flex flex-col lg:flex-row pb-4 lg:pb-0 text-gray-700">
                        <li class="hover:text-teal-400"  @mouseover="isVisibleHeader1 = true" @mouseleave="isVisibleHeader1 = false" @keydown.enter="isVisibleHeader1 = !isVisibleHeader1">
                           <a class="text-teal-600 font-semibold mt-4 lg:inline-block lg:mt-0 mx-4 lg:py-12 px-2"  href="">
                          {{label1}}
 <!--                        HOME-->
                           </a>
                          <ul v-show="isVisibleHeader1" class="dropdown-menu absolute w-56 text-gray-600 bg-white border-t-2 border-teal-400" >
                          <li class=" hover:text-teal-500"  @mouseover="isVisible1 = true" @mouseleave="isVisible1 = false" @keydown.enter="isVisible1 = !isVisible1">
                             <a class="rounded-t  hover:bg-gray-100 py-4 px-4 block whitespace-no-wrap flex " href="#">
                             <span class="block" >HOME-CORPORATE</span>
                             <span class="mr-auto">
                                  <svg class="absolute right-0 w-5 h-5  ml-40 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M11 10L7.86 6.58a.7.7 0 010-.98c.27-.27.7-.27.97 0l3.83 3.91a.7.7 0 010 .98l-3.83 3.9a.68.68 0 01-.97 0 .7.7 0 010-.97L11 10z"/>
                                </svg>
                             </span>
                                    </a>
                                </li>

                                <li class=""  @mouseover="isVisible1 = true" @mouseleave="isVisible1 = false" @keydown.enter="isVisible1 = !isVisible1">
                                    <a class="rounded-t  hover:bg-gray-100 py-4 px-4 block whitespace-no-wrap flex " href="#">
                                        <span class="flex  hover:text-teal-500" >HOME-PORFOLIO</span>
                                        <span class="mr-auto">
                                            <svg class="absolute right-0 w-5 h-5  ml-40 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                              <path fill-rule="evenodd" d="M11 10L7.86 6.58a.7.7 0 010-.98c.27-.27.7-.27.97 0l3.83 3.91a.7.7 0 010 .98l-3.83 3.9a.68.68 0 01-.97 0 .7.7 0 010-.97L11 10z"/>
                                            </svg>
                                        </span>
                                    </a>
                                </li>

                            </ul>
                        </li>
<!--                </div>-->
                <li class="inline-block pl-2 ">
                    <a class=" text-gray-700 hover:text-teal-600 font-semibold mt-4 lg:inline-block lg:mt-0 mx-4 lg:py-12 px-2"  @mouseover="isVisibleHeader2 = true" @mouseleave="isVisibleHeader2 = false" @keydown.enter="isVisibleHeader2 = !isVisibleHeader2" href="">
                      {{label2}}
<!--                   FEATURE-->
                       <ul class="dropdown-menu absolute mt-12 w-40 mr-2 text-gray-600 bg-white border-t-2 border-teal-400" v-show="isVisibleHeader2">
                                <li class="text-teal-500 hover:text-teal-500"  @mouseover="isVisible2 = true" @mouseleave="isVisible2 = false" @keydown.enter="isVisible2 = !isVisible2" >
                                  <a class="rounded-t  hover:bg-gray-100 py-4 px-4 block whitespace-no-wrap flex " href="#">
                                    <span class="flex " >SLIDERS</span>
                                      <span class="mr-auto">
                                  <svg class="absolute right-0 w-5 h-5  ml-32 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M11 10L7.86 6.58a.7.7 0 010-.98c.27-.27.7-.27.97 0l3.83 3.91a.7.7 0 010 .98l-3.83 3.9a.68.68 0 01-.97 0 .7.7 0 010-.97L11 10z"/>
                                </svg>
                             </span>

                                   </a>
                                </li>
                                <li class="">
                                    <a class="rounded-t  hover:bg-gray-100 py-4 px-4 block whitespace-no-wrap flex " href="#">
                                    <span class="flex  hover:text-teal-500" >WIDGETS</span>
                                        <span class="mr-auto">
                                            <svg class="absolute right-0 w-5 h-5 ml-32 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                              <path fill-rule="evenodd" d="M11 10L7.86 6.58a.7.7 0 010-.98c.27-.27.7-.27.97 0l3.83 3.91a.7.7 0 010 .98l-3.83 3.9a.68.68 0 01-.97 0 .7.7 0 010-.97L11 10z"/>
                                            </svg>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                    </a>
                </li>
                <li class="inline-block pl-2 ">
                    <a class=" text-gray-700 hover:text-teal-600 font-semibold mt-4 lg:inline-block lg:mt-0 mx-4 lg:py-12 px-2" href="">{{label3}}
<!--                        PAGES-->
                    </a>
                </li>
                <li class="inline-block pl-2 ">
                    <a class=" text-gray-700 hover:text-teal-600 font-semibold mt-4 lg:inline-block lg:mt-0 mx-4 lg:py-12 px-2" href="">{{label4}}
<!--                        PORTFOLIO-->
                    </a>
                </li>
                <li class="inline-block ">
                    <a class=" text-gray-700 hover:text-teal-600 font-semibold mt-4 lg:inline-block lg:mt-0 mx-4 lg:py-12 px-2" href="">{{label5}}
<!--                        BLOG-->
                    </a>
                </li>
                <li class="inline-block ">
                    <a class=" text-gray-700 hover:text-teal-600 font-semibold mt-4 lg:inline-block lg:mt-0 mx-4 lg:py-12 px-2" href="">{{label6}}
<!--                        SHOP-->
                    </a>
                </li>
                <li class="inline-block ">
                    <a class=" text-gray-700 hover:text-teal-600 font-semibold mt-4 lg:inline-block lg:mt-0 mx-4 lg:py-12 px-2" href="">{{label7}}
<!--                        SHORTCODES-->
                    </a>
                </li>
              </ul>
            </div>

        </div>

          <!--search icon-->
        <div class="flex absolute right-0 mt-10">
            <a @click="box = ! box" class=" py-2 px-4 mt-2 text-gray-700 text-lg font-semibold rounded-lg" href="">
                <svg class="w-5 h-5 mx-24 " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M17.55 15.47l-3.78-3.78c.57-.94.9-2.04.9-3.21A6.52 6.52 0 008.28 2.1 6.18 6.18 0 002.1 8.3a6.52 6.52 0 006.38 6.37c1.13 0 2.2-.3 3.11-.84l3.8 3.8c.37.37.98.37 1.35 0l.94-.94c.37-.37.24-.84-.13-1.21zM4 8.29A4.28 4.28 0 018.3 4c2.36 0 4.47 2.11 4.47 4.48a4.28 4.28 0 01-4.28 4.28A4.62 4.62 0 014 8.3z"/>
                </svg>
            </a>
        </div>
<!--            <div v-if="search" class="hover:text-teal-400 lg:w-24 flex">-->
<!--                <div  class=" sm:container mx-auto flex items-center justify-between flex-wrap px-4 lg:px-0 h-18 w-full " >-->
<!--                    <div class=" flex items-center px-6  md:py-10  w-11/12 h-18 text-3xl text-gray-700">-->
<!--                        <input class="w-11/12" type="text text-gray-700"  placeholder=" TYPE & HIT ENTER..">-->
<!--                    </div>-->

<!--                </div>-->
<!--                <div @click="search = ! search" class=" mt-4 lg:inline-block lg:mt-0 ml-4 mr-4 lg:h-25 lg:py-10 ">-->
<!--                    <svg class="w-8 h-10" version="1.1" id="Cross" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"-->
<!--                         viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">-->
<!--                        <path fill="#606060" d="M14.348,14.849c-0.469,0.469-1.229,0.469-1.697,0L10,11.819l-2.651,3.029c-0.469,0.469-1.229,0.469-1.697,0 c-0.469-0.469-0.469-1.229,0-1.697l2.758-3.15L5.651,6.849c-0.469-0.469-0.469-1.228,0-1.697s1.228-0.469,1.697,0L10,8.183 l2.651-3.031c0.469-0.469,1.228-0.469,1.697,0s0.469,1.229,0,1.697l-2.758,3.152l2.758,3.15 C14.817,13.62,14.817,14.38,14.348,14.849z"/>-->
<!--                        </svg>-->
<!--                </div>-->
<!--            </div>-->




<!--        <div v-if="search"  class="">-->
<!--            <input type="text" class="w-full h-10 ml-4 border border-teal-400 mt-4 py-1 px-2 bg-white rounded placeholder-teal-500 text-sm focus:outline-none antialiased tracking-wide text-gray-400 leading-normal" placeholder="Search (By Code)">-->

<!--        </div>-->

        </div>
    </nav>
       <div class="absolute flex top-0 w-full " v-if="box">
           <input class="w-full h-20 ml-2 border border-gray-500 mt-4 py-1 px-10 bg-gray-100 rounded placeholder-teal-600 text-sm focus:outline-none antialiased tracking-wider font-medium text-teal-600 leading-normal" type="text" placeholder="Search">

           <svg @click="box = ! box" class="h-5 w-5 mt-12 ml-4 text-black hover:text-red-700" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
               <path fill-rule="evenodd" d="M16 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2.939 12.789L10 11.729l-3.061 3.06-1.729-1.728L8.271 10l-3.06-3.061L6.94 5.21 10 8.271l3.059-3.061 1.729 1.729L11.729 10l3.06 3.061-1.728 1.728z"/>
           </svg>
       </div>

       <div class="h-screen w-screen bg-gray-200"></div>

   </div>

</template>

<script>
    export default {
        name: "NitsHStickyLogoChange",
        data(){
            return{
                isVisibleHeader1: false,
                isVisibleHeader2: false,
                box:false,
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

        },

    }
</script>

<style scoped>

</style>