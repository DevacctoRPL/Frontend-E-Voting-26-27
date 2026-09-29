<script setup lang="ts">
await navigateTo('/login', {
  replace: true,
})
</script>

<template>
  <div>
    <NuxtLink to="/vote/mpk">Login</NuxtLink>
  </div>
</template>
