<template>
    <div>
        <nits-grid v-bind="grid">
            <component
                    v-for="(element, index, key) in child_components"
                    :key="key"
                    :is="element.component"
                    v-bind="element.attrs"
                    v-model="element.attrs.value"
                    :error="errors[key]"
                    @input="listensToEvent(element.attrs.model, index)"
            ></component>
        </nits-grid>
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
                details: {}
            }
        },
        props: {
            forms: Object,
            api_url: String,
            redirect: String,
            back_url: String,
            grid: Object,
            child_components: Array,
            attrs: Object,
            elementData: Object,
            row_index: Number,
            column_index: Number,
            element_index: Number,
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
            listensToEvent(field, index) {
                this.details = {
                    row_index: this.row_index,
                    column_index: this.column_index,
                    element_index: this.element_index,
                    field: field,
                    value: this.child_components[index].attrs.value
                };
                eventBus.$emit('individual-element-attributes', this.details)
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