<template>

    <div class="container">
      <div v-for="(item,index) in contentData" class="items-center grid grid-cols-1 md:grid-cols-2 gap-2" >
        <div class="mt-24 " v-if="item.location === 'left'">
            <img class=" " :src="item.image" />
        </div>
        <div class="mx-12" >
            <div class="lg:pt-16 pt-2">
                <h2 class="text-blue-800 font-bold text-5xl font-ubuntu">{{item.title}}
                    <!--                            Your Business deserves better software-->
                </h2>
                <p class=" text-gray-800 mt-8 font-normal text-xl font-ubuntu">{{item.sub_title}}
                    <!--                            With focused on design & development of web, Mobile & IT related services, our varied clientele crosses 100-plus mark by delivering hundreds of successful products-->
                </p>
                <p class="text-gray-700 px-1 mt-5 font-normal text-lg font-ubuntu">{{item.content}}
                    <!--                            With focus on implementing modern design using cost effective technology, we strive to provide unmatched service without compromising the product deliverables.-->
                </p>
                <div class="mt-12">
                </div>
            </div>
        </div>
<!--        <div class=" " >-->
<!--            <img class=" mt-12  lg:px-2 lg:mx-2"  :src="item.image" />-->
<!--        </div>-->
        <div class="mt-24" v-if="item.location=== 'right'">
            <img class="" :src="item.image" />
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
        data(){
            return{
                attrs: {},
            }
        }
    }
</script>

<style scoped>

</style>