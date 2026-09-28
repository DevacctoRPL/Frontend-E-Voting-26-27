<script setup lang="ts">
import type { WorkProgramItem } from '~/types/candidate'

interface Props {
  shortTerm?: WorkProgramItem[]
  longTerm?: WorkProgramItem[]
}

const props = withDefaults(defineProps<Props>(), {
  shortTerm: () => [],
  longTerm: () => []
})

const cleanWorkProgramsText = (workProgram: WorkProgramItem) => {
  if (typeof workProgram === 'string') {
    return workProgram.replace(/^\d+\.\s*/, '').trim()
  }
  return workProgram.name
}
</script>

<template>
  <section
    class="relative flex h-full w-full flex-col pt-3.5 md:pt-6"
    aria-label="Program kerja pasangan calon"
  >
    <!-- Section title Badge -->
    <div
      class="absolute left-6 md:left-8 top-0 z-10 flex h-[25px] w-[153px] md:h-[47px] md:w-[287px] items-center justify-center rounded-[17.5px] md:rounded-[33px] border md:border-[1.88px] border-[#0674FD] bg-linear-to-b from-[#06264F] to-[#0776FC] shadow-md"
    >
      <h2
        class="font-['Poppins',sans-serif] text-[11px] sm:text-xs md:text-[22px] lg:text-[26px] font-bold uppercase tracking-wider text-white leading-none"
      >
        PROGRAM KERJA
      </h2>
    </div>

    <!-- Programs container -->
    <div
      class="flex flex-1 w-full flex-col rounded-[12px] md:rounded-[14px] border border-[#0674FD] bg-[#072750]/85 px-4 pb-5 pt-6 text-white shadow-lg backdrop-blur-sm md:px-8 md:pb-8 md:pt-9"
    >
      <div
        class="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10"
      >
        <!-- Jangka Pendek -->
        <div>
          <h3
            class="mb-2 md:mb-3 font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-wider text-white sm:text-sm md:text-base lg:text-lg"
          >
            Jangka Pendek
          </h3>

          <ol
            v-if="props.shortTerm.length"
            class="list-decimal space-y-1 md:space-y-2 pl-4 md:pl-5 font-['Poppins',sans-serif] text-[10.5px] font-medium leading-[17px] text-white/95 sm:text-xs md:text-[14px] lg:text-[15.5px] md:leading-[22px] lg:leading-[26px] marker:font-bold marker:text-white"
          >
            <li
              v-for="(workProgram, index) in props.shortTerm"
              :key="`short-${index}-${workProgram}`"
              class="pl-1"
            >
              {{ cleanWorkProgramsText(workProgram) }}
            </li>
          </ol>

          <p
            v-else
            class="font-['Poppins',sans-serif] text-xs italic text-white/60"
          >
            Belum ada program kerja jangka pendek.
          </p>
        </div>

        <!-- Jangka Panjang -->
        <div>
          <h3
            class="mb-2 md:mb-3 font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-wider text-white sm:text-sm md:text-base lg:text-lg"
          >
            Jangka Panjang
          </h3>

          <ol
            v-if="props.longTerm.length"
            class="list-decimal space-y-1 md:space-y-2 pl-4 md:pl-5 font-['Poppins',sans-serif] text-[10.5px] font-medium leading-[17px] text-white/95 sm:text-xs md:text-[14px] lg:text-[15.5px] md:leading-[22px] lg:leading-[26px] marker:font-bold marker:text-white"
          >
            <li
              v-for="(workProgram, index) in props.longTerm"
              :key="`long-${index}-${workProgram}`"
              class="pl-1"
            >
              {{ cleanWorkProgramsText(workProgram) }}
            </li>
          </ol>

          <p
            v-else
            class="font-['Poppins',sans-serif] text-xs italic text-white/60"
          >
            Belum ada program kerja jangka panjang.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
