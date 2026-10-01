<script setup lang="ts">
import type { Candidate } from '~/types/candidate'

interface Props {
  candidate?: Candidate
  mission?: string[] | string
}

const props = withDefaults(defineProps<Props>(), {
  candidate: undefined,
  mission: () => []
})

const rawMission = computed(() => props.candidate?.mission ?? props.mission)

const missionList = computed(() => {
  if (Array.isArray(rawMission.value)) {
    return rawMission.value
      .map(item => item.trim())
      .filter(Boolean)
  }

  if (typeof rawMission.value === 'string') {
    return rawMission.value
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
    class="relative flex h-full w-full flex-col pt-3 md:pt-6"
    aria-labelledby="mission-title"
  >
    <!-- Badge Misi -->
    <div
      id="mission-title"
      class="absolute left-4 md:left-8 top-0 z-10 flex h-[23px] w-[75px] md:h-[49px] md:w-[158px] items-center justify-center rounded-[17.5px] md:rounded-[34px] border border-[#0674FD] md:border-[1.95px] border-[#0674FD] bg-linear-to-b from-[#06264F] to-[#0776FC] shadow-md"
    >
      <span class="font-['Poppins',sans-serif] text-[11px] md:text-[24px] lg:text-[28px] font-bold tracking-wider text-white uppercase leading-none">
        MISI
      </span>
    </div>

    <!-- Content Box -->
    <div
      class="flex flex-1 w-full flex-col justify-start rounded-[12px] md:rounded-[23px] border border-[#0674FD] md:border-[1.89px] bg-[#072750]/82 px-3 pb-3 pt-4 md:px-7 md:pb-6 md:pt-9 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-[#58B4FD] hover:shadow-[0_0_18px_rgba(6,116,253,0.3)]"
    >
      <ol
        v-if="missionList.length"
        class="space-y-1 md:space-y-2"
      >
        <li
          v-for="(missionText, index) in missionList"
          :key="`${index}-${missionText}`"
          class="flex items-start gap-1.5 font-['Poppins',sans-serif] text-[10px] font-medium leading-[15px] sm:text-xs sm:leading-[18px] md:text-[14px] lg:text-[15.5px] md:leading-[22px] lg:leading-[26px] text-white/95"
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
