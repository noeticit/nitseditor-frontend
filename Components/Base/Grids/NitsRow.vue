<template>
    <div :class="'grid-row ' + (this.margin ? 'mt-'+this.margin + ' ' : ' ')">
        <component v-for="(element, index) in child_components" :key="index" :is="element.component" v-bind="element.attrs"></component>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "nitsRow",
        props:{
            child_components: Array,
            attrs: Object,
            margin:Number
        }
    }
</script>

<style scoped>

</style>