<template>
   <div class="relative">
<!--      <img src="/project-assets/images/HiRes1-150x150.jpg.jpg" class="h-full w-screen" alt=" image">-->

       <nav  class="sticky top-0 bg-white flex w-screen h-24 ">
        <div class="flex justify-between">
          <div class="float-left ml-4 mt-4 ">
            <img src="/nits-assets/images/nits-editor-logo.png" alt="logo" class="h-16">
          </div>

<!--          <div class=" flex items-center ml-4" >-->
            <div class="float-right ml-64 mt-1">
<!--                <div class="inline-block pl-4 mx-5 " >-->
                    <ul class="lg:flex-grow font-medium uppercase flex flex-col lg:flex-row pb-4 lg:pb-0 text-sm  text-gray-700">
                        <li class="hover:text-teal-400" v-for="item in menu">
<!--                            @mouseover="isVisibleHeader1 = true" @mouseleave="isVisibleHeader1 = false" @keydown.enter="isVisibleHeader1 = !isVisibleHeader1">-->
                           <a class=" font-semibold lg:inline-block lg:mt-0 mx-3 lg:py-8 px-2"  href="">
                          {{item}}
 <!--                        HOME-->
                           </a>
<!--                          <ul v-show="isVisibleHeader1" class="dropdown-menu absolute w-56 text-gray-600 bg-white border-t-2 border-teal-400" >-->
<!--                          <li class=" hover:text-teal-500"  @mouseover="isVisible1 = true" @mouseleave="isVisible1 = false" @keydown.enter="isVisible1 = !isVisible1">-->
<!--                             <a class="rounded-t  hover:bg-gray-100 py-4 px-4 block whitespace-no-wrap flex " href="#">-->
<!--                             <span class="block" >HOME-CORPORATE</span>-->
<!--                             <span class="mr-auto">-->
<!--                                  <svg class="absolute right-0 w-5 h-5  ml-40 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">-->
<!--                                    <path fill-rule="evenodd" d="M11 10L7.86 6.58a.7.7 0 010-.98c.27-.27.7-.27.97 0l3.83 3.91a.7.7 0 010 .98l-3.83 3.9a.68.68 0 01-.97 0 .7.7 0 010-.97L11 10z"/>-->
<!--                                </svg>-->
<!--                             </span>-->
<!--                                    </a>-->
<!--                                </li>-->

<!--                                <li class=""  @mouseover="isVisible1 = true" @mouseleave="isVisible1 = false" @keydown.enter="isVisible1 = !isVisible1">-->
<!--                                    <a class="rounded-t  hover:bg-gray-100 py-4 px-4 block whitespace-no-wrap flex " href="#">-->
<!--                                        <span class="flex  hover:text-teal-500" >HOME-PORFOLIO</span>-->
<!--                                        <span class="mr-auto">-->
<!--                                            <svg class="absolute right-0 w-5 h-5  ml-40 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">-->
<!--                                              <path fill-rule="evenodd" d="M11 10L7.86 6.58a.7.7 0 010-.98c.27-.27.7-.27.97 0l3.83 3.91a.7.7 0 010 .98l-3.83 3.9a.68.68 0 01-.97 0 .7.7 0 010-.97L11 10z"/>-->
<!--                                            </svg>-->
<!--                                        </span>-->
<!--                                    </a>-->
<!--                                </li>-->

<!--                            </ul>-->
                        </li>
<!--                </div>-->
              </ul>
            </div>

<!--        </div>-->

          <!--search icon-->
        <div @click="search = ! search" class="flex absolute right-0 mt-8">
<!--            <a  class=" py-2 px-4 mt-2 text-gray-700 text-lg font-semibold rounded-lg" href="">-->
                <svg class="w-5 h-5 mx-24 mt-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M17.55 15.47l-3.78-3.78c.57-.94.9-2.04.9-3.21A6.52 6.52 0 008.28 2.1 6.18 6.18 0 002.1 8.3a6.52 6.52 0 006.38 6.37c1.13 0 2.2-.3 3.11-.84l3.8 3.8c.37.37.98.37 1.35 0l.94-.94c.37-.37.24-.84-.13-1.21zM4 8.29A4.28 4.28 0 018.3 4c2.36 0 4.47 2.11 4.47 4.48a4.28 4.28 0 01-4.28 4.28A4.62 4.62 0 014 8.3z"/>
                </svg>
<!--            </a>-->
        </div>

        </div>
    </nav>
       <div class="absolute flex top-0 w-full " v-if="search">
           <input class="w-full h-24 ml-2 border border-gray-300 py-1 px-10 bg-white rounded placeholder-gray-700 text-xl focus:outline-none antialiased tracking-wide font-medium text-gray-700 leading-normal" type="text" placeholder="TYPE HERE..">

           <svg @click="search = ! search" class="h-5 w-5 mt-8 ml-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
               <path fill-rule="evenodd" d="M16 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2.939 12.789L10 11.729l-3.061 3.06-1.729-1.728L8.271 10l-3.06-3.061L6.94 5.21 10 8.271l3.059-3.061 1.729 1.729L11.729 10l3.06 3.061-1.728 1.728z"/>
           </svg>
       </div>
       <div class="absolute bottom-0 px-56 mb-16 ml-64 ">
           <h3 class=" font-black text-5xl text-white ">{{heading}}</h3>
       </div>
       <div class="h-11/12 w-screen">
           <img src="/project-assets/images/work-from-home-getty.jpg" class="w-screen h-full" alt=" image">
       </div>
       <div class="h-screen w-screen bg-gray-200"></div>
<!--       <section class="color">-->
<!--           <div class="container">-->
<!--               <h1 class="text-3xl text-gray-800 text-center">The Duh-Vinci Code</h1>-->
<!--               <p class="text-lg text-gray-700 text-center leading-normal mt-4 ml-24">Bender, you risked your life to save me! Good news, everyone! I've taught the toaster to feel love! I can explain. It's very valuable. Can we have Bender Burgers again?-->

<!--                   For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! You seem malnourished. Are you suffering from intestinal parasites? Say what? Now, now. Perfectly symmetrical violence never solved anything. Eeeee! Now say "nuclear wessels"! Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it?-->

<!--                   I suppose I could part with 'one' and still be feared… Noooooo! Have you ever tried just turning off the TV, sitting down with your children, and hitting them?-->

<!--                   Isn't it true that you have been paid for your testimony? All I want is to be a monkey of moderate intelligence who wears a suit… that's why I'm transferring to business school! We'll need to have a look inside you with this camera. Really?!</p>-->
<!--           </div>-->
<!--       </section>-->

   </div>

</template>

<script>
    export default {
        name: "NitsHStickyLogoChange",
        data(){
            return{
                isVisibleHeader1: false,
                isVisibleHeader2: false,
                search:false,
            }
        },

        props: {
            menu: Array,

            heading:{
                type: String,
                required: true
            },
            menus: {
                type: Array,
            }

        },
        created() {
            console.log(this.menus)
        }
    }
</script>

<style scoped>

</style>