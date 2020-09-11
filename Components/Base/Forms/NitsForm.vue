<template>
    <div>
        <div v-for="(item, index) in forms">
            <component :is="item.component" :key="index" v-bind="item.attrs"></component>
        </div>

        <div class="flex m-4 w-full">
            <button v-if="type === 'create'" v-bind:class="{ 'spinner': loading }" class="inline-flex mt-10 items-center rounded-lg py-2 px-6 bg-teal-700" @click.prevent="submit">
                <span class="text-center text-base antialiased tracking-tight font-sans text-white cursor-pointer" >Submit</span>
            </button>
            <button v-if="type === 'update'" v-bind:class="{ 'spinner': loading }" class="inline-flex mt-10 items-center rounded-lg py-2 px-6 bg-teal-700" @click.prevent="update">
                <span class="text-center text-base antialiased tracking-tight font-sans text-white cursor-pointer" >Update</span>
            </button>
            <router-link :to="back_api ? back_api : ''" class="inline-flex mt-10 ml-2 items-center rounded-lg py-2 px-6 border border-gray-400">
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
            type: String,
            id: Number,
        },
        created() {
            eventBus.$on('nits-form-input', (data) => {
                if(typeof data !== 'undefined' ||  data !== null )
                    this.form_data[data.field] = data.value
                console.log(this.form_data);
            })

            eventBus.$on('form-repeater-add', (data) => {
                if(typeof data !== 'undefined' ||  data !== null ) {
                    this.forms.forEach((row, rIndex) => {
                        row.attrs.child_components.forEach((column, colIndex) => {
                            column.attrs.child_components.forEach((repeater, repeaterIndex) => {
                                if(repeater.attrs.model === data.field) {
                                    const postData = {
                                        rowIndex: rIndex,
                                        columnIndex: colIndex,
                                        repeaterIndex: repeaterIndex,
                                        field: data.field,
                                        value: data.value
                                    }
                                    eventBus.$emit('add-form-data', postData)
                                }
                            })

                        })
                    })
                }
            })

            eventBus.$on('form-repeater-delete', (data) => {
                if(typeof data !== 'undefined' ||  data !== null ) {
                    this.forms.forEach((row, rIndex) => {
                        row.attrs.child_components.forEach((column, colIndex) => {
                            column.attrs.child_components.forEach((repeater, repeaterIndex) => {
                                if(repeater.attrs.model === data.field) {
                                    const postData = {
                                        rowIndex: rIndex,
                                        columnIndex: colIndex,
                                        repeaterIndex: repeaterIndex,
                                        field: data.field,
                                        index: data.value
                                    }
                                    eventBus.$emit('delete-form-data', postData)
                                }
                            })

                        })
                    })
                }
            })

            eventBus.$on('form-data', (data) => {
                this.form_data = data
            })
        },
        methods: {
            update() {
                this.$api.update(this.api_url+'/'+this.id, this.form_data).then(response => {
                    if (response.status === 202) {
                        Swal.fire(
                            'Updated!',
                            'Your data has been Updated.',
                            'success'
                        ).then(() => {
                            this.$router.push({path: this.redirect_api});
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
            findModel(ele) {
              const obj = {};
              ele.forEach((row) => {
                row.attrs.child_components.forEach((column) => {
                  column.attrs.child_components.forEach((element) => {
                    if(typeof element.attrs.model !== 'undefined') {
                      if(element.component === 'nits-form-repeater') {
                        obj[element.attrs.model] =element.attrs.child_components.map((a) => {
                          let d = {};
                          a.attrs.child_components.forEach((b) => {
                            if(typeof b.attrs.model !== 'undefined') {
                              d[b.attrs.model] = b.attrs.value;
                            }
                          })
                          return d;
                        })
                      }
                      else
                        obj[element.attrs.model] = element.attrs.value;
                    }
                  })
                })
              })
              return obj;
            },
            submit() {
                // this.loading = true
                // console.log(this.forms)
              this.form_data = this.findModel(this.forms);
              console.log(this.form_data);

                // this.$api.post(this.api_url, this.form_data).then(response => {
                //     if (response.status === 200) {
                //         Swal.fire(
                //             'Created!',
                //             'Your data has been created.',
                //             'success'
                //         ).then(() => {
                //             this.$router.push({path: this.redirect_api});
                //         })
                //
                //     }
                // }).catch((error) => {
                //     Swal.fire({
                //         title: "Oops!",
                //         text: error.response.data.message,
                //         type: "error",
                //     })
                //     this.loading = false
                //     this.errors = error.response.data.errors
                // })
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