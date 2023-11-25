<script setup lang="ts">
import { ref } from 'vue'

console.log('hu')

const timer = ref<number>(0)
setInterval(() => {
  timer.value += 1
}, 1000)

function clickHandler() {
  timer.value = 0
}
</script>

<template>
  <div class="flex w-36 flex-col items-center rounded border-2 border-slate-500 p-2">
    <h1>Timer</h1>
    <div class="p-12 text-center">{{ timer }}</div>
    <button @click="clickHandler">Reset</button>
  </div>
</template>
