<template>
    <dashboard-layout-one active="form">
        <base-bread-crumb-one name="Add Form" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>
        <div class="m-2 overflow-y-auto h-screen w-full">
            <div class="bg-white mb-48 mt-5 mr-4 min-h-full justify-center">
                <div class="relative px-5 bg-gray-200 mt-10 mb-32 h-screen mb-10">
                    <div class="">
                        <div class="grid grid-cols-5 gap-4 mb-8">
                            <div class="col-span-4">
                                <input class="w-full focus:outline-none border border-gray-700 h-8 px-8 rounded" v-model="form_title" placeholder="Enter Title" type="text" >
                            </div>
                            <div class="col-span-1 ">
                                <button class="text-sm focus:outline-none focus:bg-blue-600 hover:bg-blue-500 rounded bg-blue-600 px-6 py-2 font-semibold tracking-normal text-white" @click.prevent="submit">Submit</button>
                                <button class="text-sm focus:outline-none focus:bg-teal-400 hover:bg-teal-400 rounded bg-teal-400 px-6 py-2 font-semibold tracking-normal text-white">Cancel</button>
                            </div>

                        </div>
                        <div class="flex-col w-full justify-center">
                            <div class="h-full bg-white text-center items-center">
                                <div class="flex bg-blue-500 justify-between w-full">
                                    <div class=" text-lg font-bold">
                                        <div class="flex float-right">
                                            <div @click.prevent="addRowField" class="inline-block cursor-pointer hover:bg-blue-600 font-bold text-white">
                                                <svg class="h-6 w-6 my-5 mx-5 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <title id="simpleicons-github-icon">Add Element</title>
                                                    <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>
                                                </svg>
                                            </div>
                                            <div class="inline-block hover:bg-blue-600 cursor-pointer text-white">
                                                <svg class="h-6 w-6 my-5 mx-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <title id="simpleicons-github-icon">Templates</title>
                                                    <path fill-rule="evenodd"  d="M18 2H2C.9 2 0 2.9 0 4v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM4.5 3.75a.75.75 0 110 1.5.75.75 0 010-1.5zm-2.75.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM18 16H2V7h16v9zm0-11H6V4h12.019L18 5z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex">
                                        <div class="hover:bg-blue-600 text-white">
                                            <svg class="h-6 w-6 my-5 mx-5 " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <title id="simpleicons-github-icon">Undo</title>
                                                <path fill-rule="evenodd" d="M.685 10h2.372v-.205c.108-4.434 3.724-7.996 8.169-7.996 4.515 0 8.174 3.672 8.174 8.201s-3.659 8.199-8.174 8.199a8.13 8.13 0 01-5.033-1.738l1.406-1.504a6.099 6.099 0 003.627 1.193c3.386 0 6.131-2.754 6.131-6.15s-2.745-6.15-6.131-6.15c-3.317 0-6.018 2.643-6.125 5.945V10h2.672l-3.494 3.894L.685 10z"/>
                                            </svg>
                                        </div>
                                        <div class="hover:bg-blue-600 text-white">
                                            <svg class="h-6 w-6  my-5 mx-5 " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <title id="simpleicons-github-icon">Redo</title>
                                                <path fill-rule="evenodd" d="M19.315 10h-2.372v-.205c-.108-4.434-3.724-7.996-8.169-7.996C4.259 1.799.6 5.471.6 10s3.659 8.199 8.174 8.199a8.13 8.13 0 005.033-1.738l-1.406-1.504a6.099 6.099 0 01-3.627 1.193c-3.386 0-6.131-2.754-6.131-6.15s2.745-6.15 6.131-6.15c3.317 0 6.018 2.643 6.125 5.945V10h-2.672l3.494 3.894L19.315 10z"/>
                                            </svg>
                                        </div>
                                        <div class="hover:bg-blue-600 text-white">
                                            <svg class="h-5 w-5 my-5 mx-5 pt-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 317.215 317.215">
                                                <title id="simpleicons-github-icon">Full Screen</title>
                                                <g fill-rule="evenodd">

                                                    <path d="M309.715 1.107h-71.223a7.5 7.5 0 00-7.5 7.5v20a7.5 7.5 0 007.5 7.5h18.973l-57.129 57.127a7.501 7.501 0 000 10.606l14.143 14.143a7.476 7.476 0 005.304 2.197 7.482 7.482 0 005.304-2.197l57.129-57.127V79.83a7.5 7.5 0 007.5 7.5h20a7.5 7.5 0 007.5-7.5V8.607a7.502 7.502 0 00-7.501-7.5zM59.75 36.107h18.973a7.5 7.5 0 007.5-7.5v-20a7.5 7.5 0 00-7.5-7.5H7.5a7.5 7.5 0 00-7.5 7.5V79.83a7.5 7.5 0 007.5 7.5h20a7.5 7.5 0 007.5-7.5V60.857l57.125 57.126a7.483 7.483 0 005.305 2.197 7.486 7.486 0 005.305-2.197l14.142-14.143a7.5 7.5 0 000-10.606L59.75 36.107zM102.734 199.233a7.503 7.503 0 00-10.609 0L35 256.358v-18.974a7.5 7.5 0 00-7.5-7.5h-20a7.5 7.5 0 00-7.5 7.5v71.223a7.5 7.5 0 007.5 7.5h71.223a7.5 7.5 0 007.5-7.5v-20a7.5 7.5 0 00-7.5-7.5H59.75l57.126-57.125a7.5 7.5 0 000-10.606l-14.142-14.143zM309.715 229.885h-20a7.5 7.5 0 00-7.5 7.5v18.976l-57.13-57.127a7.5 7.5 0 00-10.606 0l-14.143 14.143a7.501 7.501 0 00.001 10.606l57.128 57.125h-18.973a7.5 7.5 0 00-7.5 7.5v20a7.5 7.5 0 007.5 7.5h71.223a7.5 7.5 0 007.5-7.5v-71.223a7.5 7.5 0 00-7.5-7.5z"/>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="hover:bg-blue-600 text-white">
                                            <svg @click="isOpen2 = ! isOpen2" class="h-6 w-6  my-5 mx-5 " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <title id="simpleicons-github-icon">Setting</title>
                                                <path fill-rule="evenodd" d="M16.783 10c0-1.049.646-1.875 1.617-2.443a8.932 8.932 0 00-.692-1.672c-1.089.285-1.97-.141-2.711-.883-.741-.74-.968-1.621-.683-2.711a8.732 8.732 0 00-1.672-.691c-.568.97-1.595 1.615-2.642 1.615-1.048 0-2.074-.645-2.643-1.615a8.697 8.697 0 00-1.671.691c.285 1.09.059 1.971-.684 2.711-.74.742-1.621 1.168-2.711.883A8.797 8.797 0 001.6 7.557c.97.568 1.615 1.394 1.615 2.443 0 1.047-.645 2.074-1.615 2.643a8.89 8.89 0 00.691 1.672c1.09-.285 1.971-.059 2.711.682.741.742.969 1.623.684 2.711a8.841 8.841 0 001.672.693c.568-.973 1.595-1.617 2.643-1.617 1.047 0 2.074.645 2.643 1.617a8.963 8.963 0 001.672-.693c-.285-1.088-.059-1.969.683-2.711.741-.74 1.622-1.166 2.711-.883a8.811 8.811 0 00.692-1.672c-.973-.569-1.619-1.395-1.619-2.442zM10 13.652a3.652 3.652 0 110-7.306 3.653 3.653 0 010 7.306z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <row-element v-if="elements.length" v-for="(row, index) in elements" :key="'row_index_'+index" v-bind="row.attrs" :row_index="index"></row-element>
                                <div class="px-16 py-12">
                                    <div class="flex-col">
                                        <div class="ml-64 pl-64" v-if="!elements.length">
                                            <svg class="h-12 w-12 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M19.025 3.587c-4.356 2.556-4.044 7.806-7.096 10.175-2.297 1.783-5.538.88-7.412.113 0 0-1.27 1.603-2.181 3.74-.305.717-1.644-.073-1.409-.68C3.905 9.25 14.037 5.416 14.037 5.416s-7.149-.303-11.927 5.94c-.128-1.426-.34-5.284 3.36-7.65 5.016-3.211 14.572-.715 13.555-.119z"/>
                                            </svg>
                                        </div>
                                        <div class="text-xl mt-10 antialiased font-normal text-center tracking-wider text-gray-500 px-64" v-if="!elements.length">
                                            YOU HAVE BLANK PAGE START ADDING ROW OR CONFIGURING TEMPLATES
                                        </div>
                                        <div class="flex mt-10 ml-64 pl-24">
                                            <button @click.prevent="addRowField" class="text-sm focus:outline-none focus:bg-blue-600 hover:bg-blue-500 rounded bg-blue-600 px-10 py-3 font-semibold tracking-normal text-white mr-5">Add Row</button>
                                            <button class="text-sm focus:outline-none focus:bg-blue-600 hover:bg-blue-500 rounded bg-blue-600 px-6 py-3 font-semibold tracking-normal text-white mr-5">Configure Template</button>
                                        </div>
                                        <div class="italic mb-10 text-xs mt-10 antialiased text-center tracking-normal text-gray-500 px-64" v-if="!elements.length">
                                            Don't know where to start? <a href="#" class="text-gray-600 hover:text-blue-500">Visit our knowledge base.</a>
                                        </div>
                                    </div>
                                </div>

                                <div v-if="isOpen2" class="main-modal fixed w-full h-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster" style="background: rgba(0,0,0,.7);">
                                    <div class="border border-teal-500 shadow-lg modal-container bg-white w-1/2 mx-20 rounded shadow-lg z-50">
                                        <div class="flex bg-blue-600 p-4">
                                            <h2 class="text-white text-xl leading-normal font-normal font-sans">Settings</h2>
                                        </div>
                                        <div class="mt-4" style="height: 400px;">
                                            <div class="grid grid-cols-2 gap-4 p-2 m-2">
                                                <component v-for="(item, index) in form" :key="index" :is="item.component" v-bind="item.attrs" v-model="item.attrs.value"></component>
                                            </div>
                                        </div>
                                        <div class="flex items-center mt-5 justify-end p-6 border-t border-solid border-gray-300 bg-gray-300 rounded-b">
                                            <button @click="isOpen2 = ! isOpen2" class="text-white bg-gray-500 bg-transparent border border-solid border-gray-500 active:bg-gray-500 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease">
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </dashboard-layout-one>
</template>

