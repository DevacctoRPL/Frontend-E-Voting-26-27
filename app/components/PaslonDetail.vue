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
    <!-- Layout Desktop (Selalu Aktif) -->
    <div class="grid grid-cols-[auto_1fr] items-start gap-6 lg:gap-8 xl:gap-10">
      <!-- Foto -->
      <div class="w-60 shrink-0 sm:w-67.5 xl:w-77.5">
        <CardFoto
          :number="candidate.number"
          :image="candidate.image"
          :alt="`Foto pasangan calon ${candidate.ketua} & ${candidate.wakil}`"
          size="lg"
          card-class="h-[360px] sm:h-[380px] w-full lg:h-[410px] xl:h-[430px]"
        />
      </div>

      <!-- Informasi Paslon -->
      <div class="grid min-w-0 grid-cols-2 gap-4 sm:gap-5 xl:gap-6">
        <!-- Nama: Full width -->
        <div class="col-span-2">
          <CardNama :candidate="candidate" />
        </div>

        <!-- Visi -->
        <CardVisi :vision="candidate.vision" />

        <!-- Misi -->
        <CardMisi :mission="candidate.mission" />
      </div>
    </div>

    <!-- Program Kerja -->
    <CardProgramKerja
      :short-term="candidate.workPrograms?.shortTerm"
      :long-term="candidate.workPrograms?.longTerm"
    />
  </article>
</template>
