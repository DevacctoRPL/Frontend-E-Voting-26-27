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
  vote: []
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
  <article class="flex w-[155px] sm:w-[175px] md:w-[260px] lg:w-[290px] xl:w-[320px] flex-col items-center gap-3 sm:gap-4 md:gap-5">
    <!-- Photo Card -->
    <div class="relative w-full pr-2 pt-2 md:pr-3 md:pt-3">
      <!-- Candidate Number -->
      <div
        class="absolute right-0 top-0 z-20 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-linear-to-br from-[#072750] to-[#0776FD] shadow-[0_0_10px_rgba(255,255,255,0.95)] md:h-12 md:w-12 xl:h-13 xl:w-13"
      >
        <span class="font-['Poppins',sans-serif] text-xs font-extrabold tracking-tight text-white md:text-lg xl:text-xl leading-none">
          {{ formattedNumber }}
        </span>
      </div>

      <!-- Photo Frame -->
      <div
        class="relative aspect-[5/7] w-full overflow-hidden rounded-tl-none rounded-br-none rounded-tr-[50px] rounded-bl-[25px] border-2 border-white bg-linear-to-tr from-[#0776FE] to-[#59B5FE] shadow-[0_0_6px_2px_rgba(255,255,255,1)] md:rounded-tr-[79px] md:rounded-bl-[39px] md:border-[3px] md:shadow-[0_0_9.4px_3.1px_rgba(255,255,255,1)]"
      >
        <img
          :src="image"
          :alt="alt"
          class="h-full w-full object-cover object-top"
        >
        <div class="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-[#072750]/80 via-transparent to-transparent" />
      </div>
    </div>

    <!-- Name & Class Information -->
    <div class="flex w-full flex-col gap-1.5 md:gap-2.5">
      <!-- Ketua -->
      <div class="flex h-6 sm:h-7 md:h-9 lg:h-10 w-full items-center justify-between rounded-tl-lg md:rounded-tl-[17.6px] bg-white pl-2 pr-1.5 md:pl-3 md:pr-2 shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:shadow-[0_8.8px_8.8px_rgba(0,0,0,0.25)]">
        <span class="truncate bg-linear-to-b from-[#00224F] to-[#004EB5] bg-clip-text font-['Poppins',sans-serif] text-[9px] font-bold leading-none text-transparent sm:text-[10px] md:text-xs lg:text-[15px]">
          {{ ketua }}
        </span>
        <span class="flex h-4 md:h-6 shrink-0 items-center justify-center rounded-xs md:rounded-md bg-linear-to-b from-[#0076FF] to-[#00224F] px-1.5 md:px-2.5 font-['Poppins',sans-serif] text-[7.5px] font-bold leading-none text-white shadow-[0_0_4px_rgba(0,0,0,0.3)] md:shadow-[0_0_8.8px_rgba(0,0,0,0.3)] md:text-xs lg:text-[13px]">
          {{ ketuaClass }}
        </span>
      </div>

      <!-- Wakil -->
      <div class="flex h-6 sm:h-7 md:h-9 lg:h-10 w-full items-center justify-between rounded-tl-lg md:rounded-tl-[17.6px] bg-white pl-2 pr-1.5 md:pl-3 md:pr-2 shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:shadow-[0_8.8px_8.8px_rgba(0,0,0,0.25)]">
        <span class="truncate bg-linear-to-b from-[#00224F] to-[#004EB5] bg-clip-text font-['Poppins',sans-serif] text-[9px] font-bold leading-none text-transparent sm:text-[10px] md:text-xs lg:text-[15px]">
          {{ wakil }}
        </span>
        <span class="flex h-4 md:h-6 shrink-0 items-center justify-center rounded-xs md:rounded-md bg-linear-to-b from-[#0076FF] to-[#00224F] px-1.5 md:px-2.5 font-['Poppins',sans-serif] text-[7.5px] font-bold leading-none text-white shadow-[0_0_4px_rgba(0,0,0,0.3)] md:shadow-[0_0_8.8px_rgba(0,0,0,0.3)] md:text-xs lg:text-[13px]">
          {{ wakilClass }}
        </span>
      </div>
    </div>

    <!-- Button Vote -->
    <ButtonVote
      variant="vote"
      size="md"
      class="mt-1"
      @click="emit('vote')"
    >
      VOTE
    </ButtonVote>
  </article>
</template>
