<template>
    <dashboard-layout-one active="permissions">
        <base-bread-crumb-one name="Permissions" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>

<!--        <div class="flex w-full justify-center">-->
<!--            <div class="m-2 mt-3 w-3/4">-->
<!--                <site-info-widget></site-info-widget>-->
<!--                <analytics-overview></analytics-overview>-->
<!--            </div>-->
<!--            <div class="m-2 mt-3 w-1/4">-->
<!--                <email-ad></email-ad>-->
<!--                <dashboard-task-info></dashboard-task-info>-->
<!--            </div>-->
<!--        </div>-->
                <div class="flex justify-start">
                    <div class="bg-white rounded-lg m-4 w-full shadow-lg min-h-full mt-1 justify-center">
                        <div class="flex justify-between border-solid border-b-2 p-2 text-center items-center">
                            <div class="text-left ml-2 text-xl antialiased leading-snug text-teal-600 tracking-normal font-sans">User Access</div>
                            <div>
                                <button class="flex bg-yellow-400 text-gray-800 rounded px-4 py-2 focus:outline-none text-blue hover:bg-yellow-500 justify-around">
                                    <svg class="inline-block mt-1 mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16 2H7.979C6.88 2 6 2.88 6 3.98V12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10H8V4h8v8zM4 10H2v6c0 1.1.9 2 2 2h6v-2H4v-6z"/>
                                    </svg>
                                    <span class="font-medium">Add Role</span>
                                </button>
                            </div>


                        </div>
                        <div>
                            <div >
                                <input class="ml-3 mt-2 mb-2 text-xs py-1 px-4 border rounded w-2/4" placeholder="Add Users . . . ." type="text">
                            </div>
                            <table class="min-w-full">
                                <tr class="bg-teal-500 h-12">
                                    <th>
                                        <div class="flex justify-center  items-center">
                                            <span class="text-white text-center text-base antialiased leading-snug tracking-normal font-sans font-semibold">Name</span>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="flex justify-center items-center">
                                            <span class="text-white text-center text-base antialiased leading-snug tracking-normal font-sans font-semibold">Super Admin</span>
                                        </div>

                                    </th>
                                    <th>
                                        <div class="flex justify-center items-center">
                                            <span class="text-white text-center text-base antialiased leading-snug tracking-normal font-sans font-semibold">Admin</span>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="flex justify-center items-center">
                                            <span class="text-white text-center text-base antialiased leading-snug tracking-normal font-sans font-semibold">Subscriber</span>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="flex justify-center items-center">
                                            <span class="text-white text-center text-base antialiased leading-snug tracking-normal font-sans font-semibold">Analytics</span>
                                        </div>
                                    </th>
