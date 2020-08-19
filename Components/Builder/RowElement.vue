<template>
    <div>
        <div class="w-full pb-10 bg-white" style="min-height: 500px">
            <div class="relative flex flex-row mt-4 pt-4 pl-8 pr-8">
                <div class="bg-gray-300 mr-1 rounded-t h-10 w-12 hover:text-gray-400 text-gray-600">
                    <svg class="h-5 w-5 my-2 mx-3 pt-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 317.215 317.215">
                        <g fill-rule="evenodd">
                            <path d="M309.715 1.107h-71.223a7.5 7.5 0 00-7.5 7.5v20a7.5 7.5 0 007.5 7.5h18.973l-57.129 57.127a7.501 7.501 0 000 10.606l14.143 14.143a7.476 7.476 0 005.304 2.197 7.482 7.482 0 005.304-2.197l57.129-57.127V79.83a7.5 7.5 0 007.5 7.5h20a7.5 7.5 0 007.5-7.5V8.607a7.502 7.502 0 00-7.501-7.5zM59.75 36.107h18.973a7.5 7.5 0 007.5-7.5v-20a7.5 7.5 0 00-7.5-7.5H7.5a7.5 7.5 0 00-7.5 7.5V79.83a7.5 7.5 0 007.5 7.5h20a7.5 7.5 0 007.5-7.5V60.857l57.125 57.126a7.483 7.483 0 005.305 2.197 7.486 7.486 0 005.305-2.197l14.142-14.143a7.5 7.5 0 000-10.606L59.75 36.107zM102.734 199.233a7.503 7.503 0 00-10.609 0L35 256.358v-18.974a7.5 7.5 0 00-7.5-7.5h-20a7.5 7.5 0 00-7.5 7.5v71.223a7.5 7.5 0 007.5 7.5h71.223a7.5 7.5 0 007.5-7.5v-20a7.5 7.5 0 00-7.5-7.5H59.75l57.126-57.125a7.5 7.5 0 000-10.606l-14.142-14.143zM309.715 229.885h-20a7.5 7.5 0 00-7.5 7.5v18.976l-57.13-57.127a7.5 7.5 0 00-10.606 0l-14.143 14.143a7.501 7.501 0 00.001 10.606l57.128 57.125h-18.973a7.5 7.5 0 00-7.5 7.5v20a7.5 7.5 0 007.5 7.5h71.223a7.5 7.5 0 007.5-7.5v-71.223a7.5 7.5 0 00-7.5-7.5z"/>
                        </g>
                    </svg>
                </div>
                <div @click="isOpen2 = ! isOpen2" class="h-10 w-12 text-gray-600 rounded-t hover:text-gray-400 inline-block bg-gray-300 font-bold">
                    <svg class="h-6 w-6 my-2 mx-3 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>
                    </svg>
                </div>

                <div v-if="isOpen2" class="main-modal fixed w-full h-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster" style="background: rgba(0,0,0,.7);">
                    <div class="border border-teal-500 shadow-lg modal-container bg-white w-1/2 mx-20 rounded shadow-lg z-50">
                        <div class="flex bg-blue-600 p-4">
                            <h2 class="text-white text-xl leading-normal font-normal font-sans">Form Settings</h2>
                        </div>
                        <div class="mt-4" style="height: 400px;">
                            <div v-for="(item, index, key) in dataSet.options" class=" px-4 py-5 flex-auto">
                                <component
                                        :is="item.component"
                                        v-bind="item.attrs"
                                        :child_components="item.child_components"
                                        :row_index="row_index"
                                ></component>
                            </div>
                        </div>
                        <div class="flex items-center mt-5 justify-end p-6 border-t border-solid border-gray-300 bg-gray-300 rounded-b">
                            <button @click="isOpen2 = ! isOpen2" class="text-white bg-gray-500 bg-transparent border border-solid border-gray-500 active:bg-gray-500 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease">
                                Close
                            </button>
                        </div>
                    </div>
                </div>

                <div class="flex absolute right-0 mr-8">
                    <div class="bg-gray-300 mr-1 rounded-t h-10 w-12 hover:text-gray-400 text-gray-600">
                        <svg class="h-5 w-5 my-3 mx-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M17.561 2.439c-1.442-1.443-2.525-1.227-2.525-1.227L8.984 7.264 2.21 14.037 1.2 18.799l4.763-1.01 6.774-6.771 6.052-6.052c-.001 0 .216-1.083-1.228-2.527zM5.68 17.217l-1.624.35a3.71 3.71 0 00-.69-.932 3.742 3.742 0 00-.932-.691l.35-1.623.47-.469s.883.018 1.881 1.016c.997.996 1.016 1.881 1.016 1.881l-.471.468z"/>
                        </svg>
                    </div>
                    <div @click="cloneRow()" class="bg-gray-300 mr-1 rounded-t h-10 w-12 hover:text-gray-400 text-gray-600">
                        <svg class="h-5 w-5 my-3 mx-4 font-bold" fill="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 24h-12A2.503 2.503 0 016 21.5v-15C6 5.121 7.122 4 8.5 4h12C21.878 4 23 5.121 23 6.5v15c0 1.379-1.122 2.5-2.5 2.5zM8.5 5C7.673 5 7 5.673 7 6.5v15c0 .827.673 1.5 1.5 1.5h12c.827 0 1.5-.673 1.5-1.5v-15c0-.827-.673-1.5-1.5-1.5z"/><path d="M4.5 21h-1A2.503 2.503 0 011 18.5v-16C1 1.121 2.122 0 3.5 0h12C16.878 0 18 1.121 18 2.5a.5.5 0 01-1 0c0-.827-.673-1.5-1.5-1.5h-12C2.673 1 2 1.673 2 2.5v16c0 .827.673 1.5 1.5 1.5h1a.5.5 0 010 1zM18.5 17h-8a.5.5 0 010-1h8a.5.5 0 010 1zM18.5 21h-8a.5.5 0 010-1h8a.5.5 0 010 1z"/><path d="M18.5 13h-8a.5.5 0 010-1h8a.5.5 0 010 1zM18.5 9h-8a.5.5 0 010-1h8a.5.5 0 010 1z"/></svg>
                    </div>
                    <div @click="delRow()" class="bg-gray-300 rounded-t h-10 w-12 hover:text-gray-400 text-gray-600">
                        <svg class="h-5 w-4 my-3 mx-4 font-bold" fill="currentColor" viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M512.001 84.853L427.148 0 256.001 171.147 84.853 0 0 84.853 171.148 256 0 427.148l84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853L340.853 256z"/></svg>
                    </div>
                </div>
            </div>
            <div>
                <column-element v-if="child_components.length" v-for="(column,index) in child_components" :key="'column_index_'+index"  v-bind="column.attrs" :row_index="row_index" :column_index="index"></column-element>
            </div>
            <div class="h-56 ml-8 mr-8 rounded-b px-5 bg-gray-200 border-black">
                <div class="px-8 py-8">
                    <div class="flex-col">
                        <div class="text-xl mt-10 antialiased font-normal text-center tracking-wider text-gray-500 px-64" v-if="!child_components.length">
                            YOU HAVE EMPTY ELEMENT ADD YOUR FIRST COLUMN
                        </div>
                        <div class="flex mt-10 ml-64 pl-40">
                            <button @click.prevent="selectColumn = !selectColumn" class="text-sm focus:outline-none focus:bg-blue-600 hover:bg-blue-500 rounded bg-red-600 px-10 py-3 font-semibold tracking-normal text-white mr-5">Add Column</button>
                        </div>
                    </div>
                </div>
            </div>
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
                        <div  @click.prevent="addColumn('1', row_index)"  class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 cursor-pointer hover:border-blue-500" >
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
                        <div @click.prevent="addColumn('1/2 1/2', row_index)" class="flex cursor-pointer w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
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
                        <div @click.prevent="addColumn('1/3 1/3 1/3', row_index)" class="flex cursor-pointer w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
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
                        <div @click.prevent="addColumn('1/4 1/4 1/4 1/4', row_index)" class="flex cursor-pointer w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
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
<!--                <div class="flex justify-between border-solid border-t-2 p-2 text-center items-center">-->
<!--                    <button @click="isOpen2 = ! isOpen2" class="ml-5 my-2 bg-transparent border border-gray-500 text-gray-600 font-semibold py-1 px-4 rounded">Close</button>-->
<!--                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
    import ColumnElement from "./ColumnElement";
    import {eventBus} from 'NitsModels/_events';
    export default {
        name: "RowElement",
        components: {ColumnElement},
        data(){
            return{
                selectColumn: false,
                isVisible: false,
                isOpen2: false,
                dataSet: {
                    id: 1,
                    options: {
                        general: {
                            component: 'nits-form-check',
                            attrs: {
                                grid: {
                                    cols: "1",
                                    gap: "6",
                                }
                            },
                            child_components: [
                                {
                                    component: 'nits-input-text',
                                    attrs: {
                                        label:'Form Title',
                                        placeholder: 'Enter title',
                                        model: 'text',
                                        value: ''
                                    }
                                },
                                {
                                    component: 'nits-input-text',
                                    attrs: {
                                        label:'Form SubTitle',
                                        placeholder: 'Enter subtitle',
                                        model: 'text',
                                        value: ''
                                    }
                                },
                                {
                                    component: 'nits-single-dropzone',
                                    attrs: {
                                        label:'Upload image',
                                        model: '',
                                        value: ''
                                    }
                                },
                            ]
                        },
                    }
                },
            }
        },
        props: {
            child_components: Array,
            row_index: Number
        },
        methods:{
            delRow(){
                eventBus.$emit('remove-row',this.row_index );
            },
            cloneRow(){
                eventBus.$emit('clone-row',this.row_index );
            },
            fillArray(value, times) {
                var arr = [];
                for (var i = 0; i < times; i++) {
                    arr.push(value);
                }
                return arr;
            },
            addColumn(type, index) {
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

                eventBus.$emit('add-columns', {column: column_element, index: index});
            }
        },
        computed: {

        }
    }
</script>

<style scoped>

</style>