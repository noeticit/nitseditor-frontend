<template>
    <div>
        <div class="flex  w-full m-2 p-2">
            <div class="max-w-md my-auto top-0 bottom-0 right-0 left-0 mx-auto">
                <div @click="isOpen = ! isOpen" v-if="hideButton = true" class="h-10 w-12 text-white rounded hover:bg-gray-300 inline-block bg-gray-400 font-bold">
                    <svg class="h-6 w-6 my-2 mx-3 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>
                    </svg>
                </div>
            </div>
            <div @mouseover="isVisible = true" @mouseleave="isVisible = false" @keydown.enter="isVisible = !isVisible"  v-if="addedRow" class="flex relative w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500" >
                <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                    <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>
                    </svg>
                </div>
                <div class="flex-col text-left">
                    <h5 class="text-blue-500 font-bold">Row</h5>
                    <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                </div>
                <div v-show="isVisible" class="max-w-md absolute my-auto item-center top-0 bottom-0 right-0 left-0 mx-auto">
                    <div class="bg-transparent rounded">
                        <div class="flex ml-auto mr-auto item-center cursor-pointer">
                            <div class="flex cursor-move rounded-l bg-blue-500 p-2  text-white hover:bg-blue-600 text-normal">
                                <svg class="h-4 w-4 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill-rule="evenodd" d="M507.353 245.245l-83.692-78.769a14.77 14.77 0 00-24.891 10.755v34.462h-98.462v-98.462h34.462a14.768 14.768 0 0010.755-24.891l-78.77-83.693a14.772 14.772 0 00-21.51 0L166.476 88.34a14.77 14.77 0 0010.755 24.891h34.462v98.462h-98.462v-34.462a14.768 14.768 0 00-24.891-10.755L4.647 245.245a14.772 14.772 0 000 21.51l83.692 78.769a14.77 14.77 0 0024.891-10.755v-34.462h98.462v98.462H177.23a14.768 14.768 0 00-10.755 24.891l78.769 83.692a14.773 14.773 0 0021.511.001l78.769-83.692a14.77 14.77 0 00-10.755-24.891h-34.462v-98.462h98.462v34.462a14.768 14.768 0 0024.891 10.755l83.692-78.769a14.773 14.773 0 00.001-21.511zm-79.045 55.342v-15.049c0-8.157-6.613-14.769-14.769-14.769h-128c-8.157 0-14.769 6.613-14.769 14.769v128c0 8.157 6.613 14.769 14.769 14.769h15.049L256 475.682l-44.587-47.374h15.049c8.157 0 14.769-6.613 14.769-14.769v-128c0-8.157-6.613-14.769-14.769-14.769h-128c-8.157 0-14.769 6.613-14.769 14.769v15.049L36.319 256l47.374-44.587v15.049c0 8.157 6.613 14.769 14.769 14.769h128c8.157 0 14.769-6.613 14.769-14.769v-128c0-8.157-6.613-14.769-14.769-14.769h-15.049L256 36.319l44.587 47.374h-15.049c-8.157 0-14.769 6.613-14.769 14.769v128c0 8.157 6.613 14.769 14.769 14.769h128c8.157 0 14.769-6.613 14.769-14.769v-15.049L475.682 256l-47.374 44.587z"/>
                                </svg>
                                <div class="ml-2 text-xs mx-2">Text Block </div>
                            </div>
                            <div class="flex bg-blue-500 p-2  text-white hover:bg-blue-600 text-normal">
                                <svg @click="isOpen2 = ! isOpen2" class="h-4 w-4 mx-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M14.69 2.661c-1.894-1.379-3.242-1.349-3.754-1.266a.538.538 0 00-.35.223l-4.62 6.374-2.263 3.123a2.447 2.447 0 00-.462 1.307l-.296 5.624a.56.56 0 00.76.553l5.256-2.01c.443-.17.828-.465 1.106-.849l1.844-2.545 5.036-6.949a.56.56 0 00.1-.423c-.084-.526-.487-1.802-2.357-3.162zM8.977 15.465l-2.043.789a.19.19 0 01-.221-.062 5.145 5.145 0 00-1.075-1.03 5.217 5.217 0 00-1.31-.706.192.192 0 01-.126-.192l.122-2.186.549-.755s1.229-.169 2.833.998c1.602 1.166 1.821 2.388 1.821 2.388l-.55.756z"/>
                                </svg>
                            </div>

                            <div class="flex bg-blue-500 p-2 text-white hover:bg-blue-600  text-normal">
                                <svg class="h-4 w-4 mx-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5 13V8h2L3.5 4 0 8h2v6a2 2 0 002 2h9.482l-2.638-3H5zm4.156-6L6.518 4H16c1.104 0 2 .897 2 2v6h2l-3.5 4-3.5-4h2V7H9.156z"/>
                                </svg>
                            </div>

                            <div class="flex bg-blue-500 p-2 text-white hover:bg-blue-600 rounded-r text-normal">
                                <svg class="h-4 w-4 mx-1 font-bold" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M14.348 14.849a1.2 1.2 0 01-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 11-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 111.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 111.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 010 1.698z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


