<template>
    <div class="bg-white rounded-lg shadow-lg m-2 p-2 w-full h-64  jsutify-center height">
        <div class="flex flex-col">
            <div class="flex justify-between h-10 p-3 border-b-2">
                <div class="flex">
                    <svg class="h-5 w-5 fill-current mr-4" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Page-1" stroke="none" stroke-width="1"  fill-rule="evenodd">
                            <g id="icon-shape">
                                <path d="M0,10 L0,2 L2,0 L10,0 L20,10 L10,20 L0,10 Z M4.5,6 C5.32842712,6 6,5.32842712 6,4.5 C6,3.67157288 5.32842712,3 4.5,3 C3.67157288,3 3,3.67157288 3,4.5 C3,5.32842712 3.67157288,6 4.5,6 Z" id="Combined-Shape"></path>
                            </g>
                        </g>
                    </svg>
                    <b class="mr-4 text-lg">Title and headers</b> <p>Sub Title</p></div>

                <div class="relative">
                    <button @click="isOpen = !isOpen" class="block h-8 w-8  overflow-hidden  focus:outline-none focus:border-white">
<!--                        <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" alt="Your avatar">-->
<!--                        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">-->
<!--                            <path v-if="isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>-->
<!--                            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>-->
<!--                        </svg>-->
                        <svg class="h-6 w-6 fill-current mb-8" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" stroke-width="4"  fill-rule="evenodd">
                                <g id="icon-shape">
                                    <path d="M4,12 C5.1045695,12 6,11.1045695 6,10 C6,8.8954305 5.1045695,8 4,8 C2.8954305,8 2,8.8954305 2,10 C2,11.1045695 2.8954305,12 4,12 Z M10,12 C11.1045695,12 12,11.1045695 12,10 C12,8.8954305 11.1045695,8 10,8 C8.8954305,8 8,8.8954305 8,10 C8,11.1045695 8.8954305,12 10,12 Z M16,12 C17.1045695,12 18,11.1045695 18,10 C18,8.8954305 17.1045695,8 16,8 C14.8954305,8 14,8.8954305 14,10 C14,11.1045695 14.8954305,12 16,12 Z" id="Combined-Shape"></path>
                                </g>
                            </g>
                        </svg>
                    </button>
                    <div :class="isOpen ? 'block' : 'hidden'" class="absolute right-0 py-2 w-48 bg-gray-200 rounded-lg shadow-xl">
                        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Account settings</a>
                        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Support</a>
                        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Sign out</a>
                    </div>
                </div>
            </div>
            <div class="mt-2 p-3 overflow-auto h-32 mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
            </div>
            <div class="mb-3 border-b-2"></div>
            <base-button></base-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BasePortletOne",
        data(){
            return{
                isOpen: false,
            }
        },
    }
</script>

<style scoped>
    .height {
        min-height: 100px;
    }
</style>