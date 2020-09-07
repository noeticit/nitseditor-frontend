 <template>
     <div class="flex flex-col">
         <div class="-my-2 sm:-mx-6 lg:-mx-8" v-if="!loading">
             <div class="text-gray-700 text-teal-600 my-2 ml-8 text-left text-md antialiased leading-none tracking-normal font-sans font-medium">Showing Results {{tableData.meta.from}} to {{tableData.meta.to}} of {{tableData.meta.total}}</div>
             <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                 <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                     <table class="min-w-full divide-y divide-gray-200" v-if="tableData && tableData.data.length">
                         <thead :class="table_head_color">
                         <tr>
                             <template v-for="header in selectedColumns">
                                 <th v-if="typeof headerStyle[header.key] !== 'undefined'" :style="headerStyle[header.key]" class="px-6 py-3 bg-gray-50 text-center text-sm leading-4 font-medium text-white tracking-wider">
                                    <div v-if="header.key === 'index'">
                                        <div v-if="index_column" class="px-6 py-3 bg-gray-50 text-center text-sm leading-4 font-medium text-white tracking-wider">Sr No.</div>
                                        <input v-else class="mr-2 leading-tight" type="checkbox" v-model="selectAll">
                                    </div>
                                     <div v-if="header.key !== 'index'">
                                         <div class="px-6 py-3 bg-gray-50 text-center text-sm leading-4 font-medium text-white tracking-wider">{{header.title}}</div>
                                     </div>
                                 </th>
                             </template>
                             <th class="px-6 py-3 bg-gray-50"></th>
                         </tr>
                         </thead>
                         <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="(item,index) in tableData.data">
                                <template v-for="header in selectedColumns">
                                    <td v-if="typeof $scopedSlots[header.key] !== 'undefined'" class="px-6 py-4 whitespace-no-wrap">
                                        <div class="text-sm leading-5 text-gray-900">
                                            <slot :name="header.key" :field="header.key" :item="item" :index="index"></slot>
                                        </div>
                                    </td>
                                    <td v-else class="px-6 py-4 whitespace-no-wrap">
                                        <div class="text-sm leading-5 text-gray-900">
                                            <div v-html="item[header.key] ? item[header.key] : ' - '"></div>
                                        </div>
                                    </td>
                                </template>
                             </tr>
                         </tbody>
                     </table>
                     <div v-else class="text-center mt-20 mb-20 text-lg font-medium">
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
        name: "NitsListView",
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
            table_head_color: String,
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
                // console.log(column)
                // console.log(this.selectedFields)
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
            emitEventForDropdown(value){
                if(value === 'follow'){
                    eventBus.$emit(this.location +'_follow');
                }
            }
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


.kt-badge--demo{
    background: red;
    color: white;
}
.kt-badge--demo2{
    background: #0debaa;
    color: white;
}


  li{
      display:inline;
      margin: 3px;
      font-size: 14px;
  }

  ul{overflow:hidden}

    th{
        font-size: 1.2rem;
        font-weight: 400;
    }
    td{
        font-size : 1.1rem;
        font-weight: 400;
    }


</style>







