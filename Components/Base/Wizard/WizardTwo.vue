<template>
    <div class="relative px-24 bg-gray-300 py-8 mb-10 w-full">
        <div class="flex-col  mt-1 min-h-full justify-center">
            <div class=" min-h-full text-center items-center">
                <div class="list-reset flex">
                    <button class="px-5 mr-2 bg-gray-200 focus:bg-white rounded focus:outline-none w-1/4 py-5 cursor-pointer focus:text-blue-500">
                        <span class=" hover:border-b hover:border-teal-500 inline-block py-2 px-4 text-teal-500 font-semibold" >Account Info</span>
                    </button>
                    <button class="w-1/4 mr-2 bg-gray-200 px-5 py-5 focus:bg-white rounded focus:outline-none cursor-pointer">
                        <span class="hover:border-b hover:border-teal-500  inline-block py-2 px-4 text-teal-500 font-semibold" >Address Info</span>
                    </button>
                    <button class="w-1/4 mr-2 bg-gray-200 px-5 rounded focus:bg-white py-5 focus:outline-none cursor-pointer">
                        <span class="hover:border-b hover:border-teal-500 inline-block py-2 px-4 text-teal-500 font-semibold" >Course Selection</span>
                    </button>
                    <button class="w-1/4 mr-2 bg-gray-200 mr-2 rounded focus:bg-white px-5 focus:outline-none py-5 cursor-pointer">
                        <span class=" hover:border-b hover:border-teal-500 inline-block py-2 px-4 text-teal-500 font-semibold" >Review and Submit</span>
                    </button>
                </div>
            </div>
            <div class="mb-3 relative pt-6 rounded-b shadow-lg bg-white border-black mx-2">
                <div style="height:578px; " class="ml-48 pl-10 mr-64 pr-32">
                    <div class="justify-between p-4 text-center items-center">
                        <div class="text-left text-lg focus:text-blue-500 font-semibold subpixel-antialiased capitalize text-gray-600 leading-snug tracking-normal">Fill Students Personal Details</div>
                    </div>
                    <div class="flex-col p-4 justify-start w-full">
                        <div class="mt-2 ml-2 block tracking-wide text-left text-teal-500 text-sm font-semibold mb-2">First Name</div>
                        <input class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Enter Your Name">
                    </div>
                    <div class="flex-col p-4 justify-start w-full">
                        <div class="mt-2 ml-2 block tracking-wide text-left text-teal-500 text-sm font-semibold mb-2">Last Name</div>
                        <input class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Enter Your Name">
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="flex-col p-4 justify-start w-full">
                            <div class="mt-2 ml-2 block tracking-wide text-left text-teal-500 text-sm font-semibold mb-2">State</div>
                            <input class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Enter Your State">
                        </div>
                        <div class="flex-col p-4 justify-start w-full">
                            <div class="mt-2 ml-2 block tracking-wide text-left text-teal-500 text-sm font-semibold mb-2">City</div>
                            <input class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Enter Your City">
                        </div>
                    </div>
                    <div class="border-b mt-8"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        name: "WizardTwo",
        data(){
            return{
                showTab: true,
                showTab2: false,
                showTab3 : false,
                showTab4 : false,
                showTab5 :false,
                hover: '',
            }
        },
        methods:{
            activeClass(tab) {
                return this.active === tab;
            },
            hoverClass(tab) {
                return this.hover === tab;
            },
            changeTab(tab) {
                this.showTab = false;
                this.showTab2 = false;
                this.showTab3 = false;
                this.showTab4 = false;
                this.showTab5 = false;

                switch(tab) {
                    case 'personal': this.showTab = true;
                        break;
                    case 'account': this.showTab2 = true;
                        break;
                    case 'address': this.showTab3 = true;
                        break;
                    case 'course': this.showTab4 = true;
                        break;
                    case 'payment': this.showTab5 = true;
                        break;

                    default: this.showTab = true;
                        break;
                }
            },
        }
    }
</script>

<style scoped>

</style>
