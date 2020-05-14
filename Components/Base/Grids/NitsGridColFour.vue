<template>
    <div class="h-auto grid grid-cols-4  gap-4">
        <div class="bg-white rounded-lg shadow-lg mt-5  justify-center">
            <div class="flex justify-between border-solid border-b-2 border-teal-500 p-2 text-center items-center">
                <div class="text-left text-gray-800 ml-2 text-xl antialiased leading-snug tracking-normal font-sans">
                    {{heading1}}
                </div>
                <div class="relative">
                    <!--                    <slot name="toolbox"></slot>-->
                </div>
            </div>
<!--            <div :class="'mt-2 p-3 font-sans text-gray-700 antialiased mb-2'+height">-->
<!--                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quidem minus id omnis, nam expedita, ea fuga commodi-->
<!--                voluptas iusto, hic autem deleniti dolores explicabo labore enim repellat earum perspiciatis.-->
<!--            </div>-->
        </div>
        <div class="bg-white rounded-lg shadow-lg mt-5  justify-center">
            <div class="flex justify-between border-solid border-b-2 border-teal-500 p-2 text-center items-center">
                <div class="text-left text-gray-800 ml-2 text-xl antialiased leading-snug tracking-normal font-sans">
                    {{heading1}}
                </div>
                <div class="relative">
                    <!--                    <slot name="toolbox"></slot>-->
                </div>
            </div>
            <div :class="'mt-2 p-3 font-sans text-gray-700 antialiased mb-2'+height">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quidem minus id omnis, nam expedita, ea fuga commodi
                voluptas iusto, hic autem deleniti dolores explicabo labore enim repellat earum perspiciatis.
            </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg mt-5  justify-center">
            <div class="flex justify-between border-solid border-b-2 border-teal-500 p-2 text-center items-center">
                <div class="text-left text-gray-800 ml-2 text-xl antialiased leading-snug tracking-normal font-sans">
                    {{heading2}}
                </div>
                <div class="relative">
                    <slot name="toolbox"></slot>
                </div>
            </div>
            <div :class="'mt-2 p-3 font-sans text-gray-700 antialiased mb-2'+height">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quidem minus id omnis, nam expedita, ea fuga commodi voluptas iusto, hic autem deleniti dolores explicabo labore enim repellat earum perspiciatis.
            </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg mt-5  justify-center">
            <div class="flex justify-between border-solid border-teal-500 border-b-2 p-2 text-center items-center">

                <div class="text-left text-gray-800 ml-2 text-xl antialiased leading-snug tracking-normal font-sans">
                    {{heading3}}
                </div>

                <div class="relative">
                    <slot name="toolbox"></slot>
                </div>
            </div>
            <div :class="'mt-2 p-3 font-sans text-gray-700 antialiased mb-2'+height">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quidem minus id omnis, nam expedita, ea fuga commodi voluptas iusto, hic autem deleniti dolores explicabo labore enim repellat earum perspiciatis.
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NitsGridColFour"
    }
</script>

<style scoped>

</style>