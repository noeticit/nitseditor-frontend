<template>
    <div class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster" style="background: rgba(0,0,0,.7);">
        <div class="border border-teal-500 shadow-lg modal-container bg-white w-full mx-20 rounded shadow-lg z-50 overflow-y-auto">
            <div class="flex relative justify-between border-solid border-b-2 p-2 text-center items-center">
                <h2 class="text-xl leading-normal font-normal font-sans ml-6">{{ titleFormat(elementData.title) + ' Wizard' }}</h2>
                <div class="flex py-1">
                    <div @click="emitEvent()"  class="text-gray-600 ml-16 inline-block bg-white hover:bg-red-600 hover:text-white rounded shadow-md no-underline mr-3 focus:outline-none active:shadow-none font-bold">
                        <svg class="h-4 w-4 my-2 mx-2 font-bold" fill="currentColor" viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M512.001 84.853L427.148 0 256.001 171.147 84.853 0 0 84.853 171.148 256 0 427.148l84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853L340.853 256z"/></svg>
                    </div>
                </div>
            </div>
            <div class="overflow-y-auto scroll_bar" style="height: 500px;">
                <div>
                    <column-element v-if="element.attrs.child_components.length" v-for="(column,index) in element.attrs.child_components" :key="'column_index_'+index"  v-bind="column.attrs" :row_index="row_index" :column_index="index" :element_index="element_index" :old_column_index="column_index"></column-element>
                </div>
                <div class="h-56 m-8 rounded-b px-5 bg-gray-200 border-black">
                    <div class="px-8 py-8">
                        <div class="flex-col">
                            <div class="text-xl mt-10 antialiased font-normal text-center tracking-wider text-gray-500 px-64">
                                YOU HAVE EMPTY ELEMENT ADD YOUR FIRST COLUMN
                            </div>
                            <div class="flex mt-10 ml-64 pl-40">
                                <button @click.prevent="selectColumn = !selectColumn" class="text-sm focus:outline-none focus:bg-blue-600 hover:bg-blue-500 rounded bg-red-600 px-10 py-3 font-semibold tracking-normal text-white mr-5">Add Column</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-between border-solid border-t-2 p-2 text-center items-center">
                <button @click="emitEvent()"  class="ml-5 my-2 bg-transparent border border-gray-500 text-gray-600 font-semibold py-1 px-4 rounded">Close</button>
            </div>

            <div v-if="selectColumn" class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster" style="background: rgba(0,0,0,.7);">
                <div class="border border-teal-500 shadow-lg modal-container bg-white w-1/2 mx-32 rounded shadow-lg z-50 overflow-y-auto">
                    <div class="flex relative justify-between border-solid border-b-2 p-2 text-center items-center">
                        <div class="text-left font-medium ml-6 text-sm antialiased leading-snug text-gray-700 tracking-normal font-sans">Add Columns</div>
                        <div class="flex py-1">
                            <div @click="selectColumn = false" class="text-gray-600 ml-16 inline-block bg-white hover:bg-red-600 hover:text-white rounded shadow-md no-underline mr-3 focus:outline-none active:shadow-none font-bold">
                                <svg class="h-4 w-4 my-2 mx-2 font-bold" fill="currentColor" viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M512.001 84.853L427.148 0 256.001 171.147 84.853 0 0 84.853 171.148 256 0 427.148l84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853L340.853 256z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div class=" scroll_bar">
                        <nits-grid class="px-5 py-5" cols="3" gap="2">
                            <div  @click.prevent="addColumn('1')"  class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 cursor-pointer hover:border-blue-500" >
                                <div class="h-10 w-10 p mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                    <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>
                                    </svg>
                                    <!--                                <div class="h-8 mx-4 mt-1 bg-white "></div>-->
                                </div>
                                <div class="cursor-pointer mt-5">
                                    <h5 class="text-blue-500 font-bold">Add One Column</h5>
                                </div>

                            </div>
                            <div @click.prevent="addColumn('1/2 1/2')" class="flex cursor-pointer w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                                <div class="h-10 w-10 p mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                    <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>
                                    </svg>
                                    <!--                                <div class="h-8 mx-4 mt-1 bg-white "></div>-->
                                </div>
                                <div class=" flex-col cursor-pointer">
                                    <h5 class="text-blue-500 font-bold">Add Two Columns</h5>
                                    <div class="flex mt-1">
                                        <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                        <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                    </div>
                                </div>
                            </div>
                            <div @click.prevent="addColumn('1/3 1/3 1/3')" class="flex cursor-pointer w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                                <div class="h-10 w-10 p mt-3 mr-2 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                    <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>
                                    </svg>
                                    <!--                                <div class="h-8 mx-4 mt-1 bg-white "></div>-->
                                </div>
                                <div class=" flex-col cursor-pointer">
                                    <h5 class="text-blue-500 font-bold">Add Three Columns</h5>
                                    <div class="flex mt-1">
                                        <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                        <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                        <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                    </div>
                                </div>
                            </div>
                            <div @click.prevent="addColumn('1/4 1/4 1/4 1/4')" class="flex cursor-pointer w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                                <div class="h-10 w-10 p mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                    <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>
                                    </svg>
                                    <!--                                <div class="h-8 mx-4 mt-1 bg-white "></div>-->
                                </div>
                                <div class=" flex-col cursor-pointer">
                                    <h5 class="text-blue-500 font-bold">Add Four Columns</h5>
                                    <div class="flex mt-1">
                                        <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                        <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                        <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                        <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 cursor-pointer hover:border-blue-500">
                                <div class="h-10 w-10 p mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                    <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>
                                    </svg>
                                    <!--                                <div class="h-8 mx-4 mt-1 bg-white "></div>-->
                                </div>
                                <div class=" flex-col cursor-pointer">
                                    <h5 class="text-blue-500 font-bold">Add Five Columns</h5>
                                    <div class="flex mt-1">
                                        <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                        <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                        <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                        <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                        <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex cursor-pointer w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500" @click="showModalRow = true">
                                <div class="h-10 w-10 p mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                    <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>
                                    </svg>
                                    <!--                                <div class="h-8 mx-4 mt-1 bg-white "></div>-->
                                </div>
                                <div class=" flex-col cursor-pointer">
                                    <h5 class="text-blue-500 font-bold">Add Six Columns</h5>
                                    <div class="flex mt-1">
                                        <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                        <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                        <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                        <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                        <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                        <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                    </div>
                                </div>
                            </div>
                        </nits-grid>
                    </div>
                </div>
            </div>


        </div>
    </div>

