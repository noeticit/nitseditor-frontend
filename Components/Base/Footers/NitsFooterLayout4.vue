<template>
     <div class="">
            <nav class="sticky top-0 bg-white px-8 mx-auto border-b w-screen ">
                <div class="flex justify-between h-24 ">
                    <div class="float-left border-r pr-3 ">
                        <img class="h-16 w-56 mt-5 mr-5" src="/nits-assets/images/nits-editor-logo.png">
                    </div>

                    <div class=" ml-56 font-semibold">
                        <div class="float-right ml-32">
                            <div class="inline-block  text-gray-800 p-1 mx-2">
                                <a class="text-base hover:text-teal-600 font-semibold mt-4 lg:inline-block lg:mt-0 lg:py-8 px-2" @mouseover="isVisibleHeader1 = true" @mouseleave="isVisibleHeader1 = false"  @keydown.enter="isVisibleHeader1 = !isVisibleHeader1" href="#">
                                    {{label1}}
                                    <!--                                HOME-->
                                    <ul v-show="isVisibleHeader1" class=" absolute top-0 mt-24 mr-6 w-56 text-gray-600 bg-white border-t-2 border-teal-400" >
                                        <li class=""  @mouseover="isVisible1 = true" @mouseleave="isVisible1 = false" @keydown.enter="isVisible1 = ! isVisible1">
                                            <a class="rounded-t  hover:bg-gray-100 py-4 px-4 block whitespace-no-wrap flex " href="#">
                                                <span class="block text-base" >HOME-CORPORATE</span>
                                                <span class="mr-auto">
                                              <svg class="absolute right-0 w-5 h-5 ml-40 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M11 10L7.86 6.58a.7.7 0 010-.98c.27-.27.7-.27.97 0l3.83 3.91a.7.7 0 010 .98l-3.83 3.9a.68.68 0 01-.97 0 .7.7 0 010-.97L11 10z"/>
                                            </svg>
                                            </span>
                                            </a>
                                        </li>
                                        <li class=""  @mouseover="isVisible1 = true" @mouseleave="isVisible1 = false" @keydown.enter="isVisible1 = ! isVisible1">
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
                                <a class="text-base text-teal-500 font-semibold mt-4 lg:inline-block lg:mt-0 lg:py-8 px-2" @mouseover="isVisibleHeader2 = true"  @mouseleave="isVisibleHeader2 = false" @keydown.enter="isVisibleHeader2 = !isVisibleHeader2" href="#">
                                    {{label2}}
                                    <!--                                FEATURES-->
                                    <ul v-show="isVisibleHeader2" class=" absolute top-0 mt-24 mr-6 w-56 text-gray-600 bg-white border-t-2 border-teal-400" >
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
                                <a class="text-base hover:text-teal-500 font-semibold mt-4 lg:inline-block lg:mt-0 lg:py-8 px-2" href="#">
                                    {{label3}}
                                    <!--                            PAGES-->
                                </a>
                            </div>
                            <div class="inline-block text-gray-800  p-1 mx-2">
                                <a class="text-base hover:text-teal-500 font-semibold mt-4 lg:inline-block lg:mt-0 lg:py-8 px-2" href="#">
                                    {{label4}}
                                    <!--                            PORTFOLIO-->
                                </a>
                            </div>
                            <div class="inline-block text-gray-800 p-1 mx-2">
                                <a class="text-base hover:text-teal-500 font-semibold mt-4 lg:inline-block lg:mt-0 lg:py-5 px-2" href="#">
                                    {{label5}}
                                    <!--                            BLOG-->
                                </a>
                            </div>
                            <div class="inline-block text-gray-800  p-1 mx-2">
                                <a class="text-base hover:text-teal-500 font-semibold mt-4 lg:inline-block lg:mt-0 lg:py-5 px-2" href="#">
                                    {{label6}}
                                    <!--                           SHOP-->
                                </a>
                            </div>
                            <div class="inline-block text-gray-800 p-1 mx-2">
                                <a class="text-base hover:text-teal-500 font-semibold mt-4 lg:inline-block lg:mt-0 lg:py-5 px-2" href="#">
                                    {{label7}}
                                    <!--                            SHORTCODES-->
                                </a>
                            </div>
                        </div>
                    </div>
                    <div @click="search = ! search" class="border-l ">
                        <svg class="w-5 h-5 mt-10 cursor-pointer text-gray-800 mx-10" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 00.898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 002.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 003.115-.844l3.799 3.801a.953.953 0 001.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 014.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 01-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"/>
                        </svg>
                    </div>
                </div>

            </nav>

            <div class="absolute flex top-0 w-full " v-if="search">
                <input class="w-full h-32 ml-2 border border-gray-300 py-1 px-10 bg-white rounded placeholder-gray-700 text-xl focus:outline-none antialiased tracking-wide font-medium text-gray-700 leading-normal" type="text" placeholder="TYPE HERE..">

                <svg @click="search = ! search" class="h-5 w-5 mt-12 ml-4 text-black " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2.939 12.789L10 11.729l-3.061 3.06-1.729-1.728L8.271 10l-3.06-3.061L6.94 5.21 10 8.271l3.059-3.061 1.729 1.729L11.729 10l3.06 3.061-1.728 1.728z"/>
                </svg>
            </div>
            <div class=" flex h-32 w-full bg-gray-100">
             <div class="float-left mt-10 ml-56 ">
                 <h1 class="text-3xl ">FOOTER - LAYOUT 4</h1>
             </div>
             <div class=" float-right ml-64 ">
                 <ul class="flex  ml-64 mt-10">
                     <li class=" p-2">
                         <a class="text-gray-700 tracking-widest antialiased text-xs hover:text-teal-500 font-medium" href="#">Home /</a>
                     </li>
                     <li class=" p-2">
                         <a class="text-gray-700 tracking-widest antialiased text-xs hover:text-teal-500 font-medium" href="#">Templetes /</a>
                     </li>
                     <li class=" p-2">
                         <a class="text-gray-700 tracking-widest antialiased text-xs hover:text-teal-500 font-medium" href="#">Footer 4</a>
                     </li>
                 </ul>
             </div>
          </div>
         <div class="mt-16">
            <p class="text-center">
                Foster best practices effectiveness inspire breakthroughs solve immunize turmoil.
                Policy dialogue peaceful The Elders rural global support.<br>
                Process inclusive innovate readiness, public sector complexity.
                Lifting people up cornerstone partner, technology working families civic <br>engagement activist recognize potential global network.
                Countries tackling solution respond change-makers tackle. <br>
                Assistance, giving; fight against malnutrition experience in the field lasting change scalable.<br>
                Empowerment long-term, fairness policy community progress social responsibility; <br>
                Cesar Chavez recognition. Expanding community ownership visionary indicator pursue these aspirations accessibility.<br>
                Achieve; worldwide, life-saving initiative facilitate. New approaches,<br>
                John Lennon humanitarian relief fundraise vaccine Jane Jacobs community health workers Oxfam.
                Our ambitions informal economies.
            </p>
         </div>

        </div>
</template>

<script>
    export default {
        name: "NitsFooterLayout4",
        data(){
            return{
                isVisibleHeader1: false,
                isVisibleHeader2: false,
                search: false,

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