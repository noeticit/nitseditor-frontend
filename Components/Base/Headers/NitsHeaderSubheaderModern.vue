<template>
    <div class="fixed">
        <nav class="relative py-4 px-8 mx-auto bg-blue-100 w-screen h-20">
            <div class="flex justify-between mt-1">
                <div class="float-left ml-8 ">
                    <img class="h-16 w-56 pr-5 -mt-3" src="/nits-assets/images/nits-editor-logo.png">
                </div>

                <div class=" text-lg font-semibold">
                    <div class="">
                        <div class="inline-block p-1  mx-3">
                            <a class="text-xl text-gray-700 hover:text-red-500" href="#">PRICE</a>
                        </div>
                        <div class="inline-block p-1 mx-3">
                            <a class="text-xl text-gray-700 hover:text-red-500" href="#">ABOUT</a>
                        </div>
                        <div class="inline-block p-1 mx-3">
                            <a class="text-xl text-gray-700 hover:text-red-500" href="#">CONTACT</a>
                        </div>


                    </div>
                </div>
                <div class="inline-block cursor-pointer text-red-600 p-1 mx-16">
                    <a class=" flex " href="#">
                        <svg class="w-5 h-5 mt-2 cursor-pointer text-red-600 mx-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M14 10L8 5v3H1v4h7v3l6-5zm3 7H9v2h8a2 2 0 002-2V3a2 2 0 00-2-2H9v2h8v14z"/>
                        </svg>
                        <span class=" ml-2 text-xl font-semibold">LOGIN</span>
                    </a>
                </div>


            </div>

        </nav>
    </div>

</template>

<script>
    export default {
        name: "NitsHeaderSubheaderModern"
    }
</script>

<style scoped>

</style>