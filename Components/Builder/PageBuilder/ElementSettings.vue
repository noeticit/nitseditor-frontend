<template>
    <div class="m-2">
        <div @click="isOpen2 =! isOpen2" class="flex justify-between mx-3">
            <div class="text-sm font-medium leading-6 text-gray-800">Settings</div>
            <svg :class="{'rotate-180': isOpen2, 'rotate-0': !isOpen2}" class="h-4 w-4 mr-1 transition-transform duration-200 transform inline" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"/></svg>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ElementSettings",
        data(){
            return{
                isOpen2 : true,
            }
        },
    }
</script>

<style scoped>

</style>