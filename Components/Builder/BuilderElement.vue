<template>
    <div>
        <div @mouseover="isVisible = true" @mouseleave="isVisible = false" @keydown.enter="isVisible = !isVisible" class="flex w-full m-2 p-2">
            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 1.6a8.4 8.4 0 100 16.8 8.4 8.4 0 000-16.8zm5 9.4h-4v4H9v-4H5V9h4V5h2v4h4v2z"/>
                </svg>

                <transition enter-active-class="transition duration-300 ease-out transform" enter-class="-translate-x-3 scale-95 opacity-0" enter-to-class="translate-x-0 scale-100 opacity-100" leave-active-class="transition duration-150 ease-in transform" leave-class="translate-x-0 opacity-100" leave-to-class="-translate-x-3 opacity-0">
                    <div v-show="isVisible" class="absolute">
                        <div class="relative bg-white rounded">
                            <div class="relative flex">
                                <div @click="showModal"  class="border border-white h-10 w-9 text-gray-600 hover:text-gray-400 inline-block bg-gray-200 font-bold">
                                    <svg class="h-4 w-4 my-2 mx-3 font-bold" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.873 477.873"><path fill-rule="evenodd" d="M392.533 238.937c-9.426 0-17.067 7.641-17.067 17.067V426.67c0 9.426-7.641 17.067-17.067 17.067H51.2c-9.426 0-17.067-7.641-17.067-17.067V85.337c0-9.426 7.641-17.067 17.067-17.067H256c9.426 0 17.067-7.641 17.067-17.067S265.426 34.137 256 34.137H51.2C22.923 34.137 0 57.06 0 85.337V426.67c0 28.277 22.923 51.2 51.2 51.2h307.2c28.277 0 51.2-22.923 51.2-51.2V256.003c0-9.425-7.641-17.066-17.067-17.066z"/><path d="M458.742 19.142A65.328 65.328 0 00412.536.004a64.85 64.85 0 00-46.199 19.149L141.534 243.937a17.254 17.254 0 00-4.113 6.673l-34.133 102.4c-2.979 8.943 1.856 18.607 10.799 21.585 1.735.578 3.552.873 5.38.875a17.336 17.336 0 005.393-.87l102.4-34.133c2.515-.84 4.8-2.254 6.673-4.13l224.802-224.802c25.515-25.512 25.518-66.878.007-92.393z"/></svg>
                                </div>
                                <div class="border border-white h-10 w-9 text-gray-600 hover:text-gray-400 inline-block bg-gray-200 font-bold">
                                    <svg class="h-4 w-4 my-2 mx-3 font-bold" fill="currentColor" viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M512.001 84.853L427.148 0 256.001 171.147 84.853 0 0 84.853 171.148 256 0 427.148l84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853L340.853 256z"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>


            </div>
            <div class="flex-col cursor-pointer" >
                <h5 class="text-blue-500 font-bold">Button</h5>
                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
            </div>

        </div>

        <vue-tailwind-modal :showing="Add" class="shadow-lg">
            <div class="">
                <div class="flex bg-blue-600 p-4">
                    <h2 class="text-white text-xl leading-normal font-normal font-sans">Button Settings</h2>
                </div>
                <div>
                    <div class="flex flex-wrap">
                        <div class="w-full">
                            <ul class="flex mb-0 list-none flex-wrap flex-row bg-blue-600 pt-2">
                                <li class=" flex text-center cursor-pointer">
                                    <a class="text-base  px-5 py-3 rounded-t-lg w-24 ml-2 leading-normal font-normal font-sans" v-on:click="toggleTabs(1)" v-bind:class="{'text-white bg-blue-600': openTab !== 1, 'text-gray-600 bg-white': openTab === 1}">
                                        General
                                    </a>
                                </li>
                                <li class="flex text-center cursor-pointer">
                                    <a class="text-base  px-5 py-3 rounded-t-lg w-40 ml-2 leading-normal font-normal font-sans" v-on:click="toggleTabs(2)" v-bind:class="{'text-white bg-blue-600': openTab !== 2, 'text-gray-600 bg-white': openTab === 2}">
                                        Design Options
                                    </a>
                                </li>
                            </ul>
                            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                                <div class="px-4 py-5 flex-auto">
                                    <div class="tab-content tab-space">
                                        <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                                            DEMO1 <br /> text-base  px-5 py-3 rounded-t-lg w-40 ml-2 leading-normal font-normal font-sans
                                            text-base  px-5 py-3 rounded-t-lg w-40 ml-2 leading-normal font-normal font-sans
                                        </div>
                                        <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                                            <p>
                                                DEMO2 <br />text-base  px-5 py-3 rounded-t-lg w-40 ml-2 leading-normal
                                                font-normal font-sans text-base  px-5 py-3 rounded-t-lg w-40 ml-2
                                                leading-normal font-normal font-sans
                                                <br />
                                                <br />
                                                text-base  px-5 py-3 rounded-t-lg w-40 ml-2 leading-normal
                                                font-normal font-sans
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex items-center justify-end p-6 border-t border-solid border-gray-300 bg-gray-300 rounded-b">
                                    <button @click="showModalRow = false" class="text-white bg-gray-500 bg-transparent border border-solid border-gray-500 active:bg-gray-500 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease">
                                        Close
                                    </button>
                                    <button class="text-white bg-blue-600 bg-transparent border border-solid border-blue-600 active:bg-gray-500 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </vue-tailwind-modal>
    </div>
</template>

<script>
    import RowElement from "./RowElement";

    export default {
        name: "BuilderElement",
        data(){
            return{
                Add: false,
                isVisible: false,
            }
        },
        methods:{
            showModal(){
              this.Add = true
            },
        },
        components: {
            'VueTailwindModal': () => import('vue-tailwind-modal'),
        },
    }
</script>

<style scoped>

</style>