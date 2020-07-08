<template>
    <div>
        <div class="flex bg-blue-600 p-4">
            <h2 class="text-white text-xl leading-normal font-normal font-sans">{{label}}</h2>
        </div>
        <div class="flex flex-wrap">
            <div class="w-full">
                <ul class="flex mb-0 list-none flex-wrap flex-row bg-blue-600 pt-2">
                    <li class=" flex text-center cursor-pointer">
                        <a class="text-base px-5 py-3 rounded-t-lg w-24 ml-2 leading-normal font-normal font-sans" v-on:click="toggleTabs(1)" v-bind:class="{'text-white hover:bg-blue-700 bg-blue-600': openTab !== 1, 'text-gray-700 font-semibold  bg-white': openTab === 1}">
                            General
                        </a>
                    </li>
                    <li class="flex text-center cursor-pointer">
                        <a class="text-base  px-5 py-3 rounded-t-lg w-40 ml-2 leading-normal font-normal font-sans" v-on:click="toggleTabs(2)" v-bind:class="{'text-white hover:bg-blue-700 bg-blue-600': openTab !== 2, 'text-gray-700 font-semibold bg-white': openTab === 2}">
                            Design Options
                        </a>
                    </li>
                </ul>
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded overflow-y-auto" style="height: 300px">
                    <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}" class="px-4 py-5 flex-auto">
                        <nits-form class="px-6" :forms="forms" :grid="grid"></nits-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InputField",
        props:{label: String},
        data(){
            return{
                openTab: 1,
                grid: {
                    cols: "1",
                    gap: "6",
                },
                forms: {
                    text: {
                        type: 'nits-input-text',
                        attrs: {
                            label:'Input Text',
                            placeholder: 'Enter Text',
                        },
                    },

                    animation:{
                        type: 'nits-input-select',
                        attrs: {
                            label:'CSS Animation',
                            placeholder: 'Select ',
                            options: [],
                        },
                    },

                    element:{
                        type: 'nits-input-text',
                        attrs: {
                            label:'Element ID',
                            placeholder: 'Enter Element ID',
                        },
                        value: ''
                    },
                    class:{
                        type: 'nits-input-text',
                        attrs: {
                            label:'Extra class name',
                            placeholder: 'Enter Extra class name',
                        },
                        value: ''
                    },


                    // user_id:{
                    //     type: 'nits-input-select',
                    //     attrs: {
                    //         label:'Users',
                    //         placeholder: 'Select User',
                    //         options: [],
                    //         api_url: '/api/user/fetch-all',
                    //         query: {}
                    //     },
                    //     value: '',
                    //     listensTo: ['role_id']
                    // },
                    // users:{
                    //     type: 'nits-input-multi-select',
                    //     attrs: {
                    //         label:'User',
                    //         placeholder: 'Select User',
                    //         options: [],
                    //         api_url: '/api/user/fetch-all',
                    //         query: {},
                    //         multiple: true
                    //         // trackBy: 'value',
                    //         // optionLabel: 'label'
                    //     },
                    //     value: [],
                    //     listensTo:['role_id']
                    // },
                    // image:{
                    //     type: 'nits-single-dropzone',
                    //     attrs: {
                    //         label:'Upload image',
                    //     },
                    //     value: ''
                    // },
                },
            }
        },
        methods: {
            toggleTabs: function(tabNumber){
                this.openTab = tabNumber
            }
        }
    }
</script>

<style scoped>

</style>