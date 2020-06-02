<template>
    <div class="relative h-screen w-screen flex-col justify-between bg-white">
        <div class="pl-3 pt-3 absolute">
            <img class="h-16 " src="/nits-assets/images/logo.png" alt="NitsEditor Logo">
        </div>
        <div class="flex">
            <div class="w-4/12">
                <div class="mt-56 font-semibold text-2xl text-center text-gray-600">
                    You have not Subscribed to this page <br> please contact to Admin
                </div>
                <div class="mt-10 justify-center">
                    <router-link to="/dashboard">
                        <button class="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:outline-none font-semibold text-white text-xs py-3 px-10 rounded focus:outline-none">Go</button>
                    </router-link>
                </div>
            </div>
            <div class=" w-8/12">
                <img class="h-auto text-center object-fill object-center" src="/nits-assets/images/page-not-found.png" alt="Not subscribed">
            </div>
        </div>

        <div class=" w-screen fixed rounded pl-1 bottom-0">
            <div class="h-10 bg-gray-200  rounded justify-between item-center align-center">
                <div class="flex">
                    <div class="text-sm font-serif text-gray-600 mt-3 pl-64 ml-64">
                        <a class="hover:text-blue-600 pl-40 ml-64" href="#">©2020 Noetic IT Services Pvt. Ltd.</a>
                        <a class="text-sm font-serif text-gray-600 mt-3 ml-10" href="#">About Us</a>
                        <a class="text-sm font-serif text-gray-600 mt-3 ml-10" href="#">Disclaimer</a>
                        <a class="text-sm font-serif text-gray-600 mt-3 ml-10" href="#">Support</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageNotFound"
    }
</script>

<style scoped>

</style>