<template>
    <div class="flex-col justify-start w-full">
        <div class="mt-2 ml-2 block uppercase tracking-wide text-left text-gray-700 text-sm font-bold mb-2">{{ label }}</div>
        <vue-dropzone
                ref="myVueDropzone"
                id="dropzone"
                :options="options"
                :useCustomSlot=true
                :value="value"
                @vdropzone-complete="afterComplete"
        >
            <div class="dropzone-custom-content">
                <h3 class="dropzone-custom-title">{{placeholder}}</h3>
<!--                <div class="subtitle">...or click to select a file from your computer</div>-->
            </div>
        </vue-dropzone>
        <span v-if="hint" class="text-xs text-gray-400 font-medium">{{ hint }}</span>
        <span v-if="errorDisplay" class="text-xs text-pink-600 font-medium">{{ errorDisplay }}</span>
    </div>
</template>

<script>
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'

    export default {
        name: "NitsSingleDropzone",
        components: {
            vueDropzone: vue2Dropzone
        },
        props: {
            label: String,
            value: '',
            error: {
                type: Array,
                default: () => []
            },
            hint: {
                type: String,
                default: () => ''
            },
            placeholder: String,
        },
        data(){
            return{
                options: {
                    url: "/nits-system-api/upload-files",
                    maxFilesize: 2, // MB
                    maxFiles: 1,
                    // chunking: true,
                    // chunkSize: 500, // Bytes
                    thumbnailWidth: 150, // px
                    thumbnailHeight: 150,
                    addRemoveLinks: true
                },
            }
        },
        methods:{
            removeAllFiles() {
                this.$refs.myVueDropzone.removeAllFiles();
            },
            afterComplete(file) {
                const info = JSON.parse(file.xhr.response)
                if(typeof info.link !== 'undefined')
                    this.$emit('input', info.link)
            }
        },
        computed: {
            errorDisplay() {
                if(this.error.length)
                    return this.error.join(', ');
                else
                    return '';
            }
        }
    }
</script>

<style scoped>

</style>