<template>
    <nits-column :gap="4" :cols="1">
        <div class="carousel relative mt-10 bg-white mx-10">
            <div class="carousel-inner relative overflow-hidden w-full ">
                <div class="text-4xl font-bold text-center text-blue-800 font-ubuntu antialiased tracking-normal">{{title}}</div>
                <div class="text-xl pt-5 font-bold text-center text-blue-800 font-ubuntu antialiased tracking-normal">{{subtitle}}</div>

                <div v-for="(item,index) in content">
                    <input class="carousel-open" type="radio" :id="'carousel-'+item.id" name="carousel" aria-hidden="true" hidden="" :checked="{ 'checked': index === 0 }">
                    <div class="carousel-item absolute opacity-0 lg:mt-4" style="height:50vh;">
                        <div class=" h-full w-full text-center ">
                            <div class="w-full md:w-3/4 lg:px-64 lg:mx-40 pt-2 ">
                                <div class="mt-1 text-center">
                                    <img class="inline-block text-center rounded-full h-20 w-20" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                </div>
                                <div class=" py-2">
                                    <p class="text-gray-800 font-ubuntu text-base px-6 py-3 mb-3">{{item.comment}}</p>
                                    <p class="text-gray-500 text-xs italic md:text-sm px-6">{{item.name}}</p>
                                </div>
                            </div>
                        </div>
                        <!--                <div class="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill" >-->
                    </div>
                    <label :for="'carousel-'+3" class="prev control-1 w-10 h-10  -ml-4 lg:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                    <label :for="'carousel-'+2" class="next control-1 w-10 h-10 -mr-4 lg:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

<!--                    &lt;!&ndash; Add additional indicators for each slide&ndash;&gt;-->
<!--                    <ol class="carousel-indicators">-->
<!--                        <li class="inline-block mr-3">-->
<!--                            <label for="carousel-1" class="carousel-bullet cursor-pointer block text-4xl text-gray-600 hover:text-blue-800">•</label>-->
<!--                        </li>-->
<!--                        <li class="inline-block mr-3">-->
<!--                            <label for="carousel-2" class="carousel-bullet cursor-pointer block text-4xl text-gray-600 hover:text-blue-800">•</label>-->
<!--                        </li>-->
<!--                        <li class="inline-block mr-3">-->
<!--                            <label for="carousel-3" class="carousel-bullet cursor-pointer block text-4xl text-gray-600 hover:text-blue-800">•</label>-->
<!--                        </li>-->
<!--                    </ol>-->

                </div>
            </div>
        </div>
    </nits-column>
</template>

<script>
    export default {
        name: "NitsTestimonialOne",
        props: {
            title: {
                type: String,
                required: true
            },
            subtitle: String,
            content: Array
        },
    }
</script>

<style scoped>

</style>