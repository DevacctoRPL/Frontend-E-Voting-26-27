<script setup lang="ts">
interface Props {
  shortTerm?: string[]
  longTerm?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  shortTerm: () => [],
  longTerm: () => []
})

const cleanWorkProgramsText = (Workprograms: string) => {
  return Workprograms.replace(/^\d+\.\s*/, '').trim()
}
</script>

<template>
  <section
    class="relative w-full pt-5"
    aria-label="Program kerja pasangan calon"
  >
    <!-- Section title -->
    <div
      class="absolute left-6 top-0 z-10
             flex h-9 min-w-42.5 items-center justify-center
             rounded-full
             border border-[#0674FD]
             bg-linear-to-b from-[#06264F] to-[#0776FC]
             px-6
             shadow-md
             md:left-8 md:h-10 md:min-w-50"
    >
      <h2
        class="font-sans text-base font-bold uppercase tracking-wide text-white
               md:text-lg"
      >
        Program Kerja
      </h2>
    </div>

    <!-- Programs container -->
    <div
      class="w-full
             rounded-[14px]
             border border-[#0674FD]
             bg-[#072750]/85
             px-5 pb-6 pt-7
             text-white
             shadow-lg
             backdrop-blur-sm
             md:px-7 md:pb-7 md:pt-8"
    >
      <div
        class="grid grid-cols-1 gap-7
               md:grid-cols-2 md:gap-8"
      >
        <!-- Jangka Pendek -->
        <div>
          <h3
            class="mb-3 font-sans text-sm font-bold uppercase tracking-wide
                   text-white md:text-base"
          >
            Jangka Pendek
          </h3>

          <ol
            v-if="props.shortTerm.length"
            class="list-decimal space-y-1.5 pl-5
                   font-sans text-[12px] font-medium leading-[1.45]
                   text-white/95
                   marker:font-bold marker:text-white
                   md:text-[13px]"
          >
            <li
              v-for="(Workprograms, index) in props.shortTerm"
              :key="`short-${index}-${Workprograms}`"
              class="pl-1"
            >
              {{ cleanWorkProgramsText(Workprograms) }}
            </li>
          </ol>

          <p
            v-else
            class="font-sans text-xs italic text-white/60"
          >
            Belum ada program kerja jangka pendek.
          </p>
        </div>

        <!-- Jangka Panjang -->
        <div>
          <h3
            class="mb-3 font-sans text-sm font-bold uppercase tracking-wide
                   text-white md:text-base"
          >
            Jangka Panjang
          </h3>

          <ol
            v-if="props.longTerm.length"
            class="list-decimal space-y-1.5 pl-5
                   font-sans text-[12px] font-medium leading-[1.45]
                   text-white/95
                   marker:font-bold marker:text-white
                   md:text-[13px]"
          >
            <li
              v-for="(Workprograms, index) in props.longTerm"
              :key="`long-${index}-${Workprograms}`"
              class="pl-1"
            >
              {{ cleanWorkProgramsText(Workprograms) }}
            </li>
          </ol>

          <p
            v-else
            class="font-sans text-xs italic text-white/60"
          >
            Belum ada program kerja jangka panjang.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
