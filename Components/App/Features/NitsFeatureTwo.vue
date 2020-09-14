<template>
    <div class="w-full">
        <div class="text-center text-4xl font-bold text-blue-800 lg:px-32 lg:mt-16">
            <div class="lg:px-48 tracking-wide font-ubuntu">{{title}}</div>
        </div>
        <nits-column :gap="4" :cols="2">
            <div class="sm:w-1/2 sm:mt-16">
                <img class="lg:ml-16" :src="logo" alt="logo">
            </div>
            <div class="flex-col">
                <div v-for="(item,index) in content" @mouseover="active = index" class="bg-gray-100 mt-5 lg:px-6 flex lg:mx-6 lg:px-5 rounded lg:h-48 transition duration-500 ease-in-out transform" :class="active = index ? '-translate-y-2 shadow-lg' : ''">
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
                // this.content.forEach((ele,index) => {
                //     if(this.active === index) {
                //         console.log( ele.link)
                //        return ele.link
                //     }
                // })
                if(this.active === 0)
                    return '/project-assets/images/solutions/maintenance-2.png';
                if(this.active === 1)
                    return '/project-assets/images/Startup life-amico (1).png';
                if(this.active === 2)
                    return '/project-assets/images/solutions/solutions.png';
            }
        },
        destroy() {
            clearInterval(this.timer);
        }
    }
</script>

<style scoped>

</style>