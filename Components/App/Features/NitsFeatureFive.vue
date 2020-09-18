<template>
    <nits-column :gap="4" :cols="1">
        <div class="w-full">
            <div class="flex-col lg:px-16 px-2 md:mt-12 mt-4">
                <div class="text-blue-800 tracking-wide font-bold md:text-4xl text-2xl text-center font-ubuntu">{{title}}</div>
                <div class="lg:px-16 md:mt-4 py-4 text-left text-center leading-snug text-gray-600 text-lg font-serif antialiased tracking-wide font-normal">
                    {{subtitle}}
                </div>
            </div>

            <nits-grid :cols="per_row" :gap="4" :padding="32">
                <div class="flex-col px-6" v-for="(item,index) in content">
                    <div class="py-4 text-xl font-ubuntu font-semibold text-blue-800 antialiased tracking-normal">{{item.title}}</div>
                    <div class="text-left leading-normal text-gray-600 text-sm font-serif antialiased tracking-wide font-normal">
                        {{item.desc}}
                    </div>
                </div>
            </nits-grid>

        </div>
    </nits-column>
</template>

<script>
    export default {
        name: "NitsFeatureFive",
        props: {
            title: {
                type: String,
                required: true
            },
            subtitle: String,
            content: Array,
            per_row: Number
        },
    }
</script>

<style scoped>

</style>