</template>

<script>
    import {eventBus} from "../../Models/_events";

    export default {
        name: "FormPopupOptions",
        data() {
            return {
                selectColumn: false,
                details: {},
                elements: [],
                isOpen: false,
                row_component:{}
            }
        },
        props: {
            elementData: Object,
            tab_index: String,
            row_index: Number,
            column_index: Number,
            element_index: Number,
            component_name: String,
            element: Object,
        },
        created() {
            console.log(this.element)
        },
        methods:{
            titleFormat(title) {
                return _.startCase(_.toLower(title))
            },
            emitEvent() {
                eventBus.$emit('popup-close')
            },
            fillArray(value, times) {
                var arr = [];
                for (var i = 0; i < times; i++) {
                    arr.push(value);
                }
                return arr;
            },
            addColumn(type) {
                this.selectColumn= false
                let column_element = {
                    component: 'nits-column',
                    attrs: {
                        child_components: []
                    }
                };
                let component = {
                    component: null,
                    attrs: {
                        child_components: []
                    }
                }
                switch(type) {
                    case '1':
                        column_element.attrs = {
                            gap:4,
                            cols:1,
                            child_components: this.fillArray(component, 1)
                        }
                        break;
                    case '1/2 1/2':
                        column_element.attrs = {
                            gap:4,
                            cols:2,
                            child_components: this.fillArray(component, 2)
                        }
                        break;

                    case '1/3 1/3 1/3':
                        column_element.attrs = {
                            gap:4,
                            cols:3,
                            child_components: this.fillArray(component, 3)
                        }
                        break;

                    case '1/4 1/4 1/4 1/4':
                        column_element.attrs = {
                            gap:4,
                            cols:4,
                            child_components: this.fillArray(component, 4)
                        }
                        break;
                    default: column_element.attrs = {gap:4, cols:1, child_components: component};
                        break;
                }

                eventBus.$emit('form-repeater-add-columns', {column: column_element, row_index: this.row_index, column_index: this.column_index, element_index: this.element_index});
            },
        }
    }
</script>

<style scoped>

</style>