<template>
    <div class="w-full">
        <div class="flex">
            <div class="w-1/5 h-screen overflow-y-auto">
                <div class="flex py-2 justify-between px-4 bg-indigo-600">
                    <svg class="h-6 w-6 my-auto text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1z"/></svg>
                    <div class="text-sm font-medium text-white leading-6 my-auto">NitsEditor</div>
                    <svg class="h-6 w-6 my-auto text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8 4H5a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V5a1 1 0 00-1-1zm7 0h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V5a1 1 0 00-1-1zm-7 7H5a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1zm7 0h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1z"/></svg>
                </div>
                <div class="bg-gray-200 pb-6">
                    <div class="border-b-2 py-2 bg-gray-100 shadow flex border-indigo-600 justify-center text-gray-700 text-base font-medium ">
                        Our Elements
                    </div>
                    <div class="relative px-2 my-3">
                        <input type="search" class="bg-white px-3 text-xs py-2 w-full rounded border focus:outline-none focus:border-indigo-600" placeholder="Search elements...">
                    </div>

                    <form-elements v-if="showElements"></form-elements>
<!--                    <element-settings v-else-if-="elementSettings"></element-settings>-->

                </div>
            </div>
            <div class="w-4/5">
                <div class="h-12 flex pl-3 justify-between bg-gray-100 w-full">
                    <div class="my-auto flex text-gray-700 ">
                        <svg class="h-5 w-5 my-auto mx-3 cursor-pointer hover:text-indigo-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M14.004 0H5.996A1.996 1.996 0 004 1.996v16.007C4 19.106 4.894 20 5.996 20h8.007A1.997 1.997 0 0016 18.004V1.996A1.996 1.996 0 0014.004 0zM10 19c-.69 0-1.25-.447-1.25-1s.56-1 1.25-1 1.25.447 1.25 1-.56 1-1.25 1zm4-3H6V2h8v14z"/></svg>
                        <svg class="h-5 w-5 my-auto mx-3 cursor-pointer hover:text-indigo-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16 0H4C2.9 0 2 .899 2 2v16c0 1.1.9 2 2 2h12c1.101 0 2-.9 2-2V2c0-1.101-.899-2-2-2zm-6 19c-.69 0-1.25-.447-1.25-1s.56-1 1.25-1c.689 0 1.25.447 1.25 1s-.561 1-1.25 1zm6-3H4V2h12v14z"/></svg>
                        <svg class="h-5 w-5 my-auto mx-3 cursor-pointer hover:text-indigo-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M19.754 15.631L18 13V4c0-1.102-.9-2-2-2H4c-1.101 0-2 .898-2 2v9L.246 15.631C0 16 0 16.213 0 16.5v.5c0 .5.5 1 .999 1h18.002c.499 0 .999-.5.999-1v-.5c0-.287 0-.5-.246-.869zM7 16l.6-1h4.8l.6 1H7zm9-4H4V4h12v8z"/></svg>
                        <svg class="h-5 w-5 my-auto mx-3 cursor-pointer hover:text-indigo-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 1H2C.899 1 0 1.9 0 3v11c0 1.1.882 2.178 1.961 2.393l4.372.875S2.57 19 5 19h10c2.43 0-1.334-1.732-1.334-1.732l4.373-.875C19.117 16.178 20 15.1 20 14V3c0-1.1-.9-2-2-2zm0 13H2V3h16v11z"/></svg>
                    </div>
                    <div class="flex">
                        <div class="text-gray-700 my-auto hover:text-indigo-600">
                            <svg class="h-6 w-6 mx-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <title id="simpleicons-github-icon">Undo</title>
                                <path fill-rule="evenodd" d="M.685 10h2.372v-.205c.108-4.434 3.724-7.996 8.169-7.996 4.515 0 8.174 3.672 8.174 8.201s-3.659 8.199-8.174 8.199a8.13 8.13 0 01-5.033-1.738l1.406-1.504a6.099 6.099 0 003.627 1.193c3.386 0 6.131-2.754 6.131-6.15s-2.745-6.15-6.131-6.15c-3.317 0-6.018 2.643-6.125 5.945V10h2.672l-3.494 3.894L.685 10z"/>
                            </svg>
                        </div>
                        <div class="text-gray-700 my-auto hover:text-indigo-600">
                            <svg class="h-6 w-6 mx-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <title id="simpleicons-github-icon">Redo</title>
                                <path fill-rule="evenodd" d="M19.315 10h-2.372v-.205c-.108-4.434-3.724-7.996-8.169-7.996C4.259 1.799.6 5.471.6 10s3.659 8.199 8.174 8.199a8.13 8.13 0 005.033-1.738l-1.406-1.504a6.099 6.099 0 01-3.627 1.193c-3.386 0-6.131-2.754-6.131-6.15s2.745-6.15 6.131-6.15c3.317 0 6.018 2.643 6.125 5.945V10h-2.672l3.494 3.894L19.315 10z"/>
                            </svg>
                        </div>
                        <div class="text-gray-700 my-auto hover:text-indigo-600">
                            <svg class="h-5 w-5 mx-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 317.215 317.215">
                                <title id="simpleicons-github-icon">Full Screen</title>
                                <g fill-rule="evenodd">
                                    <path d="M309.715 1.107h-71.223a7.5 7.5 0 00-7.5 7.5v20a7.5 7.5 0 007.5 7.5h18.973l-57.129 57.127a7.501 7.501 0 000 10.606l14.143 14.143a7.476 7.476 0 005.304 2.197 7.482 7.482 0 005.304-2.197l57.129-57.127V79.83a7.5 7.5 0 007.5 7.5h20a7.5 7.5 0 007.5-7.5V8.607a7.502 7.502 0 00-7.501-7.5zM59.75 36.107h18.973a7.5 7.5 0 007.5-7.5v-20a7.5 7.5 0 00-7.5-7.5H7.5a7.5 7.5 0 00-7.5 7.5V79.83a7.5 7.5 0 007.5 7.5h20a7.5 7.5 0 007.5-7.5V60.857l57.125 57.126a7.483 7.483 0 005.305 2.197 7.486 7.486 0 005.305-2.197l14.142-14.143a7.5 7.5 0 000-10.606L59.75 36.107zM102.734 199.233a7.503 7.503 0 00-10.609 0L35 256.358v-18.974a7.5 7.5 0 00-7.5-7.5h-20a7.5 7.5 0 00-7.5 7.5v71.223a7.5 7.5 0 007.5 7.5h71.223a7.5 7.5 0 007.5-7.5v-20a7.5 7.5 0 00-7.5-7.5H59.75l57.126-57.125a7.5 7.5 0 000-10.606l-14.142-14.143zM309.715 229.885h-20a7.5 7.5 0 00-7.5 7.5v18.976l-57.13-57.127a7.5 7.5 0 00-10.606 0l-14.143 14.143a7.501 7.501 0 00.001 10.606l57.128 57.125h-18.973a7.5 7.5 0 00-7.5 7.5v20a7.5 7.5 0 007.5 7.5h71.223a7.5 7.5 0 007.5-7.5v-71.223a7.5 7.5 0 00-7.5-7.5z"/>
                                </g>
                            </svg>
                        </div>
                        <div class="text-gray-700 my-auto hover:text-indigo-600">
                            <svg class="h-6 w-6 mx-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <title id="simpleicons-github-icon">Setting</title>
                                <path fill-rule="evenodd" d="M16.783 10c0-1.049.646-1.875 1.617-2.443a8.932 8.932 0 00-.692-1.672c-1.089.285-1.97-.141-2.711-.883-.741-.74-.968-1.621-.683-2.711a8.732 8.732 0 00-1.672-.691c-.568.97-1.595 1.615-2.642 1.615-1.048 0-2.074-.645-2.643-1.615a8.697 8.697 0 00-1.671.691c.285 1.09.059 1.971-.684 2.711-.74.742-1.621 1.168-2.711.883A8.797 8.797 0 001.6 7.557c.97.568 1.615 1.394 1.615 2.443 0 1.047-.645 2.074-1.615 2.643a8.89 8.89 0 00.691 1.672c1.09-.285 1.971-.059 2.711.682.741.742.969 1.623.684 2.711a8.841 8.841 0 001.672.693c.568-.973 1.595-1.617 2.643-1.617 1.047 0 2.074.645 2.643 1.617a8.963 8.963 0 001.672-.693c-.285-1.088-.059-1.969.683-2.711.741-.74 1.622-1.166 2.711-.883a8.811 8.811 0 00.692-1.672c-.973-.569-1.619-1.395-1.619-2.442zM10 13.652a3.652 3.652 0 110-7.306 3.653 3.653 0 010 7.306z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="flex">
                        <button class="px-5 py-2 text-sm font-medium my-auto text-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-700 hover:text-indigo-500">
                            Save
                        </button>
                        <button class="px-5 py-2 text-sm font-medium my-auto text-white bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-700 hover:bg-indigo-500">
                            Publish
                        </button>


                    </div>

                </div>
                <div class="flex justify-between my-5 mx-8">
                    <div class="flex my-auto">
                        <div class="text-2xl hover:underline cursor-pointer font-bold text-gray-800 mr-6 leading-6">
                            NitsEditor
                        </div>
                        <div class="text-lg font-medium text-gray-600 leading-6 ">
                            Just another noetic site
                        </div>
                    </div>
                    <div class="flex">
                        <div class="text-lg my-auto font-medium text-indigo-600 hover:underline cursor-pointer leading-6 px-6">Page Demo</div>
                        <div class="border-r-2 border-indigo-600"></div>
                        <div class="flex-col cursor-pointer ml-6">
                            <svg class="w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M225.474 0C101.151 0 0 101.151 0 225.474c0 124.33 101.151 225.474 225.474 225.474 124.33 0 225.474-101.144 225.474-225.474C450.948 101.151 349.804 0 225.474 0zm0 409.323c-101.373 0-183.848-82.475-183.848-183.848S124.101 41.626 225.474 41.626s183.848 82.475 183.848 183.848-82.475 183.849-183.848 183.849z"/><path d="M505.902 476.472L386.574 357.144c-8.131-8.131-21.299-8.131-29.43 0-8.131 8.124-8.131 21.306 0 29.43l119.328 119.328A20.74 20.74 0 00491.187 512a20.754 20.754 0 0014.715-6.098c8.131-8.124 8.131-21.306 0-29.43z"/></svg>
                            <div class="text-xs font-medium text-indigo-500">Search</div>
                        </div>
                    </div>
                </div>
                <div class="w-full md:mt-16 tracking-wide text-gray-800 mt-4 text-center text-base md:text-6xl font-bold ">
                    NitsEditor
                </div>


                <page-row-element v-if="elements.length" v-for="(row, index) in elements" :key="'row_index_'+index" v-bind="row.attrs" :row_index="index"></page-row-element>


                <div class="w-full flex justify-center md:py-32 mt-2 md:mt-10 bg-gray-100">
                    <div class="border w-1/2 flex flex-col border-dashed border-indigo-700 md:py-10">
                        <button @click.prevent="addRowField" class="p-3 mx-auto bg-indigo-600 text-white rounded-full focus:outline-none hover:bg-indigo-400 focus:bg-indigo-700">
                            <svg  class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 448 448" xmlns="http://www.w3.org/2000/svg"><path d="M408 184H272a8 8 0 01-8-8V40c0-22.09-17.91-40-40-40s-40 17.91-40 40v136a8 8 0 01-8 8H40c-22.09 0-40 17.91-40 40s17.91 40 40 40h136a8 8 0 018 8v136c0 22.09 17.91 40 40 40s40-17.91 40-40V272a8 8 0 018-8h136c22.09 0 40-17.91 40-40s-17.91-40-40-40zm0 0"/></svg>
                        </button>
                        <div class="text-sm mx-auto italic mt-5 font-medium text-indigo-700">Add Row</div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    import {eventBus} from 'NitsModels/_events';
    import ElementSettings from "./ElementSettings";

    export default {
        name: "Main",
        components: {ElementSettings},
        data(){
            return{
                selectColumn: false,
                widget: true,
                showElements: true,
                elementSettings: false,
                elements:[]
            }
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
                eventBus.$on('page-add-columns', (data) => {
                    if(typeof this.elements[data.index] !== 'undefined')
                        this.elements[data.index].attrs.child_components.push(data.column)
                });

                eventBus.$on('page-add-component', (data) => {
                    this.elements[data.row_index].attrs.child_components[data.column_index].attrs.child_components.splice(data.element_index, 1, data.component);
                });
            },
        },
        created(){
            this.listenToEvents();
        }
    }
</script>

<style scoped>

</style>
