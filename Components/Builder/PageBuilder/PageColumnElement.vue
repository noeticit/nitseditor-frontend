<template>
    <div class="">
        <div class="w-full flex md:px-16 justify-center md:py-12">
            <div @mouseover="isVisible = true" @mouseleave="isVisible = false" @keydown.enter="isVisible = !isVisible" class="border relative w-full flex flex-col border border-4 border-white border-dashed hover:border-blue-500 md:py-12">
                <div :class="'px-8 grid '+ (cols ? 'grid-cols-'+cols + ' ' : ' ')  + (gap ? 'gap-'+gap + ' ' : ' ')">
                    <page-builder-element
                            v-if="!loading"
                            v-for="(item,index) in child_components"
                            :key="'element_index_'+index"
                            v-bind="item.attrs"
                            :attrs="item.attrs"
                            :component="item.component"
                            :row_index="row_index"
                            :column_index="column_index"
                            :element_index="index"
                            :element="item"
                    >
                    </page-builder-element>
                </div>
                <div  @click.prevent="delRow()" v-show="isVisible" class="bg-gray-200 p-1 absolute top-0 right-0">
                    <a href="#"><svg class="h-6 w-6 mx-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M14.348 14.849a1.2 1.2 0 01-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 11-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 111.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 111.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 010 1.698z"/></svg></a>
                </div>
                <div v-show="isVisible" class="bg-gray-200 p-2 absolute top-0 mr-8 right-0">
                    <a @click.prevent="editRow"  href="#"><svg  class="h-4 w-4 mx-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M17.561 2.439c-1.442-1.443-2.525-1.227-2.525-1.227L8.984 7.264 2.21 14.037 1.2 18.799l4.763-1.01 6.774-6.771 6.052-6.052c-.001 0 .216-1.083-1.228-2.527zM5.68 17.217l-1.624.35a3.71 3.71 0 00-.69-.932 3.742 3.742 0 00-.932-.691l.35-1.623.47-.469s.883.018 1.881 1.016c.997.996 1.016 1.881 1.016 1.881l-.471.468z"/></svg></a>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import {eventBus} from 'NitsModels/_events';

    export default {
        name: "PageColumnElement",
        data(){
            return{
                loading: false,
                isVisible: false,
            }
        },
        props: {
            cols: Number,
            gap: Number,
            row_index: Number,
            column_index: Number,
            child_components: Array
        },
        methods: {
            editRow() {
                const data = {
                    tab_index: "general",
                    row_index: this.row_index,
                    column_index: this.column_index,
                    element_index: this.row_index,
                    component_name: 'nits-row',
                    element:{
                        attrs:{
                            child_components:[]
                        },
                        component: 'nits-row'
                    },
                    elementData:{
                        name:'Row',
                        component_name: 'nits-row',
                        accordion: 'General Elements',
                        options: {
                            general: {
                                component: 'nits-form-page-builder',
                                attrs: {
                                    grid: {
                                        cols: 1,
                                        gap: 4,
                                    }
                                },
                                child_components: [
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Gap',
                                            placeholder: 'Enter Gap',
                                            model: 'gap',
                                            value: ''
                                        }
                                    }
                                ]
                            },
                            style: {
                                component: 'nits-form-page-builder',
                                attrs: {
                                    grid: {
                                        cols: 1,
                                        gap: 4,
                                    }
                                },
                                child_components: [
                                    {
                                        component: 'nits-input-select',
                                        attrs: {
                                            label:'Select Your Background',
                                            placeholder: 'Select one',
                                            options: [
                                                {label: 'Colour', value: 'color'},
                                                {label: 'Shape', value: 'shape'},
                                                {label: 'Image', value: 'image'},
                                            ],
                                            model: 'background',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-button',
                                        attrs: {
                                            text:'Edit',
                                            model: 'text',
                                            value: ''
                                        }
                                    }
                                ]
                            },
                            advanced: {}
                        }
                    }
                }
                eventBus.$emit('page-element-settings',data);
            },
            delRow(){
                eventBus.$emit('page-remove-row', this.row_index );
                eventBus.$emit('page-show-elements');
            },
            emitEvent(){
                eventBus.$emit('page-show-elements');
            }
        },
        created() {
            eventBus.$on('page-individual-element-attributes', (data) => {
                console.log(data);
            })
        }

    }
</script>

<style scoped>

</style>