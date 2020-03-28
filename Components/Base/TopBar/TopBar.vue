<template>
    <nav class="bg-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <button v-on:click="$emit('toggle-menu')" class="p-1 border-2 border-transparent text-gray-700 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-400" aria-label="Docker">
                            <svg class="h-6 w-6" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14 9H9l-1 1 1 1h5l1-1-1-1zm2 5H9l-1 1 1 1h7l1-1-1-1zM9 6h7l1-1-1-1H9L8 5l1 1zM5 9H4l-1 1 1 1h1l1-1-1-1zm0 5H4l-1 1 1 1h1l1-1-1-1zM5 4H4L3 5l1 1h1l1-1-1-1z"/></svg>
                        </button>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline">
                            <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Dashboard</a>
                            <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-white hover:bg-gray-400 focus:outline-none focus:text-white focus:bg-gray-400">Team</a>
                            <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-white hover:bg-gray-400 focus:outline-none focus:text-white focus:bg-gray-400">Projects</a>
                            <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-white hover:bg-gray-400 focus:outline-none focus:text-white focus:bg-gray-400">Calendar</a>
                            <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-white hover:bg-gray-400 focus:outline-none focus:text-white focus:bg-gray-400">Reports</a>
                        </div>
                    </div>
                </div>
                <div class="hidden md:block">
                    <div class="ml-4 flex items-center md:ml-6">
                        <button class="p-1 border-2 border-transparent text-gray-700 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-400" aria-label="Notifications">
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
        }
    }
</script>

<style scoped>

</style>