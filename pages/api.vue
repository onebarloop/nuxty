<script setup lang="ts">
const test = ref()
const { data } = await useFetch('/api/test', {
  method: 'get'
})

test.value = data.value?.message

async function onClick() {
  const { message } = await $fetch('/api/test', {
    method: 'post',
    body: { message: 'Updated' }
  })
  test.value = message
}
</script>
<template>
  <div>
    <h1>Api</h1>
    <p class="">{{ test }}</p>
    <button @click="onClick">Click</button>
  </div>
</template>
