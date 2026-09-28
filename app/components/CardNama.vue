<script setup lang="ts">
import type { Candidate } from '~/types/candidate'

interface Props {
  candidate: Candidate
}

defineProps<Props>()
</script>

<template>
  <header
    class="flex h-full w-full items-center justify-center rounded-tl-[8px] md:rounded-tl-[13px] bg-white px-3 py-1.5 md:px-6 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:shadow-[0px_6.5px_6.5px_rgba(0,0,0,0.25)]"
    aria-label="Informasi pasangan calon"
  >
    <div class="flex max-w-full items-center justify-center gap-2 md:gap-4 overflow-hidden">
      <h1
        class="truncate font-['Poppins',sans-serif] text-xs font-bold leading-tight bg-linear-to-b from-[#00224F] to-[#004EB5] bg-clip-text text-transparent sm:text-sm md:text-xl lg:text-[26px]"
      >
        {{ candidate.ketua }}
      </h1>

      <div
        class="flex h-4 w-4 md:h-[34px] md:w-[31px] shrink-0 items-center justify-center rounded-[2px] md:rounded-[4px] bg-linear-to-b from-[#0076FF] to-[#00224F] shadow-[0_0_4px_rgba(0,0,0,0.3)]"
        aria-hidden="true"
      >
        <span class="font-['Poppins',sans-serif] text-[9px] md:text-[22px] font-bold leading-none text-white">
          &
        </span>
      </div>

      <span
        class="truncate font-['Poppins',sans-serif] text-xs font-bold leading-tight bg-linear-to-b from-[#00224F] to-[#004EB5] bg-clip-text text-transparent sm:text-sm md:text-xl lg:text-[26px]"
      >
        {{ candidate.wakil }}
      </span>
    </div>
  </header>
</template>
