<template>
    <dashboard-layout-one active="model">
        <base-bread-crumb-one name="Add Model" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>
        <div class="flex w-full justify-center">
            <div class="m-2 w-full  overflow-y-auto h-screen">
                <div class="bg-white mb-32 rounded-lg shadow-lg mt-1 min-h-full jsutify-center">
                    <div class="flex justify-between border-solid border-b-2 p-2 text-center items-center">
                        <div class="text-left ml-4 mt-2 mb-2 text-xl antialiased leading-snug text-gray-900 tracking-normal font-medium font-sans"> Model Create </div>
                    </div>
                    <div class="p-4">
                        <div class="mt-4 flex justify-center bg-white">
                            <div class="m-2 w-full">
                                <div class="m-2 mt-4 w-1/3">
                                    <nits-input-text
                                            v-model="model_name"
                                            placeholder="Enter model name"
                                            label="Model Name"
                                    >
                                    </nits-input-text>
                                </div>
                                <div class="flex m-4 w-full">
                                    <div class="inline-flex mt-10 items-center rounded-lg py-2 px-6 bg-teal-700">
                                        <span class="text-center text-base antialiased tracking-tight font-sans text-white cursor-pointer" @click.prevent="submit">Submit</span>
                                    </div>
                                    <router-link to="/nits-admin/model" class="inline-flex mt-10 ml-2 items-center rounded-lg py-2 px-6 border border-gray-400">
                                        <span class="text-center text-base antialiased tracking-tight font-sans text-gray-600">Cancel</span>
                                    </router-link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </dashboard-layout-one>
</template>

<script>
    import RowElement from "../../Components/Builder/RowElement";
    import {eventBus} from "NitsModels/_events";
    import Swal from 'sweetalert2';

    export default {
        name: "edit",
        data(){
            return{
                breadcrumbs: ['Model', 'Add'],
                model_name:'',
            }
        },
        created() {
            this.listenToEvents();
        },
        components: {
            RowElement,
            'DashboardLayoutOne': () => import('./../../Layouts/Dashboard/LayoutOne'),
        },
       methods:{
           submit() {
               this.error = []
               const payload = {
                   name: this.model_name,
               }

               this.$api.post('/nits-system-api/model', payload
               ).then(response => {
                   if (response.status === 200) {
                       Swal.fire(
                           'Created!',
                           'Your data has been created.',
                           'success'
                       ).then(() => {
                           this.$router.push('/nits-admin/model')
                       })

                   }
               })
           },
       }
    }
</script>

<style scoped>



</style>