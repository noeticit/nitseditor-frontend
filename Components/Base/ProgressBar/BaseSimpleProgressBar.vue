<template>
    <div class="w-94% max-h-full m-8 bg-white shadow-lg border rounded">
    <div class="mt-5 ml-5 mr-10 mb-10">
        <div class="w-full bg-gray-light text-center px-10 mb-5">
            <h4 class="font-serif text-xl">Basic Progress Bar</h4>
        </div>
        <div class="shadow w-full bg-grey-light ">
            <div class="bg-blue-600 h-4 text-xs leading-none rounded py-1 text-center text-white" style="width: 25%"></div>
        </div>
        <div class="shadow w-full bg-grey-light mt-4 ">
            <div class="bg-blue-600 h-4 text-xs leading-none rounded py-1 text-center text-white" style="width: 50%"></div>
        </div>
        <div class="shadow w-full rounded bg-grey-light mt-4 ">
            <div class="bg-blue-600 text-xs h-4 leading-none rounded py-1 text-center text-white" style="width: 75%"></div>
        </div>
        <div class="shadow w-full bg-grey-light mt-4 ">
            <div class="bg-blue-600 text-xs h-4 leading-none rounded py-1 text-center text-white" style="width: 100%"></div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "BaseSimpleProgressBar"
    }
</script>

<style scoped>

</style>