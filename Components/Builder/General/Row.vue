<template>
    <div>
        <div class="" style="height: 400px;">
            <input-field label="Text Setting"></input-field>
        </div>
        <div class="flex items-center mt-5 justify-end p-6 border-t border-solid border-gray-300 bg-gray-300 rounded-b">
            <button @click="isOpen2 = ! isOpen2" class="text-white bg-gray-500 bg-transparent border border-solid border-gray-500 active:bg-gray-500 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease">
                Close
            </button>
            <button class="text-white bg-blue-600 bg-transparent border border-solid border-blue-600 active:bg-gray-500 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" >
                Save Changes
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GeneralRowElement"
    }
</script>

<style scoped>

</style>