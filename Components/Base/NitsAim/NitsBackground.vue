<template>
  <div class="w-full bg-white mx-2">
      <div class="text-left text-white rounded-t-md pl-5 py-3 antialiased tracking-normal text-lg font-medium" :style="head_color">
          {{ name }}
      </div>
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: "NitsBackground",
  props:{
      name:'',
      head_color:'',
  }
}
</script>

<style scoped>

</style>