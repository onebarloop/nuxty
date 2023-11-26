<template>
  <div class="mt-12 w-72 overflow-hidden rounded-xl shadow-xl drop-shadow-xl">
    <header class="flex flex-row items-center justify-between bg-red-300 p-6">
      <h1 class="text-xl font-bold">This is the header</h1>
      <div class="group h-16 w-16 rounded-full border-4 border-black bg-red-400 p-2 hover:bg-red-500">
        <img class="group-hover:scale-110" src="~/assets/img/kraken.svg" />
      </div>
    </header>
    <NuxtPage class="flex h-72 flex-col items-center bg-red-50 py-4" />
    <footer class="flex flex-row justify-between bg-red-300 p-6">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/api">Api</NuxtLink>
    </footer>
  </div>
</template>
