<template>
  <div class="">
    <img class="h-64 w-full object-cover rounded-lg shadow-md" :src="property.imageUrl" :alt="property.imageAlt">
    <div class="relative px-4 -mt-16">
      <div class="p-6 bg-white rounded-lg shadow-lg">
        <div class="flex items-baseline">
          <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">New</span>
          <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
            {{ property.beds }} beds &bull; {{ property.baths }} baths
          </div>
        </div>
        <h4 class="mt-1 font-semibold text-lg leading-tight truncate">{{ property.title }}</h4>
        <div class="mt-1">
          {{ property.formattedPrice }}
          <span class="text-gray-600 text-sm"> / week</span>
        </div>
        <div class="mt-2 flex items-center">
          <svg v-for="i in 5" :key="i" :class="i <= property.rating ? 'text-teal-500' : 'text-gray-400'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current">
            <path d="M21.947 9.179a1.001 1.001 0 00-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 00-1.822-.001L8.622 8.05l-5.701.453a1 1 0 00-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 001.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 001.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"/>
          </svg>
          <span class="ml-2 text-gray-600 text-sm ">{{ property.reviewCount }} reviews</span> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PropertyCard',
  props: ['property']
}
</script>