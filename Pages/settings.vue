<template>
    <dashboard-layout-one active="settings">
        <base-bread-crumb-one name="Settings" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>
        <div class=" w-full h-auto bg-white mt-4">
<!--            <div class="flex">-->
<!--                <ul class=" flex ml-4 border-b hover:lg-border-300 mt-4">-->
<!--                    <li class="mr-1 px-5 cursor-pointer" @click="changeTab('general')">-->
<!--                        <a class="flex bg-white border-b hover:border-teal-600 inline-block py-2 px-4 text-teal-600 hover:text-blue-darker active" data-toggle="tab" role="tab">-->
<!--                            <svg class="inline-block w-4 h-4 mt-1 mr-1" version="1.1" id="Cog" xmlns="http://www.w3.org/2000/svg" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"-->
<!--                                 viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">-->
<!--                                    <path fill-rule="evenodd" d="M16.783,10c0-1.049,0.646-1.875,1.617-2.443c-0.176-0.584-0.407-1.145-0.692-1.672-->
<!--	                                c-1.089,0.285-1.97-0.141-2.711-0.883c-0.741-0.74-0.968-1.621-0.683-2.711c-0.527-0.285-1.088-0.518-1.672-0.691-->
<!--	                                C12.074,2.57,11.047,3.215,10,3.215c-1.048,0-2.074-0.645-2.643-1.615C6.772,1.773,6.213,2.006,5.686,2.291-->
<!--	                                c0.285,1.09,0.059,1.971-0.684,2.711C4.262,5.744,3.381,6.17,2.291,5.885C2.006,6.412,1.774,6.973,1.6,7.557-->
<!--	                                C2.57,8.125,3.215,8.951,3.215,10c0,1.047-0.645,2.074-1.615,2.643c0.175,0.584,0.406,1.144,0.691,1.672-->
<!--	                                c1.09-0.285,1.971-0.059,2.711,0.682c0.741,0.742,0.969,1.623,0.684,2.711c0.527,0.285,1.087,0.518,1.672,0.693-->
<!--	                                c0.568-0.973,1.595-1.617,2.643-1.617c1.047,0,2.074,0.645,2.643,1.617c0.584-0.176,1.144-0.408,1.672-0.693-->
<!--	                                c-0.285-1.088-0.059-1.969,0.683-2.711c0.741-0.74,1.622-1.166,2.711-0.883c0.285-0.527,0.517-1.086,0.692-1.672-->
<!--	                                C17.429,11.873,16.783,11.047,16.783,10z M10,13.652c-2.018,0-3.653-1.635-3.653-3.652c0-2.018,1.636-3.654,3.653-3.654-->
<!--	                                c2.018,0,3.652,1.637,3.652,3.654C13.652,12.018,12.018,13.652,10,13.652z"/>-->
<!--                            </svg>-->
<!--                            <span class="text-lg antialiased text-teal-600">General</span>-->
<!--                        </a>-->
<!--                    </li>-->
<!--                    <li class="px-5 mr-1 cursor-pointer" @click="changeTab('contact')">-->
<!--                        <a class="bg-white border-b hover:border-teal-600 inline-block text-teal-600 py-2 px-4 hover:text-blue-darker" data-toggle="tab"  role="tab">-->
<!--                            <svg class="inline-block w-4 h-4  mr-1"  version="1.1" id="Phone" xmlns="http://www.w3.org/2000/svg" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"-->
<!--                                 viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">-->
<!--                                <path fill-rule="evenodd" d="M11.229,11.229c-1.583,1.582-3.417,3.096-4.142,2.371c-1.037-1.037-1.677-1.941-3.965-0.102-->
<!--                                    c-2.287,1.838-0.53,3.064,0.475,4.068c1.16,1.16,5.484,0.062,9.758-4.211c4.273-4.274,5.368-8.598,4.207-9.758-->
<!--                                    c-1.005-1.006-2.225-2.762-4.063-0.475c-1.839,2.287-0.936,2.927,0.103,3.965C14.324,7.812,12.811,9.646,11.229,11.229z"/>-->
<!--                                </svg>-->
<!--                            <span  class="text-lg antialiased text-teal-600">Contact</span>-->
<!--                        </a>-->
<!--                    </li>-->
<!--                    <li class="px-5 mr-1 cursor-pointer"  @click="changeTab('domain')">-->
<!--                        <a  class="bg-white inline-block border-b hover:border-teal-600 py-2 px-4 text-teal-600 hover:text-blue-darker"  data-toggle="tab"  role="tab">-->
<!--                            <svg  class="inline-block w-4 h-4  mr-1" version="1.1" id="RSS" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"-->
<!--                                 viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">-->
<!--                                <path fill-rule="evenodd" d="M2.4,2.4v2.367c7.086,0,12.83,5.746,12.83,12.832h2.369C17.599,9.205,10.794,2.4,2.4,2.4z M2.4,7.137v2.369-->
<!--                                    c4.469,0,8.093,3.623,8.093,8.094h2.368C12.861,11.822,8.177,7.137,2.4,7.137z M4.669,13.059c-1.254,0-2.27,1.018-2.27,2.271-->
<!--                                    s1.016,2.27,2.27,2.27s2.269-1.016,2.269-2.27S5.923,13.059,4.669,13.059z"/>-->
<!--                                </svg>-->

