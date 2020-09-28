<template>
    <div class="">
        <div class="w-full flex md:px-16 justify-center md:py-32 bg-gray-100">
            <div class="border w-full flex flex-col border border-4 border-white border-dashed hover:border-blue-500 md:py-12">
                <div :class="'px-8 grid '+ (cols ? 'grid-cols-'+cols + ' ' : ' ')  + (gap ? 'gap-'+gap + ' ' : ' ')">
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
                            class="border border-white border-dashed hover:border-gray-800  py-4 px-4"
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

        }

    }
</script>

<style scoped>

</style>