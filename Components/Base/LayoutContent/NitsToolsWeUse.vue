<template>
<div class="container-fluid ml-64 pl-6 mx-40 ">
    <div class="ml-64 pl-48 -mt-64" v-for="(item,index) in contentTools">
        <div class=" " v-if="item.position === 'right'">
        <div class=" content-center font-ubuntu text-left leading-tight text-blue-800 text-sm font-sans antialiased tracking-tight font-semibold">{{item.title}}
<!--            Tools we use-->
        </div>
        <div class="flex py-4 mb-4 justify-between">
            <div class="flex cursor-pointer lg:ml-0 -ml-2">
                <img class="h-10 w-10" :src="item.image" />
                <div class="content-center hover:text-red-600 lg:ml-3 ml-2 mt-2 text-left leading-tight text-gray-600 text-bas font-ubuntu antialiased tracking-tight font-semibold">{{item.name}}
<!--                    Google Sheets-->
                </div>
            </div>
            <div class="flex cursor-pointer lg:ml-4 ml-6">
                <img class="h-10 w-10" :src="item.docs" />

                <div class="content-center hover:text-red-600 lg:ml-3 ml-2 mt-2 text-left leading-tight text-gray-600 text-bas font-ubuntu antialiased tracking-tight font-semibold">{{item.text}}
<!--                    Google Docs-->
                </div>
            </div>
            <div class="flex cursor-pointer mr-8 lg:ml-4 ml-8">
                <img class="h-10 w-10 -mt-1" :src="item.img">
                <div class="content-center lg:ml-3 ml-2 hover:text-red-600 mt-2 text-left leading-tight text-gray-600 text-bas font-ubuntu antialiased tracking-tight font-semibold">{{item.content}}
<!--                    Confluence-->
                </div>
            </div>

        </div>
        <div>
            <button class="py-2 px-4 bg-transparent text-blue-800 font-semibold border border-blue-800 rounded hover:bg-blue-800 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">{{item.learn_more}}
<!--                Learn About Digital Transformation-->
            </button>
        </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "NitsToolsWeUse",
        props:
            ['contentTools']  ,
    }
</script>

<style scoped>

</style>