<template>
  <div class="h-screen overflow-y-auto w-full">
    <div :class="styling+ ' py-2 mb-24'">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
name: "NitsFlex",
  props: {
    styling:String,
  }

}
</script>

<style scoped>

</style>