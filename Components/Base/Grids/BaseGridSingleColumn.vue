<template>
    <div :class="'flex '+classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "BaseGridSingleColumn",
        props: {
            classes: String
        }
    }
</script>

<style scoped>

</style>