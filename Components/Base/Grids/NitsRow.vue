<template>
    <div :class="'grid-row ' + (this.margin ? 'mt-3 ' : ' ') + (this.margin ? 'md:mt-'+this.margin + ' ' : ' ') +  (this.gap ? 'gap-' + this.gap + ' ' : ' ')">
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
            margin:Number,
            gap: Number,
            background: {
                type: String,
                default: ''
            },
        }
    }
</script>

<style scoped>

</style>