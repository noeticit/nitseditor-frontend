<template>
    <div class="bg-white rounded-lg shadow-lg mt-1 min-h-full jsutify-center">
        <div class="flex justify-between border-solid border-b-2 p-2 text-center items-center">
            <div class="text-left ml-2 text-teal-600 text-xl antialiased leading-snug tracking-normal font-sans">User Table</div>
            <div class="text-right flex">
<!--                <div class="inline-flex items-center rounded p-2 bg-indigo-400">-->
<!--                    <span class="text-center text-sm antialiased tracking-wide leading-snug font-semibold font-sans text-white">Export</span>-->
<!--                </div>-->
                <div class="inline-flex ml-1 items-center rounded p-2 bg-yellow-400">
                    <span class="text-center text-sm antialiased tracking-wide leading-snug font-semibold font-sans text-white">Columns</span>
                </div>
                <router-link to="/nits-admin/user/add" class="inline-flex ml-1 items-center rounded p-2 bg-teal-500">
                    <span class="text-center text-sm antialiased tracking-wide leading-snug font-semibold font-sans text-white">Add</span>
                </router-link>
            </div>
        </div>
        <div class="p-4">

            <div class="text-indigo-600 mb-2 text-left text-sm antialiased tracking-wide font-sans font-semibold">Selected Options</div>
            <div class="flex flex-start">
                <div class="flex justify-start rounded-full border border-solid border-indigo-600 m-1 p-2">
                    <span class="text-center text-xs antialiased tracking-tighter rounded leading-none font-medium font-sans text-indigo-600 align-middle">City - Mumbai</span>
                    <svg class="ml-2 h-3 w-3 text-indigo-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm5 11l-2 2-3-3-3 3-2-2 3-3-3-3 2-2 3 3 3-3 2 2-3 3 3 3z"/>
                    </svg>
                </div>
                <div class="flex justify-start rounded-full border border-solid border-indigo-600 m-1 p-2">
                    <span class="text-center text-xs antialiased tracking-tighter rounded leading-none font-medium font-sans text-indigo-600 align-middle">State - Maharastra</span>
                    <svg class="ml-2 h-3 w-3 text-indigo-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm5 11l-2 2-3-3-3 3-2-2 3-3-3-3 2-2 3 3 3-3 2 2-3 3 3 3z"/>
                    </svg>
                </div>
<!--                <div class="inline-flex items-center rounded-full py-2 px-4 border border-solid border-indigo-600">-->
<!--                    <span class="text-center text-sm antialiased tracking-tight font-light font-sans text-gray-500">State - Maharastra</span>-->
<!--                </div>-->
            </div>
            <div class="text-gray-700 text-teal-600 my-2 text-left text-sm antialiased leading-none tracking-normal font-sans font-medium">Showing results 1 to 30 of 198346</div>
            <div class="mt-3">
                <input class="mb-2 text-xs py-1 px-4 border rounded w-2/4" placeholder="Search Users . . . ." type="text">
            </div>
            <table class="min-w-full">
                <tr class="bg-teal-500 h-12">
                    <th>
                        <div class="flex justify-center items-center">
                            <span class="text-white text-center text-base antialiased leading-snug tracking-normal font-sans font-semibold">First Name</span>
                            <svg class="h-4 w-4 text-white text-center" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 1L5 8h10l-5-7zm0 18l5-7H5l5 7z"/>
                            </svg>
                        </div>
                    </th>
                    <th>
                        <div class="flex justify-center items-center">
                            <span class="text-white text-center text-base antialiased leading-snug tracking-normal font-sans font-semibold">Last Name</span>
                            <svg class="h-4 w-4 text-white text-center" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 1L5 8h10l-5-7zm0 18l5-7H5l5 7z"/>
                            </svg>
                        </div>
                    </th>
<!--                    <th>-->
<!--                        <div class="flex justify-around items-center">-->
<!--                            <span class="text-white text-center text-base antialiased leading-snug tracking-normal font-sans font-semibold">Username</span>-->
<!--                            <svg class="h-4 w-4 text-white text-center" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">-->
<!--                                <path fill-rule="evenodd" d="M10 1L5 8h10l-5-7zm0 18l5-7H5l5 7z"/>-->
<!--                            </svg>-->
<!--                        </div>-->

<!--                    </th>-->
                    <th>
                        <div class="flex justify-center items-center">
                            <span class="text-white text-center text-base antialiased leading-snug tracking-normal font-sans font-semibold">Role</span>
                            <svg class="h-4 w-4 text-white text-center" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 1L5 8h10l-5-7zm0 18l5-7H5l5 7z"/>
                            </svg>
                        </div>

                    </th>
                    <th>
                        <div class="flex justify-center items-center">
                            <span class="text-white text-center text-base antialiased leading-snug tracking-normal font-sans font-semibold">Email</span>
                            <svg class="h-4 w-4 text-white text-center" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 1L5 8h10l-5-7zm0 18l5-7H5l5 7z"/>
                            </svg>
                        </div>
                    </th>
<!--                    <th>-->
<!--                        <div class="flex justify-around items-center">-->
<!--                            <span class="text-white text-center text-base antialiased leading-snug tracking-normal font-sans font-semibold">State</span>-->
<!--                            <svg class="h-4 w-4 text-white text-center" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">-->
<!--                                <path fill-rule="evenodd" d="M10 1L5 8h10l-5-7zm0 18l5-7H5l5 7z"/>-->
<!--                            </svg>-->
<!--                        </div>-->

<!--                    </th>-->
                    <th>
                        <div class="flex justify-center items-center">
                            <span class="text-white text-center text-base antialiased leading-snug tracking-normal font-sans font-semibold">Age</span>
                            <svg class="h-4 w-4 text-white text-center" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 1L5 8h10l-5-7zm0 18l5-7H5l5 7z"/>
                            </svg>
                        </div>
                    </th>
                </tr>
                <tr v-for="index in 10" :key="index">
                    <td class="h-8 text-center border-b border-gray-200 text-sm text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal">Nitish</td>
                    <td class="h-8 text-center border-b border-gray-200 text-sm text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal">Kumar</td>
                    <td class="h-8 text-center border-b border-gray-200 text-sm text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal">Super Admin</td>
                    <td class="h-8 text-center border-b border-gray-200 text-sm text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal">nitish@nitseditor.com</td>
<!--                    <td class="h-8 text-center border-b border-gray-200 text-sm text-gray-700 antialiased leading-tight tracking-normal font-sans font-normal">Mumbai</td>-->
<!--                    <td class="h-8 text-center border-b border-gray-200 text-sm text-gray-700 antialiased leading-tight tracking-normal font-sans font-normal">Maharastra</td>-->
                    <td class="h-8 text-center border-b border-gray-200 text-sm text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal">33</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseTableTwo"
    }
</script>

<style scoped>

</style>