<template>
    <div class="">
        <div @mouseover="isVisible5 = true" @mouseleave="isVisible5 = false" @keydown.enter="isVisible5 = !isVisible5" class="border relative border-white border-dashed hover:border-gray-800 py-4 px-4">
            <div class="flex border border-dashed border-blue-500 w-full p-2">
                <div class="max-w-md my-auto top-0 bottom-0 right-0 left-0 mx-auto">
                    <draggable
                            class="dragArea list-group"
                            :list="list2"
                            group="sorting"
                            @change="log"
                    >

                        <div v-for="element in list2" :key="element.name" class="flex flex-col rounded-lg p-3 m-1 text-gray-700 hover:text-indigo-700">
                            <div @click.prevent="openSettings()" >
                                <svg class="h-8 w-8 mx-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 74" ><path d="M50.86 72H23.531a2.307 2.307 0 01-1.138-4.315l6.879-3.9a4.236 4.236 0 002.145-3.68V14.858H13.852a1.61 1.61 0 00-1.466.962 1.092 1.092 0 01-.069.129l-3.886 6.126A3.377 3.377 0 012 20.63v-12A6.261 6.261 0 018.242 2.4H65.77A6.237 6.237 0 0172 8.628v12a3.378 3.378 0 01-6.432 1.444l-3.886-6.125a1.067 1.067 0 01-.069-.13 1.609 1.609 0 00-1.466-.961h-16.27v45.4a4.207 4.207 0 001.985 3.586l6.222 3.892A2.307 2.307 0 0150.86 72zM13.852 12.858h18.565a1 1 0 011 1v46.25a6.241 6.241 0 01-3.158 5.42l-6.879 3.9a.307.307 0 00.151.575H50.86a.282.282 0 00.3-.223.287.287 0 00-.133-.346L44.8 65.54a6.2 6.2 0 01-2.925-5.281v-46.4a1 1 0 011-1h17.272a3.61 3.61 0 013.261 2.077l3.887 6.127a1.094 1.094 0 01.071.134 1.367 1.367 0 001.254.814A1.381 1.381 0 0070 20.63v-12a4.235 4.235 0 00-4.23-4.23H8.242A4.256 4.256 0 004 8.632v12a1.377 1.377 0 002.635.564 1.112 1.112 0 01.07-.133l3.886-6.127a3.612 3.612 0 013.261-2.078z"/></svg>
                                <div class="text-sm  font-medium leading-6 text-center mt-3">{{element.name}}</div>
                            </div>
                        </div>

                    </draggable>

                    <button @click.prevent="showElements" v-if="!list2.length" class="p-2 mb-4 mx-auto bg-indigo-600 text-white rounded-full focus:outline-none hover:bg-indigo-400 focus:bg-indigo-700">
                        <svg  class="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 448 448" xmlns="http://www.w3.org/2000/svg"><path d="M408 184H272a8 8 0 01-8-8V40c0-22.09-17.91-40-40-40s-40 17.91-40 40v136a8 8 0 01-8 8H40c-22.09 0-40 17.91-40 40s17.91 40 40 40h136a8 8 0 018 8v136c0 22.09 17.91 40 40 40s40-17.91 40-40V272a8 8 0 018-8h136c22.09 0 40-17.91 40-40s-17.91-40-40-40zm0 0"/></svg>
                    </button>

                </div>
            </div>
            <div v-show="isVisible5" class="bg-gray-200 p-1 absolute top-0 left-0">
                <a @click.prevent="openColumnSettings" href="#"><svg  class="h-4 w-4 mx-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M17.561 2.439c-1.442-1.443-2.525-1.227-2.525-1.227L8.984 7.264 2.21 14.037 1.2 18.799l4.763-1.01 6.774-6.771 6.052-6.052c-.001 0 .216-1.083-1.228-2.527zM5.68 17.217l-1.624.35a3.71 3.71 0 00-.69-.932 3.742 3.742 0 00-.932-.691l.35-1.623.47-.469s.883.018 1.881 1.016c.997.996 1.016 1.881 1.016 1.881l-.471.468z"/></svg></a>
            </div>
        </div>
    </div>

</template>

<script>
    import {eventBus} from 'NitsModels/_events';
    import {components_config} from "NitsModels/_elements_config";

    export default {
        name: "BuilderElement",
        data(){
            return{
                isVisible5: false,
                isVisible: false,
                addedRow: false,
                hideButton: true,
                list2: [],
                components: components_config,

            }
        },
        props: {
            element: Object,
            child_components: Array,
            component: String,
            row_index: Number,
            column_index: Number,
            element_index: Number,
            attrs: Object
        },
        created() {

        },
        methods:{
            openSettings(){
                const data = {
                    elementData : this.elementData,
                    tab_index: "general",
                    row_index: this.row_index,
                    column_index: this.column_index,
                    element_index: this.element_index,
                    element: this.element,
                    component_name: this.elementData.component_name,
                }
                console.log(data)
                eventBus.$emit('page-element-settings',data);

            },
            openColumnSettings(){
                console.log('column element')
                const data = {
                    tab_index: "layout",
                    row_index: this.row_index,
                    column_index: this.column_index,
                }
                eventBus.$emit('page-column-settings',data);
            },
            showElements(){
                eventBus.$emit('page-show-elements');
            },
            log: function(evt) {
                let component_element = {
                    component: evt.added.element.component_name,
                    attrs: {
                        child_components: [
                        ]
                    },
                }
                eventBus.$emit('page-add-component', {component: component_element, row_index: this.row_index, column_index: this.column_index, element_index: this.element_index});
            },

        },
        computed:{
            elementData() {
                let index = _.findIndex(this.components, (a) => { return this.component === a.component_name})
                if(index > -1)
                    return this.components[index];
                else
                    return {}
            },
        }
    }
</script>

<style scoped>

</style>