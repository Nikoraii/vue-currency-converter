<template>
  <div class="p-2 mb-6 border-b border-emerald-50">
    <h1 class="text-center text-6xl">CONVERTER</h1>
    <p class="text-center">Check out the full list of available currencies 
      <a href="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json" 
      target="_blank"
      class="text-emerald-600 font-semibold"
      >here</a>.
    </p>
  </div>
    <ConvertComponent />
</template>

<script>
import ConvertComponent from '@/components/ConvertComponent.vue'

export default {
  name: 'ConvertView',
  components: {
      ConvertComponent
  }
};

</script>