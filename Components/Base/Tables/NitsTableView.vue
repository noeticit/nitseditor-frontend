 <template>
    <div class="container">
        <slot name="total_result_dropdown"></slot>
        <br/>
         <div class="row" v-if="!loading">
            <table class="m-4 w-full" v-if="tableData.data && tableData.data.length">
                <thead :style="table_color">
                <tr class="bg-teal-500 h-8">
                    <template v-for="header in tableColumns">
                        <th class="text-center" v-if="typeof headerStyle[header.key] !== 'undefined'" :style="headerStyle[header.key]">

                            <input class="mr-2 leading-tight" v-if="header.key === 'index'" type="checkbox" v-model="selectAll">
                            <a v-if="header.key === 'index'">Sr No.</a>

                            <a v-if="header.key === 'edit' && ['crm'].includes(location)">Edit</a>

                            <div v-else-if="header.key === 'action'" class="kt-portlet__head-toolbar">
                                <div class="dropdown dropdown-inline " v-if="!['awards', 'empanelments_r_f_p'].includes(location)" >
                                    <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-md" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="flaticon-more-1"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right" v-if="!['projects','companies','awards'].includes(location)">
                                        <ul class="kt-nav">
                                            <li class="kt-nav__item" v-if="!['empanelments'].includes(location)">
                                                <a href="#" class="kt-nav__link" @click.prevent="emitEventForDropdown('follow')">
                                                    <i class="kt-nav__link-icon flaticon2-pie-chart-1"></i>
                                                    <span class="kt-nav__link-text" v-if="location==='projects'">Follow/UnFollow Project</span>
                                                    <span class="kt-nav__link-text" v-if="location==='companies'">Follow/UnFollow Company</span>
                                                    <span class="kt-nav__link-text" v-if="location==='tenders'">Follow/UnFollow Tender</span>
                                                </a>
                                            </li>
                                            <li class="kt-nav__item" v-if="!['companies','projects','tenders'].includes(location)">
                                                <a href="#" class="kt-nav__link">
                                                    <i class="kt-nav__link-icon flaticon2-line-chart"></i>
                                                    <span class="kt-nav__link-text">Download Profile</span>
                                                </a>
                                            </li>
                                            <li class="kt-nav__item" v-if="!['companies','projects','tenders'].includes(location)">
                                                <a href="#" class="kt-nav__link">
                                                    <i class="kt-nav__link-icon flaticon2-send"></i>
                                                    <span class="kt-nav__link-text">Export in Excel</span>
                                                </a>
                                            </li>
                                            <li class="kt-nav__item" v-if="!['tenders','companies','projects','empanelments',
                                            'tenders'].includes(location)">
                                                <a href="#" class="kt-nav__link">
                                                    <i class="kt-nav__link-icon flaticon2-avatar"></i>
                                                    <span class="kt-nav__link-text">Add Reminder</span>
                                                </a>
                                            </li>

                                            <li class="kt-nav__item" v-if="!['tenders','companies','projects','empanelments','tenders'].includes(location)">
                                                <a href="#" class="kt-nav__link">
                                                    <i class="kt-nav__link-icon flaticon2-settings"></i>
                                                    <span class="kt-nav__link-text">Ask Analyst</span>
                                                </a>
                                            </li>
<!--                                            <li class="kt-nav__item" v-if="!['tenders','companies','empanelments'].includes(location)">-->

                                            <li class="kt-nav__item" v-if="!['tenders','companies','projects','empanelments','tenders'].includes(location)">

                                                <a href="#" class="kt-nav__link">
                                                    <i class="kt-nav__link-icon flaticon2-pie-chart-1"></i>
                                                    <span class="kt-nav__link-text">Add to CRM</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <span v-else @click.prevent="orderBy(header.key)">{{ header.title }} <i :class="'' + sortBy(header.key)" v-if="header.key !== 'action' && header.key !== 'index' && !['user_session_profile'].includes(location) "></i></span>
                        </th>
                        <th class="text-center" v-else >
                            <input class="mr-2 leading-tight" v-if="header.key === 'index' && ! ['analytics_companies'].includes(location) " type="checkbox" v-model="selectAll">
                            <p v-if="header.key === 'index' && ['analytics_companies'].includes(location)">Sr No.</p>
                            <div v-else-if="header.key === 'action'" class="kt-portlet__head-toolbar" >
                                <div class="dropdown dropdown-inline" v-if="!['awards', 'empanelments_r_f_p'].includes(location)">
                                    <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-md" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="flaticon-more-1"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <ul class="kt-nav">
                                            <li class="kt-nav__item">
                                                <a href="#" class="kt-nav__link">
                                                    <i class="kt-nav__link-icon flaticon2-line-chart"></i>
                                                    <span class="kt-nav__link-text">Download Profile</span>
                                                </a>
                                            </li>
                                            <li class="kt-nav__item">
                                                <a href="#" class="kt-nav__link">
                                                    <i class="kt-nav__link-icon flaticon2-send"></i>
                                                    <span class="kt-nav__link-text">Export in Excel</span>
                                                </a>
                                            </li>
                                            <li class="kt-nav__item">
                                                <a href="#" class="kt-nav__link">
                                                    <i class="kt-nav__link-icon flaticon2-pie-chart-1"></i>
                                                    <span class="kt-nav__link-text">Follow Project</span>
                                                </a>
                                            </li>
                                            <li class="kt-nav__item" >
                                                <a href="#" class="kt-nav__link">
                                                    <i class="kt-nav__link-icon flaticon2-avatar"></i>
                                                    <span class="kt-nav__link-text">Add Reminder</span>
                                                </a>
                                            </li>
                                            <li class="kt-nav__item"  >
                                                <a href="#" class="kt-nav__link">
                                                    <i class="kt-nav__link-icon flaticon2-settings"></i>
                                                    <span class="kt-nav__link-text">Ask Analyst</span>
                                                </a>
                                            </li>
                                            <li class="kt-nav__item">
                                                <a href="#" class="kt-nav__link">
                                                    <i class="kt-nav__link-icon flaticon2-pie-chart-1"></i>
                                                    <span class="kt-nav__link-text">Add to CRM</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <span v-else @click.prevent="orderBy(header.key)">{{ header.title }} <i :class="'' + sortBy(header.key)" v-if="header.key !== 'action' && header.key !== 'index' && !['empanelments_r_f_p','user_session_profile'].includes(location)"></i></span>
                        </th>
                    </template>
                </tr>
                </thead>
                <tbody>
                <tr  v-for="(item,index) in tableData.data">
                    <template v-for="header in selectedColumns">
                        <td  class="h-8 text-center border-b border-gray-200 text-sm text-gray-700 antialiased leading-tight tracking-normal font-sans font-normal"  v-if="typeof $scopedSlots[header.key] !== 'undefined'">
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
        <div class="row" v-if="!loading && tableData.data && tableData.data.length">
            <div v-if="!['regional-volume'].includes(location)">
                <pagination v-if="location!=='projects' && tableData.meta && tableData.meta.total > 15" :meta="tableData.meta" :links="tableData.links" :location="location"></pagination>
                <pagination v-if="location==='projects' && tableData.meta " :meta="tableData.meta" :links="tableData.links" :location="location"></pagination>
            </div>
        </div>
    </div>

</template>

<script>
    import pagination from "./Pagination";
    import {eventBus} from 'NitsModels/_events.js';
    import Spinner from 'vue-simple-spinner'

    export default {
        name: "PageView",
        components: {pagination, Spinner},
        props: ['tableData','loading', 'selectedColumns', 'location', 'headerStyle', 'table_color'],

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







