<template>
    <nits-column :gap="4" :cols="1" :class="margin ? 'mt-'+margin : ''">
        <div v-for="item in content">
            <div class="ml-48 md:mt-4  text-left text-blue-800 text-2xl font-sans antialiased tracking-wide font-semibold ">{{item.title}}</div>
            <div class="mt-3 mx-48 text-left leading-relaxed text-gray-600 font-sans antialiased tracking-wide ">
                <ul class="list-disc text-gray-700 font-sans text-sm antialiased tracking-wide" v-if="item.list && item.list.length">
                    <li class="text-base" v-for="ele in item.list">{{ele.text}}</li>
                </ul>
                <p class="mt-4 text-base">
                    {{item.desc}}
                </p>
                <div v-if="item.options && item.options.length">
                    <div v-for="ele in item.options">
                        <div class="italic text-gray-600 md:py-4 py-2">{{ele.title}}</div>
                        <p class="text-base">
                            {{ele.text}}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </nits-column>
</template>

<script>
    export default {
        name: "NitsFeatureOne",
        props: {
            content: Array,
            margin: Number
        },
    }
</script>

<style scoped>

</style>