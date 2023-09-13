<template>
  <div class="flex flex-col min-h-screen">
        <header class="border-b border-gray-200 bg-white  w-full">
            <div class="w-full">
                <nav class="p-4 flex">
                    <div class="text-lg font-medium mx-2">
                        <router-link to="/">Home</router-link>
                    </div>
                    <div class="text-lg font-medium mx-2">
                        <router-link to="/convert">Convert</router-link>
                    </div>
                </nav>
            </div>
        </header>

        <main class="container mx-auto p-4 mb-auto w-full">
            <router-view />
        </main>

        <footer class="w-full bg-slate-100 py-1 border-t border-gray-200">
            <div class="w-full px-8 text-center text-gray-500">&#169;{{ new Date().getFullYear() }} Made by <a class="text-sky-700" href="https://github.com/Nikoraii/vue-currency-converter" target="_blank">Nikoraii</a></div>
        </footer>
    </div>
</template>
