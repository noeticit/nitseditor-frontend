<template>
    <div class="bg-white rounded-lg shadow-lg m-2 p-2 w-full h-64  jsutify-center height">
        <div class="flex flex-col">
            <div class="flex justify-between h-10 p-3 border-b-2">
                <div class="flex">
                    <svg class="h-5 w-5 fill-current mr-4" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Page-1" stroke="none" stroke-width="1"  fill-rule="evenodd">
                            <g id="icon-shape">
                                <path d="M0,10 L0,2 L2,0 L10,0 L20,10 L10,20 L0,10 Z M4.5,6 C5.32842712,6 6,5.32842712 6,4.5 C6,3.67157288 5.32842712,3 4.5,3 C3.67157288,3 3,3.67157288 3,4.5 C3,5.32842712 3.67157288,6 4.5,6 Z" id="Combined-Shape"></path>
                            </g>
                        </g>
                    </svg>
                    <b class="mr-4 text-lg">{{title}}</b> <p>{{subtitle}}</p></div>
                <div class="relative">
                    <slot name="toolbox"></slot>
                </div>
            </div>
            <div class="mt-2 p-3 overflow-auto h-32 mb-2">
                <slot></slot>
            </div>
            <div class="mb-3 border-b-2"></div>
            <base-button></base-button>
        </div>
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
            }
        }
    }
</script>

<style scoped>
    .height {
        min-height: 100px;
    }
</style>