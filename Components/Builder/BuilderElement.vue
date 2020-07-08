<template>
    <div>
        <div @mouseover="isVisible = true" @mouseleave="isVisible = false" @keydown.enter="isVisible = !isVisible" class="flex w-full m-2 p-2">
            <div class="h-auto relative mt-3 text-left mr-3 inline-block text-sm cursor-default w-full font-normal text-gray-600 rounded-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
<!--                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
<!--                    <path fill-rule="evenodd" d="M10 1.6a8.4 8.4 0 100 16.8 8.4 8.4 0 000-16.8zm5 9.4h-4v4H9v-4H5V9h4V5h2v4h4v2z"/>-->
<!--                </svg>-->
                <div v-show="isVisible" class="absolute mr-64 pr-40 right-0 top-0">
                    <div class="relative bg-white rounded">
                        <div class="flex cursor-pointer">
                            <div class="flex cursor-move rounded-l bg-blue-500 p-2  text-white hover:bg-blue-600 text-normal">
                                    <svg class="h-4 w-4 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill-rule="evenodd" d="M507.353 245.245l-83.692-78.769a14.77 14.77 0 00-24.891 10.755v34.462h-98.462v-98.462h34.462a14.768 14.768 0 0010.755-24.891l-78.77-83.693a14.772 14.772 0 00-21.51 0L166.476 88.34a14.77 14.77 0 0010.755 24.891h34.462v98.462h-98.462v-34.462a14.768 14.768 0 00-24.891-10.755L4.647 245.245a14.772 14.772 0 000 21.51l83.692 78.769a14.77 14.77 0 0024.891-10.755v-34.462h98.462v98.462H177.23a14.768 14.768 0 00-10.755 24.891l78.769 83.692a14.773 14.773 0 0021.511.001l78.769-83.692a14.77 14.77 0 00-10.755-24.891h-34.462v-98.462h98.462v34.462a14.768 14.768 0 0024.891 10.755l83.692-78.769a14.773 14.773 0 00.001-21.511zm-79.045 55.342v-15.049c0-8.157-6.613-14.769-14.769-14.769h-128c-8.157 0-14.769 6.613-14.769 14.769v128c0 8.157 6.613 14.769 14.769 14.769h15.049L256 475.682l-44.587-47.374h15.049c8.157 0 14.769-6.613 14.769-14.769v-128c0-8.157-6.613-14.769-14.769-14.769h-128c-8.157 0-14.769 6.613-14.769 14.769v15.049L36.319 256l47.374-44.587v15.049c0 8.157 6.613 14.769 14.769 14.769h128c8.157 0 14.769-6.613 14.769-14.769v-128c0-8.157-6.613-14.769-14.769-14.769h-15.049L256 36.319l44.587 47.374h-15.049c-8.157 0-14.769 6.613-14.769 14.769v128c0 8.157 6.613 14.769 14.769 14.769h128c8.157 0 14.769-6.613 14.769-14.769v-15.049L475.682 256l-47.374 44.587z"/>
                                    </svg>
                                <div class="ml-2 text-xs mx-2">Text Block </div>
                            </div>
                            <div class="flex bg-blue-500 p-2  text-white hover:bg-blue-600 text-normal">
                                <svg @click="isOpen2 = ! isOpen2" class="h-4 w-4 mx-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M14.69 2.661c-1.894-1.379-3.242-1.349-3.754-1.266a.538.538 0 00-.35.223l-4.62 6.374-2.263 3.123a2.447 2.447 0 00-.462 1.307l-.296 5.624a.56.56 0 00.76.553l5.256-2.01c.443-.17.828-.465 1.106-.849l1.844-2.545 5.036-6.949a.56.56 0 00.1-.423c-.084-.526-.487-1.802-2.357-3.162zM8.977 15.465l-2.043.789a.19.19 0 01-.221-.062 5.145 5.145 0 00-1.075-1.03 5.217 5.217 0 00-1.31-.706.192.192 0 01-.126-.192l.122-2.186.549-.755s1.229-.169 2.833.998c1.602 1.166 1.821 2.388 1.821 2.388l-.55.756z"/>
                                </svg>
                            </div>

                            <div class="flex bg-blue-500 p-2 text-white hover:bg-blue-600  text-normal">
                                <svg class="h-4 w-4 mx-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5 13V8h2L3.5 4 0 8h2v6a2 2 0 002 2h9.482l-2.638-3H5zm4.156-6L6.518 4H16c1.104 0 2 .897 2 2v6h2l-3.5 4-3.5-4h2V7H9.156z"/>
                                </svg>
                            </div>

                            <div class="flex bg-blue-500 p-2 text-white hover:bg-blue-600 rounded-r text-normal">
                                <svg class="h-4 w-4 mx-1 font-bold" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M14.348 14.849a1.2 1.2 0 01-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 11-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 111.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 111.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 010 1.698z"/>
                                </svg>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

