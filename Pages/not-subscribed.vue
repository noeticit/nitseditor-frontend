<template>
    <div class="">
        <div class="mt-20">
            <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                    <!--                <p class="uppercase tracking-loose w-full">What business are you?</p>-->
                    <h1 class="my-4 text-4xl font-bold leading-tight ml-10 uppercase text-gray-700">You have not subscribe to this page</h1>
                    <h2 class="mb-4 text-2xl font-bold leading-tight ml-10 text-red-700">Please Contact To Admin</h2>
                    <!--                <p class="leading-normal text-2xl mb-8">Sub-hero message, not too long and not too short. Make it just right!</p>-->
                  <div class="flex flex-col">
                    <div @click="login()" class="ml-10 hover:underline text-white bg-blue-600 font-bold cursor-pointer rounded-lg py-4 px-6 shadow-lg">Go Back</div>
                    <div @click="home()" class="ml-10 hover:underline text-white bg-blue-600 font-bold cursor-pointer rounded-lg py-4 px-6 shadow-lg">Home</div>
                  </div>
                </div>
                <div class="w-full md:w-3/5 py-6 text-center">
                                    <img class="w-full z-50" src="/nits-assets/images/subscribe.jpg">
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
name: "NotSubscribed",
    methods:{
      login() {
            let route = this.$router.resolve({ name: 'login'})
            window.open(route.href, '_blank');
        },
      home() {
        let route = this.$router.resolve({ name: 'dashboard'})
        window.open(route.href, '_blank');
      },
    }
}
</script>

<style scoped>

</style>
