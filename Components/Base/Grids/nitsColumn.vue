<template>
    <div :class="this.span ? 'col-span-'+this.span : ' ' + this.start ? 'col-start-'+this.start : '' + this.end ? 'col-end-'+ this.end : ''">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "nitsColumn",
        props:{
            span:{
                type: String,
            },
            start:{
                type: String,
            },
            end:{
                type: String,
            }
        }
    }
</script>

<style scoped>

</style>