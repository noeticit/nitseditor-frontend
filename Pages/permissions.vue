<template>
    <dashboard-layout-one active="permissions">
<!--        <base-bread-crumb-one name="Permissions" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>-->

        <div class="overflow-y-auto h-screen">
            <div class="bg-white  mb-16 rounded-lg shadow-lg mt-20 ml-8 mr-4 min-h-full justify-center">
                <div class="flex justify-between border-solid border-b-2 p-2 text-center items-center">
                    <div class="text-left ml-4 text-xl antialiased leading-snug text-gray-900 tracking-normal font-medium font-sans">Permissions</div>

                    <div class="text-right flex">
                        <button @click.prevent="submit" class="inline-flex ml-1 mr-3 items-center rounded p-2 bg-teal-500">
                            <svg class="inline-block text-white fill-current w-5 h-5 "  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16 10c0 .55-.05 1-.6 1H11v4.4c0 .55-.45.6-1 .6s-1-.05-1-.6V11H4.6c-.55 0-.6-.45-.6-1s.05-1 .6-1H9V4.6c0-.55.45-.6 1-.6s1 .05 1 .6V9h4.4c.55 0 .6.45.6 1z"/>
                            </svg>
                            <span class="text-center mr-2 text-sm antialiased tracking-wide leading-snug font-semibold font-sans text-white"><a href="#">Add Role</a></span>
                        </button>
                    </div>
                </div>

                <input type="text" v-model="search" class="w-1/4 h-10 ml-8 border border-teal-400 mt-4 py-1 px-2 bg-white rounded placeholder-teal-600 text-sm focus:outline-none antialiased tracking-wide font-medium text-teal-600 leading-normal" placeholder="Search...">

                <div class="p-4 mt-4">
                    <!--                <list-view :tableData="pages" :loading="loading"  location="permissions" :selectedColumns="selectedColumns" :headerStyle="headerStyle" >-->

                    <!--                </list-view>-->
                    <table class="min-w-full">
                        <tr class="bg-teal-500 h-12">
                            <th>
                                <div class="flex justify-center  items-center">
                                    <span class="text-white text-center text-base antialiased leading-snug tracking-normal font-sans font-semibold">Page name</span>
                                </div>
                            </th>
                            <th v-for="(item,index) in roles">
                                <div class="flex justify-center  items-center">
                                    <span class="text-white text-center text-base antialiased leading-snug tracking-normal font-sans font-semibold">{{item.name}}</span>
                                </div>
                            </th>
                        </tr>
                        <tr v-for="(item,index) in pages">
                            <td class="h-8 text-center border-b border-gray-200 text-sm text-teal-700 antialiased leading-tight tracking-normal  font-sans font-normal">{{item.name}}</td>
                            <template v-for="header in roles">
                                <td class="h-8 text-center border-b border-gray-200 antialiased leading-tight tracking-normal  font-sans font-normal"><input type="checkbox" :checked="item[header.id]"  @click="dataSelection(item.id, $event, header.id)"></td>
                            </template>
                        </tr>
                    </table>
                </div>

            </div>
        </div>

    </dashboard-layout-one>
</template>

<script>
    export default {
        name: "permissions",
        data() {
            return {
                breadcrumbs: ['Permissions'],
                roles:[],
                pages:{},
                selectedColumns: [
                    { title: '', key: 'index'},
                    { title: 'Page Name', key: 'name'},
                ],
                headerStyle:{
                    index: 'margin-top: 2px; width: 5%;',
                    God: 'color: white; width: 15%',
                },
                selected:[],
                table_ids:[],
                tableData:[],
                selectedFields: {},
                loading: true,
                page: '',
                search:'',
                role_id:'',
            }
        },
        components: {
            'DashboardLayoutOne': () => import('./../Layouts/Dashboard/LayoutOne')
        },
        methods:{
            dataSelection(page_id, event, role_id) {
                let postData = {
                    role_id: role_id,
                    checked: event.target.checked
                };
                this.$api.update('/nits-system-api/page/'+page_id, postData).then(response => {
                    if (response.status === 200)
                    {
                    }
                })
            },
            removeElement(){

            },
            submit(){
                console.log(this.pages)
            }
        },
        created() {
           const routes = {
               routes: this.$router.options.routes.map((d) => {
                   return {
                       name: d.name,
                       path: d.path
                   }
               })
           };

            this.$api.post('/nits-system-api/page-permissions',routes).then(response => {
                if(response.status === 200)
                {
                    this.pages = response.data.data;
                    this.roles = response.data.roles;
                    this.loading = false
                }
            })

        }
    }
</script>

<style scoped>

</style>