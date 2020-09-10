<template>

    <div class="container-fluid">
      <div v-for="(item,index) in contentData" class="items-center grid grid-cols-1 md:grid-cols-2 gap-2" >
        <div class="" v-if="item.location === 'left'">
            <img class="lg:mt-24 mt-20" :src="item.image" />
        </div>
        <div class="lg:mx-12 mx-6" >
            <div class="lg:pt-8 pt-2">
                <div class=" content-center font-ubuntu text-left leading-tight text-blue-800 text-base antialiased tracking-tight font-semibold">{{item.heading}}</div>
                <h2 class="text-blue-800 font-bold text-5xl font-ubuntu">{{item.title}}</h2>
                <h2 class="text-blue-800 font-bold text-4xl font-ubuntu">{{item.size}}</h2>
                <div class="content-center text-left leading-tight text-blue-800 text-3xl mt-5 font-ubuntu antialiased tracking-normal font-semibold">{{item.sub_title}}
                </div>
                <div class="text-gray-800 px-1 mt-5 font-medium text-xl font-ubuntu">{{item.text}}
                </div>
                <div class="leading-normal text-gray-700 mt-6 text-lg font-ubuntu antialiased tracking-wide font-medium">{{item.content}}</div>
                <div class="container-fluid mt-10">
                    <div class=" content-center font-ubuntu text-left leading-tight text-blue-800 text-sm font-sans antialiased tracking-tight font-semibold">{{item.head}}
                        <!--            Tools we use-->
                    </div>
                    <div class="flex py-4 mb-4 justify-between">
                        <div v-for="(ele,index) in item.demo"  class="flex cursor-pointer lg:ml-0 -ml-2">
                            <img class="h-10 w-10" :src="ele.tool" />
                            <div class="content-center hover:text-red-600 lg:ml-3 ml-2 mt-2 text-left leading-tight text-gray-600 text-bas font-ubuntu antialiased tracking-tight font-semibold">{{ele.name}}
                                <!--                    Google Sheets-->
                            </div>
                        </div>
<!--                        <div class="flex cursor-pointer lg:ml-4 ml-6">-->
<!--                            <img class="h-10 w-10" :src="item.docs" />-->

<!--                            <div class="content-center hover:text-red-600 lg:ml-3 ml-2 mt-2 text-left leading-tight text-gray-600 text-bas font-ubuntu antialiased tracking-tight font-semibold">{{item.name2}}-->
<!--                                &lt;!&ndash;                    Google Docs&ndash;&gt;-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="flex cursor-pointer mr-8 lg:ml-4 ml-8">-->
<!--                            <img class="h-10 w-10 -mt-1" :src="item.img">-->
<!--                            <div class="content-center lg:ml-3 ml-2 hover:text-red-600 mt-2 text-left leading-tight text-gray-600 text-bas font-ubuntu antialiased tracking-tight font-semibold">{{item.name3}}-->
<!--                                &lt;!&ndash;                    Confluence&ndash;&gt;-->
<!--                            </div>-->
<!--                        </div>-->

                    </div>
                    <div>
                        <button class="py-2 px-4 bg-transparent text-blue-800 font-semibold border border-blue-800 rounded hover:bg-blue-800 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">{{item.learn_more}}
                            <!--                Learn About Digital Transformation-->
                        </button>
                    </div>
                <div class="mt-12">
                </div>
            </div>
        </div>
        </div>
        <div class="lg:mt-24 mt-8 lg:mx-8 mx-4" v-if="item.location=== 'right'">
            <img class="" style="max-height: 860px;" :src="item.image" >
        </div>

    </div>

    </div>

<!--    <div class="container mt-12">-->
<!--        <nits-grid cols="2" col="1" gap="2" >-->
<!--          <div  v-for="(item,index) in contentData">-->
<!--            <div class=" " v-if="item.location === 'left'">-->
<!--                <img class=" " :src="item.image" />-->
<!--            </div>-->
<!--            <div class="mx-12" >-->
<!--                <div class="lg:pt-16 pt-2">-->
<!--                    <h2 class="text-blue-800 font-bold text-5xl font-ubuntu">{{item.title}}-->
<!--                        &lt;!&ndash;                            Your Business deserves better software&ndash;&gt;-->
<!--                    </h2>-->
<!--                    <p class=" text-gray-800 mt-8 font-normal text-xl font-ubuntu">{{item.sub_title}}-->
<!--                        &lt;!&ndash;                            With focused on design & development of web, Mobile & IT related services, our varied clientele crosses 100-plus mark by delivering hundreds of successful products&ndash;&gt;-->
<!--                    </p>-->
<!--                    <p class="text-gray-700 px-1 mt-5 font-normal text-lg font-ubuntu">{{item.content}}-->
<!--                        &lt;!&ndash;                            With focus on implementing modern design using cost effective technology, we strive to provide unmatched service without compromising the product deliverables.&ndash;&gt;-->
<!--                    </p>-->
<!--                    <div class="mt-12">-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="" v-if="item.location=== 'right'">-->
<!--              <img class="" :src="item.image" />-->
<!--            </div>-->
<!--          </div>-->
<!--        </nits-grid>-->
<!--    </div>-->
</template>

<script>
    export default {
        name: "NitsContent",
        props:
           ['contentData']  ,
        // data(){
        //     return{
        //         attrs: {},
        //     }
        // }
    }
</script>

<style scoped>

</style>