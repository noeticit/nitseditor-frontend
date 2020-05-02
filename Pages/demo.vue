<template>
<!--   <nits-h-responsive-sticky>-->
<!--       -->
<!--   </nits-h-responsive-sticky>-->
<!--    <nits-h-static-sticky>-->

<!--    </nits-h-static-sticky>-->
<!--    <nits-h-alternate-logo>-->

<!--    </nits-h-alternate-logo>-->
    <nits-h-icon-and-text></nits-h-icon-and-text>
</template>

<script>
    import NitsHStaticSticky from "../Components/Base/Headers/NitsHStaticSticky";
    import NitsHAlternateLogo from "../Components/Base/Headers/NitsHAlternateLogo";
    import NitsHIconAndText from "../Components/Base/Headers/NitsHIconAndText";
    export default {
        name: "demo",
        components: {NitsHIconAndText, NitsHAlternateLogo, NitsHStaticSticky}
    }
</script>

<style scoped>

</style>