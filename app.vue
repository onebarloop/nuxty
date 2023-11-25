<template>
  <div class="fle w-72 flex-col justify-between rounded shadow">
    <header class="flex flex-row items-center justify-between bg-slate-300 p-6">
      <h1 class="text-xl font-bold">This is the header</h1>
      <div class="group h-16 w-16 rounded-full border-4 border-black bg-red-300 p-2 hover:bg-red-500">
        <img class="group-hover:scale-110" src="~/assets/img/kraken.svg" />
      </div>
    </header>
    <NuxtPage class="flex h-72 flex-col items-center bg-slate-200 py-4" />
    <footer class="flex flex-row justify-between bg-slate-300 p-6">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/api">Api</NuxtLink>
    </footer>
  </div>
</template>
