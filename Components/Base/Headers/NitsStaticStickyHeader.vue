<template>
    <div class="">
        <nav class="sticky top-0 px-8 mx-auto border-b w-screen ">
            <div class="flex justify-between h-32 ">
                <div class="float-left border-r pr-3 ">
                    <img class="h-16 w-56 mt-8 mr-5" src="/nits-assets/images/nits-editor-logo.png">
                </div>

                <div class="  ml-64 mt-12 font-semibold">
                    <div class="float-right ml-8">
                        <div class="inline-block  text-gray-800 p-1  mx-4">
                            <a class="text-lg hover:text-teal-500" href="#">HOME</a>
                        </div>
                        <div class="inline-block  p-1 mx-4">
                            <a class="text-lg text-teal-500" href="#">FEATURES</a>
                        </div>
                        <div class="inline-block text-gray-800 p-1 mx-4">
                            <a class="text-lg hover:text-teal-500" href="#">PAGES</a>
                        </div>
                        <div class="inline-block text-gray-800  p-1 mx-4">
                            <a class="text-lg hover:text-teal-500" href="#">PORTFOLIO</a>
                        </div>
                        <div class="inline-block text-gray-800 p-1 mx-4">
                            <a class="text-lg hover:text-teal-500" href="#">BLOG</a>
                        </div>
                        <div class="inline-block text-gray-800  p-1 mx-4">
                            <a class="text-lg hover:text-teal-500" href="#">SHOP</a>
                        </div>
                        <div class="inline-block text-gray-800 p-1 mx-4">
                            <a class="text-lg hover:text-teal-500" href="#">SHORTCODES</a>
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
            <h3 class=" font-black text-5xl text-white ">WELCOME TO NITSEDITOR</h3>
        </div>
        <div class="h-11/12 w-full">
            <img src="/project-assets/images/HiRes1-150x150.jpg.jpg" class="" alt=" image">
        </div>
    </div>
</template>

<script>
    export default {
        name: "NitsStaticStickyHeader"
    }
</script>

<style scoped>

</style>