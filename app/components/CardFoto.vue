<script setup lang="ts">
import type { Candidate } from '~/types/candidate'

interface Props {
  candidate?: Candidate
  number?: number | string
  image?: string
  alt?: string
  size?: 'sm' | 'md' | 'lg'
  cardClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  candidate: undefined,
  number: 1,
  image: '',
  alt: 'Foto pasangan calon',
  size: 'md',
  cardClass: ''
})

const displayNumber = computed(() => props.candidate?.number ?? props.number)
const displayImage = computed(() => props.candidate?.image ?? props.image)
const displayAlt = computed(() => {
  if (props.candidate) {
    return `Foto pasangan calon ${props.candidate.ketua} & ${props.candidate.wakil}`
  }
  return props.alt
})

const formattedNumber = computed(() => {
  const num = typeof displayNumber.value === 'string'
    ? Number.parseInt(displayNumber.value, 10)
    : displayNumber.value

  if (Number.isNaN(num)) {
    return String(displayNumber.value)
  }

  return num.toString().padStart(2, '0')
})

const cardDimensions = computed(() => {
  if (props.cardClass) {
    return props.cardClass
  }

  switch (props.size) {
    case 'sm':
      return 'h-[195px] w-[135px] sm:h-[225px] sm:w-[155px]'

    case 'lg':
      return 'h-[210px] w-[140px] sm:h-[240px] sm:w-[165px] md:h-[390px] md:w-[260px] lg:h-[430px] lg:w-[290px]'

    case 'md':
    default:
      return 'h-[200px] w-[138px] sm:h-[260px] sm:w-[180px] md:h-[360px] md:w-[250px]'
  }
})
</script>

<template>
  <div
    class="group relative inline-flex select-none flex-col items-center"
  >
    <!-- Photo Card -->
    <div class="relative pr-2 pt-2 md:pr-3 md:pt-3">
      <!-- Candidate Number -->
      <div
        class="absolute right-0 top-0 z-20 flex items-center justify-center
               rounded-full border-2 border-white
               bg-linear-to-br from-[#072750] to-[#0776FD]
               shadow-[0_0_8px_rgba(255,255,255,0.95)] md:shadow-[0_0_13px_rgba(255,255,255,1)]"
        :class="
          props.size === 'sm'
            ? 'h-7 w-7 text-xs sm:h-8 sm:w-8'
            : 'h-8 w-8 text-xs sm:h-9 sm:w-9 md:h-12 md:w-12 lg:h-14 lg:w-14 md:text-xl lg:text-2xl'
        "
      >
        <span
          class="font-['Poppins',sans-serif] font-extrabold tracking-tight text-white leading-none"
        >
          {{ formattedNumber }}
        </span>
      </div>

      <!-- Photo Frame -->
      <div
        class="relative overflow-hidden
               rounded-tl-[50px] md:rounded-tl-[80px] lg:rounded-tl-[98px]
               rounded-br-[25px] md:rounded-br-[40px] lg:rounded-br-[49px]
               border-2 md:border-[3.5px] border-white
               bg-linear-to-tr from-[#0775FE] to-[#59B5FE]
               shadow-[0_0_8px_2px_rgba(255,255,255,0.9)] md:shadow-[0_0_12px_4px_rgba(255,255,255,1)]
               transition-all duration-300
               group-hover:shadow-[0_0_18px_5px_rgba(89,181,254,0.95)]"
        :class="cardDimensions"
      >
        <!-- Candidate Image -->
        <img
          v-if="displayImage"
          :src="displayImage"
          :alt="displayAlt"
          class="h-full w-full object-cover object-top
                 transition-transform duration-500
                 group-hover:scale-105"
        >

        <!-- Image Placeholder -->
        <div
          v-else
          class="flex h-full w-full flex-col items-center justify-center
                 gap-3 bg-linear-to-b from-[#0775FE]/40 to-[#072750]/80
                 p-4 text-center text-white/90"
        >
          <div
            class="flex h-16 w-16 items-center justify-center
                   rounded-full border border-white/40
                   bg-white/10 shadow-inner backdrop-blur-xs"
          >
            <svg
              class="h-8 w-8 text-white/80"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.8"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-5 7h10a7 7 0 00-5-7z"
              />
            </svg>
          </div>

          <span
            class="text-xs font-semibold tracking-wide text-white/80 md:text-sm"
          >
            Area Foto Paslon {{ formattedNumber }}
          </span>
        </div>

        <!-- Bottom Vignette -->
        <div
          class="pointer-events-none absolute inset-x-0 bottom-0 h-20
                 bg-linear-to-t from-[#072750]/80 via-transparent to-transparent"
        />
      </div>
    </div>
  </div>
</template>

