<template>
    <div>
        <div class="px-2" v-if="!loading">
            <div v-if="tableData && tableData.data.length && !['batch_selected','batch'].includes(location)" class="text-left antialiased font-medium text-gray-800 leading-snug tracking-normal mt-5 mb-5 text-sm font-sans">Showing Results {{tableData.meta.from}} to {{tableData.meta.to}} of {{tableData.meta.total}}</div>
            <table class="mt-4 w-full" v-if="tableData && tableData.data.length">
                <tr class="bg-teal-500 h-8">
                    <template v-for="header in selectedColumns">
                        <th class="text-center" v-if="typeof headerStyle[header.key] !== 'undefined'" :style="headerStyle[header.key]">
                            <div v-if="header.key === 'index'" class="ml-2 flex justify-center items-center">
                                <input v-if="!['stream','standard','subject','chapter','topic','batch_selected','batch_view','batch','live_lectures','scratch_card'].includes(location)" class="mr-2 leading-tight" type="checkbox" v-model="selectAll">
<!--                                <input v-if="!['stream','standard'].includes(location)" class="mr-2 leading-tight" type="checkbox" v-model="selectAll">-->

                                <span v-else class="text-white text-center text-sm antialiased leading-snug tracking-normal font-sans font-semibold">Sr. No</span>
                            </div>

                            <div class="flex justify-center items-center" v-else>
                                <div v-if="header.key !== 'index'">
                                    <span class="text-white text-center text-sm antialiased leading-snug tracking-normal font-sans font-semibold">{{header.title}}</span>
                                    <!--                                    <svg class="h-4 w-4 ml-2 text-white text-center" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">-->
                                    <!--                                        <path fill-rule="evenodd" d="M10 1L5 8h10l-5-7zm0 18l5-7H5l5 7z"/>-->
                                    <!--                                    </svg>-->
                                </div>
                            </div>
                        </th>
                    </template>
                </tr>
                <tbody>
                <tr  v-for="(item,index) in tableData.data">
                    <template v-for="header in selectedColumns">
                        <td class="h-8 text-center border-b border-gray-200 text-sm text-gray-700 antialiased leading-tight tracking-normal font-sans font-normal"  v-if="typeof $scopedSlots[header.key] !== 'undefined'">
                            <slot :name="header.key" :field="header.key" :item="item" :index="index"></slot>
                        </td>
                        <td class="h-8 text-center border-b border-gray-200 text-sm text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal" v-else>
                            <div v-html="item[header.key] ? item[header.key] : ' - '"></div>
                        </td>
                    </template>
                </tr>
                </tbody>
            </table>
            <div v-else class="text-center mt-20 mb-20 text-lg font-medium">
                No Data Found !!
            </div>
        </div>
        <h5 v-else class="text-center">
            <vue-simple-spinner  message="Fetching results. Please wait ...." size="55"></vue-simple-spinner>
        </h5>
        <div v-if="!loading && tableData && tableData.data.length && location !=='batch_selected'">
            <pagination v-if="tableData.meta" :meta="tableData.meta" :links="tableData.links" :location="location"></pagination>
        </div>
    </div>
</template>

<script>
    import pagination from "./Pagination";
    import {eventBus} from 'NitsModels/_events.js';
    import Spinner from 'vue-simple-spinner'

    export default {
        name: "list-view",
        components: {pagination,Spinner},
        props: ['tableData','loading', 'selectedColumns', 'location', 'headerStyle'],

        data() {
            return {
                selectedFields: {},
                length: 0,
                selected: [],
                sort_by:'',
                elementName:'',
                key:'',
                Drop: false,
            }
        },
        computed: {
            selectAll: {
                get: function () {
                    return this.tableData.data ? this.selected.length == this.tableData.data.length : false;
                },
                set: function (value) {
                    var selected = [];

                    if (value) {
                        this.tableData.data.forEach(function (user) {
                            selected.push(user.id);
                        });
                    }

                    this.selected = selected;
                }
            },
        }
    }
</script>




<style scoped>

</style>







