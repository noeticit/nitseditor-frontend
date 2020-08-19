<template>
    <dashboard-layout-one active="model">
        <base-bread-crumb-one name="Add Model" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>
        <div class="m-2 overflow-y-auto h-screen w-full">
            <div class="bg-white mb-48 mt-5 mr-4 min-h-full justify-center">
                <div class="relative px-5 bg-gray-200 mt-10 mb-32 h-screen mb-10">

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

       }
    }
</script>

<style scoped>



</style>