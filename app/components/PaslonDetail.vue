<script setup lang="ts">
import type { Candidate } from '~/types/candidate'

interface Props {
  candidate: Candidate
}

defineProps<Props>()
</script>

<template>
  <article
    class="paslon-detail w-full"
    aria-label="Detail pasangan calon"
  >
    <div class="paslon-grid paslon-layout">
      <CandidateHeader
        class="candidate-header"
        :candidate="candidate"
      />

      <CardFoto
        class="candidate-photo"
        :candidate="candidate"
        size="lg"
      />

      <CardVisi
        class="candidate-visi"
        :candidate="candidate"
      />

      <CardMisi
        class="candidate-misi"
        :candidate="candidate"
      />

      <CardProgramKerja
        class="candidate-program"
        :candidate="candidate"
      />
    </div>
  </article>
</template>

