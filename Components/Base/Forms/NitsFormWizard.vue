<template>
   <div>
       <div>
           <ul class="list-reset pb-5 mt-5 w-full flex border-b">
               <li class="-mb-px hover:text-blue-700 px-2 w-48 cursor-pointer text-center" v-for="(item, index) in forms"  @click="activeTab = index">
                   <svg class="ml-16 focus:text-blue-500 h-10 w-10 mb-3 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                       <path fill-rule="evenodd" :d="item.icon"/>
                   </svg>
                   <span class="text-sm focus:text-blue-500 hover:text-blue-500 font-semibold subpixel-antialiased capitalize text-gray-600">{{item.title}}</span>
               </li>
           </ul>
<!--           <div class="flex justify-between border-solid border-b-2 p-2 text-center items-center"></div>-->

           <div class="p-4" v-for="(item, index) in forms" v-show="activeTab === index">
               <div class="justify-between p-4 mt-3 text-center items-center">
                   <div class="pl-8 text-left text-lg focus:text-blue-500 font-semibold subpixel-antialiased capitalize text-gray-600 leading-snug tracking-normal">{{item.title}}</div>
               </div>
               <div class="ml-10 mr-10">
                   <component :is="item.component" v-bind="item.attrs"></component>
               </div>
               <div class="flex mt-10">
                   <button v-if="index !== 0" class="border border-teal-500 text-teal-500 block rounded-sm font-bold py-3 ml-16 px-5 mr-2 flex items-center hover:bg-teal-500 hover:text-white"  @click="activeTab = (index -1)">
                       <svg class="h-5 w-5 mr-2 fill-current" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-49 141 512 512" style="enable-background:new -49 141 512 512;" xml:space="preserve">
                           <path id="XMLID_10_" d="M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z"></path>
                        </svg>
                       Previous
                   </button>
                   <button v-if="index !== (forms.length-1)" class="border border-teal-500 bg-teal-500 text-white block rounded-sm font-bold py-3 px-4 ml-64 flex items-center" @click="activeTab = (index+1)">
                       Next Step
                       <svg class="h-5 w-5 ml-2 fill-current" clasversion="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="-49 141 512 512" style="enable-background:new -49 141 512 512;" xml:space="preserve">
                            <path id="XMLID_11_" d="M-24,422h401.645l-72.822,72.822c-9.763,9.763-9.763,25.592,0,35.355c9.763,9.764,25.593,9.762,35.355,0
                                l115.5-115.5C460.366,409.989,463,403.63,463,397s-2.634-12.989-7.322-17.678l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355,0
                                c-9.763,9.763-9.763,25.592,0,35.355l72.822,72.822H-24c-13.808,0-25,11.193-25,25S-37.808,422-24,422z"/>
                       </svg>
                   </button>
                   <button v-bind:class="{ 'spinner': loading }" v-else class="items-center rounded p-2 bg-blue-500 w-40 ml-12" @click="submit()">
                       <span class="text-center mr-2 text-sm antialiased tracking-wide leading-snug font-semibold font-sans text-white" >SUBMIT</span>
                   </button>
               </div>
           </div>
       </div>
   </div>
</template>

<script>
    import Swal from 'sweetalert2';
    import {eventBus} from "../../../Models/_events";

    export default {
        name: "NitsFormWizard",
        data() {
            return {
                errors: {},
                loading: false,
                activeTab: '',
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
            if(this.active) this.activeTab = this.active;
            else this.activeTab = 0

            eventBus.$on('nits-form-input', (data) => {
                if(typeof data !== 'undefined' ||  data !== null )
                    this.form_data[data.field] = data.value
            })
        },
        methods:{
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