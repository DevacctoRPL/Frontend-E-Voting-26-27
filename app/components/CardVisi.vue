<script setup lang="ts">
import type { Candidate } from '~/types/candidate'

interface Props {
  candidate?: Candidate
  vision?: string
}

const props = withDefaults(defineProps<Props>(), {
  candidate: undefined,
  vision: ''
})

const displayVision = computed(() => props.candidate?.vision ?? props.vision)
</script>

<template>
  <section
    class="relative flex h-full w-full flex-col pt-3 md:pt-6"
    aria-labelledby="vision-title"
  >
    <!-- Badge Visi -->
    <div
      id="vision-title"
      class="absolute left-4 md:left-8 top-0 z-10 flex h-[23px] w-[75px] md:h-[47px] md:w-[153px] items-center justify-center rounded-[17.5px] md:rounded-[33px] border border-[#0674FD] md:border-[1.89px] bg-linear-to-b from-[#06264F] to-[#0776FC] shadow-md"
    >
      <span class="font-['Poppins',sans-serif] text-[11px] md:text-[24px] lg:text-[27px] font-bold tracking-wider text-white uppercase leading-none">
        VISI
      </span>
    </div>

    <!-- Content Box -->
    <div
      class="flex flex-1 w-full flex-col justify-start rounded-[12px] md:rounded-[23px] border border-[#0674FD] md:border-[1.89px] bg-[#072750]/82 px-3 pb-3 pt-4 md:px-7 md:pb-6 md:pt-9 text-white shadow-lg backdrop-blur-sm overflow-hidden"
    >
      <div class="flex-1">
        <slot>
          <p
            v-if="displayVision"
            class="font-['Poppins',sans-serif] text-[10px] font-medium leading-[15px] sm:text-xs sm:leading-[18px] md:text-[17px] lg:text-[19.5px] md:leading-[27px] lg:leading-[31px] text-white/95"
          >
            {{ displayVision }}
          </p>

          <p
            v-else
            class="font-['Poppins',sans-serif] text-xs italic text-Teks-sekunder-icon-non-aktif-500"
          >
            Belum ada data visi.
          </p>
        </slot>
      </div>
    </div>
  </section>
</template>

