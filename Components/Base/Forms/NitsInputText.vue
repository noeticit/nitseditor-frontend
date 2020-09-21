<template>
    <div :class="stylish">
        <div v-if="!hidden" class="flex-col justify-start py-2 w-full">
            <div class="mt-2 ml-2 block uppercase tracking-wide text-left text-gray-700 text-sm font-bold mb-2">{{ label }}</div>
            <input
                    :class="customStyling"
                    :type="type"
                    :placeholder="placeholder"
                    :value="value" @input="emitEvent()" ref="input">
            <span v-if="hint" class="text-xs text-gray-400 font-medium">{{ hint }}</span>
            <span v-if="errorDisplay" class="text-xs text-pink-600 font-medium">{{ errorDisplay }}</span>
        </div>
        <div v-else>
            <input :type="type" :value="value" ref="input" :hideen="hidden">
        </div>
    </div>

</template>

<script>
    // import {eventBus} from "../../../Models/_events";

    export default {
        name: "NitsInputText",
        props: {
            stylish: String,
            label: String,
            hint: {
                type: String,
                default: () => ''
            },
            error: {
                type: Array,
                default: () => []
            },
            type: {
                type: String,
                default: 'text'
            },
          background: {
            type: String,
            default: 'white'
          },
          border: {
            type: String,
            default: 'gray-300'
          },
            model: String,
            placeholder: String,
            value: '',
            hidden: Boolean
        },
        methods: {
            emitEvent() {
                this.$emit('input', this.$refs.input.value)
            }
        },
        computed: {
            errorDisplay() {
                if(this.error.length)
                    return this.error.join(', ');
                else
                    return '';
            },
            customStyling() {
                let style = 'block appearance-none w-full border text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none';
                style = this.errorDisplay ? style+' border-red-500 focus:border-red-500': style+' focus:border-gray-500 focus:bg-white';
                style = style + ' bg-'+this.background;
                style = style + ' border-'+this.border;
                console.log(style);
                return style;
            },
        }
    }
</script>

<style scoped>

</style>
