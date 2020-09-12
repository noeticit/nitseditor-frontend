<template>
    <div :class="'grid '+ (this.cols ? 'grid-cols-'+this.cols + ' ' : ' ') +  (this.gap ? 'gap-' + this.gap + ' ' : ' ')">
        <components  v-for="(element, index) in child_components"
                     :key="index" :is="element.component" v-bind="element.attrs"
                     @input="check($event, element)"
        ></components>
        <slot></slot>
    </div>
</template>

<script>
    import {eventBus} from "../../../Models/_events";
    export default {
        name: "NitsColumn",
        data() {
            return {
                form_data: {}
            }
        },
        props:{
            span:{
                type: String,
            },
            start:{
                type: String,
            },
            end:{
                type: String,
            },
            cols: Number,
            gap: Number,
            child_components: Array
        },
        methods: {
            check(value, element) {
                if(element.component === 'nits-form-repeater') {
                    console.log(value)
                }
                else {
                    const data = {
                        field: element.attrs.model,
                        value: value
                    }
                    console.log(data)
                    eventBus.$emit('nits-form-input', data)
                }
            }
        }
    }
</script>

<style scoped>

</style>