<template>
    <button @click="emitEvent()" class="bg-indigo-500 rounded-full text-sm text-white font-medium mx-auto px-8 py-2">
        {{text}}
    </button>
</template>

<script>
    import {eventBus} from 'NitsModels/_events';
    export default {
        name: "NitsButton",
        props:{
            text: String
        },
        methods:{
            emitEvent(){
                eventBus.$emit('show-modal');
            }
        }
    }
</script>

<style scoped>

</style>