<template>
    <div>
        <div class="flex  w-full m-2 p-2">
            <div v-if="hideButton" class="max-w-md my-auto top-0 bottom-0 right-0 left-0 mx-auto">
                <div @click="isOpen = ! isOpen"  class="h-10 w-12 text-white rounded hover:bg-gray-300 inline-block bg-gray-400 font-bold">
                    <svg class="h-6 w-6 my-2 mx-3 font-bold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>
                    </svg>
                </div>
            </div>
            <div v-if="addedRow" @mouseover="isVisible = true" @mouseleave="isVisible = false" @keydown.enter="isVisible = !isVisible"  class="flex relative w-full mr-4 bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500" >

                <div class="h-10 w-10 mt-1 mb-2 mr-3 cursor-pointer  font-bold text-white rounded-lg">
                    <img class="h-10 w-10 mr-3" :src="elementData.icon">
                </div>
                <div class="flex-col text-left">
                    <h5 class="text-blue-500 font-bold">{{elementData.title}}</h5>
                    <p class="text-xs text-gray-600 mt-1">{{elementData.desc}}</p>
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
        </div>
        <popup-options
                v-if="isOpen2"
                :elementData="elementData"
                tab_index="general"
                :row_index="row_index"
                :column_index="column_index"
                :element_index="element_index"
                :element="element"
                :component_name="elementData.component_name"
        ></popup-options>
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
                        <div v-for="(ele,index) in components" @click.prevent="addElement(ele,index)" class="flex w-full bg-gray-200 p-2 cursor-pointer border border-gray-200 hover:border-1 hover:border-blue-500">
                            <img class="h-10 w-10 mt-3 mr-3" :src="ele.icon">

                            <div class="flex-col text-left">
                                <h5 class="text-blue-500 font-bold">{{ele.title}}</h5>
                                <p class="text-xs text-gray-600 mt-1">{{ele.desc}}</p>
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
    import {eventBus} from 'NitsModels/_events';

    export default {
        name: "BuilderElement",
        data(){
            return{
                openTab: 1,
                Add: false,
                isVisible: false,
                isOpen2: false,
                isOpen: false,
                addedRow: false,
                hideButton: true,
                components:[
                    {
                        id: 1,
                        title:'Input Text',
                        icon:'/nits-assets/images/row.png',
                        desc:'Input text box',
                        component_name: 'nits-input-text',
                        options: {
                            general: {
                                component: 'nits-form-check',
                                attrs: {
                                    grid: {
                                        cols: "1",
                                        gap: "6",
                                        // rows: "1"
                                    }
                                },
                                child_components: [
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Field Name',
                                            placeholder: 'Enter field name',
                                            model: 'model',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Label',
                                            placeholder: 'Enter Label',
                                            model: 'label',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Placeholder',
                                            placeholder: 'Enter Placeholder',
                                            model: 'placeholder',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Hint',
                                            placeholder: 'Enter Hint',
                                            model: 'hint',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-select',
                                        attrs: {
                                            label:'Input Type',
                                            placeholder: 'Select one',
                                            options: [
                                                {label: 'String', value: 'string'},
                                                {label: 'Number', value: 'number'},
                                            ],
                                            model: 'type',
                                            value: ''
                                        }
                                    },
                                ]
                            },
                            display: {
                                component: 'nits-form-check',
                                attrs: {
                                    grid: {
                                        cols: "1",
                                        gap: "6",
                                    }
                                },
                                child_components: [
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Extra Class Name',
                                            placeholder: 'Enter Text',
                                            model: 'class',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Element ID',
                                            placeholder: 'Enter Element ID',
                                            model: 'id',
                                            value: ''
                                        },
                                    },
                                    {
                                        component: 'nits-input-select',
                                        attrs: {
                                            label: 'CSS Animation',
                                            placeholder: 'Select ',
                                            options: [],
                                            model: 'animation',
                                            value: ''
                                        },
                                    },
                                ]
                            }
                        }
                    },
                    {
                        id: 2,
                        title:'Check Box',
                        icon:'/nits-assets/images/checkbox.png',
                        desc:'Place content elements inside the Checkbox',
                        component_name: 'nits-check-box',
                        options: {
                            general: {
                                component: 'nits-form-check',
                                attrs: {
                                    grid: {
                                        cols: "1",
                                        gap: "6",
                                        // rows: "1"
                                    }
                                },
                                child_components: [
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Field Name',
                                            placeholder: 'Enter field name',
                                            model: 'model',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Label',
                                            placeholder: 'Enter Label',
                                            model: 'label',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Hint',
                                            placeholder: 'Enter Hint',
                                            model: 'hint',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Placeholder',
                                            placeholder: 'Enter Placeholder',
                                            model: 'placeholder',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-select',
                                        attrs: {
                                            label: 'Checked',
                                            placeholder: 'Select one',
                                            options: [
                                                {label: 'True', value: 'true'},
                                                {label: 'False', value: 'false'},
                                            ],
                                            model: 'checked',
                                            value: ''
                                        },
                                    },
                                ]
                            },
                            display: {
                                component: 'nits-form-check',
                                attrs: {
                                    grid: {
                                        cols: "1",
                                        gap: "6",
                                    }
                                },
                                child_components: [
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Extra Class Name',
                                            placeholder: 'Enter Text',
                                            model: 'text',
                                            value: ''
                                        }
                                    },
                                ]
                            }
                        }
                    },
                    {
                        id: 3,
                        title:'CK Editor',
                        icon:'/nits-assets/images/ckeditor.png',
                        desc:'Place content elements inside the CK editor',
                        component_name: 'nits-ckeditor',
                        options: {
                            general: {
                                component: 'nits-form-check',
                                attrs: {
                                    grid: {
                                        cols: "1",
                                        gap: "6",
                                        // rows: "1"
                                    }
                                },
                                child_components: [
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Field Name',
                                            placeholder: 'Enter field name',
                                            model: 'model',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Label',
                                            placeholder: 'Enter Label',
                                            model: 'label',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Placeholder',
                                            placeholder: 'Enter Placeholder',
                                            model: 'placeholder',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Hint',
                                            placeholder: 'Enter Hint',
                                            model: 'hint',
                                            value: ''
                                        }
                                    },

                                ]
                            },
                            display: {
                                component: 'nits-form-check',
                                attrs: {
                                    grid: {
                                        cols: "1",
                                        gap: "6",
                                    }
                                },
                                child_components: [
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Extra Class Name',
                                            placeholder: 'Enter Text',
                                            model: 'text',
                                            value: ''
                                        }
                                    },
                                ]
                            }
                        }
                    },
                    {
                        id: 4,
                        title:'Date Picker',
                        icon:'/nits-assets/images/date1.jpg',
                        desc:'Place content elements inside the row',
                        component_name: 'nits-date-picker',
                        options: {
                            general: {
                                component: 'nits-form-check',
                                attrs: {
                                    grid: {
                                        cols: "1",
                                        gap: "6",
                                        // rows: "1"
                                    }
                                },
                                child_components: [
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Field Name',
                                            placeholder: 'Enter field name',
                                            model: 'model',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Label',
                                            placeholder: 'Enter Label',
                                            model: 'label',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Placeholder',
                                            placeholder: 'Enter Placeholder',
                                            model: 'placeholder',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Hint',
                                            placeholder: 'Enter Hint',
                                            model: 'hint',
                                            value: ''
                                        }
                                    },
                                ]
                            },
                            display: {
                                component: 'nits-form-check',
                                attrs: {
                                    grid: {
                                        cols: "1",
                                        gap: "6",
                                    }
                                },
                                child_components: [
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Extra Class Name',
                                            placeholder: 'Enter Text',
                                            model: 'text',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Element ID',
                                            placeholder: 'Enter Element ID',
                                            model: 'test_text',
                                            value: ''
                                        },
                                    }

                                ]
                            }
                        }
                    },
                    {
                        id: 5,
                        title:'Input File',
                        icon:'/nits-assets/images/inputfile.png',
                        desc:'Place content elements inside the row',
                        component_name: 'input_file',
                        options: {
                            general: {
                                component: 'nits-form-check',
                                attrs: {
                                    grid: {
                                        cols: "1",
                                        gap: "6",
                                        // rows: "1"
                                    }
                                },
                                child_components: [
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Field Name',
                                            placeholder: 'Enter field name',
                                            model: 'model',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Label',
                                            placeholder: 'Enter Label',
                                            model: 'label',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Placeholder',
                                            placeholder: 'Enter Placeholder',
                                            model: 'placeholder',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Hint',
                                            placeholder: 'Enter Hint',
                                            model: 'hint',
                                            value: ''
                                        }
                                    },
                                ]
                            },
                            display: {
                                component: 'nits-form-check',
                                attrs: {
                                    grid: {
                                        cols: "1",
                                        gap: "6",
                                    }
                                },
                                child_components: [
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Element ID',
                                            placeholder: 'Enter Element ID',
                                            model: 'test_text',
                                            value: ''
                                        },
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Extra Class Name',
                                            placeholder: 'Enter Text',
                                            model: 'text',
                                            value: ''
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    // {id: 6, title:'Form', icon:'/nits-assets/images/form.jpg', desc:'Place content elements inside the row',  component_name: 'form'},
                    {
                        id: 7,
                        title:'Input Date',
                        icon:'/nits-assets/images/inputdate.png',
                        desc:'Place content elements inside the row',
                        component_name: 'nits-input-date',
                        options: {
                            general: {
                                component: 'nits-form-check',
                                attrs: {
                                    grid: {
                                        cols: "1",
                                        gap: "6",
                                        // rows: "1"
                                    }
                                },
                                child_components: [
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Field Name',
                                            placeholder: 'Enter field name',
                                            model: 'model',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Label',
                                            placeholder: 'Enter Label',
                                            model: 'label',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Placeholder',
                                            placeholder: 'Enter Placeholder',
                                            model: 'placeholder',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Hint',
                                            placeholder: 'Enter Hint',
                                            model: 'hint',
                                            value: ''
                                        }
                                    },
                                ]
                            },
                            display: {
                                component: 'nits-form-check',
                                attrs: {
                                    grid: {
                                        cols: "1",
                                        gap: "6",
                                    }
                                },
                                child_components: [
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Extra Class Name',
                                            placeholder: 'Enter Text',
                                            model: 'text',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Element ID',
                                            placeholder: 'Enter Element ID',
                                            model: 'test_text',
                                            value: ''
                                        },
                                    }

                                ]
                            }
                        }

                    },
                    {
                        id: 8,
                        title:'Multi Select',
                        icon:'/nits-assets/images/multiselect.png',
                        desc:'Place content elements inside the row',
                        component_name: 'nits-input-multi-select',
                        options: {
                            general: {
                                component: 'nits-form-check',
                                attrs: {
                                    grid: {
                                        cols: "1",
                                        gap: "6",
                                        // rows: "1"
                                    }
                                },
                                child_components: [
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Field Name',
                                            placeholder: 'Enter field name',
                                            model: 'model',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'API URL',
                                            placeholder: 'Enter api',
                                            model: 'api_url',
                                            value: [],
                                            api_url:'',
                                            options:[],
                                            optionLabel:'name',
                                            trackBy:'id'
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Label',
                                            placeholder: 'Enter Label',
                                            model: 'label',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Placeholder',
                                            placeholder: 'Enter Placeholder',
                                            model: 'placeholder',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Hint',
                                            placeholder: 'Enter Hint',
                                            model: 'hint',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-select',
                                        attrs: {
                                            label:'Multiple Selection',
                                            placeholder: 'Select one',
                                            options: [
                                                {label: 'Yes', value: 'yes'},
                                                {label: 'No', value: 'no'},
                                            ],
                                            model: 'multiple',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-select',
                                        attrs: {
                                            label:'Select Model',
                                            placeholder: 'Select one',
                                            options: [],
                                            model: 'model_select',
                                            api_url:'/nits-system-api/model',
                                            value: ''
                                        }
                                    },
                                ]
                            },
                            display: {
                                component: 'nits-form-check',
                                attrs: {
                                    grid: {
                                        cols: "1",
                                        gap: "6",
                                    }
                                },
                                child_components: [
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Extra Class Name',
                                            placeholder: 'Enter Text',
                                            model: 'text',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Element ID',
                                            placeholder: 'Enter Element ID',
                                            model: 'test_text',
                                            value: ''
                                        },
                                    },

                                ]
                            }
                        }
                    },
                    {
                        id: 9,
                        title:'Single Select',
                        icon:'/nits-assets/images/select1.png',
                        desc:'Place content elements inside the row',
                        component_name: 'nits-input-select',
                        options: {
                            general: {
                                component: 'nits-form-check',
                                attrs: {
                                    grid: {
                                        cols: "1",
                                        gap: "6",
                                        // rows: "1"
                                    }
                                },
                                child_components: [
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Field Name',
                                            placeholder: 'Enter field name',
                                            model: 'model',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'API URL',
                                            placeholder: 'Enter api',
                                            model: 'api_url',
                                            value: '',
                                            api_url:'',
                                            options: [],
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Label',
                                            placeholder: 'Enter Label',
                                            model: 'label',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Placeholder',
                                            placeholder: 'Enter Placeholder',
                                            model: 'placeholder',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Hint',
                                            placeholder: 'Enter Hint',
                                            model: 'hint',
                                            value: ''
                                        }
                                    },
                                ]
                            },
                            display: {
                                component: 'nits-form-check',
                                attrs: {
                                    grid: {
                                        cols: "1",
                                        gap: "6",
                                    }
                                },
                                child_components: [
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Extra Class Name',
                                            placeholder: 'Enter Text',
                                            model: 'text',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Element ID',
                                            placeholder: 'Enter Element ID',
                                            model: 'test_text',
                                            value: ''
                                        },
                                    },

                                ]
                            }
                        }
                    },
                    {
                        id: 10,
                        title:'Text',
                        icon:'/nits-assets/images/text.png',
                        desc:'Place content elements inside the row',
                        component_name: 'text',
                        options: {
                            general: {
                                component: 'nits-form-check',
                                attrs: {
                                    grid: {
                                        cols: "1",
                                        gap: "6",
                                        // rows: "1"
                                    }
                                },
                                child_components: [
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Field Name',
                                            placeholder: 'Enter field name',
                                            model: 'model',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Label',
                                            placeholder: 'Enter Label',
                                            model: 'label',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Placeholder',
                                            placeholder: 'Enter Placeholder',
                                            model: 'placeholder',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Hint',
                                            placeholder: 'Enter Hint',
                                            model: 'hint',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-select',
                                        attrs: {
                                            label:'Input Type',
                                            placeholder: 'Select one',
                                            options: [
                                                {label: 'String', value: 'string'},
                                                {label: 'Number', value: 'number'},
                                            ],
                                            model: 'text',
                                            value: ''
                                        }
                                    },
                                ]
                            },
                            display: {
                                component: 'nits-form-check',
                                attrs: {
                                    grid: {
                                        cols: "1",
                                        gap: "6",
                                    }
                                },
                                child_components: [
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Extra Class Name',
                                            placeholder: 'Enter Text',
                                            model: 'text',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Element ID',
                                            placeholder: 'Enter Element ID',
                                            model: 'test_text',
                                            value: ''
                                        },
                                    },
                                    {
                                        component: 'nits-input-select',
                                        attrs: {
                                            label: 'CSS Animation',
                                            placeholder: 'Select ',
                                            options: [],
                                            model: 'animation',
                                            value: ''
                                        },
                                    },

                                ]
                            }
                        }
                    },
                    {
                        id: 11,
                        title:'Multiple DropZone',
                        icon:'/nits-assets/images/multidropzone.png',
                        desc:'Place content elements inside the row',
                        component_name: 'multiple_dropzone',
                        options: {
                            general: {
                                component: 'nits-form-check',
                                attrs: {
                                    grid: {
                                        cols: "1",
                                        gap: "6",
                                        // rows: "1"
                                    }
                                },
                                child_components: [
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Field Name',
                                            placeholder: 'Enter field name',
                                            model: 'model',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Label',
                                            placeholder: 'Enter Label',
                                            model: 'label',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Placeholder',
                                            placeholder: 'Enter Placeholder',
                                            model: 'placeholder',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Hint',
                                            placeholder: 'Enter Hint',
                                            model: 'hint',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-select',
                                        attrs: {
                                            label:'Upload Limit',
                                            placeholder: 'Select one',
                                            options: [
                                                {label: '1', value: '1'},
                                                {label: '2', value: '2'},
                                                {label: '3', value: '3'},
                                                {label: '4', value: '4'},
                                            ],
                                            model: 'text',
                                            value: ''
                                        }
                                    },
                                ]
                            },
                            display: {
                                component: 'nits-form-check',
                                attrs: {
                                    grid: {
                                        cols: "1",
                                        gap: "6",
                                    }
                                },
                                child_components: [
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Extra Class Name',
                                            placeholder: 'Enter Text',
                                            model: 'text',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Element ID',
                                            placeholder: 'Enter Element ID',
                                            model: 'test_text',
                                            value: ''
                                        },
                                    },
                                    {
                                        component: 'nits-input-select',
                                        attrs: {
                                            label: 'CSS Animation',
                                            placeholder: 'Select ',
                                            options: [],
                                            model: 'animation',
                                            value: ''
                                        },
                                    },

                                ]
                            }
                        }
                    },
                    {
                        id: 12,
                        title:'Single DropZone',
                        icon:'/nits-assets/images/dropzone.png',
                        desc:'Place content elements inside the row',
                        component_name: 'nits-single-dropzone',
                        options: {
                            general: {
                                component: 'nits-form-check',
                                attrs: {
                                    grid: {
                                        cols: "1",
                                        gap: "6",
                                        // rows: "1"
                                    }
                                },
                                child_components: [
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Field Name',
                                            placeholder: 'Enter field name',
                                            model: 'model',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Label',
                                            placeholder: 'Enter Label',
                                            model: 'label',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Hint',
                                            placeholder: 'Enter Hint',
                                            model: 'hint',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Placeholder',
                                            placeholder: 'Enter Placeholder',
                                            model: 'placeholder',
                                            value: ''
                                        }
                                    },
                                ]
                            },
                            display: {
                                component: 'nits-form-check',
                                attrs: {
                                    grid: {
                                        cols: "1",
                                        gap: "6",
                                    }
                                },
                                child_components: [
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Extra Class Name',
                                            placeholder: 'Enter Text',
                                            model: 'text',
                                            value: ''
                                        }
                                    },
                                    {
                                        component: 'nits-input-text',
                                        attrs: {
                                            label:'Element ID',
                                            placeholder: 'Enter Element ID',
                                            model: 'test_text',
                                            value: ''
                                        },
                                    },
                                    {
                                        component: 'nits-input-select',
                                        attrs: {
                                            label: 'CSS Animation',
                                            placeholder: 'Select ',
                                            options: [],
                                            model: 'animation',
                                            value: ''
                                        },
                                    },

                                ]
                            }
                        }
                    },
                    // {id: 13, title:'Button', icon:'/nits-assets/images/button.png', desc:'Place content elements inside the row',  component_name: 'button'},
                    // {id: 14, title:'Group Button', icon:'/nits-assets/images/groupbutton.png', desc:'Place content elements inside the row',  component_name: 'group_button'},
                    // {id: 15, title:'Pagination', icon:'/nits-assets/images/pagination.png', desc:'Place content elements inside the row',  component_name: 'pagination'},
                    // {id: 16, title:'Table', icon:'/nits-assets/images/table.png', desc:'Place content elements inside the row',  component_name: 'table'},
                    // {id: 17, title:'Tabs', icon:'/nits-assets/images/tabs.png', desc:'Place content elements inside the row',  component_name: 'tabs'},
                    // {id: 18, title:'Alert', icon:'/nits-assets/images/alert.png', desc:'Place content elements inside the row',  component_name: 'alert'},
                    // {id: 19, title:'Bread Crumb', icon:'/nits-assets/images/timeline-512.png', desc:'Place content elements inside the row',  component_name: 'bread_crumb'},
                    // {id: 20, title:'Footer', icon:'/nits-assets/images/footer.png', desc:'Place content elements inside the row',  component_name: 'footer'},
                    // {id: 21, title:'Menu', icon:'/nits-assets/images/menu.png', desc:'Place content elements inside the row',  component_name: 'menu'},
                    // {id: 22, title:'Video Player', icon:'/nits-assets/images/video.png', desc:'Place content elements inside the row',  component_name: 'video_player'},
                    // {id: 23, title:'Progress Bar', icon:'/nits-assets/images/progress.png', desc:'Place content elements inside the Progress Bar',  component_name: 'progress_bar'},
                    // {id: 24, title:'Empty Space', icon:'/nits-assets/images/emptyspace.png', desc:'Place content elements inside the Empty Space',  component_name: 'empty_space'},
                    // {id: 25, title:'Pie Chart', icon:'/nits-assets/images/piechart.png', desc:'Place content elements inside the row',  component_name: 'pie_chart'},
                ]
            }
        },
        props: {
            element: Object,
            child_components: Array,
            component: String,
            row_index: Number,
            column_index: Number,
            element_index: Number,
            attrs: Object
        },
        created() {
            eventBus.$on('popup-close', () => {
                this.isOpen2 = false
            })
        },
        methods:{
            addElement(item){
                let component_element = {
                    component: item.component_name,
                    attrs: {
                        child_components: [
                        ]
                    },
                }

                eventBus.$emit('add-component', {component: component_element, row_index: this.row_index, column_index: this.column_index, element_index: this.element_index});

                this.Add = true
                this.addedRow = true
                this.isOpen = false
                this.hideButton = false
            },
            toggleTabs: function(tabNumber){
                this.openTab = tabNumber
            }
        },
        components: {
            'VueTailwindModal': () => import('vue-tailwind-modal'),
            'InputField': () => import('./Elements/InputField'),
            'PopupOptions': () => import('./PopupOptions'),
        },
        computed:{
            elementData() {
                let index = _.findIndex(this.components, (a) => { return this.component === a.component_name})
                if(index > -1)
                    return this.components[index];
                else
                    return {}
            },
        }
    }
</script>

<style scoped>

</style>