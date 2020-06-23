<template>
    <div class="w-full">
        <div class="flex-col bg-white mt-1 h-full justify-center">
            <div class="p-2 text-center items-center">
                <ul class="list-reset px-10 w-full flex border-b">
                    <li class="px-5 py-5 flex cursor-pointer" v-for="(item, key, index) in contents"  @click="activeTab = key">
                        <div>
                            <svg class="ml-16 pr-2 focus:text-blue-500 h-12 w-12 text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" :d="item.icon"/>
                            </svg>
                            <span class="bg-white hover:border-b hover:border-teal-500 inline-block py-2 px-5 text-teal-500 font-semibold">{{key}}</span>
                        </div>
                        <div>
                            <svg class="ml-8 pr-2 mt-6 focus:text-blue-500 h-8 w-8 text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M9.163 4.516c.418.408 4.502 4.695 4.502 4.695a1.095 1.095 0 010 1.576s-4.084 4.289-4.502 4.695c-.418.408-1.17.436-1.615 0-.446-.434-.481-1.041 0-1.574L11.295 10 7.548 6.092c-.481-.533-.446-1.141 0-1.576.445-.436 1.197-.409 1.615 0z"/>
                            </svg>
                        </div>
                    </li>
                </ul>
                <div v-for="(item, key, index) in contents" v-show="key === activeTab" class="mb-3 relative border-black mx-2">
                    <div style="height:578px; " class="ml-48 pl-10 mr-64">
                        <div class="justify-between pt-4 pb-4 mt-3 text-center items-center">
                            <div class="text-left text-lg focus:text-blue-500 font-semibold subpixel-antialiased capitalize text-gray-600 leading-snug tracking-normal">{{item.title}}</div>
                        </div>
                        <nits-grid v-bind="grid">
                            <component v-for="(element, element_key, form_index) in item.forms" :key="element_key" :is="element.type" v-bind="element.attrs" v-model="element.value" :error="errors[element_key]" @input="listensToEvent(key, element_key)"></component>
                        </nits-grid>
                        <div class="border-b mt-8"></div>
                        <div class="relative justify-end mt-8 mr-5">
                            <button v-if="next(key)" @click="nextTab(key)" class="bg-blue-500 absolute right-0 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded">
                                Next
                            </button>
                            <button v-bind:class="{ 'spinner': loading }" v-else  @click="submit()" class="absolute right-0 uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">Submit</button>
                            <button @click="previousTab(key)" v-if="previous(key)" class="bg-transparent hover:text-gray-700 absolute left-0 text-gray-500 font-semibold py-2 px-6 border border-gray-500 hover:border-gray-700 rounded">
                                Preview
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swal from "sweetalert2";

    export default {
        name: "NitsWizardTwo",
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