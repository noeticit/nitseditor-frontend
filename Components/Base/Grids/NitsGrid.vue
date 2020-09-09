<template>
    <div :class="'h-auto grid px-4 mt-4 '+ (this.cols ? 'md:grid-cols-'+this.cols + ' ' : ' ') + (this.rows ? 'grid-rows-'+this.rows + ' ' : ' ') + (this.gap ? 'gap-' + this.gap + ' ' : ' ') + (this.flow ? this.dense ? 'grid-flow-'+this.flow+'-dense' : 'grid-flow-'+this.flow : '')">
        <slot></slot>
    </div>

<!--    <div :class="'h-auto grid '+ (this.cols ? 'grid-cols-'+ this.cols+' md:grid-cols-'+this.col + ' ' : ' ') + (this.rows ? 'grid-rows-'+this.rows + ' ' : ' ') + (this.gap ? 'gap-' + this.gap + ' ' : ' ') + (this.flow ? this.dense ? 'grid-flow-'+this.flow+'-dense' : 'grid-flow-'+this.flow : '')">-->
<!--        <slot></slot>-->
<!--    </div>-->
</template>

<script>
    export default {
        name: "NitsGrid",
        props: {
            rows: {
                type: String
            },
            cols: {
                type: String
            },
            // col: {
            //     type: String
            // },
            gap: {
                type: String
            },
            flow:{
                type: String,
            },
            dense:{
                type: Boolean,
            }
        },
    }
</script>

<style scoped>

</style>