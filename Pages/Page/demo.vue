<template>
    <dashboard-layout-one active="user-add">
    <div >
        <button class="border-none text-white bg-teal-400 text-2xl p-4 rounded-md cursor-pointer" @click="showModal = true" >Show Modal</button>
        <transition name="fade" appear>
            <div class="absolute fixed inset-0 cursor-pointer "
                 v-if="showModal"
                 @click="showModal = true"></div>
        </transition>
        <transition name="pop" appear>
            <div class="absolute fixed inset-0 m-auto text-center h-1/2 w-1/2 rounded-md shadow-lg bg-white "
                 role="dialog"
                 v-if="showModal"
            >
                <div class="flex bg-blue-600 p-4">
                    <h2 class="text-white text-xl leading-normal font-normal font-sans">Button Settings</h2>
                    <button @click="showModal = false" class="absolute top-0 right-0 text-xl text-white my-4 mx-4">X</button>
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
                                            text-base  px-5 py-3 rounded-t-lg w-40 ml-2 leading-normal font-normal font-sans
                                            text-base  px-5 py-3 rounded-t-lg w-40 ml-2 leading-normal font-normal font-sans
                                        </div>
                                        <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                                            <p>
                                                text-base  px-5 py-3 rounded-t-lg w-40 ml-2 leading-normal
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
                                    <button @click="showModal = false" class="text-white bg-gray-500 bg-transparent border border-solid border-gray-500 active:bg-gray-500 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease" v-on:click="toggleModal()">
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
<!--                <button @click="showModal = false" class="border-none text-white bg-teal-400 text-2xl p-4 rounded-md cursor-pointer">Hide Modal</button>-->

            </div>
        </transition>
    </div>
    </dashboard-layout-one>
</template>

<script>
    export default {
        name: "demo",
        data() {
            return {
                showModal: false,
                openTab: 1
            }
        },
        methods: {
            toggleTabs: function(tabNumber){
                this.openTab = tabNumber
            }
        }
    }
</script>


<style>
    /*html {*/
    /*    height: 100%;*/
    /*    background: #FFF;*/
    /*    color: #000;*/
    /*    font-size: 62.5%;*/
    /*}*/

    /*body {*/
    /*    min-height: 100%;*/
    /*    margin: 0;*/
    /*    display: grid;*/
    /*    place-items: center;*/
    /*    font-size: 1.4rem;*/
    /*}*/

    /*.button {*/
    /*    border: none;*/
    /*    color: #FFF;*/
    /*    background: #42b983;*/
    /*    appearance: none;*/
    /*    font: inherit;*/
    /*    font-size: 1.8rem;*/
    /*    padding: .5em 1em;*/
    /*    border-radius: .3em;*/
    /*    cursor: pointer;*/
    /*}*/

    /*.modal {*/
    /*    position: absolute;*/
    /*    position: fixed;*/
    /*    top: 0;*/
    /*    right: 0;*/
    /*    bottom: 0;*/
    /*    left: 0;*/
    /*    margin: auto;*/
    /*    text-align: center;*/
    /*    width: fit-content;*/
    /*    height: fit-content;*/
    /*    max-width: 22em;*/
    /*    padding: 2rem;*/
    /*    border-radius: 1rem;*/
    /*    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);*/
    /*    background: #FFF;*/
    /*    z-index: 999;*/
    /*    transform: none;*/
    /*}*/
    /*.modal h1 {*/
    /*    margin: 0 0 1rem;*/
    /*}*/

    /*.modal-overlay {*/
    /*    content: '';*/
    /*    position: absolute;*/
    /*    position: fixed;*/
    /*    top: 0;*/
    /*    right: 0;*/
    /*    bottom: 0;*/
    /*    left: 0;*/
    /*    z-index: 998;*/
    /*    background: #2c3e50;*/
    /*    opacity: 0.6;*/
    /*    cursor: pointer;*/
    /*}*/

    /*!* ---------------------------------- *!*/
    /*.fade-enter-active,*/
    /*.fade-leave-active {*/
    /*    transition: opacity .4s linear;*/
    /*}*/

    /*.fade-enter,*/
    /*.fade-leave-to {*/
    /*    opacity: 0;*/
    /*}*/

    /*.pop-enter-active,*/
    /*.pop-leave-active {*/
    /*    transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;*/
    /*}*/

    /*.pop-enter,*/
    /*.pop-leave-to {*/
    /*    opacity: 0;*/
    /*    transform: scale(0.3) translateY(-50%);*/
    /*}*/
</style>

<style scoped>

</style>