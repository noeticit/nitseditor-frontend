<template>

    <div class="container-fluid">
      <div v-for="(item,index) in contentData" class="items-center grid grid-cols-1 md:grid-cols-2 gap-2" >
        <div class="" v-if="item.location === 'left'">
            <img class="lg:mt-24 mt-20" :src="item.image" />
        </div>
        <div class="lg:mx-12 mx-6" >
            <div class="lg:pt-8 pt-2">
                <h2 class="text-blue-800 font-bold text-5xl font-ubuntu">{{item.title}}
                </h2>
                <div class="text-gray-800 mt-8 font-normal text-xl font-ubuntu">{{item.sub_title}}
                </div>
                <div class="text-gray-800 px-1 mt-5 font-normal text-xl font-ubuntu">{{item.text}}
                </div>
                <div class="text-gray-700 px-1 mt-5 font-normal text-lg font-ubuntu">{{item.content}}</div>
                <div class="mt-12">
                </div>
            </div>
        </div>
<!--        <div class=" " >-->
<!--            <img class=" mt-12  lg:px-2 lg:mx-2"  :src="item.image" />-->
<!--        </div>-->
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