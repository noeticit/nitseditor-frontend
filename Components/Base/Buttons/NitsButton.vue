<template>
    <div>
        <div class="my-auto text-sm mt-4 font-medium px-16">Selected Option</div>
        <nits-grid :cols="2" :gap="4">
            <v-swatches
                    v-model="color"
            ></v-swatches>
            <svg class="h-4 w-4 mt-4 mx-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M17.561 2.439c-1.442-1.443-2.525-1.227-2.525-1.227L8.984 7.264 2.21 14.037 1.2 18.799l4.763-1.01 6.774-6.771 6.052-6.052c-.001 0 .216-1.083-1.228-2.527zM5.68 17.217l-1.624.35a3.71 3.71 0 00-.69-.932 3.742 3.742 0 00-.932-.691l.35-1.623.47-.469s.883.018 1.881 1.016c.997.996 1.016 1.881 1.016 1.881l-.471.468z"/></svg>
        </nits-grid>
    </div>

</template>

<script>
    import {eventBus} from 'NitsModels/_events';
    import VSwatches from 'vue-swatches'

    export default {
        name: "NitsButton",
        components:{VSwatches},
        props:{
            text: String
        },
        data(){
            return{
                color:''
            }
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