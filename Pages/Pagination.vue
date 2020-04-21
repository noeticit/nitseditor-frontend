<template>
    <div class="kt-portlet">
        <div class="kt-portlet__body">

            <!--begin: Pagination-->
            <div class="kt-pagination kt-pagination--brand">
                <ul class="kt-pagination__links">
                    <li class="kt-pagination__link--first" @click.prevent="callPage(1)">
                        <a href="#"><i class="fa fa-angle-double-left kt-font-brand"></i></a>
                    </li>
                    <li class="kt-pagination__link--next" @click.prevent="callPage(prevPage)">
                        <a href="#"><i class="fa fa-angle-left kt-font-brand"></i></a>
                    </li>
                    <li  v-if="currentPage !== 1 && nextPage !== 1 && currentPage !== 2">
                        <a href="#" @click.prevent="goToPage(1)">{{'1'}}</a>
                    </li>
                    <li v-if="prevPage && prevPage>1">
                        <a href="#">...</a>
                    </li>
                    <li v-if="prevPage">
                        <a href="#" @click.prevent="goToPage(prevPage)">{{ prevPage }}</a>
                    </li>
                    <li class="kt-pagination__link--active">
                        <a href="#">{{ currentPage }}</a>
                    </li>
                    <li v-if="nextPage">
                        <a href="#" @click.prevent="goToPage(nextPage)">{{ nextPage }}</a>
                    </li>
                    <li v-if="currentPage !== lastPage && nextPage !== lastPage">
                        <a href="#">...</a>
                    </li>
                    <li  v-if="currentPage !== lastPage && nextPage !== lastPage">
                        <a href="#" @click.prevent="goToPage(lastPage)">{{ lastPage }}</a>
                    </li>
                    <li class="kt-pagination__link--prev" @click.prevent="callPage(nextPage)">
                        <a href="#"><i class="fa fa-angle-right kt-font-brand"></i></a>
                    </li>
                    <li class="kt-pagination__link--last">
                        <a href="#"><i class="fa fa-angle-double-right kt-font-brand" @click.prevent="callPage(meta.last_page)"></i></a>
                    </li>
                </ul>

                <div>
                   <div class="col-md-8 pull-right">
                       <div class="input-group">
                           <input type="text" class="form-control"  placeholder="Page No." v-model="page_no">
                           <div class="input-group-append">
                               <button class="btn btn-primary" type="button" @click.prevent="goToPage(page_no)">Go to Page!</button>
                           </div>
                       </div>
                   </div>
                </div>
            </div>
            <!--end: Pagination-->
        </div>
    </div>
</template>

<script>
    import {eventBus} from 'NitsModels/_events.js';
    export default {
        name: "pagination",
        data(){
            return{
                page_no:''
            }
        },
        props:{
            meta: {
                type: Object,
            },
            links: {
                type: Object
            },
            page_input_size:{
                type: Number,
                // default
            },
            location:{
                type: String
            }
        },
        methods: {
            callPage(page_no) {
                eventBus.$emit(this.location+'_pagination', page_no);
            },
            goToPage(page_no){
                if(page_no === this.meta.last_page || page_no >= this.meta.last_page)
                    eventBus.$emit(this.location+'_pagination', this.meta.last_page);
                else
                    eventBus.$emit(this.location+'_pagination', page_no);
            }
        },
        computed: {
            currentPage() {
                if(this.meta)
                    return this.meta.current_page
            },
            prevPage() {
                if(this.meta)
                {
                    if(this.meta.current_page > 1)
                        return this.meta.current_page -1;
                    else
                        return false;
                }
            },
            nextPage() {
                if(this.meta)
                {
                    if(this.meta.current_page < this.meta.last_page)
                        return this.meta.current_page + 1;
                    else
                        return false;
                }
            },
            lastPage() {
                if(this.meta)
                    return this.meta.last_page
            },
            firstPage() {
                if(this.meta)
                    return this.meta.from
            }

        },
        watch:{
            // page_no: function () {
            //     this.goToPage(this.page_no)
            // }
        }
    }
</script>

<style scoped>

</style>
