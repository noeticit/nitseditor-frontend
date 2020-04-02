<template>
    <dashboard-layout-one active="plugins">
        <base-bread-crumb-one name="Plugins" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>
        <div class="float-right mr-4 mb-4">
            <router-link to="/nits-admin/plugins/add-plugins" class="inline-block max-w-xs w-26 px-4 py-2 border border-solid border-teal-600 rounded-md shadow-md
            hover:bg-gray-400 hover:text-teal-800 focus:outline-none focus:shadow-outline text-teal-600 text-sm tracking-wider font-semibold">Add Plugins</router-link>
        </div>
        <div class="flex w-full justify-center">
<!--            <div class="m-2 w-1/4">-->
<!--                <search-filters></search-filters>-->
<!--            </div>-->
            <div class="m-2 w-full">
                <div class="flex flex-col">
                    <div class="-my-2 py-2 overflow-x-auto ">
                        <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                            <table class="min-w-full">
                                <thead>
                                <tr class="bg-blue-500">
                                    <th class="px-6 py-3 border-b border-gray-200 text-left text-white tracking-wider">
                                        <input type="checkbox" name="checkbox">
                                    </th>
                                    <th class="px-6 py-3 border-b border-gray-200 text-left text-white tracking-wider">
                                        Plugins
                                    </th>
                                    <th class="px-6 py-3 border-b border-gray-200 text-left text-white tracking-wider">
                                        Details
                                    </th>
                                    <th class="px-6 py-3 border-b border-gray-200 text-left text-white">
                                        Action
                                    </th>
                                </tr>
                                </thead>
                                <tbody class="bg-white">
                                <tr>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
                                        <div class="flex items-center">
                                            <input type="checkbox" name="checkbox">
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 h-10 w-10">
                                                <img class="h-10 w-10 rounded-lg" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                            </div>
<!--                                            <div class="ml-4">-->
<!--                                                <div class="text-sm leading-5 font-medium text-gray-900">Bernard Lane</div>-->
<!--                                                <div class="text-sm leading-5 text-gray-500">bernardlane@example.com</div>-->
<!--                                            </div>-->
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div class="text-sm leading-5 text-gray-900">Akismet Anti-Spam</div>
                                        <div class="text-sm leading-5 text-gray-500">Used by millions, Akismet is quite possibly the best way in the world to protect your blog from spam.</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <a href="#" class="inline-flex text-xs leading-5 font-semibold text-green-800">Activate</a>
                                        |
                                        <a href="#" class="text-red-800 hover:text-indigo-900 text-xs font-semibold">Delete</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
                                        <div class="flex items-center">
                                            <input type="checkbox" name="checkbox">
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 h-10 w-10">
                                                <img class="h-10 w-10 rounded-lg" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                            </div>
<!--                                            <div class="ml-4">-->
<!--                                                <div class="text-sm leading-5 font-medium text-gray-900">Bernard Lane</div>-->
<!--                                                <div class="text-sm leading-5 text-gray-500">bernardlane@example.com</div>-->
<!--                                            </div>-->
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div class="text-sm leading-5 text-gray-900">Akismet Anti-Spam</div>
                                        <div class="text-sm leading-5 text-gray-500">Used by millions, Akismet is quite possibly the best way in the world to protect your blog from spam.</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <a href="#" class="inline-flex text-xs leading-5 font-semibold text-green-800">Activate</a>
                                        |
                                        <a href="#" class="text-red-800 hover:text-indigo-900 text-xs font-semibold">Delete</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
                                        <div class="flex items-center">
                                            <input type="checkbox" name="checkbox">
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 h-10 w-10">
                                                <img class="h-10 w-10 rounded-lg" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                            </div>
<!--                                            <div class="ml-4">-->
<!--                                                <div class="text-sm leading-5 font-medium text-gray-900">Bernard Lane</div>-->
<!--                                                <div class="text-sm leading-5 text-gray-500">bernardlane@example.com</div>-->
<!--                                            </div>-->
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div class="text-sm leading-5 text-gray-900">Akismet Anti-Spam</div>
                                        <div class="text-sm leading-5 text-gray-500">Used by millions, Akismet is quite possibly the best way in the world to protect your blog from spam.</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <a href="#" class="inline-flex text-xs leading-5 font-semibold text-green-800">Activate</a>
                                        |
                                        <a href="#" class="text-red-800 hover:text-indigo-900 text-xs font-semibold">Delete</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
                                        <div class="flex items-center">
                                            <input type="checkbox" name="checkbox">
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 h-10 w-10">
                                                <img class="h-10 w-10 rounded-lg" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                            </div>
<!--                                            <div class="ml-4">-->
<!--                                                <div class="text-sm leading-5 font-medium text-gray-900">Bernard Lane</div>-->
<!--                                                <div class="text-sm leading-5 text-gray-500">bernardlane@example.com</div>-->
<!--                                            </div>-->
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div class="text-sm leading-5 text-gray-900">Akismet Anti-Spam</div>
                                        <div class="text-sm leading-5 text-gray-500">Used by millions, Akismet is quite possibly the best way in the world to protect your blog from spam.</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <a href="#" class="inline-flex text-xs leading-5 font-semibold text-green-800">Activate</a>
                                        |
                                        <a href="#" class="text-red-800 hover:text-indigo-900 text-xs font-semibold">Delete</a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </dashboard-layout-one>
</template>

<script>
    export default {
        name: "plugins",
        data() {
            return {
                breadcrumbs: ['Plugins', 'Second Link', 'Third Link', 'Fourth Link'],
            }
        },
        components: {
            'DashboardLayoutOne': () => import('./../Layouts/Dashboard/LayoutOne'),
        }
    }
</script>

<style scoped>

</style>