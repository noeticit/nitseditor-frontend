<template>
    <div class="">
        <nav class="sticky top-0 px-8 mx-auto border-b w-screen ">
            <div class="flex justify-between h-32 ">
                <div class="float-left border-r pr-3 ">
                    <img class="h-16 w-56 mt-8 mr-5" src="/nits-assets/images/nits-editor-logo.png">
                </div>

                <div class=" ml-56 font-semibold">
                    <div class="float-right ml-12">
                        <div class="inline-block  text-gray-800 p-1  mx-2">
                          <a class="text-lg hover:text-teal-600 font-semibold mt-4 lg:inline-block lg:mt-0  lg:py-12 px-2" @mouseover="isVisibleHeader1 = true" @mouseleave="isVisibleHeader1 = false"  @keydown.enter="isVisibleHeader1 = !isVisibleHeader1" href="#">
                                {{label1}}
<!--                                HOME-->
                              <ul v-show="isVisibleHeader1" class=" absolute top-0 mt-32 mr-6 w-56 text-gray-600 bg-white border-t-2 border-teal-400" >
                                  <li class=""  @mouseover="isVisible1 = true" @mouseleave="isVisible1 = false" @keydown.enter="isVisible1 = !isVisible1">
                                      <a class="rounded-t  hover:bg-gray-100 py-4 px-4 block whitespace-no-wrap flex " href="#">
                                            <span class="block text-base" >HOME-CORPORATE</span>
                                            <span class="mr-auto">
                                              <svg class="absolute right-0 w-5 h-5  ml-40 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M11 10L7.86 6.58a.7.7 0 010-.98c.27-.27.7-.27.97 0l3.83 3.91a.7.7 0 010 .98l-3.83 3.9a.68.68 0 01-.97 0 .7.7 0 010-.97L11 10z"/>
                                            </svg>
                                            </span>
                                        </a>
                                    </li>
                               <li class=""  @mouseover="isVisible1 = true" @mouseleave="isVisible1 = false" @keydown.enter="isVisible1 = !isVisible1">
                                   <a class="rounded-t  hover:bg-gray-100 py-4 px-4 block whitespace-no-wrap flex " href="#">
                                       <span class="flex text-base hover:text-teal-500" >HOME-PORFOLIO</span>
                                       <span class="mr-auto">
                                            <svg class="absolute right-0 w-5 h-5  ml-40 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                              <path fill-rule="evenodd" d="M11 10L7.86 6.58a.7.7 0 010-.98c.27-.27.7-.27.97 0l3.83 3.91a.7.7 0 010 .98l-3.83 3.9a.68.68 0 01-.97 0 .7.7 0 010-.97L11 10z"/>
                                            </svg>
                                        </span>
                                   </a>
                               </li>

                           </ul>

                          </a>
                        </div>
                        <div class="inline-block  p-1 mx-2">
                            <a class="text-lg text-teal-500 font-semibold mt-4 lg:inline-block lg:mt-0 lg:py-12 px-2" @mouseover="isVisibleHeader2 = true"  @mouseleave="isVisibleHeader2 = false" @keydown.enter="isVisibleHeader2 = !isVisibleHeader2" href="#">
                                {{label2}}
<!--                                FEATURES-->
                                <ul v-show="isVisibleHeader2" class=" absolute top-0 mt-32 mr-6 w-56 text-gray-600 bg-white border-t-2 border-teal-400" >
                                    <li class=""  @mouseover="isVisible2 = true" @mouseleave="isVisible2 = false" @keydown.enter="isVisible2 = !isVisible2">
                                        <a class="rounded-t  hover:bg-gray-100 py-4 px-4 block whitespace-no-wrap flex " href="#">
                                            <span class="block text-base" >SLIDERS</span>
                                            <span class="mr-auto">
                                              <svg class="absolute right-0 w-5 h-5  ml-40 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M11 10L7.86 6.58a.7.7 0 010-.98c.27-.27.7-.27.97 0l3.83 3.91a.7.7 0 010 .98l-3.83 3.9a.68.68 0 01-.97 0 .7.7 0 010-.97L11 10z"/>
                                            </svg>
                                            </span>
                                        </a>
                                    </li>
                                    <li class=""  @mouseover="isVisible2 = true" @mouseleave="isVisible2 = false" @keydown.enter="isVisible2 = !isVisible2">
                                        <a class="rounded-t  hover:bg-gray-100 py-4 px-4 block whitespace-no-wrap flex " href="#">
                                            <span class="flex text-base hover:text-teal-500" >WIDGETS</span>
                                            <span class="mr-auto">
                                            <svg class="absolute right-0 w-5 h-5  ml-40 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                              <path fill-rule="evenodd" d="M11 10L7.86 6.58a.7.7 0 010-.98c.27-.27.7-.27.97 0l3.83 3.91a.7.7 0 010 .98l-3.83 3.9a.68.68 0 01-.97 0 .7.7 0 010-.97L11 10z"/>
                                            </svg>
                                        </span>
                                        </a>
                                    </li>

                                </ul>

                            </a>
                        </div>
                        <div class="inline-block text-gray-800 p-1 mx-2">
                            <a class="text-lg hover:text-teal-500 font-semibold mt-4 lg:inline-block lg:mt-0 lg:py-12 px-2" href="#">
                                {{label3}}
<!--                            PAGES-->
                            </a>
                        </div>
                        <div class="inline-block text-gray-800  p-1 mx-2">
                            <a class="text-lg hover:text-teal-500 font-semibold mt-4 lg:inline-block lg:mt-0 lg:py-12 px-2" href="#">
                                {{label4}}
<!--                            PORTFOLIO-->
                            </a>
                        </div>
                        <div class="inline-block text-gray-800 p-1 mx-2">
                            <a class="text-lg hover:text-teal-500 font-semibold mt-4 lg:inline-block lg:mt-0 lg:py-12 px-2" href="#">
                                {{label5}}
<!--                            BLOG-->
                            </a>
                        </div>
                        <div class="inline-block text-gray-800  p-1 mx-2">
                            <a class="text-lg hover:text-teal-500 font-semibold mt-4 lg:inline-block lg:mt-0 lg:py-12 px-2" href="#">
                                {{label6}}
<!--                           SHOP-->
                            </a>
                        </div>
                        <div class="inline-block text-gray-800 p-1 mx-2">
                            <a class="text-lg hover:text-teal-500 font-semibold mt-4 lg:inline-block lg:mt-0 lg:py-12 px-2" href="#">
                                {{label7}}
<!--                            SHORTCODES-->
                            </a>
                        </div>
                    </div>
                </div>
                <div class="border-l ">
                    <svg class="w-5 h-5 mt-12 cursor-pointer text-gray-800 mx-10" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 00.898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 002.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 003.115-.844l3.799 3.801a.953.953 0 001.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 014.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 01-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"/>
                    </svg>
                </div>
            </div>

        </nav>
        <div class="absolute bottom-0 px-56 mb-16 ml-64 ">
            <h3 class=" font-black text-5xl text-white ">{{heading}}</h3>
        </div>
        <div class="h-11/12 w-screen">
            <img src="/project-assets/images/work-from-home-getty.jpg" class="w-screen h-full" alt=" image">
        </div>
    </div>
</template>

<script>
    export default {
        name: "NitsStaticStickyHeader",
        data(){
            return{
                isVisibleHeader1: false,
                isVisibleHeader2: false,

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
            heading:{
                type: String,
                required: true
            }
        },

    }
</script>

<style scoped>

</style>