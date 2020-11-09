 <template>
     <div class="flex flex-col">
         <div v-if="!loading">
             <div class="text-gray-700 my-2 md:px-3 font-base text-left font-medium">Showing Results {{tableData.meta.from}} to {{tableData.meta.to}} of {{tableData.meta.total}}</div>
             <div class="py-4 align-middle inline-block w-full md:px-3">
                 <div class="overflow-hidden border-b border-gray-200">
                     <table class="w-full divide-y divide-gray-200 table-auto" v-if="tableData && tableData.data.length">
                         <thead :style="table_head_color">
                         <tr>
                             <template v-for="header in selectedColumns">
                                 <th v-if="typeof headerStyle[header.key] !== 'undefined'" :style="headerStyle[header.key]" class="px-2 py-3 text-center text-sm leading-4 font-medium tracking-wider">
                                    <div v-if="header.key === 'index'">
                                        <div v-if="index_column" class="text-center text-sm leading-4 font-medium tracking-wider">Sr No.</div>
                                        <input v-else type="checkbox" v-model="selectAll">
                                    </div>
                                     <div v-else-if="header.key === 'action'">
                                         <div class="hover:bg-white flex rounded p-2 text-white hover:text-gray-600">
                                             <svg class="h-4 w-4 m-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10.001 7.8a2.2 2.2 0 100 4.402A2.2 2.2 0 0010 7.8zm-7 0a2.2 2.2 0 100 4.402A2.2 2.2 0 003 7.8zm14 0a2.2 2.2 0 100 4.402A2.2 2.2 0 0017 7.8z"/></svg>
                                         </div>
                                     </div>
                                     <div class="flex" v-else>
                                         <div  class="flex mx-auto">
                                             <div class="text-center text-base my-auto leading-4 font-medium tracking-wider" @click.prevent="orderBy(header.key)">{{ header.title }}</div>
                                             <svg class="h-4 w-4 my-auto mx-1" fill="currentColor"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#FFF" :d="'' + sortBy(header.key)" v-if="header.key !== 'action' && header.key !== 'index'"/></svg>
                                         </div>
                                     </div>
                                 </th>
                             </template>
<!--                             <th class="px-2 py-3 bg-gray-50"></th>-->
                         </tr>
                         </thead>
                         <tbody class="bg-white divide-y divide-gray-200">
                            <tr class="hover:bg-gray-100" v-for="(item,index) in tableData.data">
                                <template v-for="header in selectedColumns">
                                    <td v-if="typeof $scopedSlots[header.key] !== 'undefined'" class="px-2 py-3 whitespace-no-wrap">
                                        <div class="text-sm font-medium text-center leading-5 text-indigo-600">
                                            <slot :name="header.key" :field="header.key" :item="item" :index="index"></slot>
                                        </div>
                                    </td>
                                    <td v-else class="px-2 py-3 whitespace-no-wrap">
                                        <div class="text-sm text-center font-medium leading-5 text-gray-800">
                                            <div v-html="item[header.key] ? item[header.key] : ' - '"></div>
                                        </div>
                                    </td>
                                </template>
                             </tr>
                         </tbody>
                     </table>
                     <div v-else class="text-center my-16 text-base font-medium">
                         No Data Found !!
                     </div>
                 </div>
             </div>
         </div>
         <h5 v-else class="text-center">
             <vue-simple-spinner  message="Fetching results. Please wait ...." size="55"></vue-simple-spinner>
         </h5>
     </div>
</template>

<script>
    import pagination from "./Pagination";
    import {eventBus} from 'NitsModels/_events.js';
    import Spinner from 'vue-simple-spinner'

    export default {
        name: "NitsTableView",
        components: {pagination, Spinner},
        props: {
            headerStyle: {
                type: Object,
                default: () => {}
            },
            tableData: {
                type: Object,
                default: () => []
            },
            selectedColumns: {
                type: Array,
                default: () => []
            },
            loading: Boolean,
            table_head_color: Object,
            location: String,
            index_column: Boolean,
        },
        data() {
            return {
                selectedFields: {},
                length: 0,
                selected: [],
                sort_by:'',
                elementName:'',
                key:'',
                tableColumns:[]
            }
        },
        created() {
            this.tableColumns = this.selectedColumns

            eventBus.$on(this.location+'_selectedFields', (data) => {
                if(typeof data.var_name !== 'undefined') {

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
                }
                else  this.selectedFields = data;

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
                this.tableColumns = data;
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
                console.log(column)
                if(this.selectedFields && Object.keys(this.selectedFields).length && this.selectedFields.sort_by_column && typeof this.selectedFields.sort_by_column.column !== 'undefined' && this.selectedFields.sort_by_column.column === column)
                {
                    if(typeof this.selectedFields.sort_by_column.order !== 'undefined' && this.selectedFields.sort_by_column.order === 'asc') {
                        return 'M5 6h10l-5 9-5-9z';
                    }
                    else {
                        return 'M15 14H5l5-9 5 9z';
                    }
                }
                else
                {
                    return 'M10 1L5 8h10l-5-7zm0 18l5-7H5l5 7z';
                }
            },
        },
        computed: {
            selectAll: {
                get: function () {
                    return this.tableData.data ? this.selected.length === this.tableData.data.length : false;
                },
                set: function (value) {
                    var selected = [];

                    if (value) {
                        this.tableData.data.forEach(function (user) {
                            selected.push(user.id);
                        });
                    }
                    this.selected = selected;
                    eventBus.$emit(this.location +'_select_all', selected);
                }
            },

        }
    }
</script>


<style scoped>

</style>







