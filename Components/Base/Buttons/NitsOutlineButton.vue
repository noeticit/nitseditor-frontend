<template>
  <button style="border-color:#5d78ff; color: #5d78ff; " :class="styling+' focus:outline-none border text-white bg-white py-1 px-4 text-xs font-medium antialiased tracking-wide'">
    {{name}}
  </button>
</template>

<script>
export default {
name: "NitsOutlineButton",
  props:{
    name:String,
    styling:String
  }
}
</script>

<style scoped>

</style>