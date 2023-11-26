<script setup lang="ts">
const dataRef = ref<string>()
const { data } = await useFetch<{ message: string }>('/api/test', {
  method: 'get'
})

dataRef.value = data.value?.message

async function onClick() {
  const input = document.querySelector('input') as HTMLInputElement

  const { message } = await $fetch<{ message: string }>('/api/test', {
    method: 'post',
    body: { message: input.value }
  })
  dataRef.value = message
}
</script>

<template>
  <div class="flex h-full flex-col justify-between">
    <p class="">{{ dataRef }}</p>

    <input class="px-2 py-3" placeholder="Talk to me" />

    <button @click="onClick">Submit</button>
  </div>
</template>