<!--                            <span class="text-lg antialiased text-teal-600">Domain</span>-->
<!--                        </a>-->
<!--                    </li>-->
<!--                    <li class=" px-5 mr-1 cursor-pointer"  @click="changeTab('social')">-->
<!--                        <a  class="bg-white inline-block border-b hover:border-teal-600 py-2 px-4 text-teal-600 hover:text-blue-darker"  data-toggle="tab"  role="tab">-->
<!--                            <svg class="inline-block w-4 h-6 mr-1" version="1.1" id="User" xmlns="http://www.w3.org/2000/svg" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"-->
<!--                                 viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">-->
<!--                                <path fill-rule="evenodd" d="M7.725,2.146c-1.016,0.756-1.289,1.953-1.239,2.59C6.55,5.515,6.708,6.529,6.708,6.529-->
<!--                                    s-0.313,0.17-0.313,0.854C6.504,9.1,7.078,8.359,7.196,9.112c0.284,1.814,0.933,1.491,0.933,2.481c0,1.649-0.68,2.42-2.803,3.334-->
<!--                                    C3.196,15.845,1,17,1,19v1h18v-1c0-2-2.197-3.155-4.328-4.072c-2.123-0.914-2.801-1.684-2.801-3.334c0-0.99,0.647-0.667,0.932-2.481-->
<!--                                    c0.119-0.753,0.692-0.012,0.803-1.729c0-0.684-0.314-0.854-0.314-0.854s0.158-1.014,0.221-1.793c0.065-0.817-0.398-2.561-2.3-3.096-->
<!--                                    c-0.333-0.34-0.558-0.881,0.466-1.424C9.439,0.112,8.918,1.284,7.725,2.146z"/>-->
<!--                                </svg>-->
<!--                            <span class="text-lg antialiased text-teal-600">Social</span>-->
<!--                        </a>-->
<!--                    </li>-->
<!--                    <li class="mr-1 px-5 cursor-pointer"  @click="changeTab('regional')">-->
<!--                        <a  class="bg-white inline-block border-b hover:border-teal-600 py-2 px-4 text-teal-600 hover:text-blue-darker"   data-toggle="tab"  role="tab">-->
<!--                            <svg  class="inline-block w-4 h-5 mr-1"  version="1.1" id="Globe" xmlns="http://www.w3.org/2000/svg" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"-->
<!--                                  viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">-->
<!--                                <path fill-rule="evenodd" d="M10,0.4c-5.295,0-9.601,4.307-9.601,9.6S4.705,19.6,10,19.6c5.293,0,9.6-4.307,9.6-9.6S15.293,0.4,10,0.4z-->
<!--                                     M18.188,10c0,1.873-0.636,3.6-1.696,4.98c-0.3-0.234-0.619-0.867-0.319-1.523c0.303-0.66,0.382-2.188,0.312-2.783-->
<!--                                    c-0.066-0.594-0.375-2.025-1.214-2.039c-0.838-0.012-1.413-0.289-1.911-1.283c-1.033-2.068,1.939-2.465,0.906-3.609-->
<!--                                    c-0.289-0.322-1.783,1.322-2.002-0.869C12.25,2.717,12.399,2.482,12.6,2.238C15.844,3.328,18.188,6.395,18.188,10z M8.875,1.893-->
<!--                                    C8.679,2.275,8.162,2.43,7.848,2.717C7.164,3.336,6.87,3.25,6.502,3.844C6.131,4.438,4.935,5.293,4.935,5.723-->
<!--                                    s0.604,0.936,0.906,0.838c0.302-0.1,1.099-0.094,1.567,0.07c0.469,0.166,3.914,0.332,2.816,3.244-->
<!--                                    c-0.348,0.926-1.873,0.77-2.279,2.303c-0.061,0.225-0.272,1.186-0.285,1.5c-0.025,0.486,0.344,2.318-0.125,2.318-->
<!--                                    c-0.471,0-1.738-1.639-1.738-1.936s-0.328-1.338-0.328-2.23c0-0.891-1.518-0.877-1.518-2.062c0-1.068,0.823-1.6,0.638-2.113-->
<!--                                    c-0.181-0.51-1.627-0.527-2.23-0.59C3.412,4.334,5.889,2.307,8.875,1.893z M7.424,17.77c0.492-0.26,0.542-0.596,0.988-0.613-->
<!--                                    c0.51-0.023,0.925-0.199,1.5-0.326c0.51-0.111,1.423-0.629,2.226-0.695c0.678-0.055,2.015,0.035,2.375,0.689-->
<!--                                    c-1.295,0.861-2.848,1.363-4.514,1.363C9.1,18.188,8.234,18.039,7.424,17.77z"/>-->
<!--                                </svg>-->

