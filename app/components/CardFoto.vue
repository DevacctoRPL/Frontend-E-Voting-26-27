<script setup lang="ts">
interface Props {
  number?: number | string
  image?: string
  alt?: string
  size?: 'sm' | 'md' | 'lg'
  cardClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  number: 1,
  image: '',
  alt: 'Foto pasangan calon',
  size: 'md',
  cardClass: ''
})

const formattedNumber = computed(() => {
  const number = typeof props.number === 'string'
    ? Number.parseInt(props.number, 10)
    : props.number

  if (Number.isNaN(number)) {
    return props.number
  }

  return number.toString().padStart(2, '0')
})

const cardDimensions = computed(() => {
  if (props.cardClass) {
    return props.cardClass
  }

  switch (props.size) {
    case 'sm':
      return 'h-[195px] w-[135px] sm:h-[225px] sm:w-[155px]'

    case 'lg':
      return 'h-[340px] w-[240px] md:h-[390px] md:w-[270px] lg:h-[430px] lg:w-[290px]'

    case 'md':
    default:
      return 'h-[270px] w-[190px] sm:h-[320px] sm:w-[225px] md:h-[375px] md:w-[260px]'
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
               shadow-[0_0_10px_rgba(255,255,255,0.95)] md:shadow-[0_0_13px_rgba(255,255,255,1)]"
        :class="
          props.size === 'sm'
            ? 'h-7 w-7 text-xs sm:h-8 sm:w-8'
            : 'h-9 w-9 text-sm sm:h-11 sm:w-11 md:h-14 md:w-14 md:text-2xl'
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
               rounded-tl-none rounded-br-none
               rounded-tr-[50px] rounded-bl-[25px]
               md:rounded-tr-[98px] md:rounded-bl-[49px]
               border-2 md:border-[3.5px] border-white
               bg-linear-to-tr from-[#0775FE] to-[#59B5FE]
               shadow-[0_0_8px_2px_rgba(255,255,255,0.9)] md:shadow-[0_0_12px_4px_rgba(255,255,255,1)]
               transition-all duration-300
               group-hover:shadow-[0_0_18px_5px_rgba(89,181,254,0.95)]"
        :class="cardDimensions"
      >
        <!-- Candidate Image -->
        <img
          v-if="props.image"
          :src="props.image"
          :alt="props.alt"
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
