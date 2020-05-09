<template>

    <div class="relative">
        <div class="w-screen h-11/12">
                <img src="/project-assets/images/video-conferencing-meeting.jpg" class="w-screen  h-auto" alt="bg image">
        </div>
        <div class="bg-white absolute top-0 shadow-lg lg:w-11/12 lg:mt-16 ml-16 ">
            <nav class=" px-8 mx-auto items-center justify-between flex flex-wrap">
                <div class="flex justify-between h-32 ">
                    <div class="float-left pr-3 ">
                        <img class="h-16 w-56 mt-8 mr-12 ml-2" src="/nits-assets/images/nits-editor-logo.png">
                    </div>

                    <div class="block lg:flex lg:items-center lg:w-auto hidden ml-64 mt-1 font-semibold">
                        <div class="">
                            <div class="inline-block  text-gray-800 p-2  mx-4">
                                <a class="text-lg hover:text-teal-500" href="#">{{label1}}</a>
                            </div>
                            <div class="inline-block  p-1 mx-4">
                                <a class="text-lg text-teal-500" href="#">{{label2}}</a>
                            </div>
                            <div class="inline-block text-gray-800 p-1 mx-4">
                                <a class="text-lg hover:text-teal-500" href="#">{{label3}}</a>
                            </div>
                            <div class="inline-block text-gray-800  p-1 mx-4">
                                <a class="text-lg hover:text-teal-500" href="#">{{label4}}</a>
                            </div>
                            <div class="inline-block text-gray-800 p-1 mx-4">
                                <a class="text-lg hover:text-teal-500" href="#">{{label5}}</a>
                            </div>
                            <div class="inline-block text-gray-800  p-1 mx-4">
                                <a class="text-lg hover:text-teal-500" href="#">{{label6}}</a>
                            </div>
                            <div class="inline-block text-gray-800 p-1 mx-4">
                                <a class="text-lg hover:text-teal-500" href="#">{{label7}}</a>
                            </div>
                        </div>
                    </div>
                    <div class="mt-12 ">
                        <svg class="w-5 h-5 mt-2 cursor-pointer text-gray-800 mx-10" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 00.898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 002.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 003.115-.844l3.799 3.801a.953.953 0 001.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 014.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 01-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"/>
                        </svg>
                    </div>
                </div>

            </nav>
        </div>
    </div>

</template>

<script>
    export default {
        name: "NitsFloatingMenuHeader",
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