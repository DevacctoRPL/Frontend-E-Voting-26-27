<script setup lang="ts">
import type { Candidate } from '~/types/candidate'

interface Props {
  candidate: Candidate
}

defineProps<Props>()
</script>

<template>
  <article
    class="mx-auto flex w-full max-w-7xl flex-col gap-5 md:gap-8"
    aria-label="Detail pasangan calon"
  >
    <!-- ============================================== -->
    <!-- DESKTOP LAYOUT (Screen >= lg / 1024px)         -->
    <!-- Posisi: Foto di kiri, Nama di kanan atas,      -->
    <!-- Visi & Misi berdampingan setara di kanan bawah -->
    <!-- ============================================== -->
    <div class="hidden lg:flex lg:flex-row lg:items-start lg:gap-8 xl:gap-10">
      <!-- Kolom Kiri: Ukuran & Posisi Foto Paslon -->
      <div class="w-[270px] lg:w-[290px] xl:w-[310px] shrink-0 pt-2">
        <CardFoto
          :number="candidate.number"
          :image="candidate.image"
          :alt="`Foto pasangan calon ${candidate.ketua} & ${candidate.wakil}`"
          size="lg"
          card-class="w-full h-[380px] lg:h-[410px] xl:h-[430px]"
        />
      </div>

      <!-- Kolom Kanan: Posisi Nama, Visi, dan Misi -->
      <div class="flex flex-1 flex-col gap-6 xl:gap-7">
        <!-- Ukuran & Posisi Bar Nama Paslon -->
        <div class="h-[63px] w-full">
          <CardNama :candidate="candidate" />
        </div>

        <!-- Ukuran & Posisi Visi & Misi (2 Kolom Setara / Equal Height) -->
        <div class="grid grid-cols-2 gap-5 xl:gap-6 items-stretch">
          <div class="h-full min-h-[300px] xl:min-h-[320px]">
            <CardVisi :vision="candidate.vision" />
          </div>
          <div class="h-full min-h-[300px] xl:min-h-[320px]">
            <CardMisi :mission="candidate.mission" />
          </div>
        </div>
      </div>
    </div>

    <!-- ============================================== -->
    <!-- MOBILE LAYOUT (Screen < lg / < 1024px)         -->
    <!-- Posisi: Kiri (Nama + Visi), Kanan (Foto),     -->
    <!-- lalu Misi full width di bawahnya               -->
    <!-- ============================================== -->
    <div class="flex flex-col gap-3.5 sm:gap-4 lg:hidden">
      <!-- Baris Atas: 2 Kolom (Kiri: Nama & Visi, Kanan: Foto) -->
      <div class="flex items-start gap-2.5 sm:gap-4">
        <!-- Kolom Kiri: Nama & Visi -->
        <div class="flex flex-1 flex-col gap-2.5 sm:gap-3">
          <div class="h-9 sm:h-10 w-full">
            <CardNama :candidate="candidate" />
          </div>
          <div class="min-h-[145px] sm:min-h-[160px] w-full">
            <CardVisi :vision="candidate.vision" />
          </div>
        </div>

        <!-- Kolom Kanan: Foto Paslon Mobile -->
        <div class="w-[135px] sm:w-[155px] shrink-0 pt-1">
          <CardFoto
            :number="candidate.number"
            :image="candidate.image"
            :alt="`Foto pasangan calon ${candidate.ketua} & ${candidate.wakil}`"
            size="sm"
            card-class="w-full h-[195px] sm:h-[225px]"
          />
        </div>
      </div>

      <!-- Baris Tengah: Posisi & Ukuran Misi di Mobile -->
      <div class="w-full min-h-[150px]">
        <CardMisi :mission="candidate.mission" />
      </div>
    </div>

    <!-- ============================================== -->
    <!-- BARIS BAWAH: Program Kerja (Full Width)        -->
    <!-- ============================================== -->
    <div class="w-full">
      <CardProgramKerja
        :short-term="candidate.workPrograms?.shortTerm"
        :long-term="candidate.workPrograms?.longTerm"
      />
    </div>
  </article>
</template>
