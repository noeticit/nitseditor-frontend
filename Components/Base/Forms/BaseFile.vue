<template>
    <div class="flex-col justify-start w-full">
        <div class="mt-2 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">{{ label }}</div>
        <input
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            :class="errorDisplay ? 'border-red-500 focus:bg-white focus:border-red-500': ''"
            type="file"
            :value="value" @input="emitEvent($event)"
            ref="input_file"
        >
        <span v-if="hint" class="text-xs text-gray-400 font-medium">{{ hint }}</span>
        <span v-if="errorDisplay" class="text-xs text-pink-600 font-medium">{{ errorDisplay }}</span>
    </div>
</template>

<script>
    export default {
        name: "InputFile",
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
            value: File,
        },
        methods: {
            emitEvent(event) {
                var reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]);
                reader.onload = () => {
                    const docs = {
                        name: event.target.files[0].name,
                        size: event.target.files[0].size,
                        lastModifiedDate: event.target.files[0].lastModifiedDate,
                        base64: reader.result
                    };
                    console.log(docs);
                    this.$emit('input', docs)
                };
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
