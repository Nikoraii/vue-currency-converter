<template>
  <div class="text-center  rounded-lg  mt-5 px-4 py-2">
    <h1 class="text-6xl font-semibold text-emerald-600">Currency Converter</h1>
    <p class="mt-7 ">Convert over 150 currencies includins some cryptocurrencies as well. Built using <a href="https://github.com/fawazahmed0/currency-api#readme"
      class="underline decoration-rose-600 decoration-2 underline-offset-4 text-emerald-600 font-semibold" target="_blank">Currency-API</a></p>
    <div class="text-center mt-4">
      <p>Technologies used:</p>
      <div>
          <img class="inline" src="@/assets/icons8-vue-js-48.png">
          <img class="inline pl-4 pr-2" src="@/assets/icons8-nodejs-48.png">
          <img class="inline pr-4 pl-2" src="@/assets/icons8-express-js-50.png">
          <img class="inline" src="@/assets/icons8-tailwindcss-48.png">
      </div>
      <div class="mt-5">
        <router-link class="text-2xl font-semibold rounded-lg bg-emerald-500 text-white py-2 px-4" to="/convert">Convert</router-link>
      </div>
    </div>
  </div>
</template>