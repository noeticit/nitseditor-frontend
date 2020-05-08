<template>
    <div class="relative">
        <nav class="absolute top-0 bg-transparent px-8 mx-auto border-b w-screen ">
            <div class="flex justify-between h-32 ">

                <div class=" mt-12 font-semibold">
                    <div class="float-left ml-10">
                        <div class="inline-block text-white  mx-3">
                            <a class="text-xl px-2 font-sans " href="#">{{label1}}
<!--                                Home-->
                            </a>
                        </div>
                        <div class="inline-block text-white mx-3">
                            <a class="text-xl px-2 font-sans" href="#">{{label2}}
<!--                                Explore-->
                            </a>
                        </div>
                        <div class="inline-block text-white mx-3">
                            <a class="text-xl px-2 font-sans " href="#">{{label3}}
<!--                                Pricing-->
                            </a>
                        </div>
                        <div class="float-right -mt-4 pr-3 mx-16">
                            <img class="h-16 w-56  ml-64" src="/nits-assets/images/nits-editor-logo.png">
                        </div>
                        <div class="absolute right-0 mr-24 -mt-8">
                        <div class=" inline-block text-white  p-1 mx-3">
                            <a class="text-xl font-sans px-2" href="#">{{label4}}
<!--                                FAQs-->
                            </a>
                        </div>
                        <div class="inline-block text-white p-1 mx-3">
                            <a class="text-xl font-sans px-2" href="#">{{label5}}
<!--                                Gallery-->
                            </a>
                        </div>
                        <div class="inline-block bg-smoke-200 text-white  p-1 mx-3">
                            <a class="text-xl font-sans rounded-full bg-blue-100 py-3 px-6" href="#">{{label6}}
<!--                                Login-->
                            </a>
                        </div>
                        </div>

                    </div>
                </div>

            </div>

        </nav>
        <div class="absolute right-0 px-40 mt-64 -mr-20 ">
            <h3 class=" font-black text-4xl mt-40 text-white ">{{heading}}</h3>
        </div>
        <div class=" h-full w-full">
            <img src="/project-assets/images/Advertising-Agency-Website.jpg" class="w-screen h-full" alt=" image">
        </div>

    </div>

</template>

<script>
    export default {
        name: "NitsMenuCenteredLogo",

        props: {
            label1: {
                type: String,
                required: true
            },
            label2: {
                type: String,
                required: true
            },
            label3: {
                type: String,
                required: true
            },
            label4: {
                type: String,
                required: true
            },
            label5: {
                type: String,
                required: true
            },
            label6: {
                type: String,
                required: true
            },

            heading:{
                type: String,
                required: true
            }
        },

    }
</script>

<style scoped>

</style>