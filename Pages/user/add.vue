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
                                v-model="first_name"
                        >
                        </base-input-text>
                    </div>
                    <div class="m-2 w-1/2">
                        <base-input-text
                                label="Last name"
                                placeholder="Enter last name"
                                v-model="last_name"
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
                                v-model="email"
                        >
                        </base-input-text>
                    </div>
                    <div class="m-2 w-1/2">
                        <base-input-text
                                label="Contact number"
                                placeholder="Contact number"
                                type="email"
                                v-model="mobile"
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
                                v-model="password"
                        >
                        </base-input-text>
                    </div>
                    <div class="m-2 w-1/2">
                        <base-input-text
                                label="Confirm Password *"
                                placeholder="Confirm password"
                                type="password"
                                v-model="confirm_password"
                        >
                        </base-input-text>
                    </div>
                </div>
                <div class="flex">
                    <div class="m-2 w-1/2">
                        <base-input-select
                                label="Select role *"
                                placeholder="Role"
                                :options="roles"
                                v-model="role_id"
                        >
                        </base-input-select>
                    </div>
                    <div class="flex m-2 w-1/2 items-center">
                        <div class="inline-flex mt-10 items-center rounded-full py-2 px-4 bg-teal-400">
                            <span class="text-center text-sm antialiased tracking-tight font-bold font-sans text-white" @click="submit">Save</span>
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
    import Swal from 'sweetalert2';

    export default {
        name: "user-add",
        data() {
            return {
                breadcrumbs: ['Users', 'Add'],
                roles:[],
                loading: false,
                first_name:'',
                last_name:'',
                role_id:'',
                email:'',
                mobile:'',
                password:'',
                confirm_password:'',
                errors:[],
            }
        },
        components: {
            'DashboardLayoutOne': () => import('./../../Layouts/Dashboard/LayoutOne'),
        },
        methods:{
            submit(){
                this.loading = true

                const postData = {
                    first_name : this.first_name,
                    last_name : this.last_name,
                    email : this.email,
                    contact_number : this.mobile,
                    password : this.password,
                    password_confirmation : this.confirm_password,
                    role_id : this.role_id,
                }
                this.$api.post('/api/users',postData).then(response => {
                    if(response.status === 200)
                    {
                        Swal.fire(
                            'Created!',
                            'User has been created.',
                            'success'
                        ).then(() => {
                            this.$router.push('/nits-admin/users')
                        })
                    }
                }).catch((error) => {
                    Swal.fire({
                        title: "Oops!",
                        text: error.response.data.message,
                        type: "error",
                    })
                    this.errors = error.response.data.errors
                    this.loading = false
                })
            },
        },
        created() {
            this.$api.get('/api/roles').then(response => {
                if(response.status === 200)
                {
                    this.roles = response.data.data.map(a => ({
                        label: a.name,
                        value: a.id
                    }));
                }
            })
        }
    }
</script>

<style scoped>

</style>