<template>
    <div class="bg-white rounded-lg shadow-lg mt-1 justify-center">
        <div class="flex justify-between border-solid border-b-2 p-2 text-center items-center">
            <div class="text-left ml-2 text-xl antialiased leading-snug tracking-normal font-sans">Filters</div>
            <div class="inline-flex items-center rounded p-2 bg-indigo-400">
                <span class="text-center text-sm antialiased tracking-wide leading-snug font-semibold font-sans text-white">Save search</span>
            </div>
        </div>
        <div class="m-2 p-2">
            <div class="flex rounded shadow justify-between items-center text-left bg-gray-100 h-8 p-1">
                <svg class="ml-2 h-5 w-5 text-teal-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 15l-4-3 1-4c0-3-3-6-7-6-3 0-6 3-6 6 0 4 3 7 6 7l4-1 3 4h2l1-1v-2zM4 8c0-2 2-4 4-4 3 0 5 2 5 4 0 3-2 5-5 5-2 0-4-2-4-5z"/>
                </svg>
                <div class="-ml-32 text-left text-sm antialiased leading-none tracking-wider font-sans font-semibold text-teal-400">Search</div>
                <div>
                <svg @click="isOpen = false" :class="isOpen ? 'block' : 'hidden'" class="h-5 cursor-pointer w-5 text-teal-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16 10l-1 1H5l-1-1 1-1h10l1 1z"/>
                </svg>

                    <svg @click="isOpen = true"  :class="isOpen ? 'hidden' : 'block'" class="h-4 w-4 cursor-pointer text-teal-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>
                    </svg>

                </div>

            </div>
            <div v-if="isOpen" class="block shadow h-20 p-2 items-center">
                <input type="text" class="w-full border border-teal-400 mt-4 py-1 px-2 bg-white rounded placeholder-teal-600 text-sm focus:outline-none antialiased tracking-wide font-medium text-teal-600 leading-normal" placeholder="Search...">
            </div>
        </div>
        <div class="m-2 p-2">
            <div class="flex rounded shadow justify-between items-center text-left bg-gray-100 h-8 p-1">
                <svg class="ml-2 h-4 w-4 text-teal-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5 7h1l2-2a2 2 0 010-1L5 2 3 5l1 2h1zM3 9V8L2 6a9 9 0 000 9l2-5-1-1zm7-7l1 1 4-1a9 9 0 00-8-1l2 2 1-1zm3 10v-1l-2-5a2 2 0 01-2 0L7 8a2 2 0 010 1l6 3zm3 2a16 16 0 01-1 3l4-4h-2l-1 1zm-3-1l-7-2a2 2 0 01-1 0l-2 5 3 2 7-5zm3-10l-4 1v1l3 6 2 1 2-1a9 9 0 00-3-8zm-3 11l-5 5a9 9 0 006-1 14 14 0 000-4h-1z"/>
                </svg>
                <div class="-ml-32 text-left text-sm antialiased leading-none tracking-wider font-sans font-semibold text-teal-400">State</div>
                <svg @click="openNow = false " :class="openNow ? 'block' : 'hidden'" class="h-4 cursor-pointer w-4 text-teal-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16 10l-1 1H5l-1-1 1-1h10l1 1z"/>
                </svg>

                <svg @click="openNow = true"  :class="openNow ? 'hidden' : 'block'" class="h-4 w-4 cursor-pointer text-teal-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>
                </svg>
            </div>
            <div v-if="openNow" class="block shadow h-32 p-2 px-4 items-center overflow-y-auto">
                <label class="block leading-4">
                    <input class="mr-2 leading-tight" type="checkbox">
                    <span class="text-xs antialiased leading-tight tracking-wide font-sans">
                                    Assam
                                </span>
                </label>
                <label class="block leading-4">
                    <input class="mr-2 leading-tight" type="checkbox">
                    <span class="text-xs antialiased leading-tight tracking-wide font-sans">
                                    Bihar
                                </span>
                </label>
                <label class="block leading-4">
                    <input class="mr-2 leading-tight" type="checkbox">
                    <span class="text-xs antialiased leading-tight tracking-wide font-sans">
                                    Uttar Pradesh
                                </span>
                </label>
                <label class="block leading-4">
                    <input class="mr-2 leading-tight" type="checkbox">
                    <span class="text-xs antialiased leading-tight tracking-wide font-sans">
                                    Tamil Nadu
                                </span>
                </label>
                <label class="block leading-4">
                    <input class="mr-2 leading-tight" type="checkbox">
                    <span class="text-xs antialiased leading-tight tracking-wide font-sans">
                                    Assam
                                </span>
                </label>
                <label class="block leading-4">
                    <input class="mr-2 leading-tight" type="checkbox">
                    <span class="text-xs antialiased leading-tight tracking-wide font-sans">
                                    Bihar
                                </span>
                </label>
                <label class="block leading-4">
                    <input class="mr-2 leading-tight" type="checkbox">
                    <span class="text-xs antialiased leading-tight tracking-wide font-sans">
                                    Uttar Pradesh
                                </span>
                </label>
                <label class="block leading-4">
                    <input class="mr-2 leading-tight" type="checkbox">
                    <span class="text-xs antialiased leading-tight tracking-wide font-sans">
                                    Tamil Nadu
                                </span>
                </label>
                <label class="block leading-4">
                    <input class="mr-2 leading-tight" type="checkbox">
                    <span class="text-xs antialiased leading-tight tracking-wide font-sans">
                                    Telangana
                                </span>
                </label>
                <label class="block leading-4">
                    <input class="mr-2 leading-tight" type="checkbox">
                    <span class="text-xs antialiased leading-tight tracking-wide font-sans">
                                    West Bengal
                                </span>
                </label>
                <label class="block leading-4">
                    <input class="mr-2 leading-tight" type="checkbox">
                    <span class="text-xs antialiased leading-tight tracking-wide font-sans">
                                    Telangana
                                </span>
                </label>
                <label class="block leading-4">
                    <input class="mr-2 leading-tight" type="checkbox">
                    <span class="text-xs antialiased leading-tight tracking-wide font-sans">
                                    West Bengal
                                </span>
                </label>
            </div>
        </div>
        <div class="m-2 p-2">
            <div class="flex rounded shadow justify-between items-center text-left bg-gray-100 h-8 p-1">
                <svg class="ml-2 h-4 w-4 text-teal-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5 7h1l2-2a2 2 0 010-1L5 2 3 5l1 2h1zM3 9V8L2 6a9 9 0 000 9l2-5-1-1zm7-7l1 1 4-1a9 9 0 00-8-1l2 2 1-1zm3 10v-1l-2-5a2 2 0 01-2 0L7 8a2 2 0 010 1l6 3zm3 2a16 16 0 01-1 3l4-4h-2l-1 1zm-3-1l-7-2a2 2 0 01-1 0l-2 5 3 2 7-5zm3-10l-4 1v1l3 6 2 1 2-1a9 9 0 00-3-8zm-3 11l-5 5a9 9 0 006-1 14 14 0 000-4h-1z"/>
                </svg>
                <div class="-ml-32  text-left text-sm antialiased leading-none tracking-wider font-sans font-semibold text-teal-400">City</div>
                <svg @click="OpenIn = false" :class="OpenIn ? 'block' : 'hidden'" class="h-4 w-4 cursor-pointer text-teal-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16 10l-1 1H5l-1-1 1-1h10l1 1z"/>
                </svg>

                <svg @click="OpenIn = true"  :class="OpenIn ? 'hidden' : 'block'" class="h-4 w-4 cursor-pointer text-teal-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>
                </svg>

            </div>
            <div v-if="OpenIn" class="block shadow h-32 p-2 px-4 items-center overflow-y-auto">
                <label class="block leading-4">
                    <input class="mr-2" type="checkbox">
                    <span class="text-xs antialiased tracking-wide font-sans">
                                    Assam
                                </span>
                </label>
                <label class="block leading-4">
                    <input class="mr-2" type="checkbox">
                    <span class="text-xs antialiased tracking-wide font-sans">
                                    Bihar
                                </span>
                </label>
                <label class="block leading-4">
                    <input class="mr-2" type="checkbox">
                    <span class="text-xs antialiased tracking-wide font-sans">
                                    Uttar Pradesh
                                </span>
                </label>
                <label class="block leading-4">
                    <input class="mr-2" type="checkbox">
                    <span class="text-xs antialiased tracking-wide font-sans">
                                    Tamil Nadu
                                </span>
                </label>
                <label class="block leading-4">
                    <input class="mr-2" type="checkbox">
                    <span class="text-xs antialiased tracking-wide font-sans">
                                    Telangana
                                </span>
                </label>
                <label class="block leading-4">
                    <input class="mr-2" type="checkbox">
                    <span class="text-xs antialiased tracking-wide font-sans">
                                    West Bengal
                                </span>
                </label>
                <label class="block leading-4">
                    <input class="mr-2" type="checkbox">
                    <span class="text-xs antialiased tracking-wide font-sans">
                                    Assam
                                </span>
                </label>
                <label class="block leading-4">
                    <input class="mr-2" type="checkbox">
                    <span class="text-xs antialiased tracking-wide font-sans">
                                    Bihar
                                </span>
                </label>
                <label class="block leading-4">
                    <input class="mr-2" type="checkbox">
                    <span class="text-xs antialiased tracking-wide font-sans">
                                    Uttar Pradesh
                                </span>
                </label>
                <label class="block leading-4">
                    <input class="mr-2" type="checkbox">
                    <span class="text-xs antialiased tracking-wide font-sans">
                                    Tamil Nadu
                                </span>
                </label>
                <label class="block leading-4">
                    <input class="mr-2" type="checkbox">
                    <span class="text-xs antialiased tracking-wide font-sans">
                                    Telangana
                                </span>
                </label>
                <label class="block leading-4">
                    <input class="mr-2" type="checkbox">
                    <span class="text-xs antialiased tracking-wide font-sans">
                                    West Bengal
                                </span>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchFilters",
        data(){
            return{
                isOpen: true,
                openNow: true,
                OpenIn: true
            }
        }
    }
</script>

<style scoped>

</style>