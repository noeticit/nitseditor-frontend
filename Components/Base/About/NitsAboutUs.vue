<template>
    <div class="hero">
        <div class="relative ">
            <img class="w-screen" src="/nits-assets/images/banner-bg.png">
            <div class="absolute top-0 mt-48 ml-64 pl-64 text-5xl font-bold text-white font-serif">
                <div class="ml-32 pl-3 "><span class="text-black mr-3 text-purple-600">About</span> Us</div>
            </div>
        </div>
        <div class="px-24 py-2 mb-5">
            <nits-grid-col-three
                    heading1="WHY CHOOSE US."
                    heading2="OUR MISSION."
                    heading3="WHAT WE DO."
            ></nits-grid-col-three>
        </div>
        <div>
            <nits-grid-col-four></nits-grid-col-four>
        </div>
        <div class="flex">
            <div class="w-1/2 ">
                <img src="/project-assets/images/nitish.jpg">
            </div>
            <div class="flex mt-5 ">
                <div class="w-1/2 px-12 mt-8 ">
                    <div class="text-teal-500 italic py-4 text-left leading-tight text-lg font-sans antialiased tracking-wide font-medium">CEO & Co-Founder</div>
                    <div class="text-left leading-tight mb-5 text-gray-700 text-2xl font-sans antialiased tracking-tight font-semibold">Nitish Kumar</div>
                    <div class="mt-6 text-left pr-12 leading-snug text-gray-600 text-sm font-serif antialiased tracking-wide font-normal">
                        Employment respond committed meaningful fight against oppression social challenges rural legal aid
                        governance. Meaningful work, implementation, process cooperation, campaign inspire.
                    </div>
                    <div class="mt-8 text-left leading-snug text-gray-600 text-sm font-serif antialiased tracking-wide font-normal">
                        Advancement, promising development John Lennon, our ambitions involvement underprivileged billionaire philanthropy save the world transform.
                        Carbon rights maintain healthcare emergent, implementation inspire social change solve clean water livelihoods.
                    </div>
                    <div class="flex mt-8 px-5 py-5">
                        <div class="inline-block hover:bg-blue-800 bg-gray-200  rounded-full cursor-pointer hover:text-white text-blue-800 ">
                            <svg class="h-4 w-4 my-3 mx-3 " xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2z"/>
                            </svg>
                        </div>

                        <div class="inline-block cursor-pointer bg-gray-200 hover:bg-teal-600 hover:text-white rounded-full text-teal-600">
                            <svg class="h-4 w-4  my-3 mx-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M17.316 6.246c.008.162.011.326.011.488 0 4.99-3.797 10.742-10.74 10.742-2.133 0-4.116-.625-5.787-1.697a7.577 7.577 0 005.588-1.562 3.779 3.779 0 01-3.526-2.621 3.858 3.858 0 001.705-.065 3.779 3.779 0 01-3.028-3.703v-.047a3.766 3.766 0 001.71.473 3.775 3.775 0 01-1.168-5.041 10.716 10.716 0 007.781 3.945 3.813 3.813 0 01-.097-.861 3.773 3.773 0 013.774-3.773 3.77 3.77 0 012.756 1.191 7.602 7.602 0 002.397-.916 3.789 3.789 0 01-1.66 2.088 7.55 7.55 0 002.168-.594 7.623 7.623 0 01-1.884 1.953z"/>
                            </svg>
                        </div>

                        <div class="inline-block hover:bg-black bg-gray-200 cursor-pointer hover:text-white rounded-full text-black ">
                            <svg class="h-4 w-4 my-3 mx-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M13.18 11.309c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799zm4.526-4.683c.149-.365.155-2.439-.635-4.426 0 0-1.811.199-4.551 2.08-.575-.16-1.548-.238-2.519-.238-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002 1.732-.002c1.506 0 7.467-.115 7.467-7.301 0-1.652-.566-2.863-1.494-3.871zm-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115 0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531.735.676 1.045 1.49 1.045 2.369 0 3.666-2.937 4.115-6.709 4.115zm-3.207-5.606c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801.719 0 1.301-.807 1.301-1.801 0-.992-.582-1.799-1.301-1.799z"/>
                            </svg>
                        </div>

                        <div class="inline-block hover:bg-red-600 bg-gray-200 hover:text-white cursor-pointer rounded-full text-red-700">
                            <svg class="h-4 w-4 my-3 mx-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M1.989 5.589c0 1.494.499 2.572 1.482 3.205.806.52 1.74.598 2.226.598.118 0 .213-.006.279-.01 0 0-.154 1.004.59 1.996h-.034c-1.289 0-5.493.269-5.493 3.727 0 3.516 3.861 3.695 4.636 3.695.061 0 .097-.002.097-.002.008 0 .063.002.158.002.497 0 1.782-.062 2.975-.643 1.548-.75 2.333-2.059 2.333-3.885 0-1.764-1.196-2.814-2.069-3.582-.533-.469-.994-.873-.994-1.266 0-.4.337-.701.762-1.082.689-.615 1.339-1.492 1.339-3.15 0-1.457-.189-2.436-1.354-3.057.121-.062.551-.107.763-.137.631-.086 1.554-.184 1.554-.699V1.2H6.64c-.046.002-4.651.172-4.651 4.389zm7.424 9.013c.088 1.406-1.115 2.443-2.922 2.574-1.835.135-3.345-.691-3.433-2.096-.043-.676.254-1.336.835-1.863.589-.533 1.398-.863 2.278-.928.104-.006.207-.012.31-.012 1.699.001 2.849.999 2.932 2.325zM8.212 4.626c.451 1.588-.23 3.246-1.316 3.553a1.417 1.417 0 01-.384.052c-.994 0-1.979-1.006-2.345-2.393-.204-.776-.187-1.458.047-2.112.229-.645.643-1.078 1.163-1.225.125-.035.254-.053.385-.053 1.2 0 1.972.498 2.45 2.178zM16 8V5h-2v3h-3v2h3v3h2v-3h3V8h-3z"/>
                            </svg>
                        </div>

                    </div>

                </div>
                <div class="w-1/2 mt-24 px-6">
                    <base-sizing-progress-bar></base-sizing-progress-bar>
                </div>

            </div>
        </div>

        <div class="flex h-auto bg-gray-100">
            <div class="flex mt-5 ">
                <div class="w-1/2 px-12 py-10">
                    <div class="text-teal-500 italic py-4 text-left leading-tight text-lg font-sans antialiased tracking-wide font-medium">Web Developer</div>
                    <div class="text-left leading-tight mb-5 text-gray-700 text-2xl font-sans antialiased tracking-tight font-semibold">Abuzaid Sayyad</div>
                    <div class="mt-6 text-left pr-12 leading-snug text-gray-600 text-sm font-serif antialiased tracking-wide font-normal">
                        Employment respond committed meaningful fight against oppression social challenges rural legal aid
                        governance. Meaningful work, implementation, process cooperation, campaign inspire.
                    </div>
                    <div class="mt-8 text-left leading-snug text-gray-600 text-sm font-serif antialiased tracking-wide font-normal">
                        Advancement, promising development John Lennon, our ambitions involvement underprivileged billionaire philanthropy save the world transform.
                        Carbon rights maintain healthcare emergent, implementation inspire social change solve clean water livelihoods.
                    </div>
                    <div class="flex mt-8 px-5 py-5">
                        <div class="inline-block hover:bg-blue-800 bg-gray-200  rounded-full cursor-pointer hover:text-white text-blue-800 ">
                            <svg class="h-4 w-4 my-3 mx-3 " xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2z"/>
                            </svg>
                        </div>

                        <div class="inline-block cursor-pointer bg-gray-200 hover:bg-teal-600 hover:text-white rounded-full text-teal-600">
                            <svg class="h-4 w-4  my-3 mx-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M17.316 6.246c.008.162.011.326.011.488 0 4.99-3.797 10.742-10.74 10.742-2.133 0-4.116-.625-5.787-1.697a7.577 7.577 0 005.588-1.562 3.779 3.779 0 01-3.526-2.621 3.858 3.858 0 001.705-.065 3.779 3.779 0 01-3.028-3.703v-.047a3.766 3.766 0 001.71.473 3.775 3.775 0 01-1.168-5.041 10.716 10.716 0 007.781 3.945 3.813 3.813 0 01-.097-.861 3.773 3.773 0 013.774-3.773 3.77 3.77 0 012.756 1.191 7.602 7.602 0 002.397-.916 3.789 3.789 0 01-1.66 2.088 7.55 7.55 0 002.168-.594 7.623 7.623 0 01-1.884 1.953z"/>
                            </svg>
                        </div>

                        <div class="inline-block hover:bg-black bg-gray-200 cursor-pointer hover:text-white rounded-full text-black ">
                            <svg class="h-4 w-4 my-3 mx-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M13.18 11.309c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799zm4.526-4.683c.149-.365.155-2.439-.635-4.426 0 0-1.811.199-4.551 2.08-.575-.16-1.548-.238-2.519-.238-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002 1.732-.002c1.506 0 7.467-.115 7.467-7.301 0-1.652-.566-2.863-1.494-3.871zm-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115 0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531.735.676 1.045 1.49 1.045 2.369 0 3.666-2.937 4.115-6.709 4.115zm-3.207-5.606c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801.719 0 1.301-.807 1.301-1.801 0-.992-.582-1.799-1.301-1.799z"/>
                            </svg>
                        </div>
                    </div>

                </div>
                <div class="w-1/2 mt-24 px-6">
                    <base-sizing-progress-bar></base-sizing-progress-bar>
                </div>

            </div>
            <div class="w-1/2 ">
                <img class="" src="/project-assets/images/abz.jpg">
            </div>
        </div>
        <nits-says
        heading="WHAT CLIENTS SAY?"
        ></nits-says>
    </div>

</template>

<script>
    import NitsGridColThree from "../Grids/NitsGridColThree";
    export default {
        name: "NitsAboutUs",
        components: {NitsGridColThree}
    }
</script>

<style scoped>

</style>