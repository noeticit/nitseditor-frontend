<template>
    <div class="w-full">
        <div class="text-center md:text-4xl text-2xl font-bold text-blue-800 md:px-32 py-8 md:py-16">
            <div class="lg:px-48 tracking-wide font-ubuntu">{{title}}</div>
        </div>
        <nits-column :gap="4" :cols="1">
            <nits-grid :cols="per_row" :gap="4" :padding="24">
                <div v-for="(item,index) in content" class="flex w-full px-4">
                    <div @mouseover="item.visible = true" @mouseleave="item.visible = false" @keydown.enter="item.visible = !item.visible" class=" relative shadow-2xl mx-4 my-4 h-auto">
                        <div>
                            <img style="width: 100%;height: 350px" :src="item.image">
                        </div>
                        <div class="text-left text-blue-800 font-semibold  ml-4 text-base font-ubuntu mt-4">{{item.title}}</div>
                        <div class="text-gray-800 mb-4 text-left antialiased tracking-wide font-medium font-ubuntu text-xs mt-4 ml-4 mr-6">{{item.description}}</div>
                        <div class="flex justify-between border-t" v-for="(ele,index) in item.data">
                            <div class="flex">
                                <div class="p-2 border-r">
                                    <img  class="h-5 w-6 rounded" :src="ele.img">
                                </div>
                                <div class="p-2 text-gray-500">
                                    <svg class="h-5 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" :d="ele.svg"/>
                                        <path fill-rule="evenodd" :d="ele.mobile"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="p-2 text-xs text-right uppercase font-ubuntu font-medium text-gray-700 antialiased tracking-wide">{{ele.name}}
                            </div>
                        </div>
                        <transition enter-active-class="transition duration-300 ease-out transform" enter-class="-translate-y-3 scale-95 opacity-0" enter-to-class="translate-y-0 scale-100 opacity-100" leave-active-class="transition duration-150 ease-in transform" leave-class="translate-y-0 opacity-100" leave-to-class="-translate-y-3 opacity-0">
                            <div v-show="item.visible" class="w-1/4 absolute top-0">
                                <div style="height: 544px; width:100%" class="bg-blue-400 px-32 py-64 items-center text-center bg-opacity-75 relative z-0">
                                    <button @click.prevent="goTo(item.path)" class="bg-white absolute right-0 flex shadow w-40 block mr-12 bg-transparent text-blue-800 font-semibold border-2 border-blue-800 rounded-full focus:outline-none focus:border-blue-600 px-3 py-2 hover:bg-red-600 hover:text-white hover:border-transparent">
                                        <svg class="inline-block h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387A7.731 7.731 0 007.1 19h5.8a7.68 7.68 0 001.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8zM12 8H8V5.199C8 3.754 8.797 3 10 3s2 .754 2 2.199V8z"/>
                                        </svg>
                                        <span>{{item.view}}</span>
                                    </button>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </nits-grid>

        </nits-column>
    </div>

</template>

<script>
    export default {
        name: "NitsPortfolioFive",
        props: {
            title: {
                type: String,
                required: true
            },
            content: Array,
            per_row: Number,
            isVisible: false,
        },
        methods:{
            goTo(path){
                this.$router.push(path)
            }
        }
    }
</script>

<style scoped>

</style>