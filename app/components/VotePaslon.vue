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
  <article class="flex w-40 flex-col items-center gap-3 sm:w-44 md:w-64 md:gap-5 xl:w-72">
    <div class="relative w-full pr-2 pt-2 md:pr-3 md:pt-3">
      <div
        class="absolute right-0 top-0 z-20 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-linear-to-br from-[#072750] to-[#0776FD] shadow-[0_0_10px_rgba(255,255,255,0.95)] md:h-12 md:w-12 xl:h-14 xl:w-14"
      >
        <span class="font-['Poppins',sans-serif] text-sm font-extrabold tracking-tight text-white md:text-lg xl:text-xl">
          {{ formattedNumber }}
        </span>
      </div>

      <div
        class="relative aspect-[5/7] w-full overflow-hidden rounded-tl-md rounded-tr-[50px] rounded-br-md rounded-bl-[25px] border-2 border-white bg-linear-to-tr from-[#0776FE] to-[#59B5FE] shadow-[0_0_6px_2px_rgba(255,255,255,1)] md:rounded-tr-[79px] md:rounded-bl-[39px] md:border-[3px] md:shadow-[0_0_9px_3px_rgba(255,255,255,1)]"
      >
        <img
          :src="image"
          :alt="alt"
          class="h-full w-full object-cover object-top"
        >
        <div class="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-[#072750]/80 via-transparent to-transparent" />
      </div>
    </div>

    <div class="flex w-full flex-col gap-1.5 md:gap-2">
      <div class="flex h-5 w-full items-center justify-between rounded-tl-lg bg-white pl-2 pr-1 shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:h-7 lg:h-8">
        <span class="truncate bg-linear-to-b from-[#00224F] to-[#004EB5] bg-clip-text font-['Poppins',sans-serif] text-[8.5px] font-bold leading-none text-transparent md:text-xs lg:text-base">
          {{ ketua }}
        </span>
        <span class="flex h-[13px] shrink-0 items-center justify-center rounded-sm bg-linear-to-b from-[#0076FF] to-[#00224F] px-1 font-['Poppins',sans-serif] text-[8px] font-bold leading-none text-white shadow-[0_0_4px_rgba(0,0,0,0.3)] md:h-6 md:rounded-md md:px-1.5 md:text-xs lg:text-sm">
          {{ ketuaClass }}
        </span>
      </div>

      <div class="flex h-5 w-full items-center justify-between rounded-tl-lg bg-white pl-2 pr-1 shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:h-7 lg:h-8">
        <span class="truncate bg-linear-to-b from-[#00224F] to-[#004EB5] bg-clip-text font-['Poppins',sans-serif] text-[8.5px] font-bold leading-none text-transparent md:text-xs lg:text-base">
          {{ wakil }}
        </span>
        <span class="flex h-[13px] shrink-0 items-center justify-center rounded-sm bg-linear-to-b from-[#0076FF] to-[#00224F] px-1 font-['Poppins',sans-serif] text-[8px] font-bold leading-none text-white shadow-[0_0_4px_rgba(0,0,0,0.3)] md:h-6 md:rounded-md md:px-1.5 md:text-xs lg:text-sm">
          {{ wakilClass }}
        </span>
      </div>
    </div>

    <ButtonVote
      variant="vote"
      size="md"
      @click="emit('vote')"
    >
      VOTE
    </ButtonVote>
  </article>
</template>
