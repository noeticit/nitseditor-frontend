<template>
    <dashboard-layout-one active="users">
        <base-bread-crumb-one name="Users" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>
        <div class="flex w-full justify-center">
            <div class="bg-white rounded-lg m-4 w-full shadow-lg mt-1 min-h-full justify-center">

                <div class="flex justify-between border-solid border-b-2 p-2 text-center items-center">

                    <div class="text-left ml-2 text-xl antialiased leading-snug text-teal-600 tracking-normal font-sans font-medium">Users</div>

                    <div class="inline-flex mr-6">
                        <button class="bg-indigo-400 hover:bg-indigo-500  text-white font-semibold hover:text-white py-2 px-4 hover:border-indigo-500 rounded-l">
                            Export
                        </button>
                        <button class="bg-yellow-400 hover:bg-yellow-500  text-white font-semibold focus:outline-none hover:text-white py-2 px-4  hover:border-yellow-500 ">
                            <a href="user/add">Add User</a>
                        </button>
                    </div>

                </div>

                <div v-if="!loading">

                    <div class="p-4 mt-4">
                        <div class="text-left ml-4 text-base font-medium antialiased text-teal-600 leading-snug tracking-normal font-sans">Showing results {{tableData.meta.from}} to {{tableData.meta.to}} of {{tableData.meta.total}}</div>
                        <list-view :tableData="tableData" :loading="loading"  location="users" :selectedColumns="selectedColumns" :headerStyle="headerStyle" >
                            <template slot="index" slot-scope="props">
                                <input type="checkbox">
                            </template>
                            <template slot="action" slot-scope="props">
                                <div class="flex justify-center ">
                                    <svg @click="DropDownAction = true" :class="DropDownAction ? 'hidden' : 'block'" class="mr-2 h-10 pr-5 w-10  justify-center text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10.001 7.8a2.2 2.2 0 100 4.402A2.2 2.2 0 0010 7.8zm-7 0a2.2 2.2 0 100 4.402A2.2 2.2 0 003 7.8zm14 0a2.2 2.2 0 100 4.402A2.2 2.2 0 0017 7.8z"/>
                                    </svg>

                                    <svg @click="DropDownAction = false" :class="DropDownAction ? 'block' : 'hidden'" class="mr-2 h-12 pr-5 w-12 text-center justify-center text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M12.505 8.698L10 11 7.494 8.698a.512.512 0 00-.718 0 .5.5 0 000 .71l2.864 2.807a.51.51 0 00.717 0l2.864-2.807a.498.498 0 000-.71.51.51 0 00-.716 0zM10 .4A9.6 9.6 0 00.4 10c0 5.303 4.298 9.6 9.6 9.6s9.6-4.297 9.6-9.6A9.6 9.6 0 0010 .4zm0 17.954c-4.615 0-8.354-3.74-8.354-8.354S5.385 1.646 10 1.646a8.354 8.354 0 010 16.708z"/>
                                    </svg>
                                    <div>
                                        <div v-if="DropDownAction" class="block absolute right-0 w-48 bg-teal-400 rounded-lg mt-10">
                                            <a class="block px-2 py-4 text-white hover:bg-blue-600 hover:text-teal-200 " href="#">Edit</a>
                                            <a class="block px-2 py-4 text-white hover:bg-blue-600 hover:text-teal-200 " href="#" >Delete</a>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </list-view>
                    </div>

                </div>
                <h5 v-else class="text-center mt-8">
                    <vue-simple-spinner  message="Fetching results. Please wait ...." size="55"></vue-simple-spinner>
                </h5>

            </div>
        </div>
    </dashboard-layout-one>
</template>

<script>
    import ListView from "./ListView";
    export default {
        name: "users",
        data() {
            return {
                breadcrumbs: ['Users', 'Second Link', 'Third Link', 'Fourth Link'],
                DropDownAction:false,
                search:'',
                tableData:{
                    data:[]
                },
                columnSort: false,
                loading: true,
                selectedColumns: [
                    { title: '', key: 'index'},
                    { title: 'User Name', key: 'name'},
                    { title: 'User Role', key: 'user_role'},
                    { title: 'Email', key: 'email'},
                    { title: 'Mobile', key: 'mobile'},
                    { title: 'Action', key: 'action'}
                ],
                headerStyle:{
                    index: 'margin-top: 2px; width: 5%;',
                    name: 'color: white; width: 15%',
                    user_role: 'color: white; width: 15%',
                    email: 'color: white; width: 15%',
                    mobile: 'color: white; width: 10%',
                    action: 'color: white; width: 10%',
                },
            }
        },
        components: {
            ListView,
            'DashboardLayoutOne': () => import('./../Layouts/Dashboard/LayoutOne'),
        },
        methods:{
            openColumnModal(){
                this.columnSort = true
            },
            closeColumnModal(){
                this.columnSort = false
            },
            fetchData(){
                this.$api.get('/api/users-search?search='+this.search).then(response => {
                    if(response.status === 200)
                    {
                        this.tableData = response.data
                        this.loading = false
                    }
                })
            }
        },
        created() {
           this.fetchData();
        }
    }
</script>

<style scoped>

</style>