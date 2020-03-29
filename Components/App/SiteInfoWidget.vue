<template>
    <div class="bg-white h-56 rounded-lg shadow-lg justify-center">
        <div class="flex justify-center h-40">
            <div class="p-4 ml-6 w-1/3 justify-center">
                <div class="h-full">
                    <img class="mr-0 object-right h-32" src="/nits-assets/images/website.png" alt="Website Preview">
                </div>
            </div>
            <div class="-ml-10 w-2/3 justify-center">
                <div class="text-left mt-6 text-xl antialiased tracking-normal font-semibold font-sans">Nits Editor</div>
                <div class="text-left text-sm antialiased tracking-tigh font-light font-sans text-indigo-500">https://www.nitseditor.com</div>
                <div class="text-left mt-4">
                    <div class="inline-flex items-center rounded-full py-2 px-4 border border-solid border-indigo-600">
                        <span class="text-center text-sm antialiased tracking-tight font-light font-sans">Site Actions</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-2 p-1 border-solid border-t-2 flex justify-between">
            <div class="border-solid w-1/4 border-r-2 justify-center text-center items-center">
                <div class="text-center text-xs antialiased tracking-tight font-sans">Domain: Connected</div>
                <div class="text-center text-xs antialiased tracking-wide font-sans font-light text-blue-500">Manage Domain</div>
            </div>
            <div class="border-solid w-1/4 border-r-2 justify-center text-center items-center">
                <div class="text-center text-xs antialiased tracking-tight font-sans">Website Plan: Premium</div>
                <div class="text-center text-xs antialiased tracking-wide font-sans font-light text-blue-500">Manage Plan</div>
            </div>
            <div class="border-solid w-1/4 border-r-2 justify-center text-center items-center">
                <div class="text-center text-xs antialiased tracking-tight font-sans">Mailbox: External</div>
                <div class="text-center text-xs antialiased tracking-wide font-sans font-light text-blue-500">Manage Mailbox</div>
            </div>
            <div class="border-solid w-1/4 justify-center text-center items-center">
                <div class="text-center text-xs antialiased tracking-tight font-sans">Ascend Plan: Free</div>
                <div class="text-center text-xs antialiased tracking-wide font-sans font-light text-blue-500">Compare Plans</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SiteInfoWidget"
    }
</script>

<style scoped>

</style>