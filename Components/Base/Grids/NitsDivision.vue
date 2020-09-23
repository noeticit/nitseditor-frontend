<template>
    <div :class="'mt-'+ margin">
        <hr>
        <div :class="'text-gray-800 mt-5 px-6 text-lg leading-6 py-3 font-medium tracking-wide ' + (underline ? 'underline' : '')">{{heading}}</div>
    </div>
</template>

<script>
    export default {
        name: "NitsDivision",
        props: {
            margin: Number,
            heading: String,
            underline: Boolean
        },
    }
</script>

<style scoped>

</style>