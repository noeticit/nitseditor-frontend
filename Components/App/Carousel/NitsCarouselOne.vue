<template>
    <nits-column :gap="4" :cols="1">
        <div class="w-full">
            <div class="py-16 mt-8">
                <marquee onmouseover="this.stop()" scrollamount="12" onmouseout="this.start()" class="w-full marquee">
                    <div class="flex">
                        <div class="w-full " v-for="item in content">
                            <img style="margin-right: 18rem" :alt="item.alt" :src="item.link">
                        </div>
                    </div>
                </marquee>
            </div>
        </div>
    </nits-column>
</template>

<script>
    export default {
        name: "CarouselOne",
        props: {
            content: Array
        },
    }
</script>

<style scoped>

</style>