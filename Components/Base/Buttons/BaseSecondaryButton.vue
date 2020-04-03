


<template>
    <button class="spinner w-40 flex border-2 rounded-full text-gray-700 px-4 py-2 focus:outline-none focus:border-gray-400 hover:bg-gray-100 ">
        <svg class="inline-block w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M14 5h-4v2h4V5zm0 3h-4v1h4V8zM9 5H6v4h3V5zm0 6h5v-1H9v1zm3 2h2v-1h-2v1zm2 1H6v1h8v-1zm-3-2H6v1h5v-1zm-3-2H6v1h2v-1zm9-9H3a1 1 0 00-1 1v16a1 1 0 001 1h14a1 1 0 001-1V2a1 1 0 00-1-1zm-1 16H4V3h12v14z"/>
        </svg>
        <span class="ml-2 antialiased">Secondary</span>
    </button>
</template>
<script>
    export default {
        name: "BaseSecondaryButton"
    }
</script>

<style scoped>
    .spinner {
        position: relative;
        color: black !important;
        /*pointer-events: none;*/

    }

    .spinner::after {
        content: '';
        position: absolute !important;
        top: calc(50% - (1em / 2));
        left: calc(85% - (1em / 2));
        display: block;
        width: 1em;
        height: 1em;
        border: 2px solid currentColor;
        border-radius: 9999px;
        border-right-color: transparent;
        border-top-color: transparent;
        animation: spinAround 500ms infinite linear;
    }

    @keyframes spinAround {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
</style>