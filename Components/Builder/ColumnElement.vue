<template>
    <div>
        <div v-for="(name,index) in Duplicate" class="relative h-48 ml-8 mr-8 -mt-8 rounded-b px-5 bg-gray-200 border-black">
            <div v-model="name.row" class="text-gray-600 hover:text-gray-400 inline-block bg-gray-200 font-bold">
                <svg class="h-4 w-4 my-2 mx-3 font-bold" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.873 477.873"><path fill-rule="evenodd" d="M392.533 238.937c-9.426 0-17.067 7.641-17.067 17.067V426.67c0 9.426-7.641 17.067-17.067 17.067H51.2c-9.426 0-17.067-7.641-17.067-17.067V85.337c0-9.426 7.641-17.067 17.067-17.067H256c9.426 0 17.067-7.641 17.067-17.067S265.426 34.137 256 34.137H51.2C22.923 34.137 0 57.06 0 85.337V426.67c0 28.277 22.923 51.2 51.2 51.2h307.2c28.277 0 51.2-22.923 51.2-51.2V256.003c0-9.425-7.641-17.066-17.067-17.066z"/><path d="M458.742 19.142A65.328 65.328 0 00412.536.004a64.85 64.85 0 00-46.199 19.149L141.534 243.937a17.254 17.254 0 00-4.113 6.673l-34.133 102.4c-2.979 8.943 1.856 18.607 10.799 21.585 1.735.578 3.552.873 5.38.875a17.336 17.336 0 005.393-.87l102.4-34.133c2.515-.84 4.8-2.254 6.673-4.13l224.802-224.802c25.515-25.512 25.518-66.878.007-92.393z"/></svg>
            </div>
            <div @click="removeRow()" class="text-gray-600 hover:text-gray-400 inline-block bg-gray-200 font-bold">
                <svg class="h-4 w-4 my-2 mx-3 font-bold" fill="currentColor" viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M512.001 84.853L427.148 0 256.001 171.147 84.853 0 0 84.853 171.148 256 0 427.148l84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853L340.853 256z"/></svg>
            </div>
            <!--        <div class="border border-gray-400">-->
            <div class="border bg-white">
                <!--            <div @click="isOpen2 = ! isOpen2"  class="h-10 w-9 text-gray-600 hover:text-gray-400 inline-block bg-gray-200 font-bold">-->
                <!--                <svg class="h-6 w-6 my-2 mx-3 font-bold" fill="currentColor"  viewBox="0 0 448 448" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M408 184H272a8 8 0 01-8-8V40c0-22.09-17.91-40-40-40s-40 17.91-40 40v136a8 8 0 01-8 8H40c-22.09 0-40 17.91-40 40s17.91 40 40 40h136a8 8 0 018 8v136c0 22.09 17.91 40 40 40s40-17.91 40-40V272a8 8 0 018-8h136c22.09 0 40-17.91 40-40s-17.91-40-40-40zm0 0"/></svg>-->
                <!--            </div>-->

                <builder-element></builder-element>

                <!--                <div v-for="(element, index) in elements">-->
                <!--                    <div v-model="element.type" class="hover-trigger flex justify-start hover:bg-gray-400 inline-block max-w-xs w-48 m-4 px-4 py-2 bg-gray-300 focus:outline-none focus:shadow-outline  text-sm tracking-wider">-->
                <!--                        Text on the Button-->
                <!--                                    <div class="absolute bg-teal-400 border border-grey-100 px-2 hover-target">-->
                <!--                                        <div @click="showEditModal(element.type)" class="text-gray-400 hover:text-white inline-block font-bold">-->
                <!--                                            <svg class="h-4 w-4 my-2 mx-3 font-bold" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.873 477.873"><path fill-rule="evenodd" d="M392.533 238.937c-9.426 0-17.067 7.641-17.067 17.067V426.67c0 9.426-7.641 17.067-17.067 17.067H51.2c-9.426 0-17.067-7.641-17.067-17.067V85.337c0-9.426 7.641-17.067 17.067-17.067H256c9.426 0 17.067-7.641 17.067-17.067S265.426 34.137 256 34.137H51.2C22.923 34.137 0 57.06 0 85.337V426.67c0 28.277 22.923 51.2 51.2 51.2h307.2c28.277 0 51.2-22.923 51.2-51.2V256.003c0-9.425-7.641-17.066-17.067-17.066z"/><path d="M458.742 19.142A65.328 65.328 0 00412.536.004a64.85 64.85 0 00-46.199 19.149L141.534 243.937a17.254 17.254 0 00-4.113 6.673l-34.133 102.4c-2.979 8.943 1.856 18.607 10.799 21.585 1.735.578 3.552.873 5.38.875a17.336 17.336 0 005.393-.87l102.4-34.133c2.515-.84 4.8-2.254 6.673-4.13l224.802-224.802c25.515-25.512 25.518-66.878.007-92.393z"/></svg>-->
                <!--                                        </div>-->
                <!--                                        <div  class="text-gray-400 hover:text-white inline-block font-bold">-->
                <!--                                            <svg class="h-4 w-4 my-2 mx-3 font-bold" fill="currentColor" viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M512.001 84.853L427.148 0 256.001 171.147 84.853 0 0 84.853 171.148 256 0 427.148l84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853L340.853 256z"/></svg>-->
                <!--                                        </div>-->
                <!--                                    </div>-->
                <!--                    </div>-->
                <!--                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ColumnElement",
        data(){
            return{
                Duplicate:[{row:''}],
            }
        },
        methods:{
            removeRow(){
                this.Duplicate.splice({row:''});
                // this.table_ids.splice(index,  1);
            },

        }

    }
</script>

<style scoped>

</style>