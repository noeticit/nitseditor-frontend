<template>
    <nits-column class="w-full lg:px-10 px-4" :gap="4" :col="1">
        <div class="lg:mt-16 mt-8">
            <div class="text-blue-800 tracking-wide font-bold md:text-4xl text-2xl text-center font-ubuntu">{{title}}</div>
        </div>
        <div class="flex flex-wrap mt-8">
            <div v-for="item in content" class="flex w-1/2 md:w-1/3 lg:w-1/6 lg:m-5 p-2 md:p-5 stream-container">
                <a class=" w-full">
                    <div class=" relative">
                        <div class="poster-container">
                            <img class="poster w-full" :src="item.image">
                            <img class="h-26 w-16 absolute bottom-0 lg:ml-16 ml-12 -mb-6" :src="item.icon">
                        </div>
                    </div>

                    <div class="mt-3 text-center text-xl font-semibold antialiased  text-blue-800 tracking-normal font-ubuntu">
                        <div class="pt-3">
                            {{item.title}}
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </nits-column>
</template>

<script>
    export default {
        name: "NitsPortfolioOne",
        props: {
            title: {
                type: String,
                required: true
            },
            content: Array,
            margin: Number
        },
    }
</script>

<style scoped>

</style>