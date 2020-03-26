<template>
    <div class="flex-col justify-start w-full">
        <label class="mt-2 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-select">
            {{label}}
        </label>
        <div class="relative">
            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    :class="errorDisplay ? 'border-red-500 focus:bg-white focus:border-red-500': ''"
                    :value="value"
                    @change="emitEvent()"
                    ref="select"
                    id="grid-select">
                <option value="" disabled class="text-gray-500">{{placeholder}}</option>
                <option v-for="item in options" :value="item.value">{{item.label}}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
        <span v-if="hint" class="text-xs text-gray-400 font-medium">{{ hint }}</span>
        <span v-if="errorDisplay" class="text-xs text-pink-600 font-medium">{{ errorDisplay }}</span>
    </div>
</template>

<script>
    export default {
        name: "InputSelect",
        props: {
            label: String,
            placeholder: String,
            hint: {
                type: String,
                default: () => ''
            },
            error: {
                type: Array,
                default: () => []
            },
            options: {
                type: Array,
                default: () => []
            },
            value: String,
        },
        methods: {
            emitEvent() {
                this.$emit('input', this.$refs.select.value)
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