<template>
    <div class="main-modal fixed w-full h-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
         style="background: rgba(0,0,0,.7);"
    >
        <div class="border border-teal-500 shadow-lg modal-container bg-white w-1/2 mx-20 rounded shadow-lg z-50">
            <div style="height: 400px;"  v-click-outside="emitEvent">
                <div class="flex bg-blue-600 p-4">
                    <h2 class="text-white text-xl leading-normal font-normal font-sans">{{ titleFormat(elementData.title) + ' Settings' }}</h2>
                </div>
                <div class="flex flex-wrap">
                    <div class="w-full">
                        <ul class="flex mb-0 list-none flex-wrap flex-row bg-blue-600 pt-2">
                            <li class=" flex text-center cursor-pointer" v-for="(item, index, key) in elementData.options">
                                <a
                                        class="text-base px-5 py-3 rounded-t-lg w-24 ml-2 leading-normal font-normal font-sans"
                                        v-on:click="tab_index = index"
                                        v-bind:class="tab_index === index ? 'text-gray-700 font-semibold  bg-white':'text-white hover:bg-blue-700 bg-blue-600'"
                                >
                                    {{ titleFormat(index) }}
                                </a>
                            </li>
                        </ul>
                        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded overflow-y-auto" style="height: 300px">
                            <div v-for="(item, index, key) in elementData.options" v-bind:class="tab_index === index ? 'block' : 'hidden'" class=" px-4 py-5 flex-auto">
                                <component :is="item.component"
                                           v-bind="item.attrs"
                                           :child_components="item.child_components"
                                           :row_index="row_index"
                                           :column_index="column_index"
                                           :element_index="element_index"
                                           :element="element"
                                           :component_name="component_name"
                                ></component>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center mt-5 justify-end p-6 border-t border-solid border-gray-300 bg-gray-300 rounded-b">
                <button @click="emitEvent()" class="text-white bg-gray-500 bg-transparent border border-solid border-gray-500 active:bg-gray-500 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease">
                    Close
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import {eventBus} from "../../Models/_events";

    export default {
        name: "PopupOptions",
        data() {
            return {
                details: {}
            }
        },
        props: {
            elementData: Object,
            tab_index: String,
            row_index: Number,
            column_index: Number,
            element_index: Number,
            component_name: String,
            element: Object
        },
        created() {

        },
        methods:{
            titleFormat(title) {
                return _.startCase(_.toLower(title))
            },
            emitEvent() {
                eventBus.$emit('popup-close')
            }
        }
    }
</script>

<style scoped>

</style>