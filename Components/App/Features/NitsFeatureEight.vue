<template>
    <nits-column :gap="4" :cols="1">
        <div class="w-full">
            <div class="text-center mb-5 text-4xl font-bold text-blue-800 md:px-24 md:py-8">
                <div class="lg:px-32 py-8 tracking-wide font-ubuntu">
                    {{title}}
                </div>
                <div class="text-center px-10 leading-snug text-gray-600 text-lg font-ubuntu antialiased tracking-wide font-normal">{{subtitle}}</div>
            </div>
            <nits-grid :cols="per_row" :gap="2" :padding="12">
                <div v-for="(item,index) in tableData" class="m-2 mt-3 border rounded-lg shadow-lg items-center overflow-hidden">
                    <div class="text-center items-center">
                        <img class="inline-block hover:scale-110 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0" :src="item.image" style="width: 600px;height: 270px">
                    </div>
                    <div class="p-4">
                        <div class="mt-4 w-full text-left text-blue-700 text-xl font-semibold font-sans tracking-tight antialiased">
                            {{item.title}}
                        </div>
                        <div class="mt-3 w-full text-left text-gray-600 text-base font-normal font-sans tracking-normal leading-snug antialiased" v-html="item.description.substring(0, 120) + (item.description.length > 120 ? '': '')"></div>
                        <div class="flex mt-5">
                            <svg class="h-3 w-3 mt-1 text-gray-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
                                <path fill-rule="evenodd" d="M386.816 323.456l-69.984-14.016c-7.424-1.472-12.832-8.064-12.832-15.68v-16.064c4.608-6.4 8.928-14.944 13.408-23.872 3.424-6.752 8.576-16.928 10.88-19.328 13.568-13.28 28.032-29.76 32.448-51.232 4-19.456 0-29.568-4.64-37.568 0-15.648 0-44.288-5.44-64.928-.544-24.928-5.12-39.008-16.608-51.552-8.128-8.768-20.096-10.816-29.696-12.448-3.808-.64-9.024-1.536-10.848-2.528C276.896 5.056 260.032.512 239.392 0c-42.24 1.6-94.08 28.384-111.424 76.544-5.28 14.624-4.768 38.624-4.384 57.92l-.448 11.232c-4.064 8-8.064 18.112-4.032 37.536 4.416 21.568 18.88 38.016 32.384 51.232 2.336 2.432 7.552 12.672 11.008 19.424 4.544 8.896 8.896 17.44 13.504 23.84v16.032c0 7.616-5.408 14.208-12.864 15.68l-69.984 14.016C48.448 332.384 16 371.968 16 417.568V448c0 17.632 14.368 32 32 32h384c17.632 0 32-14.368 32-32v-30.432c0-45.6-32.448-85.184-77.184-94.112zM432 448H48v-30.432c0-30.4 21.632-56.8 51.456-62.752l69.952-14.016C191.776 336.384 208 316.576 208 293.76V272c0-4.288-1.728-8.416-4.768-11.392-2.752-2.688-8.672-14.336-12.224-21.28-6.016-11.776-11.2-21.952-17.12-27.712-10.624-10.368-20.768-21.76-23.456-34.816-2.08-10.112-.64-12.96 1.216-16.576 1.632-3.2 4.064-8 4.064-14.528l-.16-11.872c-.288-13.984-.768-37.408 2.496-46.432C170.464 52.96 209.856 33.152 239.584 32c14.656.384 26.176 3.424 38.4 10.24 6.592 3.648 14.272 4.928 21.024 6.08 3.808.64 10.176 1.728 11.488 2.56 4.32 4.704 7.904 10.368 8.16 32.384 0 1.44.224 2.88.64 4.288 4.768 16.352 4.768 44.576 4.768 58.144 0 6.528 2.464 11.328 4.064 14.528 1.856 3.616 3.296 6.464 1.216 16.608-2.656 12.992-12.864 24.416-23.456 34.784-5.952 5.824-11.104 16-17.056 27.808-3.456 6.912-9.312 18.496-12.032 21.152A16.003 16.003 0 00272 272v21.76c0 22.816 16.224 42.624 38.592 47.072l69.984 14.016c29.792 5.92 51.424 32.32 51.424 62.72V448z"/>
                            </svg>
                            <div class="text-center ml-1 text-gray-500 text-sm font-normal font-sans leading-snug tracking-normal antialiased">
                                By <span class="hover:underline cursor-pointer text-blue-600">{{item.author}}</span>
                            </div>
                        </div>
                        <button @click.prevent="Open(item.id)" class="mt-3 focus:outline-none focus:bg-red-100 py-2 px-4 text-left text-red-700 text-base hover:bg-red-100 font-semibold font-sans tracking-wide antialiased rounded-full">
                            Read story
                        </button>
                    </div>
                    <div class="border-t-2 h-12 w-full">
                        <div class="flex px-4 justify-between items-center text-center">
                            <div class="mt-1 inline-flex items-center text-center rounded-full shadow-sm py-2 px-4 bg-blue-100" v-for="(ele,index) in item.tags">
                                <span class="items-center text-center text-xs antialiased tracking-tight font-semibold font-ubuntu text-blue-700">{{ele.name}}</span>
                            </div>
                            <div class="text-center text-gray-400 italic text-sm font-semibold font-sans tracking-wide antialiased">
                                {{item.created_at}}
                            </div>
                        </div>
                    </div>
                </div>
            </nits-grid>
        </div>
    </nits-column>

</template>

<script>
    export default {
        name: "NitsFeatureEight",
        props: {
            title:String,
            subtitle:String,
            per_row: Number,
            page_name: String,
            api: String,
        },
        data(){
            return{
                tableData:[]
            }
        },
        methods: {
            Open(id) {
                if(this.page_name === 'knowledge_base')
                    this.$router.push({name: 'knowledge-base-edit', params: {edit: id}})
                if(this.page_name === 'case_study')
                   this.$router.push({name: 'case-study-edit', params: {edit: id}})
                if(this.page_name === 'newsroom')
                    this.$router.push({name: 'footer-menu-knowledge-base-view', params: {id: id}})
            },
        },
        created(){
            this.$api.get(this.api).then(response => {
                if(response.status === 200)
                {
                    this.tableData= response.data.data
                }
            })
        }
    }
</script>

<style scoped>

</style>