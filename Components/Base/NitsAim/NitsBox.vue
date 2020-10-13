<template>
    <div @click.prevent="check(path)" class="flex-col h-40 shadow-md rounded-lg bg-white cursor-pointer">
        <img class="mx-auto mt-5 h-16 w-16" :src="image">
        <div class="text-base mt-4 px-4 text-center font-medium leading-6 text-gray-800">{{ name }}</div>
    </div>
</template>

<script>
export default {
  name: "NitsBox",
    props:{
        image:{
          type: String,
          required: true,
        },
        name:String,
        path:String,

    },
    methods:{
        check(path){
          // this.$router.push(path)
          window.open(path, '_blank');

        }
    }
}
</script>

<style scoped>

</style>