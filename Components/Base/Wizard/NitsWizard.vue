<template>
    <div class="relative py-8 mb-10 h-full w-full">
        <div class="flex-col  mt-1 h-full w-full justify-center">
            <div class="text-center items-center">
                <div class="list-reset w-full flex">
                    <button v-for="(item, key, index) in contents" @click="activeTab = key" class="w-1/4 bg-gray-200 px-8 mr-2 rounded focus:outline-none ml-2 focus:bg-white py-5 cursor-pointer focus:text-blue-500">
                        <span class="hover:border-b hover:border-teal-500 inline-block py-2 px-5 text-teal-500 font-semibold">{{key}}</span>
                    </button>
                </div>
            </div>

            <div v-for="(item, key, index) in contents" v-show="key === activeTab" class="mb-3 relative pt-6 w-full rounded-b bg-white border-black mx-2">
                <div class="ml-48 pl-10 mr-64 h-full pr-32">
                    <div class="justify-between p-4 mt-3 text-center items-center">
                        <div class="text-left text-lg focus:text-blue-500 font-semibold subpixel-antialiased capitalize text-gray-600 leading-snug tracking-normal">{{item.title}}</div>
                    </div>
                    <nits-grid class="ml-16 pl-12" v-bind="grid">
                        <component v-for="(element, element_key, form_index) in item.forms" :key="element_key" :is="element.type" v-bind="element.attrs" v-model="element.value" :error="errors[element_key]" @input="listensToEvent(key, element_key)"></component>
                    </nits-grid>
                    <div class="border-b mt-8"></div>
                    <div class="relative justify-end mt-8 mr-5 ml-5">
                        <button @click="previousTab(key)" v-if="previous(key)" class="bg-blue-500 absolute left-0 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded">
                            Previous
                        </button>
                        <!-- component -->
                        <button v-if="next(key)" @click="nextTab(key)" class="bg-transparent hover:text-gray-700 absolute right-0 text-gray-500 font-semibold py-2 px-6 border border-gray-500 hover:border-gray-700 rounded">
                            Next
                        </button>
                        <button v-bind:class="{ 'spinner': loading }" v-else  @click="submit()" class="absolute right-0 uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swal from "sweetalert2";

    export default {
        name: "NitsWizard",
        data() {
            return {
                errors: {},
                loading: false,
                activeTab: ''
            }
        },
        props: {
            contents: Object,
            api_url: String,
            redirect: String,
            back_url: String,
            grid: Object,
            active: String
        },
        created() {
            if(this.active) this.activeTab = this.active;
            else this.activeTab = Object.keys(this.contents)[0]
        },
        methods:{
            listensToEvent(tab, field) {
                if(typeof this.contents[tab].forms !== 'undefined') {
                    Object.keys(this.contents[tab].forms).forEach((key) => {
                        if(typeof this.contents[tab].forms[key].listensTo !== 'undefined' && this.contents[tab].forms[key].listensTo.length && this.contents[tab].forms[key].listensTo.includes(field)) {
                            this.contents[tab].forms[key].attrs.query[field] = this.contents[tab].forms[field].value;
                            // console.log(this.forms[key].listensTo)
                            // console.log('Coming from '+ field+' for field '+key);
                            console.log(this.contents[tab].forms)
                        }
                    });
                }
            },
            next(key) {
                var keys = Object.keys(this.contents);
                var i = keys.indexOf(key);
                return i !== -1 && keys[i + 1] && this.contents[keys[i + 1]];
            },
            nextTab(key) {
                var keys = Object.keys(this.contents);
                var i = keys.indexOf(key);
                this.activeTab = keys[i+1];
            },
            previous(key) {
                var keys = Object.keys(this.contents);
                var i = keys.indexOf(key);
                return i !== -1 && keys[i - 1] && this.contents[keys[i - 1]];
            },
            previousTab(key) {
                var keys = Object.keys(this.contents);
                var i = keys.indexOf(key);
                this.activeTab = keys[i-1];
            },
            submit() {
                this.loading = true
                const postData = {};
                Object.keys(this.contents).forEach((key) => {
                    Object.keys(this.contents[key].forms).forEach((form_key) => {
                        postData[form_key] = this.contents[key].forms[form_key].value
                    });
                })

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
            }
        }
    }
</script>

<style scoped>

</style>