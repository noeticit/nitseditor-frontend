<template>
    <nits-column :gap="4" :cols="1" class="md:grid-cols-2">
        <div :class="'lg:mx-8 my-4 mx-4 '+ (image_margin ? 'md:mt-'+image_margin : 'md:mt-1 ') + (image_margin_top ? ' mt-'+image_margin_top : '')" v-if="location === 'left'">
            <img class="" :src="src" :alt="alt"/>
        </div>
        <div :class="'lg:mx-12 mx-6 mt-16 ' + (text_margin ? 'md:mt-'+text_margin : 'md:mt-16 ')">
            <div class=" content-center font-ubuntu text-left leading-tight text-blue-800 text-base antialiased tracking-tight font-semibold">{{tag}}</div>
            <h2 :class="'text-blue-800 font-bold md:text-4xl text-2xl font-ubuntu ' + (this.textalign ? this.textalign : 'text-left')">{{title}}</h2>
            <div :class="'content-center leading-tight text-blue-800 md:text-3xl text-1xl mt-5 font-ubuntu antialiased tracking-normal font-semibold '+ (this.textalign ? this.textalign : 'text-left')">{{subtitle}}</div>
            <div class="text-gray-800 px-1 mt-5 font-medium md:text-xl text-lg font-ubuntu">{{content}}</div>
            <div class="container-fluid mt-10">
                <div class=" content-center font-ubuntu text-left leading-tight text-blue-800 text-sm font-sans antialiased tracking-tight font-semibold">{{tools.title}}</div>
                <div class="flex py-4 mb-4 ">
                    <div v-for="(ele,index) in tools.options"  class="flex cursor-pointer mr-8 lg:ml-0">
                        <img class="h-10 w-10" :src="ele.tool" />
                        <div class="content-center hover:text-red-600 lg:ml-3 ml-2 mt-2 text-left leading-tight text-gray-600 text-bas font-ubuntu antialiased tracking-tight font-semibold">{{ele.name}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div :class="'lg:mx-8 mx-4 ' + (image_margin ? 'md:mt-'+image_margin : 'md:mt-1 ') + (image_margin_top ? ' mt-'+image_margin_top : '')"  v-if="location === 'right'">
            <img class="w-full" :src="src" :alt="alt"/>
        </div>
    </nits-column>
</template>

<script>
    export default {
        name: "NitsFeatureSeven",
        props: {
            title: {
                type: String,
                required: true
            },
            subtitle: String,
            tag: String,
            content: String,
            location: String,
            src: {
                type: String,
                required: true
            },
            alt: {
                type: String
            },
            tools: Object,
            textalign: String,
            image_margin_top: Number,
            image_margin: Number,
            text_margin: Number,
        },
    }
</script>

<style scoped>

</style>