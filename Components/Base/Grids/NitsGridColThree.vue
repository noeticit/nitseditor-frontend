<template>
    <div class="h-auto grid grid-cols-3 gap-4 px-10">
        <div class="bg-white rounded-lg justify-center">
            <div class="relative">
                <slot name="box1"></slot>
            </div>
        </div>

        <div class="bg-white rounded-lg  justify-center">
            <div class="relative">
                <slot name="box2"></slot>
            </div>
        </div>
        <div class="bg-white rounded-lg justify-center">
            <div class="relative">
                <slot name="box3"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NitsGridColThree",
        props:{
            heading1:{
                type: String,
                // required: true


            },
            heading2:{
                type: String,
                // required: true


            },
            heading3:{
                type: String,
                // required: true


            },
            subheading1:{
                type: String,
                // required: true


            },
            subheading2:{
                type: String,
                // required: true


            },
            subheading3: {
                type: String,
                // required: true


            }
        }
    }
</script>

<style scoped>

</style>