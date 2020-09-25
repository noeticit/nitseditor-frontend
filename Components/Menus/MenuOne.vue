<template>
    <div class="overflow-y-auto">
        <div class="mb-24">
            <div class="px-2 mb-2 text-sm text-gray-700 antialiased leading-relaxed tracking-normal uppercase font-semibold">Content</div>
            <router-link to="/nits-admin/dashboard" class="px-4 mb-1 flex justify-start items-center curser-pointer" @mouseover="hover = 'dashboard'" @mouseleave="hover = ''">
                <div v-if="activeClass('dashboard') || hoverClass('dashboard')" class="py-1 h-4 -m-1 mr-1 border-l-2 border-teal-600 curser-pointer"></div>
                <svg :class="activeClass('dashboard') || hoverClass('dashboard') ?  'ml-2 h-4 w-4 curser-pointer text-teal-500' : 'ml-2 h-4 w-4 curser-pointer text-gray-700'" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 100 20 10 10 0 000-20zm8 10c0 2 0 4-2 5v-2-2l-1-2-2-2c-1-2 2-2 1-3 0-1-2 1-2-1l1-1c3 1 5 4 5 8zM9 2L8 3 7 4 5 6l1 1h1c1 0 4 0 3 3l-2 2v4l-2-2-1-2-1-2 1-2-3-1c1-3 4-5 7-5zM7 18l1-1h2l2-1 3 1a8 8 0 01-8 1z"/>
                </svg>
                <div :class="activeClass('dashboard') || hoverClass('dashboard') ?  'active-menu-text' : 'not-active-menu-text'">Dashboard</div>
            </router-link>
            <router-link to="/nits-admin/pages" class="px-4 mb-1 flex justify-start items-center curser-pointer" @mouseover="hover = 'pages'" @mouseleave="hover = ''">
                <div v-if="activeClass('pages') || hoverClass('pages')" class="py-1 h-4 -m-1 mr-1 border-l-2 border-teal-600"></div>
                <svg :class="activeClass('pages') || hoverClass('pages') ?  'ml-2 h-4 w-4 text-teal-500' : 'ml-2 h-4 w-4 text-gray-700'" fill="currentColor"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M14 5h-4v2h4V5zm0 3h-4v1h4V8zM9 5H6v4h3V5zm0 6h5v-1H9v1zm3 2h2v-1h-2v1zm2 1H6v1h8v-1zm-3-2H6v1h5v-1zm-3-2H6v1h2v-1zm9-9H3L2 2v16l1 1h14l1-1V2l-1-1zm-1 16H4V3h12v14z"/>
                </svg>
                <div :class="activeClass('pages') || hoverClass('pages') ?  'active-menu-text' : 'not-active-menu-text'">Pages</div>
            </router-link>
            <div class="px-2 mb-1 mt-4 text-sm text-gray-700 antialiased leading-relaxed tracking-normal uppercase font-semibold">Addons</div>
            <router-link to="/nits-admin/themes" class="px-4 mb-1 flex justify-start items-center curser-pointer" @mouseover="hover = 'themes'" @mouseleave="hover = ''">
                <div v-if="activeClass('themes') || hoverClass('themes')" class="py-1 h-4 -m-1 mr-1 border-l-2 border-teal-600"></div>
                <svg :class="activeClass('themes') || hoverClass('themes') ?  'ml-2 h-4 w-4 text-teal-500' : 'ml-2 h-4 w-4 text-gray-700'" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M11 1C6 1 3 3 3 4l1 3c-3 1-4 3-3 4 0 1 1 3 4 3l5-2v-1a1 1 0 111 2c-1 2-4 3-6 3v1s2 2 6 2 6-2 6-2l2-13c0-1-3-3-8-3zM2 11c0-1 0-2 2-2a6085 6085 0 00-2 2zm9-5C7 6 5 5 5 4c0 0 2-2 6-2s6 2 6 2c0 1-2 2-6 2z"/>
                </svg>
                <div :class="activeClass('themes') || hoverClass('themes') ?  'active-menu-text' : 'not-active-menu-text'">Themes</div>
            </router-link>
            <router-link to="/nits-admin/plugins" class="px-4 mb-1 flex justify-start items-center curser-pointer" @mouseover="hover = 'plugins'" @mouseleave="hover = ''">
                <div v-if="activeClass('plugins') || hoverClass('plugins')" class="py-1 h-4 -m-1 mr-1 border-l-2 border-teal-600"></div>
                <svg :class="activeClass('plugins') || hoverClass('plugins') ?  'ml-2 h-4 w-4 text-teal-500' : 'ml-2 h-4 w-4 text-gray-700'" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6 7l1-5H3L1 7c0 1 1 2 3 2l2-2zm4 2l3-2-1-5H8L7 7l3 2zm5 1v4H5v-4a4 4 0 01-2 0v7l1 1h12l1-1v-7h-1-1zm4-3l-2-5h-4l1 5 2 2c2 0 3-1 3-2z"/>
                </svg>
                <div :class="activeClass('plugins') || hoverClass('plugins') ?  'active-menu-text' : 'not-active-menu-text'">Plugins</div>
            </router-link>
            <router-link to="/nits-admin/form" class="px-4 mb-1 flex justify-start items-center curser-pointer" @mouseover="hover = 'form'" @mouseleave="hover = ''">
                <div v-if="activeClass('form') || hoverClass('form')" class="py-1 h-4 -m-1 mr-1 border-l-2 border-teal-600"></div>
                <svg :class="activeClass('form') || hoverClass('form') ?  'ml-2 h-4 w-4 text-teal-500' : 'ml-2 h-4 w-4 text-gray-700'" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6 7l1-5H3L1 7c0 1 1 2 3 2l2-2zm4 2l3-2-1-5H8L7 7l3 2zm5 1v4H5v-4a4 4 0 01-2 0v7l1 1h12l1-1v-7h-1-1zm4-3l-2-5h-4l1 5 2 2c2 0 3-1 3-2z"/>
                </svg>
                <div :class="activeClass('form') || hoverClass('form') ?  'active-menu-text' : 'not-active-menu-text'">Forms</div>
            </router-link>
            <router-link to="/nits-admin/pages" class="px-4 mb-1 flex justify-start items-center curser-pointer" @mouseover="hover = 'pages'" @mouseleave="hover = ''">
                <div v-if="activeClass('pages') || hoverClass('pages')" class="py-1 h-4 -m-1 mr-1 border-l-2 border-teal-600"></div>
                <svg :class="activeClass('pages') || hoverClass('pages') ?  'ml-2 h-4 w-4 text-teal-500' : 'ml-2 h-4 w-4 text-gray-700'" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6 7l1-5H3L1 7c0 1 1 2 3 2l2-2zm4 2l3-2-1-5H8L7 7l3 2zm5 1v4H5v-4a4 4 0 01-2 0v7l1 1h12l1-1v-7h-1-1zm4-3l-2-5h-4l1 5 2 2c2 0 3-1 3-2z"/>
                </svg>
                <div :class="activeClass('pages') || hoverClass('pages') ?  'active-menu-text' : 'not-active-menu-text'">Pages</div>
            </router-link>
            <div class="px-2 mb-1 mt-4 text-sm text-gray-700 antialiased leading-relaxed tracking-normal uppercase font-semibold">Configure</div>
            <router-link to="/nits-admin/menus" class="px-4 mb-1 flex justify-start items-center curser-pointer" @mouseover="hover = 'menus'" @mouseleave="hover = ''">
                <div v-if="activeClass('menus') || hoverClass('menus')" class="py-1 h-4 -m-1 mr-1 border-l-2 border-teal-600"></div>
                <svg :class="activeClass('menus') || hoverClass('menus') ?  'ml-2 h-4 w-4 text-teal-500' : 'ml-2 h-4 w-4 text-gray-700'" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 2H2L0 4v12l2 2h16l2-2V4l-2-2zM5 4a1 1 0 11-1 1 1 1 0 011-1zM2 5a1 1 0 111 0 1 1 0 01-1 0zm16 11H2V7h16v9zm0-11H6V4h12v1z"/>
                </svg>
                <div :class="activeClass('menus') || hoverClass('menus') ?  'active-menu-text' : 'not-active-menu-text'">Menus</div>
            </router-link>
            <router-link to="/nits-admin/users" class="px-4 mb-1 flex justify-start items-center curser-pointer" @mouseover="hover = 'users'" @mouseleave="hover = ''">
                <div v-if="activeClass('users') || hoverClass('users')" class="py-1 h-4 -m-1 mr-1 border-l-2 border-teal-600"></div>
                <svg :class="activeClass('users') || hoverClass('users') ?  'ml-2 h-4 w-4 text-teal-500' : 'ml-2 h-4 w-4 text-gray-700'" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16 19c0-2-2-3-4-4s-3-2-3-4l1-2 1-2-1-1 1-1c0-1-1-3-3-3l1-2C6 0 6 1 5 2L3 5l1 1-1 1 1 2 1 2c0 2 0 3-2 4s-3 2-3 4v1h16v-1zm3-6c-2 0-2-1-2-2l1-1V9 8 7c0-1 0-2-2-2s-3 1-3 2l1 1-1 1 1 1 1 1-2 2v1c1 0 4 1 4 4h3v-2l-1-3z"/>
                </svg>
                <div :class="activeClass('users') || hoverClass('users') ?  'active-menu-text' : 'not-active-menu-text'">Users</div>
            </router-link>
            <router-link to="/nits-admin/settings" class="px-4 mb-1 flex justify-start items-center curser-pointer" @mouseover="hover = 'settings'" @mouseleave="hover = ''">
                <div v-if="activeClass('settings') || hoverClass('settings')" class="py-1 h-4 -m-1 mr-1 border-l-2 border-teal-600"></div>
                <svg :class="activeClass('settings') || hoverClass('settings') ?  'ml-2 h-4 w-4 text-teal-500' : 'ml-2 h-4 w-4 text-gray-700'" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M17 10l1-2V6l-3-1-1-3h-1l-3 1-3-1H6L5 5 2 6v2l1 2-1 3v1l3 1 1 3h1l3-1 3 1h1l1-3 3-1v-2l-1-2zm-7 4a4 4 0 110-8 4 4 0 010 8z"/>
                </svg>
                <div :class="activeClass('settings') || hoverClass('settings') ?  'active-menu-text' : 'not-active-menu-text'">Settings</div>
            </router-link>
            <router-link to="/nits-admin/permissions" class="px-4 mb-1 flex justify-start items-center curser-pointer" @mouseover="hover = 'permissions'" @mouseleave="hover = ''">
                <div v-if="activeClass('permissions') || hoverClass('permissions')" class="py-1 h-4 -m-1 mr-1 border-l-2 border-teal-600"></div>
                <svg :class="activeClass('permissions') || hoverClass('permissions') ?  'ml-2 h-4 w-4 text-teal-500' : 'ml-2 h-4 w-4 text-gray-700'" fill="currentColor"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M17.691 4.725c-.503-2.977-3.22-4.967-6.069-4.441C8.772.809 6.366 3.1 6.869 6.079c.107.641.408 1.644.763 2.365l-5.175 7.723c-.191.285-.299.799-.242 1.141l.333 1.971a.612.612 0 00.7.514l1.516-.281c.328-.059.744-.348.924-.639l2.047-3.311.018-.022 1.386-.256 2.39-3.879c.785.139 1.912.092 2.578-.031 2.848-.526 4.087-3.67 3.584-6.649zm-2.525 1.527c-.784 1.17-1.584.346-2.703-.475-1.119-.818-2.135-1.322-1.352-2.492.784-1.17 2.326-1.455 3.447-.635 1.12.819 1.391 2.432.608 3.602z"/>
                </svg>
                <div :class="activeClass('permissions') || hoverClass('permissions') ?  'active-menu-text' : 'not-active-menu-text'">Permissions</div>
            </router-link>
            <router-link to="/nits-admin/model" class="px-4 mb-1 flex justify-start items-center curser-pointer" @mouseover="hover = 'model'" @mouseleave="hover = ''">
                <div v-if="activeClass('model') || hoverClass('model')" class="py-1 h-4 -m-1 mr-1 border-l-2 border-teal-600"></div>
                <svg :class="activeClass('model') || hoverClass('model') ?  'ml-2 h-4 w-4 text-teal-500' : 'ml-2 h-4 w-4 text-gray-700'" fill="currentColor"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M17.691 4.725c-.503-2.977-3.22-4.967-6.069-4.441C8.772.809 6.366 3.1 6.869 6.079c.107.641.408 1.644.763 2.365l-5.175 7.723c-.191.285-.299.799-.242 1.141l.333 1.971a.612.612 0 00.7.514l1.516-.281c.328-.059.744-.348.924-.639l2.047-3.311.018-.022 1.386-.256 2.39-3.879c.785.139 1.912.092 2.578-.031 2.848-.526 4.087-3.67 3.584-6.649zm-2.525 1.527c-.784 1.17-1.584.346-2.703-.475-1.119-.818-2.135-1.322-1.352-2.492.784-1.17 2.326-1.455 3.447-.635 1.12.819 1.391 2.432.608 3.602z"/>
                </svg>
                <div :class="activeClass('model') || hoverClass('model') ?  'active-menu-text' : 'not-active-menu-text'">Models</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MenuOne",
        props: {
            active: {
                type: String,
                default: ''
            },
        },
        data() {
            return {
                hover: '',
            }
        },
        methods: {
            activeClass(menu) {
                return this.active === menu;
            },
            hoverClass(menu) {
                return this.hover === menu;
            }
        }
    }
</script>

<style scoped>

</style>