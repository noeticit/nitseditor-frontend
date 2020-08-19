<template>
    <dashboard-layout-one active="model">
        <base-bread-crumb-one name="Model" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>
        <base-portlet-one title="Models">
            <div slot="toolbox">
<!--                <router-link to="/nits-admin/model/create" class="inline-flex items-center rounded-full py-2 px-4 bg-teal-400">-->
<!--                    <span class="text-center text-sm antialiased tracking-tight font-light font-sans text-white">Add new</span>-->
<!--                </router-link>-->
                <button @click="showModal" class="inline-flex items-center rounded-full shadow-lg py-2 px-4 bg-teal-500 focus:outline-none  hover:bg-blue-600">
                    <span class="text-center text-sm antialiased tracking-tight font-light font-sans text-white">Add new</span>
                </button>
            </div>
            <div v-if="!loading">
                <div class="p-4">
                    <list-view :tableData="tableData" :loading="loading"  location="form_pagination" :selectedColumns="selectedColumns" :headerStyle="headerStyle" >
                        <template slot="index" slot-scope="props" @click="dataSelection(props.item.id, $event)">
                            <input type="checkbox">
                        </template>
                        <template slot="edit" slot-scope="props">
                            <div @click.prevent="showModalEdit(props.item)" class="h-8 text-center p-2 text-sm text-teal-700 antialiased leading-tight tracking-normal  font-sans font-normal">
                                <svg class="inline-block text-orange-400 fill-current w-3 h-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32" fill="currentColor">
                                    <path fill-rule="evenodd" d="M17.56 2.44C16.12 1 15.04 1.2 15.04 1.2L8.98 7.26l-6.77 6.78L1.2 18.8l4.76-1.01 6.78-6.77 6.05-6.05s.22-1.09-1.23-2.53zM5.68 17.22l-1.62.35a3.71 3.71 0 00-.7-.94 3.74 3.74 0 00-.93-.69l.35-1.62.47-.47s.89.02 1.88 1.02c1 1 1.02 1.88 1.02 1.88l-.47.47z"/>
                                </svg>
                            </div>
                        </template>
                        <template slot="delete" slot-scope="props">
                            <div @click.prevent="removeElement(props.item.id)" class="h-8 text-center p-2 text-sm text-teal-700 antialiased leading-tight tracking-normal  font-sans font-normal">
                                <svg class="inline-block text-orange-400 fill-current w-4 h-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 1.6a8.4 8.4 0 100 16.8 8.4 8.4 0 000-16.8zm4.79 11.46l-1.73 1.73L10 11.73l-3.06 3.06-1.73-1.73L8.27 10 5.21 6.94 6.94 5.2 10 8.27l3.06-3.06 1.73 1.73L11.73 10l3.06 3.06z"/>
                                </svg>
                            </div>
                        </template>
                    </list-view>
                </div>
                <vue-tailwind-modal :showing="modalShow" class="shadow-lg">
                    <div class="items-center">
                        <div class="pr-56 pb-4">
                            <h5 class="font-semibold text-lg text-gray-700">
                                Model
                            </h5>
                        </div>
                        <div class="flex w-full">
                            <div class="px-5">
                                <nits-input-text
                                        v-model="model_name"
                                        placeholder="Enter model name"
                                        label="Model Name"
                                >
                                </nits-input-text>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4">
                        <button @click.prevent="submit" class=" bg-transparent border border-gray-500 mt-3 text-gray-500  font-semibold py-1 px-4 rounded">Save</button>
                        <button @click="closeModal" class=" bg-transparent border border-gray-500 mt-3 text-gray-500  font-semibold py-1 px-4 rounded">Close</button>
                    </div>

                </vue-tailwind-modal>
            </div>
            <h5 v-else class="text-center mt-8">
                <vue-simple-spinner  message="Fetching results. Please wait ...." size="55"></vue-simple-spinner>
            </h5>

        </base-portlet-one>
    </dashboard-layout-one>
</template>

<script>
    import Swal from 'sweetalert2';
    import {eventBus} from 'NitsModels/_events.js';
    import VueTailwindModal from 'vue-tailwind-modal'

    export default {
        name: "index",
        data() {
            return {
                modalShow:false,
                model_name:'',
                breadcrumbs: ['Models'],
                DropDownAction:false,
                search:'',
                tableData:{},
                loading: true,
                selectedColumns: [
                    { title: '', key: 'index'},
                    { title: 'Model name', key: 'name'},
                    { title: 'Edit', key: 'edit'},
                    { title: 'Delete', key: 'delete'}
                ],
                headerStyle:{
                    index: 'margin-top: 2px; width: 5%;',
                    name: 'color: white; width: 20%',
                    edit: 'color: white; width: 10%',
                    delete: 'color: white; width: 10%',
                },
                selected:[],
                table_ids:[],
                page:'',
            }
        },
        methods:{
            showModal() {
                this.modalShow = true
            },
            closeModal() {
                this.modalShow = false
            },
            submit() {
                this.error = []
                const payload = {
                    name: this.model_name,
                }

                this.$api.post('/nits-system-api/model', payload
                ).then(response => {
                    if (response.status === 200) {
                        // this.name = '',
                        this.fetchData()
                        this.modalShow= false
                    }
                })
            },
            dataSelection(item, event) {
                if (event.target.checked) {
                    this.table_ids.push( item);
                }
                else{
                    var index = _.findIndex(this.table_ids, (q) => {
                        return q === item
                    })
                    this.table_ids.splice(index,  1);
                }
            },
            showModalEdit(item){
                this.$router.push({ name: 'nits-admin-model-edit', params: { edit: item.id }})
            },
            removeElement(id){
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.value) {
                        this.$api.delete('/nits-system-api/model/'+id).then(response => {
                            if(response.status === 204)
                            {
                                Swal.fire(
                                    'Deleted!',
                                    'Your data has been Deleted.',
                                    'success'
                                ).then(() => {
                                    this.fetchData();
                                })
                            }
                        })
                    }
                })

            },
            fetchData(){
                this.$api.get('/nits-system-api/model?search='+this.search+'&page='+this.page).then(response => {
                    if(response.status === 200)
                    {
                        this.tableData = response.data
                        this.loading = false
                    }
                })
            }
        },
        components: {
            'DashboardLayoutOne': () => import('./../../Layouts/Dashboard/LayoutOne'),
            VueTailwindModal
        },
        watch:{
            search: {
                handler: 'fetchData',
                immediate: true
            }
        },
        created() {
            eventBus.$on('model_pagination', (data) => {
                this.page = data
                this.fetchData()
            })
        }
    }
</script>

<style scoped>

</style>