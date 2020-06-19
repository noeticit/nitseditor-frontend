<template>
    <div>
        <div v-for="(form,index) in forms" :key="index">

            <nits-grid rows="2" cols="3" gap="4" flow="row">
                <component v-for="(element, key, form_index) in form" :key="form_index" :is="element.type" v-bind="element.attrs" v-model="element.value"></component>
            </nits-grid>

        </div>
    </div>
</template>

<script>
    export default {
        name: "NitsFormRepeater",
        props: {
            forms: {
                type: Array
            }
        }
    }
</script>

<style scoped>

</style>