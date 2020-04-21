<template>
    <dashboard-layout-one active="settings">
        <base-bread-crumb-one name="Settings" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>
        <div class=" w-full h-auto bg-white mt-4">
            <div class="flex p-4 ">
                <ul class="list-reset flex border-b">
                    <li class="-mb-px mr-1 cursor-pointer"  @click="changeTab('General')">
                        <span class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-dark font-semibold">General</span>
                    </li>
                    <li class="mr-1 cursor-pointer" @click="changeTab('Contact')">
                        <span class="bg-white inline-block py-2 px-4 text-blue hover:text-blue-darker font-semibold" >Contact Info</span>
                    </li>
                    <li class="mr-1 cursor-pointer" @click="changeTab('Domain')">
                        <span class="bg-white inline-block py-2 px-4 text-blue hover:text-blue-darker font-semibold" >Domain Config</span>
                    </li>
                    <li class="mr-1 cursor-pointer" @click="changeTab('Social')">
                        <span class="bg-white inline-block py-2 px-4 text-grey-light font-semibold" >Social Connects</span>
                    </li>
                    <li class="mr-1 cursor-pointer" @click="changeTab('Regional')">
                        <span class="bg-white inline-block py-2 px-4 text-grey-light font-semibold" >Regional Settings</span>
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
                                            <label class="block text-gray-600 text-base font-semibold antialised w-64 ">Site Title</label>
                                            <input class="mb-2 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" placeholder="Site Title" v-model="site_title">
                                        </div>
                                        <div class="flex m-2 w-full">
                                            <label class="block text-gray-600 text-base font-semibold antialised w-64">Tagline</label>
                                            <input class="mb-2 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" placeholder="Tagline" type="tagline" v-model="tagline">

                                        </div>

                                        <div class="flex m-2 w-full">
                                            <label class="block text-gray-600 text-base font-semibold antialised w-64 ">Administration Email Address</label>
                                            <input class="mb-2 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" placeholder="Email Address" type="text" v-model="email_add">

                                        </div>
                                        <div class="flex inline-block m-2 w-full">
                                            <label class="block text-gray-600 text-base font-semibold antialised w-64">New User Default Role</label>
                                            <select v-model="role" class="p-2 rounded-lg border-gray-300 border bg-white focus:outline-none focus:shadow-outline w-full h-12 leading-normal">
                                                <option value="" selected  >Subscriber</option>
                                                <option value="" selected  >Administrator</option>
                                            </select>

                                        </div>
                                        <div class="flex m-2 w-full">
                                            <label class=" text-gray-600 text-base font-semibold antialised w-64">Site Language</label>
                                            <select v-model="site_language"  class="p-2 rounded-lg border-gray-300 border bg-white focus:outline-none focus:shadow-outline w-full  h-12 leading-normal">
                                                <option value="" selected  >Language</option>
                                            </select>
                                        </div>
                                        <div class="flex m-2 w-full">
                                            <label class="block text-gray-600 text-base font-semibold antialised w-64">Time Zone</label>
                                            <select v-model="time_zone"  class="p-2 rounded-lg border-gray-300 border bg-white focus:outline-none focus:shadow-outline w-full h-12 leading-normal">
                                                <option value="" selected  >select option</option>
                                                <option value="" selected  >UTC+3:30</option>
                                                <option value="" selected  >UTC+4</option>
                                                <option value="" selected  >UTC+4:30</option>
                                                <option value="" selected  >UTC+5</option>
                                                <option value="" selected  >UTC+5:30</option>
                                                <option value="" selected  >UTC+5:45</option>
                                            </select>
                                        </div>
                                        <div class="flex m-2 w-full">
                                            <label class="block text-gray-600 text-base font-semibold antialised w-64">Date Format</label>
                                            <select v-model="date_format" class="p-2 rounded-lg border-gray-300 border bg-white focus:outline-none focus:shadow-outline w-full h-12 leading-normal">
                                                <option value="" selected  >select option</option>
                                                <option value="" selected  >April 21, 2020    F j, Y</option>
                                                <option value="" selected  >04/21/2020        m/d/Y</option>
                                            </select>
                                        </div>
                                        <div class="flex m-2 w-full">
                                            <label class="block text-gray-600 text-base font-semibold antialised w-64"> Time Format</label>
                                            <select v-model="time_format" class="p-2 rounded-lg border-gray-300 border bg-white focus:outline-none focus:shadow-outline w-full h-12 leading-normal">
                                                <option value="" selected  >select option</option>
                                                <option value="" selected  >g:i a</option>
                                                <option value="" selected  >g:i A</option>
                                            </select>

                                        </div>
                                        <div class="flex m-2 w-full">
                                            <label class="block text-gray-600 text-base font-semibold antialised w-64">Week Starts On</label>
                                            <select v-model="week_start" class="p-2 rounded-lg border-gray-300 border bg-white focus:outline-none focus:shadow-outline w-full h-12 leading-normal">
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
                                            <button class="bg-blue-400 mt-4 rounded-lg w-32 h-10 text-white">Save</button>
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
                        <div class="text-left ml-2 text-xl antialiased leading-snug tracking-normal font-sans text-teal-700">Location</div>
                        <div class="text-left ml-2 text-md antialiased leading-snug tracking-normal font-sans text-teal-700 mt-2 ">Tell us where your business is based</div>
                    </div>
                    <div class=" pt-4 w-full h-auto border-black mx-2  mt-2">
                        <div class="">
                            <div class="mt-4 flex justify-center bg-white">
                                <div class="m-2 w-1/2">
                                    <div class="px-6">
                                        <label class="block text-gray-700 text-sm font-bold mb-2 antialiased tracking-normal font-serif" >
                                            Email
                                        </label>
                                        <input v-model="email" type="email" class="mb-2 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"  placeholder="tailwind@example.com">
                                    </div>
                                    <div class="flex ">
                                        <div class="px-6 w-full mt-2">
                                            <label class="block text-gray-700 text-sm font-bold mb-2 antialiased tracking-normal font-serif w-full" >
                                                Phone
                                            </label>
                                            <input v-model="phone" class="mb-2 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"  placeholder="">
                                        </div>
                                        <div class="px-6 w-full mt-2">
                                            <label class="block text-gray-700 text-sm font-bold mb-2 antialiased tracking-normal font-serif w-full" >
                                                Fax
                                            </label>
                                            <input v-model="fax" class="mb-2 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"  placeholder="">
                                        </div>
                                    </div>
                                    <div class="px-6 mt-2">
                                        <label class="block text-gray-700 text-sm font-bold mb-2 antialiased tracking-normal font-serif" >
                                            Address
                                        </label>
                                        <input v-model="address" class="mb-2 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"  placeholder="Add your business address">
                                    </div>
                                    <div class="flex ">
                                        <div class="px-6 w-full mt-2">
                                            <label class="block text-gray-700 text-sm font-bold mb-2 antialiased tracking-normal font-serif w-full" >
                                                City
                                            </label>
                                            <select v-model="city"   class="mb-2 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
                                                <option value="" selected  >Select City</option>
                                                <option>Mumbai</option>
                                            </select>
                                        </div>
                                        <div class="px-6 w-full mt-2">
                                            <label class="block text-gray-700 text-sm font-bold mb-2 antialiased tracking-normal font-serif w-full" >
                                                State
                                            </label>
                                            <select v-model="state"   class="mb-2 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
                                                <option value="" selected  >Select State</option>
                                                <option>Maharashra</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="flex ">
                                        <div class="px-6 w-full mt-2">
                                            <label class="block text-gray-700 text-sm font-bold mb-2 antialiased tracking-normal font-serif w-full" >
                                                Country
                                            </label>
                                            <select v-model="country"   class="mb-2 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
                                                <option value="" selected  >Select Country</option>
                                                <option>India</option>
                                            </select>
                                        </div>
                                        <div class="px-6 w-full mt-2">
                                            <label class="block text-gray-700 text-sm font-bold mb-2 antialiased tracking-normal font-serif w-fulle">
                                                Pincode
                                            </label>
                                            <input v-model="pincode" class="mb-2 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" placeholder="Enter Pincode">
                                        </div>
                                    </div>
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
                            <div class="ml-2">
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

                            </div>
                            <div class=" text-left text-sm antialiased leading-none tracking-wider font-sans font-semibold text-teal-400 mr-11/12 pr-2">A (Host)</div>


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
                            <div class=" text-left text-sm antialiased leading-none tracking-wider font-sans font-semibold text-teal-400 mr-10/12 pr-16 ">CNAME (Aliases)</div>


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
                            <div class=" text-left text-sm antialiased leading-none tracking-wider font-sans font-semibold text-teal-400 mr-10/12 pr-10">MX (Mail Exchange)</div>


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
                            <div class=" text-left text-sm antialiased leading-none tracking-wider font-sans font-semibold text-teal-400 mr-10/12 pr-12">NS (Name Servers)</div>


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
                        <div class="text-left ml-2 text-2xl antialiased leading-snug tracking-normal font-sans text-teal-700">Social Share Image</div>
                        <div class="text-left ml-2 mb-4 text-lg antialiased leading-snug tracking-normal font-sans text-teal-700 mt-2 ">This image appers on social networks like Facebook, Twitter and others when your website is shared. <br>It's a great way to help visitors recognize your brand</div>
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
                              <span class="text-blue-500 text-lg p-3 ml-6 font-semibold rounded-full border border-blue-500 antialiased" >Upload Image</span>

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
                        <div class="text-left ml-2 text-2xl antialiased leading-snug tracking-normal font-sans text-teal-700">Facebook Username</div>
                        <div class="text-left ml-2 mb-4 text-lg antialiased leading-snug tracking-normal font-sans text-teal-700 mt-2 ">Facebook needs yours personal username to verify any Likes you get on your Wix website. If you<br>have the Facebook Comments app, this will also allowmyou to moderate comments.</div>
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
                                            <span class="text-xl text-gray-700">Enter your Personal Facebook Username:</span><br>
                                            <div class="flex w-full mt-2" >
                                                <span class="block mt-2 text-lg text-gray-700">www.facebook.com/</span>
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
                                            <label class="text-left text-gray-700 text-sm font-bold antialiased tracking-normal font-serif" >
                                                Regional Settings
                                            </label><br>
                                            <select v-model="settings" class="p-2 rounded-lg border-gray-300 border bg-white focus:outline-none focus:shadow-outline w-full mt-1 h-10">
                                                <option value="" selected  >English-India</option>
                                            </select>
                                        </div>
                                        <div class="px-6 mt-4">
                                            <label class="text-left text-gray-700 text-sm font-bold antialiased tracking-normal font-serif" >
                                                Language
                                            </label><br>
                                            <select v-model="language" class="p-2 rounded-lg border-gray-300 border bg-white focus:outline-none focus:shadow-outline w-full mt-1 h-10">
                                                <option value="" selected  >English</option>
                                            </select>
                                        </div>
                                        <div class="px-6 mt-4">
                                            <label class="text-left text-gray-700 text-sm font-bold antialiased tracking-normal font-serif" >
                                                Currency
                                            </label><br>
                                            <select v-model="currency" class="p-2 rounded-lg border-gray-300 border bg-white focus:outline-none focus:shadow-outline w-full mt-1 h-10">
                                                <option value="" selected  >Indian Rupee-INR(&#8377;)</option>
                                            </select>
                                        </div>
                                        <div class="px-6 mt-4">
                                            <label class="text-left text-gray-700 text-sm font-bold antialiased tracking-normal font-serif" >
                                                Time Zone
                                            </label><br>
                                            <select v-model="time_zone" class="p-2 rounded-lg border-gray-300 border bg-white focus:outline-none focus:shadow-outline w-full mt-1 h-10">
                                                <option value="" selected  >(GMT+5:30)Asia/Kolkata</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div class="m-2 w-1/2 mr-8 ">
                                        <div >
                                            <div class="text-gray-700 text-sm font-bold antialiased tracking-normal font-serif" >Region Format Preview</div>
                                            <div class="w-full h-auto bg-gray-200 px-6 py-4 rounded-md ">
                                                <div class="flex">
                                                    <span>Date:</span>
                                                    <span>20 April 2020,</span>
                                                    <span>12:06:51 pm</span>
                                                </div>
                                                <div class="flex">
                                                    <span>Short Date:</span>
                                                    <span>1,234.56</span>
                                                    <span>12:06 pm</span>
                                                </div>
                                                <div class="flex">
                                                    <span>Numbers:</span>
                                                    <span>1,234.56</span>
                                                </div>
                                                <div class="flex">
                                                    <span>Currency:</span>
                                                    <span>&#8377; 1,234.56</span>
                                                </div>
                                                <div class="flex">
                                                    <span>Measurements:</span>
                                                    <span>Metric (e.g. kg, cm)</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mt-6 ">
                                            <div class="w-full h-auto bg-gray-200 px-6 py-4 rounded-md ">
                                                    <span class="text-lg font-medium">Add Languages to Your Site</span><br>
                                                    <span class="mt-2">Grow your global audiance with a multilingual website.</span><br>
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
                site_name:'',
                tagline:'',
                email_add:'',
                role:'',
                site_language:'',
                date_format:'',
                time_format:'',
                week_start:'',
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
                    case 'General': this.showTab = true;
                        break;
                    case 'Contact': this.showTab2 = true;
                        break;
                    case 'Domain': this.showTab3 = true;
                        break;
                    case 'Social': this.showTab4 = true;
                        break;
                    case 'Regional': this.showTab5 = true;
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