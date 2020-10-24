<template>
  <div class="flex-col justify-start w-full py-2">
    <div class="mt-2 ml-2 block uppercase tracking-wide text-left text-gray-700 text-sm font-bold mb-2">{{ label }}</div>

    <div class="relative">
      <div
          class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 flex flex-wrap"
          :class="errorDisplay ? 'border-red-500 focus:bg-white focus:border-red-500': ''"
      >
        <input class="flex w-full px-2 outline-none pt-1 pb-1 ml-2 mb-1 bg-gray-200 text-gray-700 z-10" :placeholder="placeholder"
               @click.prevent="dropdown = true"
               v-model="search"
               ref="input_select"
        >
        <span v-if="checkValue" v-for="item in selectedElements" class="multi-select-input-tag z-10" style="display: inline-flex;line-height: 1;align-items: center;font-size: .875rem; background-color: #bcdefa; color: #1c3d5a;border-radius: .25rem;user-select: none; padding: .25rem; margin-right: .5rem;   margin-bottom: .25rem;">
                    <span>{{ item[optionLabel] }}</span>
                    <button type="button" class="multi-select-input-remove" style="color: #2779bd;font-size: 1.125rem;line-height: 1;" @click.prevent="removeElement(item)">&times;</button>
                </span>
        <span v-else class="multi-select-input-tag z-10" style="display: inline-flex;line-height: 1;align-items: center;font-size: .875rem; background-color: #bcdefa; color: #1c3d5a;border-radius: .25rem;user-select: none; padding: .25rem; margin-right: .5rem;   margin-bottom: .25rem;">
                    <span @click.prevent="removeElement(selectedElements)">{{ item[optionLabel] }}</span>
          <!--                    <button type="button" class="multi-select-input-remove" @click.prevent="removeElement(value)">&times;</button>-->
                </span>
      </div>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-gray-700">
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
        </svg>
      </div>
      <button v-if="dropdown" @click.prevent="dropdown = false" class="fixed top-0 left-0 bottom-0 right-0 h-full w-full"></button>
      <div v-if="dropdown" ref="dropdown" class="absolute z-40 right-0 mt-2 py-2 w-full bg-white rounded-lg shadow-xl overflow-y-auto h-48">
        <RecycleScroller
            class="scroller"
            :items="computedOptions"
            :item-size="10"
            :key-field="trackBy"
            :prerender="1"
            v-slot="{ item }"
        >
          <li class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white z-10"
              :class="selected(item) ? '' : 'bg-gray-200'"
              @click.prevent="selectElement(item)">{{ item[optionLabel] }}
          </li>

        </RecycleScroller>
      </div>
      <span v-if="hint" class="text-xs text-gray-400 font-medium">{{ hint }}</span>
      <span v-if="errorDisplay" class="text-xs text-pink-600 font-medium">{{ errorDisplay }}</span>
    </div>
  </div>
</template>

<script>
import {eventBus} from "../../../Models/_events";

export default {
  data() {
    return {
      search: '',
      dropdown: false,
      optionsData: [],
      selectedElements: [],
      apiResponse:[]
    }
  },
  created(){
    if(typeof this.value !== 'undefined' || this.value !== '')
      this.selectedElements = this.value
    else
      this.selectedElements = []
  },
  methods: {
    selectElement(item) {
      if(this.multiple) {
        let index = _.findIndex(this.selectedElements, (o) => {
          return o[this.trackBy] === item[this.trackBy];
        });
        if(index > -1) this.selectedElements.splice(index, 1);
        else
        {
          this.selectedElements.push(item);
        }
      }
      else if(!this.multiple && this.selectedElements.length < 1){
        this.selectedElements.push(item);
      }
      else
        return this.selectedElements

      const data = {
        field: this.model,
        value: this.selectedElements
      }
      eventBus.$emit('nits-form-input', data)
      this.$emit('input', this.selectedElements)
    },
    selected(item) {
      let index = _.findIndex(this.selectedElements, (o) => {
        return o[this.trackBy] === item[this.trackBy];
      });
      return index <= -1;
    },
    fetchOptions() {
      const postData = {
        search: this.search
      }
      this.$api.post(this.api_url, postData).then(response => {
        if(response.status === 200) this.optionsData =  response.data.data;
      })
    },
    removeElement(item) {
      console.log("Event fired");
      if(this.multiple) {
        let index = _.findIndex(this.selectedElements, (o) => {
          return o[this.trackBy] === item[this.trackBy];
        });
        this.selectedElements.splice(index, 1);
      }
      else this.selectedElements = [];

      this.$emit('input', this.selectedElements)
    },
  },
  name: "NitsInputMultiSelect",
  props: {
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
    },
    value: Array,
    api_url: {
      type: String
    },
    query: {
      type: Object
    }
  },
  computed: {
    errorDisplay() {
      if(this.error.length)
        return this.error.join(', ');
      else
        return '';
    },
    computedOptions() {
      if(this.options.length) return this.options;
      else if(this.options.length && this.api_url) return this.optionsData;
      else if(this.options.length &&  !this.api_url) return this.options;
      else if(!this.options.length && this.api_url) return this.optionsData;
      else return [];


      //1. if options.length no api call on created
      //2. if typed
      //a. if api_url then, call api also filter from options
      //b. if no api_url then filter from options

      // let myobj = [];
      //
      // for (let index = 0; index < 100; index++) {
      //   myobj.push({ label: 'hgfhjf', value: index})
      // }
      // return myobj;

      // return this.optionsData = this.options
      //
      // const searchTerm = this.search.toLowerCase();
      // if(this.searchable && searchTerm) this.$emit('searchQuery', this.search);
      // if(this.optionsData.length) return this.optionsData.filter((item) => item[this.optionLabel].toLowerCase().includes(searchTerm));
      // else return [];
    },
    checkValue() {
      return _.isArray(this.selectedElements);
    },
    queries() {
      return this.query;
    },
  },

  watch: {
    query: {
      handler: 'fetchOptions',
      deep: true
    },
    queries: {
      handler: 'fetchOptions',
      deep: true
    },
    search: {
      handler: 'fetchOptions',
      immediate: true
    }
  }
}
</script>

<style scoped>
</style>