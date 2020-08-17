<template>
    <div :class="'grid '+ (this.cols ? 'grid-cols-'+this.cols + ' ' : ' ') +  (this.gap ? 'gap-' + this.gap + ' ' : ' ')">
        <components  v-for="(element, index) in child_components" :key="index" :is="element.component" v-bind="element.attrs"></components>
    </div>
</template>

<script>
    export default {
        name: "NitsColumn",
        props:{
            span:{
                type: String,
            },
            start:{
                type: String,
            },
            end:{
                type: String,
            },
            cols: Number,
            gap: Number,
            child_components: Array
        }
    }
</script>

<style scoped>

</style>