<template>
    <div>
        <div class=" h-auto pb-5 ml-8 mr-8 rounded-b px-5 bg-gray-200 border-black">
            <div @click="cloneRow()" class="text-gray-600 hover:text-gray-400 inline-block bg-gray-200 font-bold">
                <svg class="h-4 w-4 my-2 mx-3 font-bold" fill="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 24h-12A2.503 2.503 0 016 21.5v-15C6 5.121 7.122 4 8.5 4h12C21.878 4 23 5.121 23 6.5v15c0 1.379-1.122 2.5-2.5 2.5zM8.5 5C7.673 5 7 5.673 7 6.5v15c0 .827.673 1.5 1.5 1.5h12c.827 0 1.5-.673 1.5-1.5v-15c0-.827-.673-1.5-1.5-1.5z"/><path d="M4.5 21h-1A2.503 2.503 0 011 18.5v-16C1 1.121 2.122 0 3.5 0h12C16.878 0 18 1.121 18 2.5a.5.5 0 01-1 0c0-.827-.673-1.5-1.5-1.5h-12C2.673 1 2 1.673 2 2.5v16c0 .827.673 1.5 1.5 1.5h1a.5.5 0 010 1zM18.5 17h-8a.5.5 0 010-1h8a.5.5 0 010 1zM18.5 21h-8a.5.5 0 010-1h8a.5.5 0 010 1z"/><path d="M18.5 13h-8a.5.5 0 010-1h8a.5.5 0 010 1zM18.5 9h-8a.5.5 0 010-1h8a.5.5 0 010 1z"/></svg>
            </div>
            <div @click="removeRow()" class="text-gray-600 hover:text-gray-400 inline-block bg-gray-200 font-bold">
                <svg class="h-4 w-4 my-2 mx-3 font-bold" fill="currentColor" viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M512.001 84.853L427.148 0 256.001 171.147 84.853 0 0 84.853 171.148 256 0 427.148l84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853L340.853 256z"/>
                </svg>
            </div>
            <div :class="'grid '+ (cols ? 'grid-cols-'+cols + ' ' : ' ')  + (gap ? 'gap-'+gap + ' ' : ' ')">
                <builder-element
                        v-if="!loading"
                        v-for="(item,index) in child_components"
                        :key="'element_index_'+index"
                        v-bind="item.attrs"
                        :attrs="item.attrs"
                        :component="item.component"
                        :row_index="row_index"
                        :column_index="column_index"
                        :form_column_index="form_column_index"
                        :form_element_index="form_element_index"
                        :element_index="index"
                        :element="item"
                        class="border bg-white"
                >
                </builder-element>
            </div>
        </div>
    </div>
</template>

<script>
    import {eventBus} from 'NitsModels/_events';

    export default {
        name: "ColumnElement",
        data(){
            return{
                loading: false,
            }
        },
        props: {
            cols: Number,
            gap: Number,
            row_index: Number,
            column_index: Number,
            form_element_index: Number,
            form_column_index: Number,
            child_components: Array
        },
        methods: {
            removeRow() {
                let data ={
                    row: this.row_index,
                    column: this.column_index
                }
                eventBus.$emit('remove-row-column', data );
            },
            cloneRow() {
                let data ={
                    row: this.row_index,
                    column: this.column_index
                }
                eventBus.$emit('clone-row-column', data );
            },

        }

    }
</script>

<style scoped>

</style>