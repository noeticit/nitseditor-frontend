<template>
    <div class="container">
        <div v-for="(item,index) in contentDataCenter" class="items-center grid grid-cols-1 md:grid-cols-2 gap-2" >
            <div class="mt-24 " v-if="item.location === 'left'">
                <img class=" " :src="item.image" />
            </div>
            <div class="lg:mx-12 mx-8" >
                <div class="lg:pt-16 pt-2">
                    <h2 class="text-blue-800 text-center font-bold lg:px-24 px-6 py-6 text-5xl font-ubuntu">{{item.title}}
                        <!--                            Your Business deserves better software-->
                    </h2>
                    <div class="py-3 font-ubuntu text-center text-2xl font-semibold text-blue-800 antialiased tracking-wider">{{item.sub_title}}
                        <!--                            With focused on design & development of web, Mobile & IT related services, our varied clientele crosses 100-plus mark by delivering hundreds of successful products-->
                    </div>
                    <div class="py-3 font-semibold text-blue-800 px-1 mt-5 font-normal text-xl font-ubuntu">{{item.text}}
                        <!--                            With focus on implementing modern design using cost effective technology, we strive to provide unmatched service without compromising the product deliverables.-->
                    </div>
                    <div class="text-gray-700 px-1 mt-5 font-normal text-lg font-ubuntu">{{item.content}}</div>
                    <div class="mt-12">
                    </div>
                </div>
            </div>
            <!--        <div class=" " >-->
            <!--            <img class=" mt-12  lg:px-2 lg:mx-2"  :src="item.image" />-->
            <!--        </div>-->
            <div class="lg:mt-24 -mt-10" v-if="item.location=== 'right'">
                <img class="" :src="item.image" />
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "NitsContentCenter",
        props:
            ['contentDataCenter']  ,
    }
</script>

<style scoped>

</style>