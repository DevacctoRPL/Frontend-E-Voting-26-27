<script setup lang="ts">
interface Props {
  misi?: string[] | string
  image?: string
}

const props = withDefaults(defineProps<Props>(), {
  misi: () => [],
  image: ''
})

const misiList = computed(() => {
  if (Array.isArray(props.misi)) {
    return props.misi
  }
  if (typeof props.misi === 'string' && props.misi.trim().length > 0) {
    return props.misi.split('\n').filter(item => item.trim() !== '')
  }
  return []
})
</script>

<template>
  <div class="relative w-full max-w-[420px] min-h-[300px] pt-7">
    <!-- Badge Header MISI sesuai Figma Desktop -->
    <div
      class="absolute top-0 left-6 z-10 flex h-[48px] w-[158px] items-center justify-center rounded-full border-[1.89px] border-[#0674FD] bg-gradient-to-b from-[#06264F] to-[#0776FC] shadow-md"
    >
      <span class="font-sans text-[24px] font-bold tracking-wider text-white">
        MISI
      </span>
    </div>

    <!-- Kontainer Kartu Misi -->
    <div
      class="flex h-full min-h-[280px] w-full flex-col justify-between rounded-[23px] border-[1.89px] border-[#0674FD] bg-[#072750]/80 p-6 pt-9 text-white shadow-xl backdrop-blur-sm"
    >
      <!-- Slot / Tempat untuk Foto (jika ada foto yang ingin ditaruh) -->
      <div v-if="image || $slots.image" class="mb-4 overflow-hidden rounded-xl">
        <slot name="image">
          <img
            v-if="image"
            :src="image"
            alt="Foto Misi"
            class="h-44 w-full object-cover"
          >
        </slot>
      </div>
      <!-- Tempat kosong cadangan jika ingin menampilkan placeholder foto nanti -->
      <div
        v-else-if="$attrs['show-photo-placeholder']"
        class="mb-4 flex h-36 w-full items-center justify-center rounded-xl border border-dashed border-[#0674FD]/50 bg-[#06264F]/50 text-sm text-[#5CB8FF]"
      >
        <span>[Area Foto Misi]</span>
      </div>

      <!-- Isi Teks Misi -->
      <div class="flex-1">
        <slot>
          <ol v-if="misiList.length > 0" class="space-y-3">
            <li
              v-for="(item, index) in misiList"
              :key="index"
              class="flex items-start gap-2.5 font-sans text-[15px] font-medium leading-[24px] text-white/95 md:text-[16px] md:leading-[26px]"
            >
              <span class="font-bold text-[#5CB8FF]">{{ index + 1 }}.</span>
              <span>{{ item.replace(/^\d+\.\s*/, '') }}</span>
            </li>
          </ol>
          <p v-else class="font-sans text-[15px] text-white/70 italic">
            Belum ada data misi.
          </p>
        </slot>
      </div>
    </div>
  </div>
</template>
