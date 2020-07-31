<template>
    <div class="bg-white rounded-lg shadow-lg mt-5 m-2 justify-center">
        <div class="flex justify-between border-solid border-b-2 p-2 text-center items-center">

            <div class="text-left text-gray-800 ml-2 text-xl antialiased leading-snug tracking-normal font-sans">
                {{title}} {{subtitle}}
            </div>

            <div class="relative">
                <slot name="toolbox"></slot>
            </div>
        </div>
        <div :class="'mt-2 p-3 font-sans text-gray-700 antialiased mb-2'+height">
            <slot></slot>
        </div>
        <div v-if="$slots.footer && !!$slots.footer[0].text" class="mb-1 border-b-2"></div>
        <slot name="footer"></slot>
<!--        <div class="ml-5 py-5"><base-button></base-button></div>-->
    </div>
</template>

<script>
    export default {
        name: "BasePortletOne",
        props: {
            title: {
                type: String,
                required: true
            },
            subtitle: {
                type: String,
            },
            height: {
                type: Number,
            }
        }
    }
</script>

<style scoped>

</style>