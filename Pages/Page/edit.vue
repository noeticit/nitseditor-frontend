<template>
    <dashboard-layout-one active="user-add">
        <base-bread-crumb-one name="Add Page" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>
        <div class="m-2 overflow-y-auto h-screen w-full">
            <div class="bg-white mb-48 mt-5 mr-4 min-h-full justify-center">
                <div class="relative px-5 bg-gray-200 mt-10 mb-32 h-screen mb-10 ">
                    <div class="">
                        <div class="w-full text-left pb-5 antialiased tracking-tigh font-sans">
                            <input class="w-full focus:outline-none border border-gray-700 h-8 px-8 rounded" placeholder="Add Title" type="text" >
                        </div>
                        <div class="flex-col w-full justify-center">
                            <div class="min-h-full bg-white text-center items-center">

                                <!--<header svg start>-->

                                <div class="flex bg-blue-500 justify-between w-full">
                                    <div class=" text-lg font-bold">
                                        <div class="flex float-right">
                                            <div @click="isOpen2 = ! isOpen2" class="inline-block cursor-pointer hover:bg-blue-600 font-bold text-white">
                                                <svg class="h-6 w-6 my-5 mx-5 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <title id="simpleicons-github-icon">Add Element</title>
                                                    <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>
                                                </svg>
                                            </div>
                                            <div class="inline-block hover:bg-blue-600 cursor-pointer text-white">
                                                <svg class="h-6 w-6 my-5 mx-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <title id="simpleicons-github-icon">Templates</title>
                                                    <path fill-rule="evenodd"  d="M18 2H2C.9 2 0 2.9 0 4v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM4.5 3.75a.75.75 0 110 1.5.75.75 0 010-1.5zm-2.75.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM18 16H2V7h16v9zm0-11H6V4h12.019L18 5z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex">
                                        <div class="hover:bg-blue-600 text-white">
                                            <svg class="h-6 w-6 my-5 mx-5 " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <title id="simpleicons-github-icon">Undo</title>
                                                <path fill-rule="evenodd" d="M.685 10h2.372v-.205c.108-4.434 3.724-7.996 8.169-7.996 4.515 0 8.174 3.672 8.174 8.201s-3.659 8.199-8.174 8.199a8.13 8.13 0 01-5.033-1.738l1.406-1.504a6.099 6.099 0 003.627 1.193c3.386 0 6.131-2.754 6.131-6.15s-2.745-6.15-6.131-6.15c-3.317 0-6.018 2.643-6.125 5.945V10h2.672l-3.494 3.894L.685 10z"/>
                                            </svg>
                                        </div>
                                        <div class="hover:bg-blue-600 text-white">
                                            <svg class="h-6 w-6  my-5 mx-5 " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <title id="simpleicons-github-icon">Redo</title>
                                                <path fill-rule="evenodd" d="M19.315 10h-2.372v-.205c-.108-4.434-3.724-7.996-8.169-7.996C4.259 1.799.6 5.471.6 10s3.659 8.199 8.174 8.199a8.13 8.13 0 005.033-1.738l-1.406-1.504a6.099 6.099 0 01-3.627 1.193c-3.386 0-6.131-2.754-6.131-6.15s2.745-6.15 6.131-6.15c3.317 0 6.018 2.643 6.125 5.945V10h-2.672l3.494 3.894L19.315 10z"/>
                                            </svg>
                                        </div>
                                        <div class="hover:bg-blue-600 text-white">
                                            <svg class="h-5 w-5 my-5 mx-5 pt-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 317.215 317.215">
                                                <title id="simpleicons-github-icon">Full Screen</title>
                                                <g fill-rule="evenodd">

                                                    <path d="M309.715 1.107h-71.223a7.5 7.5 0 00-7.5 7.5v20a7.5 7.5 0 007.5 7.5h18.973l-57.129 57.127a7.501 7.501 0 000 10.606l14.143 14.143a7.476 7.476 0 005.304 2.197 7.482 7.482 0 005.304-2.197l57.129-57.127V79.83a7.5 7.5 0 007.5 7.5h20a7.5 7.5 0 007.5-7.5V8.607a7.502 7.502 0 00-7.501-7.5zM59.75 36.107h18.973a7.5 7.5 0 007.5-7.5v-20a7.5 7.5 0 00-7.5-7.5H7.5a7.5 7.5 0 00-7.5 7.5V79.83a7.5 7.5 0 007.5 7.5h20a7.5 7.5 0 007.5-7.5V60.857l57.125 57.126a7.483 7.483 0 005.305 2.197 7.486 7.486 0 005.305-2.197l14.142-14.143a7.5 7.5 0 000-10.606L59.75 36.107zM102.734 199.233a7.503 7.503 0 00-10.609 0L35 256.358v-18.974a7.5 7.5 0 00-7.5-7.5h-20a7.5 7.5 0 00-7.5 7.5v71.223a7.5 7.5 0 007.5 7.5h71.223a7.5 7.5 0 007.5-7.5v-20a7.5 7.5 0 00-7.5-7.5H59.75l57.126-57.125a7.5 7.5 0 000-10.606l-14.142-14.143zM309.715 229.885h-20a7.5 7.5 0 00-7.5 7.5v18.976l-57.13-57.127a7.5 7.5 0 00-10.606 0l-14.143 14.143a7.501 7.501 0 00.001 10.606l57.128 57.125h-18.973a7.5 7.5 0 00-7.5 7.5v20a7.5 7.5 0 007.5 7.5h71.223a7.5 7.5 0 007.5-7.5v-71.223a7.5 7.5 0 00-7.5-7.5z"/>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="hover:bg-blue-600 text-white">
                                            <svg class="h-6 w-6  my-5 mx-5 " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <title id="simpleicons-github-icon">Setting</title>
                                                <path fill-rule="evenodd" d="M16.783 10c0-1.049.646-1.875 1.617-2.443a8.932 8.932 0 00-.692-1.672c-1.089.285-1.97-.141-2.711-.883-.741-.74-.968-1.621-.683-2.711a8.732 8.732 0 00-1.672-.691c-.568.97-1.595 1.615-2.642 1.615-1.048 0-2.074-.645-2.643-1.615a8.697 8.697 0 00-1.671.691c.285 1.09.059 1.971-.684 2.711-.74.742-1.621 1.168-2.711.883A8.797 8.797 0 001.6 7.557c.97.568 1.615 1.394 1.615 2.443 0 1.047-.645 2.074-1.615 2.643a8.89 8.89 0 00.691 1.672c1.09-.285 1.971-.059 2.711.682.741.742.969 1.623.684 2.711a8.841 8.841 0 001.672.693c.568-.973 1.595-1.617 2.643-1.617 1.047 0 2.074.645 2.643 1.617a8.963 8.963 0 001.672-.693c-.285-1.088-.059-1.969.683-2.711.741-.74 1.622-1.166 2.711-.883a8.811 8.811 0 00.692-1.672c-.973-.569-1.619-1.395-1.619-2.442zM10 13.652a3.652 3.652 0 110-7.306 3.653 3.653 0 010 7.306z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <!--<header svg end>-->

                                <!--<no data content start>-->

                                <div v-if="noData = true" class="px-16 py-12">
                                    <div class="flex-col">
                                        <div class="ml-64 pl-56">
                                            <svg class="h-12 w-12 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M19.025 3.587c-4.356 2.556-4.044 7.806-7.096 10.175-2.297 1.783-5.538.88-7.412.113 0 0-1.27 1.603-2.181 3.74-.305.717-1.644-.073-1.409-.68C3.905 9.25 14.037 5.416 14.037 5.416s-7.149-.303-11.927 5.94c-.128-1.426-.34-5.284 3.36-7.65 5.016-3.211 14.572-.715 13.555-.119z"/>
                                            </svg>
                                        </div>
                                        <div class="text-xl mt-10 antialiased font-normal text-center tracking-wider text-gray-500 px-64">
                                            YOU HAVE BLANK PAGE START ADDING CONTENT OR TEMPLATES
                                        </div>
                                        <div class="flex mt-10 ml-64">
                                            <button @click="isOpen2 = ! isOpen2" class="text-sm focus:outline-none focus:bg-blue-600 hover:bg-blue-500 rounded bg-blue-600 px-6 py-3 font-semibold tracking-normal text-white mr-5">Add Elements</button>
                                            <button class="text-sm focus:outline-none focus:bg-blue-600 hover:bg-blue-500 rounded bg-blue-600 px-6 py-3 font-semibold tracking-normal text-white mr-5">Add Template</button>
                                            <button class="text-sm focus:outline-none focus:bg-blue-600 hover:bg-blue-500 rounded bg-blue-600 px-6 py-3 font-semibold tracking-normal text-white mr-5">Add Text Box</button>
                                        </div>
                                        <div class="italic mb-10 text-xs mt-10 antialiased text-center tracking-normal text-gray-500 px-64">
                                            Don't know where to start? <a href="#" class="text-gray-600 hover:text-blue-500">Visit our knowledge base.</a>
                                        </div>
                                    </div>
                                </div>

                                <!--<no data content end>-->

                                <!--<added row start>-->

                                <div v-if="addedRow" class="w-full bg-white">
                                    <div class="relative flex flex-row m-4 p-4">
                                        <div class="bg-gray-200 border border-white h-10 w-9  hover:text-gray-400 text-gray-600">
                                            <svg class="h-5 w-5 my-2 mx-3 pt-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 317.215 317.215">
                                                <g fill-rule="evenodd">
                                                    <path d="M309.715 1.107h-71.223a7.5 7.5 0 00-7.5 7.5v20a7.5 7.5 0 007.5 7.5h18.973l-57.129 57.127a7.501 7.501 0 000 10.606l14.143 14.143a7.476 7.476 0 005.304 2.197 7.482 7.482 0 005.304-2.197l57.129-57.127V79.83a7.5 7.5 0 007.5 7.5h20a7.5 7.5 0 007.5-7.5V8.607a7.502 7.502 0 00-7.501-7.5zM59.75 36.107h18.973a7.5 7.5 0 007.5-7.5v-20a7.5 7.5 0 00-7.5-7.5H7.5a7.5 7.5 0 00-7.5 7.5V79.83a7.5 7.5 0 007.5 7.5h20a7.5 7.5 0 007.5-7.5V60.857l57.125 57.126a7.483 7.483 0 005.305 2.197 7.486 7.486 0 005.305-2.197l14.142-14.143a7.5 7.5 0 000-10.606L59.75 36.107zM102.734 199.233a7.503 7.503 0 00-10.609 0L35 256.358v-18.974a7.5 7.5 0 00-7.5-7.5h-20a7.5 7.5 0 00-7.5 7.5v71.223a7.5 7.5 0 007.5 7.5h71.223a7.5 7.5 0 007.5-7.5v-20a7.5 7.5 0 00-7.5-7.5H59.75l57.126-57.125a7.5 7.5 0 000-10.606l-14.142-14.143zM309.715 229.885h-20a7.5 7.5 0 00-7.5 7.5v18.976l-57.13-57.127a7.5 7.5 0 00-10.606 0l-14.143 14.143a7.501 7.501 0 00.001 10.606l57.128 57.125h-18.973a7.5 7.5 0 00-7.5 7.5v20a7.5 7.5 0 007.5 7.5h71.223a7.5 7.5 0 007.5-7.5v-71.223a7.5 7.5 0 00-7.5-7.5z"/>
                                                </g>
                                            </svg>
                                        </div>
                                        <div @click.prevent="addRowField()" class="border border-white h-10 w-9 text-gray-600 hover:text-gray-400 inline-block bg-gray-200 font-bold">
                                            <svg class="h-6 w-6 my-2 mx-3 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>
                                            </svg>
                                        </div>

                                        <div class="flex absolute right-0 mr-4">
                                            <div  @click="rowSettingOpen"  class="border border-white h-10 w-9 text-gray-600 hover:text-gray-400 inline-block bg-gray-200 font-bold">
                                                <svg class="h-5 w-5 my-2 mx-3 font-bold" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.873 477.873"><path fill-rule="evenodd" d="M392.533 238.937c-9.426 0-17.067 7.641-17.067 17.067V426.67c0 9.426-7.641 17.067-17.067 17.067H51.2c-9.426 0-17.067-7.641-17.067-17.067V85.337c0-9.426 7.641-17.067 17.067-17.067H256c9.426 0 17.067-7.641 17.067-17.067S265.426 34.137 256 34.137H51.2C22.923 34.137 0 57.06 0 85.337V426.67c0 28.277 22.923 51.2 51.2 51.2h307.2c28.277 0 51.2-22.923 51.2-51.2V256.003c0-9.425-7.641-17.066-17.067-17.066z"/><path d="M458.742 19.142A65.328 65.328 0 00412.536.004a64.85 64.85 0 00-46.199 19.149L141.534 243.937a17.254 17.254 0 00-4.113 6.673l-34.133 102.4c-2.979 8.943 1.856 18.607 10.799 21.585 1.735.578 3.552.873 5.38.875a17.336 17.336 0 005.393-.87l102.4-34.133c2.515-.84 4.8-2.254 6.673-4.13l224.802-224.802c25.515-25.512 25.518-66.878.007-92.393z"/></svg>
                                            </div>
                                            <div class="border border-white h-10 w-9 text-gray-600 hover:text-gray-400 inline-block bg-gray-200 font-bold">
                                                <svg class="h-5 w-5 my-2 mx-3 font-bold" fill="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 24h-12A2.503 2.503 0 016 21.5v-15C6 5.121 7.122 4 8.5 4h12C21.878 4 23 5.121 23 6.5v15c0 1.379-1.122 2.5-2.5 2.5zM8.5 5C7.673 5 7 5.673 7 6.5v15c0 .827.673 1.5 1.5 1.5h12c.827 0 1.5-.673 1.5-1.5v-15c0-.827-.673-1.5-1.5-1.5z"/><path d="M4.5 21h-1A2.503 2.503 0 011 18.5v-16C1 1.121 2.122 0 3.5 0h12C16.878 0 18 1.121 18 2.5a.5.5 0 01-1 0c0-.827-.673-1.5-1.5-1.5h-12C2.673 1 2 1.673 2 2.5v16c0 .827.673 1.5 1.5 1.5h1a.5.5 0 010 1zM18.5 17h-8a.5.5 0 010-1h8a.5.5 0 010 1zM18.5 21h-8a.5.5 0 010-1h8a.5.5 0 010 1z"/><path d="M18.5 13h-8a.5.5 0 010-1h8a.5.5 0 010 1zM18.5 9h-8a.5.5 0 010-1h8a.5.5 0 010 1z"/></svg>
                                            </div>
                                            <div @click="addedRow = false" class="text-gray-600 hover:text-gray-400 inline-block bg-gray-200 font-bold">
                                                <svg class="h-5 w-4 my-2 mx-3 font-bold" fill="currentColor" viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M512.001 84.853L427.148 0 256.001 171.147 84.853 0 0 84.853 171.148 256 0 427.148l84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853L340.853 256z"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="relative h-32 ml-8 mr-8 -mt-8 rounded-b px-5 bg-gray-200 border-black">
                                        <div class="text-gray-600 hover:text-gray-400 inline-block bg-gray-200 font-bold">
                                            <svg class="h-4 w-4 my-2 mx-3 font-bold" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.873 477.873"><path fill-rule="evenodd" d="M392.533 238.937c-9.426 0-17.067 7.641-17.067 17.067V426.67c0 9.426-7.641 17.067-17.067 17.067H51.2c-9.426 0-17.067-7.641-17.067-17.067V85.337c0-9.426 7.641-17.067 17.067-17.067H256c9.426 0 17.067-7.641 17.067-17.067S265.426 34.137 256 34.137H51.2C22.923 34.137 0 57.06 0 85.337V426.67c0 28.277 22.923 51.2 51.2 51.2h307.2c28.277 0 51.2-22.923 51.2-51.2V256.003c0-9.425-7.641-17.066-17.067-17.066z"/><path d="M458.742 19.142A65.328 65.328 0 00412.536.004a64.85 64.85 0 00-46.199 19.149L141.534 243.937a17.254 17.254 0 00-4.113 6.673l-34.133 102.4c-2.979 8.943 1.856 18.607 10.799 21.585 1.735.578 3.552.873 5.38.875a17.336 17.336 0 005.393-.87l102.4-34.133c2.515-.84 4.8-2.254 6.673-4.13l224.802-224.802c25.515-25.512 25.518-66.878.007-92.393z"/></svg>
                                        </div>
                                        <div  class="text-gray-600 hover:text-gray-400 inline-block bg-gray-200 font-bold">
                                            <svg class="h-4 w-4 my-2 mx-3 font-bold" fill="currentColor" viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M512.001 84.853L427.148 0 256.001 171.147 84.853 0 0 84.853 171.148 256 0 427.148l84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853L340.853 256z"/></svg>
                                        </div>
                                        <div class="border border-gray-400">
                                            <div  class="h-10 w-9 text-gray-600 hover:text-gray-400 inline-block bg-gray-200 font-bold">
                                                <svg class="h-6 w-6 my-2 mx-3 font-bold" fill="currentColor"  viewBox="0 0 448 448" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M408 184H272a8 8 0 01-8-8V40c0-22.09-17.91-40-40-40s-40 17.91-40 40v136a8 8 0 01-8 8H40c-22.09 0-40 17.91-40 40s17.91 40 40 40h136a8 8 0 018 8v136c0 22.09 17.91 40 40 40s40-17.91 40-40V272a8 8 0 018-8h136c22.09 0 40-17.91 40-40s-17.91-40-40-40zm0 0"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!--<added row end>-->

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!--<add element pop-up start>-->
        <div v-if="isOpen2" class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster" style="background: rgba(0,0,0,.7);">
            <div class="border border-teal-500 shadow-lg modal-container bg-white w-full mx-20 rounded shadow-lg z-50 overflow-y-auto">
                <div class="flex  justify-between border-solid border-b-2 p-2 text-center items-center">
                    <div class="text-left font-medium ml-6 text-sm antialiased leading-snug text-gray-700 tracking-normal font-sans">Add Elements</div>
                    <div>
                        <div @click="isOpen2 = false" class="text-gray-600 inline-block bg-white hover:bg-red-600 hover:text-white rounded shadow-md no-underline mr-3 focus:outline-none active:shadow-none font-bold">
                            <svg class="h-4 w-4 my-2 mx-2 font-bold" fill="currentColor" viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M512.001 84.853L427.148 0 256.001 171.147 84.853 0 0 84.853 171.148 256 0 427.148l84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853L340.853 256z"/></svg>
                        </div>
                    </div>
                </div>
                <div class="overflow-y-auto scroll_bar" style="height: 450px;">
                    <nits-grid class="px-5 py-5" cols="5" gap="2">
                        <div @click="addedRow = true" class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500" >
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>
                                </svg>
                            </div>
                            <div class="flex-col cursor-pointer" >
                                <h5 class="text-blue-500 font-bold">Row</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div @click.prevent="showModal" class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-white font-bold text-blue-600 rounded-lg">
                                <!--                            <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
                                <!--                                <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>-->
                                <!--                            </svg>-->
                                <svg class="h-6 w-6 m-2 font-bold" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M256 0C114.836 0 0 114.836 0 256s114.836 256 256 256 256-114.836 256-256S397.164 0 256 0zm0 0" />
                                    <path fill-rule="evenodd" d="M385.75 201.75L247.082 340.414c-4.16 4.16-9.621 6.254-15.082 6.254s-10.922-2.094-15.082-6.254l-69.332-69.332c-8.344-8.34-8.344-21.824 0-30.164 8.34-8.344 21.82-8.344 30.164 0l54.25 54.25 123.586-123.582c8.34-8.344 21.82-8.344 30.164 0 8.34 8.34 8.34 21.82 0 30.164zm0 0" fill="#fafafa"/>
                                </svg>
                            </div>
                            <div class="flex-col cursor-pointer">
                                <h5 class="text-blue-500 font-bold">Check Box</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the checkbox</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <!--                        <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">-->
                            <!--&lt;!&ndash;                            <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">&ndash;&gt;-->
                            <!--&lt;!&ndash;                                <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>&ndash;&gt;-->
                            <!--&lt;!&ndash;                            </svg>&ndash;&gt;-->
                            <!--&lt;!&ndash;                            <svg class="h-6 w-6 m-2 font-bold" fill="currentColor" xmlns="http://www.w3.org/2000/svg">&ndash;&gt;-->
                            <!--&lt;!&ndash;                                <path  d="M301 414.5v-347h106c12.375 0 22.5 10.125 22.5 22.5v22.5h75V7.5H7.5v105h75V90c0-12.375 10.125-22.5 22.5-22.5h106v347c0 16.5-13.5 30-30 30h-60v60h269.999v-60h-60c-16.5 0-29.999-13.5-29.999-30z" fill="#6e91ef" fill-rule="evenodd"/>&ndash;&gt;-->
                            <!--&lt;!&ndash;                                <path d="M407 67.5c12.375 0 22.5 10.125 22.5 22.5v22.5H452V90c0-12.375-10.125-22.5-22.5-22.5zm97.5-60H30v105H7.5V7.5zM211 60v354.5c0 16.5-13.5 30-30 30h22.5c16.5 0 30-13.5 30-30V60zm-67.5 384.5H121v60h22.5z" fill="#3d6dea" fill-rule="evenodd"/>&ndash;&gt;-->
                            <!--&lt;!&ndash;                                <path d="M482 75h-15V60h15zm0-30h-15V30h15zM45 75h15v15H45zM353.5 466.999h15v15h-15zM278.5 331h-15V211h15zm0-135h-15v-15h15z" fill-rule="evenodd"/><g>&ndash;&gt;-->
                            <!--&lt;!&ndash;                                <path fill-rule="evenodd" d="M203.5 414.5c0 12.407-10.093 22.5-22.5 22.5h-67.5v30h15v-15H181c20.678 0 37.5-16.822 37.5-37.5V60H105c-16.542 0-30 13.458-30 30v15H15V67.5H0V120h90V90c0-8.271 6.729-15 15-15h98.5zM128.501 482h-15v30H248.5v-15H128.501zM0 52.5h15V15h233.5V0H0zM263.5 0v15H497v90h-60V90c0-16.542-13.458-30-30-30H293.5v354.5c0 20.678 16.822 37.5 37.5 37.5h52.5v45h-120v15h135v-75H331c-12.406 0-22.5-10.093-22.5-22.5V75H407c8.271 0 15 6.729 15 15v30h90V0z"/></g>&ndash;&gt;-->
                            <!--&lt;!&ndash;                            </svg>&ndash;&gt;-->
                            <!--                            -->
                            <!--                        </div>-->
                            <img class="h-10 w-10 mt-3 mr-3 rounded-lg" src="/project-assets/images/ckeditor.png" alt="NitsEditor Logo">
                            <div class="flex-col cursor-pointer" >
                                <h5 class="text-blue-500 font-bold">CK Editor</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the CK Editor</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <img class="h-10 w-10 mt-3 mr-3" src="/project-assets/images/date1.jpg" alt="NitsEditor Logo">

                            <div class="flex-col">
                                <h5 class="text-blue-500 font-bold">Date Picker</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-gray-200 font-bold text-yellow-500 rounded-lg">
                                <svg class="h-8 w-8 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M18.405 4.799c-.111-.44-.655-.799-1.21-.799h-6.814c-.554 0-1.33-.318-1.722-.707l-.596-.588C7.671 2.316 6.896 2 6.342 2H3.087c-.555 0-1.059.447-1.12.994L1.675 6h16.931l-.201-1.201zM19.412 7H.588a.58.58 0 00-.577.635l.923 9.669A.77.77 0 001.7 18h16.6a.77.77 0 00.766-.696l.923-9.669A.58.58 0 0019.412 7z"/>
                                </svg>
                            </div>
                            <div class="flex-col">
                                <h5 class="text-blue-500 font-bold">Input File</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500" @click="showModalRow = true">
                            <img class="h-10 w-10 mt-3 mr-3" src="/project-assets/images/form.jpg" alt="NitsEditor Logo">
                            <div class="flex-col cursor-pointer">
                                <h5 class="text-blue-500 font-bold">Form</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500" @click="showModalRow = true">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M7.376 6.745c-.447.275 1.197 4.242 1.598 4.888a1.206 1.206 0 002.053-1.266c-.397-.648-3.205-3.898-3.651-3.622zm-.335-4.343a8.98 8.98 0 015.918 0c.329.114.765-.115.572-.611-.141-.36-.277-.712-.332-.855-.131-.339-.6-.619-.804-.665C11.623.097 10.823 0 10 0S8.377.097 7.604.271c-.204.046-.672.326-.803.665l-.332.855c-.193.496.243.726.572.611zm12.057.784a10.132 10.132 0 00-1.283-1.285c-.153-.129-.603-.234-.888.051l-1.648 1.647a9.27 9.27 0 011.155.966c.362.361.677.752.966 1.155l1.647-1.647c.286-.286.181-.735.051-.887zM10 2.9A8.1 8.1 0 001.899 11 8.1 8.1 0 0010 19.101 8.1 8.1 0 0010 2.9zm0 14.201A6.1 6.1 0 1110.001 4.9 6.1 6.1 0 0110 17.1z"/>
                                </svg>
                            </div>
                            <div class="flex-col cursor-pointer">
                                <h5 class="text-blue-500 font-bold">Input Date</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.726 12.641c-.843 1.363-3.535 2.361-6.726 2.361s-5.883-.998-6.727-2.361c-.178-.29-.273-.135-.273.007v2.002c0 1.94 3.134 3.95 7 3.95s7-2.01 7-3.949v-2.002c0-.143-.096-.298-.274-.008zm.011-5.116c-.83 1.205-3.532 2.09-6.737 2.09s-5.908-.885-6.738-2.09C3.091 7.277 3 7.412 3 7.523V9.88c0 1.762 3.134 3.189 7 3.189s7-1.428 7-3.189V7.523c0-.111-.092-.246-.263.002zM10 1C6.134 1 3 2.18 3 3.633v1.26c0 1.541 3.134 2.791 7 2.791s7-1.25 7-2.791v-1.26C17 2.18 13.866 1 10 1z"/>
                                </svg>
                            </div>
                            <div class="flex-col cursor-pointer" >
                                <h5 class="text-blue-500 font-bold">MultiSelect</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <img class="h-10 w-10 mt-3 mr-3" src="/project-assets/images/select1.png" alt="NitsEditor Logo">

                            <div class="flex-col">
                                <h5 class="text-blue-500 font-bold">Single Select</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <!--                            <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
                                <!--                                <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>-->
                                <!--                            </svg>-->
                                <svg class="h-5 w-5 my-3 mx-2  font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 405.333 405.333">
                                    <path fill-rule="evenodd" d="M34.784 0v132.809h43.61v-33.98c0-7.906 3.012-15.808 9.041-21.837 6.037-6.029 13.943-9.041 21.845-9.041h46.323v262.891c0 7.906-3.012 15.804-9.041 21.841-6.033 6.029-13.943 9.041-21.841 9.041h-32.99v43.61h221.858v-43.61h-32.981c-7.91 0-15.808-3.012-21.833-9.041-6.042-6.037-9.05-13.939-9.05-21.841V67.951h46.323c7.91 0 15.808 3.012 21.841 9.041 6.025 6.029 9.041 13.935 9.041 21.837v33.98h43.618V0H34.784z" />
                                </svg>
                            </div>
                            <div class="flex-col">
                                <h5 class="text-blue-500 font-bold">Text</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500" @click="showModalRow = true">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-purple-800 font-bold text-white rounded-lg">
                                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M9.882 9.093c-.511 4.115-3.121 4.847-3.121 7.708C6.761 18.567 8.244 20 10 20s3.238-1.434 3.238-3.199c0-2.861-2.61-3.593-3.121-7.708-.016-.123-.219-.123-.235 0zm-5.999-9C3.372 4.208.762 4.939.762 7.801.762 9.566 2.244 11 4 11s3.238-1.434 3.238-3.199c0-2.861-2.61-3.593-3.121-7.708-.015-.123-.219-.123-.234 0zm12 0c-.511 4.115-3.121 4.847-3.121 7.708C12.762 9.566 14.244 11 16 11s3.238-1.434 3.238-3.199c0-2.861-2.61-3.593-3.121-7.708-.016-.123-.219-.123-.234 0z"/>
                                </svg>
                            </div>
                            <div class="flex-col cursor-pointer" >
                                <h5 class="text-blue-500 font-bold">Multiple Dropzone</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500" @click="showModalRow = true">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10.023 16.032c-2.508 0-4.253-1.555-4.253-1.555L4.287 17.84c1.023.547 2.092.936 2.709 1.141l-1.592.381a1.391 1.391 0 01-1.675-1.029L.639 5.405a1.39 1.39 0 011.028-1.676l3.716-.889c-.91 1.029-1.263 2.252-1.174 3.65.139 2.193 2.237 3.879 4.734 4.822 4.701 1.776 3.586 4.72 1.08 4.72zm9.338-1.438L16.27 1.666A1.388 1.388 0 0014.595.639l-2.663.637c.679.105 2.024.4 3.505 1.178l-1.159 3.213s-.965-1.078-3.553-1.209c-2.46-.125-3.828 2.537.969 4.105 3.674 1.201 4.848 3.516 4.787 5.658a5.123 5.123 0 01-.872 2.701l2.725-.652a1.39 1.39 0 001.027-1.676z"/>
                                </svg>
                            </div>
                            <div class="flex-col cursor-pointer">
                                <h5 class="text-blue-500 font-bold">Single Dropzone</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1.6a8.4 8.4 0 100 16.8 8.4 8.4 0 000-16.8zm5 9.4h-4v4H9v-4H5V9h4V5h2v4h4v2z"/>
                                </svg>
                            </div>
                            <div class="flex-col cursor-pointer" >
                                <h5 class="text-blue-500 font-bold">Button</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-green-600 font-bold text-white rounded-lg">
                                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M9.248 11.601c.45.313 1.05.313 1.5 0l9.088-5.281a.375.375 0 00-.048-.646l-9.205-3.537a1.315 1.315 0 00-1.17 0L.208 5.674a.375.375 0 00-.048.646l9.088 5.281zm10.54-.79l-2.486-1.233-5.725 3.327c-.469.309-1.014.471-1.579.471s-1.11-.163-1.579-.471L2.698 9.576.208 10.81a.375.375 0 00-.048.646l9.088 6.309c.45.313 1.05.313 1.5 0l9.088-6.309a.374.374 0 00-.048-.645z"/>
                                </svg>
                            </div>
                            <div class="flex-col">
                                <h5 class="text-blue-500 font-bold">Group Button</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <!--                            <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
                                <!--                                <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>-->
                                <!--                            </svg>-->
                                <svg class="h-6 w-6 m-2 font-bold" viewBox="0 -122 512.001 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M378.031 268.988l-28.25-28.27 105.817-105.745-105.883-106.84L378.098 0 512 135.11zm-215.812-28.27L56.402 134.974 162.29 28.133 133.902 0 0 135.11l133.969 133.878zm113.765-105.757c0 11.016-8.964 19.98-19.984 19.98s-19.98-8.964-19.98-19.98c0-11.02 8.96-19.984 19.98-19.984s19.984 8.964 19.984 19.984zm79.93 0c0 11.016-8.965 19.98-19.984 19.98-11.02 0-19.98-8.964-19.98-19.98 0-11.02 8.96-19.984 19.98-19.984s19.984 8.964 19.984 19.984zm-159.86 0c0 11.016-8.964 19.98-19.984 19.98-11.02 0-19.98-8.964-19.98-19.98 0-11.02 8.96-19.984 19.98-19.984s19.985 8.964 19.985 19.984zm0 0"/>
                                </svg>
                            </div>
                            <div class="flex-col">
                                <h5 class="text-blue-500 font-bold">Pagination</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500" @click="showModalRow = true">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <!--                            <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
                                <!--                                <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>-->
                                <!--                            </svg>-->

                                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                    <path fill-rule="evenodd" d="M504 72H8a8 8 0 00-8 8v48a8 8 0 008 8h24v296a8 8 0 008 8h32a8 8 0 008-8V136h352v296a8 8 0 008 8h32a8 8 0 008-8V136h24a8 8 0 008-8V80a8 8 0 00-8-8zm-8 48h-24a8 8 0 00-8 8v296h-16V128a8 8 0 00-8-8H72a8 8 0 00-8 8v296H48V128a8 8 0 00-8-8H16V88h480v32z"/>
                                </svg>
                            </div>
                            <div class="flex-col cursor-pointer" >
                                <h5 class="text-blue-500 font-bold">Tables</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500" @click="showModalRow = true">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <!--                            <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
                                <!--                                <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>-->
                                <!--                            </svg>-->
                                <svg class="h-6 w-6 m-2 font-bold" viewBox="0 0 482.239 482.239" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M465.016 0H120.56c-9.52 0-17.223 7.703-17.223 17.223v86.114H17.223C7.703 103.337 0 111.04 0 120.56v344.456c0 9.52 7.703 17.223 17.223 17.223h344.456c9.52 0 17.223-7.703 17.223-17.223v-86.114h86.114c9.52 0 17.223-7.703 17.223-17.223V17.223c0-9.52-7.703-17.223-17.223-17.223zm-120.56 447.793H34.446v-310.01h310.011v310.01zm103.337-103.337h-68.891V120.56c0-9.52-7.703-17.223-17.223-17.223H137.783V34.446h310.011v310.01z"/>
                                </svg>
                            </div>
                            <div class="flex-col cursor-pointer">
                                <h5 class="text-blue-500 font-bold">Tabs</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <!--                            <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
                                <!--                                <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>-->
                                <!--                            </svg>-->

                                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                    <path fill-rule="evenodd" d="M501.362 383.95L320.497 51.474c-29.059-48.921-99.896-48.986-128.994 0L10.647 383.95c-29.706 49.989 6.259 113.291 64.482 113.291h361.736c58.174 0 94.203-63.251 64.497-113.291zM256 437.241c-16.538 0-30-13.462-30-30s13.462-30 30-30 30 13.462 30 30-13.462 30-30 30zm30-120c0 16.538-13.462 30-30 30s-30-13.462-30-30v-150c0-16.538 13.462-30 30-30s30 13.462 30 30v150z"/>
                                </svg>
                            </div>
                            <div class="flex-col cursor-pointer" >
                                <h5 class="text-blue-500 font-bold">Alert</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <img class="h-10 w-10 mt-3 mr-3" src="/project-assets/images/timeline-512.png" alt="NitsEditor Logo">
                            <div class="flex-col">
                                <h5 class="text-blue-500 font-bold">Bread Crumb</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <svg class="h-8 w-8 m-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                    <path fill-rule="evenodd" d="M0 0v25.366h35V0H0zm32.879 23.245H2.121V2.121h30.758v21.124zM0 28.283h35V35H0z"/>
                                </svg>
                            </div>
                            <div class="flex-col">
                                <h5 class="text-blue-500 font-bold">Footer</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500" @click="showModalRow = true">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1z"/>
                                </svg>
                            </div>
                            <div class="flex-col cursor-pointer" >
                                <h5 class="text-blue-500 font-bold">Menu</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500" @click="showModalRow = true">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-red-600 font-bold text-white rounded-full">
                                <svg class="h-6 w-6 m-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M15 10.001c0 .299-.305.514-.305.514l-8.561 5.303C5.51 16.227 5 15.924 5 15.149V4.852c0-.777.51-1.078 1.135-.67l8.561 5.305c-.001 0 .304.215.304.514z"/>
                                </svg>
                            </div>
                            <div class="flex-col cursor-pointer">
                                <h5 class="text-blue-500 font-bold">Video Player</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 325.498 325.498">
                                    <path fill-rule="evenodd" d="M104.998 289.047c0 8.25-6.75 15-15 15h-62c-8.25 0-15-6.75-15-15v-68c0-8.25 6.75-15 15-15h62c8.25 0 15 6.75 15 15v68zM215.248 289.047c0 8.25-6.75 15-15 15h-62c-8.25 0-15-6.75-15-15v-104c0-8.25 6.75-15 15-15h62c8.25 0 15 6.75 15 15v104zM325.498 289.047c0 8.25-6.75 15-15 15h-62c-8.25 0-15-6.75-15-15v-144c0-8.25 6.75-15 15-15h62c8.25 0 15 6.75 15 15v144zM312.522 21.731l-67.375 16.392c-5.346 1.294-6.537 5.535-2.648 9.424l14.377 14.041c1.207 1.376-.225 3.206-1.361 3.981-9.053 6.18-23.42 15.248-43.279 25.609-108.115 56.407-197.238 52.947-198.578 52.886-7.154-.363-13.271 5.148-13.641 12.314-.369 7.17 5.143 13.283 12.313 13.652.527.027 2.67.124 6.273.124 23.107 0 106.111-3.987 205.66-55.924 23.555-12.289 39.881-22.888 49.414-29.598 1.348-.949 3.697-2.585 5.865-.378l15.725 15.724c3.889 3.889 8.109 2.692 9.381-2.659l15.285-68.211c1.27-5.352-2.066-8.671-7.411-7.377z"/>
                                </svg>
                            </div>
                            <div class="flex-col cursor-pointer" >
                                <h5 class="text-blue-500 font-bold">Progress Bar</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the Progress Bar</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>
                                </svg>
                            </div>
                            <div class="flex-col">
                                <h5 class="text-blue-500 font-bold">Empty Space</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the Empty Space</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M11 .958v9.039C11 10.551 10.551 11 9.997 11H.958A9.1 9.1 0 1011 .958zm-2 0A9.098 9.098 0 00.958 9H9V.958z"/>
                                </svg>
                            </div>
                            <div class="flex-col">
                                <h5 class="text-blue-500 font-bold">Pie Chart</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-gray-200 font-bold text-yellow-500 rounded-lg">
                                <svg class="h-8 w-8 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M18.405 4.799c-.111-.44-.655-.799-1.21-.799h-6.814c-.554 0-1.33-.318-1.722-.707l-.596-.588C7.671 2.316 6.896 2 6.342 2H3.087c-.555 0-1.059.447-1.12.994L1.675 6h16.931l-.201-1.201zM19.412 7H.588a.58.58 0 00-.577.635l.923 9.669A.77.77 0 001.7 18h16.6a.77.77 0 00.766-.696l.923-9.669A.58.58 0 0019.412 7z"/>
                                </svg>
                            </div>
                            <div class="flex-col">
                                <h5 class="text-blue-500 font-bold">Input File</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <!--                            <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
                                <!--                                <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>-->
                                <!--                            </svg>-->
                                <svg class="h-5 w-5 my-3 mx-2  font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 405.333 405.333">
                                    <path fill-rule="evenodd" d="M34.784 0v132.809h43.61v-33.98c0-7.906 3.012-15.808 9.041-21.837 6.037-6.029 13.943-9.041 21.845-9.041h46.323v262.891c0 7.906-3.012 15.804-9.041 21.841-6.033 6.029-13.943 9.041-21.841 9.041h-32.99v43.61h221.858v-43.61h-32.981c-7.91 0-15.808-3.012-21.833-9.041-6.042-6.037-9.05-13.939-9.05-21.841V67.951h46.323c7.91 0 15.808 3.012 21.841 9.041 6.025 6.029 9.041 13.935 9.041 21.837v33.98h43.618V0H34.784z" />
                                </svg>
                            </div>
                            <div class="flex-col">
                                <h5 class="text-blue-500 font-bold">Text</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1.6a8.4 8.4 0 100 16.8 8.4 8.4 0 000-16.8zm5 9.4h-4v4H9v-4H5V9h4V5h2v4h4v2z"/>
                                </svg>
                            </div>
                            <div class="flex-col cursor-pointer" >
                                <h5 class="text-blue-500 font-bold">Button</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <!--                            <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
                                <!--                                <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>-->
                                <!--                            </svg>-->
                                <svg class="h-6 w-6 m-2 font-bold" viewBox="0 -122 512.001 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M378.031 268.988l-28.25-28.27 105.817-105.745-105.883-106.84L378.098 0 512 135.11zm-215.812-28.27L56.402 134.974 162.29 28.133 133.902 0 0 135.11l133.969 133.878zm113.765-105.757c0 11.016-8.964 19.98-19.984 19.98s-19.98-8.964-19.98-19.98c0-11.02 8.96-19.984 19.98-19.984s19.984 8.964 19.984 19.984zm79.93 0c0 11.016-8.965 19.98-19.984 19.98-11.02 0-19.98-8.964-19.98-19.98 0-11.02 8.96-19.984 19.98-19.984s19.984 8.964 19.984 19.984zm-159.86 0c0 11.016-8.964 19.98-19.984 19.98-11.02 0-19.98-8.964-19.98-19.98 0-11.02 8.96-19.984 19.98-19.984s19.985 8.964 19.985 19.984zm0 0"/>
                                </svg>
                            </div>
                            <div class="flex-col">
                                <h5 class="text-blue-500 font-bold">Pagination</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <svg class="h-8 w-8 m-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                    <path fill-rule="evenodd" d="M0 0v25.366h35V0H0zm32.879 23.245H2.121V2.121h30.758v21.124zM0 28.283h35V35H0z"/>
                                </svg>
                            </div>
                            <div class="flex-col">
                                <h5 class="text-blue-500 font-bold">Footer</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                    </nits-grid>
                </div>
                <div class="flex justify-between border-solid border-t-2 p-2 text-center items-center">
                    <button @click="isOpen2 = ! isOpen2" class="ml-5 my-2 bg-transparent border border-gray-500 text-gray-600 font-semibold py-1 px-4 rounded">Close</button>
                </div>
            </div>
        </div>
        <!--<add element pop-up end>-->

        <!--<general Tab's popup start>-->
        <div class="absolute fixed inset-0 m-auto text-center w-1/2 h-64 rounded-md shadow-lg bg-white " v-if="showModalRow">
            <div class="flex bg-blue-600 p-4">
                <h2 class="text-white text-xl leading-normal font-normal font-sans">Button Settings</h2>
                <button @click="showModalRow = false" class="absolute top-0 right-0 text-xl text-white my-4 mx-4">X</button>
            </div>
            <div>
                <div class="flex flex-wrap">
                    <div class="w-full">
                        <ul class="flex mb-0 list-none flex-wrap flex-row bg-blue-600 pt-2">
                            <li class=" flex text-center cursor-pointer">
                                <a class="text-base  px-5 py-3 rounded-t-lg w-24 ml-2 leading-normal font-normal font-sans" v-on:click="toggleTabs(1)" v-bind:class="{'text-white bg-blue-600': openTab !== 1, 'text-gray-600 bg-white': openTab === 1}">
                                    General
                                </a>
                            </li>
                            <li class="flex text-center cursor-pointer">
                                <a class="text-base  px-5 py-3 rounded-t-lg w-40 ml-2 leading-normal font-normal font-sans" v-on:click="toggleTabs(2)" v-bind:class="{'text-white bg-blue-600': openTab !== 2, 'text-gray-600 bg-white': openTab === 2}">
                                    Design Options
                                </a>
                            </li>
                        </ul>
                        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                            <div class="px-4 py-5 flex-auto">
                                <div class="tab-content tab-space">
                                    <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                                        DEMO1 <br /> text-base  px-5 py-3 rounded-t-lg w-40 ml-2 leading-normal font-normal font-sans
                                        text-base  px-5 py-3 rounded-t-lg w-40 ml-2 leading-normal font-normal font-sans
                                    </div>
                                    <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                                        <p>
                                            DEMO2 <br />text-base  px-5 py-3 rounded-t-lg w-40 ml-2 leading-normal
                                            font-normal font-sans text-base  px-5 py-3 rounded-t-lg w-40 ml-2
                                            leading-normal font-normal font-sans
                                            <br />
                                            <br />
                                            text-base  px-5 py-3 rounded-t-lg w-40 ml-2 leading-normal
                                            font-normal font-sans
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="flex items-center justify-end p-6 border-t border-solid border-gray-300 bg-gray-300 rounded-b">
                                <button @click="showModalRow = false" class="text-white bg-gray-500 bg-transparent border border-solid border-gray-500 active:bg-gray-500 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease" v-on:click="toggleModal()">
                                    Close
                                </button>
                                <button class="text-white bg-blue-600 bg-transparent border border-solid border-blue-600 active:bg-gray-500 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--                <button @click="showModalRowRow = false" class="border-none text-white bg-teal-400 text-2xl p-4 rounded-md cursor-pointer">Hide Modal</button>-->

        </div>
        <!--<general Tab's popup end>-->
        <vue-tailwind-modal :showing="Add" class="shadow-lg">
            <div class="">
                <div class="flex bg-blue-600 p-4">
                    <h2 class="text-white text-xl leading-normal font-normal font-sans">Button Settings</h2>
                </div>
                <div>
                    <div class="flex flex-wrap">
                        <div class="w-full">
                            <ul class="flex mb-0 list-none flex-wrap flex-row bg-blue-600 pt-2">
                                <li class=" flex text-center cursor-pointer">
                                    <a class="text-base  px-5 py-3 rounded-t-lg w-24 ml-2 leading-normal font-normal font-sans" v-on:click="toggleTabs(1)" v-bind:class="{'text-white bg-blue-600': openTab !== 1, 'text-gray-600 bg-white': openTab === 1}">
                                        General
                                    </a>
                                </li>
                                <li class="flex text-center cursor-pointer">
                                    <a class="text-base  px-5 py-3 rounded-t-lg w-40 ml-2 leading-normal font-normal font-sans" v-on:click="toggleTabs(2)" v-bind:class="{'text-white bg-blue-600': openTab !== 2, 'text-gray-600 bg-white': openTab === 2}">
                                        Design Options
                                    </a>
                                </li>
                            </ul>
                            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                                <div class="px-4 py-5 flex-auto">
                                    <div class="tab-content tab-space">
                                        <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                                            DEMO1 <br /> text-base  px-5 py-3 rounded-t-lg w-40 ml-2 leading-normal font-normal font-sans
                                            text-base  px-5 py-3 rounded-t-lg w-40 ml-2 leading-normal font-normal font-sans
                                        </div>
                                        <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                                            <p>
                                                DEMO2 <br />text-base  px-5 py-3 rounded-t-lg w-40 ml-2 leading-normal
                                                font-normal font-sans text-base  px-5 py-3 rounded-t-lg w-40 ml-2
                                                leading-normal font-normal font-sans
                                                <br />
                                                <br />
                                                text-base  px-5 py-3 rounded-t-lg w-40 ml-2 leading-normal
                                                font-normal font-sans
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex items-center justify-end p-6 border-t border-solid border-gray-300 bg-gray-300 rounded-b">
                                    <button @click="showModalRow = false" class="text-white bg-gray-500 bg-transparent border border-solid border-gray-500 active:bg-gray-500 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease">
                                        Close
                                    </button>
                                    <button class="text-white bg-blue-600 bg-transparent border border-solid border-blue-600 active:bg-gray-500 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </vue-tailwind-modal>
    </dashboard-layout-one>
</template>

<script>
    export default {
        name: "edit",
        // components: {VueTailwindModal},
        data(){
            return{
                breadcrumbs: ['Users', 'Add'],
                modalShow: false,
                Add: false,
                addedRow: false,
                isOpen2: false,
                modalRowShow: false,
                isOpen: true,
                isRowOpen: true,
                addRow:[],
                showModalRow: false,
                openTab: 1

            }
        },
        components: {
            'DashboardLayoutOne': () => import('./../../Layouts/Dashboard/LayoutOne'),
            'VueTailwindModal': () => import('vue-tailwind-modal'),
        },
        methods:{
            addRowField() {
                this.addRow.push({});
            },
            delRowField(arrayIndex,todo) {
                if(todo=="close"){
                    this.$delete(this.addRow, arrayIndex)
                }
            },
            showModal(){
                this.Add = true
                this.isOpen2= false
                this.noData= false
            },
            closeModal() {
                this.modalShow = false
            },
            rowSettingOpen(){
                this.modalRowShow = true
            },
            rowSettingClose(){
                this.modalRowShow = false
            },
            toggleTabs: function(tabNumber){
                this.openTab = tabNumber
            }
        },
    }
</script>

<style scoped>

</style>