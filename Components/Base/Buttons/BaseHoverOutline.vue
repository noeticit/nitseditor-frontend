<template>
    <button class="flex rounded-full border border-transparent px-4 py-2 focus:outline-none focus:shadow-outline  text-black hover:border-blue-600 hover:text-blue-600 justify-around" tabindex="0">
        <svg class="inline-block h-5 w-5 mr-2 mt-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M19.398 7.415l-7.444-1.996L10.651.558c-.109-.406-.545-.642-.973-.529L.602 2.461c-.428.114-.686.538-.577.944l3.23 12.051c.109.406.544.643.971.527l3.613-.967-.492 1.838c-.109.406.149.83.577.943l8.11 2.174c.428.115.862-.121.972-.529l2.97-11.084c.108-.406-.15-.83-.578-.943zM1.633 3.631l7.83-2.096 2.898 10.818-7.83 2.096L1.633 3.631zm14.045 14.832L8.864 16.6l.536-2.002 3.901-1.047c.428-.113.688-.537.578-.943l-1.508-5.627 5.947 1.631-2.64 9.851z"/>
        </svg>
        <span v-bind:class="{ 'spinner': loading }" @click.prevent="check">Hover Outline</span>
    </button>
</template>

<script>
    export default {
        name: "BaseHoverOutline",
        data(){
            return{
                loading:false
            }
        },
        methods:{
            check(){
                this.loading=true
            }
        }
    }
</script>

<style scoped>
    .spinner {
        @apply relative mr-3
    }

    .spinner::after {
        content: '';
        position: absolute !important;
        top: calc(50% - (1em / 2));
        left: calc(112% - (1em / 2));
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