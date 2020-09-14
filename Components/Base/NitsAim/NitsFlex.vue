<template>
  <div class="flex justify-center">
    <div class="m-1 rounded-lg shadow-lg bg-white w-10/12">
      <div class="flex border-b p-2 text-center items-center">
        <div class="text-left ml-6 py-3 text-xl text-gray-700 font-semibold antialiased leading-snug tracking-normal font-sans">{{name}}</div>
        <div @click="redirect(path)" class="text-left ml-2 py-3 text-xl text-indigo-500 font-medium antialiased leading-snug tracking-normal cursor-pointer font-sans">{{link}}</div>
      </div>
      <div class="m-4">

        <slot></slot>

      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "NitsFlex",
  props:{
    name:String,
    path:String,
    link:String,
  },
  methods:{
    redirect(path){
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>

</style>