<script setup lang="ts">
interface Props {
  visi?: string
  image?: string
}

withDefaults(defineProps<Props>(), {
  visi: '',
  image: ''
})
</script>

<template>
  <div class="relative w-full max-w-[420px] min-h-[300px] pt-7">
    <!-- Badge Header VISI sesuai Figma Desktop -->
    <div
      class="absolute top-0 left-6 z-10 flex h-[48px] w-[155px] items-center justify-center rounded-full border-[1.89px] border-[#0674FD] bg-gradient-to-b from-[#06264F] to-[#0776FC] shadow-md"
    >
      <span class="font-sans text-[24px] font-bold tracking-wider text-white">
        VISI
      </span>
    </div>

    <!-- Kontainer Kartu Visi -->
    <div
      class="flex h-full min-h-[280px] w-full flex-col justify-between rounded-[23px] border-[1.89px] border-[#0674FD] bg-[#072750]/80 p-6 pt-9 text-white shadow-xl backdrop-blur-sm"
    >
      <!-- Slot / Tempat untuk Foto (jika ada foto yang ingin ditaruh) -->
      <div v-if="image || $slots.image" class="mb-4 overflow-hidden rounded-xl">
        <slot name="image">
          <img
            v-if="image"
            :src="image"
            alt="Foto Visi"
            class="h-44 w-full object-cover"
          >
        </slot>
      </div>
      <!-- Tempat kosong cadangan jika ingin menampilkan placeholder foto nanti -->
      <div
        v-else-if="$attrs['show-photo-placeholder']"
        class="mb-4 flex h-36 w-full items-center justify-center rounded-xl border border-dashed border-[#0674FD]/50 bg-[#06264F]/50 text-sm text-[#5CB8FF]"
      >
        <span>[Area Foto Visi]</span>
      </div>

      <!-- Isi Teks Visi -->
      <div class="flex-1">
        <slot>
          <p class="font-sans text-[16px] font-medium leading-[28px] text-white/95 md:text-[18px] md:leading-[30px]">
            {{ visi }}
          </p>
        </slot>
      </div>
    </div>
  </div>
</template>
