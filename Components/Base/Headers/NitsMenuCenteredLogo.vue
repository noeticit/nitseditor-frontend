<template>
    <div class="relative">
        <nav class="absolute top-0 bg-transparent px-8 mx-auto border-b w-screen ">
            <div class="flex justify-between h-32 ">

                <div class=" font-semibold">
                    <div class="float-left ml-10">
                        <div class="inline-block text-white  mx-3">
                            <a class="text-xl px-2 font-sans " href="#">{{label1}}
<!--                                Home-->
                            </a>
                        </div>
                        <div class="inline-block text-white mx-3">
                            <a class="text-xl font-sans inline-block py-12 px-2"  @mouseover="isVisibleHeader1 = true" @mouseleave="isVisibleHeader1 = false" @keydown.enter="isVisibleHeader1 = !isVisibleHeader1" href="#">
                                <div class="flex"  >
                                    {{label2}}
 <!--                                 Explore-->
                                    <svg class="w-6 h-6 ml-2 mt-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M13.42 7.86a.7.7 0 01.98 0c.27.27.27.7 0 .97l-3.91 3.83a.7.7 0 01-.98 0L5.6 8.83a.68.68 0 010-.97.7.7 0 01.97 0L10 11l3.42-3.14z"/>
                                    </svg>
                                    <ul  class=" absolute top-0 text-gray-600 bg-white mr-4 mt-32 w-64" v-show="isVisibleHeader1">
                                        <li class="w-64 bg-white border-t-2"  @mouseover="isVisible1 = true" @mouseleave="isVisible1 = false" @keydown.enter="isVisible1 = !isVisible1">
                                            <a class="rounded-t  hover:bg-white py-4 px-4 block whitespace-no-wrap flex " href="#">
                                                <span class="flex text-lg hover:text-blue-500 mt-2 ml-4">NEXTGen Framework</span>
                                            </a>
                                        </li>
                                        <li class="w-64 bg-white" @mouseover="isVisible1 = true" @mouseleave="isVisible1 = false" @keydown.enter="isVisible1 = ! isVisible1">
                                            <a class="rounded-t  hover:bg-gray-100 py-4 px-4 block whitespace-no-wrap flex " href="#">
                                                <span class="flex text-lg hover:text-blue-500 ml-4" >Stunning Graphics</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </a>
                        </div>
                        <div class="inline-block text-white mx-3">
                            <a class="text-xl px-2 font-sans " href="#">{{label3}}
<!--                                Pricing-->
                            </a>
                        </div>
                        <div class="float-right mt-8 pr-3 mx-10">
                            <img class="h-16 w-56  ml-64" src="/nits-assets/images/nits-editor-logo.png">
                        </div>
                        <div class="absolute right-0 mr-24 -mt-20">
                        <div class=" inline-block text-white  p-1 mx-3">
                            <a class="text-xl font-sans px-2" href="#">{{label4}}
<!--                                FAQs-->
                            </a>
                        </div>
                        <div class="inline-block text-white p-1 mx-3">
                            <a class="text-xl font-sans px-2" href="#">{{label5}}
<!--                                Gallery-->
                            </a>
                        </div>
                        <div class="inline-block bg-smoke-200 text-white  p-1 mx-3">
                            <a class="text-xl font-sans rounded-full bg-blue-100 py-3 px-6" href="#">
                                Login
                            </a>
                        </div>
                        </div>

                    </div>
                </div>

            </div>

        </nav>
        <div class="absolute right-0 px-40 mt-64 -mr-20 ">
            <h3 class=" font-black text-4xl mt-40 text-white ">{{heading}}</h3>
        </div>
        <div class=" h-full w-full">
            <img src="/project-assets/images/Advertising-Agency-Website.jpg" class="w-screen h-full" alt=" image">
        </div>

    </div>

</template>

<script>
    export default {
        name: "NitsMenuCenteredLogo",
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

            heading:{
                type: String,
                required: true
            }
        },

    }
</script>

<style scoped>

</style>