<template>
    <dashboard-layout-one active="user-add">
        <base-bread-crumb-one name="Add Page" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>
        <div class="m-2 overflow-y-auto h-screen w-full">
            <div class="bg-white mb-32 mt-5 mr-4 min-h-full justify-center">
                <div class="relative px-5 bg-gray-200 mt-10 overflow-y-auto mb-32 h-screen mb-10 ">
                    <div class="">
                        <div class="w-full text-left pb-5 antialiased tracking-tigh font-sans">
                            <input class="w-full focus:outline-none border border-gray-700 h-8 px-8 rounded" placeholder="Add Title" type="text" >
                        </div>
                        <div class="flex-col w-full justify-center">
                            <div class="flex bg-white justify-between border-solid border-b-2 p-1 text-center items-center">
                                <div class="text-left font-medium ml-3 text-xs antialiased leading-snug text-gray-700 tracking-normal font-sans">NitsEditor Official Page</div>
                                <div @click="isOpen = ! isOpen" class="hover:bg-gray-200 rounded-full px-1 py-1 mr-2">
                                    <svg class="h-5 w-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 6h10l-5 9-5-9z"/></svg>
                                </div>
                            </div>
                            <div v-if="isOpen" class="min-h-full bg-white text-center items-center">
                                <div class="flex bg-blue-500 justify-between w-full">
                                    <div class=" text-lg font-bold">
                                        <div class="flex float-right">
                                            <div @click="openModal" class="inline-block cursor-pointer hover:bg-blue-600 font-bold text-white">
                                                <svg class="h-6 w-6 my-5 mx-5 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <title id="simpleicons-github-icon">Add Element</title>
                                                    <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>
                                                </svg>
                                            </div>
                                            <div class="inline-block hover:bg-blue-600 cursor-pointer text-white">
                                                <!--                                <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">-->
                                                <!--                                    <path fill-rule="evenodd" d="M491.383 0H20.617C9.23 0 0 9.23 0 20.617v470.765C0 502.77 9.23 512 20.617 512h470.765C502.77 512 512 502.77 512 491.383V20.617C512 9.23 502.77 0 491.383 0zm-20.618 470.765H41.235V41.235h429.53v429.53z"/>-->
                                                <!--                                    <path fill-rule="evenodd" d="M20.617 173.187h471.452v41.235H20.617z"/>-->
                                                <!--                                    <path fill-rule="evenodd" d="M298.266 193.804h41.235V492.07h-41.235z"/>-->
                                                <!--                                    <path d="M20.617 318.196h298.266v41.235H20.617z"/>-->
                                                <!--                                </svg>-->
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
                                <div class="w-full bg-white pt-64 pb-32">

                                    <div class="relative flex flex-row m-4 p-4">
                                        <div class="bg-gray-200 border border-white h-10 w-9  hover:text-gray-400 text-gray-600">
                                            <svg class="h-5 w-5 my-2 mx-3 pt-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 317.215 317.215">
                                                <g fill-rule="evenodd">
                                                    <path d="M309.715 1.107h-71.223a7.5 7.5 0 00-7.5 7.5v20a7.5 7.5 0 007.5 7.5h18.973l-57.129 57.127a7.501 7.501 0 000 10.606l14.143 14.143a7.476 7.476 0 005.304 2.197 7.482 7.482 0 005.304-2.197l57.129-57.127V79.83a7.5 7.5 0 007.5 7.5h20a7.5 7.5 0 007.5-7.5V8.607a7.502 7.502 0 00-7.501-7.5zM59.75 36.107h18.973a7.5 7.5 0 007.5-7.5v-20a7.5 7.5 0 00-7.5-7.5H7.5a7.5 7.5 0 00-7.5 7.5V79.83a7.5 7.5 0 007.5 7.5h20a7.5 7.5 0 007.5-7.5V60.857l57.125 57.126a7.483 7.483 0 005.305 2.197 7.486 7.486 0 005.305-2.197l14.142-14.143a7.5 7.5 0 000-10.606L59.75 36.107zM102.734 199.233a7.503 7.503 0 00-10.609 0L35 256.358v-18.974a7.5 7.5 0 00-7.5-7.5h-20a7.5 7.5 0 00-7.5 7.5v71.223a7.5 7.5 0 007.5 7.5h71.223a7.5 7.5 0 007.5-7.5v-20a7.5 7.5 0 00-7.5-7.5H59.75l57.126-57.125a7.5 7.5 0 000-10.606l-14.142-14.143zM309.715 229.885h-20a7.5 7.5 0 00-7.5 7.5v18.976l-57.13-57.127a7.5 7.5 0 00-10.606 0l-14.143 14.143a7.501 7.501 0 00.001 10.606l57.128 57.125h-18.973a7.5 7.5 0 00-7.5 7.5v20a7.5 7.5 0 007.5 7.5h71.223a7.5 7.5 0 007.5-7.5v-71.223a7.5 7.5 0 00-7.5-7.5z"/>
                                                </g>
                                            </svg>
                                        </div>
                                        <div  @click.prevent="addRowField()" class="border border-white h-10 w-9 text-gray-600 hover:text-gray-400 inline-block bg-gray-200 font-bold">
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
                                            <div class="text-gray-600 hover:text-gray-400 inline-block bg-gray-200 font-bold">
                                                <svg class="h-5 w-4 my-2 mx-3 font-bold" fill="currentColor" viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M512.001 84.853L427.148 0 256.001 171.147 84.853 0 0 84.853 171.148 256 0 427.148l84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853L340.853 256z"/></svg>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="relative h-32 ml-8 mr-8 -mt-8 rounded-b px-5 bg-gray-200 border-black">
                                        <div class="text-gray-600 hover:text-gray-400 inline-block bg-gray-200 font-bold">
                                            <svg class="h-4 w-4 my-2 mx-3 font-bold" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.873 477.873"><path fill-rule="evenodd" d="M392.533 238.937c-9.426 0-17.067 7.641-17.067 17.067V426.67c0 9.426-7.641 17.067-17.067 17.067H51.2c-9.426 0-17.067-7.641-17.067-17.067V85.337c0-9.426 7.641-17.067 17.067-17.067H256c9.426 0 17.067-7.641 17.067-17.067S265.426 34.137 256 34.137H51.2C22.923 34.137 0 57.06 0 85.337V426.67c0 28.277 22.923 51.2 51.2 51.2h307.2c28.277 0 51.2-22.923 51.2-51.2V256.003c0-9.425-7.641-17.066-17.067-17.066z"/><path d="M458.742 19.142A65.328 65.328 0 00412.536.004a64.85 64.85 0 00-46.199 19.149L141.534 243.937a17.254 17.254 0 00-4.113 6.673l-34.133 102.4c-2.979 8.943 1.856 18.607 10.799 21.585 1.735.578 3.552.873 5.38.875a17.336 17.336 0 005.393-.87l102.4-34.133c2.515-.84 4.8-2.254 6.673-4.13l224.802-224.802c25.515-25.512 25.518-66.878.007-92.393z"/></svg>
                                        </div>
                                        <div class="text-gray-600 hover:text-gray-400 inline-block bg-gray-200 font-bold">
                                            <svg class="h-4 w-4 my-2 mx-3 font-bold" fill="currentColor" viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M512.001 84.853L427.148 0 256.001 171.147 84.853 0 0 84.853 171.148 256 0 427.148l84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853L340.853 256z"/></svg>
                                        </div>
                                        <div class="border border-gray-400">
                                            <div class="h-10 w-9 text-gray-600 hover:text-gray-400 inline-block bg-gray-200 font-bold">
                                                <svg class="h-6 w-6 my-2 mx-3 font-bold" fill="currentColor"  viewBox="0 0 448 448" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M408 184H272a8 8 0 01-8-8V40c0-22.09-17.91-40-40-40s-40 17.91-40 40v136a8 8 0 01-8 8H40c-22.09 0-40 17.91-40 40s17.91 40 40 40h136a8 8 0 018 8v136c0 22.09 17.91 40 40 40s40-17.91 40-40V272a8 8 0 018-8h136c22.09 0 40-17.91 40-40s-17.91-40-40-40zm0 0"/></svg>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