<!--            <div class="flex-col cursor-pointer">-->
<!--                <h5 class="text-blue-500 font-bold">Button</h5>-->
<!--                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>-->
<!--            </div>-->
        </div>

<!--        <vue-tailwind-modal :showing="Add" class="shadow-lg">-->
<!--            <div class="">-->
<!--                <input-field></input-field>-->
<!--                <div class="flex items-center justify-end p-6 border-t border-solid border-gray-300 bg-gray-300 rounded-b">-->
<!--                    <button @click="showModalRow = false" class="text-white bg-gray-500 bg-transparent border border-solid border-gray-500 active:bg-gray-500 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease">-->
<!--                        Close-->
<!--                    </button>-->
<!--                    <button class="text-white bg-blue-600 bg-transparent border border-solid border-blue-600 active:bg-gray-500 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" >-->
<!--                        Save Changes-->
<!--                    </button>-->
<!--                </div>-->
<!--            </div>-->
<!--        </vue-tailwind-modal>-->
        <div v-if="isOpen2" class="main-modal fixed w-full h-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster" style="background: rgba(0,0,0,.7);">
            <div class="border border-teal-500 shadow-lg modal-container bg-white w-1/2 mx-20 rounded shadow-lg z-50">
<!--                <div class="flex relative justify-between border-solid border-b-2 p-2 text-center items-center">-->
<!--                    <div class="flex py-1">-->
<!--                        <div @click="isOpen2 = false" class="text-gray-600 ml-16 inline-block bg-white hover:bg-red-600 hover:text-white rounded shadow-md no-underline mr-3 focus:outline-none active:shadow-none font-bold">-->
<!--                            <svg class="h-4 w-4 my-2 mx-2 font-bold" fill="currentColor" viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M512.001 84.853L427.148 0 256.001 171.147 84.853 0 0 84.853 171.148 256 0 427.148l84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853L340.853 256z"/></svg>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
                <div class="" style="height: 400px;">
                    <input-field label="Text Setting"></input-field>
                </div>
                <div class="flex items-center mt-5 justify-end p-6 border-t border-solid border-gray-300 bg-gray-300 rounded-b">
                    <button @click="isOpen2 = ! isOpen2" class="text-white bg-gray-500 bg-transparent border border-solid border-gray-500 active:bg-gray-500 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease">
                        Close
                    </button>
                    <button class="text-white bg-blue-600 bg-transparent border border-solid border-blue-600 active:bg-gray-500 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" >
                        Save Changes
                    </button>
                </div>
