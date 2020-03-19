<template>
    <div>
        <div class="px-4 mb-2 text-sm text-gray-700 uppercase font-bold">Content</div>
        <div class="px-4 mb-1 flex justify-start items-center">
            <div class="py-1 h-4 -m-1 mr-1 border-l-2 border-teal-600"></div>
            <svg class="ml-2 text-teal-500 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.56 8.93l6.37-2.12a1 1 0 0 1 1.26 1.26l-2.12 6.37a1 1 0 0 1-.63.63l-6.37 2.12a1 1 0 0 1-1.26-1.26l2.12-6.37a1 1 0 0 1 .63-.63zm-.22 5.73l4-1.33 1.32-4-4 1.34-1.32 4z"/>
            </svg>
            <div class="ml-3 text-center text-teal-600 text-md font-medium">Dashboard</div>
        </div>
        <div class="px-4 mb-1 text-black flex justify-start items-center">
            <svg class="ml-2 text-gray-600 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path class="heroicon-ui" d="M7 5H5v14h14V5h-2v10a1 1 0 0 1-1.45.9L12 14.11l-3.55 1.77A1 1 0 0 1 7 15V5zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm4 2v8.38l2.55-1.27a1 1 0 0 1 .9 0L15 13.38V5H9z"/>
            </svg>
            <div class="ml-2 text-center text-gray-900 text-sm font-medium">Pages</div>
        </div>
        <div class="px-4 mb-2 mt-6 text-sm text-gray-700 uppercase font-bold">Tools</div>
        <div class="px-4 mb-1 flex justify-start items-center">
            <svg class="ml-2 text-gray-600 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path class="heroicon-ui" d="M6 2h9a1 1 0 0 1 .7.3l4 4a1 1 0 0 1 .3.7v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm9 2.41V7h2.59L15 4.41zM18 9h-3a2 2 0 0 1-2-2V4H6v16h12V9zm-2 7a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zm0-4a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zm-5-4a1 1 0 0 1-1 1H9a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1z"/>
            </svg>
            <div class="ml-3 text-center text-gray-900 text-sm font-medium">Forms</div>
        </div>
        <div class="px-4 mb-1 text-black flex justify-start items-center">
            <svg class="ml-2 text-gray-600 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path class="heroicon-ui" d="M15.6 15.47A4.99 4.99 0 0 1 7 12a5 5 0 0 1 10 0v1.5a1.5 1.5 0 1 0 3 0V12a8 8 0 1 0-4.94 7.4 1 1 0 1 1 .77 1.84A10 10 0 1 1 22 12v1.5a3.5 3.5 0 0 1-6.4 1.97zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
            <div class="ml-2 text-center text-gray-900 text-sm font-medium">Updater</div>
        </div>
        <div class="px-4 mb-1 text-black flex justify-start items-center">
            <svg class="ml-2 text-gray-600 h-4 w-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Text_document" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                            <path d="M16,1H4C3.447,1,3,1.447,3,2v16c0,0.552,0.447,1,1,1h12c0.553,0,1-0.448,1-1V2C17,1.448,16.553,1,16,1z   M15,17H5V3h10V17z M13,5H7v2h6V5z M13,13H7v2h6V13z M13,9H7v2h6V9z"/>
                        </svg>
            <div class="ml-2 text-center text-gray-900 text-sm font-medium">Import</div>
        </div>
        <div class="px-4 mb-2 mt-6 text-sm text-gray-700 uppercase font-bold">Configure</div>
        <div class="px-4 mb-1 text-black flex justify-start items-center">
            <svg class="ml-2 text-gray-600 h-4 w-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Compass" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                            <path d="M5.454,14.548c0,0,4.568-0.627,6.518-2.576s2.576-6.518,2.576-6.518S9.979,6.081,8.03,8.03  S5.454,14.548,5.454,14.548z M9.017,9.015c0.818-0.818,2.385-1.4,3.729-1.762c-0.361,1.342-0.945,2.92-1.76,3.732  c-0.543,0.545-1.426,0.545-1.969,0C8.472,10.442,8.472,9.56,9.017,9.015z M10.001,0.4C4.698,0.4,0.4,4.698,0.4,10  c0,5.303,4.298,9.601,9.601,9.601c5.301,0,9.6-4.298,9.6-9.601C19.601,4.698,15.302,0.4,10.001,0.4z M10,17.6  c-4.197,0-7.6-3.402-7.6-7.6c0-4.197,3.402-7.6,7.6-7.6c4.197,0,7.601,3.402,7.601,7.6C17.601,14.197,14.197,17.6,10,17.6z"/>
                        </svg>
            <div class="ml-3 text-center text-gray-900 text-sm font-medium">Addons</div>
        </div>
        <div class="px-4 mb-1 text-black flex justify-start items-center">
            <svg class="ml-2 text-gray-600 h-4 w-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Text_document" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                            <path d="M16,1H4C3.447,1,3,1.447,3,2v16c0,0.552,0.447,1,1,1h12c0.553,0,1-0.448,1-1V2C17,1.448,16.553,1,16,1z   M15,17H5V3h10V17z M13,5H7v2h6V5z M13,13H7v2h6V13z M13,9H7v2h6V9z"/>
                        </svg>
            <div class="ml-2 text-center text-gray-900 text-sm font-medium">Settings</div>
        </div>
        <div class="px-4 mb-1 text-black flex justify-start items-center">
            <svg class="ml-2 text-gray-600 h-4 w-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Text_document" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                            <path d="M16,1H4C3.447,1,3,1.447,3,2v16c0,0.552,0.447,1,1,1h12c0.553,0,1-0.448,1-1V2C17,1.448,16.553,1,16,1z   M15,17H5V3h10V17z M13,5H7v2h6V5z M13,13H7v2h6V13z M13,9H7v2h6V9z"/>
                        </svg>
            <div class="ml-2 text-center text-gray-900 text-sm font-medium">Users</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MenuOne"
    }
</script>

<style scoped>

</style>