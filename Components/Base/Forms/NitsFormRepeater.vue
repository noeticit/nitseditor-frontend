<template>
    <div>
        <div v-for="(form,index) in forms" :key="index">
            <nits-grid rows="2" cols="4" gap="4" flow="row">
                <component v-for="(element, key, form_index) in form" :key="form_index" :is="element.type" v-bind="element.attrs" v-model="element.value"></component>
                <button @click.prevent="deleteRow(index)" class="">
                    <svg class="w-6 h-6 ml-6 mt-4" version="1.1" id="Squared_cross" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                         y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                        <path fill="#C0C0C0" d="M16,2H4C2.9,2,2,2.9,2,4v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C18,2.9,17.1,2,16,2z M13.061,14.789
                            L10,11.729l-3.061,3.06L5.21,13.061L8.271,10l-3.06-3.061L6.94,5.21L10,8.271l3.059-3.061l1.729,1.729L11.729,10l3.06,3.061
                            L13.061,14.789z"/>
                    </svg>
                </button>
            </nits-grid>
        </div>
        <button class="inline-flex ml-10 mt-6 items-center rounded p-2 bg-blue-500" @click.prevent="addRow()">
            <svg class="inline-block text-white fill-current w-5 h-5 "  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16 10c0 .55-.05 1-.6 1H11v4.4c0 .55-.45.6-1 .6s-1-.05-1-.6V11H4.6c-.55 0-.6-.45-.6-1s.05-1 .6-1H9V4.6c0-.55.45-.6 1-.6s1 .05 1 .6V9h4.4c.55 0 .6.45.6 1z"/>
            </svg>
            <a href="#"><span class="text-center mr-2 text-sm antialiased tracking-wide leading-snug font-semibold font-sans text-white">Add New</span></a>
        </button>
    </div>
</template>

<script>
    export default {
        name: "NitsFormRepeater",
        data() {
            return {
                formData: '',
                forms: {
                    code: {
                        type: 'nits-input-text',
                        attrs: {
                            label:'Text',
                            placeholder: 'Enter text',
                        },
                        value: ''
                    },
                    discount:{
                        type: 'nits-input-text',
                        attrs: {
                            label:'Text 2',
                            placeholder: 'Enter text',
                        },
                        value: ''
                    },
                },
            }
        },
        // props: {
        //     forms: {
        //         type: Array
        //     }
        // },
        methods: {
            deleteRow(index) {
                this.forms.splice(index, 1)
            },
            addRow() {
                const formData = this.forms[0];
                Object.keys(formData).forEach((key) => {
                    formData[key].value = '';
                })
                this.forms.push(formData);
            },
            emitEvent() {
                const emittedData = [];

                this.forms.forEach((item) => {
                    const objectValuePair = {}
                    Object.keys(item).forEach((key) => {
                        objectValuePair[key] = item[key].value
                    });
                    emittedData.push(objectValuePair);
                })

                this.$emit('input', emittedData);
            }
        },
        watch: {
            forms: {
                handler: 'emitEvent',
                deep: true
            }
        }
    }
</script>

<style scoped>

</style>