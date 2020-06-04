<template>
    <div class="h-auto grid grid-cols-4 gap-4 px-10">
        <div class="bg-white rounded-lg justify-center">
            <div class="relative">
                <slot name="toolbox"></slot>
            </div>
        </div>

        <div class="bg-white rounded-lg  justify-center">
            <div class="relative">
                <slot name="toolbox1"></slot>
            </div>
        </div>
        <div class="bg-white rounded-lg justify-center">
            <div class="relative">
                <slot name="toolbox2"></slot>
            </div>
        </div>
        <div class="bg-white rounded-lg justify-center">
            <div class="relative">
                <slot name="toolbox3"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NitsGridColFour"
    }
</script>

<style scoped>

</style>