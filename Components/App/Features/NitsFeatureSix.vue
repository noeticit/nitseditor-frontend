<template>
    <nits-column :gap="4" :cols="1">
        <div class="w-full">
            <div class="flex-col lg:px-16 px-2 md:mt-12 mt-8">
                <div class="text-blue-800 tracking-wide font-bold md:text-4xl text-2xl text-center font-ubuntu">{{title}}</div>
                <div class="text-gray-800 text-center px-1 mt-5 font-medium md:text-xl text-lg font-ubuntu">
                    {{content}}
                </div>
            </div>
        </div>
    </nits-column>
</template>

<script>
    export default {
        name: "NitsFeatureSix",
        props: {
            title: {
                type: String,
                required: true
            },
            content: String,
        },
    }
</script>

<style scoped>

</style>