<template>
    <div class=" text-lg  font-bold">
        <div class=" p-1 px-2 mx-3" >
            <div v-for="(item,index) in menus" @mouseover="Visible = index" @mouseleave="Visible = false" @keydown.enter="Visible = !Visible"class="inline-block hover:text-teal-500 mt-3 cursor-pointer uppercase px-5 text-gray-700 " >
                <router-link class="text-sm uppercase tracking-wider" :to="item.link">
                    {{item.name}}
                </router-link>
                <transition enter-active-class="transition duration-300 ease-out transform" enter-class="-translate-y-3 scale-95 opacity-0" enter-to-class="translate-y-0 scale-100 opacity-100" leave-active-class="transition duration-150 ease-in transform" leave-class="translate-y-0 opacity-100" leave-to-class="-translate-y-3 opacity-0">
                    <div v-show="Visible === index" class="absolute pt-2">
                        <div class="relative py-1 bg-gray-200  rounded-md shadow-xl" v-for="ele in item.children">
                            <div class="absolute top-0 w-4 h-4 origin-center transform rotate-45 translate-x-5 -translate-y-2 bg-gray-200 border-t border-l border-gray-200 rounded-sm pointer-events-none"></div>
                            <div class="relative">
                                <a href="#" class="block w-56 px-6 py-2 text-sm text-gray-600 font-medium whitespace-no-wrap focus:outline-none hover:text-blue-600 focus:text-blue-900  transition duration-300 ease-in-out">{{ele.name}}</a>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NitsBoldMenus",
        props: {
            menus: Array,

        },
        data(){
            return{
                Visible:''
            }

        }
    }
</script>

<style scoped>

</style>