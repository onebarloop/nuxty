<script setup lang="ts">
import { useFetch } from 'nuxt/app'
const { data } = await useFetch('/api/test')
</script>
<template>
  <div>
    <h1>Api</h1>
    <p v-if="data" class="">{{ data.message }}</p>
  </div>
</template>
