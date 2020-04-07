<template>
    <div class="bg-white px-4 py-3 flex items-center justify-center border-t border-gray-200 sm:px-6">
      <div class="hidden sm:flex-1 sm:flex sm:items-center ">
        <div class="ml-2">
            <p class="text-sm leading-5 font-semibold text-gray-700">
                Showing
                <span >1</span>
                to
                <span >10</span>
                of
                <span >57</span>
                results
            </p>
        </div>
        <div class="flex items-center ml-24">
      <span class="relative inline-flex ">
        <ul class="flex">
          <li class="-mb-px mr-1">
            <a class="rounded mt-1 py-1 px-2 inline-block bg-blue-100 text-blue-600 bg-transparent hover:text-blue-700 focus:border-blue-300 transition ease-in-out duration-150" href="#">
              <svg class="inline-block pb-1 w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M12.452 4.516c.446.436.481 1.043 0 1.576L8.705 10l3.747 3.908c.481.533.446 1.141 0 1.574-.445.436-1.197.408-1.615 0-.418-.406-4.502-4.695-4.502-4.695a1.095 1.095 0 010-1.576s4.084-4.287 4.502-4.695c.418-.409 1.17-.436 1.615 0z"/>
              </svg>
            </a>
          </li>
            <li class="mr-1">
            <a class="rounded py-2 px-3 inline-block text-gray-700 bg-transparent hover:text-indigo-700 focus:border-blue-300 transition ease-in-out duration-150" href="#">
                1
              </a>
            </li>
            <li class="mr-1">
            <a class="rounded py-2 px-3 inline-block text-gray-700 bg-transparent hover:text-indigo-700 focus:border-blue-300 transition ease-in-out duration-150" href="#">
                2
              </a>
            </li>
            <li class="mr-1">
            <a class="rounded py-2 px-3 inline-block text-gray-700 bg-transparent hover:text-indigo-700 focus:border-blue-300 transition ease-in-out duration-150" href="#">
                3
              </a>
            </li>
            <li class="mr-1">
            <a class="rounded mt-1 py-1 px-2 inline-block text-gray-700 bg-transparent" href="#">
               <svg class="inline-block pb-1 w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                   <path fill-rule="evenodd" d="M10.001 7.8a2.2 2.2 0 100 4.402A2.2 2.2 0 0010 7.8zm-7 0a2.2 2.2 0 100 4.402A2.2 2.2 0 003 7.8zm14 0a2.2 2.2 0 100 4.402A2.2 2.2 0 0017 7.8z"/>
               </svg>
              </a>
            </li>
            <li class="mr-1">
            <a class="rounded py-2 px-3 inline-block text-gray-700 bg-transparent hover:text-indigo-700 focus:border-blue-300 transition ease-in-out duration-150" href="#">
                8
              </a>
            </li>
            <li class="mr-1">
            <a class="rounded py-2 px-3 inline-block text-gray-700 bg-transparent hover:text-indigo-700 focus:border-blue-300 transition ease-in-out duration-150" href="#">
                9
              </a>
            </li>
            <li class="mr-1">
            <a class="rounded py-2 px-3 inline-block text-gray-700 bg-transparent hover:text-indigo-700 focus:border-blue-300 transition ease-in-out duration-150" href="#">
                10
              </a>
            </li>
            <li class="mr-1">
            <a class="rounded mt-1 py-1 px-2 inline-block bg-blue-100 text-blue-600 bg-transparent hover:text-blue-700 focus:border-blue-300 transition ease-in-out duration-150" href="#">
                <svg class="inline-block pb-1 w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                   <path fill-rule="evenodd" d="M9.163 4.516c.418.408 4.502 4.695 4.502 4.695a1.095 1.095 0 010 1.576s-4.084 4.289-4.502 4.695c-.418.408-1.17.436-1.615 0-.446-.434-.481-1.041 0-1.574L11.295 10 7.548 6.092c-.481-.533-.446-1.141 0-1.576.445-.436 1.197-.409 1.615 0z"/>
                </svg>
              </a>
            </li>

        </ul>

      </span>
        </div>
    </div>

    </div>


<!--    <ul class="pagination flex justify-between mx-4 mt-4 list-reset text-white font-bold">-->

<!--        <li class="disabled">-->
<!--            <span class="button bg-transparent border border-brown py-2 px-4 rounded opacity-50 cursor-not-allowed">('pagination.previous')</span>-->
<!--        </li>-->
<!--        <li>-->
<!--            <a class="button bg-transparent border border-brown py-2 px-4 rounded opacity-85" href="{{ $paginator->previousPageUrl() }}" rel="prev">('pagination.previous')</a>-->
<!--        </li>-->

<!--        <li>-->
<!--            <a class="button bg-transparent border border-brown py-2 px-4 rounded opacity-85" href="{{ $paginator->nextPageUrl() }}" rel="next">('pagination.next')</a>-->
<!--        </li>-->
<!--        <li class="disabled ">-->
<!--            <span class="button bg-transparent border border-brown py-2 px-4 rounded opacity-50 cursor-not-allowed">('pagination.next')</span>-->
<!--        </li>-->
<!--    </ul>-->

</template>

<script>
    export default {
        name: "BaseBasicPagination"
    }
</script>

<style scoped>

</style>