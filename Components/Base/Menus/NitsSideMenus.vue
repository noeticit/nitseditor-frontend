<template>
    <div class="mt-10 px-8 font-bold">
        <div v-for="item in menu" class="mt-5 " @mouseover="Visible = true" @mouseleave="Visible = false" @keydown.enter="Visible = !Visible">
            <div class="inline-flex items-center justify-between px-2 py-1 font-medium  transition-all duration-500 rounded-md focus:outline-none focus:text-brand-900 sm:focus:shadow-outline">
                <span class="flex-shrink-0 tracking-widest text-gray-700 text-sm uppercase">{{item}}</span>
                <svg fill="currentColor" viewBox="0 0 20 20" class="flex-shrink-0 w-5 h-5 text-teal-500 absolute right-0 mr-8">
                    <path class="transition duration-300 ease-in-out origin-center transform" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NitsSideMenus",
        props: {
            menu: Array,
        }
    }
</script>

<style scoped>

</style>