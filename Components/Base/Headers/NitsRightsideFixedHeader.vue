<template>
    <div class="relative">
        <div class="w-full ">
            <div class="w-1/5 z-40">
             <nav class="fixed right-0 px-10 mt-10 mx-auto">
            <div class=" flex flex-col ">
                <div class="float-left  h-18 ">
                    <img class="h-16 w-56 pr-5 mt-6" src="/nits-assets/images/nits-editor-logo.png">
                </div>

                <div class="flex flex-col  mt-8 font-semibold">
                    <div class="flex flex-col ">
                        <div class="inline-block mt-3 text-gray-800 p-1 ">
                            <a class="text-lg " href="#">
                                <div class="flex " >
                                    {{label1}}
                                    <svg class="absolute right-0 w-5 h-5  ml-32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M11 10L7.86 6.58a.7.7 0 010-.98c.27-.27.7-.27.97 0l3.83 3.91a.7.7 0 010 .98l-3.83 3.9a.68.68 0 01-.97 0 .7.7 0 010-.97L11 10z"/>
                                </svg>
                                </div>
                            </a>
                        </div>

                        <div class="inline-block p-1 mt-3">
                            <a class="text-lg text-gray-800" href="#">
                                <div class="flex " >
                                    {{label2}}
                                    <svg class="absolute right-0 w-5 h-5 ml-24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M11 10L7.86 6.58a.7.7 0 010-.98c.27-.27.7-.27.97 0l3.83 3.91a.7.7 0 010 .98l-3.83 3.9a.68.68 0 01-.97 0 .7.7 0 010-.97L11 10z"/>
                                </svg>
                                </div>
                            </a>
                        </div>
                        <div class="inline-block mt-3 p-1 ">
                            <a class="text-lg text-gray-800" href="#">
                                <div class="flex " >
                                    {{label3}}
                                    <svg class="absolute right-0 w-5 h-5 ml-32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M11 10L7.86 6.58a.7.7 0 010-.98c.27-.27.7-.27.97 0l3.83 3.91a.7.7 0 010 .98l-3.83 3.9a.68.68 0 01-.97 0 .7.7 0 010-.97L11 10z"/>
                                </svg>
                                </div>
                            </a>
                        </div>
                        <div class="inline-block p-1 mt-3">
                            <a class="text-lg text-gray-800" href="#">
                                <div class="flex " >
                                    {{label4}}
                                    <svg class="absolute right-0 w-5 h-5 mt-1  ml-24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M11 10L7.86 6.58a.7.7 0 010-.98c.27-.27.7-.27.97 0l3.83 3.91a.7.7 0 010 .98l-3.83 3.9a.68.68 0 01-.97 0 .7.7 0 010-.97L11 10z"/>
                                </svg>
                                </div>
                            </a>
                        </div>
                        <div class="inline-block mt-3 p-1">
                            <a class="text-lg text-gray-800" href="#">
                                <div class="flex " >
                                    {{label5}}<svg class="absolute right-0 w-5 h-5 ml-32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M11 10L7.86 6.58a.7.7 0 010-.98c.27-.27.7-.27.97 0l3.83 3.91a.7.7 0 010 .98l-3.83 3.9a.68.68 0 01-.97 0 .7.7 0 010-.97L11 10z"/>
                                </svg>
                                </div>
                            </a>
                        </div>
                        <div class="inline-block mt-3 p-1">
                            <a class="text-lg text-gray-800" href="#">
                                <div class="flex " >
                                    {{label6}}
                                    <svg class="absolute right-0 w-5 h-5 ml-32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M11 10L7.86 6.58a.7.7 0 010-.98c.27-.27.7-.27.97 0l3.83 3.91a.7.7 0 010 .98l-3.83 3.9a.68.68 0 01-.97 0 .7.7 0 010-.97L11 10z"/>
                                </svg>
                                </div>
                            </a>
                        </div>
                        <div class="inline-block mt-3 p-1">
                            <a class="text-lg text-gray-800" href="#">
                                <div class="flex " >
                                    {{label7}}
                                    <svg class="absolute right-0 w-5 h-5  ml-16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M11 10L7.86 6.58a.7.7 0 010-.98c.27-.27.7-.27.97 0l3.83 3.91a.7.7 0 010 .98l-3.83 3.9a.68.68 0 01-.97 0 .7.7 0 010-.97L11 10z"/>
                                </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
                 <div class="flex absolute bottom-0 h-10  mr-24">
                     <div class="flex mt-32 ">
                         <div class="inline-block px-0">
                             <a class="" href="#">
                                 <div class="flex font-thin cursor-pointer text-center h-10 w-10 pt-1 pl-2 hover:bg-blue-800 rounded hover:text-white text-gray-700" >
                                     <svg class="h-5 w-5 ml-1 mr-1 mt-1 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.14 155.14">
                                         <path fill-rule="evenodd" d="M89.58 155.14V84.38h23.75l3.56-27.59h-27.3V39.2c0-7.99 2.2-13.43 13.66-13.43h14.6V1.07A197.9 197.9 0 0096.58 0C75.52 0 61.1 12.85 61.1 36.45V56.8H37.3v27.59H61.1v70.76h28.48z"/>
                                     </svg>
                                 </div>
                             </a>
                         </div>
                         <div class="inline-block  px-1">
                             <a class="" href="#">
                                 <div class="flex font-thin cursor-pointer h-10 w-10 pt-1 pl-2 hover:bg-blue-400 rounded hover:text-white text-gray-700" >
                                     <svg class="w-5 h-5  ml-1 mr-1 mt-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                         <path fill-rule="evenodd" d="M17.32 6.25v.48c0 5-3.79 10.75-10.73 10.75-2.14 0-4.12-.63-5.79-1.7a7.66 7.66 0 005.59-1.56 3.78 3.78 0 01-3.53-2.62 3.86 3.86 0 001.7-.07 3.78 3.78 0 01-3.02-3.7v-.05c.5.28 1.1.45 1.7.47a3.77 3.77 0 01-1.16-5.04 10.72 10.72 0 007.78 3.95 3.77 3.77 0 016.43-3.44 7.6 7.6 0 002.4-.92 3.79 3.79 0 01-1.66 2.09c.77-.1 1.5-.3 2.17-.6a7.62 7.62 0 01-1.88 1.96z"/>
                                     </svg>
                                 </div>
                             </a>
                         </div>
                         <div class="inline-block  px-1">
                             <a class="" href="#">
                                 <div class="flex font-thin hover:bg-red-500 cursor-pointer h-10 w-10 pt-1 pl-1 rounded hover:text-white text-gray-700" >
                                     <svg class="w-5 h-5  ml-1 mr-1 mt-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                         <path fill-rule="evenodd" d="M1.99 5.59c0 1.5.5 2.57 1.48 3.2.8.52 1.74.6 2.23.6h.28s-.16 1 .59 1.99h-.04c-1.29 0-5.5.27-5.5 3.73 0 3.51 3.87 3.69 4.64 3.69h.26c.5 0 1.78-.06 2.98-.64 1.54-.75 2.33-2.06 2.33-3.89 0-1.76-1.2-2.81-2.07-3.58-.53-.47-1-.87-1-1.27s.34-.7.77-1.08a3.87 3.87 0 001.34-3.15c0-1.46-.2-2.43-1.36-3.06.12-.06.55-.1.77-.13.63-.09 1.55-.19 1.55-.7v-.1h-4.6c-.05 0-4.65.17-4.65 4.39zM9.4 14.6c.1 1.4-1.11 2.45-2.92 2.58-1.83.13-3.34-.7-3.43-2.1-.05-.68.25-1.34.83-1.86.6-.54 1.4-.87 2.28-.93l.31-.01c1.7 0 2.85 1 2.93 2.32zm-1.2-9.97c.45 1.58-.23 3.24-1.31 3.55-.13.03-.26.05-.39.05-1 0-1.98-1-2.34-2.4-.2-.77-.19-1.45.04-2.1.23-.65.65-1.08 1.17-1.23.12-.03.25-.05.38-.05 1.2 0 1.97.5 2.45 2.18zM16 8V5h-2v3h-3v2h3v3h2v-3h3V8h-3z"/>
                                     </svg>
                                 </div>
                             </a>
                         </div>
                         <div class="inline-block px-1">
                             <a class="" href="#">
                                 <div class="flex font-thin hover:bg-red-600 cursor-pointer h-10 w-10 pt-1 pl-1 rounded hover:text-white text-gray-700" >
                                     <svg class="w-5 h-5 ml-1 mr-1 mt-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                         <path fill-rule="evenodd" d="M10 .4a9.6 9.6 0 100 19.2A9.6 9.6 0 0010 .4zm.66 11.88c-.62-.05-.88-.36-1.36-.65-.26 1.4-.59 2.73-1.55 3.42-.3-2.1.44-3.68.78-5.36-.58-.97.07-2.93 1.29-2.45 1.5.6-1.3 3.63.58 4 1.96.4 2.77-3.4 1.55-4.64-1.76-1.8-5.13-.04-4.71 2.51.1.63.74.82.25 1.68-1.12-.25-1.46-1.14-1.42-2.32.07-1.94 1.75-3.3 3.42-3.49 2.13-.24 4.12.78 4.4 2.78.3 2.25-.96 4.7-3.23 4.52z"/>
                                     </svg>
                                 </div>
                             </a>
                         </div>

                         <div class="inline-block px-1">
                             <a class="" href="#">
                                 <div class="flex font-thin hover:bg-black cursor-pointer h-10 w-10 pt-1 pl-1 rounded hover:text-white text-gray-700" >
                                     <svg class="w-5 h-5  ml-1 mr-1 mt-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                         <path fill-rule="evenodd" d="M10.02 9.95h-.04c-1.19 0-2.24-.3-2.86.27-.37.34-.52.75-.52 1.2 0 1.85 1.48 2.07 3.39 2.07H10c1.91 0 3.4-.22 3.4-2.08 0-.44-.16-.85-.53-1.2-.63-.56-1.67-.26-2.87-.26zm-1.63 2.53c-.36 0-.65-.4-.65-.91s.29-.9.65-.9.66.4.66.9-.3.91-.66.91zm3.22 0c-.37 0-.66-.4-.66-.91s.3-.9.66-.9c.36 0 .65.4.65.9s-.3.91-.65.91zM10 .4a9.6 9.6 0 100 19.2A9.6 9.6 0 0010 .4zm.88 13.54H9.12c-.76 0-3.77-.06-3.77-3.69 0-.83.29-1.45.76-1.96a4.51 4.51 0 01.32-2.23s.91.1 2.3 1.05c.29-.08.78-.12 1.27-.12s.98.04 1.27.12c1.39-.95 2.3-1.05 2.3-1.05.4 1 .4 2.05.32 2.23.47.51.76 1.13.76 1.96 0 3.63-3.01 3.69-3.77 3.69z"/>
                                     </svg>
                                 </div>
                             </a>
                         </div>


                     </div>
                 </div>

        </nav>
           <div class="absolute bottom-0 px-56  ml-64 mb-64 ">
              <h3 class=" font-black text-5xl text-white -ml-32 mb-64">{{heading}}</h3>
           </div>
        </div>
            <div class="h-full w-4/5">
                <img src="/project-assets/images/HiRes1-150x150.jpg.jpg" class="" alt=" image">
            </div>
    </div>
    </div>

</template>

<script>
    export default {
        name: "NitsRightsideFixedHeader",
        props: {
            label1: {
                type: String,
                required: true
            },
            label2: {
                type: String,
                required: true
            },
            label3: {
                type: String,
                required: true
            },
            label4: {
                type: String,
                required: true
            },
            label5: {
                type: String,
                required: true
            },
            label6: {
                type: String,
                required: true
            },
            label7: {
                type: String,
                required: true
            },
            heading:{
                type: String,
                required: true
            }
        },

    }
</script>

<style scoped>

</style>