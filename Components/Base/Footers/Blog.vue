<template>
    <div>
    <div class="relative">
        <img src="/nits-assets/images/blog_background.jpg" alt="" class=" w-full h-64">
        <div class="w-full h-40 absolute top-0  ">
            <h2 class="uppercase  text-center sm:mt-16 text-white font-bold text-5xl ">
                Blog
            </h2>
            <p class=" content-center text-center mt-4 text-white font-semibold text-lg cursor-pointer">
                READ THE NEWS
            </p>
        </div>
    </div>
    <div class="bg-gray-100">
        <!-- featured -->
        <div class="max-w-6xl mx-auto pt-10 pb-10">
            <ul class="flex flex-wrap -mx-2 overflow-hidden">
                <li class="my-2 px-2 w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
                    <a href="">
                        <div class="mx-2 flex items-center justify-center bg-gray-300 bg-cover bg-center relative rounded overflow-hidden" style="height:400px; background-image:url(https://picsum.photos/300/400)">
                            <div class="absolute w-full h-full bg-black z-10 opacity-50"></div>
                            <div class="relative z-20 text-center p-5">
                                <span class="inline-block text-white uppercase text-xs tracking-wide">Beauty</span>
                                <h2 class="text-white font-semibold font-serif text-xl my-5">Skin Care Principles Can Help You Grow as a Person</h2>
                                <span class="inline-block text-xs text-white font-sans">December 02, 2019. By Pooja</span>
                            </div>
                        </div>
                    </a>
                </li>
                <li class="my-2 px-2 w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
                    <a href="">
                        <div class="mx-2 flex items-center justify-center bg-gray-300 bg-cover bg-center relative rounded overflow-hidden" style="height:400px; background-image:url(https://picsum.photos/300/400)">
                            <div class="absolute w-full h-full bg-black z-10 opacity-50"></div>
                            <div class="relative z-20 text-center p-5">
                                <span class="inline-block text-white uppercase text-xs tracking-wide">Fashion</span>
                                <h2 class="text-white font-semibold font-serif text-xl my-5">Vogue and Verve: The Face of Fashion in These Modern Day</h2>
                                <span class="inline-block text-xs text-white font-sans">November 21, 2019. By Pooja</span>
                            </div>
                        </div>
                    </a>
                </li>
                <li class="my-2 px-2 w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
                    <a href="">
                        <div class="mx-2 flex items-center justify-center bg-gray-300 bg-cover bg-center relative rounded overflow-hidden" style="height:400px; background-image:url(https://picsum.photos/300/400)">
                            <div class="absolute w-full h-full bg-black z-10 opacity-50"></div>
                            <div class="relative z-20 text-center p-5">
                                <span class="inline-block text-white uppercase text-xs tracking-wide">Food</span>
                                <h2 class="text-white font-semibold font-serif text-xl my-5">Take your tastebuds for a ride with these places</h2>
                                <span class="inline-block text-xs text-white font-sans">November 08, 2019. By Pooja</span>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Blog"
    }
</script>

<style scoped>

</style>