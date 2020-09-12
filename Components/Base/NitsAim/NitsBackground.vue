<template>
  <div :class="align">
      <div :class="styling+' w-full rounded-lg bg-white'">
          <div class="text-left text-white rounded-t-md pl-5 py-3 antialiased tracking-normal text-lg font-medium" :style="head_color">
            {{ name }}
          </div>
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
    name: "NitsBackground",
    props:{
        name:'',
        head_color:'',
      styling:String,
      align:String,
    }
}
</script>

<style scoped>

</style>