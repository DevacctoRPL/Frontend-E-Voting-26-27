<script setup lang="ts">
import type { Candidate } from '~/types/candidate'

interface Props {
  candidate: Candidate
}

defineProps<Props>()
</script>

<template>
  <header
    class="flex h-full min-h-[39px] w-full items-center justify-center rounded-tr-[13px] md:rounded-tr-[13px] bg-white px-2 py-1 md:px-6 md:py-2 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:shadow-[0px_6.5px_6.5px_rgba(0,0,0,0.25)]"
    aria-label="Informasi pasangan calon"
  >
    <div class="flex max-w-full flex-col md:flex-row items-center justify-center gap-0.5 md:gap-3 lg:gap-4 overflow-hidden text-center">
      <!-- Ketua -->
      <h1
        class="truncate max-w-full font-['Poppins',sans-serif] text-[10px] sm:text-xs md:text-lg lg:text-[24px] font-bold leading-tight bg-linear-to-b from-[#00224F] to-[#004EB5] bg-clip-text text-transparent"
        :title="candidate.ketua"
      >
        {{ candidate.ketua }}
      </h1>

      <!-- Divider & Wakil -->
      <div class="flex items-center justify-center gap-1 md:gap-3 shrink-0 max-w-full">
        <div
          class="flex h-4 w-4 md:h-[34px] md:w-[31px] shrink-0 items-center justify-center rounded-[2px] md:rounded-[4px] bg-linear-to-b from-[#0076FF] to-[#00224F] shadow-[0_0_4px_rgba(0,0,0,0.3)]"
          aria-hidden="true"
        >
          <span class="font-poppins text-[9px] md:text-[22px] font-bold leading-none text-white">
            &
          </span>
        </div>

        <span
          class="truncate max-w-full font-poppins text-[10px] sm:text-xs md:text-lg lg:text-[24px] font-bold leading-tight bg-linear-to-b from-[#00224F] to-[#004EB5] bg-clip-text text-transparent"
          :title="candidate.wakil"
        >
          {{ candidate.wakil }}
        </span>
      </div>
    </div>
  </header>
</template>
