<template>
    <div class="w-full">
        <div class="flex">
            <div class="w-1/5 h-screen overflow-y-auto">
                <div class="flex py-3 justify-between px-4 bg-indigo-600">
                    <svg class="h-6 w-6 my-auto text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1z"/></svg>
                    <div class="text-sm font-medium text-white leading-6 my-auto">{{heading}}</div>
                    <svg @click.prevent="showElement" class="h-6 w-6 my-auto text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M19 16.685S16.775 6.953 8 6.953V2.969L1 9.542l7 6.69v-4.357c4.763-.001 8.516.421 11 4.81z"/></svg>
                </div>
                <div class="bg-gray-200">
                    <div v-if="showElements" class="border-b-2 py-2 bg-gray-100 shadow flex border-indigo-600 justify-center text-gray-700 text-base font-medium ">
                        Our Elements
                    </div>
                    <div v-if="showElements" class="relative px-2 my-3">
                        <input type="search" class="bg-white px-3 text-xs py-2 w-full rounded border focus:outline-none focus:border-indigo-600" placeholder="Search elements...">
                    </div>

                    <form-elements
                            v-if="showElements"
                    ></form-elements>

                    <element-settings
                            v-if="editElement"
                            :data="elementSettings"
                    ></element-settings>

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
                        <div @click="isOpen4 = ! isOpen4" class="text-gray-700 my-auto hover:text-indigo-600">
                            <svg class="h-6 w-6 mx-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <title id="simpleicons-github-icon">Setting</title>
                                <path fill-rule="evenodd" d="M16.783 10c0-1.049.646-1.875 1.617-2.443a8.932 8.932 0 00-.692-1.672c-1.089.285-1.97-.141-2.711-.883-.741-.74-.968-1.621-.683-2.711a8.732 8.732 0 00-1.672-.691c-.568.97-1.595 1.615-2.642 1.615-1.048 0-2.074-.645-2.643-1.615a8.697 8.697 0 00-1.671.691c.285 1.09.059 1.971-.684 2.711-.74.742-1.621 1.168-2.711.883A8.797 8.797 0 001.6 7.557c.97.568 1.615 1.394 1.615 2.443 0 1.047-.645 2.074-1.615 2.643a8.89 8.89 0 00.691 1.672c1.09-.285 1.971-.059 2.711.682.741.742.969 1.623.684 2.711a8.841 8.841 0 001.672.693c.568-.973 1.595-1.617 2.643-1.617 1.047 0 2.074.645 2.643 1.617a8.963 8.963 0 001.672-.693c-.285-1.088-.059-1.969.683-2.711.741-.74 1.622-1.166 2.711-.883a8.811 8.811 0 00.692-1.672c-.973-.569-1.619-1.395-1.619-2.442zM10 13.652a3.652 3.652 0 110-7.306 3.653 3.653 0 010 7.306z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="flex">
                        <button @click="isOpen3 = ! isOpen3" class="px-5 py-2 text-sm font-medium my-auto text-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-700 hover:text-indigo-500">
                            Preview
                        </button>
                        <button  @click="isOpen2 = ! isOpen2" class="px-5 py-2 text-sm font-medium my-auto text-white bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-700 hover:bg-indigo-500">
                            Publish
                        </button>
                    </div>
                </div>

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

                <div class="md:mt-32"></div>

                <page-row-element v-if="elements.length" v-for="(row, index) in elements" :key="'row_index_'+index" v-bind="row.attrs" :row_index="index"></page-row-element>


                <div class="w-full flex md:px-16 justify-center md:py-12">
                    <div class="border w-full flex flex-col border-dashed border-indigo-700 md:py-10">
                        <button @click.prevent="addRowField" class="p-3 mx-auto bg-indigo-600 text-white rounded-full focus:outline-none hover:bg-indigo-400 focus:bg-indigo-700">
                            <svg  class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 448 448" xmlns="http://www.w3.org/2000/svg"><path d="M408 184H272a8 8 0 01-8-8V40c0-22.09-17.91-40-40-40s-40 17.91-40 40v136a8 8 0 01-8 8H40c-22.09 0-40 17.91-40 40s17.91 40 40 40h136a8 8 0 018 8v136c0 22.09 17.91 40 40 40s40-17.91 40-40V272a8 8 0 018-8h136c22.09 0 40-17.91 40-40s-17.91-40-40-40zm0 0"/></svg>
                        </button>
                        <div class="text-sm mx-auto italic mt-5 font-medium text-indigo-700">Add Widget Here</div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    import {eventBus} from 'NitsModels/_events';
    import ElementSettings from "./ElementSettings";
    import RowSettings from "./RowSettings";
    import ColumnSettings from "./ColumnSettings";
    import VSwatches from 'vue-swatches'

    // Import the styles too, typically in App.vue or main.js

    export default {
        name: "Main",
        components: {ColumnSettings, RowSettings, ElementSettings, VSwatches},
        data(){
            return{
                color: '#1CA085',
                isOpen2: false,
                isOpen3: false,
                isOpen4: false,
                selectColumn: false,
                widget: true,
                showElements: true,
                editElement: false,
                elements:[],
                heading:'Nitseditor',
                elementSettings:{},
                showMagicHat: false,
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
        methods:{
            showElement(){
                eventBus.$emit('page-show-elements');
            },
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
                eventBus.$on('page-remove-row', (index) => {
                    this.elements.splice(index, 1)
                })

                eventBus.$on('page-add-columns', (data) => {
                    if(typeof this.elements[data.index] !== 'undefined')
                        this.elements[data.index].attrs.child_components.push(data.column)
                });

                eventBus.$on('page-add-component', (data) => {
                    this.elements[data.row_index].attrs.child_components[data.column_index].attrs.child_components.splice(data.element_index, 1, data.component);
                });

                eventBus.$on('page-individual-element-attributes', (data) => {
                    if(data.component_name === 'nits-row'){
                        let attributes = this.elements[data.row_index].attrs;
                        attributes[data.field] = data.value
                        this.elements[data.row_index].attrs = attributes;
                    }
                    else if(data.component_name === 'nits-column'){
                        let attributes = this.elements[data.row_index].attrs.child_components[data.column_index].attrs;
                        attributes[data.field] = data.value
                        this.elements[data.row_index].attrs.child_components[data.column_index].attrs = attributes;
                    }
                    else{
                        let attributes = this.elements[data.row_index].attrs.child_components[data.column_index].attrs.child_components[data.element_index].attrs;
                        attributes[data.field] = data.value
                        this.elements[data.row_index].attrs.child_components[data.column_index].attrs.child_components[data.element_index].attrs = attributes;
                    }
                })


                eventBus.$on('page-element-settings', (data) => {
                    this.elementSettings = data
                    this.editElement = true
                    this.showElements = false
                    this.heading = 'Edit '+ data.elementData.name
                });

                eventBus.$on('page-show-elements', (data) => {
                    this.editElement = false
                    this.showElements = true
                    this.heading = 'NitsEditor'
                });

            },
        },
        created(){

            eventBus.$on('show-modal', () => {
                this.isOpen2 = true
            })


            this.listenToEvents();
        },
        computed: {
            svg() {
                return this.shapes[this.active].svg;
            }
        },
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
