<template>
    <div class="w-full">
        <div class="text-center md:text-4xl text-2xl font-bold text-blue-800 md:px-32 mt-5 py-2 md:py-16">
            <div class="lg:px-48 tracking-wide font-ubuntu">{{title}}</div>
        </div>
        <div class="grid gap-2 grid-cols-2 md:grid-cols-8 px-3 md:px-24">
          <div :class="item.style" v-for="(item,index) in content">
            <div class="font-ubuntu py-3 px-4 text-center text-base text-white antialiased tracking-tight font-semibold">{{item.title}}</div>
            <div class="flex bg-white rounded mt-4 px-2 py-3" v-for="(ele,index) in item.demo">
              <img class="h-6 w-6" :src="ele.link">
              <div class="content-center ml-3 mt-1 text-left leading-tight text-gray-600 text-sm font-ubuntu antialiased tracking-tight font-semibold">
                {{ele.name}}
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NitsPortfolioEight",
        props: {
            title: {
                type: String,
                required: true
            },
            content: Array,
        }
    }
</script>

<style scoped>

</style>