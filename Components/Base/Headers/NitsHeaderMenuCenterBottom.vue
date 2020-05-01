<template>
    <div class="">
        <div class="flex h-24  mt-4 justify-center border-b">
            <div>
                <div class="items-center ">
                    <img src="/nits-assets/images/logo.png" alt="logo" class="h-20">
                </div>
            </div>
        </div>
        <nav class=" flex w-screen h-20 ">
            <div class="flex justify-between">

                <div class="flex " >
                    <div class="float-right py-8 ml-64">
                        <div class="inline-block pl-4 mx-3 ">
                            <a class=" text-teal-600 font-semibold" href="">HOME</a>
                        </div>
                        <div class="inline-block pl-2 mx-3 ">
                            <a class=" text-gray-800 hover:text-teal-600 font-semibold" href="">
                                FEATURES
                            </a>
                        </div>
                        <div class="inline-block pl-2 mx-3 ">
                            <a class=" text-gray-800 hover:text-teal-600 font-semibold" href="">CATEGORIES</a>
                        </div>
                        <div class="inline-block pl-2 mx-3 ">
                            <a class=" text-gray-800 hover:text-teal-600 font-semibold" href="">AUTHORS</a>
                        </div>
                        <div class="inline-block mx-3 ">
                            <a class=" text-gray-800 hover:text-teal-600 font-semibold" href="">PORTFOLIO</a>
                        </div>
                        <div class="inline-block mx-3 ">
                            <a class=" text-gray-800 hover:text-teal-600 font-semibold" href="">BLOG</a>
                        </div>
                        <div class="inline-block mx-3 ">
                            <a class=" text-gray-800 hover:text-teal-600 font-semibold" href="">CONTRIBUTE</a>
                        </div>
                        <div class="inline-block mx-3  ">
                            <a class=" text-gray-800 hover:text-teal-600 font-semibold" href="">CONTACT</a>
                        </div>

                    </div>

                </div>

                <div class="flex absolute right-0 mt-6">
                    <a @click="" class=" py-2 px-4 text-gray-800 text-lg font-semibold rounded-lg" href="">
                        <svg class="w-5 h-5 mx-64 " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M17.55 15.47l-3.78-3.78c.57-.94.9-2.04.9-3.21A6.52 6.52 0 008.28 2.1 6.18 6.18 0 002.1 8.3a6.52 6.52 0 006.38 6.37c1.13 0 2.2-.3 3.11-.84l3.8 3.8c.37.37.98.37 1.35 0l.94-.94c.37-.37.24-.84-.13-1.21zM4 8.29A4.28 4.28 0 018.3 4c2.36 0 4.47 2.11 4.47 4.48a4.28 4.28 0 01-4.28 4.28A4.62 4.62 0 014 8.3z"/>
                        </svg>
                    </a>

                </div>
            </div>
            <!--        <div v-if=""  class="">-->
            <!--            <input type="text" class="w-full h-10 ml-4 border border-teal-400 mt-4 py-1 px-2 bg-white rounded placeholder-teal-500 text-sm focus:outline-none antialiased tracking-wide text-gray-400 leading-normal" placeholder="Search (By Code)">-->

            <!--        </div>-->

        </nav>
    </div>

</template>

<script>
    export default {
        name: "NitsHeaderMenuCenterBottom"
    }
</script>

<style scoped>

</style>