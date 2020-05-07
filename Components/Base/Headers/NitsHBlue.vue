<template>
    <div class="flex justify-between items-center py-4 bg-blue-900">
        <div class="flex-shrink-0 ml-10 cursor-pointer">
            <i class="fas fa-drafting-compass fa-2x text-orange-500"></i>
            <span class="ml-1 text-3xl text-blue-200 font-semibold">Nits Editor</span>
        </div>
        <i class="fas fa-bars fa-2x visible md:invisible mr-10 md:mr-0 text-blue-200 cursor-pointer"></i>
        <ul class="hidden md:flex overflow-x-hidden mr-10 font-semibold">
            <li class="mr-6 p-1 border-b-2 border-orange-500">
                <a class="text-blue-200 cursor-default" href="#">{{label1}}</a>
            </li>
            <li class="mr-6 p-1">
                <a class="text-white hover:text-blue-300" href="#">{{label2}}}</a>
            </li>
            <li class="mr-6 p-1">
                <a class="text-white hover:text-blue-300" href="#">{{label3}}</a>
            </li>
            <li class="mr-6 p-1">
                <a class="text-white hover:text-blue-300" href="#">{{label4}}</a>
            </li>
            <li class="mr-6 p-1">
                <a class="text-white hover:text-blue-300" href="#">{{label5}}</a>
            </li>
            <li class="mr-6 p-1">
                <a class="text-white hover:text-blue-300" href="#">{{label6}}</a>
            </li>
            <li class="mr-6 p-1">
                <svg class="w-5 h-5  cursor-pointer text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 00.898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 002.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 003.115-.844l3.799 3.801a.953.953 0 001.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 014.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 01-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"/>
                </svg>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "NitsHBlue",
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

        },
    }
</script>

<style scoped>

</style>