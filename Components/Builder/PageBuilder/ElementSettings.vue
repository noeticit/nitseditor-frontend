<template>
    <div >
        <div class="bg-white">
            <nits-grid :cols="3">
                <div  v-for="(item, index, key) in data.elementData.options" v-on:click="data.tab_index = index" v-bind:class="data.tab_index === index ? 'py-1 flex border-b-4 border-indigo-600':'py-1 flex'">
                    <div class="flex flex-col mx-auto">
                        <svg v-if="index === 'general'" class="h-4 w-4 mx-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M17.561 2.439c-1.442-1.443-2.525-1.227-2.525-1.227L8.984 7.264 2.21 14.037 1.2 18.799l4.763-1.01 6.774-6.771 6.052-6.052c-.001 0 .216-1.083-1.228-2.527zM5.68 17.217l-1.624.35a3.71 3.71 0 00-.69-.932 3.742 3.742 0 00-.932-.691l.35-1.623.47-.469s.883.018 1.881 1.016c.997.996 1.016 1.881 1.016 1.881l-.471.468z"/></svg>
                        <svg v-if="index === 'style'" class="h-4 w-4 mx-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 .4C4.698.4.4 4.698.4 10a9.6 9.6 0 1019.2-.001C19.6 4.698 15.301.4 10 .4zm0 17.199a7.6 7.6 0 110-15.2V10l6.792-3.396A7.548 7.548 0 0117.6 10a7.6 7.6 0 01-7.6 7.599z"/></svg>
                        <svg v-if="index === 'advanced'" class="h-4 w-4 mx-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="evenodd" d="M8 4H5a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V5a1 1 0 00-1-1zm7 0h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V5a1 1 0 00-1-1zm-7 7H5a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1zm7 0h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1z"/></svg>

                        <div class="text-sm font-medium text-gray-700 leading-6 py-1">
                            {{ titleFormat(index) }}
                        </div>
                    </div>
                </div>
            </nits-grid>
        </div>

        <div v-for="(item, index, key) in data.elementData.options" v-bind:class="data.tab_index === index ? 'block' : 'hidden'">
            <div  @click="isOpen2 =! isOpen2" class="flex py-2 px-5 justify-between mt-4 border-b-2 bg-white">
                <div class="text-md font-medium leading-6 text-gray-800">Settings</div>
                <svg :class="{'rotate-180': isOpen2, 'rotate-0': !isOpen2}" class="h-4 w-4 mr-1 transition-transform duration-200 transform inline" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"/></svg>
            </div>
            <div v-if="isOpen2" class="bg-white">
                <div class="py-1 flex">
                    <div class="flex-col mx-auto w-full">
                        <component :is="item.component"
                                   v-bind="item.attrs"
                                   :child_components="item.child_components"
                                   :row_index="data.row_index"
                                   :column_index="data.column_index"
                                   :element_index="data.element_index"
                                   :element="data.element"
                                   :component_name="data.component_name"
                        ></component>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {eventBus} from "../../../Models/_events";

    export default {
        name: "ElementSettings",
        props: {
            data: Object,
        },
        data(){
            return{
                isOpen2 : true,
            }
        },
        methods:{
            titleFormat(title) {
                return _.startCase(_.toLower(title))
            }
        },
    }
</script>

<style scoped>

</style>