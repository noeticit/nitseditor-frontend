<template>
    <button class=" flex shadow w-32 block border-blue-600 border-2 rounded-full focus:outline-none focus:border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white">
        <svg class="inline-block h-5 w-5 " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387A7.731 7.731 0 007.1 19h5.8a7.68 7.68 0 001.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8zM12 8H8V5.199C8 3.754 8.797 3 10 3s2 .754 2 2.199V8z"/></svg>
        <span v-bind:class="{ 'spinner': loading }" @click.prevent="check">Outeline</span>
    </button>
</template>

<script>
    export default {
        name: "BaseOutlineButton",
        data(){
            return{
                loading: false,
            }
        },
        methods:{
            check(){
                this.loading = true
            }
        }
    }
</script>

<style scoped>
    .spinner {
        @apply relative mr-2
    }

    .spinner::after {
        content: '';
        position: absolute !important;
        top: calc(50% - (1em / 2));
        left: calc(124% - (1em / 2));
        display: block;
        width: 1em;
        height: 1em;
        border: 2px solid currentColor;
        border-radius: 9999px;
        border-right-color: transparent;
        border-top-color: transparent;
        animation: spinAround 500ms infinite linear;
        /*margin-left: 3px;*/
        /*width: 25px*/

    }

    @keyframes spinAround {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }

</style>