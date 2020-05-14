<template>
    <div>
    <div class=" relative ">
        <nav class="fixed top-0 w-screen h-20 bg-white ">
            <div class="flex justify-between">

                <div class="flex " >
                    <div class="float-right py-2 ml-2">
                        <div class="inline-block pl-4 mx-3 ">
                            <a class=" text-red-800 text-sm font-semibold" href="">{{label1}}
<!--                                HOME-->
                            </a>
                        </div>
                        <div class="inline-block pl-1 mx-3 ">
                            <a class=" text-gray-900 text-sm hover:text-red-800 font-semibold lg:inline-block lg:py-6 px-2" @mouseover="isVisibleHeader1 = true" @mouseleave="isVisibleHeader1 = false" @keydown.enter="isVisibleHeader1 = !isVisibleHeader1" href="">
                              <div class="flex"  >
<!--                               MODELS-->
                                  {{label2}}
                                  <svg class="w-5 h-5 ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                   <path fill-rule="evenodd" d="M13.42 7.86a.7.7 0 01.98 0c.27.27.27.7 0 .97l-3.91 3.83a.7.7 0 01-.98 0L5.6 8.83a.68.68 0 010-.97.7.7 0 01.97 0L10 11l3.42-3.14z"/>
                                 </svg>
                                  <ul  class=" absolute top-0 text-gray-600 mt-20 w-11/12 h-full " v-show="isVisibleHeader1">
                                      <li class="w-11/12 bg-white border-t-2 border-red-600"  @mouseover="isVisible1 = true" @mouseleave="isVisible1 = false" @keydown.enter="isVisible1 = !isVisible1">
                                          <a class="rounded-t  hover:bg-white py-4 px-4 block whitespace-no-wrap flex " href="#">
                                          <div class="flex flex-col ml-32">
                                              <div class="ml-56">
                                            <span class=" text-2xl text-gray-700 ml-40 px-4 text-center" >Featured Models</span>
                                              </div>
                                              <div class="ml-56 mt-4">
                                              <span class="rounded text-gray-700 hover:bg-black ml-48 py-2 px-4 mt-4 hover:text-white text-center text-base">SHOW ALL CARS </span>
                                              </div>
                                              <div class="flex mt-6 ">
                                              <img src="/project-assets/images/car1.png">
                                              <img src="/project-assets/images/8.png">
                                              <img src="/project-assets/images/car9.png">
                                              <img src="/project-assets/images/car6.png">
                                              </div>
                                             <div class="flex mt-6 ">
                                              <img src="/project-assets/images/2.png">
                                              <img src="/project-assets/images/4.png">
                                              <img src="/project-assets/images/5.png">
                                              <img src="/project-assets/images/10.png">
                                         </div>
                                        </div>
                                          </a>
                                     </li>
                                  </ul>

                              </div>
                            </a>
                        </div>
                        <div class="inline-block pl-2 mx-3 ">
                            <a class=" text-gray-900 hover:text-red-800 text-sm font-semibold" href="">{{label3}}</a>
                        </div>
                        <div class="inline-block pl-2 mx-3 ">
                            <a class=" text-gray-900 hover:text-red-800 text-sm font-semibold" href="">{{label4}}</a>
                        </div>
                        <div class="inline-block pl-2 mx-3 ">
                            <a class=" text-gray-900 hover:text-red-800 text-sm font-semibold" href="">{{label5}}</a>
                        </div>
                        <div class="inline-block pl-2 mx-3 ">
                            <a class=" text-gray-900 hover:text-red-800 text-sm font-semibold" href="">{{label6}}</a>
                        </div>
                        <div class="inline-block pl-2 mx-3 ">
                            <a class=" text-gray-900 hover:text-red-800 text-sm font-semibold" href="">{{label7}}</a>
                        </div>
                        <div class="inline-block pl-2 mx-3 ">
                            <a class=" text-gray-900 hover:text-red-800 text-sm font-semibold" href="">{{label8}}</a>
                        </div>
                        <div class="inline-block pl-2 mx-3 ">
                            <a class=" text-gray-900 hover:text-red-800 text-sm font-semibold" href="">{{label9}}</a>
                        </div>

                    </div>

                </div>

                <div class="absoulte right-0 mr-10 mt-2 ">
                    <img src="/nits-assets/images/nits-editor-logo.png" alt="logo" class="h-16">
                </div>
            </div>

        </nav>
    </div>
    <div class="h-full w-full">
        <img class="w-screen h-auto" src="/project-assets/images/car3.jpg">
    </div>
    </div>

</template>

<script>
    export default {
        name: "NitsHeaderMenuLogoRight",
        data(){
            return{
                isVisibleHeader1: false,

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
            label9: {
                type: String,
                required: true
            },
        }

    }
</script>

<style scoped>

</style>