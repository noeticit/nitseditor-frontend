<template>
    <div class="bg-white shadow-lg">
        <nav class="md:container mx-auto flex items-center justify-between flex-wrap px-4 lg:px-0 h-18">
            <div class=" flex items-center flex-shrink-0 px-6  py-5  border-r-2">
                <a class="">
                    <img class="w-48 h-auto" src="/nits-assets/images/logo.png">
                </a>
                <!--                <a class="w-20 h-18" src="/nits-assets/images/logo.png"></a>-->
            </div>
            <div class="block lg:hidden py-5 flex" >
                <div class="flex items-center px-3 py-2 ">
                    <svg class="w-8 h-8" version="1.1" id="Menu" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                        <path fill="#000000" d="M16.4,9H3.6C3.048,9,3,9.447,3,10c0,0.553,0.048,1,0.6,1h12.8c0.552,0,0.6-0.447,0.6-1S16.952,9,16.4,9z
                             M16.4,13H3.6C3.048,13,3,13.447,3,14c0,0.553,0.048,1,0.6,1h12.8c0.552,0,0.6-0.447,0.6-1S16.952,13,16.4,13z M3.6,7h12.8
                            C16.952,7,17,6.553,17,6s-0.048-1-0.6-1H3.6C3.048,5,3,5.447,3,6S3.048,7,3.6,7z"/>
                    </svg>
                </div>
                <div class=" flex flex-row">
                    <div class="block mt-4 lg:inline-block lg:mt-0 ml-5 lg:h-25 lg:py-10 ">
                        <svg class="w-4 h-4" version="1.1" id="Magnifying_glass" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                             y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                            <path fill="#000000" d="M17.545,15.467l-3.779-3.779c0.57-0.935,0.898-2.035,0.898-3.21c0-3.417-2.961-6.377-6.378-6.377
                                C4.869,2.1,2.1,4.87,2.1,8.287c0,3.416,2.961,6.377,6.377,6.377c1.137,0,2.2-0.309,3.115-0.844l3.799,3.801
                                c0.372,0.371,0.975,0.371,1.346,0l0.943-0.943C18.051,16.307,17.916,15.838,17.545,15.467z M4.004,8.287
                                c0-2.366,1.917-4.283,4.282-4.283c2.366,0,4.474,2.107,4.474,4.474c0,2.365-1.918,4.283-4.283,4.283
                                C6.111,12.76,4.004,10.652,4.004,8.287z"/>
                        </svg>
                    </div>
                    <div class=" block mt-4 lg:inline-block lg:mt-0 ml-4 mr-4 lg:h-25 lg:py-10 ">
                        <svg class="w-4 h-4" version="1.1" id="Shopping_cart" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                             y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                            <path fill="#000000" d="M13,17c0,1.104,0.894,2,2,2c1.104,0,2-0.896,2-2c0-1.106-0.896-2-2-2C13.894,15,13,15.894,13,17z M3,17
                                c0,1.104,0.895,2,2,2c1.103,0,2-0.896,2-2c0-1.106-0.897-2-2-2C3.895,15,3,15.894,3,17z M6.547,12.172L17.615,9.01
                                C17.826,8.949,18,8.721,18,8.5V3H4V1.4C4,1.18,3.819,1,3.601,1H0.399C0.18,1,0,1.18,0,1.4V3h2l1.91,8.957L4,12.9v1.649
                                c0,0.219,0.18,0.4,0.4,0.4h13.2c0.22,0,0.4-0.182,0.4-0.4V13H6.752C5.602,13,5.578,12.449,6.547,12.172z"/>
                        </svg>
                    </div>
                </div>

            </div>
            <div class="block lg:hidden w-full h-full block lg:flex lg:items-center lg:w-auto">
                <ul class="lg:flex-grow uppercase text-brand-blue-900 flex flex-col lg:flex-row pb-4 lg:pb-0 ">
                    <li class="flex flex-row md:ml-20">
                        <div class=" pb-4 mt-2 pt-3  border-b-2 text-gray-700 text-sm font-medium">
                            <svg class="w-4 h-4 mb-1 ml-2" version="1.1" id="Home" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill="#000000" d="M18.672,11H17v6c0,0.445-0.194,1-1,1h-4v-6H8v6H4c-0.806,0-1-0.555-1-1v-6H1.328
                                    c-0.598,0-0.47-0.324-0.06-0.748L9.292,2.22C9.487,2.018,9.743,1.918,10,1.908c0.257,0.01,0.513,0.109,0.708,0.312l8.023,8.031
                                    C19.142,10.676,19.27,11,18.672,11z"/>
                            </svg>
                        </div>
                        <div class="w-10/12 pb-4 border-b-2 block mt-4 lg:inline-block lg:mt-0  lg:h-25 lg:py-10 pl-2 text-gray-700 text-sm font-medium">
                            HOME
                        </div>
                        <div class="pb-4 border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">
                            <svg class="h-4  w-4" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                 y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill="#000000" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                                c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                            </svg>
                        </div>
                    </li>
                    <li class="flex flex-row md:ml-20">
                        <div class=" pb-4 mt-2 pt-3  border-b-2 text-gray-700 text-sm font-medium">
                            <svg class="w-4 h-4 mb-1 ml-2" version="1.1" id="Lab_flask" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill="#000000" d="M16.432,15C14.387,9.893,12,8.547,12,6V3h0.5C12.776,3,13,2.776,13,2.5v-1C13,1.224,12.776,1,12.5,1h-5
                                    C7.224,1,7,1.224,7,1.5v1C7,2.776,7.224,3,7.5,3H8v3c0,2.547-2.387,3.893-4.432,9C2.917,16.625,1.245,19,10,19
                                    S17.083,16.625,16.432,15z M14.815,16.751C14.113,16.961,12.716,17.2,10,17.2s-4.113-0.239-4.815-0.449
                                    c-0.249-0.074-0.346-0.363-0.258-0.628c0.22-0.67,0.635-1.828,1.411-3.121c1.896-3.159,3.863,0.497,5.5,0.497
                                    s1.188-1.561,1.824-0.497c0.774,1.294,1.191,2.451,1.411,3.121C15.161,16.388,15.064,16.676,14.815,16.751z"/>
                            </svg>
                        </div>
                        <div class="pb-4 w-10/12 border-b-2 block mt-4 lg:inline-block lg:mt-0  lg:h-25 lg:py-10 pl-2 text-gray-700 text-sm font-medium">
                            FEATURES
                        </div>
                        <div class="pb-4  border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">
                            <svg class="h-4  w-4" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                 y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill="#000000" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                                c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                            </svg>
                        </div>
                    </li>
                    <li class="flex flex-row md:ml-20">
                        <div class=" pb-4 mt-2 pt-3  border-b-2 text-gray-700 text-sm font-medium">
                            <svg class="w-4 h-4 mb-1 ml-2" version="1.1" id="Text_document" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                 y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill="#000000" d="M16,1H4C3.447,1,3,1.447,3,2v16c0,0.552,0.447,1,1,1h12c0.553,0,1-0.448,1-1V2C17,1.448,16.553,1,16,1z
                                     M15,17H5V3h10V17z M13,5H7v2h6V5z M13,13H7v2h6V13z M13,9H7v2h6V9z"/>
                            </svg>
                        </div>
                        <div class="pb-4 w-10/12 border-b-2 block mt-4 lg:inline-block lg:mt-0  lg:h-25 lg:py-10 pl-2 text-gray-700 text-sm font-medium">
                            PAGES
                        </div>
                        <div class="pb-4  border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">
                            <svg class="h-4  w-4" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                 y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill="#000000" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                                c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                            </svg>
                        </div>
                    </li>
                    <li class="flex flex-row md:ml-20">
                        <div class=" pb-4 mt-2 pt-3  border-b-2 text-gray-700 text-sm font-medium">
                            <svg class="w-4 h-4 mb-1 ml-2" version="1.1" id="Briefcase" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill="#000000" d="M9,10h2v2h9c0,0-0.149-4.459-0.2-5.854C19.75,4.82,19.275,4,17.8,4h-3.208
                                    c-0.497-0.938-1.032-1.945-1.197-2.256C13.064,1.121,12.951,1,12.216,1H7.783C7.048,1,6.936,1.121,6.604,1.744
                                    C6.439,2.055,5.904,3.062,5.408,4H2.199c-1.476,0-1.945,0.82-2,2.146C0.145,7.473,0,12,0,12h9V10z M7.649,2.916
                                    C7.879,2.484,7.957,2.4,8.466,2.4h3.067c0.509,0,0.588,0.084,0.816,0.516c0.086,0.16,0.318,0.6,0.575,1.084h-5.85
                                    C7.331,3.516,7.563,3.076,7.649,2.916z M11,15H9v-2H0.5c0,0,0.124,1.797,0.199,3.322C0.73,16.955,0.917,18,2.499,18H17.5
                                    c1.582,0,1.765-1.047,1.8-1.678C19.387,14.754,19.5,13,19.5,13H11V15z"/>
                            </svg>
                        </div>
                        <div class="pb-4 w-10/12 border-b-2 block mt-4 lg:inline-block lg:mt-0  lg:h-25 lg:py-10 pl-2 text-gray-700 text-sm font-medium">
                            PORTFOLIO
                        </div>
                        <div class="pb-4  border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">
                            <svg class="h-4  w-4" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                 y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill="#000000" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                                c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                            </svg>
                        </div>
                    </li>
                    <li class="flex flex-row md:ml-20">
                        <div class=" pb-4 mt-2 pt-3  border-b-2 text-gray-700 text-sm font-medium">
                            <svg class="w-4 h-4 mb-1 ml-2" version="1.1" id="Pencil" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill="#000000" d="M14.69,2.661c-1.894-1.379-3.242-1.349-3.754-1.266c-0.144,0.023-0.265,0.106-0.35,0.223l-4.62,6.374
                                    l-2.263,3.123c-0.277,0.382-0.437,0.836-0.462,1.307l-0.296,5.624c-0.021,0.405,0.382,0.698,0.76,0.553l5.256-2.01
                                    c0.443-0.17,0.828-0.465,1.106-0.849l1.844-2.545l5.036-6.949c0.089-0.123,0.125-0.273,0.1-0.423
                                    C16.963,5.297,16.56,4.021,14.69,2.661z M8.977,15.465l-2.043,0.789c-0.08,0.031-0.169,0.006-0.221-0.062
                                    c-0.263-0.335-0.576-0.667-1.075-1.03c-0.499-0.362-0.911-0.558-1.31-0.706c-0.08-0.03-0.131-0.106-0.126-0.192l0.122-2.186
                                    l0.549-0.755c0,0,1.229-0.169,2.833,0.998c1.602,1.166,1.821,2.388,1.821,2.388L8.977,15.465z"/>
                                </svg>
                        </div>
                        <div class="pb-4 w-10/12 border-b-2 block mt-4 lg:inline-block lg:mt-0  lg:h-25 lg:py-10 pl-2 text-gray-700 text-sm font-medium">
                            BLOG
                        </div>
                        <div class="pb-4  border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">
                            <svg class="h-4  w-4" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                 y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill="#000000" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                                c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                            </svg>
                        </div>
                    </li>
                    <li class="flex flex-row md:ml-20">
                        <div class=" pb-4 mt-2 pt-3  border-b-2 text-gray-700 text-sm font-medium">
                            <svg class="w-4 h-4 mb-1 ml-2" version="1.1" id="Shopping_bag" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                 y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill="#000000" d="M18.121,3.271c-0.295-0.256-1.906-1.731-2.207-1.991C15.615,1.021,15.158,1,14.812,1H5.188
                                    C4.843,1,4.386,1.021,4.086,1.28C3.785,1.54,2.174,3.016,1.879,3.271C1.582,3.527,1.336,3.914,1.415,4.463
                                    c0.079,0.551,1.89,13.661,1.937,13.973C3.398,18.747,3.67,18.993,4,19h12c0.33-0.007,0.602-0.253,0.648-0.565
                                    c0.047-0.311,1.858-13.422,1.938-13.973C18.664,3.914,18.418,3.527,18.121,3.271z M10,11.973c-3.248,0-3.943-4.596-4.087-5.543H7.75
                                    c0.276,1.381,0.904,3.744,2.25,3.744s1.975-2.363,2.25-3.744h1.838C13.943,7.377,13.248,11.973,10,11.973z M3.17,4.006L5,2h10
                                    l1.83,2.006H3.17z"/>
                            </svg>
                        </div>
                        <div class="pb-4 w-10/12 border-b-2 block mt-4 lg:inline-block lg:mt-0  lg:h-25 lg:py-10 pl-2 text-gray-700 text-sm font-medium">
                            SHOP
                        </div>
                        <div class="pb-4  border-b-2 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">
                            <svg class="h-4  w-4" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                 y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill="#000000" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                                c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                            </svg>
                        </div>
                    </li>
                    <li class="flex flex-row md:ml-20">
                        <div class=" pb-4 mt-2 pt-3  text-gray-700 text-sm font-medium">
                            <svg class="w-4 h-4 mb-1 ml-2" version="1.1" id="Code" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill="#000000" d="M5.719,14.75c-0.236,0-0.474-0.083-0.664-0.252L-0.005,10l5.341-4.748c0.412-0.365,1.044-0.33,1.411,0.083
                                    s0.33,1.045-0.083,1.412L3.005,10l3.378,3.002c0.413,0.367,0.45,0.999,0.083,1.412C6.269,14.637,5.994,14.75,5.719,14.75z
                                     M14.664,14.748L20.005,10l-5.06-4.498c-0.413-0.367-1.045-0.33-1.411,0.083c-0.367,0.413-0.33,1.045,0.083,1.412L16.995,10
                                    l-3.659,3.252c-0.413,0.367-0.45,0.999-0.083,1.412C13.45,14.887,13.725,15,14,15C14.236,15,14.474,14.917,14.664,14.748z
                                     M9.986,16.165l2-12c0.091-0.545-0.277-1.06-0.822-1.151c-0.547-0.092-1.061,0.277-1.15,0.822l-2,12
                                    c-0.091,0.545,0.277,1.06,0.822,1.151C8.892,16.996,8.946,17,9.001,17C9.481,17,9.905,16.653,9.986,16.165z"/>
                            </svg>
                        </div>
                        <div class="pb-4 w-10/12   mt-4 lg:inline-block lg:mt-0  lg:h-25 lg:py-10 pl-2 text-gray-700 text-sm font-medium">
                            SHOTCODES
                        </div>
                        <div class="pb-4 block mt-4 px-2 text-gray-700 text-sm font-medium text-right">
                            <svg class="h-4  w-4" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                 y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill="#000000" d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                                c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                            </svg>
                        </div>
                    </li>
                </ul>
            </div>


            <div class="w-full h-full block lg:flex lg:items-center lg:w-auto hidden">
                <ul class="lg:flex-grow font-medium uppercase flex flex-col lg:flex-row pb-4 lg:pb-0 text-gray-700 text-sm">
                    <li class="hover:text-teal-400">
                        <a href="" class="border-l-4 lg:border-l-0 block mt-5 lg:inline-block lg:mt-0 mx-4 lg:h-25 lg:py-5 px-2 hover:text-teal-500 cursor-pointer text-gray-700">
                            <svg class="w-8 h-8 mb-1 ml-1" fill="currentColor" version="1.1" id="Home" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill-rule="evenodd" fill="#000000" d="M18.672,11H17v6c0,0.445-0.194,1-1,1h-4v-6H8v6H4c-0.806,0-1-0.555-1-1v-6H1.328
                                    c-0.598,0-0.47-0.324-0.06-0.748L9.292,2.22C9.487,2.018,9.743,1.918,10,1.908c0.257,0.01,0.513,0.109,0.708,0.312l8.023,8.031
                                    C19.142,10.676,19.27,11,18.672,11z"/>
                            </svg>
                            HOME
                        </a>
                    </li>
                    <li class="text-teal-400 hover:text-teal-400">
                        <a href="" class="border-l-4 lg:border-l-0 block mt-5 lg:inline-block lg:mt-0  mx-4 lg:h-25 lg:py-5 px-2">
                            <svg class="w-8 h-8 ml-3 mb-1" version="1.1" id="Lab_flask" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill="#000000" d="M16.432,15C14.387,9.893,12,8.547,12,6V3h0.5C12.776,3,13,2.776,13,2.5v-1C13,1.224,12.776,1,12.5,1h-5
                                    C7.224,1,7,1.224,7,1.5v1C7,2.776,7.224,3,7.5,3H8v3c0,2.547-2.387,3.893-4.432,9C2.917,16.625,1.245,19,10,19
                                    S17.083,16.625,16.432,15z M14.815,16.751C14.113,16.961,12.716,17.2,10,17.2s-4.113-0.239-4.815-0.449
                                    c-0.249-0.074-0.346-0.363-0.258-0.628c0.22-0.67,0.635-1.828,1.411-3.121c1.896-3.159,3.863,0.497,5.5,0.497
                                    s1.188-1.561,1.824-0.497c0.774,1.294,1.191,2.451,1.411,3.121C15.161,16.388,15.064,16.676,14.815,16.751z"/>
                            </svg>
                            FEATURES
                        </a>
                    </li>
                    <li class=" ">
                        <a href="" class="border-l-4 lg:border-l-0 block mt-5 lg:inline-block lg:mt-0  mx-4 lg:h-25 lg:py-5 px-2">
                            <svg class="w-8 h-8 ml-1 mb-1" version="1.1" id="Text_document" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                 y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill="#000000" d="M16,1H4C3.447,1,3,1.447,3,2v16c0,0.552,0.447,1,1,1h12c0.553,0,1-0.448,1-1V2C17,1.448,16.553,1,16,1z
                                     M15,17H5V3h10V17z M13,5H7v2h6V5z M13,13H7v2h6V13z M13,9H7v2h6V9z"/>
                            </svg>
                            PAGES
                        </a>
                    </li>
                    <li class=" ">
                        <a href="" class="border-l-4 lg:border-l-0 block mt-5 lg:inline-block lg:mt-0  mx-4 lg:h-25 lg:py-5 px-2">
                            <svg class="w-8 h-8 ml-5 mb-1" version="1.1" id="Briefcase" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill="#000000" d="M9,10h2v2h9c0,0-0.149-4.459-0.2-5.854C19.75,4.82,19.275,4,17.8,4h-3.208
                                    c-0.497-0.938-1.032-1.945-1.197-2.256C13.064,1.121,12.951,1,12.216,1H7.783C7.048,1,6.936,1.121,6.604,1.744
                                    C6.439,2.055,5.904,3.062,5.408,4H2.199c-1.476,0-1.945,0.82-2,2.146C0.145,7.473,0,12,0,12h9V10z M7.649,2.916
                                    C7.879,2.484,7.957,2.4,8.466,2.4h3.067c0.509,0,0.588,0.084,0.816,0.516c0.086,0.16,0.318,0.6,0.575,1.084h-5.85
                                    C7.331,3.516,7.563,3.076,7.649,2.916z M11,15H9v-2H0.5c0,0,0.124,1.797,0.199,3.322C0.73,16.955,0.917,18,2.499,18H17.5
                                    c1.582,0,1.765-1.047,1.8-1.678C19.387,14.754,19.5,13,19.5,13H11V15z"/>
                            </svg>
                            PORTFOLIO
                        </a>
                    </li>
                    <li class=" ">
                        <a href="" class="border-l-4 lg:border-l-0 block mt-5 lg:inline-block lg:mt-0  mx-4 lg:h-25 lg:py-5 px-2">
                            <svg class="w-8 h-8 ml-2 mb-1" version="1.1" id="Pencil" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill="#000000" d="M14.69,2.661c-1.894-1.379-3.242-1.349-3.754-1.266c-0.144,0.023-0.265,0.106-0.35,0.223l-4.62,6.374
                                    l-2.263,3.123c-0.277,0.382-0.437,0.836-0.462,1.307l-0.296,5.624c-0.021,0.405,0.382,0.698,0.76,0.553l5.256-2.01
                                    c0.443-0.17,0.828-0.465,1.106-0.849l1.844-2.545l5.036-6.949c0.089-0.123,0.125-0.273,0.1-0.423
                                    C16.963,5.297,16.56,4.021,14.69,2.661z M8.977,15.465l-2.043,0.789c-0.08,0.031-0.169,0.006-0.221-0.062
                                    c-0.263-0.335-0.576-0.667-1.075-1.03c-0.499-0.362-0.911-0.558-1.31-0.706c-0.08-0.03-0.131-0.106-0.126-0.192l0.122-2.186
                                    l0.549-0.755c0,0,1.229-0.169,2.833,0.998c1.602,1.166,1.821,2.388,1.821,2.388L8.977,15.465z"/>
                                </svg>
                            BLOG
                        </a>
                    </li>
                    <li class=" ">
                        <a href="" class="border-l-4 lg:border-l-0 block mt-5 lg:inline-block lg:mt-0  mx-4 lg:h-25 lg:py-5 px-2">
                            <svg class="w-8 h-8 ml-1 mb-1" version="1.1" id="Shopping_bag" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                 y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill="#000000" d="M18.121,3.271c-0.295-0.256-1.906-1.731-2.207-1.991C15.615,1.021,15.158,1,14.812,1H5.188
                                    C4.843,1,4.386,1.021,4.086,1.28C3.785,1.54,2.174,3.016,1.879,3.271C1.582,3.527,1.336,3.914,1.415,4.463
                                    c0.079,0.551,1.89,13.661,1.937,13.973C3.398,18.747,3.67,18.993,4,19h12c0.33-0.007,0.602-0.253,0.648-0.565
                                    c0.047-0.311,1.858-13.422,1.938-13.973C18.664,3.914,18.418,3.527,18.121,3.271z M10,11.973c-3.248,0-3.943-4.596-4.087-5.543H7.75
                                    c0.276,1.381,0.904,3.744,2.25,3.744s1.975-2.363,2.25-3.744h1.838C13.943,7.377,13.248,11.973,10,11.973z M3.17,4.006L5,2h10
                                    l1.83,2.006H3.17z"/>
                            </svg>
                            SHOP
                        </a>
                    </li>
                    <li class=" ">
                        <a href="" class="border-l-4 lg:border-l-0 block mt-5 lg:inline-block lg:mt-0  mx-4 lg:h-25 lg:py-5 px-2">
                            <!--                            lg:border-b-4-->
                            <svg class="w-8 h-8 ml-5 mb-1" version="1.1" id="Code" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill="#000000" d="M5.719,14.75c-0.236,0-0.474-0.083-0.664-0.252L-0.005,10l5.341-4.748c0.412-0.365,1.044-0.33,1.411,0.083
                                    s0.33,1.045-0.083,1.412L3.005,10l3.378,3.002c0.413,0.367,0.45,0.999,0.083,1.412C6.269,14.637,5.994,14.75,5.719,14.75z
                                     M14.664,14.748L20.005,10l-5.06-4.498c-0.413-0.367-1.045-0.33-1.411,0.083c-0.367,0.413-0.33,1.045,0.083,1.412L16.995,10
                                    l-3.659,3.252c-0.413,0.367-0.45,0.999-0.083,1.412C13.45,14.887,13.725,15,14,15C14.236,15,14.474,14.917,14.664,14.748z
                                     M9.986,16.165l2-12c0.091-0.545-0.277-1.06-0.822-1.151c-0.547-0.092-1.061,0.277-1.15,0.822l-2,12
                                    c-0.091,0.545,0.277,1.06,0.822,1.151C8.892,16.996,8.946,17,9.001,17C9.481,17,9.905,16.653,9.986,16.165z"/>
                            </svg>
                            SHOTCODES
                        </a>
                    </li>
                </ul>
                <div class="hover:text-teal-400 border-l-4 lg:border-l-2 lg:w-24 flex flex-row ml-2">
                    <div class="block mt-4 lg:inline-block lg:mt-0 ml-6 lg:h-25 lg:py-10 ">
                        <svg class="w-4 h-4" version="1.1" id="Magnifying_glass" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                             y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                            <path fill="#000000" d="M17.545,15.467l-3.779-3.779c0.57-0.935,0.898-2.035,0.898-3.21c0-3.417-2.961-6.377-6.378-6.377
                                C4.869,2.1,2.1,4.87,2.1,8.287c0,3.416,2.961,6.377,6.377,6.377c1.137,0,2.2-0.309,3.115-0.844l3.799,3.801
                                c0.372,0.371,0.975,0.371,1.346,0l0.943-0.943C18.051,16.307,17.916,15.838,17.545,15.467z M4.004,8.287
                                c0-2.366,1.917-4.283,4.282-4.283c2.366,0,4.474,2.107,4.474,4.474c0,2.365-1.918,4.283-4.283,4.283
                                C6.111,12.76,4.004,10.652,4.004,8.287z"/>
                        </svg>
                    </div>
                    <div class=" block mt-4 lg:inline-block lg:mt-0 ml-4 mr-4 lg:h-25 lg:py-10 ">
                        <svg class="w-4 h-4" version="1.1" id="Shopping_cart" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                             y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                            <path fill="#000000" d="M13,17c0,1.104,0.894,2,2,2c1.104,0,2-0.896,2-2c0-1.106-0.896-2-2-2C13.894,15,13,15.894,13,17z M3,17
                                c0,1.104,0.895,2,2,2c1.103,0,2-0.896,2-2c0-1.106-0.897-2-2-2C3.895,15,3,15.894,3,17z M6.547,12.172L17.615,9.01
                                C17.826,8.949,18,8.721,18,8.5V3H4V1.4C4,1.18,3.819,1,3.601,1H0.399C0.18,1,0,1.18,0,1.4V3h2l1.91,8.957L4,12.9v1.649
                                c0,0.219,0.18,0.4,0.4,0.4h13.2c0.22,0,0.4-0.182,0.4-0.4V13H6.752C5.602,13,5.578,12.449,6.547,12.172z"/>
                        </svg>
                    </div>
                </div>

            </div>

        </nav>
    </div>
</template>

<script>
    export default {
        name: "NitsHIconAndText"
    }
</script>

<style scoped>

</style>