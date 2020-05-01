<template>
    <div>
        <div class="flex">
            <ul class=" flex ">
                <li class="-mb-px mr-1">

                    <a @click.prevent="showTab('list')" class="bg-white inline-block py-2 px-4 text-gray-700 font-semibold" href="#">
                        <button class="bg-blue-500 text-white text-center text-base w-24 h-10 rounded">
                            <svg class="inline-block mb-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M14.4 9H8.6c-.552 0-.6.447-.6 1s.048 1 .6 1h5.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm2 5H8.6c-.552 0-.6.447-.6 1s.048 1 .6 1h7.8c.552 0 .6-.447.6-1s-.048-1-.6-1zM8.6 6h7.8c.552 0 .6-.447.6-1s-.048-1-.6-1H8.6c-.552 0-.6.447-.6 1s.048 1 .6 1zM5.4 9H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1h1.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0 5H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1h1.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0-10H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1h1.8c.552 0 .6-.447.6-1s-.048-1-.6-1z"/>
                            </svg>

                            <span class="font-sans antialiased pr-1 font-semibold text-lg">List</span>
                        </button>
                    </a>
                </li>
                <li class="mr-1">
                    <a @click.prevent="showTab('analytics')" class="bg-white inline-block py-2 px-4 text-gray-700 hover:text-blue-darker font-semibold" href="#">
                        <button class="bg-blue-500 text-white text-center text-base w-32 h-10 rounded">
                            <svg class="inline-block mb-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M17 1h-2a1 1 0 00-1 1v16.992h4V2a1 1 0 00-1-1zm-6 6H9a1 1 0 00-1 1v10.992h4V8a1 1 0 00-1-1zm-6 6H3a1 1 0 00-1 1v4.992h4V14a1 1 0 00-1-1z"/>
                            </svg>
                            <span class="font-sans antialiased pr-1 font-semibold text-lg">Analytics</span>
                        </button>
                    </a>
                </li>
                <li class="mr-1">
                    <a @click.prevent="showTab('location')" class="bg-white inline-block py-2 px-4 text-gray-700 hover:text-blue-darker font-semibold" href="#">
                        <button class="bg-blue-500 text-white text-center text-base w-32 h-10 rounded">
                            <svg class="inline-block mb-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 2.009c-2.762 0-5 2.229-5 4.99 0 4.774 5 11 5 11s5-6.227 5-11c0-2.76-2.238-4.99-5-4.99zm0 7.751a2.7 2.7 0 110-5.4 2.7 2.7 0 010 5.4z"/>
                            </svg>
                            <span class="font-sans antialiased pr-1 font-semibold text-lg">Location</span>
                        </button>
                    </a>
                </li>
                <li class="mr-1">
                    <a @click.prevent="showTab('active')"  class="bg-white inline-block py-2 px-4 text-gray-700 hover:text-blue-darker font-semibold" href="#">
                        <button class="bg-blue-500 text-white text-center text-base w-24 h-10 rounded">
                            <svg class="inline-block mb-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.783 10c0-1.049.646-1.875 1.617-2.443a8.932 8.932 0 00-.692-1.672c-1.089.285-1.97-.141-2.711-.883-.741-.74-.968-1.621-.683-2.711a8.732 8.732 0 00-1.672-.691c-.568.97-1.595 1.615-2.642 1.615-1.048 0-2.074-.645-2.643-1.615a8.697 8.697 0 00-1.671.691c.285 1.09.059 1.971-.684 2.711-.74.742-1.621 1.168-2.711.883A8.797 8.797 0 001.6 7.557c.97.568 1.615 1.394 1.615 2.443 0 1.047-.645 2.074-1.615 2.643a8.89 8.89 0 00.691 1.672c1.09-.285 1.971-.059 2.711.682.741.742.969 1.623.684 2.711a8.841 8.841 0 001.672.693c.568-.973 1.595-1.617 2.643-1.617 1.047 0 2.074.645 2.643 1.617a8.963 8.963 0 001.672-.693c-.285-1.088-.059-1.969.683-2.711.741-.74 1.622-1.166 2.711-.883a8.811 8.811 0 00.692-1.672c-.973-.569-1.619-1.395-1.619-2.442zM10 13.652a3.652 3.652 0 110-7.306 3.653 3.653 0 010 7.306z"/>
                            </svg>
                            <span class="font-sans antialiased pr-1 font-semibold text-lg">Active</span>
                        </button>
                    </a>
                </li>
                <li class="mr-1">
                    <a @click.prevent="showTab('download')"  class="bg-white inline-block py-2 px-4 text-gray-700 hover:text-blue-darker font-semibold" href="#">
                        <button class="bg-blue-500 text-white text-center text-base w-32 h-10 rounded">
                            <svg class="inline-block mb-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M15 7h-3V1H8v6H5l5 5 5-5zm4.338 6.532c-.21-.224-1.611-1.723-2.011-2.114A1.503 1.503 0 0016.285 11h-1.757l3.064 2.994h-3.544a.274.274 0 00-.24.133L12.992 16H7.008l-.816-1.873a.276.276 0 00-.24-.133H2.408L5.471 11H3.715c-.397 0-.776.159-1.042.418-.4.392-1.801 1.891-2.011 2.114-.489.521-.758.936-.63 1.449l.561 3.074c.128.514.691.936 1.252.936h16.312c.561 0 1.124-.422 1.252-.936l.561-3.074c.126-.513-.142-.928-.632-1.449z"/>
                            </svg>
                            <span class=" font-sans antialiased pr-1 font-semibold text-lg">Download</span>
                        </button>
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <p v-show="list">hello list</p>
            <p v-show="analytics">hello analytics</p>
        </div>
    </div>

</template>

<script>
    export default {
        name: "BasePillsIconHover"
    }
</script>

<style scoped>

</style>