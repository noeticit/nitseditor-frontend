<template>

    <div class="">

        <div v-if="isOpen2" class="flex justify center">
            <div class="my-auto mx-auto w-1/4 bg-white rounded-md shadow-lg">
                <div class="bg-indigo-600 flex justify-between h-12 rounded-t-md">
                    <div class="my-auto text-sm font-medium text-white px-5">Your Heading</div>
                    <div class="flex px-1">
                        <button class="rounded-full my-auto p-2 bg-indigo-400 text-white hover:bg-gray-400  focus:outline-none">
                            <svg class="h-3 w-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M14.09 2.233C12.95 1.411 11.518 1 9.794 1c-1.311 0-2.418.289-3.317.868C5.05 2.774 4.292 4.313 4.2 6.483h3.307c0-.633.185-1.24.553-1.828.369-.586.995-.879 1.878-.879.898 0 1.517.238 1.854.713.339.477.508 1.004.508 1.582 0 .504-.252.965-.557 1.383a2.88 2.88 0 01-.661.674s-1.793 1.15-2.58 2.074c-.456.535-.497 1.338-.538 2.488-.002.082.029.252.315.252h2.571c.256 0 .309-.189.312-.274.018-.418.064-.633.141-.875.144-.457.538-.855.979-1.199l.91-.627c.822-.641 1.477-1.166 1.767-1.578.494-.676.842-1.51.842-2.5-.001-1.615-.571-2.832-1.711-3.656zM9.741 14.924c-1.139-.035-2.079.754-2.115 1.99-.035 1.234.858 2.051 1.998 2.084 1.189.035 2.104-.727 2.141-1.963.034-1.236-.834-2.076-2.024-2.111z"/></svg>
                        </button>
                        <button @click="isOpen2 = ! isOpen2" class="rounded-full my-auto p-2 bg-indigo-400 text-white mx-3 hover:bg-red-600 focus:outline-none">
                            <svg class="h-3 w-3" fill="currentColor" viewBox="0 0 365.696 365.696" xmlns="http://www.w3.org/2000/svg"><path d="M243.188 182.86L356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"/></svg>
                        </button>
                    </div>
                </div>
                <div class="bg-white h-2 relative cursor-pointer shadow-lg w-full mt-5">
                    <img class="w-full" src="/nits-assets/images/page_shape.png" alt=""/>
                    <div class="custom-shape-divider-top">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path :d="svg" class="shape-fill"></path>
                        </svg>
                    </div>
                </div>
                <div class="px-5">
                    <div class="my-auto mt-48 text-md font-medium px-2">Select Your Shape</div>
                    <div v-for="(item,index) in shapes" :class="item.style" class="h-10 relative cursor-pointer shadow-lg w-full">
                        <div @mouseover="active = index" class="custom-shape-divider-top">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path :d="item.svg" class="shape-fill"></path>
                            </svg>
                        </div>
                    </div>

                </div>
                <div class="bg-white py-5 border-t border-gray-200 rounded-b-md flex mt-4">
                    <button class="bg-indigo-500 rounded-full text-sm text-white font-medium mx-auto px-8 py-2">Apply</button>
                </div>
            </div>
        </div>

        <div v-if="isOpen3" class="flex justify center">
            <div class="my-auto mx-auto w-1/4 bg-white rounded-md shadow-lg">
                <div class="bg-indigo-600 flex justify-between h-12 rounded-t-md">
                    <div class="my-auto text-sm font-medium text-white px-5">Your Heading</div>
                    <div class="flex px-1">
                        <button class="rounded-full my-auto p-2 bg-indigo-400 text-white hover:bg-gray-400  focus:outline-none">
                            <svg class="h-3 w-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M14.09 2.233C12.95 1.411 11.518 1 9.794 1c-1.311 0-2.418.289-3.317.868C5.05 2.774 4.292 4.313 4.2 6.483h3.307c0-.633.185-1.24.553-1.828.369-.586.995-.879 1.878-.879.898 0 1.517.238 1.854.713.339.477.508 1.004.508 1.582 0 .504-.252.965-.557 1.383a2.88 2.88 0 01-.661.674s-1.793 1.15-2.58 2.074c-.456.535-.497 1.338-.538 2.488-.002.082.029.252.315.252h2.571c.256 0 .309-.189.312-.274.018-.418.064-.633.141-.875.144-.457.538-.855.979-1.199l.91-.627c.822-.641 1.477-1.166 1.767-1.578.494-.676.842-1.51.842-2.5-.001-1.615-.571-2.832-1.711-3.656zM9.741 14.924c-1.139-.035-2.079.754-2.115 1.99-.035 1.234.858 2.051 1.998 2.084 1.189.035 2.104-.727 2.141-1.963.034-1.236-.834-2.076-2.024-2.111z"/></svg>
                        </button>
                        <button @click="isOpen3 = ! isOpen3" class="rounded-full my-auto p-2 bg-indigo-400 text-white mx-3 hover:bg-red-600 focus:outline-none">
                            <svg class="h-3 w-3" fill="currentColor" viewBox="0 0 365.696 365.696" xmlns="http://www.w3.org/2000/svg"><path d="M243.188 182.86L356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"/></svg>
                        </button>
                    </div>
                </div>
                <div class="px-5">
                    <div class="my-auto text-sm mt-4 font-medium px-2">Choose your Background Color</div>
                    <div class="bg-white relative cursor-pointer px-2 w-full mt-4">
                        <v-swatches
                                v-model="color"
                                popover-x="left"
                                swatches="text-advanced"
                                inline
                        ></v-swatches>
                    </div>
                </div>
                <div class="bg-white py-5 border-t border-gray-200 rounded-b-md flex mt-4">
                    <button class="bg-indigo-500 rounded-full text-sm text-white font-medium mx-auto px-8 py-2">Apply</button>
                </div>
            </div>
        </div>

        <div v-if="isOpen4" class="flex justify center">
            <div class="my-auto mx-auto w-1/4 bg-white rounded-md shadow-lg">
                <div class="bg-indigo-600 flex justify-between h-12 rounded-t-md">
                    <div class="my-auto text-sm font-medium text-white px-5">Your Heading</div>
                    <div class="flex px-1">
                        <button class="rounded-full my-auto p-2 bg-indigo-400 text-white hover:bg-gray-400  focus:outline-none">
                            <svg class="h-3 w-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M14.09 2.233C12.95 1.411 11.518 1 9.794 1c-1.311 0-2.418.289-3.317.868C5.05 2.774 4.292 4.313 4.2 6.483h3.307c0-.633.185-1.24.553-1.828.369-.586.995-.879 1.878-.879.898 0 1.517.238 1.854.713.339.477.508 1.004.508 1.582 0 .504-.252.965-.557 1.383a2.88 2.88 0 01-.661.674s-1.793 1.15-2.58 2.074c-.456.535-.497 1.338-.538 2.488-.002.082.029.252.315.252h2.571c.256 0 .309-.189.312-.274.018-.418.064-.633.141-.875.144-.457.538-.855.979-1.199l.91-.627c.822-.641 1.477-1.166 1.767-1.578.494-.676.842-1.51.842-2.5-.001-1.615-.571-2.832-1.711-3.656zM9.741 14.924c-1.139-.035-2.079.754-2.115 1.99-.035 1.234.858 2.051 1.998 2.084 1.189.035 2.104-.727 2.141-1.963.034-1.236-.834-2.076-2.024-2.111z"/></svg>
                        </button>
                        <button @click="isOpen4 = ! isOpen4" class="rounded-full my-auto p-2 bg-indigo-400 text-white mx-3 hover:bg-red-600 focus:outline-none">
                            <svg class="h-3 w-3" fill="currentColor" viewBox="0 0 365.696 365.696" xmlns="http://www.w3.org/2000/svg"><path d="M243.188 182.86L356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"/></svg>
                        </button>
                    </div>
                </div>
                <div class="px-5">
                    <div class="my-auto text-sm mt-4 font-medium px-2">Upload Your Image</div>
                    <div class="bg-white relative cursor-pointer px-2 w-full mt-4">
                        <nits-single-dropzone
                                placeholder="Select JPG/PNG Format"
                        ></nits-single-dropzone>
                    </div>
                </div>
                <div class="bg-white py-5 border-t border-gray-200 rounded-b-md flex mt-4">
                    <button class="bg-indigo-500 rounded-full text-sm text-white font-medium mx-auto px-8 py-2">Apply</button>
                </div>
            </div>
        </div>

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
    import VSwatches from 'vue-swatches'

    export default {
        name: "PageColumnElement",
        components:{VSwatches},
        data(){
            return{
                loading: false,
                isVisible: false,
                isOpen2: false,
                isOpen3: false,
                isOpen4: false,
                color: '#1CA085',
                shapes:[
                    {id : 1 , style: 'bg-red-500 mt-4 ', svg: 'M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z'},
                    {id : 2 , style: 'bg-indigo-400 mt-4 ', svg: 'M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'},
                    {id : 3 , style: 'bg-teal-500 mt-4 ', svg: 'M1200 0L0 0 598.97 114.72 1200 0z'},
                    {id : 4 , style: 'bg-orange-500 mt-4 ', svg: 'M1200 120L0 16.48 0 0 1200 0 1200 120z'},
                    {id : 5 , style: 'bg-green-500 mt-4 ', svg: 'M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z'},
                    // {id : 6 , style: 'bg-gray-800  mt-4 ', svg: 'M1200 0L0 0 892.25 114.72 1200 0z'},
                    // {id : 7 , style: 'bg-yellow-500  mt-4 ', svg: 'M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z'},
                    // {id : 8 , style: 'bg-pink-400  mt-4 ', svg: 'M649.97 0L550.03 0 599.91 54.12 649.97 0z'},
                ],
                active: 0,
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
                if(data.field === 'background')
                {
                    this.isOpen2 = false;
                    this.isOpen3 = false;
                    this.isOpen4 = false;

                    switch(data.value) {
                        case 'color': this.isOpen3 = true;
                            break;
                        case 'shape': this.isOpen2 = true;
                            break;
                        case 'image': this.isOpen4 = true;
                            break;

                        default: '';
                    }
                }
            })
        },
        computed: {
            svg() {
                return this.shapes[this.active].svg;
            }
        }

    }
</script>

<style scoped>

    .custom-shape-divider-top {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        line-height: 0;
    }

    .custom-shape-divider-top svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: auto;
    }

    .custom-shape-divider-top .shape-fill {
        fill: white;
    }

</style>