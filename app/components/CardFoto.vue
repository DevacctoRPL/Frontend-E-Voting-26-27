<script setup lang="ts">
interface CandidateNames {
  ketua?: string
  ketuaClass?: string
  wakil?: string
  wakilClass?: string
}

interface Props {
  number?: number | string
  image?: string
  alt?: string
  category?: 'MPK' | 'OSIS' | string
  size?: 'sm' | 'md' | 'lg'
  names?: CandidateNames
}

const props = withDefaults(defineProps<Props>(), {
  number: 1,
  image: '',
  alt: 'Foto Paslon',
  category: 'MPK',
  size: 'md',
  names: undefined
})

const formattedNumber = computed(() => {
  const num = typeof props.number === 'string' ? Number.parseInt(props.number, 10) : props.number
  if (Number.isNaN(num)) {
    return props.number
  }
  return num < 10 ? `0${num}` : `${num}`
})

const cardDimensions = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'w-[190px] h-[270px]'
    case 'lg':
      return 'w-[280px] md:w-[310px] h-[390px] md:h-[440px]'
    case 'md':
    default:
      return 'w-[230px] md:w-[260px] h-[330px] md:h-[380px]'
  }
})
</script>

<template>
  <div class="relative inline-flex flex-col items-center group select-none">
    <!-- Kontainer Kartu Foto Utama -->
    <div class="relative pt-3 pr-3">
      <!-- Badge Nomor Paslon (Top-Right Floating Circle) -->
      <div
        class="absolute top-0 right-0 z-20 flex items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#072750] to-[#0776FD] shadow-[0_0_12px_rgba(255,255,255,0.95)]"
        :class="size === 'sm' ? 'w-10 h-10 text-base' : 'w-12 h-12 md:w-14 md:h-14 text-lg md:text-xl'"
      >
        <span class="font-sans font-extrabold text-white tracking-tight">
          {{ formattedNumber }}
        </span>
      </div>

      <!-- Bingkai Kartu Asimetris Sesuai Figma Desktop -->
      <div
        class="relative overflow-hidden rounded-tl-lg rounded-br-lg rounded-tr-[65px] md:rounded-tr-[78px] rounded-bl-[32px] md:rounded-bl-[39px] border-[3px] md:border-[3.5px] border-white bg-gradient-to-tr from-[#0775FE] to-[#59B5FE] shadow-[0_0_14px_3px_rgba(255,255,255,0.85)] transition-all duration-300 group-hover:shadow-[0_0_20px_5px_rgba(89,181,254,0.95)]"
        :class="cardDimensions"
      >
        <!-- Slot / Tag Gambar Foto Paslon -->
        <slot name="image">
          <img
            v-if="image"
            :src="image"
            :alt="alt"
            class="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          >

          <!-- Placeholder saat foto belum tersedia -->
          <div
            v-else
            class="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-[#0775FE]/40 to-[#072750]/80 p-4 text-center text-white/90"
          >
            <div class="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/10 shadow-inner backdrop-blur-xs">
              <svg
                class="h-8 w-8 text-white/80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div class="text-xs md:text-sm font-semibold tracking-wide text-white/80">
              Area Foto Paslon {{ formattedNumber }}
            </div>
          </div>
        </slot>

        <!-- Overlay Vignette Gradasi Bawah -->
        <div class="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#071A33]/80 via-transparent to-transparent" />
      </div>
    </div>

    <!-- Informasi Nama & Kelas (Opsional, jika prop names disediakan) -->
    <div
      v-if="names && (names.ketua || names.wakil)"
      class="mt-4 flex w-full flex-col gap-2"
    >
      <!-- Baris Ketua -->
      <div
        v-if="names.ketua"
        class="flex items-center justify-between rounded-tl-2xl bg-white px-3 py-1.5 shadow-[0_4px_8px_rgba(0,0,0,0.25)]"
      >
        <span class="truncate font-sans text-xs md:text-sm font-bold text-[#00224F]">
          {{ names.ketua }}
        </span>
        <span
          v-if="names.ketuaClass"
          class="ml-2 shrink-0 rounded bg-gradient-to-b from-[#0076FF] to-[#00224F] px-2 py-0.5 font-sans text-[10px] md:text-xs font-bold text-white shadow-xs"
        >
          {{ names.ketuaClass }}
        </span>
      </div>

      <!-- Baris Wakil -->
      <div
        v-if="names.wakil"
        class="flex items-center justify-between rounded-tl-2xl bg-white px-3 py-1.5 shadow-[0_4px_8px_rgba(0,0,0,0.25)]"
      >
        <span class="truncate font-sans text-xs md:text-sm font-bold text-[#00224F]">
          {{ names.wakil }}
        </span>
        <span
          v-if="names.wakilClass"
          class="ml-2 shrink-0 rounded bg-gradient-to-b from-[#0076FF] to-[#00224F] px-2 py-0.5 font-sans text-[10px] md:text-xs font-bold text-white shadow-xs"
        >
          {{ names.wakilClass }}
        </span>
      </div>
    </div>

    <!-- Slot Tambahan untuk Tombol atau Konten Khusus di Bawah Kartu -->
    <slot name="footer" />
  </div>
</template>