<!--                            <span class="text-lg antialiased text-teal-600">Regional</span>-->
<!--                        </a>-->
<!--                    </li>-->
<!--                </ul>-->
<!--            </div>-->
            <div class="flex p-4 ">
            <ul class="list-reset flex border-b">
                <li class="-mb-px px-2  cursor-pointer"  @click="changeTab('general')">
                    <span class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-teal-500 font-semibold">General</span>
                </li>
                <li class=" px-2 cursor-pointer" @click="changeTab('contact')">
                    <span class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-teal-500  font-semibold" >Contact Info</span>
                </li>
                <li class="px-2 cursor-pointer" @click="changeTab('domain')">
                    <span class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-teal-500 font-semibold" >Domain Config</span>
                </li>
                <li class="px-2 cursor-pointer" @click="changeTab('social')">
                    <span class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-teal-500 font-semibold" >Social Connects</span>
                </li>
                <li class="px-2 cursor-pointer" @click="changeTab('regional')">
                    <span class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-teal-500 font-semibold" >Regional Settings</span>
                </li>
            </ul>
        </div>
            <div >
                <div class="p-4 " v-if="showTab">
                    <div class="justify-between border-solid border-b-2 p-2 text-center items-center">
                        <div class="text-left ml-2 text-xl antialiased leading-snug tracking-normal font-sans text-teal-700">General</div>
                    </div>
                    <div class=" pt-4 w-full h-auto border-black mx-2  mt-2">
                        <div class="">
                            <div class="mt-4 flex justify-start bg-white">
                                <div class="m-2 w-3/5 mr-56">
                                    <div class="m-2">
                                        <div class="flex m-2 w-full">

                                            <label class="block text-left text-gray-700 leading-tight tracking-normal  font-sans font-normal w-64 mt-2">Site Title</label>
                                            <input class="mb-2 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-1/2 appearance-none leading-normal" placeholder="Site Title" v-model="site_title">
                                        </div>
                                        <div class="flex m-2 w-full">
                                            <label class="block text-left text-gray-700 leading-tight tracking-normal  font-sans font-normal w-64 mt-2">Tagline</label>
                                            <input class="mb-2 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-1/2 appearance-none leading-normal" placeholder="Tagline"  v-model="tagline">

                                        </div>

                                        <div class="flex m-2 w-full">

                                            <label class="block text-left text-gray-700 leading-tight tracking-normal  font-sans font-normal w-64 mt-2 ">Administration Email Address</label>
                                            <input class="mb-2 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-1/2 appearance-none leading-normal" placeholder="Email Address" type="text" v-model="administrator_email">

                                        </div>
                                        <div class="flex inline-block m-2 w-full">
                                            <label class="block text-left text-gray-700 leading-tight tracking-normal  font-sans font-normal w-64 mt-2">New User Default Role</label>
                                            <select v-model="role" class="p-2 rounded-lg border-gray-300 border bg-white focus:outline-none focus:shadow-outline w-1/4 mr-10 h-10 leading-normal">
                                                <option  >Role</option>
                                            </select>
                                        </div>
<!--                                        <div class="flex m-2 w-full">-->
<!--                                            <label class=" text-left text-gray-700 leading-tight tracking-normal  font-sans font-normal w-64 mt-2">Site Language</label>-->
<!--                                            <select v-model="language"  class="p-2 rounded-lg border-gray-300 border bg-white focus:outline-none focus:shadow-outline w-1/4 h-10 leading-normal">-->
<!--                                                <option  >Language</option>-->
<!--                                            </select>-->
<!--                                        </div>-->
<!--                                        <div class="flex m-2 w-full">-->
<!--                                            <label class=" text-gray-700 text-base font-medium  font-sans font-semibold antialised w-64">Time Zone</label>-->
<!--                                            <select v-model="time_zone"  class="p-2 rounded-lg border-gray-300 border bg-white focus:outline-none focus:shadow-outline w-1/4 h-10 leading-normal">-->
<!--                                                <option value="" selected  >Language</option>-->
<!--                                            </select>-->
<!--                                        </div>-->
                                        <div class="flex m-2 w-full">

                                            <label class="block text-left text-gray-700 leading-tight tracking-normal cursor: pointer font-sans font-normal w-64 "> Date Format</label>
                                            <div class="block">
                                            <input type="radio" value="F j, Y" class="  mt-1 w-4 h-4 bg-white py-2 px-4 block text-base leading-normal"  v-model="date_format">
                                                 <span class=" ml-2 w-32">April 21, 2020</span>
                                                    <code class="">F j, Y</code><br>
                                                <input type="radio" value="Y-m-d" class="  mt-1 w-4 h-4 bg-white py-2 px-4 block text-base leading-normal"  v-model="date_format">
                                                  <span class=" ml-2 w-32">2020-04-21</span>
                                                   <code class="">Y-m-d</code><br>
<!--                                                <input type="radio" value="m/d/Y" class="  mt-1 w-4 h-4 bg-white py-2 px-4 block text-base leading-normal"  v-model="date_format">-->
<!--                                                  <span class="block ml-2 w-32">04/21/2020</span>-->
<!--                                                   <code class="">m/d/Y</code><br>-->
<!--                                                <input type="radio" value="d/m/Y" class="  mt-1 w-4 h-4 bg-white py-2 px-4 block text-base leading-normal"  v-model="date_format">-->
<!--                                                  <span class="block ml-2 w-32">21/04/2020</span>-->
<!--                                                   <code class="">d/m/Y</code>-->
                                            </div>

<!--                                                <select v-model="date_format" class="p-2 rounded-lg border-gray-300 border bg-white focus:outline-none focus:shadow-outline w-full h-12 leading-normal">-->
<!--                                                    <option value="" selected  >select option</option>-->
<!--                                                    <option value="" selected  >April 21, 2020    F j, Y</option>-->
<!--                                                    <option value="" selected  >04/21/2020        m/d/Y</option>-->
<!--                                                </select>-->
                                        </div>
                                        <div class="flex m-2 w-full">
                                            <label class="block text-left text-gray-700 leading-tight tracking-normal  font-sans font-normal w-64 mt-2"> Time Format</label>
                                            <select v-model="time_format" class="mb-2 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-1/4 leading-normal">
                                                <option value="" selected  >select option</option>
                                                <option value="" selected  >g:i a</option>
                                                <option value="" selected  >g:i A</option>
                                            </select>
                                        </div>
                                        <div class="flex m-2 w-full">
                                            <label class=" text-left text-gray-700 leading-tight tracking-normal  font-sans font-normal w-64 mt-2">Week Starts On</label>
                                            <select v-model="week_start"  class="p-2 rounded-lg border-gray-300 border bg-white focus:outline-none focus:shadow-outline w-1/4 h-10 leading-normal">
                                                <option value="" selected >Monday</option>
                                                <option value="" selected >Tuesday</option>
                                                <option value="" selected >Wednesday</option>
                                                <option value="" selected >Thurday</option>
                                                <option value="" selected >Friday</option>
                                                <option value="" selected >Saturday</option>
                                                <option value="" selected >Sunday</option>
                                            </select>
                                        </div>

                                        <div class="flex m-2 w-full">
                                            <button class="bg-teal-500 mt-4 rounded-lg w-32 h-10 text-white">Save</button>
                                        </div>
                                    </div>
                                </div>
