<template>
    <div class="flex-col justify-start w-full">
        <div class="mt-2 ml-2 block uppercase tracking-wide text-left text-gray-700 text-sm font-bold mb-2">{{ label }}</div>
        <input
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            :class="errorDisplay ? 'border-red-500 focus:bg-white focus:border-red-500': ''"
            :type="type"
            :placeholder="placeholder" :value="value" @input="emitEvent()" ref="input"
        >
        <span v-if="hint" class="text-xs text-gray-400 font-medium">{{ hint }}</span>
        <span v-if="errorDisplay" class="text-xs text-pink-600 font-medium">{{ errorDisplay }}</span>
    </div>
</template>

<script>
    import {eventBus} from "../../../Models/_events";

    export default {
        name: "NitsInputText",
        props: {
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
            model: String,
            placeholder: String,
            value: '',
        },
        methods: {
            emitEvent() {
                const data = {
                    field: this.model,
                    value: this.$refs.input.value
                }
                eventBus.$emit('nits-form-input', data)
                this.$emit('input', this.$refs.input.value)
            }
        },
        computed: {
            errorDisplay() {
                if(this.error.length)
                    return this.error.join(', ');
                else
                    return '';
            }
        }
    }
</script>

<style scoped>

</style>
