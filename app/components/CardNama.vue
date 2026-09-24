<script setup lang="ts">
defineProps<{
  candidate: {
    category: 'MPK' | 'OSIS'
    name: string
    number: number
  }
}>()
</script>

<template>
  <section class="flex flex-col items-center justify-center gap-3">
    <span
      class="text-sm font-semibold uppercase tracking-widest"
      :class="candidate.category === 'MPK' ? 'text-blue-500' : 'text-green-500'"
    >
      {{ candidate.category }}
    </span>

    <h2 class="text-2xl font-bold text-CTA-tombol-highlight-utama-200">
      Paslon {{ candidate.number }}
    </h2>

    <p class="text-center text-base font-medium text-CTA-tombol-highlight-utama-200/80">
      {{ candidate.name }}
    </p>
  </section>
</template>