<script>
    import RowElement from "../../Components/Builder/RowElement";
    import {eventBus} from "NitsModels/_events";
    import Swal from 'sweetalert2';

    export default {
        name: "edit",
        data(){
            return{
                breadcrumbs: ['Form', 'Add'],
                elements: [],
                isOpen2: false,
                grid: {
                    cols: "1",
                    gap: "6",
                },
                form: [
                    {
                        component:"nits-input-text",
                        attrs:{
                            child_components: [],
                            label: "API URL",
                            placeholder: "Enter api url",
                            type: "text",
                            model: "form_api_url",
                            value: ''
                        }
                    },
                    {
                        component:"nits-input-text",
                        attrs:{
                            child_components: [],
                            label: "Redirect URL",
                            placeholder: "Enter redirect url",
                            type: "text",
                            model: "form_redirect_url",
                            value: ''
                        }
                    },
                    {
                        component:"nits-input-text",
                        attrs:{
                            child_components: [],
                            label: "Back URL",
                            placeholder: "Enter back url",
                            type: "text",
                            model: "form_cancel_or_back_url",
                            value: ''
                        }
                    },
                    {
                        component:"nits-input-text",
                        attrs:{
                            child_components: [],
                            label: "Enter Model name",
                            placeholder: "Enter name",
                            type: "text",
                            model: "form_model_name",
                            value: ''
                        }
                    },
                ],
                form_title: '',
                form_template_id: ''
            }
        },
        created() {
            this.listenToEvents();
        },
        components: {
            RowElement,
            'DashboardLayoutOne': () => import('./../../Layouts/Dashboard/LayoutOne'),
        },
        methods:{
            addRowField() {
                const row_element = {
                    component: 'nits-row',
                    title:'',
                    sub_title:'',
                    icon:'',
                    attrs: {
                        child_components: [

                        ]
                    }
                }
                this.elements.push(row_element)
            },
            listenToEvents() {
                eventBus.$on('add-columns', (data) => {
                    if(typeof this.elements[data.index] !== 'undefined')
                        this.elements[data.index].attrs.child_components.push(data.column)
                });

                eventBus.$on('form-repeater-add-columns', (data) => {
                    if(typeof this.elements[data.element_index] !== 'undefined')
                        this.elements[data.row_index].attrs.child_components[data.column_index].attrs.child_components[data.element_index].attrs.child_components.push(data.column)
                });

                eventBus.$on('remove-row', (index) => {
                    this.elements.splice(index, 1)
                })

                eventBus.$on('clone-row', (index) => {
                    let element = this.elements[index];
                    this.elements.splice(index, 0, element)
                })

                eventBus.$on('remove-row-column', (data) => {
                    this.elements[data.row].attrs.child_components[data.column].splice(data.element,1)
                })

                eventBus.$on('remove-row-element', (data) => {
                    this.elements[data.row].attrs.child_components.splice(data.column,1)
                })

                eventBus.$on('clone-row-column', (data) => {
                    let element =  this.elements[data.row].attrs.child_components[data.column];
                    this.elements[data.row].attrs.child_components.splice(data.column, 0, element)
                })

                eventBus.$on('add-component', (data) => {
                    console.log('add comp')
                    this.elements[data.row_index].attrs.child_components[data.column_index].attrs.child_components.splice(data.element_index, 1, data.component);
                });

                eventBus.$on('form-repeater-add-component', (data) => {
                    console.log('form rep')
                    this.elements[data.row_index].attrs.child_components[data.form_column_index].attrs.child_components[data.form_element_index].attrs.child_components[data.column_index].attrs.child_components.splice(data.element_index, 1, data.component);
                });

                eventBus.$on('individual-element-attributes', (data) => {
                    let attributes = this.elements[data.row_index].attrs.child_components[data.column_index].attrs.child_components[data.element_index].attrs;
                    attributes[data.field] = data.value
                    this.elements[data.row_index].attrs.child_components[data.column_index].attrs.child_components[data.element_index].attrs = attributes;
                })

                eventBus.$on('form-repeater-individual-element-attributes', (data) => {
                    console.log(data)
                    let attributes = this.elements[data.row_index].attrs.child_components[data.form_column_index].attrs.child_components[data.form_element_index].attrs.child_components[data.column_index].attrs.child_components[data.element_index].attrs;
                    attributes[data.field] = data.value
                    this.elements[data.row_index].attrs.child_components[data.form_column_index].attrs.child_components[data.form_element_index].attrs.child_components[data.column_index].attrs.child_components[data.element_index].attrs = attributes;
                })

                eventBus.$on('form-repeater-add-column', (data) => {
                   this.elements[data.row_index].attrs.child_components[data.column_index].attrs.child_components[data.element_index].attrs.child_components.push(data.component);
                })
            },
            submit() {
                const post_data = {}
                _.forEach(this.form, (a) => {
                    console.log(a);
                    post_data[a.attrs.model] = a.attrs.value
                })
                console.log(post_data)
                post_data['form_title'] = this.form_title;
                post_data['form_template_id'] = this.form_template_id;
                post_data['form_data'] = JSON.stringify(this.elements);

                this.$api.post('/nits-system-api/form', post_data).then(response => {
                    if(response.status === 200) {
                        Swal.fire(
                            'Created!',
                            'Your data has been created.',
                            'success'
                        ).then(() => {
                            this.$router.push('/nits-admin/form')
                        })
                    }
                })
                    .catch((error) => {
                        Swal.fire({
                            title: "Oops!",
                            text: error.response.data.message,
                            type: "error",
                        })
                        this.error = error.response.data.errors;
                    })
            }
        },
    }
</script>

<style scoped>



</style>