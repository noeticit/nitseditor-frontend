<template>
    <div class="h-screen w-screen flex-col bg-gray-100">
        <div class="pl-3 pt-3">
            <img class="h-16" src="/nits-assets/logo.png" alt="NitsEditor Logo">
        </div>
        <div class="p-6 flex-grow">
            <div class="flex item-center justify-center">
                <div class="hidden md:block md:w-1/2 bg-gray-100">
                    <img class="h-auto w-auto object-fill object-center" src="/nits-assets/images/login_2.png" alt="">
                </div>
                <div class="p-4 md:w-1/2 md:max-w-lg justify-center">
                    <div class="bg-white rounded-lg shadow-lg p-6 min-w-full h-auto justify-center">
                        <h4 class="mb-10 font-semibold text-center text-lg text-gray-800">Login to your account</h4>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Your email">
                        <input class="mt-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Your password">
                        <div class="mt-4 text-center text-gray-500 text-xs">
                            Or sign in with:
                        </div>
                        <div class="mt-1 flex text-center items-center justify-center">
                            <svg class="bg-teal-500 ml-2 h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path fill="#FFF" d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2z"/>
                            </svg>
                            <svg class="bg-teal-500 ml-2 h-8 w-8"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path fill="#FFF" d="M1.989 5.589c0 1.494.499 2.572 1.482 3.205.806.52 1.74.598 2.226.598.118 0 .213-.006.279-.01 0 0-.154 1.004.59 1.996h-.034c-1.289 0-5.493.269-5.493 3.727 0 3.516 3.861 3.695 4.636 3.695.061 0 .097-.002.097-.002.008 0 .063.002.158.002.497 0 1.782-.062 2.975-.643 1.548-.75 2.333-2.059 2.333-3.885 0-1.764-1.196-2.814-2.069-3.582-.533-.469-.994-.873-.994-1.266 0-.4.337-.701.762-1.082.689-.615 1.339-1.492 1.339-3.15 0-1.457-.189-2.436-1.354-3.057.121-.062.551-.107.763-.137.631-.086 1.554-.184 1.554-.699V1.2H6.64c-.046.002-4.651.172-4.651 4.389zm7.424 9.013c.088 1.406-1.115 2.443-2.922 2.574-1.835.135-3.345-.691-3.433-2.096-.043-.676.254-1.336.835-1.863.589-.533 1.398-.863 2.278-.928.104-.006.207-.012.31-.012 1.699.001 2.849.999 2.932 2.325zM8.212 4.626c.451 1.588-.23 3.246-1.316 3.553a1.417 1.417 0 01-.384.052c-.994 0-1.979-1.006-2.345-2.393-.204-.776-.187-1.458.047-2.112.229-.645.643-1.078 1.163-1.225.125-.035.254-.053.385-.053 1.2 0 1.972.498 2.45 2.178zM16 8V5h-2v3h-3v2h3v3h2v-3h3V8h-3z"/>
                            </svg>
                            <svg class="bg-teal-500 ml-2 h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path fill="#FFF" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm2.577 13.741a5.508 5.508 0 01-1.066.395 4.543 4.543 0 01-1.031.113c-.42 0-.791-.055-1.114-.162a2.373 2.373 0 01-.826-.459 1.651 1.651 0 01-.474-.633c-.088-.225-.132-.549-.132-.973V9.16H6.918V7.846c.359-.119.67-.289.927-.512.257-.221.464-.486.619-.797.156-.31.263-.707.322-1.185h1.307v2.35h2.18V9.16h-2.18v2.385c0 .539.028.885.085 1.037a.7.7 0 00.315.367c.204.123.437.185.697.185.466 0 .928-.154 1.388-.461v1.468h-.001z"/>
                            </svg>
                        </div>
                        <div class="mt-4 text-center">
                            <router-link to="/dashboard" class="inline-block px-4 py-2 rounded-lg shadow-md bg-teal-500 hover:bg-teal-400 focus:outline-none focus:shadow-outline text-white text-sm tracking-wider font-semibold">Sign in</router-link>
                        </div>
                        <div class="mt-1 text-center text-gray-500 text-xs">
                            Don't have account? <a href="">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-gray-100 fixed bottom-0 w-full">
            <div class="flex items-center justify-between px-2 py-2">
                <p class="text-center text-gray-500 text-xs font-semibold">&copy;2020 Noetic IT Services Pvt. Ltd.</p>
                <div>
                    <a href="#" class="text-center text-gray-500 text-xs font-semibold">About Us</a>
                    <a href="#" class="text-center text-gray-500 text-xs font-semibold">Disclaimer</a>
                    <a href="#" class="text-center text-gray-500 text-xs font-semibold">Support</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>

</style>
