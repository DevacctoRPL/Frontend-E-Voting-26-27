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
    <!-- MISI Badge -->
    <div
      id="mission-title"
      class="absolute left-6 top-0 z-10
             flex h-7.5 w-25 items-center justify-center
             rounded-full
             border border-[#0674FD]
             bg-linear-to-b from-[#06264F] to-[#0776FC]
             shadow-md"
    >
      <span
        class="font-sans text-[16px] font-bold tracking-wide text-white"
      >
        MISI
      </span>
    </div>

    <!-- Card -->
    <div
      class="min-h-45 w-full
             rounded-[14px]
             border border-[#0674FD]
             bg-[#072750]/85
             px-5 pb-4 pt-7
             text-white
             shadow-lg
             backdrop-blur-sm"
    >
      <ol
        v-if="missionList.length"
        class="space-y-0.5"
      >
        <li
          v-for="(missionText, index) in missionList"
          :key="`${index}-${missionText}`"
          class="flex items-start gap-1.5
                 font-sans text-[11px] font-medium
                 leading-[1.35] text-white"
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
        class="font-sans text-xs italic text-white/60"
      >
        Belum ada data misi.
      </p>
    </div>
  </section>
</template>
