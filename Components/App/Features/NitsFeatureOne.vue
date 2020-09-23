<template>
    <nits-column :gap="4" :cols="1" class="md:grid-cols-2">
        <div :class="'lg:mx-8 my-4 mx-4 '+ (image_margin ? 'md:mt-'+image_margin : 'md:mt-1 ') + (image_margin_top ? ' mt-'+image_margin_top : '')" v-if="location === 'left'">
            <img class="" :src="src" :alt="alt"/>
        </div>
        <div :class="'lg:mx-12 mx-6 mt-16 ' + (text_margin ? 'md:mt-'+text_margin : 'md:mt-16 ')">
            <h2 :class="'text-blue-800 font-bold md:mt-8 mt-4 md:text-4xl text-2xl font-ubuntu ' + (this.textalign ? this.textalign : 'text-left')">{{title}}</h2>
            <div :class="'content-center leading-tight text-blue-800 md:text-3xl text-1xl mt-5 font-ubuntu antialiased tracking-normal font-semibold '+ (this.textalign ? this.textalign : 'text-left')">{{subtitle}}</div>
            <div class="text-gray-800 px-1 mt-5 font-base md:text-xl text-lg font-ubuntu">{{content}}</div>

            <div class="w-full mt-4" v-if="options && options.length">
                <div class="flex py-5" v-for="(item,index) in options">
                    <div class="py-1 text-red-700">
                        <svg class="h-4 w-4 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M9.999.8A9.2 9.2 0 00.8 10.001a9.2 9.2 0 0018.399 0A9.2 9.2 0 009.999.8zM10 13.001a3 3 0 110-6 3 3 0 010 6z"/>
                        </svg>
                    </div>
                    <div class="flex-col">
                        <div class="text-lg font-ubuntu ml-3 text-blue-800 font-semibold tracking-wide antialiased">
                            <span class="font-bold font-ubuntu">{{item.name}}</span>
                        </div>
                        <div class="flex">
                            <div  v-for="(ele,index) in item.services" :class="'text-sm font-ubuntu cursor-pointer hover:text-gray-700 font-semibold text-gray-600 text-left tracking-wide px-3 my-1 border-gray-500 ' + (index+1 < item.services.length ? 'border-r-2' : '')">
                                {{ele.title}}
                            </div>
                        </div>
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
            },
            options: {
                type: Array,
                default: () => []
            },
            textalign: String,
            image_margin_top: Number,
            image_margin: Number,
            text_margin: Number,
        },
    }
</script>

<style scoped>

</style>