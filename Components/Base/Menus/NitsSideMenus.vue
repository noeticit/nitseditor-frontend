<template>
    <div class="mt-10 px-8 font-bold">
        <div v-for="(item,index) in menus" class="mt-5 " @mouseover="Visible = index" @mouseleave="Visible = false" @keydown.enter="Visible = !Visible">
            <router-link class="inline-flex items-center justify-between px-2 py-1 font-medium  transition-all duration-500 rounded-md focus:outline-none focus:text-brand-900 sm:focus:shadow-outline" :to="item.link">
                <span class="flex-shrink-0 tracking-widest text-gray-700 text-sm uppercase">{{item.name}}</span>
                <div class="ml-10">
                    <svg fill="currentColor" viewBox="0 0 20 20" class="flex-shrink-0 w-5 h-5 text-gray-700 mr-8">
                        <path :class="{ 'rotate-180': Visible === index}" class="transition duration-300 ease-in-out origin-center transform" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </router-link>
            <transition enter-active-class="transition duration-300 ease-out transform" enter-class="-translate-y-3 scale-95 opacity-0" enter-to-class="translate-y-0 scale-100 opacity-100" leave-active-class="transition duration-150 ease-in transform" leave-class="translate-y-0 opacity-100" leave-to-class="-translate-y-3 opacity-0">
                <div v-show="Visible === index" class="absolute pt-2">
                    <div class="relative py-1 bg-gray-100  rounded-md shadow-xl" v-for="ele in item.children">
                        <div class="absolute top-0 w-4 h-4 origin-center transform rotate-45 translate-x-5 -translate-y-2 bg-gray-100 border-t border-l border-gray-100 rounded-sm pointer-events-none"></div>
                        <div class="relative">
                            <router-link :to="ele.link" class="block w-56 px-6 py-2 text-xs text-gray-600 uppercase tracking-wider font-medium whitespace-no-wrap focus:outline-none hover:text-blue-600 focus:text-blue-900  transition duration-300 ease-in-out">{{ele.name}}</router-link>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>

</template>

<script>
    export default {
        name: "NitsSideMenus",
        props: {
            menus: Array,
        },
        data(){
            return{
                Visible : ''
            }
        }
    }
</script>

<style scoped>

</style>