<template>
    <div class="flex-col justify-start w-full">
        <div class="mt-2 ml-2 block uppercase tracking-wide text-left text-gray-700 text-sm font-bold mb-2">{{ label }}</div>
        <vue-dropzone
                ref="myVueDropzone"
                id="dropzone"
                :options="options"
                :useCustomSlot=true
        >
            <div class="dropzone-custom-content">
                <h3 class="dropzone-custom-title">Drag and drop to upload content!</h3>
                <div class="subtitle">...or click to select a file from your computer</div>
            </div>
        </vue-dropzone>
    </div>
</template>

<script>
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'

    export default {
        name: "NitsDropzone",
        components: {
            vueDropzone: vue2Dropzone
        },
        props: {
            uploadApi: String,
            hint: String,
            label: String,
            options: Object,
            value: '',
        },
        data(){
            return{

            }
        },
    }
</script>

<style scoped>
    .dropzone-custom-content {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    .dropzone-custom-title {
        margin-top: 0;
        color: #00b782;
    }

    .subtitle {
        color: #314b5f;
    }
</style>