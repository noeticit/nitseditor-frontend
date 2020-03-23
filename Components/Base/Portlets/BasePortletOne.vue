<template>
    <div class="bg-white rounded-lg shadow-lg m-2 p-2 w-full jsutify-center height">
        <div class="flex flex-col">
            <div class="flex justify-between h-10 p-3 border-b-2">
                <div>Title and headers</div>
                <div>Action buttons</div>
            </div>
            <div class="mt-2 p-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
            </div>
            <base-button></base-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BasePortletOne"
    }
</script>

<style scoped>
    .height {
        min-height: 100px;
    }
</style>