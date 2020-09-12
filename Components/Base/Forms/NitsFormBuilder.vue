<template>
    <div class="flex w-full justify-center">
        <div class="m-2 w-full overflow-y-auto h-screen">

            <base-portlet-one
                    :title="form_title"
            >
                <div slot="toolbox"></div>

                <div class="p-4">
                    <component is="nits-form"  v-bind="attrs"></component>
                </div>

            </base-portlet-one>
        </div>
    </div>
</template>

<script>
    import {eventBus} from "NitsModels/_events";

    export default {
        name: "NitsFormBuilder",
        data(){
            return {
                attrs: {},
                form_title:'',
                back_api:'',
                api_url:'',
                redirect_api:'',
            }
        },
        props:{
            api_url_id:String,
            form_type:String
        },
        created() {
            this.$api.get('/nits-system-api/form/'+this.api_url_id).then(response => {
                if(response.status === 200)
                {
                    this.attrs = {
                        type: this.form_type,
                        api_url: response.data.data.form_api_url,
                        forms: JSON.parse(response.data.data.form_data),
                        back_api: response.data.data.form_cancel_or_back_url,
                        redirect_api: response.data.data.form_redirect_url
                    }
                    // console.log(JSON.parse(response.data.data.form_data))
                    this.form_title = response.data.data.form_title
                }
            })

            eventBus.$on('add-form-data', (data) => {
                this.attrs.forms[data.rowIndex].attrs.child_components[data.columnIndex].attrs.child_components[data.repeaterIndex].attrs.child_components.push(data.value)
            })

            eventBus.$on('delete-form-data', (data) => {
                this.attrs.forms[data.rowIndex].attrs.child_components[data.columnIndex].attrs.child_components[data.repeaterIndex].attrs.child_components.splice(data.index, 1)
            })
        }
    }
</script>

<style scoped>

</style>