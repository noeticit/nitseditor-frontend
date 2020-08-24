<template>
    <div class="flex-col justify-start w-full">
        <div class="mt-2 ml-2 block uppercase tracking-wide text-left text-gray-700 text-sm font-bold mb-2">{{ label }}</div>

        <vue-editor ref="editor" :value="value" @input="emitEvent"></vue-editor>

        <span v-if="hint" class="text-xs text-gray-400 font-medium">{{ hint }}</span>
        <span v-if="errorDisplay" class="text-xs text-pink-600 font-medium">{{ errorDisplay }}</span>
    </div>

</template>

<script>
    import { VueEditor } from "vue2-editor";
    import {eventBus} from "../../../Models/_events";

    export default {
        name: "NitsEditor",
        components: {
            VueEditor
        },
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
            placeholder: String,
            value: '',
            model: String,
        },

        data() {
            return {

            }
        },
        methods: {
            emitEvent(editor) {
                const data = {
                    field: this.model,
                    value: editor
                }
                eventBus.$emit('nits-form-input', data)
                this.$emit('input', editor)
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
