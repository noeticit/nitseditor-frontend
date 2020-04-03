<template>
    <div class="inline-flex w-20">
        <button class="flex bg-blue-500 focus:bg-blue-600 text-white px-4 py-2 focus:outline-none text-white hover:bg-blue-600 rounded-l justify-around">
            <svg class="inline-block w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.602 19.8c-1.293 0-2.504-.555-3.378-1.44-1.695-1.716-2.167-4.711.209-7.116l9.748-9.87c.988-1 2.245-1.387 3.448-1.06 1.183.32 2.151 1.301 2.468 2.498.322 1.22-.059 2.493-1.046 3.493l-9.323 9.44c-.532.539-1.134.858-1.738.922-.599.064-1.17-.13-1.57-.535-.724-.736-.828-2.117.378-3.337l6.548-6.63c.269-.272.705-.272.974 0s.269.714 0 .986l-6.549 6.631c-.566.572-.618 1.119-.377 1.364.106.106.266.155.451.134.283-.029.606-.216.909-.521l9.323-9.439c.64-.648.885-1.41.69-2.145a2.162 2.162 0 00-1.493-1.513c-.726-.197-1.48.052-2.12.7l-9.748 9.87c-1.816 1.839-1.381 3.956-.209 5.143 1.173 1.187 3.262 1.629 5.079-.212l9.748-9.87a.683.683 0 01.974 0 .704.704 0 010 .987L9.25 18.15c-1.149 1.162-2.436 1.65-3.648 1.65z"/>
            </svg>
        </button>
        <button class="flex bg-green-400 focus:bg-green-500 text-white px-4 py-2 focus:outline-none text-white hover:bg-green-500 justify-around">
            <svg class="inline-block w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.38 5.59a3.69 3.69 0 10-3.69 3.69 3.67 3.67 0 002.483-.976L9 9.991l.012.009-.004.003-1.836 1.693a3.665 3.665 0 00-2.482-.976 3.69 3.69 0 103.69 3.69c0-.297-.044-.582-.111-.858l2.844-1.991 4.127 3.065c2.212 1.549 3.76-.663 3.76-.663L8.269 6.448c.066-.276.111-.561.111-.858zm-3.69 1.8a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6zm0 8.82a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6zM19 6.038s-1.548-2.212-3.76-.663L12.035 7.61l2.354 1.648L19 6.038z"/>
            </svg>
        </button>

        <button class="flex bg-yellow-400 focus:bg-yellow-500 text-white px-4 py-2 focus:outline-none text-white hover:bg-yellow-500 justify-around">
            <svg class="inline-block h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="curretColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16 1H4a1 1 0 00-1 1v16a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zm-1 16H5V3h10v14zM13 5H7v2h6V5zm0 8H7v2h6v-2zm0-4H7v2h6V9z"/>
            </svg>
        </button>

        <button class="flex bg-blue-500 focus:bg-blue-600 text-white px-4 py-2 focus:outline-none text-white hover:bg-blue-600 justify-around rounded-r">
            <svg class="inline-block w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 8a3 3 0 100 6 3 3 0 000-6zm8-3h-2.4a.888.888 0 01-.789-.57l-.621-1.861A.89.89 0 0013.4 2H6.6c-.33 0-.686.256-.789.568L5.189 4.43A.889.889 0 014.4 5H2C.9 5 0 5.9 0 7v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-8 11c-2.762 0-5-2.238-5-5a5 5 0 1110 0 5 5 0 01-5 5zm7.5-7.8a.7.7 0 110-1.4.7.7 0 010 1.4z"/>
            </svg>
        </button>
    </div>
</template>

<script>
    export default {
        name: "BaseIconForButton"
    }
</script>

<style scoped>

</style>