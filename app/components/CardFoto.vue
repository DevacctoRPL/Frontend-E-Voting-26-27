<script setup lang="ts">
interface Props {
  number?: number | string
  image?: string
  alt?: string
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  number: 1,
  image: '',
  alt: 'Foto pasangan calon',
  size: 'md'
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
  switch (props.size) {
    case 'sm':
      return 'h-[270px] w-[190px]'

    case 'lg':
      return 'h-[390px] w-[280px] md:h-[440px] md:w-[310px]'

    case 'md':
    default:
      return 'h-[330px] w-[230px] md:h-[380px] md:w-[260px]'
  }
})
</script>

<template>
  <div
    class="group relative inline-flex select-none flex-col items-center"
  >
    <!-- Photo Card -->
    <div class="relative pr-3 pt-3">
      <!-- Candidate Number -->
      <div
        class="absolute right-0 top-0 z-20 flex items-center justify-center
               rounded-full border-2 border-white
               bg-linear-to-br from-[#072750] to-[#0776FD]
               shadow-[0_0_12px_rgba(255,255,255,0.95)]"
        :class="
          props.size === 'sm'
            ? 'h-10 w-10 text-base'
            : 'h-12 w-12 text-lg md:h-14 md:w-14 md:text-xl'
        "
      >
        <span
          class="font-sans font-extrabold tracking-tight text-white"
        >
          {{ formattedNumber }}
        </span>
      </div>

      <!-- Photo Frame -->
      <div
        class="relative overflow-hidden
               rounded-bl-[39px] rounded-br-lg rounded-tl-lg rounded-tr-[65px]
               border-[3px] border-white
               bg-linear-to-tr from-[#0775FE] to-[#59B5FE]
               shadow-[0_0_14px_3px_rgba(255,255,255,0.85)]
               transition-all duration-300
               group-hover:shadow-[0_0_20px_5px_rgba(89,181,254,0.95)]"
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
