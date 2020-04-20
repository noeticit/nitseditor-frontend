<template>
        <div class="m-2 ">
            <div class="bg-white mt-16 border border-gray rounded-lg shadow-lg mt-1 justify-center">
                <div class="flex justify-between border-solid border-b-2 p-2 text-center items-center h-16 text-bold">
                    <div class="text-left ml-4 text-xl antialiased leading-snug tracking-normal font-sans">General</div>
                </div>
                <div class="p-4">
                    <div class="mt-4 flex justify-center bg-white">
                        <div class="w-2/4">
                        <div class="m-2">
                            <div class="flex m-2 w-full">
                                    <label class="block text-gray-700 text-base font-semibold antialised ">Site Title</label>
                                    <input class="rounded-md p-4 form-input mt-1 ml-12 block w-full h-10 bg-gray-200" placeholder="Site Title" v-model="site_title">
                                    </input>
                                </div>
                            <div class="flex m-2 w-full">
                                    <label class="block text-gray-700 text-base font-semibold antialised ">Tagline</label>
                                    <input class="rounded-md p-4 form-input ml-12 block w-full h-10 bg-gray-200" placeholder="Tagline" type="tagline" v-model="tagline">
                                    </input>
                                </div>

                            <div class="flex m-2 w-full">
                                    <label class="block text-gray-700 text-base font-semibold antialised ">Administration Email Address</label>
                                    <input class="rounded-md p-4 form-input mt-1 ml-12 block w-full h-10 bg-gray-200" placeholder="Email Address" type="text" v-model="email">
                                    </input>
                                </div>
                            <div class="flex inline-block m-2 w-full">
                                    <label class="block text-gray-700 text-base font-semibold antialised ">New User Default Role</label>
                                <select v-model="city"   class="rounded-lg p-2 ml-12 border-gray-300 border bg-gray-200 focus:outline-none focus:shadow-outline w-full  h-10">
                                    <option value="" selected  >Role</option>
                                </select>
                                </div>
                            <div class="flex m-2 w-full">
                                    <label class="block text-gray-700 text-base font-semibold antialised ">Site Language</label>
                                <select v-model="city"   class="rounded-lg p-2 ml-12 border-gray-300 border bg-gray-200 focus:outline-none focus:shadow-outline w-full  h-10">
                                    <option value="" selected  >Language</option>
                                </select>
                                </div>
                            <div class="flex m-2 w-full">
                                    <label class="block text-gray-700 text-base font-semibold antialised ">Time Zone</label>
                                    <input class="rounded-md p-4 form-input mt-1  ml-12 block w-full h-10 bg-gray-200" placeholder="Time Zone" type="time" v-model="time_zone">
                                    </input>
                                </div>
                            <div class="flex m-2 w-full">
                                    <label class="block text-gray-700 text-base font-semibold antialised ">Date Format</label>
                                    <input class="rounded-md p-4 form-input mt-1 ml-12 block w-full h-10 bg-gray-200" placeholder="Date Format" type="date" v-model="date_format">
                                    </input>
                                </div>
                            <div class="flex m-2 w-full">
                                    <label class="block text-gray-700 text-base font-semibold antialised "> Time Format</label>
                                    <input class="rounded-md p-4 form-input mt-1 ml-12 block w-full h-10 bg-gray-200" placeholder="Time Format" type="time" v-model="time_format">
                                    </input>
                                </div>
                            <div class="flex m-2 w-full">
                                    <label class="block text-gray-700 text-base font-semibold antialised ">Week Starts On</label>
                                    <input class="rounded-md p-4 form-input mt-1 ml-12 block w-full h-10 bg-gray-200 " placeholder="Week Start On" type="date" v-model="week_start">
                                    </input>
                                </div>

                            </div>
                        </div>

                        </div>

                    </div>

                </div>
            </div>

</template>


<script>
    export default {
        name: "general"
    }
</script>

<style scoped>

</style>