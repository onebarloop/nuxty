<template>
  <div class="fle w-64 flex-col justify-between rounded shadow">
    <header class="">
      <h1 class="bg-slate-300 p-6 text-xl">This is the header</h1>
    </header>
    <NuxtPage class="flex h-72 flex-col items-center bg-slate-200 py-4" />
    <footer class="flex flex-row justify-between bg-slate-300 p-6">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/api">Api</NuxtLink>
    </footer>
  </div>
</template>
