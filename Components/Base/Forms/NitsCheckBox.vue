<template>
    <div class="flex-col justify-start w-full">
        <div class="mt-2 ml-2 block uppercase tracking-wide text-left text-gray-700 text-sm font-bold mb-2">{{ label }}</div>
        <input
            class="form-checkbox ml-2"
            :class="errorDisplay ? 'border-red-500 focus:bg-white focus:border-red-500': ''"
            type="checkbox"
            :checked="value" @input="emitEvent($event)" ref="checkbox"
        >
        <span v-if="hint" class="text-xs text-gray-400 font-medium">{{ hint }}</span>
        <span v-if="errorDisplay" class="text-xs text-pink-600 font-medium">{{ errorDisplay }}</span>
    </div>
</template>

<script>
    import {eventBus} from "../../../Models/_events";

    export default {
        name: "NitsCheckBox",
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
            value: '',
            placeholder: String,
            model: String,
        },
        methods: {
            emitEvent(event) {
                const data = {
                    field: this.model,
                    value: event.target.checked
                }
                eventBus.$emit('nits-form-input', data)
                this.$emit('input', event.target.checked)
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
