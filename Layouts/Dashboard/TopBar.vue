<template>
    <nav class="bg-gray-200">
        <div class="max-w-7xl mx-auto pr-4">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <button v-on:click="$emit('toggle-menu')" class="p-1 border-2 border-transparent text-gray-700 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-400" aria-label="Docker">
                            <svg class="h-6 w-6" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14 9H9l-1 1 1 1h5l1-1-1-1zm2 5H9l-1 1 1 1h7l1-1-1-1zM9 6h7l1-1-1-1H9L8 5l1 1zM5 9H4l-1 1 1 1h1l1-1-1-1zm0 5H4l-1 1 1 1h1l1-1-1-1zM5 4H4L3 5l1 1h1l1-1-1-1z"/></svg>
                        </button>
                    </div>
<!--                    <menu-two></menu-two>-->
                </div>
                <div class="hidden md:block">
                    <div class="ml-4 flex items-center md:ml-6">
                        <div class="inline-flex mr-2 items-center rounded-full py-2 px-4 border border-solid border-teal-600">
                            <svg class="h-5 w-5 text-teal-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M18 15l-4-3 1-4c0-3-3-6-7-6-3 0-6 3-6 6 0 4 3 7 6 7l4-1 3 4h2l1-1v-2zM4 8c0-2 2-4 4-4 3 0 5 2 5 4 0 3-2 5-5 5-2 0-4-2-4-5z"/>
                            </svg>
                            <input class="ml-2 bg-gray-200 placeholder-teal-600 text-sm focus:outline-none antialiased tracking-wide font-medium text-teal-600 appearance-none leading-normal" type="text" placeholder="Search">
<!--                            <span class="text-center text-sm antialiased tracking-tight font-light font-sans">Site Actions</span>-->
                        </div>
                        <button class="p-1 border-2 border-transparent text-teal-600 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-400" aria-label="Notifications">
                            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                        <div class="ml-3 relative">
                            <div>
                                <button @click="open = !open" class="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid" id="user-menu" aria-label="User menu" aria-haspopup="true">
                                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                </button>
                                <button v-if="open" @click="open = false" class="fixed top-0 left-0 bottom-0 right-0 h-full w-full"></button>
                            </div>
                            <div v-if="open" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                                <div class="py-1 rounded-md bg-white shadow-xs">
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "TopBar",
        data() {
            return {
                open: false
            }
        },
        components: {
            'MenuTwo': () => import('./../../Components/Menus/MenuTwo')
        }
    }
</script>

<style scoped>

</style>
