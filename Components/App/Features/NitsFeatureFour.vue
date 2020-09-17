<template>
    <nits-column :gap="4" :cols="1">
        <div class="w-full">
            <div class="text-center md:text-4xl text-2xl font-bold text-blue-800 lg:px-32">
                <div class="lg:px-48 tracking-wide font-ubuntu">{{title}}</div>
            </div>
            <ul class="mx-10 my-4 flex justify-center flex-wrap">
                <nits-grid :cols="per_row" :gap="4">
                    <li class="mx-5" v-for="(item,index) in content">
                        <div class="h-20 w-20 text-blue-800 hover:text-blue-600 hover:bg-blue-200 border-4 border-blue-200 flex mx-auto rounded-full">
                            <svg class="mx-auto my-auto h-10 w-10" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                <path fill-rule="evenodd" :d="item.icon"/>
                                <path v-if="item.path" :d="item.path"></path>
                            </svg>
                        </div>
                        <div class="text-center text-blue-800 hover:text-blue-600 font-ubuntu text-lg py-6 font-semibold">{{item.name}}</div>
                    </li>
                </nits-grid>
            </ul>
        </div>
    </nits-column>
</template>

<script>
    export default {
        name: "NitsFeatureFour",
        props: {
            title: {
                type: String,
                required: true
            },
            content: Array,
            per_row: Number
        },
    }
</script>

<style scoped>

</style>