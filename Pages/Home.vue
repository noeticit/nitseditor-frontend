<template>
    <div class="block">
        <div class="absolute mt-4 right-0 px-10">
            <router-link to="/" class="font-serif subpixel-antialiased font-normal tracking-normal leading-loose p-2 text-gray-600">Home</router-link>
            <router-link to="/login" class="font-serif subpixel-antialiased font-normal tracking-normal leading-loose p-2 text-gray-600">Login</router-link>
            <router-link to="/register" class="font-serif subpixel-antialiased font-normal tracking-normal leading-loose p-2 text-gray-600">Register</router-link>
        </div>

        <div class="block flex h-screen">
            <div class="m-auto">
                <div class="font-serif subpixel-antialiased font-medium text-6xl text-gray-800 tracking-wider leading-4 items-center text-center">
                    Nits Editor
                </div>

                <div class="text-gray-400 mt-6 items-center text-center">
                    <a href="https://nitseditor.com/docs" class="font-serif subpixel-antialiased font-normal tracking-normal leading-loose text-gray-600 p-4">Docs</a>
                    <a href="https://github.com/noeticit/nitseditor" class="font-serif subpixel-antialiased font-normal tracking-normal leading-loose text-gray-600 p-4">GitHub</a>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
