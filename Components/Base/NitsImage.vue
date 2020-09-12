<template>
    <div :class="'lg:mx-8 mx-4 ' + (this.margin ? '-mt-'+this.margin + ' ' : ' ')">
        <img class="" :src="src" :alt="alt"/>
    </div>
</template>

<script>
    export default {
        name: "NitsImage",
        props: {
            src: {
                type: String,
                required: true
            },
            alt: {
                type: String
            },
            margin: Number
        }
    }
</script>

<style scoped>

</style>