<!--                <div class="flex justify-between border-solid border-t-2 p-2 text-center items-center">-->
<!--                    <button  class="ml-5 my-2 bg-transparent border border-gray-500 text-gray-600 font-semibold py-1 px-4 rounded">Close</button>-->
<!--                </div>-->
            </div>
        </div>
        <div v-if="isOpen" class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster" style="background: rgba(0,0,0,.7);">
            <div class="border border-teal-500 shadow-lg modal-container bg-white w-full mx-20 rounded shadow-lg z-50 overflow-y-auto">
                <div class="flex relative justify-between border-solid border-b-2 p-2 text-center items-center">
                    <div class="text-left font-medium ml-6 text-sm antialiased leading-snug text-gray-700 tracking-normal font-sans">Add Elements</div>
                    <div class="flex py-1">
                        <div class="w-2/3 h-6 pl-3 mt-1 pr-2 bg-white border rounded-full flex justify-between items-center">
                            <input type="search" name="search" id="search" placeholder="Search Elements"
                                   class="appearance-none text-xs w-full outline-none focus:outline-none active:outline-none"/>
                            <button type="submit" class="ml-1 outline-none focus:outline-none active:outline-none">
                                <svg class="h-4 w-4 my-2 mx-2 text-gray-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 00.898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 002.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 003.115-.844l3.799 3.801a.953.953 0 001.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 014.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 01-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"/>
                                </svg>
                            </button>
                        </div>
                        <div @click="isOpen = false" class="text-gray-600 ml-16 inline-block bg-white hover:bg-red-600 hover:text-white rounded shadow-md no-underline mr-3 focus:outline-none active:shadow-none font-bold">
                            <svg class="h-4 w-4 my-2 mx-2 font-bold" fill="currentColor" viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M512.001 84.853L427.148 0 256.001 171.147 84.853 0 0 84.853 171.148 256 0 427.148l84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853L340.853 256z"/></svg>
                        </div>
                    </div>

                </div>
                <div class="overflow-y-auto scroll_bar" style="height: 500px;">
                    <nits-grid class="px-5 py-5" cols="5" gap="2">
                        <div @click.prevent="showModal" class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500" >
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>
                                </svg>
                            </div>
                            <div class="flex-col text-left cursor-pointer" >
                                <h5 class="text-blue-500 font-bold">Row</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div @click.prevent="showModal('checkbox')" class="flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-white font-bold text-blue-600 rounded-lg">
                                <!--                            <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
                                <!--                                <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>-->
                                <!--                            </svg>-->
                                <svg class="h-6 w-6 m-2 font-bold" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M256 0C114.836 0 0 114.836 0 256s114.836 256 256 256 256-114.836 256-256S397.164 0 256 0zm0 0" />
                                    <path fill-rule="evenodd" d="M385.75 201.75L247.082 340.414c-4.16 4.16-9.621 6.254-15.082 6.254s-10.922-2.094-15.082-6.254l-69.332-69.332c-8.344-8.34-8.344-21.824 0-30.164 8.34-8.344 21.82-8.344 30.164 0l54.25 54.25 123.586-123.582c8.34-8.344 21.82-8.344 30.164 0 8.34 8.34 8.34 21.82 0 30.164zm0 0" fill="#fafafa"/>
                                </svg>
                            </div>
                            <div class="flex-col text-left cursor-pointer">
                                <h5 class="text-blue-500 font-bold">Check Box</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the checkbox</p>
                            </div>
                        </div>
                        <div class="flex cursor-pointer w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
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
                            <img class="h-10 w-10 mt-3 mr-3 rounded-lg" src="/project-assets/images/ckeditor.png" >
                            <div class="flex-col text-left " >
                                <h5 class="text-blue-500 font-bold">CK Editor</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the CK Editor</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 cursor-pointer border border-gray-200 hover:border-1 hover:border-blue-500">
                            <img class="h-10 w-10 mt-3 mr-3" src="/project-assets/images/date1.jpg" >

                            <div class="flex-col text-left">
                                <h5 class="text-blue-500 font-bold">Date Picker</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 cursor-pointer p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-gray-200 font-bold text-yellow-500 rounded-lg">
                                <svg class="h-8 w-8 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M18.405 4.799c-.111-.44-.655-.799-1.21-.799h-6.814c-.554 0-1.33-.318-1.722-.707l-.596-.588C7.671 2.316 6.896 2 6.342 2H3.087c-.555 0-1.059.447-1.12.994L1.675 6h16.931l-.201-1.201zM19.412 7H.588a.58.58 0 00-.577.635l.923 9.669A.77.77 0 001.7 18h16.6a.77.77 0 00.766-.696l.923-9.669A.58.58 0 0019.412 7z"/>
                                </svg>
                            </div>
                            <div class="flex-col text-left">
                                <h5 class="text-blue-500 font-bold">Input File</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 cursor-pointer p-2 border border-gray-200 hover:border-1 hover:border-blue-500" @click="showModalRow = true">
                            <img class="h-10 w-10 mt-3 mr-3" src="/project-assets/images/form.jpg" >
                            <div class="flex-col text-left cursor-pointer">
                                <h5 class="text-blue-500 font-bold">Form</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 cursor-pointer border border-gray-200 hover:border-1 hover:border-blue-500" @click="showModalRow = true">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M7.376 6.745c-.447.275 1.197 4.242 1.598 4.888a1.206 1.206 0 002.053-1.266c-.397-.648-3.205-3.898-3.651-3.622zm-.335-4.343a8.98 8.98 0 015.918 0c.329.114.765-.115.572-.611-.141-.36-.277-.712-.332-.855-.131-.339-.6-.619-.804-.665C11.623.097 10.823 0 10 0S8.377.097 7.604.271c-.204.046-.672.326-.803.665l-.332.855c-.193.496.243.726.572.611zm12.057.784a10.132 10.132 0 00-1.283-1.285c-.153-.129-.603-.234-.888.051l-1.648 1.647a9.27 9.27 0 011.155.966c.362.361.677.752.966 1.155l1.647-1.647c.286-.286.181-.735.051-.887zM10 2.9A8.1 8.1 0 001.899 11 8.1 8.1 0 0010 19.101 8.1 8.1 0 0010 2.9zm0 14.201A6.1 6.1 0 1110.001 4.9 6.1 6.1 0 0110 17.1z"/>
                                </svg>
                            </div>
                            <div class="flex-col text-left cursor-pointer">
                                <h5 class="text-blue-500 font-bold">Input Date</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 cursor-pointer border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.726 12.641c-.843 1.363-3.535 2.361-6.726 2.361s-5.883-.998-6.727-2.361c-.178-.29-.273-.135-.273.007v2.002c0 1.94 3.134 3.95 7 3.95s7-2.01 7-3.949v-2.002c0-.143-.096-.298-.274-.008zm.011-5.116c-.83 1.205-3.532 2.09-6.737 2.09s-5.908-.885-6.738-2.09C3.091 7.277 3 7.412 3 7.523V9.88c0 1.762 3.134 3.189 7 3.189s7-1.428 7-3.189V7.523c0-.111-.092-.246-.263.002zM10 1C6.134 1 3 2.18 3 3.633v1.26c0 1.541 3.134 2.791 7 2.791s7-1.25 7-2.791v-1.26C17 2.18 13.866 1 10 1z"/>
                                </svg>
                            </div>
                            <div class="flex-col text-left cursor-pointer" >
                                <h5 class="text-blue-500 font-bold">MultiSelect</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 cursor-pointer p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <img class="h-10 w-10 mt-3 mr-3" src="/project-assets/images/select1.png">

                            <div class="flex-col text-left">
                                <h5 class="text-blue-500 font-bold">Single Select</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 cursor-pointer border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <!--                            <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
                                <!--                                <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>-->
                                <!--                            </svg>-->
                                <svg class="h-5 w-5 my-3 mx-2  font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 405.333 405.333">
                                    <path fill-rule="evenodd" d="M34.784 0v132.809h43.61v-33.98c0-7.906 3.012-15.808 9.041-21.837 6.037-6.029 13.943-9.041 21.845-9.041h46.323v262.891c0 7.906-3.012 15.804-9.041 21.841-6.033 6.029-13.943 9.041-21.841 9.041h-32.99v43.61h221.858v-43.61h-32.981c-7.91 0-15.808-3.012-21.833-9.041-6.042-6.037-9.05-13.939-9.05-21.841V67.951h46.323c7.91 0 15.808 3.012 21.841 9.041 6.025 6.029 9.041 13.935 9.041 21.837v33.98h43.618V0H34.784z" />
                                </svg>
                            </div>
                            <div class="flex-col text-left">
                                <h5 class="text-blue-500 font-bold">Text</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200  cursor-pointer p-2 border border-gray-200 hover:border-1 hover:border-blue-500" @click="showModalRow = true">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-purple-800 font-bold text-white rounded-lg">
                                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M9.882 9.093c-.511 4.115-3.121 4.847-3.121 7.708C6.761 18.567 8.244 20 10 20s3.238-1.434 3.238-3.199c0-2.861-2.61-3.593-3.121-7.708-.016-.123-.219-.123-.235 0zm-5.999-9C3.372 4.208.762 4.939.762 7.801.762 9.566 2.244 11 4 11s3.238-1.434 3.238-3.199c0-2.861-2.61-3.593-3.121-7.708-.015-.123-.219-.123-.234 0zm12 0c-.511 4.115-3.121 4.847-3.121 7.708C12.762 9.566 14.244 11 16 11s3.238-1.434 3.238-3.199c0-2.861-2.61-3.593-3.121-7.708-.016-.123-.219-.123-.234 0z"/>
                                </svg>
                            </div>
                            <div class="flex-col text-left cursor-pointer" >
                                <h5 class="text-blue-500 font-bold">Multiple Dropzone</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 cursor-pointer p-2 border border-gray-200 hover:border-1 hover:border-blue-500" @click="showModalRow = true">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10.023 16.032c-2.508 0-4.253-1.555-4.253-1.555L4.287 17.84c1.023.547 2.092.936 2.709 1.141l-1.592.381a1.391 1.391 0 01-1.675-1.029L.639 5.405a1.39 1.39 0 011.028-1.676l3.716-.889c-.91 1.029-1.263 2.252-1.174 3.65.139 2.193 2.237 3.879 4.734 4.822 4.701 1.776 3.586 4.72 1.08 4.72zm9.338-1.438L16.27 1.666A1.388 1.388 0 0014.595.639l-2.663.637c.679.105 2.024.4 3.505 1.178l-1.159 3.213s-.965-1.078-3.553-1.209c-2.46-.125-3.828 2.537.969 4.105 3.674 1.201 4.848 3.516 4.787 5.658a5.123 5.123 0 01-.872 2.701l2.725-.652a1.39 1.39 0 001.027-1.676z"/>
                                </svg>
                            </div>
                            <div class="flex-col text-left cursor-pointer">
                                <h5 class="text-blue-500 font-bold">Single Dropzone</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div @click.prevent="showModal('button')"  class="flex cursor-pointer w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1.6a8.4 8.4 0 100 16.8 8.4 8.4 0 000-16.8zm5 9.4h-4v4H9v-4H5V9h4V5h2v4h4v2z"/>
                                </svg>
                            </div>
                            <div class="flex-col text-left cursor-pointer" >
                                <h5 class="text-blue-500 font-bold">Button</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 p-2 border cursor-pointer border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-green-600 font-bold text-white rounded-lg">
                                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M9.248 11.601c.45.313 1.05.313 1.5 0l9.088-5.281a.375.375 0 00-.048-.646l-9.205-3.537a1.315 1.315 0 00-1.17 0L.208 5.674a.375.375 0 00-.048.646l9.088 5.281zm10.54-.79l-2.486-1.233-5.725 3.327c-.469.309-1.014.471-1.579.471s-1.11-.163-1.579-.471L2.698 9.576.208 10.81a.375.375 0 00-.048.646l9.088 6.309c.45.313 1.05.313 1.5 0l9.088-6.309a.374.374 0 00-.048-.645z"/>
                                </svg>
                            </div>
                            <div class="flex-col text-left">
                                <h5 class="text-blue-500 font-bold">Group Button</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 cursor-pointer p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <!--                            <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
                                <!--                                <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>-->
                                <!--                            </svg>-->
                                <svg class="h-6 w-6 m-2 font-bold" viewBox="0 -122 512.001 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M378.031 268.988l-28.25-28.27 105.817-105.745-105.883-106.84L378.098 0 512 135.11zm-215.812-28.27L56.402 134.974 162.29 28.133 133.902 0 0 135.11l133.969 133.878zm113.765-105.757c0 11.016-8.964 19.98-19.984 19.98s-19.98-8.964-19.98-19.98c0-11.02 8.96-19.984 19.98-19.984s19.984 8.964 19.984 19.984zm79.93 0c0 11.016-8.965 19.98-19.984 19.98-11.02 0-19.98-8.964-19.98-19.98 0-11.02 8.96-19.984 19.98-19.984s19.984 8.964 19.984 19.984zm-159.86 0c0 11.016-8.964 19.98-19.984 19.98-11.02 0-19.98-8.964-19.98-19.98 0-11.02 8.96-19.984 19.98-19.984s19.985 8.964 19.985 19.984zm0 0"/>
                                </svg>
                            </div>
                            <div class="flex-col text-left">
                                <h5 class="text-blue-500 font-bold">Pagination</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 cursor-pointer p-2 border border-gray-200 hover:border-1 hover:border-blue-500" @click="showModalRow = true">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <!--                            <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
                                <!--                                <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>-->
                                <!--                            </svg>-->

                                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                    <path fill-rule="evenodd" d="M504 72H8a8 8 0 00-8 8v48a8 8 0 008 8h24v296a8 8 0 008 8h32a8 8 0 008-8V136h352v296a8 8 0 008 8h32a8 8 0 008-8V136h24a8 8 0 008-8V80a8 8 0 00-8-8zm-8 48h-24a8 8 0 00-8 8v296h-16V128a8 8 0 00-8-8H72a8 8 0 00-8 8v296H48V128a8 8 0 00-8-8H16V88h480v32z"/>
                                </svg>
                            </div>
                            <div class="flex-col text-left cursor-pointer" >
                                <h5 class="text-blue-500 font-bold">Tables</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 cursor-pointer p-2 border border-gray-200 hover:border-1 hover:border-blue-500" @click="showModalRow = true">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <!--                            <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
                                <!--                                <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>-->
                                <!--                            </svg>-->
                                <svg class="h-6 w-6 m-2 font-bold" viewBox="0 0 482.239 482.239" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M465.016 0H120.56c-9.52 0-17.223 7.703-17.223 17.223v86.114H17.223C7.703 103.337 0 111.04 0 120.56v344.456c0 9.52 7.703 17.223 17.223 17.223h344.456c9.52 0 17.223-7.703 17.223-17.223v-86.114h86.114c9.52 0 17.223-7.703 17.223-17.223V17.223c0-9.52-7.703-17.223-17.223-17.223zm-120.56 447.793H34.446v-310.01h310.011v310.01zm103.337-103.337h-68.891V120.56c0-9.52-7.703-17.223-17.223-17.223H137.783V34.446h310.011v310.01z"/>
                                </svg>
                            </div>
                            <div class="flex-col text-left cursor-pointer">
                                <h5 class="text-blue-500 font-bold">Tabs</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 cursor-pointer p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <!--                            <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
                                <!--                                <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>-->
                                <!--                            </svg>-->

                                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                    <path fill-rule="evenodd" d="M501.362 383.95L320.497 51.474c-29.059-48.921-99.896-48.986-128.994 0L10.647 383.95c-29.706 49.989 6.259 113.291 64.482 113.291h361.736c58.174 0 94.203-63.251 64.497-113.291zM256 437.241c-16.538 0-30-13.462-30-30s13.462-30 30-30 30 13.462 30 30-13.462 30-30 30zm30-120c0 16.538-13.462 30-30 30s-30-13.462-30-30v-150c0-16.538 13.462-30 30-30s30 13.462 30 30v150z"/>
                                </svg>
                            </div>
                            <div class="flex-col text-left cursor-pointer" >
                                <h5 class="text-blue-500 font-bold">Alert</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 cursor-pointer p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <img class="h-10 w-10 mt-3 mr-3" src="/project-assets/images/timeline-512.png">
                            <div class="flex-col text-left">
                                <h5 class="text-blue-500 font-bold">Bread Crumb</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 cursor-pointer p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <svg class="h-8 w-8 m-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                    <path fill-rule="evenodd" d="M0 0v25.366h35V0H0zm32.879 23.245H2.121V2.121h30.758v21.124zM0 28.283h35V35H0z"/>
                                </svg>
                            </div>
                            <div class="flex-col text-left">
                                <h5 class="text-blue-500 font-bold">Footer</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 cursor-pointer p-2 border border-gray-200 hover:border-1 hover:border-blue-500" @click="showModalRow = true">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1z"/>
                                </svg>
                            </div>
                            <div class="flex-col text-left cursor-pointer" >
                                <h5 class="text-blue-500 font-bold">Menu</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 cursor-pointer p-2 border border-gray-200 hover:border-1 hover:border-blue-500" @click="showModalRow = true">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-red-600 font-bold text-white rounded-full">
                                <svg class="h-6 w-6 m-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M15 10.001c0 .299-.305.514-.305.514l-8.561 5.303C5.51 16.227 5 15.924 5 15.149V4.852c0-.777.51-1.078 1.135-.67l8.561 5.305c-.001 0 .304.215.304.514z"/>
                                </svg>
                            </div>
                            <div class="flex-col text-left cursor-pointer">
                                <h5 class="text-blue-500 font-bold">Video Player</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 cursor-pointer p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 325.498 325.498">
                                    <path fill-rule="evenodd" d="M104.998 289.047c0 8.25-6.75 15-15 15h-62c-8.25 0-15-6.75-15-15v-68c0-8.25 6.75-15 15-15h62c8.25 0 15 6.75 15 15v68zM215.248 289.047c0 8.25-6.75 15-15 15h-62c-8.25 0-15-6.75-15-15v-104c0-8.25 6.75-15 15-15h62c8.25 0 15 6.75 15 15v104zM325.498 289.047c0 8.25-6.75 15-15 15h-62c-8.25 0-15-6.75-15-15v-144c0-8.25 6.75-15 15-15h62c8.25 0 15 6.75 15 15v144zM312.522 21.731l-67.375 16.392c-5.346 1.294-6.537 5.535-2.648 9.424l14.377 14.041c1.207 1.376-.225 3.206-1.361 3.981-9.053 6.18-23.42 15.248-43.279 25.609-108.115 56.407-197.238 52.947-198.578 52.886-7.154-.363-13.271 5.148-13.641 12.314-.369 7.17 5.143 13.283 12.313 13.652.527.027 2.67.124 6.273.124 23.107 0 106.111-3.987 205.66-55.924 23.555-12.289 39.881-22.888 49.414-29.598 1.348-.949 3.697-2.585 5.865-.378l15.725 15.724c3.889 3.889 8.109 2.692 9.381-2.659l15.285-68.211c1.27-5.352-2.066-8.671-7.411-7.377z"/>
                                </svg>
                            </div>
                            <div class="flex-col text-left cursor-pointer" >
                                <h5 class="text-blue-500 font-bold">Progress Bar</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the Progress Bar</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 cursor-pointer p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>
                                </svg>
                            </div>
                            <div class="flex-col text-left">
                                <h5 class="text-blue-500 font-bold">Empty Space</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the Empty Space</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 cursor-pointer p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M11 .958v9.039C11 10.551 10.551 11 9.997 11H.958A9.1 9.1 0 1011 .958zm-2 0A9.098 9.098 0 00.958 9H9V.958z"/>
                                </svg>
                            </div>
                            <div class="flex-col text-left">
                                <h5 class="text-blue-500 font-bold">Pie Chart</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 cursor-pointer p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-gray-200 font-bold text-yellow-500 rounded-lg">
                                <svg class="h-8 w-8 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M18.405 4.799c-.111-.44-.655-.799-1.21-.799h-6.814c-.554 0-1.33-.318-1.722-.707l-.596-.588C7.671 2.316 6.896 2 6.342 2H3.087c-.555 0-1.059.447-1.12.994L1.675 6h16.931l-.201-1.201zM19.412 7H.588a.58.58 0 00-.577.635l.923 9.669A.77.77 0 001.7 18h16.6a.77.77 0 00.766-.696l.923-9.669A.58.58 0 0019.412 7z"/>
                                </svg>
                            </div>
                            <div class="flex-col text-left">
                                <h5 class="text-blue-500 font-bold">Input File</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 cursor-pointer p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <!--                            <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
                                <!--                                <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>-->
                                <!--                            </svg>-->
                                <svg class="h-5 w-5 my-3 mx-2  font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 405.333 405.333">
                                    <path fill-rule="evenodd" d="M34.784 0v132.809h43.61v-33.98c0-7.906 3.012-15.808 9.041-21.837 6.037-6.029 13.943-9.041 21.845-9.041h46.323v262.891c0 7.906-3.012 15.804-9.041 21.841-6.033 6.029-13.943 9.041-21.841 9.041h-32.99v43.61h221.858v-43.61h-32.981c-7.91 0-15.808-3.012-21.833-9.041-6.042-6.037-9.05-13.939-9.05-21.841V67.951h46.323c7.91 0 15.808 3.012 21.841 9.041 6.025 6.029 9.041 13.935 9.041 21.837v33.98h43.618V0H34.784z" />
                                </svg>
                            </div>
                            <div class="flex-col text-left">
                                <h5 class="text-blue-500 font-bold">Text</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 cursor-pointer p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1.6a8.4 8.4 0 100 16.8 8.4 8.4 0 000-16.8zm5 9.4h-4v4H9v-4H5V9h4V5h2v4h4v2z"/>
                                </svg>
                            </div>
                            <div class="flex-col text-left cursor-pointer" >
                                <h5 class="text-blue-500 font-bold">Button</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 cursor-pointer p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <!--                            <svg class="h-6 w-6 m-2 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
                                <!--                                <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>-->
                                <!--                            </svg>-->
                                <svg class="h-6 w-6 m-2 font-bold" viewBox="0 -122 512.001 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M378.031 268.988l-28.25-28.27 105.817-105.745-105.883-106.84L378.098 0 512 135.11zm-215.812-28.27L56.402 134.974 162.29 28.133 133.902 0 0 135.11l133.969 133.878zm113.765-105.757c0 11.016-8.964 19.98-19.984 19.98s-19.98-8.964-19.98-19.98c0-11.02 8.96-19.984 19.98-19.984s19.984 8.964 19.984 19.984zm79.93 0c0 11.016-8.965 19.98-19.984 19.98-11.02 0-19.98-8.964-19.98-19.98 0-11.02 8.96-19.984 19.98-19.984s19.984 8.964 19.984 19.984zm-159.86 0c0 11.016-8.964 19.98-19.984 19.98-11.02 0-19.98-8.964-19.98-19.98 0-11.02 8.96-19.984 19.98-19.984s19.985 8.964 19.985 19.984zm0 0"/>
                                </svg>
                            </div>
                            <div class="flex-col text-left">
                                <h5 class="text-blue-500 font-bold">Pagination</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                        <div class="flex w-full bg-gray-200 cursor-pointer p-2 border border-gray-200 hover:border-1 hover:border-blue-500">
                            <div class="h-10 w-10 mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg">
                                <svg class="h-8 w-8 m-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                    <path fill-rule="evenodd" d="M0 0v25.366h35V0H0zm32.879 23.245H2.121V2.121h30.758v21.124zM0 28.283h35V35H0z"/>
                                </svg>
                            </div>
                            <div class="flex-col text-left">
                                <h5 class="text-blue-500 font-bold">Footer</h5>
                                <p class="text-xs text-gray-600 mt-1">Place content elements inside the row</p>
                            </div>
                        </div>
                    </nits-grid>
                </div>
                <div class="flex justify-between border-solid border-t-2 p-2 text-center items-center">
                    <button @click="isOpen = ! isOpen" class="ml-5 my-2 bg-transparent border border-gray-500 text-gray-600 font-semibold py-1 px-4 rounded">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BuilderElement",
        data(){
            return{
                Add: false,
                isVisible: false,
                isOpen2: false,
                isOpen: false,
                addedRow: false,
                hideButton: true,
            }
        },
        methods:{
            showModal(){
              this.Add = true
              this.addedRow = true
              this.isOpen = false
              this.hideButton = false
            },
        },
        components: {
            'VueTailwindModal': () => import('vue-tailwind-modal'),
            'InputField': () => import('./Elements/InputField')
        },
    }
</script>

<style scoped>

</style>