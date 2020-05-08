<template>
    <div>
    <div class=" relative ">
        <nav class="fixed top-0 w-screen h-20 bg-white ">
            <div class="flex justify-between">

                <div class="flex " >
                    <div class="float-right py-8 ml-2">
                        <div class="inline-block pl-4 mx-3 ">
                            <a class=" text-red-800 text-sm font-semibold" href="">{{label1}}
<!--                                HOME-->
                            </a>
                        </div>
                        <div class="inline-block pl-2 mx-3 ">
                            <a class=" text-gray-800 text-sm hover:text-red-800 font-semibold" href="">
                              <div class="flex " >
<!--                               MODELS-->
                                  {{label2}}
                                  <svg class="w-5 h-5 ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                   <path fill-rule="evenodd" d="M13.42 7.86a.7.7 0 01.98 0c.27.27.27.7 0 .97l-3.91 3.83a.7.7 0 01-.98 0L5.6 8.83a.68.68 0 010-.97.7.7 0 01.97 0L10 11l3.42-3.14z"/>
                                 </svg>

                              </div>
                            </a>
                        </div>
                        <div class="inline-block pl-2 mx-3 ">
                            <a class=" text-gray-800 hover:text-red-800 text-sm font-semibold" href="">{{label3}}</a>
                        </div>
                        <div class="inline-block pl-2 mx-3 ">
                            <a class=" text-gray-800 hover:text-red-800 text-sm font-semibold" href="">{{label4}}</a>
                        </div>
                        <div class="inline-block mx-3 ">
                            <a class=" text-gray-800 hover:text-red-800 text-sm font-semibold" href="">{{label5}}</a>
                        </div>
                        <div class="inline-block mx-3 ">
                            <a class=" text-gray-800 hover:text-red-800 text-sm font-semibold" href="">{{label6}}</a>
                        </div>
                        <div class="inline-block mx-3 ">
                            <a class=" text-gray-800 hover:text-red-800 text-sm font-semibold" href="">{{label7}}</a>
                        </div>
                        <div class="inline-block mx-3 ">
                            <a class=" text-gray-800 hover:text-red-800 text-sm font-semibold" href="">{{label8}}</a>
                        </div>
                        <div class="inline-block mx-3  ">
                            <a class=" text-gray-800 hover:text-red-800 text-sm font-semibold" href="">{{label9}}</a>
                        </div>

                    </div>

                </div>

                <div class="absoulte mr-10 right-0">
                    <img src="/nits-assets/images/nits-editor-logo.png" alt="logo" class="h-20">
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

        },

    }
</script>

<style scoped>

</style>