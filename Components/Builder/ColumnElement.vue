<template>
    <div class="mb-3">
        <div class=" h-auto pb-5 ml-8 mr-8 rounded-b px-5 bg-gray-200 border-black">
            <div class="text-gray-600 hover:text-gray-400 inline-block bg-gray-200 font-bold">
                <svg class="h-4 w-4 my-2 mx-3 font-bold" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.873 477.873">
                    <path fill-rule="evenodd" d="M392.533 238.937c-9.426 0-17.067 7.641-17.067 17.067V426.67c0 9.426-7.641 17.067-17.067 17.067H51.2c-9.426 0-17.067-7.641-17.067-17.067V85.337c0-9.426 7.641-17.067 17.067-17.067H256c9.426 0 17.067-7.641 17.067-17.067S265.426 34.137 256 34.137H51.2C22.923 34.137 0 57.06 0 85.337V426.67c0 28.277 22.923 51.2 51.2 51.2h307.2c28.277 0 51.2-22.923 51.2-51.2V256.003c0-9.425-7.641-17.066-17.067-17.066z"/><path d="M458.742 19.142A65.328 65.328 0 00412.536.004a64.85 64.85 0 00-46.199 19.149L141.534 243.937a17.254 17.254 0 00-4.113 6.673l-34.133 102.4c-2.979 8.943 1.856 18.607 10.799 21.585 1.735.578 3.552.873 5.38.875a17.336 17.336 0 005.393-.87l102.4-34.133c2.515-.84 4.8-2.254 6.673-4.13l224.802-224.802c25.515-25.512 25.518-66.878.007-92.393z"/>
                </svg>
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
                        :component="item.component"
                        :row_index="row_index"
                        :column_index="column_index"
                        :element_index="index"
                        class="border bg-white"
                >
                </builder-element>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ColumnElement",
        data(){
            return{
                loading: false,
                components:[
                    {id: 1, title:'Row', icon:'/project-assets/images/row.png', desc:'Place content elements inside the row', component_name: 'row'},
                    {id: 2, title:'Check Box', icon:'/project-assets/images/checkbox.png', desc:'Place content elements inside the Checkbox', component_name: 'checkbox'},
                    {id: 3, title:'CK Editor', icon:'/project-assets/images/ckeditor.png', desc:'Place content elements inside the CK editor',  component_name: 'ck_editor'},
                    {id: 4, title:'Date Picker', icon:'/project-assets/images/date1.jpg', desc:'Place content elements inside the row',  component_name: 'date_picker'},
                    {id: 5, title:'Input File', icon:'/project-assets/images/inputfile.png', desc:'Place content elements inside the row',  component_name: 'input_file'},
                    {id: 6, title:'Form', icon:'/project-assets/images/form.jpg', desc:'Place content elements inside the row',  component_name: 'form'},
                    {id: 7, title:'Input Date', icon:'/project-assets/images/inputdate.png', desc:'Place content elements inside the row',  component_name: 'input_date'},
                    {id: 8, title:'Multi Select', icon:'/project-assets/images/multiselect.png', desc:'Place content elements inside the row',  component_name: 'multi_select'},
                    {id: 9, title:'Single Select', icon:'/project-assets/images/select1.png', desc:'Place content elements inside the row',  component_name: 'single_select'},
                    {id: 10, title:'Text', icon:'/project-assets/images/text.png', desc:'Place content elements inside the row',  component_name: 'text'},
                    {id: 11, title:'Multiple DropZone', icon:'/project-assets/images/multidropzone.png', desc:'Place content elements inside the row',  component_name: 'multiple_dropzone'},
                    {id: 12, title:'Single DropZone', icon:'/project-assets/images/dropzone.png', desc:'Place content elements inside the row',  component_name: 'single_dropzone'},
                    {id: 13, title:'Button', icon:'/project-assets/images/button.png', desc:'Place content elements inside the row',  component_name: 'button'},
                    {id: 14, title:'Group Button', icon:'/project-assets/images/groupbutton.png', desc:'Place content elements inside the row',  component_name: 'group_button'},
                    {id: 15, title:'Pagination', icon:'/project-assets/images/pagination.png', desc:'Place content elements inside the row',  component_name: 'pagination'},
                    {id: 16, title:'Table', icon:'/project-assets/images/table.png', desc:'Place content elements inside the row',  component_name: 'table'},
                    {id: 17, title:'Tabs', icon:'/project-assets/images/tabs.png', desc:'Place content elements inside the row',  component_name: 'tabs'},
                    {id: 18, title:'Alert', icon:'/project-assets/images/alert.png', desc:'Place content elements inside the row',  component_name: 'alert'},
                    {id: 19, title:'Bread Crumb', icon:'/project-assets/images/timeline-512.png', desc:'Place content elements inside the row',  component_name: 'bread_crumb'},
                    {id: 20, title:'Footer', icon:'/project-assets/images/footer.png', desc:'Place content elements inside the row',  component_name: 'footer'},
                    {id: 21, title:'Menu', icon:'/project-assets/images/menu.png', desc:'Place content elements inside the row',  component_name: 'menu'},
                    {id: 22, title:'Video Player', icon:'/project-assets/images/video.png', desc:'Place content elements inside the row',  component_name: 'video_player'},
                    {id: 23, title:'Progress Bar', icon:'/project-assets/images/progress.png', desc:'Place content elements inside the Progress Bar',  component_name: 'progress_bar'},
                    {id: 24, title:'Empty Space', icon:'/project-assets/images/emptyspace.png', desc:'Place content elements inside the Empty Space',  component_name: 'empty_space'},
                    {id: 25, title:'Pie Chart', icon:'/project-assets/images/piechart.png', desc:'Place content elements inside the row',  component_name: 'pie_chart'},
                ]
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

            }
        }

    }
</script>

<style scoped>

</style>