<template>
    <div>
        <div v-for="(item, index) in forms">
            <component :is="item.component" :key="index" v-bind="item.attrs"></component>
        </div>

        <div class="flex m-4 w-full">
            <button v-bind:class="{ 'spinner': loading }" class="inline-flex mt-10 items-center rounded-lg py-2 px-6 bg-teal-700" @click.prevent="submit">
                <span class="text-center text-base antialiased tracking-tight font-sans text-white cursor-pointer" >Submit</span>
            </button>
            <router-link :to="back_api" class="inline-flex mt-10 ml-2 items-center rounded-lg py-2 px-6 border border-gray-400">
                <span class="text-center text-base antialiased tracking-tight font-sans text-gray-600">Cancel</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    import Swal from 'sweetalert2';
    import {eventBus} from "../../../Models/_events";

    export default {
        name: "NitsForm",
        data() {
            return {
                errors: {},
                loading: false,
                form_data: {}
            }
        },
        props: {
            forms: Array,
            api_url: String,
            redirect_api: String,
            back_api: String,
        },
        created() {
            eventBus.$on('nits-form-input', (data) => {
                if(typeof data !== 'undefined' ||  data !== null )
                    this.form_data[data.field] = data.value
            })
        },
        methods: {
            submit() {
                this.loading = true
                this.$api.post(this.api_url, this.form_data).then(response => {
                    if (response.status === 200) {
                        Swal.fire(
                            'Created!',
                            'Your data has been created.',
                            'success'
                        ).then(() => {
                            this.$router.push({name: this.redirect_api});
                        })

                    }
                }).catch((error) => {
                    Swal.fire({
                        title: "Oops!",
                        text: error.response.data.message,
                        type: "error",
                    })
                    this.loading = false
                    this.errors = error.response.data.errors
                })
            }
        },
        watch: {
            $props: {
                handler() {
                    console.log("From form object")
                },
                deep: true
            }
        }
    }
</script>

<style scoped>

</style>