<script setup lang="ts">
interface Props {
  number: number | string
  image: string
  alt?: string
  ketua: string
  ketuaClass: string
  wakil: string
  wakilClass: string
}

const props = withDefaults(defineProps<Props>(), {
  alt: 'Foto pasangan calon'
})

const emit = defineEmits<{
  vote: [number: number]
}>()

const formattedNumber = computed(() => {
  const number = typeof props.number === 'string'
    ? Number.parseInt(props.number, 10)
    : props.number

  if (Number.isNaN(number)) {
    return String(props.number)
  }

  return number.toString().padStart(2, '0')
})
</script>

<template>
  <article
    class="group flex w-[145px] sm:w-[175px] md:w-65 lg:w-72.5 xl:w-[310px] flex-col items-center gap-2.5 sm:gap-4 md:gap-5 transition-all duration-300 hover:-translate-y-1.5 select-none"
  >
    <!-- Photo Card -->
    <div class="relative w-full pr-1.5 pt-1.5 md:pr-3 md:pt-3">
      <!-- Candidate Number -->
      <div
        class="absolute right-0 top-0 z-20 flex h-7 w-7 sm:h-8 sm:w-8 md:h-12 md:w-12 xl:h-13 xl:w-13 items-center justify-center rounded-full border-2 border-white bg-linear-to-br from-[#072750] to-[#0776FD] shadow-[0_0_8px_rgba(255,255,255,0.95)] md:shadow-[0_0_12px_rgba(255,255,255,1)] transition-transform duration-300 group-hover:scale-105"
      >
        <span
          class="font-poppins text-[11px] sm:text-xs md:text-lg xl:text-xl font-extrabold tracking-tight text-white leading-none"
        >
          {{ formattedNumber }}
        </span>
      </div>

      <!-- Photo Frame -->
      <div
        class="relative aspect-5/7 w-full overflow-hidden border-2 md:border-[3px] border-white bg-linear-to-tr from-[#0776FE] to-[#59B5FE] shadow-[0_0_6px_2px_rgba(255,255,255,1)] rounded-tl-[50px] md:rounded-tl-[78px] rounded-br-[25px] md:rounded-br-[39px] md:shadow-[0_0_9.4px_3.1px_rgba(255,255,255,1)] transition-all duration-300 group-hover:shadow-[0_0_14px_4px_rgba(89,181,254,0.95)]"
      >
        <img
          :src="image"
          :alt="alt"
          class="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        >
        <div
          class="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-[#072750]/80 via-transparent to-transparent"
        />
      </div>
    </div>

    <!-- Name & Class Information -->
    <div class="flex w-full flex-col gap-4 sm:gap-5 md:gap-7">
      <!-- Ketua -->
      <div
        class="relative flex h-6.5 w-full items-center rounded-tl-lg bg-white pl-2 pr-14 shadow-[0_4px_4px_rgba(0,0,0,0.25)] sm:h-7 md:h-9 md:rounded-tl-[17.6px] md:pl-3 md:pr-24 md:shadow-[0_8.8px_8.8px_rgba(0,0,0,0.25)] lg:h-10"
      >
        <span
          class="min-w-0 flex-1 truncate bg-linear-to-b from-[#00224F] to-[#004EB5] bg-clip-text font-poppins text-[9px] font-bold leading-none text-transparent sm:text-[10px] md:text-xs lg:text-[14px]"
          :title="ketua"
        >
          {{ ketua }}
        </span>

        <!-- Ketua Class -->
        <span
          class="absolute -bottom-2 right-0 flex h-3.5 shrink-0 items-center justify-center rounded-[2px] bg-linear-to-b from-[#0076FF] to-[#00224F] px-1 font-poppins text-[7px] font-bold leading-none text-white shadow-[0_0_4px_rgba(0,0,0,0.3)] sm:-bottom-2.5 sm:h-4 sm:px-1.5 sm:text-[8px] md:-bottom-3.5 md:h-6 md:rounded-[4px] md:px-2.5 md:text-xs md:shadow-[0_0_8.8px_rgba(0,0,0,0.3)] lg:text-[13px]"
        >
          {{ ketuaClass }}
        </span>
      </div>

      <!-- Wakil -->
      <div
        class="relative flex h-6.5 w-full items-center rounded-bl-lg bg-white pl-2 pr-14 shadow-[0_4px_4px_rgba(0,0,0,0.25)] sm:h-7 md:h-9 md:rounded-bl-[17.6px] md:pl-3 md:pr-24 md:shadow-[0_8.8px_8.8px_rgba(0,0,0,0.25)] lg:h-10"
      >
        <span
          class="min-w-0 flex-1 truncate bg-linear-to-b from-[#00224F] to-[#004EB5] bg-clip-text font-poppins text-[9px] font-bold leading-none text-transparent sm:text-[10px] md:text-xs lg:text-[14px]"
          :title="wakil"
        >
          {{ wakil }}
        </span>

        <!-- Wakil Class -->
        <span
          class="absolute -bottom-2 right-0 flex h-3.5 shrink-0 items-center justify-center rounded-[2px] bg-linear-to-b from-[#0076FF] to-[#00224F] px-1 font-poppins text-[7px] font-bold leading-none text-white shadow-[0_0_4px_rgba(0,0,0,0.3)] sm:-bottom-2.5 sm:h-4 sm:px-1.5 sm:text-[8px] md:-bottom-3.5 md:h-6 md:rounded-[4px] md:px-2.5 md:text-xs md:shadow-[0_0_8.8px_rgba(0,0,0,0.3)] lg:text-[13px]"
        >
          {{ wakilClass }}
        </span>
      </div>
    </div>

    <!-- Button Vote -->
    <ButtonVote variant="vote" size="md" class="mt-1" @click="emit('vote', Number(props.number))">
      VOTE
    </ButtonVote>
  </article>
</template>
