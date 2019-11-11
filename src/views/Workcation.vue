<template>
  <div class="bg-gray-300">
    <div class="bg-gray-100 flex">
      <div class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
        <div class=" xl:max-w-lg xl:mx-auto">
          <img class="h-10" src="/img/logo.svg" alt="Workcation">
          <img class="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden" src="/img/beach-work.jpg" alt="Beach work">
          <h1 class="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:text-4xl sm:mt-8 lg:text-3xl xl:text-4xl">
            You can work from anywhere.
            <br class="hidden lg:inline"><span class="text-indigo-500">Take advantage of it.</span>
          </h1>
          <p class="mt-2 text-gray-600 sm:text-xl sm:mt-4">
            Workcation helps you find work-friendly rentals in beautiful locations so you can
            enjoy some nice weather even when you're not on vacation.
          </p>
          <div class="mt-4 sm:mt-6">
            <a href="#" class="btn btn-indigo sm:text-base shadow-lg">Book your escape</a>
            <a href="#" class="ml-2 btn btn-gray sm:text-base">Learn more</a>
          </div>
        </div>
      </div>
      <div class="hidden lg:block lg:w-1/2 lg:relative">
        <img class="absolute inset-0 h-full w-full object-cover object-center" src="/img/beach-work.jpg" alt="Beach work">
      </div>
    </div>
    <div>
      <div class="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <h2 class="text-2xl text-gray-900">Popular destinations</h2>
        <p class="mt-1 text-gray-600">A selection of great work-friendly cities with lots to see and explore.</p>
        <div class="flex flex-wrap -mx-4">
          
          <div class="mt-6 w-full px-4 lg:w-1/2 xl:w-1/3">
            <div class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
              <img class="h-32 w-32 flex-shrink-0" src="/img/toronto.jpg" alt="Toronto">
              <div class="px-6 py-4">
                <h3 class="text-lg font-semibold text-green-800">Toronto</h3>
                <p class="text-gray-600">$120 / night average</p>
                <div class="mt-4">
                  <a href="#" class="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">Explore 43 properties</a>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-6 w-full px-4 lg:w-1/2 xl:w-1/3">
            <div class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
              <img class="h-32 w-32 flex-shrink-0" src="/img/malibu.jpg" alt="Malibu">
              <div class="px-6 py-4">
                <h3 class="text-lg font-semibold text-green-800">Malibu</h3>
                <p class="text-gray-600">$75 / night average</p>
                <div class="mt-4">
                  <a href="#" class="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">Explore 61 properties</a>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-6 w-full px-4 lg:w-1/2 xl:w-1/3">
            <div class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
              <img class="h-32 w-32 flex-shrink-0" src="/img/seattle.jpg" alt="Seattle">
              <div class="px-6 py-4">
                <h3 class="text-lg font-semibold text-green-800">Seattle</h3>
                <p class="text-gray-600">$46 / night average</p>
                <div class="mt-4">
                  <a href="#" class="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">Explore 15 properties</a>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-6 w-full px-4 lg:w-1/2 xl:w-1/3">
            <div class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
              <img class="h-32 w-32 flex-shrink-0" src="/img/colorado.jpeg" alt="Colorado">
              <div class="px-6 py-4">
                <h3 class="text-lg font-semibold text-green-800">Colorado</h3>
                <p class="text-gray-600">$80 / night average</p>
                <div class="mt-4">
                  <a href="#" class="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">Explore 80 properties</a>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-6 w-full px-4 lg:w-1/2 xl:w-1/3">
            <div class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
              <img class="h-32 w-32 flex-shrink-0" src="/img/tokyo.jpg" alt="Tokyo">
              <div class="px-6 py-4">
                <h3 class="text-lg font-semibold text-green-800">Tokyo</h3>
                <p class="text-gray-600">$110 / night average</p>
                <div class="mt-4">
                  <a href="#" class="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">Explore 43 properties</a>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-6 w-full px-4 lg:w-1/2 xl:w-1/3">
            <div class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
              <img class="h-32 w-32 flex-shrink-0" src="/img/medellin.jpg" alt="Medellin">
              <div class="px-6 py-4">
                <h3 class="text-lg font-semibold text-green-800">Medellin</h3>
                <p class="text-gray-600">$120 / night average</p>
                <div class="mt-4">
                  <a href="#" class="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">Explore 63 properties</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
}
</script>
