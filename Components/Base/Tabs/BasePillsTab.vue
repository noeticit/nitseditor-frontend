<template>
    <div>
        <div class="flex">
            <ul class=" flex ">
                <li class="-mb-px mr-1">

                    <a @click.prevent="showTab('list')" class="bg-white inline-block py-2 px-4 text-gray-700 font-semibold" href="#">
                        <button class="bg-blue-500 text-white text-center text-base w-24 h-10 rounded">

                            <span class="font-sans antialiased font-semibold text-lg">List</span>
                        </button>
                    </a>
                </li>
                <li class="mr-1">
                    <a @click.prevent="showTab('analytics')" class="bg-white inline-block py-2 px-4 text-gray-700 hover:text-blue-darker font-semibold" href="#">
                        <button class="bg-blue-500 text-white text-center text-base w-32 h-10 rounded">

                            <span class="font-sans antialiased font-semibold text-lg">Analytics</span>
                        </button>
                    </a>
                </li>
                <li class="mr-1">
                    <a @click.prevent="showTab('location')" class="bg-white inline-block py-2 px-4 text-gray-700 hover:text-blue-darker font-semibold" href="#">
                        <button class="bg-blue-500 text-white text-center text-base w-32 h-10 rounded">

                            <span class="font-sans antialiased font-semibold text-lg">Location</span>
                        </button>
                    </a>
                </li>
                <li class="mr-1">
                    <a @click.prevent="showTab('active')"  class="bg-white inline-block py-2 px-4 text-gray-700 hover:text-blue-darker font-semibold" href="#">
                        <button class="bg-blue-500 text-white text-center text-base w-24 h-10 rounded">

                            <span class="font-sans antialiased font-semibold text-lg">Active</span>
                        </button>
                    </a>
                </li>
                <li class="mr-1">
                    <a @click.prevent="showTab('download')"  class="bg-white inline-block py-2 px-4 text-gray-700 hover:text-blue-darker font-semibold" href="#">
                        <button class="bg-blue-500 text-white text-center text-base w-32 h-10 rounded">

                            <span class=" font-sans antialiased font-semibold text-lg">Contact</span>
                        </button>
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <p v-show="list">hello list</p>
            <p v-show="analytics">hello analytics</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BasePillsTab"
    }
</script>

<style scoped>

</style>