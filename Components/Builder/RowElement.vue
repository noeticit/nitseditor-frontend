<template>
    <div class="w-full pb-10 bg-white" style="min-height: 500px">
        <div class="relative flex flex-row m-4 p-4">
            <div class="bg-gray-300 mr-1 rounded-t h-10 w-12 hover:text-gray-400 text-gray-600">
                <svg class="h-5 w-5 my-2 mx-3 pt-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 317.215 317.215">
                    <g fill-rule="evenodd">
                        <path d="M309.715 1.107h-71.223a7.5 7.5 0 00-7.5 7.5v20a7.5 7.5 0 007.5 7.5h18.973l-57.129 57.127a7.501 7.501 0 000 10.606l14.143 14.143a7.476 7.476 0 005.304 2.197 7.482 7.482 0 005.304-2.197l57.129-57.127V79.83a7.5 7.5 0 007.5 7.5h20a7.5 7.5 0 007.5-7.5V8.607a7.502 7.502 0 00-7.501-7.5zM59.75 36.107h18.973a7.5 7.5 0 007.5-7.5v-20a7.5 7.5 0 00-7.5-7.5H7.5a7.5 7.5 0 00-7.5 7.5V79.83a7.5 7.5 0 007.5 7.5h20a7.5 7.5 0 007.5-7.5V60.857l57.125 57.126a7.483 7.483 0 005.305 2.197 7.486 7.486 0 005.305-2.197l14.142-14.143a7.5 7.5 0 000-10.606L59.75 36.107zM102.734 199.233a7.503 7.503 0 00-10.609 0L35 256.358v-18.974a7.5 7.5 0 00-7.5-7.5h-20a7.5 7.5 0 00-7.5 7.5v71.223a7.5 7.5 0 007.5 7.5h71.223a7.5 7.5 0 007.5-7.5v-20a7.5 7.5 0 00-7.5-7.5H59.75l57.126-57.125a7.5 7.5 0 000-10.606l-14.142-14.143zM309.715 229.885h-20a7.5 7.5 0 00-7.5 7.5v18.976l-57.13-57.127a7.5 7.5 0 00-10.606 0l-14.143 14.143a7.501 7.501 0 00.001 10.606l57.128 57.125h-18.973a7.5 7.5 0 00-7.5 7.5v20a7.5 7.5 0 007.5 7.5h71.223a7.5 7.5 0 007.5-7.5v-71.223a7.5 7.5 0 00-7.5-7.5z"/>
                    </g>
                </svg>
            </div>
            <div @mouseover="isVisible = true" @mouseleave="isVisible = false" @keydown.enter="isVisible = !isVisible" class="relative bg-gray-300 mr-1 rounded-t h-10 w-12 hover:text-gray-400 text-gray-600">
                <svg class="h-6 w-6 my-2 mx-3 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M14.4 9H8.6c-.552 0-.6.447-.6 1s.048 1 .6 1h5.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm2 5H8.6c-.552 0-.6.447-.6 1s.048 1 .6 1h7.8c.552 0 .6-.447.6-1s-.048-1-.6-1zM8.6 6h7.8c.552 0 .6-.447.6-1s-.048-1-.6-1H8.6c-.552 0-.6.447-.6 1s.048 1 .6 1zM5.4 9H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1h1.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0 5H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1h1.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0-10H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1h1.8c.552 0 .6-.447.6-1s-.048-1-.6-1z"/>
                </svg>
                <transition enter-active-class="transition duration-300 ease-out transform" enter-class="-translate-x-3 scale-95 opacity-0" enter-to-class="translate-x-0 scale-100 opacity-100" leave-active-class="transition duration-150 ease-in transform" leave-class="translate-x-0 opacity-100" leave-to-class="-translate-x-3 opacity-0">
                    <div v-show="isVisible" class="absolute top-0">
                        <div class="relative bg-white rounded">
                            <div class="relative flex">
                                <div class="border border-white h-10 w-9 text-gray-600 hover:text-gray-400 inline-block bg-gray-200 font-bold">
                                    <svg class="h-6 w-6 my-2 mx-3 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M14.4 9H8.6c-.552 0-.6.447-.6 1s.048 1 .6 1h5.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm2 5H8.6c-.552 0-.6.447-.6 1s.048 1 .6 1h7.8c.552 0 .6-.447.6-1s-.048-1-.6-1zM8.6 6h7.8c.552 0 .6-.447.6-1s-.048-1-.6-1H8.6c-.552 0-.6.447-.6 1s.048 1 .6 1zM5.4 9H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1h1.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0 5H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1h1.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0-10H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1h1.8c.552 0 .6-.447.6-1s-.048-1-.6-1z"/>
                                    </svg>
                                </div>
                                <div class="border border-white h-10 w-9 text-gray-600 hover:text-gray-400 inline-block bg-gray-200 font-bold">
                                    <svg class="h-6 w-6 my-2 mx-3 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1z"/>
                                    </svg>
                                </div>
                                <div class="border border-white h-10 w-9 text-gray-600 hover:text-gray-400 inline-block bg-gray-200 font-bold">
                                    <svg class="h-6 w-6 my-2 mx-3 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1z"/>
                                    </svg>
                                </div>
                                <div class="border border-white h-10 w-9 text-gray-600 hover:text-gray-400 inline-block bg-gray-200 font-bold">
                                    <svg class="h-6 w-6 my-2 mx-3 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1z"/>
                                    </svg>
                                </div>
                                <div class="border border-white h-10 w-9 text-gray-600 hover:text-gray-400 inline-block bg-gray-200 font-bold">
                                    <svg class="h-6 w-6 my-2 mx-3 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1z"/>
                                    </svg>
                                </div>
                                <div class="border border-white h-10 w-9 text-gray-600 hover:text-gray-400 inline-block bg-gray-200 font-bold">
                                    <svg class="h-6 w-6 my-2 mx-3 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
            <div @click.prevent="AddRow()" class="h-10 w-12 text-gray-600 rounded-t hover:text-gray-400 inline-block bg-gray-300 font-bold">
                <svg class="h-6 w-6 my-2 mx-3 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>
                </svg>
            </div>
            <div class="flex absolute right-0 mr-4">
                <div class="bg-gray-300 mr-1 rounded-t h-10 w-12 hover:text-gray-400 text-gray-600">
                    <svg class="h-5 w-5 my-3 mx-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M17.561 2.439c-1.442-1.443-2.525-1.227-2.525-1.227L8.984 7.264 2.21 14.037 1.2 18.799l4.763-1.01 6.774-6.771 6.052-6.052c-.001 0 .216-1.083-1.228-2.527zM5.68 17.217l-1.624.35a3.71 3.71 0 00-.69-.932 3.742 3.742 0 00-.932-.691l.35-1.623.47-.469s.883.018 1.881 1.016c.997.996 1.016 1.881 1.016 1.881l-.471.468z"/>
                    </svg>

                    <!--                                                <svg class="h-5 w-5 my-2 mx-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.873 477.873"><path fill-rule="evenodd" d="M392.533 238.937c-9.426 0-17.067 7.641-17.067 17.067V426.67c0 9.426-7.641 17.067-17.067 17.067H51.2c-9.426 0-17.067-7.641-17.067-17.067V85.337c0-9.426 7.641-17.067 17.067-17.067H256c9.426 0 17.067-7.641 17.067-17.067S265.426 34.137 256 34.137H51.2C22.923 34.137 0 57.06 0 85.337V426.67c0 28.277 22.923 51.2 51.2 51.2h307.2c28.277 0 51.2-22.923 51.2-51.2V256.003c0-9.425-7.641-17.066-17.067-17.066z"/><path d="M458.742 19.142A65.328 65.328 0 00412.536.004a64.85 64.85 0 00-46.199 19.149L141.534 243.937a17.254 17.254 0 00-4.113 6.673l-34.133 102.4c-2.979 8.943 1.856 18.607 10.799 21.585 1.735.578 3.552.873 5.38.875a17.336 17.336 0 005.393-.87l102.4-34.133c2.515-.84 4.8-2.254 6.673-4.13l224.802-224.802c25.515-25.512 25.518-66.878.007-92.393z"/></svg>-->
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
            <column-element v-if="child_components.length" v-for="(column,index) in child_components" :key="index"  :attrs="column.attrs" :count="column.count" :child_components="column.child_components"></column-element>
        </div>
        <div class="h-48 ml-8 mr-8 -mt-8 rounded-b px-5 bg-gray-200 border-black">
            <div class="px-8 py-8">
                <div class="flex-col">
                    <div class="text-xl mt-10 antialiased font-normal text-center tracking-wider text-gray-500 px-64">
                        YOU HAVE EMPTY ELEMENT ADD YOUR FIRST COLUMN
                    </div>
                    <div class="flex mt-10 ml-64 pl-32">
                        <button @click.prevent="selectColumn = !selectColumn" class="text-sm focus:outline-none focus:bg-blue-600 hover:bg-blue-500 rounded bg-blue-600 px-10 py-3 font-semibold tracking-normal text-white mr-5">Add Column</button>
                    </div>
                </div>
            </div>
        </div>
        <vue-tailwind-modal v-if="selectColumn" class="shadow-lg" :showing="selectColumn">
            <div class="">
                <div class="flex bg-blue-600 p-4">
                    <h2 class="text-white text-xl leading-normal font-normal font-sans">Select your column grid</h2>
                </div>
                <div>
                    <div class="flex flex-wrap">
                        <div class="w-full">
                            <button @click.prevent="addColumn('1', row_index)" class="text-sm focus:outline-none focus:bg-blue-600 hover:bg-blue-500 rounded bg-blue-600 px-10 py-3 font-semibold tracking-normal text-white mr-5">Add Column (1)</button>
                            <button @click.prevent="addColumn('1/2 1/2', row_index)" class="text-sm focus:outline-none focus:bg-blue-600 hover:bg-blue-500 rounded bg-blue-600 px-10 py-3 font-semibold tracking-normal text-white mr-5">Add Column (1/2 1/2)</button>
                            <button @click.prevent="addColumn('1/4 1/4 1/4 1/4', row_index)" class="text-sm focus:outline-none focus:bg-blue-600 hover:bg-blue-500 rounded bg-blue-600 px-10 py-3 font-semibold tracking-normal text-white mr-5">Add Column (1/4 1/4 1/4 1/4)</button>
                        </div>
                    </div>
                </div>
            </div>
        </vue-tailwind-modal>
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
                Duplicate:[{row:''}],
            }
        },
        props: {
            attrs: Object,
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
            addColumn(type, index) {
                let col
                let column_element
                switch(type) {
                    case '1':
                         column_element = {
                            component: 'column',
                            count: [
                                {}
                            ],
                            attrs:{gap:4, cols:1},
                            child_components: []
                        };
                        break;
                    case '1/2 1/2':
                        column_element = {
                            component: 'column',
                            count: [
                                {}, {}
                            ],
                            attrs:{gap:4, cols:2},
                            child_components: []
                        };
                        break;
                    case '1/4 1/4 1/4 1/4':
                        column_element = {
                            component: 'column',
                            count: [
                                {}, {},{},{}
                            ],
                            attrs:{gap:4, cols:4},
                            child_components: []
                        };
                        break;
                    default: col = 1;
                        break;
                }

                eventBus.$emit('add-columns', {column: column_element, index: index});
            }
        }
    }
</script>

<style scoped>

</style>