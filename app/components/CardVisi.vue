<script setup lang="ts">
interface Props {
  vision?: string
}

const props = withDefaults(defineProps<Props>(), {
  vision: ''
})
</script>

<template>
  <section
    class="relative w-full max-w-135 pt-3.75"
    aria-labelledby="vision-title"
  >
    <div
      id="vision-title"
      class="absolute left-6 top-0 z-10 flex h-7.5 md:h-10 w-22 md:w-32 items-center justify-center rounded-[17.5px] md:rounded-[33px] border-[1.89px] border-[#0674FD] bg-linear-to-b from-[#06264F] to-[#0776FC] shadow-md"
    >
      <span class="font-['Poppins',sans-serif] text-[15px] md:text-[18px] font-bold tracking-wider text-white uppercase">
        VISI
      </span>
    </div>

    <div
      class="min-h-45 w-full rounded-[12px] md:rounded-[14px] border-[1.89px] border-[#0674FD] bg-[#072750]/82 px-5 pb-4 pt-7 text-white shadow-lg backdrop-blur-sm"
    >
      <div class="flex-1">
        <slot>
          <p
            v-if="props.vision"
            class="font-sans text-[15px] font-medium leading-6 text-white/95 md:text-[16px] md:leading-6.5"
          >
            {{ props.vision }}
          </p>

          <p
            v-else
            class="font-sans text-xs italic text-Teks-sekunder-icon-non-aktif-500"
          >
            Belum ada data visi.
          </p>
        </slot>
      </div>
    </div>
  </section>
</template>
