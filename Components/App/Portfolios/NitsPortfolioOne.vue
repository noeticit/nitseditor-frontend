<template>
    <nits-column class="w-full lg:px-10 px-2" :gap="4" :col="1">
        <div class="lg:mt-16 mt-8">
            <div class="text-blue-800 tracking-wide font-bold md:text-4xl text-2xl text-center font-ubuntu">{{title}}</div>
        </div>
        <div class="flex flex-wrap mt-8 mx-2 md:px-16">
          <div class="grid gap-2 md:gap-10 grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 md:mt-5 mt-3">
            <div v-for="item in content" >
                <a class="w-full">
                    <div class="relative">
                      <div class="poster-container">
                        <div class="flex justify-center">
                          <img class="poster h-24 w-24 md:w-64 md:h-56" :src="item.image">

                        </div>
                        <div class="absolute bottom-0 flex justify-center w-full">
                          <div class="md:w-24 md:h-24 md:p-3 h-12 w-12 p-2 md:-mb-10 -mb-6">
                            <img class="w-full h-full" :src="item.icon">

                          </div>

                        </div>
                      </div>
                    </div>

                    <div class="md:mt-4 mt-3 text-center text-sm md:text-xl font-semibold antialiased  text-blue-800 tracking-normal font-ubuntu">
                      <div class="md:pt-4 pt-2">
                        {{item.title}}
                      </div>
                    </div>
                  </a>



            </div>
          </div>
        </div>
    </nits-column>
</template>

<script>
    export default {
        name: "NitsPortfolioOne",
        props: {
            title: {
                type: String,
                required: true
            },
            content: Array,
            margin: Number
        },
    }
</script>

<style scoped>

</style>