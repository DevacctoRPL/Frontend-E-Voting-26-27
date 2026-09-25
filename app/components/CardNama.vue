<script setup lang="ts">
interface Candidate {
  number: number
  ketua: string
  wakil: string
}

interface Props {
  candidate: Candidate
}

defineProps<Props>()
</script>

<template>
  <header
    class="flex w-full flex-col gap-2"
    aria-label="Informasi pasangan calon"
  >
    <!-- Candidate Names -->
    <div
      class="inline-flex w-fit max-w-full items-center gap-2
             bg-white px-3 py-2
             shadow-md"
    >
      <h1
        class="font-sans text-sm font-bold leading-tight text-[#002B63]
               md:text-base lg:text-lg"
      >
        {{ candidate.ketua }}
      </h1>

      <span
        class="font-sans text-sm font-bold text-[#002B63]"
        aria-hidden="true"
      >
        &
      </span>

      <span
        class="font-sans text-sm font-bold leading-tight text-[#002B63]
               md:text-base lg:text-lg"
      >
        {{ candidate.wakil }}
      </span>
    </div>
  </header>
</template>
