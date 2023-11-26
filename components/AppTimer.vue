<script setup lang="ts">
const timer = ref<number>(0)

const colors = ['text-green-400', 'text-red-400']
const color = ref(colors[0])

setInterval(() => {
  timer.value += 1
  color.value = colors[Math.floor(Math.random() * colors.length)]
}, 1000)

function clickHandler() {
  timer.value = 0
}
</script>

<template>
  <div class="flex h-full w-36 flex-col items-center justify-between rounded border-2 border-slate-500 p-2">
    <h1>Timer</h1>
    <div class="animate-ping text-4xl" :class="color">{{ timer }}</div>
    <button @click="clickHandler">Reset</button>
  </div>
</template>