<!--        <div class="">-->
<!--&lt;!&ndash;            <div class="w-full">&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="w-full px-10">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="flex-col">&ndash;&gt;-->
<!--&lt;!&ndash;                        &ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                &ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->

<!--        </div>-->
            <vue-tailwind-modal :showing="modalShow" class="shadow-lg">
                <div class="items-center">
                    <div class="pr-56 pb-4">
                        <h5 class="font-semibold text-lg text-gray-700">
                            Add Elements
                        </h5>
                    </div>
                </div>
                <div>
                    <button @click="closeModal" class=" bg-transparent border border-gray-500 mt-3 text-gray-600  font-semibold py-1 px-4 rounded">Close</button>
                </div>

            </vue-tailwind-modal>

            <vue-tailwind-modal :showing="modalRowShow" class="shadow-lg">
                <div class="items-center">
                    <div class="pr-56 pb-4">
                        <h5 class="font-semibold text-lg text-gray-700">
                            Row Settings
                        </h5>
                    </div>
                </div>
                <div>
                    <button @click="rowSettingClose" class=" bg-transparent border border-gray-500 mt-3 text-gray-600  font-semibold py-1 px-4 rounded">Close</button>
                </div>

            </vue-tailwind-modal>
    </div>
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
                modalRowShow: false,
                isOpen: true,
                isRowOpen: true,
                addRow:[]

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
            openModal(){
                this.modalShow = true
            },
            closeModal() {
                this.modalShow = false
            },
            rowSettingOpen(){
                this.modalRowShow = true
            },
            rowSettingClose(){
                this.modalRowShow = false
            }
        },
    }
</script>

<style scoped>

</style>