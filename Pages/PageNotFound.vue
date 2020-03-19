<template>
    <div class="h-screen w-screen flex-col justify-between bg-gray-100">
        <div class="pl-3 pt-3">
            <img class="h-16" src="/nits-assets/images/logo.png" alt="NitsEditor Logo">
        </div>
        <div class="p-2">
            <img class="h-auto text-center object-fill object-center p-1" src="/nits-assets/images/page-not-found.png" alt="Page not found">
        </div>
        <div class="bg-gray-100 fixed bottom-0 w-full">
            <div class="flex items-center justify-between px-2 py-2">
                <p class="text-center text-gray-500 text-xs font-semibold">&copy;2020 Noetic IT Services Pvt. Ltd.</p>
                <div>
                    <a href="#" class="text-center text-gray-500 text-xs font-semibold">About Us</a>
                    <a href="#" class="text-center text-gray-500 text-xs font-semibold">Disclaimer</a>
                    <a href="#" class="text-center text-gray-500 text-xs font-semibold">Support</a>
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