<!--                                <div class="m-2 w-1/2 mr-8 mt-6 ">-->
<!--                                    <div class="w-full h-11/12 bg-gray-200">-->

<!--                                    </div>-->
<!--                                </div>-->
                            </div>
                        </div>
                    </div>
                </div>

                <div class="p-4 " v-if="showTab2">
                    <div class="justify-between border-solid border-b-2 p-2 text-center items-center">
                        <div class="text-left ml-2 text-xl antialiased leading-snug tracking-normal font-sans text-teal-700">Contact Information</div>
                        <div class="text-left ml-2 text-md antialiased leading-snug tracking-normal font-sans text-teal-700 mt-2 ">Tell us where your business is based</div>
                    </div>
                    <div class=" pt-4 w-full h-auto border-black mx-2  mt-2">
                        <div class="">
                            <div class="mt-4 flex justify-center bg-white">
                                <div class="m-2 w-1/2">
                                    <div class="px-6">
                                        <label class="block text-left text-gray-700 leading-tight tracking-normal  font-sans font-normal" >
                                            Email
                                        </label>
                                        <input v-model="email" type="email" class="mb-2 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"  placeholder="tailwind@example.com">
                                    </div>
                                    <div class="flex ">
                                        <div class="px-6 w-full mt-2">
                                            <label class="block text-left text-gray-700 leading-tight tracking-normal  font-sans font-normal" >
                                                Phone
                                            </label>
                                            <input v-model="phone" class="mb-2 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"  placeholder="">
                                        </div>
                                        <div class="px-6 w-full mt-2">
                                            <label class="block text-left text-gray-700 leading-tight tracking-normal  font-sans font-normal" >
                                                Fax
                                            </label>
                                            <input v-model="fax" class="mb-2 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"  placeholder="">
                                        </div>
                                    </div>
                                    <div class="px-6 mt-2">
                                        <label class="block text-left text-gray-700 leading-tight tracking-normal  font-sans font-normal" >
                                            Address
                                        </label>
                                        <input v-model="address" class="mb-2 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"  placeholder="Add your business address">
                                    </div>
                                    <div class="flex ">
                                        <div class="px-6 w-full mt-2">
                                            <label class="block text-left text-gray-700 leading-tight tracking-normal  font-sans font-normal" >
                                                City
                                            </label>
                                            <select v-model="city"   class="p-2 rounded-lg text-gray-800 border-gray-400 border bg-white focus:outline-none focus:shadow-outline w-full mt-1 h-10">
<!--                                                <option value="" selected  >Select City</option>-->
                                                <option>Mumbai</option>
                                            </select>
                                        </div>
                                        <div class="px-6 w-full mt-2">
                                            <label class="block text-left text-gray-700 leading-tight tracking-normal  font-sans font-normal" >
                                                State
                                            </label>
                                            <select v-model="state"   class="p-2 rounded-lg text-gray-800 border-gray-400 border bg-white focus:outline-none focus:shadow-outline w-full mt-1 h-10">
