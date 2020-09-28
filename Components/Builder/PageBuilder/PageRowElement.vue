<template>
    <div class="">
        <page-column-element v-if="child_components.length" v-for="(column,index) in child_components" :key="'column_index_'+index"  v-bind="column.attrs" :row_index="row_index" :column_index="index"></page-column-element>
        <div v-if="selectColumn" class="w-full flex md:px-16 justify-center md:py-32 bg-gray-100">
            <div class="border w-full flex flex-col border-dashed border-indigo-700 md:py-4">
                <div class="flex md:ml-56 md:px-64">
                    <div @click="selectColumn = false" class="text-gray-600 ml-16  hover:bg-white  mr-3 focus:outline-none active:shadow-none font-bold">
                        <svg @click="widget = true" class="h-4 w-4 my-2 mx-2 font-bold" fill="currentColor" viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M512.001 84.853L427.148 0 256.001 171.147 84.853 0 0 84.853 171.148 256 0 427.148l84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853L340.853 256z"/></svg>
                    </div>
                </div>
                <div class="text-sm mx-auto italic font-medium text-indigo-700">Select Your Structure</div>
                <nits-grid class="px-5 py-5" :cols="3" :gap="2">
                    <div  @click.prevent="addColumn('1',row_index)"  class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 cursor-pointer hover:border-blue-500" >
                        <div class="cursor-pointer">
                            <div class="flex mt-1">
                                <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                            </div>
                        </div>

                    </div>
                    <div @click.prevent="addColumn('1/2 1/2',row_index)" class="flex cursor-pointer w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                        <div class=" flex-col cursor-pointer">
                            <div class="flex mt-1">
                                <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                            </div>
                        </div>
                    </div>
                    <div @click.prevent="addColumn('1/3 1/3 1/3',row_index)" class="flex cursor-pointer w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                        <div class=" flex-col cursor-pointer">
                            <div class="flex mt-1">
                                <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                            </div>
                        </div>
                    </div>
                    <div @click.prevent="addColumn('1/4 1/4 1/4 1/4',row_index)" class="flex cursor-pointer w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                        <div class=" flex-col cursor-pointer">
                            <div class="flex mt-1">
                                <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                            </div>
                        </div>
                    </div>
                    <div @click.prevent="addColumn('1/5 1/5 1/5 1/5 1/5',row_index)" class="flex cursor-pointer w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                        <div class=" flex-col cursor-pointer">
                            <div class="flex mt-1">
                                <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                                <div class="bg-gray-400 h-8 p-2 rounded mx-1"></div>
                            </div>
                        </div>
                    </div>
                    <div @click.prevent="addColumn('1/6 1/6 1/6 1/6 1/6 1/6',row_index)" class="flex cursor-pointer w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                        <div class=" flex-col cursor-pointer">
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
        <div v-if="widget" class="w-full flex md:px-16 justify-center md:py-32 bg-gray-100">
            <div class="border w-full flex flex-col border-dashed border-indigo-700 md:py-10">
                <button @click.prevent="selectColumn = !selectColumn"  class="p-3 mx-auto bg-indigo-600 text-white rounded-full focus:outline-none hover:bg-indigo-400 focus:bg-indigo-700">
                    <svg @click="widget = false"  class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 448 448" xmlns="http://www.w3.org/2000/svg"><path d="M408 184H272a8 8 0 01-8-8V40c0-22.09-17.91-40-40-40s-40 17.91-40 40v136a8 8 0 01-8 8H40c-22.09 0-40 17.91-40 40s17.91 40 40 40h136a8 8 0 018 8v136c0 22.09 17.91 40 40 40s40-17.91 40-40V272a8 8 0 018-8h136c22.09 0 40-17.91 40-40s-17.91-40-40-40zm0 0"/></svg>
                </button>
                <div class="text-sm mx-auto italic mt-5 font-medium text-indigo-700">Add Column</div>
            </div>
        </div>
    </div>

</template>

<script>
    import {eventBus} from 'NitsModels/_events';

    export default {
        name: "PageRowElement",
        props: {
            child_components: Array,
            row_index: Number
        },
        data(){
            return{
                selectColumn: false,
                widget: true,
            }
        },
        methods:{
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
                            gap:8,
                            cols:1,
                            child_components: this.fillArray(component, 1)
                        }
                        break;
                    case '1/2 1/2':
                        column_element.attrs = {
                            gap:8,
                            cols:2,
                            child_components: this.fillArray(component, 2)
                        }
                        break;

                    case '1/3 1/3 1/3':
                        column_element.attrs = {
                            gap:8,
                            cols:3,
                            child_components: this.fillArray(component, 3)
                        }
                        break;

                    case '1/4 1/4 1/4 1/4':
                        column_element.attrs = {
                            gap:8,
                            cols:4,
                            child_components: this.fillArray(component, 4)
                        }
                        break;
                    default: column_element.attrs = {gap:8, cols:1, child_components: component};
                        break;
                }

                eventBus.$emit('page-add-columns', {column: column_element, index: index});
            },
            fillArray(value, times) {
                var arr = [];
                for (var i = 0; i < times; i++) {
                    arr.push(value);
                }
                return arr;
            },
        }
    }
</script>

<style scoped>

</style>