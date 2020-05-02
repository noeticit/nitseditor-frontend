<template>
    <div>
        <div class="flex">
            <ul class=" flex border-b">
                <li class="-mb-px mr-1">
                    <a @click.prevent="showTab('list')" class="bg-white inline-block focus:border-gray-500 border-t focus:border-shadow border-r rounded-t py-2 px-4 text-gray-700 font-semibold" href="#">

                        <span class="font-sans antialiased text-base">List</span>
                    </a>
                </li>
                <li class="mr-1">
                    <a @click.prevent="showTab('analytics')" class="bg-white inline-block py-2 px-4 text-gray-700 hover:text-blue-darker font-semibold" href="#">

                        <span class="font-sans antialiased text-base">Analytics</span>
                    </a>
                </li>
                <li class="mr-1">
                    <a @click.prevent="showTab('location')" class="bg-white inline-block py-2 px-4 text-gray-700 hover:text-blue-darker font-semibold" href="#">

                        <span class="font-sans antialiased text-base">Location</span>
                    </a>
                </li>
                <li class="mr-1">
                    <a @click.prevent="showTab('active')"  class="bg-white inline-block py-2 px-4 text-gray-700 hover:text-blue-darker font-semibold" href="#">

                        <span class=" font-sans antialiased text-base">Active</span>
                    </a>
                </li>
                <li class="mr-1">
                    <a @click.prevent="showTab('download')"  class="bg-white inline-block py-2 px-4 text-gray-700 hover:text-blue-darker font-semibold" href="#">

                        <span class=" font-sans antialiased text-base">Contact</span>
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
    // export default {
    //     name: "BasebasicTab"
    // }
</script>

<style scoped>

</style>