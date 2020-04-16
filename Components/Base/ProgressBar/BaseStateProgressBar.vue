<template>
    <div class="w-94% max-h-full m-8 bg-white shadow-lg border rounded">
    <div class="mt-5 ml-5 mr-10 mb-10">
        <div class="w-full bg-gray-light text-center px-10 mb-5">
            <h4 class="font-serif text-xl">State Progress Bar</h4>
        </div>
        <div class="shadow w-full bg-grey-light">
            <div class="bg-teal-300 h-4 text-xs leading-none py-1 rounded-r text-center text-white" style="width: 45%">45%</div>
        </div>
        <div class="shadow w-full bg-grey-light mt-4">
            <div class="bg-blue-600 h-4 text-xs leading-none py-1 rounded-r text-center text-white" style="width: 55%">55%</div>
        </div>
        <div class="shadow w-full rounded-r bg-grey-light mt-4">
            <div class="bg-yellow-400 text-xs h-4 leading-none rounded-r py-1 text-center text-white" style="width: 65%">65%</div>
        </div>
        <div class="shadow w-full bg-grey-light mt-4">
            <div class="bg-blue-500 text-xs leading-none h-4 py-1 rounded-r text-center text-white" style="width: 75%">75%</div>
        </div>
<!--        <div class="shadow w-full bg-grey-light mt-2">-->
<!--            <div class="bg-teal-500 text-xs leading-none py-1 text-center text-white" style="width: 85%">85%</div>-->
<!--        </div>-->
    </div>
    </div>
</template>

<script>
    export default {
        name: "BaseStateProgressBar"
    }
</script>

<style scoped>

</style>