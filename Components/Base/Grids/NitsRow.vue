<template>
    <div :class="this.span ? 'row-span-'+this.span : ' ' + this.start ? 'row-start-'+this.start : ' ' + this.end ? 'row-end-'+this.end : ' '">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "nitsRow",
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