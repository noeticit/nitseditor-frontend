<template>
    <div>
        <nits-grid v-bind="grid">
            <component v-for="(element, key, form_index) in forms" :key="key" :is="element.type" v-bind="element.attrs" v-model="element.value" :error="errors[key]" @input="listensToEvent(key)"></component>
        </nits-grid>
        <div class="flex m-4 w-full">
<!--            <div class="inline-flex mt-10 items-center rounded-lg py-2 px-6 bg-teal-700">-->
<!--                <span class="text-center text-base antialiased tracking-tight font-sans text-white cursor-pointer" @click.prevent="submit">Submit</span>-->
<!--            </div>-->
            <button v-bind:class="{ 'spinner': loading }" class="inline-flex mt-10 items-center rounded-lg py-2 px-6 bg-teal-700" @click.prevent="submit">
                <span class="text-center text-base antialiased tracking-tight font-sans text-white cursor-pointer" >Submit</span>
            </button>
            <router-link :to="back_url" class="inline-flex mt-10 ml-2 items-center rounded-lg py-2 px-6 border border-gray-400">
                <span class="text-center text-base antialiased tracking-tight font-sans text-gray-600">Cancel</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    import Swal from 'sweetalert2';

    export default {
        name: "NitsForm",
        data() {
            return {
                errors: {},
                loading: false,
            }
        },
        props: {
            forms: Object,
            api_url: String,
            redirect: String,
            back_url: String,
            grid: Object
        },
        methods: {
            submit() {
                this.loading = true
                const postData = {};
                Object.keys(this.forms).forEach((key) => {
                    postData[key] = this.forms[key].value
                });
                this.$api.post(this.api_url, postData).then(response => {
                    if (response.status === 200) {
                        Swal.fire(
                            'Created!',
                            'Your data has been created.',
                            'success'
                        ).then(() => {
                            this.$router.push({name: this.redirect});
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
            },
            listensToEvent(field) {
                Object.keys(this.forms).forEach((key) => {
                    if(typeof this.forms[key].listensTo !== 'undefined' && this.forms[key].listensTo.length && this.forms[key].listensTo.includes(field)) {
                        this.forms[key].attrs.query[field] = this.forms[field].value;
                        // console.log(this.forms[key].listensTo)
                        // console.log('Coming from '+ field+' for field '+key);
                        console.log(this.forms)
                    }
                });

            }
        },
        created() {
            console.log(this.forms)
        }
    }
</script>

<style scoped>

</style>