<template>
    <div class=" text-lg  font-semibold">
        <div class="float-right">
            <div v-for="(item,index) in menus" @mouseover="Visible = index" @mouseleave="Visible = index" @keydown.enter="Visible = !Visible" class="inline-block cursor-default text-white p-2  mx-3">
<!--                <a class="text-sm uppercase tracking-wider" href="#">{{item.name}}</a>-->
                <router-link class="text-sm uppercase tracking-wider" :to="item.link">
                    {{item.name}}
                </router-link>
                <transition enter-active-class="transition duration-300 ease-out transform" enter-class="-translate-y-3 scale-95 opacity-0" enter-to-class="translate-y-0 scale-100 opacity-100" leave-active-class="transition duration-150 ease-in transform" leave-class="translate-y-0 opacity-100" leave-to-class="-translate-y-3 opacity-0">
                    <div v-show="Visible === index" class="absolute pt-2">
                        <div class="relative py-1 bg-white border border-gray-200 rounded-md shadow-xl" v-for="ele in item.children">
                            <div class="absolute top-0 w-4 h-4 origin-center transform rotate-45 translate-x-5 -translate-y-2 bg-white border-t border-l border-gray-200 rounded-sm pointer-events-none"></div>
                            <div class="relative">
                                <a href="#" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline  transition duration-300 ease-in-out">{{ele.name}}</a>
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
        name: "NitsLightMenus",
        props:{
            menus: Array
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