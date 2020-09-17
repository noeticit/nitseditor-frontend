<template>
    <div :class="'h-auto grid mt-4 '+ (this.padding ? 'px-'+this.padding + ' ' : ' px-4  ')+ (this.cols ? 'md:grid-cols-'+this.cols + ' ' : ' ') + (this.rows ? 'grid-rows-'+this.rows + ' ' : ' ') + (this.gap ? 'gap-' + this.gap + ' ' : ' ') + (this.flow ? this.dense ? 'grid-flow-'+this.flow+'-dense' : 'grid-flow-'+this.flow : '')">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "NitsGrid",
        props: {
            rows: {
                type: Number
            },
            cols: {
                type: Number
            },
            padding: {
                type: Number
            },
            gap: {
                type: Number
            },
            flow:{
                type: Number,
            },
            dense:{
                type: Boolean,
            }
        },
    }
</script>

<style scoped>

</style>