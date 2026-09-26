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
    <CandidateHeader
      :category="candidate.category"
      :ketua="candidate.ketua"
      :wakil="candidate.wakil"
    />

    <div class="flex justify-center">
      <CardFoto
        :number="candidate.number"
        :names="{
          ketua: candidate.ketua,
          wakil: candidate.wakil
        }"
      />
    </div>

    <div
      class="grid w-full grid-cols-1 gap-5 md:grid-cols-2"
    >
      <CardVisi :visi="candidate.vision" />

      <CardMisi :misi="candidate.mission" />
    </div>

    <CandidatePrograms
      :short-term="candidate.workPrograms.shortTerm"
      :long-term="candidate.workPrograms.longTerm"
    />
  </article>
</template>
