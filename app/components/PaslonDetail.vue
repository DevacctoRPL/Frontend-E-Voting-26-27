<script setup lang="ts">
import type { Candidate } from '~/types/candidate'

interface Props {
  candidate: Candidate
}

defineProps<Props>()
</script>

<template>
  <article
    class="flex w-full flex-col gap-6"
    aria-label="Detail pasangan calon"
  >
    <CardNama
      :candidate="candidate"
    />

    <div class="flex justify-center">
      <CardFoto
        :number="candidate.number"
        :image="candidate.image"
        :alt="`Foto pasangan calon ${candidate.ketua} & ${candidate.wakil}`"
      />
    </div>

    <div
      class="grid w-full grid-cols-1 gap-5 md:grid-cols-2"
    >
      <CardVisi :vision="candidate.vision" />

      <CardMisi :mission="candidate.mission" />
    </div>

    <CardProgramKerja
      :short-term="candidate.workPrograms.shortTerm"
      :long-term="candidate.workPrograms.longTerm"
    />
  </article>
</template>
