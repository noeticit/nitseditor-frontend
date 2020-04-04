<template>
    <div>
        <ul class="flex">
            <li class="mr-3 mt-4 pl-2">
                <a class="rounded py-3 px-3 border border-blue-600  bg-blue-600 text-white bg-transparent" href="#">
                    <svg class="inline-block w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M14.4 9H8.6c-.552 0-.6.447-.6 1s.048 1 .6 1h5.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm2 5H8.6c-.552 0-.6.447-.6 1s.048 1 .6 1h7.8c.552 0 .6-.447.6-1s-.048-1-.6-1zM8.6 6h7.8c.552 0 .6-.447.6-1s-.048-1-.6-1H8.6c-.552 0-.6.447-.6 1s.048 1 .6 1zM5.4 9H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1h1.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0 5H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1h1.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0-10H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1h1.8c.552 0 .6-.447.6-1s-.048-1-.6-1z"/>
                    </svg>
                    <span class="font-sans antialiased text-base">List</span>
                </a>
            </li>

            <li class="mr-3 mt-4">
                <a class="rounded py-3 px-3 focus:bg-blue-600 focus:text-white bg-transparent text-gray-800" href="#">
                    <svg class="inline-block w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M17 1h-2a1 1 0 00-1 1v16.992h4V2a1 1 0 00-1-1zm-6 6H9a1 1 0 00-1 1v10.992h4V8a1 1 0 00-1-1zm-6 6H3a1 1 0 00-1 1v4.992h4V14a1 1 0 00-1-1z"/>
                    </svg>
                    <span class="font-sans antialiased text-base">Analytics</span>
                </a>
            </li>
            <li class="mr-3 mt-4">
                <a class="rounded py-3 px-3 focus:bg-blue-600 focus:text-white bg-transparent text-gray-800" href="#">
                    <svg class="inline-block w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 2.009c-2.762 0-5 2.229-5 4.99 0 4.774 5 11 5 11s5-6.227 5-11c0-2.76-2.238-4.99-5-4.99zm0 7.751a2.7 2.7 0 110-5.4 2.7 2.7 0 010 5.4z"/>
                    </svg>
                    <span class="font-sans antialiased text-base">Location</span>
                </a>
            </li>
            <li class="mr-3 mt-4">
                <a class="rounded py-3 px-3 focus:bg-blue-600 focus:text-white bg-transparent  text-gray-800" href="#">
                    <svg class="inline-block w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.783 10c0-1.049.646-1.875 1.617-2.443a8.932 8.932 0 00-.692-1.672c-1.089.285-1.97-.141-2.711-.883-.741-.74-.968-1.621-.683-2.711a8.732 8.732 0 00-1.672-.691c-.568.97-1.595 1.615-2.642 1.615-1.048 0-2.074-.645-2.643-1.615a8.697 8.697 0 00-1.671.691c.285 1.09.059 1.971-.684 2.711-.74.742-1.621 1.168-2.711.883A8.797 8.797 0 001.6 7.557c.97.568 1.615 1.394 1.615 2.443 0 1.047-.645 2.074-1.615 2.643a8.89 8.89 0 00.691 1.672c1.09-.285 1.971-.059 2.711.682.741.742.969 1.623.684 2.711a8.841 8.841 0 001.672.693c.568-.973 1.595-1.617 2.643-1.617 1.047 0 2.074.645 2.643 1.617a8.963 8.963 0 001.672-.693c-.285-1.088-.059-1.969.683-2.711.741-.74 1.622-1.166 2.711-.883a8.811 8.811 0 00.692-1.672c-.973-.569-1.619-1.395-1.619-2.442zM10 13.652a3.652 3.652 0 110-7.306 3.653 3.653 0 010 7.306z"/>
                    </svg>
                    <span class=" font-sans antialiased text-base">Active</span>
                </a>
            </li>
            <li class="mr-3 mt-4">
                <a class="rounded py-3 px-3 focus:bg-blue-600 focus:text-white bg-transparent text-gray-800" href="#">
                    <svg class="inline-block w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M15 7h-3V1H8v6H5l5 5 5-5zm4.338 6.532c-.21-.224-1.611-1.723-2.011-2.114A1.503 1.503 0 0016.285 11h-1.757l3.064 2.994h-3.544a.274.274 0 00-.24.133L12.992 16H7.008l-.816-1.873a.276.276 0 00-.24-.133H2.408L5.471 11H3.715c-.397 0-.776.159-1.042.418-.4.392-1.801 1.891-2.011 2.114-.489.521-.758.936-.63 1.449l.561 3.074c.128.514.691.936 1.252.936h16.312c.561 0 1.124-.422 1.252-.936l.561-3.074c.126-.513-.142-.928-.632-1.449z"/>
                    </svg>
                    <span class=" font-sans antialiased text-base">Download</span>
                </a>
            </li>
            <li class="mr-3 mt-4">
                <a class="rounded py-3 px-3 focus:bg-blue-600 focus:text-white bg-transparent text-gray-800" href="#">
                    <svg class="inline-block w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M7.859 14.691l-.81.805a1.814 1.814 0 01-2.545 0 1.762 1.762 0 010-2.504l2.98-2.955c.617-.613 1.779-1.515 2.626-.675a.992.992 0 101.397-1.407c-1.438-1.428-3.566-1.164-5.419.675l-2.98 2.956A3.719 3.719 0 002 14.244a3.72 3.72 0 001.108 2.658c.736.73 1.702 1.096 2.669 1.096s1.934-.365 2.669-1.096l.811-.805a.988.988 0 00.005-1.4.995.995 0 00-1.403-.006zm9.032-11.484c-1.547-1.534-3.709-1.617-5.139-.197l-1.009 1.002a.99.99 0 101.396 1.406l1.01-1.001c.74-.736 1.711-.431 2.346.197.336.335.522.779.522 1.252s-.186.917-.522 1.251l-3.18 3.154c-1.454 1.441-2.136.766-2.427.477a.99.99 0 10-1.396 1.406c.668.662 1.43.99 2.228.99.977 0 2.01-.492 2.993-1.467l3.18-3.153A3.732 3.732 0 0018 5.866a3.726 3.726 0 00-1.109-2.659z"/>
                    </svg>
                    <span class=" font-sans antialiased text-base">link</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "BasePillsIconTab"
    }
</script>

<style scoped>

</style>