<!--                                    <th>-->
<!--                                        <div class="flex justify-center items-center">-->
<!--                                            <span class="text-white text-center text-base antialiased leading-snug tracking-normal font-sans font-semibold">Remove</span>-->
<!--                                        </div>-->
<!--                                    </th>-->
                                </tr>
                                <tr v-for="(item,index) in tableData">
                                    <td class="h-8 text-center border-b border-gray-200 text-sm text-teal-700 antialiased leading-tight tracking-normal  font-sans font-normal">{{item.name}}</td>
                                    <td class="h-8 text-center border-b border-gray-200 antialiased leading-tight tracking-normal  font-sans font-normal"><input type="checkbox" v-model="item.status_1"></td>
                                    <td class="h-8 text-center border-b border-gray-200 antialiased leading-tight tracking-normal  font-sans font-normal"><input type="checkbox" v-model="item.status_2"></td>
                                    <td class="h-8 text-center border-b border-gray-200  antialiased leading-tight tracking-normal  font-sans font-normal"><input type="checkbox" v-model="item.status_3"></td>
                                    <td class="h-8 text-center border-b border-gray-200 antialiased leading-tight tracking-normal  font-sans font-normal"><input type="checkbox" v-model="item.status_4"></td>
                                </tr>
                            </table>

                            <div class="flex items-center mt-5 ml-32">
                                 <span class="relative inline-flex ">
                                        <ul class="flex">
                                            <li class=" mr-1">
                                            <a class="rounded mt-1 py-1 px-2 inline-block bg-blue-100 text-blue-600 bg-transparent hover:bg-blue-500 hover:text-white focus:border-blue-300 transition ease-in-out duration-150" href="#">
                                              <svg class="inline-block pb-1 w-5 h-5 font" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" >
                                                  <path fill-rule="evenodd" d="M1011 1376q0 13-10 23l-50 50q-10 10-23 10t-23-10L439 983q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23L608 960l393 393q10 10 10 23zm384 0q0 13-10 23l-50 50q-10 10-23 10t-23-10L823 983q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23L992 960l393 393q10 10 10 23z"/>
                                              </svg>
                                            </a>
                                          </li>
                                          <li class=" mr-1">
                                            <a class="rounded mt-1 py-1 px-2 inline-block bg-blue-100 text-blue-600 bg-transparent hover:bg-blue-500 hover:text-white focus:border-blue-300 transition ease-in-out duration-150" href="#">
                                              <svg class="inline-block pb-1 w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                  <path fill-rule="evenodd" d="M12.452 4.516c.446.436.481 1.043 0 1.576L8.705 10l3.747 3.908c.481.533.446 1.141 0 1.574-.445.436-1.197.408-1.615 0-.418-.406-4.502-4.695-4.502-4.695a1.095 1.095 0 010-1.576s4.084-4.287 4.502-4.695c.418-.409 1.17-.436 1.615 0z"/>
                                              </svg>
                                            </a>
                                          </li>
                                             <li class="mr-1">
                                            <a class="rounded py-2 px-3 h-8 mt-1 pt-1 inline-block bg-blue-500 text-white bg-transparent hover:bg-blue-500 hover:text-white focus:border-blue-300 transition ease-in-out duration-150" href="#">
                                                1
                                              </a>
                                            </li>

                                            <li class="mr-1">
                                            <a class="rounded py-2 px-3 h-8 mt-1 pt-1 inline-block text-gray-700 bg-transparent hover:bg-blue-500 hover:text-white focus:border-blue-300 transition ease-in-out duration-150" href="#">
                                                2
                                              </a>
                                            </li>

                                            <li class="mr-1">
                                            <a class="rounded mt-1 py-1 px-2 inline-block text-gray-700 hover:bg-blue-500 hover:text-white bg-transparent" href="#">
                                               <svg class="inline-block pb-1 w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                   <path fill-rule="evenodd" d="M10.001 7.8a2.2 2.2 0 100 4.402A2.2 2.2 0 0010 7.8zm-7 0a2.2 2.2 0 100 4.402A2.2 2.2 0 003 7.8zm14 0a2.2 2.2 0 100 4.402A2.2 2.2 0 0017 7.8z"/>
                                               </svg>
                                              </a>
                                            </li>
                                            <li class="mr-1">
                                            <a class="rounded py-2 px-3 h-8 mt-1 pt-1 inline-block text-gray-700 bg-transparent hover:bg-blue-500 hover:text-white focus:border-blue-300 transition ease-in-out duration-150" href="#">
                                                8
                                              </a>
                                            </li>
                                            <li class="mr-1">
                                            <a class="rounded py-2 px-3 h-8 mt-1 pt-1 inline-block text-gray-700 bg-transparent hover:bg-blue-500 hover:text-white focus:border-blue-300 transition ease-in-out duration-150" href="#">
                                                9
                                              </a>
                                            </li>

                                            <li class="mr-1">
                                            <a class="rounded mt-1 py-1 px-2 inline-block bg-blue-100 text-blue-600 bg-transparent hover:bg-blue-500 hover:text-white focus:border-blue-300 transition ease-in-out duration-150" href="#">
                                                <svg class="inline-block pb-1 w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                   <path fill-rule="evenodd" d="M9.163 4.516c.418.408 4.502 4.695 4.502 4.695a1.095 1.095 0 010 1.576s-4.084 4.289-4.502 4.695c-.418.408-1.17.436-1.615 0-.446-.434-.481-1.041 0-1.574L11.295 10 7.548 6.092c-.481-.533-.446-1.141 0-1.576.445-.436 1.197-.409 1.615 0z"/>
                                                </svg>
                                              </a>
                                            </li>
                                            <li class="mr-1">
                                            <a class="rounded mt-1 py-1 px-2 inline-block bg-blue-100 text-blue-600 bg-transparent hover:bg-blue-500 hover:text-white focus:border-blue-300 transition ease-in-out duration-150" href="#">
                                                <svg class="inline-block pb-1 w-5 h-5" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M979 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/>
                                                </svg>
                                              </a>
                                            </li>

                                        </ul>

                                      </span>
                                <div class="flex ml-1/2">
                                    <input class="rounded w-20 h-8 pl-3 border border-blue-200 text-xs" type="text" placeholder="Page No." >
                                    <button class=" py-1 h-8 w-20 text-xs rounded shadow bg-blue-500 hover:bg-blue-600 text-white ">Go To Page</button>
                                </div>
                            </div>

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
                tableData:[{name:'', status_1:'', status_2:'', status_3:'', status_4:''}],
                roles:[]
            }
        },
        components: {
            'DashboardLayoutOne': () => import('./../Layouts/Dashboard/LayoutOne')
        },
        methods:{
            removeElement(){

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
           }

            this.$api.post('/api/permissions',routes).then(response => {
                if(response.status === 200)
                {
                    this.roles = response.data.data.map(a => ({
                        name: a.name,
                        id: a.id
                    }));
                }
            })

        }
    }
</script>

<style scoped>

</style>