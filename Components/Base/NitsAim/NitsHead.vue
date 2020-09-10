<template>
  <div class="w-full h-16 bg-white justify-between flex">
    <div class="pl-6 my-auto text-left text-lg text-gray-700 font-medium antialiased leading-snug tracking-normal font-sans">
      {{head}}
    </div>
    <div class="my-auto flex pr-6">
<!--      <button style="border-color:#5d78ff; color: #5d78ff; " class="rounded-full focus:outline-none border text-white bg-white py-1 px-4 text-xs font-medium antialiased tracking-wide">-->
<!--        Download Profile-->
<!--      </button>-->
<!--      <button style="border-color:#5d78ff; color: #5d78ff; " class="rounded focus:outline-none border text-white bg-white py-1 px-4 text-xs ml-2 font-medium antialiased tracking-wide">-->
<!--        Follow-->
<!--      </button>-->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
name: "NitsHead",
  props:{
  head:''
  }
}
</script>

<style scoped>

</style>