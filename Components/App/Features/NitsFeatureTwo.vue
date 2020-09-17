<template>
    <div class="w-full">
        <div class="text-center md:text-4xl text-2xl font-bold text-blue-800 lg:px-32 lg:mt-16 mb-12">
            <div class="lg:px-48 tracking-wide font-ubuntu">{{title}}</div>
        </div>
        <nits-column :gap="4" :cols="1" class="md:grid-cols-2">
            <div class="flex-col">
                <img class="lg:ml-16 ml-4" :src="logo" alt="logo">
            </div>
            <div class="flex-col">
                <div v-for="(item,index) in content" @mouseover="active = index" class="bg-gray-100 mt-5 lg:px-6 flex lg:mx-6 lg:px-5 rounded lg:h-48 transition duration-500 ease-in-out transform " :class="active === index ? '-translate-y-2 shadow-lg' : ''">
                    <div class="h-full lg:mt-8 sm:w-32">
                        <img class="h-24 w-24 ml-2 mr-3" :src="item.icon">
                    </div>
                    <div class="flex-col lg:mt-12 text-left">
                        <h5 class="text-xl text-gray-800 font-semibold font-ubuntu">{{item.title}}</h5>
                        <p class="text-sm text-gray-600 mt-4 font-ubuntu">{{item.subtitle}}</p>
                    </div>
                </div>
            </div>
        </nits-column>
    </div>

</template>

<script>
    export default {
        name: "NitsFeatureTwo",
        props: {
            title: {
                type: String,
                required: true
            },
            content: Array
        },
        data() {
            return {
                active: 0,
                timer: ''
            }
        },
        created() {
            this.timer = setInterval(() => {
                if(this.active === 2)
                    this.active = 0;
                else
                    this.active++;
            }, 3000);
        },
        computed: {
            logo() {
                return this.content[this.active].image;
            }
        },
        destroy() {
            clearInterval(this.timer);
        }
    }
</script>

<style scoped>

</style>