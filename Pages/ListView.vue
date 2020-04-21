<template>
    <div class="container">
        <div class="row">
            <table class="mt-4  min-w-full" v-if="tableData && tableData.data.length">
                <tr class="bg-teal-500 h-8">
                    <template v-for="header in selectedColumns">
                        <th class="text-center" v-if="typeof headerStyle[header.key] !== 'undefined'" :style="headerStyle[header.key]">
                            <div v-if="header.key === 'index'" class="ml-2 flex justify-center items-center">
                                <input class="mr-2 leading-tight" type="checkbox" v-model="selectAll">
                            </div>
                            <div class="flex justify-center ml-4" v-else-if="header.key === 'action'">
                                <svg @click="Drop = true" :class="Drop ? 'hidden' : 'block'" class="mr-2 h-10 pr-5 w-10 text-center justify-center text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10.001 7.8a2.2 2.2 0 100 4.402A2.2 2.2 0 0010 7.8zm-7 0a2.2 2.2 0 100 4.402A2.2 2.2 0 003 7.8zm14 0a2.2 2.2 0 100 4.402A2.2 2.2 0 0017 7.8z"/>
                                </svg>

                                <svg @click="Drop = false" :class="Drop ? 'block' : 'hidden'" class="mr-2 h-12 pr-5 w-12 text-center justify-center text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M12.505 8.698L10 11 7.494 8.698a.512.512 0 00-.718 0 .5.5 0 000 .71l2.864 2.807a.51.51 0 00.717 0l2.864-2.807a.498.498 0 000-.71.51.51 0 00-.716 0zM10 .4A9.6 9.6 0 00.4 10c0 5.303 4.298 9.6 9.6 9.6s9.6-4.297 9.6-9.6A9.6 9.6 0 0010 .4zm0 17.954c-4.615 0-8.354-3.74-8.354-8.354S5.385 1.646 10 1.646a8.354 8.354 0 010 16.708z"/>
                                </svg>
                                <div>
                                    <div v-if="Drop" class="block absolute right-0 w-48 bg-teal-400 rounded-lg mt-10">
                                        <a class="block px-2 py-4 text-white hover:bg-blue-600 hover:text-teal-200 " href="#">Option 1</a>
                                        <a class="block px-2 py-4 text-white hover:bg-blue-600 hover:text-teal-200 " href="#" >Option 2</a>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-center items-center" v-else>
                                <div v-if="header.key !== 'index' && header.key !== 'action'">
                                    <span class="text-white text-center text-base antialiased leading-snug tracking-normal font-sans font-semibold">{{header.title}}</span>
                                    <svg class="h-4 w-4 ml-2 text-white text-center" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 1L5 8h10l-5-7zm0 18l5-7H5l5 7z"/>
                                    </svg>
                                </div>
                            </div>
                        </th>
                    </template>
                </tr>
                <tbody>
                <tr  v-for="(item,index) in tableData.data">
                    <template v-for="header in selectedColumns">
                        <td class="h-8 text-center border-b border-gray-200 text-sm text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal"  v-if="typeof $scopedSlots[header.key] !== 'undefined'">
                            <slot :name="header.key" :field="header.key" :item="item"></slot>
                        </td>
                        <td class="h-8 text-center border-b border-gray-200 text-sm text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal" v-else>
                            {{ item[header.key] ? item[header.key] : ' - ' }}
                        </td>
                    </template>
                </tr>
                </tbody>
            </table>
            <h5 v-else class="text-center" style="margin-left: 400px">
                <strong>No Data Found</strong>
            </h5>
        </div>
<!--        <h5 v-else class="text-center">-->
<!--            <vue-simple-spinner  message="Fetching results. Please wait ...." size="55"></vue-simple-spinner>-->
<!--        </h5>-->
<!--        <div class="row" v-if="!loading && tableData && tableData.data.length">-->
<!--            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">-->
<!--                <pagination v-if="tableData.meta" :meta="tableData.meta" :links="tableData.links" :location="location"></pagination>-->
<!--            </div>-->
<!--        </div>-->
    </div>

</template>

<script>
    import pagination from "./Pagination";
    import {eventBus} from 'NitsModels/_events.js';
    import Spinner from 'vue-simple-spinner'

    export default {
        name: "list-view",
        components: {Spinner,pagination},
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
        created() {
            eventBus.$on(this.location+'_selectedFields', (data) => {
                if(typeof data.data !== 'undefined' && data.data.length)
                {
                    this.selectedFields[data.var_name] = data.data;
                    this.length = Object.keys(this.selectedFields).length;
                }
                else if(typeof this.selectedFields[data.var_name] !== 'undefined')
                {
                    delete this.selectedFields[data.var_name];
                    this.length = Object.keys(this.selectedFields).length;
                }
            });

            eventBus.$on(this.location+'_saveSearchFields', (data) => {
                this.selectedFields = {};
                this.selectedFields = data;
            });

            eventBus.$on(this.location+'_SearchSortFields', (data) => {
                if(typeof data.data !== 'undefined' && data.data !=='')
                {
                    this.selectedFields[data.var_name] = data.data;
                }
                else
                    delete this.selectedFields[data.var_name]
            });

            eventBus.$on(this.location+'_columnChange', (data) => {
                this.selectedColumns = data;
            })

        },
        methods: {
            orderBy(column) {
                if(this.selectedFields && Object.keys(this.selectedFields).length && this.selectedFields.sort_by_column && typeof this.selectedFields.sort_by_column.column !== 'undefined') {
                    if(this.selectedFields.sort_by_column && this.selectedFields.sort_by_column.column === column) {
                        if(this.selectedFields.sort_by_column.order === 'asc') {
                            const dataSet= {
                                var_name: 'sort_by_column',
                                data: {
                                    column: column,
                                    order: 'desc'
                                }
                            }
                            eventBus.$emit(this.location+'_SearchSortFields', dataSet);
                        }
                        else {
                            const dataSet= {
                                var_name: 'sort_by_column',
                                data: {
                                    column: column,
                                    order: 'asc'
                                }
                            }
                            eventBus.$emit(this.location+'_SearchSortFields', dataSet);
                        }
                    }
                    else {
                        const dataSet= {
                            var_name: 'sort_by_column',
                            data: {
                                column: column,
                                order: 'asc'
                            }
                        }
                        eventBus.$emit(this.location+'_SearchSortFields', dataSet);
                    }
                }
                else {
                    const dataSet= {
                        var_name: 'sort_by_column',
                        data: {
                            column: column,
                            order: 'asc'
                        }
                    }
                    eventBus.$emit(this.location+'_SearchSortFields', dataSet);
                }
            },
            sortBy(column) {
                if(this.selectedFields && Object.keys(this.selectedFields).length && this.selectedFields.sort_by_column && typeof this.selectedFields.sort_by_column.column !== 'undefined' && this.selectedFields.sort_by_column.column === column)
                {
                    if(typeof this.selectedFields.sort_by_column.order !== 'undefined' && this.selectedFields.sort_by_column.order === 'asc') {
                        return 'flaticon2-down';
                    }
                    else {
                        return 'flaticon2-up';
                    }
                }
                else
                {
                    return 'flaticon2-sort';
                }
            },
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