<!--            <div class="flex-col cursor-pointer">-->
<!--                <h5 class="text-blue-500 font-bold">Button</h5>-->
<!--                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>-->
<!--            </div>-->
        </div>

<!--        <vue-tailwind-modal :showing="Add" class="shadow-lg">-->
<!--            <div class="">-->
<!--                <input-field></input-field>-->
<!--                <div class="flex items-center justify-end p-6 border-t border-solid border-gray-300 bg-gray-300 rounded-b">-->
<!--                    <button @click="showModalRow = false" class="text-white bg-gray-500 bg-transparent border border-solid border-gray-500 active:bg-gray-500 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease">-->
<!--                        Close-->
<!--                    </button>-->
<!--                    <button class="text-white bg-blue-600 bg-transparent border border-solid border-blue-600 active:bg-gray-500 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" >-->
<!--                        Save Changes-->
<!--                    </button>-->
<!--                </div>-->
<!--            </div>-->
<!--        </vue-tailwind-modal>-->
        <div v-if="isOpen2" class="main-modal fixed w-full h-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster" style="background: rgba(0,0,0,.7);">
            <div class="border border-teal-500 shadow-lg modal-container bg-white w-1/2 mx-20 rounded shadow-lg z-50">
<!--                <div class="flex relative justify-between border-solid border-b-2 p-2 text-center items-center">-->
<!--                    <div class="flex py-1">-->
<!--                        <div @click="isOpen2 = false" class="text-gray-600 ml-16 inline-block bg-white hover:bg-red-600 hover:text-white rounded shadow-md no-underline mr-3 focus:outline-none active:shadow-none font-bold">-->
<!--                            <svg class="h-4 w-4 my-2 mx-2 font-bold" fill="currentColor" viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M512.001 84.853L427.148 0 256.001 171.147 84.853 0 0 84.853 171.148 256 0 427.148l84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853L340.853 256z"/></svg>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
                <div class="" style="height: 400px;">
                    <input-field label="Text Setting"></input-field>
                </div>
                <div class="flex items-center mt-5 justify-end p-6 border-t border-solid border-gray-300 bg-gray-300 rounded-b">
                    <button @click="isOpen2 = ! isOpen2" class="text-white bg-gray-500 bg-transparent border border-solid border-gray-500 active:bg-gray-500 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease">
                        Close
                    </button>
                    <button class="text-white bg-blue-600 bg-transparent border border-solid border-blue-600 active:bg-gray-500 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" >
                        Save Changes
                    </button>
                </div>
<!--                <div class="flex justify-between border-solid border-t-2 p-2 text-center items-center">-->
<!--                    <button  class="ml-5 my-2 bg-transparent border border-gray-500 text-gray-600 font-semibold py-1 px-4 rounded">Close</button>-->
<!--                </div>-->
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "BuilderElement",
        data(){
            return{
                Add: false,
                isVisible: false,
                isOpen2: false,
            }
        },
        methods:{
            showModal(){
              this.Add = true
            },
        },
        components: {
            'VueTailwindModal': () => import('vue-tailwind-modal'),
            'InputField': () => import('./Elements/InputField')
        },
    }
</script>

<style scoped>

</style>