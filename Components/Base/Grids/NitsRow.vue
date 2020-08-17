<template>
    <div class="grid-row">
        <component v-for="(element, index) in child_components" :key="index" :is="element.component" v-bind="element.attrs"></component>
    </div>
</template>

<script>
    export default {
        name: "nitsRow",
        props:{
            child_components: Array,
            attrs: Object
        }
    }
</script>

<style scoped>

</style>