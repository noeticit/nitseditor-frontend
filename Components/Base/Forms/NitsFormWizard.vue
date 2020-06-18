<template>
    <div>
        <div v-for="(item, key, index) in contents" :key="key">
            <ul class="list-reset flex border-b" >
                <li class="-mb-px px-2 w-48  cursor-pointer"  @click="activeTab = key">
                    <svg class="ml-12 h-10 w-10 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" :d="item.icon"/>
                    </svg>
                    <span >{{key}}</span>
                </li>
            </ul>

            <div class="p-4" v-show="key === activeTab">
                <div class="justify-between p-4 text-center items-center">
                    <div class="text-left ml-2 text-xl antialiased leading-snug tracking-normal font-sans text-teal-700">{{item.title}}</div>
                </div>
                <nits-grid v-bind="grid">
                    <component v-for="(element, element_key, form_index) in item.forms" :key="element_key" :is="element.type" v-bind="element.attrs" v-model="element.value" :error="errors[element_key]" @input="listensToEvent(key, element_key)"></component>
                </nits-grid>
                <div class="flex mt-10">
                    <button v-if="previous(key)" class="  mr-2 items-center rounded p-2 bg-white w-5  border border-gray-400" @click="previousTab(key)">
                        <span class="text-center mr-2 text-sm antialiased tracking-wide leading-snug font-semibold font-sans text-gray-700">PREVIOUS</span>
                    </button>
                    <button v-if="next(key)" class="items-center rounded p-2 bg-blue-500 w-40 ml-4/6" @click="nextTab(key)">
                        <span class="text-center mr-2 text-sm antialiased tracking-wide leading-snug font-semibold font-sans text-white" >NEXT STEP</span>
                    </button>
                    <button v-else class="items-center rounded p-2 bg-blue-500 w-40 ml-4/6" @click="submit()">
                        <span class="text-center mr-2 text-sm antialiased tracking-wide leading-snug font-semibold font-sans text-white" >Submit</span>
                    </button>
                </div>
            </div>

        </div>
    </div>
<!--    <nits-grid v-bind="grid">-->
<!--        <component v-for="(element, key, form_index) in forms" :key="key" :is="element.type" v-bind="element.attrs" v-model="element.value" :error="errors[key]" @input="listensToEvent(key)"></component>-->
<!--    </nits-grid>-->
</template>

<script>
    import Swal from 'sweetalert2';

    export default {
        name: "NitsFormWizard",
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