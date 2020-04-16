<template>
    <dashboard-layout-one active="users">
        <base-bread-crumb-one name="Add Users" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>
        <div class="mt-4 flex justify-center bg-white">
            <div class="m-2 w-1/2">
                <div>Enter the details</div>
                <div class="flex">
                    <div class="m-2 w-1/2">
                        <base-input-text
                                label="First name *"
                                placeholder="Enter first name"
                        >
                        </base-input-text>
                    </div>
                    <div class="m-2 w-1/2">
                        <base-input-text
                                label="Last name"
                                placeholder="Enter last name"
                        >
                        </base-input-text>
                    </div>
                </div>
                <div class="flex">
                    <div class="m-2 w-1/2">
                        <base-input-text
                                label="Email *"
                                placeholder="Enter email"
                                type="email"
                        >
                        </base-input-text>
                    </div>
                    <div class="m-2 w-1/2">
                        <base-input-text
                                label="Contact number"
                                placeholder="Contact number"
                                type="email"
                        >
                        </base-input-text>
                    </div>
                </div>
                <div class="flex">
                    <div class="m-2 w-1/2">
                        <base-input-text
                                label="Password *"
                                placeholder="Password"
                                type="password"
                        >
                        </base-input-text>
                    </div>
                    <div class="m-2 w-1/2">
                        <base-input-text
                                label="Confirm Password *"
                                placeholder="Confirm password"
                                type="password"
                        >
                        </base-input-text>
                    </div>
                </div>
                <div class="flex">
                    <div class="m-2 w-1/2">
                        <base-input-select
                                label="Select role *"
                                placeholder="Role"
                                :options="options"
                        >
                        </base-input-select>
                    </div>
                    <div class="flex m-2 w-1/2 items-center">
                        <div class="inline-flex mt-10 items-center rounded-full py-2 px-4 bg-teal-400">
                            <span class="text-center text-sm antialiased tracking-tight font-bold font-sans text-white">Add/Save</span>
                        </div>
                        <router-link to="/nits-admin/users" class="inline-flex mt-10 ml-2 items-center rounded-full py-2 px-4 bg-red-400">
                            <span class="text-center text-sm antialiased tracking-tight font-bold font-sans text-white">Cancel</span>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="m-2 w-1/2">
                <img class="h-auto w-auto object-fill object-center" src="/nits-assets/images/add_user.png" alt="Add user">
            </div>
        </div>
    </dashboard-layout-one>
</template>

<script>
    export default {
        name: "user-add",
        data() {
            return {
                breadcrumbs: ['Users', 'Add'],
                options: [
                    {label: 'Super admin', value: 1},
                    {label: 'Admin', value: 2},
                    {label: 'Subscriber', value: 3},
                    {label: 'Guest', value: 4},
                ]
            }
        },
        components: {
            'DashboardLayoutOne': () => import('./../../Layouts/Dashboard/LayoutOne'),
        }
    }
</script>

<style scoped>

</style>