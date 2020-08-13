<template>
    <div>
        <nits-grid v-bind="grid">
            <component
                    v-for="(item, index, key) in child_components"
                    :key="key"
                    :is="item.component"
                    v-bind="item.attrs"
                    v-model="item.attrs.value"
                    :error="errors[key]"
                    @input="listensToEvent(item.attrs.model, index)"
            ></component>
        </nits-grid>
    </div>
</template>

<script>
    import {eventBus} from "../../../Models/_events";

    export default {
        name: "NitsFormCheck",
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
            component_name: String,
            element: Object
        },
        methods: {
            listensToEvent(field, index) {
                this.details = {
                    row_index: this.row_index,
                    column_index: this.column_index,
                    element_index: this.element_index,
                    field: field,
                    value: this.child_components[index].attrs.value,
                    component_name: this.component_name
                };
                eventBus.$emit('individual-element-attributes', this.details)
            }
        }
    }
</script>

<style scoped>

</style>