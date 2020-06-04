<template>
    <div class="w-2/2 bg-white rounded-lg  rounded shadow-lg min-h-full justify-center antialiased leading-snug tracking-normal">
        <div class="p-16 text-center font-serif">
            <slot name="toolbox"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NitsFull"
    }
</script>

<style scoped>

</style>