<template>
   <div>
<!--      <div>-->
<!--         <nits-h-responsive-sticky></nits-h-responsive-sticky>-->
<!--      </div>-->
<!--      <nits-demo></nits-demo>-->
<!--      <div>-->
<!--         <nits-h-icon-and-text></nits-h-icon-and-text>-->
<!--      </div><br>-->
<!--      <div>-->
<!--       <nits-h-alternate-logo></nits-h-alternate-logo>-->
<!--   </div><br>-->
<!--      <div>-->
<!--         <nits-h-static-sticky></nits-h-static-sticky>-->
<!--      </div><br>-->
<!--      <div>-->
<!--         <nits-h-icon-with-text></nits-h-icon-with-text>-->
<!--      </div><br>-->
<!--      <div>-->
<!--         <nits-header-overlay></nits-header-overlay>-->
<!--      </div><br>-->
<!--      <div>-->
<!--         <nits-header-and-subheader-bordered></nits-header-and-subheader-bordered>-->
<!--      </div>-->
<!--      <div>-->
<!--         <nits-header-floating></nits-header-floating>-->
<!--      </div>-->
<!--      <div>-->
<!--         <nits-h-transparent></nits-h-transparent>-->
<!--      </div><br>-->
<!--       <div>-->
<!--         <nits-header-with-icon></nits-header-with-icon>-->
<!--      </div><br>-->
<!--       <div>-->
<!--           <nits-h-and-sub-h></nits-h-and-sub-h>-->
<!--       </div><br>-->
       <div>
           <nits-header-menu-with-title-and-subtitle></nits-header-menu-with-title-and-subtitle>
       </div><br>
   </div>

</template>

<script>

    import NitsDemo from "../Components/Base/Headers/NitsDemo";
    import NitsHeaderWithIcon from "../Components/Base/Headers/NitsHeaderWithIcon";
    import NitsHeaderMenuWithTitleAndSubtitle from "../Components/Base/Headers/NitsHeaderMenuWithTitleAndSubtitle";
    export default {
        name: "demo",
       components: {NitsHeaderMenuWithTitleAndSubtitle, NitsHeaderWithIcon, NitsDemo},
    }
</script>

<style scoped>

</style>