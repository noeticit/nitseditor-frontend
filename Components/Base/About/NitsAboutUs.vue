<template>
    <div class="">
        <div>
            <img src="/nits-assets/images/school_image.jpg">
        </div>
        <div class="px-24 py-10 ">
            <nits-grid-col-three
                    heading1="About Us"
                    heading2="About Us"
                    heading3="About Us"
            ></nits-grid-col-three>
        </div>


    </div>

</template>

<script>
    import NitsGridColThree from "../Grids/NitsGridColThree";
    export default {
        name: "NitsAboutUs",
        components: {NitsGridColThree}
    }
</script>

<style scoped>

</style>