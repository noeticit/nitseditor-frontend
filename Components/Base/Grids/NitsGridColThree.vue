<template>
    <div class="h-auto grid grid-cols-3 gap-4">
        <div class="bg-white rounded-lg  mt-5 justify-center">
            <div class="flex justify-between border-solid p-2 text-center items-center">
                <div class="text-left font-semibold text-gray-700 ml-2 text-xl antialiased leading-snug tracking-normal font-sans">
                    {{heading1}} <span class="text-teal-500">{{subheading1}}</span>
                </div>
            </div>
            <div class="relative">
                <slot name="toolbox"></slot>
            </div>
        </div>

        <div class="bg-white rounded-lg  mt-5  justify-center">
            <div class="flex justify-between border-solid  p-2 text-center items-center">
                <div class="text-left font-semibold text-gray-700 ml-2 text-xl antialiased leading-snug tracking-normal font-sans">
                    {{heading2}} <span class="text-teal-500">{{subheading2}}</span>
                </div>
            </div>
            <div class="relative">
                <slot name="toolbox1"></slot>
            </div>
        </div>
        <div class="bg-white rounded-lg mt-5  justify-center">
            <div class="flex justify-between border-solid  p-2 text-center items-center">

                <div class="text-left font-semibold text-gray-700 ml-2 text-xl antialiased leading-snug tracking-normal font-sans">
                    {{heading3}} <span class="text-teal-500">{{subheading3}}</span>
                </div>
            </div>
            <div class="relative">
                <slot name="toolbox2"></slot>
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