<template>
    <div class="bg-white rounded-lg shadow-lg mt-5 h-40 jsutify-center">
        <div class="flex justify-between border-solid border-b-2 p-2 text-center items-center">
            <div class="text-left ml-2 text-xl antialiased leading-snug tracking-normal font-sans">Analytics Overview</div>
            <div class="inline-flex items-center rounded-full py-2 px-4 bg-teal-400">
                <span class="text-center text-sm antialiased tracking-tight font-light font-sans text-white">Get it now</span>
            </div>
        </div>
        <div class="mt-2 p-1 flex justify-center">
            <div class="border-solid w-1/3 border-r-2 justify-center text-center items-center">
                <div class="text-center text-2xl antialiased tracking-wide font-sans font-semibold">5000</div>
                <div class="text-center text-sm antialiased tracking-tight leading-relaxed font-sans uppercase">Visits</div>
                <div class="text-center text-xs antialiased tracking-wide font-sans font-light text-blue-500">14%</div>
            </div>
            <div class="border-solid w-1/3 border-r-2 justify-center text-center items-center">
                <div class="text-center text-2xl antialiased tracking-wide font-sans font-semibold">300</div>
                <div class="text-center text-sm antialiased tracking-tight leading-relaxed font-sans uppercase">Unique visitors</div>
                <div class="text-center text-xs antialiased tracking-wide font-sans font-light text-blue-500">17%</div>
            </div>
            <div class="w-1/3 justify-center text-center items-center">
                <div class="text-center text-2xl antialiased tracking-wide font-sans font-semibold">50</div>
                <div class="text-center text-sm antialiased tracking-tight leading-relaxed font-sans uppercase">Form Submission</div>
                <div class="text-center text-xs antialiased tracking-wide font-sans font-light text-blue-500">10%</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AnalyticsOverview"
    }
</script>

<style scoped>

</style>