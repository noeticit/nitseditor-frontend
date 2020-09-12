<template>
    <nits-column :gap="4" :cols="2">
        <div :class="'lg:mx-12 mx-6 ' + (this.margin ? 'mt-'+this.margin + ' ' : ' ')">
            <h2 class="text-blue-800 font-bold text-5xl font-ubuntu">{{title}}</h2>
            <div class="content-center text-left leading-tight text-blue-800 text-3xl mt-5 font-ubuntu antialiased tracking-normal font-semibold">{{sub_title}}</div>
            <div class="text-gray-800 px-1 mt-5 font-medium text-xl font-ubuntu">{{content}}</div>
        </div>
        <div :class="'lg:mx-8 mx-4 ' + (this.image_margin ? '-mt-'+this.image_margin + ' ' : ' ')">
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
            sub_title: String,
            content: String,
            margin: Number,
            src: {
                type: String,
                required: true
            },
            alt: {
                type: String
            },
            image_margin: Number
        },
    }
</script>

<style scoped>

</style>