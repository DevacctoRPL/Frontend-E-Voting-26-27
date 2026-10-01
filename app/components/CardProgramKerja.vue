<script setup lang="ts">
import type { Candidate, WorkProgramItem } from '~/types/candidate'

interface Props {
  candidate?: Candidate
  shortTerm?: WorkProgramItem[]
  longTerm?: WorkProgramItem[]
}

const props = withDefaults(defineProps<Props>(), {
  candidate: undefined,
  shortTerm: () => [],
  longTerm: () => []
})

const displayShortTerm = computed(() => props.candidate?.workPrograms?.shortTerm ?? props.shortTerm)
const displayLongTerm = computed(() => props.candidate?.workPrograms?.longTerm ?? props.longTerm)

const cleanWorkProgramsText = (workProgram: WorkProgramItem) => {
  if (typeof workProgram === 'string') {
    return workProgram.replace(/^\d+\.\s*/, '').trim()
  }
  return workProgram.name
}

const getItemDescription = (item: WorkProgramItem) => {
  if (typeof item === 'object' && item.description) {
    return item.description
  }
  return null
}
</script>

<template>
  <section
    class="relative flex h-full w-full flex-col pt-3 md:pt-6"
    aria-label="Program kerja pasangan calon"
  >
    <!-- Section title Badge -->
    <div
      class="absolute left-4 md:left-8 top-0 z-10 flex h-[23px] w-[125px] sm:w-[145px] md:h-[47px] md:w-[287px] items-center justify-center rounded-[17.5px] md:rounded-[33px] border border-[#0674FD] md:border-[1.88px] bg-linear-to-b from-[#06264F] to-[#0776FC] shadow-md"
    >
      <h2
        class="font-['Poppins',sans-serif] text-[10px] sm:text-xs md:text-[22px] lg:text-[26px] font-bold uppercase tracking-wider text-white leading-none"
      >
        PROGRAM KERJA
      </h2>
    </div>

    <!-- Programs container -->
    <div
      class="flex flex-1 w-full flex-col rounded-[12px] md:rounded-[14px] border border-[#0674FD] bg-[#072750]/85 px-3 pb-4 pt-5 text-white shadow-lg backdrop-blur-sm md:px-8 md:pb-8 md:pt-9 transition-all duration-300 hover:border-[#58B4FD] hover:shadow-[0_0_18px_rgba(6,116,253,0.3)]"
    >
      <div
        class="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 md:gap-10"
      >
        <!-- Jangka Pendek -->
        <div>
          <h3
            class="mb-1.5 md:mb-3 font-['Poppins',sans-serif] text-[11px] font-bold uppercase tracking-wider text-white sm:text-xs md:text-base lg:text-lg"
          >
            Jangka Pendek
          </h3>

          <ol
            v-if="displayShortTerm.length"
            class="list-decimal space-y-1 md:space-y-2 pl-4 md:pl-5 font-['Poppins',sans-serif] text-[10px] font-medium leading-[15px] text-white/95 sm:text-xs sm:leading-[18px] md:text-[14px] lg:text-[15.5px] md:leading-[22px] lg:leading-[26px] marker:font-bold marker:text-white"
          >
            <li
              v-for="(workProgram, index) in displayShortTerm"
              :key="`short-${index}-${workProgram}`"
              class="pl-0.5 md:pl-1"
            >
              <div class="text-[10px] sm:text-xs md:text-[14px] lg:text-[15px] font-bold leading-tight text-white">
                {{ cleanWorkProgramsText(workProgram) }}
              </div>

              <p
                v-if="getItemDescription(workProgram)"
                class="mt-0.5 text-[9.5px] sm:text-[11px] md:text-[13px] lg:text-[13.5px] font-normal leading-snug text-white/90"
              >
                {{ getItemDescription(workProgram) }}
              </p>
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
            class="mb-1.5 md:mb-3 font-['Poppins',sans-serif] text-[11px] font-bold uppercase tracking-wider text-white sm:text-xs md:text-base lg:text-lg"
          >
            Jangka Panjang
          </h3>

          <ol
            v-if="displayLongTerm.length"
            class="list-decimal space-y-1 md:space-y-2 pl-4 md:pl-5 font-['Poppins',sans-serif] text-[10px] font-medium leading-[15px] text-white/95 sm:text-xs sm:leading-[18px] md:text-[14px] lg:text-[15.5px] md:leading-[22px] lg:leading-[26px] marker:font-bold marker:text-white"
          >
            <li
              v-for="(workProgram, index) in displayLongTerm"
              :key="`long-${index}-${workProgram}`"
              class="pl-0.5 md:pl-1"
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
