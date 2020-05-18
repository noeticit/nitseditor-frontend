<template>
    <div class=" sm:flex justify-center items-center">
        <div class="sm:w-1/2 m-4 p-2 items-center">
            <div class="text-center leading-tight text-gray-700 text-2xl font-sans antialiased tracking-tight font-semibold">FILTER THE COURSES</div>
            <div class="mt-2 text-left leading-tight text-gray-600 text-sm font-sans antialiased tracking-wide font-light">Look through courses and browse them by category. With one click mark the desired category on the sidebar and apply filtering without reloading the page and interfering its display.
                Enable course filtering by price, category, subcategory, status, levels, and ratings.</div>
            <div class="mt-3 flex justify-between items-center">
                <div class="m-3 p-2 mt-10 w-1/2 h">
                    <img src="/project-assets/images/filter-courses.png">
                </div>
                <div class="m-3 p-2 w-1/2 h">
                    <div class="inline-block text-left">
                        <!--                        <svg class="text-teal-600 fill-current h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 15l-2 4v1l1-1 2-3a8 8 0 01-1-1zm9-1v-1l-1-3 1-2 3-1c1-2 0-4-2-5-3-2-5-2-6-1v3L8 6 4 7H3v1c-1 2 0 5 3 7s6 2 7 0l1-1zM13 4l-1-2h2l1 2h-2z"/></svg>-->
                    </div>
                    <div class="text-left leading-tight text-gray-700 text-lg font-sans antialiased tracking-wide font-medium">COURSE WISHLIST</div>
                    <div class="mt-3 text-left leading-snug text-gray-600 text-sm font-serif antialiased tracking-wide font-normal">
                        Apply the “like” button on your website, allow users to add courses they like to the wishlist for later purchase.
                    </div>
                    <button class="inline-block ml-10 mt-10 max-w-xs w-32 px-4 py-4 rounded-full shadow-md bg-pink-500 hover:bg-teal-400 focus:outline-none focus:shadow-outline text-white text-sm tracking-wider font-semibold">
                        Live Preview
                    </button>
                </div>
            </div>

        </div>
        <div class="sm:w-1/2 m-4 p-4">
            <img src="/project-assets/images/lms_for_wordpress.png" >
        </div>


    </div>
</template>

<script>
    export default {
        name: "NitsFilterCourses"
    }
</script>

<style scoped>

</style>