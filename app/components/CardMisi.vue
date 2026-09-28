<script setup lang="ts">
interface Props {
  mission?: string[] | string
}

const props = withDefaults(defineProps<Props>(), {
  mission: () => []
})

const missionList = computed(() => {
  if (Array.isArray(props.mission)) {
    return props.mission
      .map(item => item.trim())
      .filter(Boolean)
  }

  if (typeof props.mission === 'string') {
    return props.mission
      .split('\n')
      .map(item => item.trim())
      .filter(Boolean)
  }

  return []
})

const cleanMissionText = (missionText: string) => {
  return missionText.replace(/^\d+\.\s*/, '')
}
</script>

<template>
  <section
    class="relative flex h-full w-full flex-col pt-3.5 md:pt-6"
    aria-labelledby="mission-title"
  >
    <!-- Badge Misi -->
    <div
      id="mission-title"
      class="absolute left-6 md:left-8 top-0 z-10 flex h-[25px] w-[81px] md:h-[49px] md:w-[158px] items-center justify-center rounded-[17.5px] md:rounded-[34px] border md:border-[1.95px] border-[#0674FD] bg-linear-to-b from-[#06264F] to-[#0776FC] shadow-md"
    >
      <span class="font-['Poppins',sans-serif] text-[13px] md:text-[24px] lg:text-[28px] font-bold tracking-wider text-white uppercase leading-none">
        MISI
      </span>
    </div>

    <!-- Content Box -->
    <div
      class="flex flex-1 w-full flex-col justify-start rounded-[12px] md:rounded-[23px] border md:border-[1.89px] border-[#0674FD] bg-[#072750]/82 px-4 pb-4 pt-5 md:px-7 md:pb-6 md:pt-9 text-white shadow-lg backdrop-blur-sm"
    >
      <ol
        v-if="missionList.length"
        class="space-y-1 md:space-y-2"
      >
        <li
          v-for="(missionText, index) in missionList"
          :key="`${index}-${missionText}`"
          class="flex items-start gap-1.5 font-['Poppins',sans-serif] text-[10.5px] font-medium leading-[17px] text-white/95 sm:text-xs md:text-[14px] lg:text-[15.5px] md:leading-[22px] lg:leading-[26px]"
        >
          <span
            class="shrink-0 font-bold text-white"
            aria-hidden="true"
          >
            {{ index + 1 }}.
          </span>

          <span>
            {{ cleanMissionText(missionText) }}
          </span>
        </li>
      </ol>

      <p
        v-else
        class="font-['Poppins',sans-serif] text-xs italic text-Teks-sekunder-icon-non-aktif-500"
      >
        Belum ada data misi.
      </p>
    </div>
  </section>
</template>
