<template>
    <div class="">
        <nav class="sticky top-0 bg-white px-8 mx-auto border-b ">
            <div class="flex justify-between h-24 ">
                <div class="float-left border-r pr-3 ">
                    <img class="h-16 w-56 mt-5 mr-5" src="/nits-assets/images/nits-editor-logo.png">
                </div>

                <div class=" ml-56 font-semibold">
                    <div class="float-right ml-32">
                        <div class="inline-block  text-gray-800 p-1 mx-2">
                            <a class="text-base hover:text-teal-600 font-semibold mt-4 lg:inline-block lg:mt-0 lg:py-8 px-2" @mouseover="isVisibleHeader1 = true" @mouseleave="isVisibleHeader1 = false"  @keydown.enter="isVisibleHeader1 = !isVisibleHeader1" href="#">
                                {{label1}}
                                <!--                                HOME-->
                                <ul v-show="isVisibleHeader1" class=" absolute top-0 mt-24 mr-6 w-56 text-gray-600 bg-white border-t-2 border-teal-400" >
                                    <li class=""  @mouseover="isVisible1 = true" @mouseleave="isVisible1 = false" @keydown.enter="isVisible1 = ! isVisible1">
                                        <a class="rounded-t  hover:bg-gray-100 py-4 px-4 block whitespace-no-wrap flex " href="#">
                                            <span class="block text-base" >HOME-CORPORATE</span>
                                            <span class="mr-auto">
                                              <svg class="absolute right-0 w-5 h-5 ml-40 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M11 10L7.86 6.58a.7.7 0 010-.98c.27-.27.7-.27.97 0l3.83 3.91a.7.7 0 010 .98l-3.83 3.9a.68.68 0 01-.97 0 .7.7 0 010-.97L11 10z"/>
                                            </svg>
                                            </span>
                                        </a>
                                    </li>
                                    <li class=""  @mouseover="isVisible1 = true" @mouseleave="isVisible1 = false" @keydown.enter="isVisible1 = ! isVisible1">
                                        <a class="rounded-t  hover:bg-gray-100 py-4 px-4 block whitespace-no-wrap flex " href="#">
                                            <span class="flex text-base hover:text-teal-500" >HOME-PORFOLIO</span>
                                            <span class="mr-auto">
                                            <svg class="absolute right-0 w-5 h-5  ml-40 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                              <path fill-rule="evenodd" d="M11 10L7.86 6.58a.7.7 0 010-.98c.27-.27.7-.27.97 0l3.83 3.91a.7.7 0 010 .98l-3.83 3.9a.68.68 0 01-.97 0 .7.7 0 010-.97L11 10z"/>
                                            </svg>
                                        </span>
                                        </a>
                                    </li>

                                </ul>

                            </a>
                        </div>
                        <div class="inline-block  p-1 mx-2">
                            <a class="text-base text-teal-500 font-semibold mt-4 lg:inline-block lg:mt-0 lg:py-8 px-2" @mouseover="isVisibleHeader2 = true"  @mouseleave="isVisibleHeader2 = false" @keydown.enter="isVisibleHeader2 = !isVisibleHeader2" href="#">
                                {{label2}}
                                <!--                                FEATURES-->
                                <ul v-show="isVisibleHeader2" class=" absolute top-0 mt-24 mr-6 w-56 text-gray-600 bg-white border-t-2 border-teal-400" >
                                    <li class=""  @mouseover="isVisible2 = true" @mouseleave="isVisible2 = false" @keydown.enter="isVisible2 = !isVisible2">
                                        <a class="rounded-t  hover:bg-gray-100 py-4 px-4 block whitespace-no-wrap flex " href="#">
                                            <span class="block text-base" >SLIDERS</span>
                                            <span class="mr-auto">
                                              <svg class="absolute right-0 w-5 h-5  ml-40 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M11 10L7.86 6.58a.7.7 0 010-.98c.27-.27.7-.27.97 0l3.83 3.91a.7.7 0 010 .98l-3.83 3.9a.68.68 0 01-.97 0 .7.7 0 010-.97L11 10z"/>
                                            </svg>
                                            </span>
                                        </a>
                                    </li>
                                    <li class=""  @mouseover="isVisible2 = true" @mouseleave="isVisible2 = false" @keydown.enter="isVisible2 = !isVisible2">
                                        <a class="rounded-t  hover:bg-gray-100 py-4 px-4 block whitespace-no-wrap flex " href="#">
                                            <span class="flex text-base hover:text-teal-500" >WIDGETS</span>
                                            <span class="mr-auto">
                                            <svg class="absolute right-0 w-5 h-5  ml-40 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                              <path fill-rule="evenodd" d="M11 10L7.86 6.58a.7.7 0 010-.98c.27-.27.7-.27.97 0l3.83 3.91a.7.7 0 010 .98l-3.83 3.9a.68.68 0 01-.97 0 .7.7 0 010-.97L11 10z"/>
                                            </svg>
                                        </span>
                                        </a>
                                    </li>

                                </ul>

                            </a>
                        </div>
                        <div class="inline-block text-gray-800 p-1 mx-2">
                            <a class="text-base hover:text-teal-500 font-semibold mt-4 lg:inline-block lg:mt-0 lg:py-8 px-2" href="#">
                                {{label3}}
                                <!--                            PAGES-->
                            </a>
                        </div>
                        <div class="inline-block text-gray-800  p-1 mx-2">
                            <a class="text-base hover:text-teal-500 font-semibold mt-4 lg:inline-block lg:mt-0 lg:py-8 px-2" href="#">
                                {{label4}}
                                <!--                            PORTFOLIO-->
                            </a>
                        </div>
                        <div class="inline-block text-gray-800 p-1 mx-2">
                            <a class="text-base hover:text-teal-500 font-semibold mt-4 lg:inline-block lg:mt-0 lg:py-5 px-2" href="#">
                                {{label5}}
                                <!--                            BLOG-->
                            </a>
                        </div>
                        <div class="inline-block text-gray-800  p-1 mx-2">
                            <a class="text-base hover:text-teal-500 font-semibold mt-4 lg:inline-block lg:mt-0 lg:py-5 px-2" href="#">
                                {{label6}}
                                <!--                           SHOP-->
                            </a>
                        </div>
                        <div class="inline-block text-gray-800 p-1 mx-2">
                            <a class="text-base hover:text-teal-500 font-semibold mt-4 lg:inline-block lg:mt-0 lg:py-5 px-2" href="#">
                                {{label7}}
                                <!--                            SHORTCODES-->
                            </a>
                        </div>
                    </div>
                </div>
                <div @click="search = ! search" class="border-l ">
                    <svg class="w-5 h-5 mt-10 cursor-pointer text-gray-800 mx-10" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 00.898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 002.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 003.115-.844l3.799 3.801a.953.953 0 001.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 014.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 01-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"/>
                    </svg>
                </div>
            </div>

        </nav>

        <div class="absolute flex top-0 w-full " v-if="search">
            <input class="w-full h-24 ml-2 border border-gray-300 py-1 px-10 bg-white rounded placeholder-gray-700 text-xl focus:outline-none antialiased tracking-wide font-medium text-gray-700 leading-normal" type="text" placeholder="TYPE HERE..">

            <svg @click="search = ! search" class="h-5 w-5 mt-10 ml-4 text-black " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2.939 12.789L10 11.729l-3.061 3.06-1.729-1.728L8.271 10l-3.06-3.061L6.94 5.21 10 8.271l3.059-3.061 1.729 1.729L11.729 10l3.06 3.061-1.728 1.728z"/>
            </svg>
        </div>

        <div class=" flex h-32 w-screen mx-auto justify-between bg-gray-200">
            <div class="float-left mt-10 ml-56 ">
                <h1 class="text-3xl ">FOOTER - LAYOUT 2</h1>
            </div>

            <div class="w-full h-full block lg:flex lg:w-auto hidden mr-40">
                <base-bread-crumb-one name="" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>
            </div>
        </div>

        <div class="container mx-auto">
            <div class="mt-16 ml-8 w-full h-auto">
                <p class="text-left">
                   <strong class="text-2xl">F</strong>oster best practices effectiveness inspire breakthroughs solve immunize turmoil. Policy dialogue peaceful The Elders rural global support.
                    Process inclusive innovate readiness, public sector complexity. Lifting people up cornerstone partner, technology working families civic engagement activist recognize potential global network. Countries tackling solution respond change-makers tackle.
                    Assistance, giving; fight against malnutrition experience in the field lasting change scalable. Empowerment long-term, fairness policy community progress social responsibility; Cesar Chavez recognition.
                    Expanding community ownership visionary indicator pursue these aspirations accessibility. Achieve; worldwide, life-saving initiative facilitate. New approaches,John Lennon humanitarian relief fundraise vaccine Jane Jacobs community health workers Oxfam. Our ambitions informal economies.
                </p>
            </div>
            <div class="ml-8 border-l-4 h-20 mt-16 w-full h-auto sm:text-lg border-gray-400">
                <p class="text-left px-10 py-4">
                    Human rights healthcare immunize; advancement grantees. Medical supplies; meaningful, truth
                    technology catalytic effect. Promising development capacity building international enable poverty.
                </p>
            </div>

            <div class="flex ml-8 mb-20">
                <div class="text-left mt-10 mr-10 w-full h-auto text-base">
                    <p class=" ">
                        Provide, Aga Khan, interconnectivity governance fairness replicable, new approaches visionary implementation. End hunger evolution,
                        future promising development youth.Public sector, small-scale farmers;harness facilitate gender. Contribution dedicated global change movements, prosperity accelerate progress citizens of change.
                        Elevate; accelerate reduce child mortality; billionaire philanthropy fluctuation, plumpy'nut care opportunity catalyze.
                    </p>
                </div>
                <div class="text-left mt-10 w-full h-auto text-base">
                    <p class="">
                        Frontline harness criteria governance freedom contribution. Campaign Angelina Jolie natural resources, Rockefeller peaceful philanthropy human potential. Justice; outcomes reduce carbon emissions nonviolent resistance
                        human being.Solve innovate aid communities; benefit truth rural development UNICEF meaningful work.Generosity Action Against Hunger relief; many voices impact crisis situation poverty pride.Vaccine carbon.
                    </p>
                </div>
            </div>
        </div>

        <!-- logo footer-->
        <section>
            <div class=" bg-gray-900 ">
                <div class="container flex mx-auto pt-20 pb-20">
                    <div class="flex flex-col ml-8">
                        <img class="h-16 w-56 -mt-2 mr-5" src="/nits-assets/images/nits-editor-logo.png">

                        <div class=" mt-5 text-gray-500 text-sm">
                            We believe in Simple, Creative & Flexible Design <br>Standards with a Retina & Responsive Approach.<br>
                            Browse the amazing Features this template offers.
                        </div>
                        <div class="flex flex-col mt-6 text-gray-400">
                          <strong>Office:</strong>
                           Nasscom Warehouse,<br>
                            MBP, Ghansoli Navi Mumbai
                        </div>
                        <span class="flex  mt-6 text-gray-400">
                           <strong>Phone : </strong>
                            (91) 9890908900
                        </span>
                        <span class="flex  text-gray-400">
                           <strong>Fax : </strong>
                            (91) 921-21-2100
                        </span>
                        <span class="flex  text-gray-400">
                           <strong>Email : </strong>
                             info@noeticit.com
                        </span>
                    </div>
                    <div class="flex flex-col ml-24 w-1/4">
                        <h4 class="text-gray-200 mt-4 text-lg">CLIENT TESTIMONIALS</h4>
                        <div class="text-gray-500 pb-0 mt-8 ">
                            <p class="text-gray-500 italic text-sm">"Similique fugit repellendus exceptiture perferendis provident quia eaque.
                                Repellendus, vero numquam?"</p><br>

                            <div class="-mt-2 text-gray-400">-STEVE JOBS</div><br>
                            <div class="text-sm ml-2 -mt-4 text-gray-500">Apple Inc.</div>
                        </div>
                        <div class="flex mt-16 ">
                            <div class="flex ">
                                <div class="inline-block px-1">
                                    <a class="" href="#">
                                        <div class="flex font-thin cursor-pointer text-center h-8 w-8 pt-1 pl-1 hover:bg-blue-800 rounded-full border border-gray-500 hover:text-white text-gray-100" >
                                            <svg class="h-4 w-4 ml-1 mr-1 mt-1 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.14 155.14">
                                                <path fill-rule="evenodd" d="M89.58 155.14V84.38h23.75l3.56-27.59h-27.3V39.2c0-7.99 2.2-13.43 13.66-13.43h14.6V1.07A197.9 197.9 0 0096.58 0C75.52 0 61.1 12.85 61.1 36.45V56.8H37.3v27.59H61.1v70.76h28.48z"/>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                                <div class="inline-block px-1">
                                    <a class="" href="#">
                                        <div class="flex font-thin cursor-pointer h-8 w-8 pt-1 pl-1 hover:bg-blue-400 rounded-full border border-gray-500  hover:text-white text-gray-100" >
                                            <svg class="w-4 h-4  ml-1 mr-1 mt-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M17.32 6.25v.48c0 5-3.79 10.75-10.73 10.75-2.14 0-4.12-.63-5.79-1.7a7.66 7.66 0 005.59-1.56 3.78 3.78 0 01-3.53-2.62 3.86 3.86 0 001.7-.07 3.78 3.78 0 01-3.02-3.7v-.05c.5.28 1.1.45 1.7.47a3.77 3.77 0 01-1.16-5.04 10.72 10.72 0 007.78 3.95 3.77 3.77 0 016.43-3.44 7.6 7.6 0 002.4-.92 3.79 3.79 0 01-1.66 2.09c.77-.1 1.5-.3 2.17-.6a7.62 7.62 0 01-1.88 1.96z"/>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                                <div class="inline-block px-1">
                                    <a class="" href="#">
                                        <div class="flex font-thin hover:bg-red-500 cursor-pointer h-8 w-8 pt-1 pl-1 rounded-full border border-gray-500  hover:text-white text-gray-200" >
                                            <svg class="w-4 h-4  ml-1 mr-1 mt-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M1.99 5.59c0 1.5.5 2.57 1.48 3.2.8.52 1.74.6 2.23.6h.28s-.16 1 .59 1.99h-.04c-1.29 0-5.5.27-5.5 3.73 0 3.51 3.87 3.69 4.64 3.69h.26c.5 0 1.78-.06 2.98-.64 1.54-.75 2.33-2.06 2.33-3.89 0-1.76-1.2-2.81-2.07-3.58-.53-.47-1-.87-1-1.27s.34-.7.77-1.08a3.87 3.87 0 001.34-3.15c0-1.46-.2-2.43-1.36-3.06.12-.06.55-.1.77-.13.63-.09 1.55-.19 1.55-.7v-.1h-4.6c-.05 0-4.65.17-4.65 4.39zM9.4 14.6c.1 1.4-1.11 2.45-2.92 2.58-1.83.13-3.34-.7-3.43-2.1-.05-.68.25-1.34.83-1.86.6-.54 1.4-.87 2.28-.93l.31-.01c1.7 0 2.85 1 2.93 2.32zm-1.2-9.97c.45 1.58-.23 3.24-1.31 3.55-.13.03-.26.05-.39.05-1 0-1.98-1-2.34-2.4-.2-.77-.19-1.45.04-2.1.23-.65.65-1.08 1.17-1.23.12-.03.25-.05.38-.05 1.2 0 1.97.5 2.45 2.18zM16 8V5h-2v3h-3v2h3v3h2v-3h3V8h-3z"/>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                                <div class="inline-block px-1">
                                    <a class="" href="#">
                                        <div class="flex font-thin hover:bg-red-600 cursor-pointer h-8 w-8 pt-1 pl-1 rounded-full border border-gray-500  hover:text-white text-gray-200" >
                                            <svg class="w-4 h-4 ml-1 mr-1 mt-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M10 .4a9.6 9.6 0 100 19.2A9.6 9.6 0 0010 .4zm.66 11.88c-.62-.05-.88-.36-1.36-.65-.26 1.4-.59 2.73-1.55 3.42-.3-2.1.44-3.68.78-5.36-.58-.97.07-2.93 1.29-2.45 1.5.6-1.3 3.63.58 4 1.96.4 2.77-3.4 1.55-4.64-1.76-1.8-5.13-.04-4.71 2.51.1.63.74.82.25 1.68-1.12-.25-1.46-1.14-1.42-2.32.07-1.94 1.75-3.3 3.42-3.49 2.13-.24 4.12.78 4.4 2.78.3 2.25-.96 4.7-3.23 4.52z"/>
                                            </svg>
                                        </div>
                                    </a>
                                </div>

                                <div class="inline-block px-1">
                                    <a class="" href="#">
                                        <div class="flex font-thin hover:bg-black cursor-pointer h-8 w-8 pt-1 pl-1 rounded-full border border-gray-500  hover:text-white text-gray-200" >
                                            <svg class="w-4 h-4 ml-1 mr-1 mt-1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" fill="currentColor">
                                                <path fill-rule="evenodd" d="M8 0a8 8 0 00-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0016 8a8 8 0 00-8-8z"/>
                                            </svg>
                                        </div>
                                    </a>
                                </div>

                                <div class="inline-block px-1">
                                    <a class="" href="#">
                                        <div class="flex font-thin hover:bg-blue-400 cursor-pointer h-8 w-8 pt-1 pl-1 rounded-full border border-gray-500  hover:text-white text-gray-200" >
                                            <svg class="w-4 h-4  ml-1 mr-1 mt-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M10 .4a9.6 9.6 0 100 19.2A9.6 9.6 0 0010 .4zm4.4 7.75c-.5 2.92-3.35 5.39-4.2 5.95-.85.56-1.63-.23-1.92-.82C7.96 12.59 7 8.9 6.74 8.6c-.26-.3-1.02.3-1.02.3l-.37-.49S6.9 6.53 8.08 6.29c1.24-.25 1.24 1.95 1.54 3.18.3 1.18.49 1.86.74 1.86.26 0 .74-.66 1.27-1.67.53-1.02-.02-1.91-1.06-1.27.41-2.54 4.34-3.16 3.83-.24z"/>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                                <div class="inline-block px-1">
                                    <a class="" href="#">
                                        <div class="flex font-thin hover:bg-purple-700 cursor-pointer h-8 w-8 pt-1 pl-1 rounded-full border border-gray-500  hover:text-white text-gray-200" >
                                            <svg class="w-4 h-4  ml-1 mr-1 mt-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor">
                                                <path fill-rule="evenodd" d="M13.5 24s-.83-.15-1.5-.15c-.62 0-1.53.15-1.53.15l.19-10.2C9.24 11.37 5.09 3.91 2.49 0c1.3.3 1.85.28 3.17 0l.02.03c1.65 2.93 4.17 7 6.31 10.54C14.1 7.1 17.42 1.67 18.32 0c1.02.27 2.05.26 3.19 0-1.2 1.62-5.57 9.17-8.2 13.8L13.5 24z"/>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                                <div class="inline-block px-1">
                                    <a class="" href="#">
                                        <div class="flex font-thin hover:bg-blue-600 cursor-pointer h-8 w-8 pt-1 pl-1 rounded-full border border-gray-500  hover:text-white text-gray-200" >
                                            <svg class="w-4 h-4  ml-1 mr-1 mt-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M1 6h4v13H1V6zm2-5C1.8 1 1 2 1 3.1 1 4.1 1.8 5 3 5c1.3 0 2-.9 2-2s-.8-2-2-2zm11.6 5.2c-2.1 0-3.3 1.2-3.8 2h-.1l-.2-1.7H6.9c0 1.1.1 2.4.1 3.9V19h4v-7.1c0-.4 0-.7.1-1 .3-.7.8-1.6 1.9-1.6 1.4 0 2 1.2 2 2.8V19h4v-7.4c0-3.7-1.9-5.4-4.4-5.4z"/>
                                            </svg>
                                        </div>
                                    </a>
                                </div>


                            </div>
                        </div>

                    </div>
                    <div class="flex flex-col ml-20">
                        <span class="text-gray-300 text-lg mt-4">SEND MESSAGE</span>

                        <div class="flex bg-gray-800 h-10 w-64 mt-8 rounded">
                            <div class="w-10 h-10 px-2 mt-3 ml-2 mr-2">
                                <svg class="w-4 h-4 text-gray-300" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 12 16" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12 14a1 1 0 01-1 1H1a1 1 0 01-1-1v-1c0-2.63 4-4 4-4s.23-.4 0-1c-.84-.62-.94-1.59-1-4 .17-2.41 1.87-3 3-3s2.83.59 3 3c-.06 2.41-.16 3.38-1 4-.23.59 0 1 0 1s4 1.37 4 4v1z"/>
                                </svg>
                            </div>
                            <input type="name" class="bg-gray-700 px-16 text-gray-300 text-left rounded-r" placeholder="Full Name">
                        </div>
                        <div class="flex bg-gray-800 h-10 w-64 mt-3 rounded">
                            <div class="w-10 h-10 px-2 mt-3 ml-2 mr-2">
                                <svg class="w-4 h-4 text-gray-300" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M18.64 2.63L.98 8.86c-.28.1-.34.34 0 .48l3.79 1.52 2.25.9L18 3.69c.15-.1.32.1.22.21l-7.88 8.51-.45.51.6.32 4.98 2.68c.3.16.67.03.75-.33l2.91-12.53c.08-.34-.15-.55-.49-.43zM7 17.16c0 .25.14.32.33.14l2.85-2.56L7 13.1v4.06z"/>
                                </svg>
                            </div>
                            <input type="email" class="bg-gray-700 px-16 text-gray-300 text-left rounded-r" placeholder="Enter your Email">
                        </div>
                        <textarea class="  bg-gray-700 mt-3 px-4 py-8 -mr-6 text-left text-gray-300 rounded" placeholder="Message"></textarea>
                        <button class="bg-red-600 text-white mt-3 py-2 px-3 mr-56 rounded">Send Email</button>


                    </div>
                </div>
            </div>
    <!--           bottom footer-->
             <div class="flex bg-gray-800 h-32 w-auto mt-0 ">
                <div class="float-left text-gray-400 text-sm mt-12 ml-48">Copyrights © 2014 All Rights Reserved by NoeticIt Services.</div>
                <div class="flex float-right ml-56 ">
                    <ul class="flex ml-48 mt-10">
                        <li class=" p-2">
                            <a class="text-gray-400 tracking-widest antialiased text-xs hover:text-teal-500 font-medium" href="#">Home /</a>
                        </li>
                        <li class=" p-2">
                            <a class="text-gray-400 tracking-widest antialiased text-xs hover:text-teal-500 font-medium" href="#">About /</a>
                        </li>
                        <li class=" p-2">
                            <a class="text-gray-100 tracking-widest antialiased text-xs hover:text-teal-500 font-medium" href="#">Features /</a>
                        </li>
                        <li class=" p-2">
                            <a class="text-gray-100 tracking-widest antialiased text-xs hover:text-teal-500 font-medium" href="#">Portfolio /</a>
                        </li>
                        <li class=" p-2">
                            <a class="text-gray-100 tracking-widest antialiased text-xs hover:text-teal-500 font-medium" href="#">FAQs /</a>
                        </li>
                        <li class=" p-2">
                            <a class="text-gray-100 tracking-widest antialiased text-xs hover:text-teal-500 font-medium" href="#">Contact</a>
                        </li>
                    </ul>
                </div>

            </div>

        </section>

    </div>

</template>

<script>
    export default {
        name: "NitsFooterLayout2",
        data(){
            return{
                isVisibleHeader1: false,
                isVisibleHeader2: false,
                search: false,
                breadcrumbs: ['Home', 'Templates', 'Footer 2'],

            }
        },

        props: {
            label1: {
                type: String,
                required: true
            },
            label2: {
                type: String,
                required: true
            },
            label3: {
                type: String,
                required: true
            },
            label4: {
                type: String,
                required: true
            },
            label5: {
                type: String,
                required: true
            },
            label6: {
                type: String,
                required: true
            },
            label7: {
                type: String,
                required: true
            },
            heading:{
                type: String,
                required: true
            }
        },
    }
</script>

<style scoped>

</style>