<template>
    <a :href="url" class="w-24 flex bg-blue-500 text-white  rounded-full  px-4 py-2 focus:outline-none text-blue hover:bg-blue-600 justify-around">
        <svg class="inline-block mt-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M9 10h2v2h9s-.149-4.459-.2-5.854C19.75 4.82 19.275 4 17.8 4h-3.208l-1.197-2.256C13.064 1.121 12.951 1 12.216 1H7.783c-.735 0-.847.121-1.179.744-.165.311-.7 1.318-1.196 2.256H2.199c-1.476 0-1.945.82-2 2.146C.145 7.473 0 12 0 12h9v-2zM7.649 2.916c.23-.432.308-.516.817-.516h3.067c.509 0 .588.084.816.516L12.924 4h-5.85l.575-1.084zM11 15H9v-2H.5s.124 1.797.199 3.322C.73 16.955.917 18 2.499 18H17.5c1.582 0 1.765-1.047 1.8-1.678.087-1.568.2-3.322.2-3.322H11v2z"/>
        </svg>
        <span v-bind:class="{ 'spinner': loading }" class="text-sm tracking-wider font-semibold">{{Solid}}</span>
    </a>
</template>


<script>
    export default {
        name: "BaseSolidButton",
        props:{
            Solid:{
                type: String,
            },
            url:{
                type: String,
            }
        },
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
        @apply relative mr-2
    }

    .spinner::after {
        content: '';
        position: absolute !important;
        top: calc(50% - (1em / 2));
        left: calc(138% - (1em / 2));
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