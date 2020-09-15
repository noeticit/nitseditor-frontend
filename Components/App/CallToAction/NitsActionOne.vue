<template>
    <div class="w-full shadow-sm bg-transparent h-32 bg-blue-800 mt-24">
        <div class="flex justify-between container mx-auto py-6 mb-12">
            <h1 class="leading-tight lg:my-2 my-1 lg:ml-48 ml-6 font-bold font-ubuntu text-white lg:text-5xl text-2xl " >
                {{title}}
            </h1>
            <button class="flex rounded md:mr-32 my-auto lg:px-10 px-2 lg:py-2 py-1 mr-8 focus:outline-none font-medium font-ubuntu lg:text-sm text-xs text-white bg-indigo-600 hover:bg-indigo-700 focus:bg-indigo-800" >
                {{btn}}
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NitsActionOne",
        props: {
            title: {
                type: String,
                required: true
            },
            btn: String
        },
    }
</script>

<style scoped>

</style>