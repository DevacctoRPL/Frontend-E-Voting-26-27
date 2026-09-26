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
    class="relative w-full max-w-135 pt-3.75"
    aria-labelledby="mission-title"
  >
    <div
      id="mission-title"
      class="absolute left-6 top-0 z-10 flex h-7.5 md:h-10 w-22 md:w-32 items-center justify-center rounded-[17.5px] md:rounded-[34px] border-[1.89px] border-[#0674FD] bg-linear-to-b from-[#06264F] to-[#0776FC] shadow-md"
    >
      <span class="font-['Poppins',sans-serif] text-[15px] md:text-[18px] font-bold tracking-wider text-white uppercase">
        MISI
      </span>
    </div>

    <div
      class="min-h-45 w-full rounded-[12px] md:rounded-[14px] border-[1.89px] border-[#0674FD] bg-[#072750]/82 px-5 pb-4 pt-7 text-white shadow-lg backdrop-blur-sm"
    >
      <ol
        v-if="missionList.length"
        class="space-y-0.5"
      >
        <li
          v-for="(missionText, index) in missionList"
          :key="`${index}-${missionText}`"
          class="flex items-start gap-1.5 font-sans text-[11px] font-medium leading-[1.35] text-white"
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
        class="font-sans text-xs italic text-Teks-sekunder-icon-non-aktif-500"
      >
        Belum ada data misi.
      </p>
    </div>
  </section>
</template>