<!--                                                <option value="" selected  >Select State</option>-->
                                                <option>Maharashra</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="flex ">
                                        <div class="px-6 w-full mt-2">
                                            <label class="block text-left text-gray-700 leading-tight tracking-normal  font-sans font-normal" >
                                                Country
                                            </label>
                                            <select v-model="country"   class=" p-2 rounded-lg text-gray-800 border-gray-400 border bg-white focus:outline-none focus:shadow-outline w-full mt-1 h-10  ">
                                                <option>India</option>
                                            </select>
                                        </div>
                                        <div class="px-6 w-full mt-2">
                                            <label class="block text-left text-gray-700 leading-tight tracking-normal  font-sans font-normal">
                                                Pincode
                                            </label>
                                            <input v-model="pincode" class="mb-2 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" placeholder="Enter Pincode">
                                        </div>
                                    </div>
                                    <button class="h-8 w-32 rounded-lg  bg-black overflow-hidden  text-white bg-teal-600 mt-6 ml-5">Save Changes</button>

                                </div>
                                <div class="m-2 w-1/2 mr-8 mt-6 ">
                                    <div class="w-full h-11/12 bg-gray-200">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="p-4 " v-if="showTab3">
                    <div class="flex justify-between border-solid border-b-2 p-2 text-center items-center">
                        <div class="text-left ml-2 text-xl antialiased leading-snug tracking-normal font-sans text-teal-700">DNS Records</div>
                        <div class="text-right flex">
                            <div class="inline-flex ml-1 items-center rounded p-2 bg-blue-500">
                                <span class="text-center text-sm antialiased tracking-wide leading-snug font-semibold font-sans text-white cursor-pointer"><a>Edit DNS</a></span>
                            </div>
                        </div>
                    </div>

                    <div class=" pt-4 w-full h-auto border-black mx-2  mt-2">
                        <div class="flex rounded shadow justify-between items-center text-left bg-gray-100 h-8 p-1 h-12">
                            <span class="ml-2">
                                <svg @click="isOpen = false" :class="isOpen ? 'block' : 'hidden'" class="h-5 cursor-pointer w-5" version="1.1" id="Chevron_up" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                    <path fill="#000000" d="M15.484,12.452c-0.436,0.446-1.043,0.481-1.576,0L10,8.705l-3.908,3.747c-0.533,0.481-1.141,0.446-1.574,0
                                        c-0.436-0.445-0.408-1.197,0-1.615c0.406-0.418,4.695-4.502,4.695-4.502C9.43,6.112,9.715,6,10,6s0.57,0.112,0.789,0.335
                                        c0,0,4.287,4.084,4.695,4.502C15.893,11.255,15.92,12.007,15.484,12.452z"/>
                                </svg>
                                <svg @click="isOpen = true"  :class="isOpen ? 'hidden' : 'block'" class="h-4 w-4 cursor-pointer" version="1.1" id="Chevron_down" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                     y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                    <path fill="#000000" d="M4.516,7.548c0.436-0.446,1.043-0.481,1.576,0L10,11.295l3.908-3.747c0.533-0.481,1.141-0.446,1.574,0
                                        c0.436,0.445,0.408,1.197,0,1.615c-0.406,0.418-4.695,4.502-4.695,4.502C10.57,13.888,10.285,14,10,14s-0.57-0.112-0.789-0.335
                                        c0,0-4.287-4.084-4.695-4.502C4.107,8.745,4.08,7.993,4.516,7.548z"/>
                                </svg>

                            </span>
                            <span class=" text-left text-sm antialiased leading-none tracking-wider font-sans font-semibold text-teal-400 mr-11/12 ">A (Host)</span>


                        </div>
                        <div v-if="isOpen" class="block shadow h-auto p-2 items-center">
                            <div class="flex justify-start h-auto">

                                <table class="min-w-full h-auto mt-3 m-1">
                                    <tr class="bg-teal-500 h-10">
                                        <th class="text-white text-left px-16 text-base antialiased leading-snug tracking-normal font-sans font-semibold">
                                            Host Name
                                        </th>

                                        <th class="text-white text-left px-10 text-base antialiased leading-snug tracking-normal font-sans font-semibold">
                                            Points
                                        </th>
                                        <th class="text-white text-left px-10 text-base antialiased leading-snug tracking-normal font-sans font-semibold">TTL
                                        </th>

                                    </tr>
                                    <tr v-for="index in 5" :key="index" class="h-auto" >
                                        <td class="h-8 text-left px-10 border-b border-gray-200 text-base text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal" >
                                            nits-media-tailwind.com
                                        </td>
                                        <td class="h-8 text-left px-10 border-b border-gray-200 text-base text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal">
                                            23.236.62.147
                                        </td>
                                        <td class="h-8 text-left px-10 border-b  border-gray-200 text-sm text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal">
                                            1 Hour
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="  w-full h-auto border-black mx-2 ">
                        <div class="flex rounded shadow justify-between items-center text-left bg-gray-100 h-8 p-1 h-12">
                            <div class="ml-2">
                                <svg @click="isOpen1 = false" :class="isOpen1 ? 'block' : 'hidden'" class="h-5 cursor-pointer w-5" version="1.1" id="Chevron_up" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                    <path fill="#000000" d="M15.484,12.452c-0.436,0.446-1.043,0.481-1.576,0L10,8.705l-3.908,3.747c-0.533,0.481-1.141,0.446-1.574,0
                                        c-0.436-0.445-0.408-1.197,0-1.615c0.406-0.418,4.695-4.502,4.695-4.502C9.43,6.112,9.715,6,10,6s0.57,0.112,0.789,0.335
                                        c0,0,4.287,4.084,4.695,4.502C15.893,11.255,15.92,12.007,15.484,12.452z"/>
                                </svg>
                                <svg @click="isOpen1 = true"  :class="isOpen1 ? 'hidden' : 'block'" class="h-4 w-4 cursor-pointer" version="1.1" id="Chevron_down" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                     y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                    <path fill="#000000" d="M4.516,7.548c0.436-0.446,1.043-0.481,1.576,0L10,11.295l3.908-3.747c0.533-0.481,1.141-0.446,1.574,0
                                        c0.436,0.445,0.408,1.197,0,1.615c-0.406,0.418-4.695,4.502-4.695,4.502C10.57,13.888,10.285,14,10,14s-0.57-0.112-0.789-0.335
                                        c0,0-4.287-4.084-4.695-4.502C4.107,8.745,4.08,7.993,4.516,7.548z"/>
                                </svg>

                            </div>
                            <div class=" text-left text-sm antialiased leading-none tracking-wider font-sans font-semibold text-teal-400 mr-10/12 pr-8 ">CNAME (Aliases)</div>


                        </div>
                        <div v-if="isOpen1" class="block shadow h-auto p-2 items-center">
                            <div class="flex justify-start h-auto">

                                <table class="min-w-full h-auto mt-3 m-1">
                                    <tr class="bg-teal-500 h-10">
                                        <th class="text-white text-left px-16 text-base antialiased leading-snug tracking-normal font-sans font-semibold">
                                            Host Name
                                        </th>

                                        <th class="text-white text-left px-10 text-base antialiased leading-snug tracking-normal font-sans font-semibold">
                                            Points
                                        </th>
                                        <th class="text-white text-left px-10 text-base antialiased leading-snug tracking-normal font-sans font-semibold">TTL
                                        </th>

                                    </tr>
                                    <tr v-for="index in 5" :key="index" class="h-auto" >
                                        <td class="h-8 text-left px-10 border-b border-gray-200 text-base text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal" >
                                            nits-media-tailwind.com
                                        </td>
                                        <td class="h-8 text-left px-10 border-b border-gray-200 text-base text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal">
                                            23.236.62.147
                                        </td>
                                        <td class="h-8 text-left px-10 border-b  border-gray-200 text-sm text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal">
                                            1 Hour
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="  w-full h-auto border-black mx-2 ">
                        <div class="flex rounded shadow justify-between items-center text-left bg-gray-100 h-8 p-1 h-12">
                            <div class="ml-2">
                                <svg @click="isOpen2 = false" :class="isOpen2 ? 'block' : 'hidden'" class="h-5 cursor-pointer w-5" version="1.1" id="Chevron_up" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                    <path fill="#000000" d="M15.484,12.452c-0.436,0.446-1.043,0.481-1.576,0L10,8.705l-3.908,3.747c-0.533,0.481-1.141,0.446-1.574,0
                                        c-0.436-0.445-0.408-1.197,0-1.615c0.406-0.418,4.695-4.502,4.695-4.502C9.43,6.112,9.715,6,10,6s0.57,0.112,0.789,0.335
                                        c0,0,4.287,4.084,4.695,4.502C15.893,11.255,15.92,12.007,15.484,12.452z"/>
                                </svg>
                                <svg @click="isOpen2 = true"  :class="isOpen2 ? 'hidden' : 'block'" class="h-4 w-4 cursor-pointer" version="1.1" id="Chevron_down" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                     y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                    <path fill="#000000" d="M4.516,7.548c0.436-0.446,1.043-0.481,1.576,0L10,11.295l3.908-3.747c0.533-0.481,1.141-0.446,1.574,0
                                        c0.436,0.445,0.408,1.197,0,1.615c-0.406,0.418-4.695,4.502-4.695,4.502C10.57,13.888,10.285,14,10,14s-0.57-0.112-0.789-0.335
                                        c0,0-4.287-4.084-4.695-4.502C4.107,8.745,4.08,7.993,4.516,7.548z"/>
                                </svg>

                            </div>
                            <div class=" text-left text-sm antialiased leading-none tracking-wider font-sans font-semibold text-teal-400 mr-10/12 pr-2">MX (Mail Exchange)</div>


                        </div>
                        <div v-if="isOpen2" class="block shadow h-auto p-2 items-center">
                            <div class="flex justify-start h-auto">

                                <table class="min-w-full h-auto mt-3 m-1">
                                    <tr class="bg-teal-500 h-10">
                                        <th class="text-white text-left px-16 text-base antialiased leading-snug tracking-normal font-sans font-semibold">
                                            Host Name
                                        </th>

                                        <th class="text-white text-left px-10 text-base antialiased leading-snug tracking-normal font-sans font-semibold">
                                            Points
                                        </th>
                                        <th class="text-white text-left px-10 text-base antialiased leading-snug tracking-normal font-sans font-semibold">TTL
                                        </th>

                                    </tr>
                                    <tr v-for="index in 5" :key="index" class="h-auto" >
                                        <td class="h-8 text-left px-10 border-b border-gray-200 text-base text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal" >
                                            nits-media-tailwind.com
                                        </td>
                                        <td class="h-8 text-left px-10 border-b border-gray-200 text-base text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal">
                                            23.236.62.147
                                        </td>
                                        <td class="h-8 text-left px-10 border-b  border-gray-200 text-sm text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal">
                                            1 Hour
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="  w-full h-auto border-black mx-2 ">
                        <div class="flex rounded shadow justify-between items-center text-left bg-gray-100 h-8 p-1 h-12">
                            <div class="ml-2">
                                <svg @click="isOpen3 = false" :class="isOpen3 ? 'block' : 'hidden'" class="h-5 cursor-pointer w-5" version="1.1" id="Chevron_up" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                    <path fill="#000000" d="M15.484,12.452c-0.436,0.446-1.043,0.481-1.576,0L10,8.705l-3.908,3.747c-0.533,0.481-1.141,0.446-1.574,0
                                        c-0.436-0.445-0.408-1.197,0-1.615c0.406-0.418,4.695-4.502,4.695-4.502C9.43,6.112,9.715,6,10,6s0.57,0.112,0.789,0.335
                                        c0,0,4.287,4.084,4.695,4.502C15.893,11.255,15.92,12.007,15.484,12.452z"/>
                                </svg>
                                <svg @click="isOpen3 = true"  :class="isOpen3 ? 'hidden' : 'block'" class="h-4 w-4 cursor-pointer" version="1.1" id="Chevron_down" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                     y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                    <path fill="#000000" d="M4.516,7.548c0.436-0.446,1.043-0.481,1.576,0L10,11.295l3.908-3.747c0.533-0.481,1.141-0.446,1.574,0
                                        c0.436,0.445,0.408,1.197,0,1.615c-0.406,0.418-4.695,4.502-4.695,4.502C10.57,13.888,10.285,14,10,14s-0.57-0.112-0.789-0.335
                                        c0,0-4.287-4.084-4.695-4.502C4.107,8.745,4.08,7.993,4.516,7.548z"/>
                                </svg>

                            </div>
                            <div class=" text-left text-sm antialiased leading-none tracking-wider font-sans font-semibold text-teal-400 mr-10/12 pr-4">NS (Name Servers)</div>


                        </div>
                        <div v-if="isOpen3" class="block shadow h-auto p-2 items-center">
                            <div class="flex justify-start h-auto">

                                <table class="min-w-full h-auto mt-3 m-1">
                                    <tr class="bg-teal-500 h-10">
                                        <th class="text-white text-left px-16 text-base antialiased leading-snug tracking-normal font-sans font-semibold">
                                            Host Name
                                        </th>

                                        <th class="text-white text-left px-10 text-base antialiased leading-snug tracking-normal font-sans font-semibold">
                                            Points
                                        </th>
                                        <th class="text-white text-left px-10 text-base antialiased leading-snug tracking-normal font-sans font-semibold">TTL
                                        </th>

                                    </tr>
                                    <tr v-for="index in 5" :key="index" class="h-auto" >
                                        <td class="h-8 text-left px-10 border-b border-gray-200 text-base text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal" >
                                            nits-media-tailwind.com
                                        </td>
                                        <td class="h-8 text-left px-10 border-b border-gray-200 text-base text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal">
                                            23.236.62.147
                                        </td>
                                        <td class="h-8 text-left px-10 border-b  border-gray-200 text-sm text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal">
                                            1 Hour
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="p-4 " v-if="showTab4">
<!--                    upload image-->
                  <div class="w-11/12  justify-center rounded-lg">
                    <div class="justify-between border-solid border-b-2 p-2 text-center items-center">
                        <div class="text-left ml-2 text-xl antialiased leading-snug tracking-normal font-sans text-teal-700">Social Share Image</div>
                        <div class="text-left ml-2 text-md antialiased leading-snug tracking-normal font-sans text-teal-700 mt-2 ">This image appers on social networks like Facebook, Twitter and others when your website is shared. <br>It's a great way to help visitors recognize your brand</div>
                    </div>
                      <div class=" pt-4 w-full h-auto border-black mx-2 ">
                          <div class=" flex justify-center bg-white">

                          <div class=" pt-4 w-1/3 h-auto border-black mr-8 ml-8 mt-2">
                           <div class=" border h-40 border-dashed border-blue-500 relative">
                            <input type="file" class="cursor-pointer relative block opacity-0 w-40 h-full p-20 z-50">
                            <div class="text-center p-8 absolute top-0 right-0 left-0 m-auto">
                                <svg class="inline-block mt-8  w-10 h-10 text-blue-400" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 8a3 3 0 100 6 3 3 0 000-6zm8-3h-2.4a.89.89 0 01-.79-.57l-.62-1.86A.9.9 0 0013.4 2H6.6a.89.89 0 00-.79.57L5.2 4.43A.89.89 0 014.4 5H2a2 2 0 00-2 2v9c0 1.1.9 2 2 2h16a2 2 0 002-2V7a2 2 0 00-2-2zm-8 11a5 5 0 110-10 5 5 0 010 10zm7.5-7.8a.7.7 0 110-1.4.7.7 0 010 1.4z"/>
                                </svg>
                            </div>
                          </div>

                        </div>
                          <div class=" flex m-2 w-3/4 mr-8 ">
                          <div class="mt-8 p-1" >
                              <span class="text-blue-500 text-md p-2 ml-6 font-semibold rounded-full border border-blue-500 antialiased w-10" >Upload Image</span>

                          <div class="mt-6 ">
                              <div class="w-full h-auto  px-6 py-4 rounded-md ">
                                  <span class="text-base text-gray-700">To make these change live, Publish your website</span><br>
                                  <div >
                                  <span class="mt-2 font-semibold text-base text-gray-800">Note:</span>
                                      <span class="text-base text-gray-700">It can take time before you see these changes on social neworks</span>
                                      <a href="#" class="mt-2 text-base text-blue-400">Learn More</a>

                                  </div>

                              </div>
                          </div>
                          </div>

                          </div>
                         </div>
                      </div>

                  </div>
                         <!--facebook-->
                    <div class=" mt-8 justify-between border-solid border-b-2 p-2 text-center items-center">
                        <div class="text-left ml-2 text-xl antialiased leading-snug tracking-normal font-sans text-teal-700">Facebook Username</div>
                        <div class="text-left ml-2 text-md antialiased leading-snug tracking-normal font-sans text-teal-700 mt-2 ">Facebook needs yours personal username to verify any Likes you get on your Wix website. If you<br>have the Facebook Comments app, this will also allowmyou to moderate comments.</div>
                    </div>

                    <div class=" pt-4 w-full h-auto border-black mx-2 ">
                        <div class=" flex justify-center bg-white">

                            <div class=" pt-4 w-1/5 h-auto border-black mr-8 ml-8 mt-2">
                                <div>
                                     <!--    facebook icon-->
                                </div>

                            </div>
                            <div class=" flex m-2 w-4/5 mr-8 ">
                                        <div class="w-full h-auto  px-6 py-4 rounded-md ">
                                            <span class="text-lg text-gray-700">Enter your Personal Facebook Username:</span><br>
                                            <div class="flex w-full mt-2" >
                                                <span class="block mt-2 text-md text-gray-700">www.facebook.com/</span>
                                                <input class="bg-white focus:outline-none border border-gray-500 rounded-lg py-2 px-4 block ml-4 mb-6 w-full appearance-none " placeholder="Enter your username">

                                            </div>
                                            <span class="mt-4 text-base text-gray-700">To make these change live, Publish your website.</span>

                                        </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="p-4 " v-if="showTab5">
                    <div class="justify-between border-solid border-b-2 p-2 text-center items-center">
                        <div class="text-left ml-2 text-xl antialiased leading-snug tracking-normal font-sans text-teal-700">Regional Settings</div>
                        <div class="text-left ml-2 text-md antialiased leading-snug tracking-normal font-sans text-teal-700 mt-2 ">Edit the regional settings for your website, apps and more</div>
                    </div>

                    <div class=" pt-4 w-full h-auto border-black mx-2  mt-2">
                            <div class="">
                                <div class="mt-4 flex justify-center bg-white">
                                    <div class="m-2 w-1/2">
