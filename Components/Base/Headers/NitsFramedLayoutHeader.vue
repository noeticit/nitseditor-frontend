<template>
    <div class=" h-full w-full mt-6 mb-0 mr-12 ml-6">
<!--        <div class="frame-outer">-->
<!--            <div class="frame-top"></div>-->
<!--            <div class="frame-right"></div>-->
<!--            <div class="frame-bottom"></div>-->
<!--            <div class="frame-left"></div>-->
<!--        </div>-->
        <div class="absolute bottom-0 px-48 mt-8 ml-64 ">
            <h3 class="font-black text-5xl mb-24 ml-56 text-white ">NITSEDITOR.</h3>
        </div>
        <div class=" h-full w-full">
            <img src="/project-assets/images/video-conferencing-meeting.jpg" class="w-screen h-full" alt=" image">
        </div>
        <div class="absolute top-0 bg-transparent border-b">
                <nav class=" px-8 mx-auto w-screen h-32">
                    <div class="flex justify-between h-32 ">
                        <div class="float-left pr-3 ">
                            <img class="h-16 w-56 mt-12 mr-5" src="/nits-assets/images/nits-editor-logo.png">
                        </div>

                        <div class="mr-40 mt-16 font-semibold">
                            <div class="float-right mr-6">
                                <div class="inline-block  text-white p-1  mx-6">
                                    <a class="text-base " href="#">HOME</a>
                                </div>
                                <div class="inline-block text-white p-1 mx-6">
                                    <a class="text-base" href="#">ABOUT</a>
                                </div>
                                <div class="inline-block text-white p-1 mx-6">
                                    <a class="text-base " href="#">WORKS</a>
                                </div>
                                <div class="inline-block text-white  p-1 mx-6">
                                    <a class="text-base " href="#">SERVICES</a>
                                </div>
                                <div class="inline-block text-white p-1 mx-6">
                                    <a class="text-base " href="#">BLOG</a>
                                </div>
                                <div class="inline-block text-white  p-1 mx-6">
                                    <a class="text-base " href="#">CONTACT</a>
                                </div>

                            </div>
                        </div>

                    </div>

                </nav>
        </div>
        <div class="mr-24">
            <button @click="Open = ! Open" class="absolute focus:outline-none right-0 top-0">
                <svg class="w-5 h-5 mt-16 cursor-pointer text-white mx-20" fill="currentColor"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M17 3a2 2 0 100 4 2 2 0 000-4zm-4.5 1h-11a.5.5 0 00-.5.5v1c0 .28.22.5.5.5h11a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm0 5h-11a.5.5 0 00-.5.5v1c0 .28.22.5.5.5h11a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm0 5h-11a.5.5 0 00-.5.5v1c0 .28.22.5.5.5h11a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5z"/>
                </svg>
            </button>
        </div>
        <div v-if="Open" class="flex">
            <div class="flex-col h-screen w-1/5 bg-gray-900 absolute right-0 top-0">
                <div class="mt-16 ml-2  text-white">
                   <h4 class=" text-center text-lg mr-12 font-semibold"> ABOUT NITSEDITOR</h4>
                        <address class="text-lg mt-8 ml-12">
                         Nasscom WareHouse<br>
                         MBP, Ghansoli<br>
                        </address>
                        <abbr class="mt-6 text-lg ml-12">Phone:</abbr>
                        (91) 8547 632521<br>
                        <abbr class="text-lg ml-12">Fax:</abbr>
                        (91) 11 4752 1433<br>
                        <abbr class="text-lg ml-12">Email:</abbr>
                        info@nitseditor.com

                </div>
                <div class="mt-12 ml-2 border-t">
                  <h4 class="text-white text-center text-lg mr-8 mt-12 font-semibold">CONNECT SOCIALLY</h4>
                    <div class="flex absolute bottom-0  ml-12 mt-2">
                        <div class="flex mb-32 ">
                            <div class="inline-block px-2">
                                <a class="" href="#">
                                    <div class="flex font-thin cursor-pointer text-center h-10 w-10 pt-1 pl-2 bg-blue-800 rounded text-white" >

                                        <svg class="h-5 w-5 ml-1 mr-1 mt-1 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.14 155.14">
                                            <path fill-rule="evenodd" d="M89.58 155.14V84.38h23.75l3.56-27.59h-27.3V39.2c0-7.99 2.2-13.43 13.66-13.43h14.6V1.07A197.9 197.9 0 0096.58 0C75.52 0 61.1 12.85 61.1 36.45V56.8H37.3v27.59H61.1v70.76h28.48z"/>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                            <div class="inline-block  px-0">
                                <a class="" href="#">
                                    <div class="flex font-thin cursor-pointer text-center h-10 w-10 pt-1 pl-2 bg-blue-400 rounded text-white" >
                                        <svg class="w-5 h-5  ml-1 mr-1 mt-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M17.32 6.25v.48c0 5-3.79 10.75-10.73 10.75-2.14 0-4.12-.63-5.79-1.7a7.66 7.66 0 005.59-1.56 3.78 3.78 0 01-3.53-2.62 3.86 3.86 0 001.7-.07 3.78 3.78 0 01-3.02-3.7v-.05c.5.28 1.1.45 1.7.47a3.77 3.77 0 01-1.16-5.04 10.72 10.72 0 007.78 3.95 3.77 3.77 0 016.43-3.44 7.6 7.6 0 002.4-.92 3.79 3.79 0 01-1.66 2.09c.77-.1 1.5-.3 2.17-.6a7.62 7.62 0 01-1.88 1.96z"/>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                            <div class="inline-block px-2">
                                <a class="" href="#">
                                    <div class="flex font-thin bg-red-600 cursor-pointer text-center h-10 w-10 pt-1 pl-1 rounded text-white" >
                                        <svg class="w-5 h-5 ml-1 mr-1 mt-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 .4a9.6 9.6 0 100 19.2A9.6 9.6 0 0010 .4zm.66 11.88c-.62-.05-.88-.36-1.36-.65-.26 1.4-.59 2.73-1.55 3.42-.3-2.1.44-3.68.78-5.36-.58-.97.07-2.93 1.29-2.45 1.5.6-1.3 3.63.58 4 1.96.4 2.77-3.4 1.55-4.64-1.76-1.8-5.13-.04-4.71 2.51.1.63.74.82.25 1.68-1.12-.25-1.46-1.14-1.42-2.32.07-1.94 1.75-3.3 3.42-3.49 2.13-.24 4.12.78 4.4 2.78.3 2.25-.96 4.7-3.23 4.52z"/>
                                        </svg>
                                    </div>
                                </a>
                            </div>

                            <div class="inline-block px-0">
                                <a class="" href="#">
                                    <div class="flex font-thin bg-black cursor-pointer text-center h-10 w-10 pt-1 pl-1 rounded text-white" >
                                        <svg class="w-5 h-5  ml-1 mr-1 mt-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10.02 9.95h-.04c-1.19 0-2.24-.3-2.86.27-.37.34-.52.75-.52 1.2 0 1.85 1.48 2.07 3.39 2.07H10c1.91 0 3.4-.22 3.4-2.08 0-.44-.16-.85-.53-1.2-.63-.56-1.67-.26-2.87-.26zm-1.63 2.53c-.36 0-.65-.4-.65-.91s.29-.9.65-.9.66.4.66.9-.3.91-.66.91zm3.22 0c-.37 0-.66-.4-.66-.91s.3-.9.66-.9c.36 0 .65.4.65.9s-.3.91-.65.91zM10 .4a9.6 9.6 0 100 19.2A9.6 9.6 0 0010 .4zm.88 13.54H9.12c-.76 0-3.77-.06-3.77-3.69 0-.83.29-1.45.76-1.96a4.51 4.51 0 01.32-2.23s.91.1 2.3 1.05c.29-.08.78-.12 1.27-.12s.98.04 1.27.12c1.39-.95 2.3-1.05 2.3-1.05.4 1 .4 2.05.32 2.23.47.51.76 1.13.76 1.96 0 3.63-3.01 3.69-3.77 3.69z"/>
                                        </svg>
                                    </div>
                                </a>
                            </div>


                        </div>
                    </div>
                    <div class="flex absolute bottom-0  ml-12" >
                    <div class="flex mb-20">
                        <div class="inline-block  px-2">
                            <a class="" href="#">
                                <div class="flex font-thin bg-blue-700 cursor-pointer text-center h-10 w-10 pt-1 pl-1 rounded text-white" >
                                    <svg class="w-6 h-6  ml-1 mr-1 mt-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 .4a9.6 9.6 0 100 19.2A9.6 9.6 0 0010 .4zM7.65 13.98H5.71V7.72h1.94v6.26zm-.98-7.03c-.62 0-1.01-.43-1.01-.97 0-.55.4-.97 1.03-.97s1.01.42 1.02.97c0 .54-.4.97-1.04.97zm8.08 7.03h-1.94V10.5c0-.8-.29-1.35-.99-1.35-.54 0-.85.37-1 .72-.05.13-.06.31-.06.5v3.6H8.8V9.72c0-.78-.02-1.44-.05-2h1.7l.08.87h.04c.26-.4.88-1 1.93-1 1.28 0 2.24.85 2.24 2.69v3.7z"/>
                                    </svg>
                                </div>
                            </a>
                        </div>
                        <div class="inline-block  px-0">
                            <a class="" href="#">
                                <div class="flex font-thin bg-red-600 cursor-pointer text-center h-10 w-10 pt-1 pl-1 rounded text-white" >
                                    <svg class="w-5 h-5  ml-1 mr-1 mt-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M1.99 5.59c0 1.5.5 2.57 1.48 3.2.8.52 1.74.6 2.23.6h.28s-.16 1 .59 1.99h-.04c-1.29 0-5.5.27-5.5 3.73 0 3.51 3.87 3.69 4.64 3.69h.26c.5 0 1.78-.06 2.98-.64 1.54-.75 2.33-2.06 2.33-3.89 0-1.76-1.2-2.81-2.07-3.58-.53-.47-1-.87-1-1.27s.34-.7.77-1.08a3.87 3.87 0 001.34-3.15c0-1.46-.2-2.43-1.36-3.06.12-.06.55-.1.77-.13.63-.09 1.55-.19 1.55-.7v-.1h-4.6c-.05 0-4.65.17-4.65 4.39zM9.4 14.6c.1 1.4-1.11 2.45-2.92 2.58-1.83.13-3.34-.7-3.43-2.1-.05-.68.25-1.34.83-1.86.6-.54 1.4-.87 2.28-.93l.31-.01c1.7 0 2.85 1 2.93 2.32zm-1.2-9.97c.45 1.58-.23 3.24-1.31 3.55-.13.03-.26.05-.39.05-1 0-1.98-1-2.34-2.4-.2-.77-.19-1.45.04-2.1.23-.65.65-1.08 1.17-1.23.12-.03.25-.05.38-.05 1.2 0 1.97.5 2.45 2.18zM16 8V5h-2v3h-3v2h3v3h2v-3h3V8h-3z"/>
                                    </svg>
                                </div>
                            </a>
                        </div>
                        <div class="inline-block  px-2">
                            <a class="" href="#">
                                <div class="flex font-thin bg-blue-900 cursor-pointer text-center h-10 w-10 pt-1 pl-1 rounded text-white" >
                                    <svg class="w-5 h-5  ml-1 mr-1 mt-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                        <path fill-rule="evenodd" d="M17.95 5.29a6.6 6.6 0 00-.42-2.19 4.41 4.41 0 00-1.04-1.59 4.41 4.41 0 00-1.6-1.04 6.6 6.6 0 00-2.18-.42C11.75.01 11.44 0 9 0S6.25.01 5.29.05A6.6 6.6 0 003.1.47a4.41 4.41 0 00-1.59 1.04 4.41 4.41 0 00-1.04 1.6 6.6 6.6 0 00-.42 2.18C.01 6.25 0 6.56 0 9s.01 2.75.05 3.71a6.6 6.6 0 00.42 2.19 4.41 4.41 0 001.04 1.59 4.41 4.41 0 001.6 1.04 6.6 6.6 0 002.18.42c.96.04 1.27.05 3.71.05s2.75-.01 3.71-.05a6.6 6.6 0 002.19-.42 4.6 4.6 0 002.63-2.63 6.6 6.6 0 00.42-2.19c.04-.96.05-1.27.05-3.71s-.01-2.75-.05-3.71zm-1.62 7.35a4.98 4.98 0 01-.31 1.67A2.98 2.98 0 0114.3 16a4.98 4.98 0 01-1.67.32c-.95.04-1.24.05-3.64.05s-2.69-.01-3.64-.05a4.98 4.98 0 01-1.67-.31 2.79 2.79 0 01-1.03-.68 2.79 2.79 0 01-.68-1.03 4.98 4.98 0 01-.3-1.67c-.05-.95-.06-1.24-.06-3.64s.01-2.69.05-3.64a4.98 4.98 0 01.31-1.67 2.79 2.79 0 01.68-1.03 2.79 2.79 0 011.03-.68 4.98 4.98 0 011.67-.3c.95-.05 1.24-.06 3.64-.06s2.69.01 3.64.05a4.98 4.98 0 011.67.31 2.79 2.79 0 011.03.68 2.79 2.79 0 01.68 1.03 4.98 4.98 0 01.3 1.67c.05.95.06 1.24.06 3.64s-.01 2.69-.05 3.64zM9 4.38A4.62 4.62 0 1013.62 9 4.62 4.62 0 009 4.38zM9 12a3 3 0 113-3 3 3 0 01-3 3zm5.88-7.8a1.08 1.08 0 11-1.08-1.08 1.08 1.08 0 011.08 1.08z"/>
                                    </svg>
                                </div>
                            </a>
                        </div>
                        <div class="inline-block  px-0">
                            <a class="" href="#">
                                <div class="flex font-thin bg-blue-400 cursor-pointer text-center h-10 w-10 pt-1 pl-1 rounded text-white" >
                                    <svg class="w-5 h-5  ml-1 mr-1 mt-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M18.67 12.04c.13-.63.2-1.27.2-1.94a8.9 8.9 0 00-8.77-9.03c-.51 0-1.02.05-1.5.13C7.8.7 6.89.4 5.89.4A5.16 5.16 0 00.8 5.64c0 .96.26 1.87.7 2.65-.12.58-.18 1.19-.18 1.81a8.9 8.9 0 008.78 9.03c.55 0 1.08-.05 1.6-.15.72.4 1.54.62 2.4.62a5.16 5.16 0 005.1-5.24c0-.83-.2-1.62-.53-2.32zm-4.07 2.38c-.4.59-1 1.06-1.78 1.39-.77.33-1.7.5-2.75.5a6.54 6.54 0 01-3.14-.68A4.16 4.16 0 015.5 14.3a2.95 2.95 0 01-.56-1.64c0-.33.12-.61.36-.85.24-.23.55-.35.92-.35.3 0 .56.1.77.28.2.17.37.43.51.77.16.37.33.68.5.92.18.23.43.43.74.59.32.15.75.23 1.28.23.72 0 1.32-.16 1.77-.48.43-.3.65-.67.65-1.12 0-.36-.11-.64-.34-.86a2.4 2.4 0 00-.94-.53c-.4-.13-.94-.27-1.61-.41-.91-.2-1.68-.44-2.3-.7a3.79 3.79 0 01-1.5-1.14 2.87 2.87 0 01-.58-1.81c0-.68.2-1.3.6-1.83.4-.52.97-.93 1.7-1.22.73-.27 1.6-.41 2.58-.41.78 0 1.47.09 2.05.27a4.5 4.5 0 011.45.75c.38.3.67.64.85.98.18.35.27.7.27 1.03 0 .33-.12.62-.36.87-.24.26-.54.4-.9.4a1.1 1.1 0 01-.75-.25 2.87 2.87 0 01-.53-.72 2.95 2.95 0 00-.78-1c-.3-.23-.8-.35-1.47-.35-.63 0-1.14.13-1.52.39-.37.25-.54.53-.54.86 0 .21.05.38.17.53.13.16.3.3.52.4.24.13.47.22.71.3l1.22.3c.7.15 1.36.33 1.93.52.59.2 1.1.43 1.5.7.43.29.76.65 1 1.08.23.43.35.97.35 1.59 0 .74-.2 1.42-.61 2.02z"/>
                                    </svg>
                                </div>
                            </a>
                        </div>


                    </div>

                </div>
                </div>

            </div>
            <button @click="Open = ! Open" class="absolute focus:outline-none  mr-64 right-0 top-0">
                <svg class="h-6 w-6  my-4 mx-20 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2.939 12.789L10 11.729l-3.061 3.06-1.729-1.728L8.271 10l-3.06-3.061L6.94 5.21 10 8.271l3.059-3.061 1.729 1.729L11.729 10l3.06 3.061-1.728 1.728z"/>
                </svg>
            </button>
        </div>

        <div class="h-screen w-screen bg-gray-200"></div>

    </div>

</template>

<script>
    export default {
        name: "NitsFramedLayoutHeader",

        data(){
            return{
                Open:false,
                responsive_tab :false,
            }
        }
    }
</script>

<style scoped>

</style>