<template>
    <div class="">
        <div class="w-full flex justify-center md:py-32 mt-2 md:mt-10 bg-gray-100">
            <div class="border w-1/2 flex flex-col border-dotted border-b-2 border-t-2 border-r-2 border-l-2 border-blue-200 md:py-12">
                <div :class="'px-4 grid '+ (cols ? 'grid-cols-'+cols + ' ' : ' ')  + (gap ? 'gap-'+gap + ' ' : ' ')">
                    <page-builder-element
                            v-if="!loading"
                            v-for="(item,index) in child_components"
                            :key="'element_index_'+index"
                            v-bind="item.attrs"
                            :attrs="item.attrs"
                            :component="item.component"
                            :row_index="row_index"
                            :column_index="column_index"
                            :element_index="index"
                            :element="item"
                            class="border border-dashed border-gray-500"
                    >
                    </page-builder-element>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {eventBus} from 'NitsModels/_events';

    export default {
        name: "PageColumnElement",
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
            child_components: Array
        },
        methods: {
            removeRow() {
                let data ={
                    row: this.row_index,
                    column: this.column_index
                }
                eventBus.$emit('page-remove-row-column', data );
            },
            cloneRow() {
                let data ={
                    row: this.row_index,
                    column: this.column_index
                }
                eventBus.$emit('page-clone-row-column', data );
            },

        }

    }
</script>

<style scoped>

</style>