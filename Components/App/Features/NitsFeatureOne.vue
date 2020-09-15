<template>
    <nits-column :gap="4" :cols="1" class="md:grid-cols-2">
        <div class="lg:mx-8 mx-4" v-if="location === 'left'">
            <img class="" :src="src" :alt="alt"/>
        </div>
        <div class="lg:mx-12 mx-6 lg:mt-24 md:mt-16 mt-24">
            <h2 class="text-blue-800 font-bold text-5xl font-ubuntu">{{title}}</h2>
            <div class="content-center text-left leading-tight text-blue-800 text-3xl mt-5 font-ubuntu antialiased tracking-normal font-semibold">{{subtitle}}</div>
            <div class="text-gray-800 px-1 mt-5 font-medium text-xl font-ubuntu">{{content}}</div>
        </div>
        <div class="lg:mx-8 mx-4" v-if="location === 'right'">
            <img class="" :src="src" :alt="alt"/>
        </div>
    </nits-column>
</template>

<script>
    export default {
        name: "NitsFeatureOne",
        props: {
            title: {
                type: String,
                required: true
            },
            subtitle: String,
            content: String,
            location: String,
            src: {
                type: String,
                required: true
            },
            alt: {
                type: String
            }
        },
    }
</script>

<style scoped>

</style>