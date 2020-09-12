<template>
    <div>
        <div v-for="(item, index) in elements">
            <component :is="item.component" :key="index" v-bind="item.attrs"></component>
        </div>
    </div>
</template>

<script>

    export default {
        name: "NitsPageBuilder",
        data() {
            return {
                loading: false,
            }
        },
        props: {
            elements: Array,
        },
        created() {

        }
    }
</script>

<style scoped>

</style>