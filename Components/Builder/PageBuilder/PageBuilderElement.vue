<template>
    <div>
        <div class="flex  w-full m-2 p-2">
            <div class="max-w-md my-auto top-0 bottom-0 right-0 left-0 mx-auto">
                <button  class="p-3 mx-auto bg-indigo-600 text-white rounded-full focus:outline-none hover:bg-indigo-400 focus:bg-indigo-700">
                    <svg  class="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 448 448" xmlns="http://www.w3.org/2000/svg"><path d="M408 184H272a8 8 0 01-8-8V40c0-22.09-17.91-40-40-40s-40 17.91-40 40v136a8 8 0 01-8 8H40c-22.09 0-40 17.91-40 40s17.91 40 40 40h136a8 8 0 018 8v136c0 22.09 17.91 40 40 40s40-17.91 40-40V272a8 8 0 018-8h136c22.09 0 40-17.91 40-40s-17.91-40-40-40zm0 0"/></svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import {eventBus} from 'NitsModels/_events';

    export default {
        name: "BuilderElement",
        data(){
            return{
                isVisible: false,
                addedRow: false,
                hideButton: true,
            }
        },
        props: {
            element: Object,
            child_components: Array,
            component: String,
            row_index: Number,
            column_index: Number,
            element_index: Number,
            form_column_index: Number,
            form_element_index: Number,
            attrs: Object
        },
        created() {

        },
        methods:{
            openModal(title){
                if (title === 'Form Repeater')
                    this.isOpen3 = true
                else if(typeof this.form_element_index !== "undefined")
                    this.isOpen4 = true
                else
                    this.isOpen2 = true
            },
            removeField(){
                let data ={
                    row: this.row_index,
                    column: this.column_index,
                    element: this.element_index
                }
                eventBus.$emit('remove-row-element', data );
            },
        },
        components: {
            'VueTailwindModal': () => import('vue-tailwind-modal'),
        },
        computed:{

        }
    }
</script>

<style scoped>

</style>