<!--                                        <div class="mb-4 text-lg">Enter the details</div>-->
                                        <div class="px-6">
                                            <label class="text-left text-gray-700 leading-tight tracking-normal  font-sans font-normal" >
                                                Regional Settings
                                            </label><br>
                                            <select v-model="settings" class="p-2 rounded-lg text-gray-700 border-gray-400 border bg-white focus:outline-none focus:shadow-outline w-full mt-1 h-10">
                                                <option >English-India</option>
                                            </select>
                                        </div>
                                        <div class="px-6 mt-4">
                                            <label class="text-left text-gray-700 leading-tight tracking-normal  font-sans font-normal" >
                                                Language
                                            </label><br>
                                            <select v-model="language" class="p-2 rounded-lg text-gray-700 border-gray-300 border bg-white focus:outline-none focus:shadow-outline w-full mt-1 h-10">
                                                <option>English</option>
                                            </select>
                                        </div>
                                        <div class="px-6 mt-4">
                                            <label class="text-left text-gray-700 leading-tight tracking-normal  font-sans font-normal" >
                                                Currency
                                            </label><br>
                                            <select v-model="currency" class="p-2 rounded-lg border-gray-300 text-gray-700 border bg-white focus:outline-none focus:shadow-outline w-full mt-1 h-10">
                                                <option>Indian Rupee-INR(&#8377;)</option>
                                            </select>
                                        </div>
                                        <div class="px-6 mt-4">
                                            <label class="text-left text-gray-700 leading-tight tracking-normal  font-sans font-normal" >
                                                Time Zone
                                            </label><br>
                                            <select v-model="time_zone" class="p-2 rounded-lg text-gray-700 border-gray-300 border  bg-white focus:outline-none focus:shadow-outline w-full mt-1 h-10">
                                                <option >(GMT+5:30)Asia/Kolkata</option>
                                            </select>
                                        </div>
                                        <button class="h-8 w-32 rounded-lg  bg-black overflow-hidden  text-white bg-teal-600 mt-6 ml-5">Save Changes</button>

                                    </div>
                                    <div class="m-2 w-1/2 mr-8 ">
                                        <div >
                                            <div class="text-gray-700 leading-tight tracking-normal  font-sans font-normal" >Region Format Preview</div>
                                            <div class="w-full h-auto bg-gray-200 px-6 py-4 rounded-md ">
                                                <div class="flex">
                                                    <span class="text-gray-700">Date:&nbsp;</span>
                                                    <span class="text-gray-700">20 April 2020,&nbsp;</span>
                                                    <span class="text-gray-700">12:06:51 pm</span>
                                                </div>
                                                <div class="flex">
                                                    <span class="text-gray-700">Short Date:&nbsp;</span>
                                                    <span class="text-gray-700">1,234.56,&nbsp;</span>
                                                    <span class="text-gray-700">12:06 pm</span>
                                                </div>
                                                <div class="flex">
                                                    <span class="text-gray-700">Numbers:&nbsp;</span>
                                                    <span class="text-gray-700">1,234.56</span>
                                                </div>
                                                <div class="flex">
                                                    <span class="text-gray-700">Currency:&nbsp;</span>
                                                    <span class="text-gray-700">&#8377; 1,234.56</span>
                                                </div>
                                                <div class="flex">
                                                    <span class="text-gray-700">Measurements:&nbsp;</span>
                                                    <span class="text-gray-700">Metric (e.g. kg, cm)</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mt-6 ">
                                            <div class="w-full h-auto bg-gray-200 px-6 py-4 rounded-md ">
                                                    <span class="text-md font-small">Add Languages to Your Site</span><br>
                                                    <span class="mt-2 text-sm">Grow your global audiance with a multilingual website.</span><br>
                                                    <a href="#" class="mt-2 text-sm text-blue-400">Add Languages</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

        </div>

    </dashboard-layout-one>
</template>

<script>
    export default {
        name: "settings",
        data() {
            return {
                breadcrumbs: ['Settings', 'Second Link', 'Third Link', 'Fourth Link'],
                showTab: true,
                showTab2: false,
                showTab3: false,
                showTab4: false,
                showTab5: false,
                isOpen:false,
                isOpen1:false,
                isOpen2:false,
                isOpen3:false,
                search:'',
                settings:'',
                language:'',
                currency:'',
                time_zone:'',
                address:'',
                email:'',
                phone:'',
                fax:'',
                country:'',
                city:'',
                state:'',
                pincode:'',
                week_start:'',
                time_format:'',
                date_format:'',
                role:'',
                administrator_email:'',
                tagline:'',
                site_title:'',
            }
        },
        components: {
            'DashboardLayoutOne': () => import('./../Layouts/Dashboard/LayoutOne'),
        },
        methods:{
            changeTab(tab) {
                this.showTab = false;
                this.showTab2 = false;
                this.showTab3 = false;
                this.showTab4 = false;
                this.showTab5 = false;

                switch(tab) {
                    case 'general': this.showTab = true;
                        break;
                    case 'contact': this.showTab2 = true;
                        break;
                    case 'domain': this.showTab3 = true;
                        break;
                    case 'social': this.showTab4 = true;
                        break;
                    case 'regional': this.showTab5 = true;
                        break;
                    default: this.showTab = true;
                        break;
                }
            },
        },

    }
</script>

<style scoped>

</style>