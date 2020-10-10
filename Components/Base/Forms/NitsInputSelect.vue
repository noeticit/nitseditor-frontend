<template>
    <div :class="styling+' flex-col justify-start w-full py-2'">
        <label class="mt-2 ml-2 block uppercase tracking-wide text-left text-gray-700 text-sm font-bold mb-2" for="grid-select">
            {{label}}
        </label>
        <div class="relative">
            <select :class="customStyling"
                    :value="value"
                    @change="emitEvent()"
                    ref="select"
                    id="grid-select">
                <option value="" class="text-gray-500">{{placeholder}}</option>
                <option v-for="item in optionsAll" :value="item.value">{{item.label}}</option>
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
    import {eventBus} from "../../../Models/_events";

    export default {
        name: "NitsInputSelect",
        data() {
            return {
                optionsData: []
            }
        },
        props: {
            styling: String,
            label: String,
            placeholder: String,
            model: String,
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
            value: '',
            api_url: {
                type: String
            },
            query: {
                type: Object
            },
            test: '',

          // CSS attributes which will be extracted for mixin purpose
          background: {
              type: String,
              default: 'white'
          },
          border: {
              type: String,
              default: 'gray-300'
          },
          options_background: {
              type: String,
              default: 'white'
          }
        },
        created() {


            // this.optionsData.unshift({label: 'Select One', value: ''});
        },
        methods: {
            emitEvent() {
                // const data = {
                //     field: this.model,
                //     value: this.$refs.select.value
                // }
                // eventBus.$emit('nits-form-input', data)
                this.$emit('input', this.$refs.select.value)

                this.$emit('change', this.$refs.select.value)
            },
            fetchOptions() {
                this.$api.post(this.api_url, this.query).then(response => {
                    if(response.status === 200) {
                        this.optionsData = response.data.data.map(a => ({
                            value: a.id,
                            label: a.name
                        }));
                    }
                })
            }
        },
        computed: {
            optionsAll(){
              if(this.api_url)
                return this.fetchOptions();
              else
                return this.options
            },
            errorDisplay() {
                if(this.error.length)
                    return this.error.join(', ');
                else
                    return '';
            },
            queries() {
                if(this.query.length) return this.query;
            },
            customStyling() {
              let style = ' block appearance-none w-full border text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none';
              style = this.errorDisplay ? style+' border-red-500 focus:border-red-500': style+' focus:border-gray-500 focus:bg-white';
              style = style + ' bg-'+this.background;
              style = style + ' border-'+this.border;
              // console.log(style);
              return style;
            },
        },
        watch: {
            query: {
                handler: 'fetchOptions',
                deep: true
            },
        }
    }
</script>

<style scoped>

</style>