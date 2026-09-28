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
    class="relative flex h-full w-full flex-col pt-3.5 md:pt-6"
    aria-labelledby="vision-title"
  >
    <!-- Badge Visi -->
    <div
      id="vision-title"
      class="absolute left-6 md:left-8 top-0 z-10 flex h-[25px] w-[81px] md:h-[47px] md:w-[153px] items-center justify-center rounded-[17.5px] md:rounded-[33px] border md:border-[1.89px] border-[#0674FD] bg-linear-to-b from-[#06264F] to-[#0776FC] shadow-md"
    >
      <span class="font-['Poppins',sans-serif] text-[13px] md:text-[24px] lg:text-[27px] font-bold tracking-wider text-white uppercase leading-none">
        VISI
      </span>
    </div>

    <!-- Content Box -->
    <div
      class="flex flex-1 w-full flex-col justify-start rounded-[12px] md:rounded-[23px] border md:border-[1.89px] border-[#0674FD] bg-[#072750]/82 px-4 pb-4 pt-5 md:px-7 md:pb-6 md:pt-9 text-white shadow-lg backdrop-blur-sm"
    >
      <div class="flex-1">
        <slot>
          <p
            v-if="props.vision"
            class="font-['Poppins',sans-serif] text-[10.5px] font-medium leading-[16.5px] text-white/95 sm:text-xs md:text-[18px] lg:text-[19.5px] md:leading-[28px] lg:leading-[31px]"
          >
            {{ props.vision }}
          </p>

          <p
            v-else
            class="font-['Poppins',sans-serif] text-xs italic text-Teks-sekunder-icon-non-aktif-500"
          >
            Belum ada data visi.
          </p>
        </slot>
      </div>
    </div>
  </section>
</template>
