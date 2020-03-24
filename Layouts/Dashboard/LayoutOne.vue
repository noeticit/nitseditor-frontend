<template>
    <div class="h-screen w-screen flex-col justify-between bg-gray-200">
        <div class="pl-2 pt-1">
<!--            <img class="h-12" src="/nits-assets/images/logo.png" alt="NitsEditor Logo">-->
            <top-bar></top-bar>

        </div>
        <div class="flex h-full">
            <menu-one class="w-48 pb-6 h-full mb-8 mt-8 overflow-y-scroll"></menu-one>
            <div class="w-full p-2 bg-gray-200">

                <base-bread-crumb-one></base-bread-crumb-one>
                <div class="flex justify-around">
                    <base-portlet-one></base-portlet-one>
                </div>
                <base-table-one></base-table-one>
                <app-description></app-description>
<!--                <base-modal-one></base-modal-one>-->
                <base-dropdown-button></base-dropdown-button>
            </div>
        </div>
    </div>

</template>

<script>
    // import TopBar from
    // import TopBar from ./../Components/Base/TopBar/TopBar.vue

    export default {
        name: "DashboardLayoutOne",
        components: {


            'TopBar': () => import('../../Components/Base/TopBar/TopBar'),
            'MenuOne': () => import('../../Components/Menus/MenuOne')
        }
    }
</script>

<style scoped>

</style>