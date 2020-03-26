<template>
    <div class="flex-col justify-start w-full">
        <label class="mt-2 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-select">
            {{label}}
        </label>
        <div class="relative">
            <div
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 pr-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 flex flex-wrap"
                    :class="errorDisplay ? 'border-red-500 focus:bg-white focus:border-red-500': ''"
            >
                <span v-if="checkValue" v-for="item in value" class="multi-select-input-tag z-10">
                    <span>{{ item[optionLabel] }}</span>
                    <button type="button" class="multi-select-input-remove" @click="removeElement(item)">&times;</button>
                </span>
                <span v-else class="multi-select-input-tag z-10">
                    <span>{{ item[optionLabel] }}</span>
                    <button type="button" class="multi-select-input-remove" @click="removeElement(value)">&times;</button>
                </span>
                <input class="flex outline-none pt-1 pb-1 ml-2 mb-1 bg-gray-200 text-gray-700" :placeholder="placeholder"
                       @focus="dropdown = true"
                       v-model="search"
                       ref="input_select"
                >
            </div>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
            </div>
            <button v-if="dropdown" @click="dropdown = false" tabindex="-1" class="fixed inset-0 h-full w-full bg-black opacity-0 cursor-default"></button>
            <div v-if="dropdown" ref="dropdown" class="absolute right-0 mt-2 py-2 w-full bg-white rounded-lg shadow-xl">
                <ul>
                    <li v-if="computedOptions.length" v-for="item in computedOptions"
                        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white z-10"
                        :class="selected(item) ? '' : 'bg-gray-200'"
                        @click.prevent="selectElement(item)">{{ item[optionLabel] }}</li>
                    <li v-else class="block px-4 py-2 bg-gray-100 text-gray-800 hover:bg-indigo-500 hover:text-white z-10">No data found!</li>
                </ul>
            </div>
            <span v-if="hint" class="text-xs text-gray-400 font-medium">{{ hint }}</span>
            <span v-if="errorDisplay" class="text-xs text-pink-600 font-medium">{{ errorDisplay }}</span>
        </div>
    </div>
</template>

<script>
    import { createPopper } from '@popperjs/core';

    export default {
        data() {
            return {
                search: '',
                dropdown: false,
                value: []
            }
        },
        methods: {
            selectElement(item) {
                if(this.multiple) {
                    let index = _.findIndex(this.value, (o) => {
                        return o[this.trackBy] === item[this.trackBy];
                    });
                    if(index > -1) this.value.splice(index, 1);
                    else this.value.push(item);
                }
                else this.value = item

                this.$emit('input', this.value)
            },
            selected(item) {
                let index = _.findIndex(this.value, (o) => {
                    return o[this.trackBy] === item[this.trackBy];
                });
                return index <= -1;
            },
            removeElement(item) {
                if(this.multiple) {
                    let index = _.findIndex(this.value, (o) => {
                        return o[this.trackBy] === item[this.trackBy];
                    });
                    this.value.splice(index, 1);
                }
                else this.value = [];

                this.$emit('input', this.value)
            },
        },
        name: "InputMultiSelect",
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
            trackBy: {
                type: String,
                default: 'value'
            },
            optionLabel: {
                type: String,
                default: 'label'
            },
            searchable: {
                type: Boolean,
                default: false
            },
            multiple: {
                type: Boolean,
                default: false
            }
        },
        created() {
            const button = this.$refs.input_select.$el;
            const tooltip =this.$refs.dropdown.$el;

            createPopper(button, tooltip, {
                placement: 'right',
            });
        },
        computed: {
            errorDisplay() {
                if(this.error.length)
                    return this.error.join(', ');
                else
                    return '';
            },
            computedOptions() {
                const searchTerm = this.search.toLowerCase();
                if(this.searchable && searchTerm) this.$emit('searchQuery', this.search);
                if(this.options.length) return this.options.filter((item) => item[this.optionLabel].toLowerCase().includes(searchTerm));
                else return [];
            },
            checkValue() {
                return _.isArray(this.value);
            }
        }
    }
</script>

<style scoped>

    .multi-select-input-tag {
        display: inline-flex;
        line-height: 1;
        align-items: center;
        font-size: .875rem;
        background-color: #bcdefa;
        color: #1c3d5a;
        border-radius: .25rem;
        user-select: none;
        padding: .25rem;
        margin-right: .5rem;
        margin-bottom: .25rem;
    }

    .multi-select-input-tag:last-of-type {
        margin-right: 0;
    }

    .multi-select-input-remove {
        color: #2779bd;
        font-size: 1.125rem;
        line-height: 1;
    }

    .multi-select-input-remove:first-child {
        margin-right: .25rem;
    }

    .multi-select-input-remove:last-child {
        margin-left: .25rem;
    }

    .multi-select-input-remove:focus {
        outline: 0;
    }

</style>