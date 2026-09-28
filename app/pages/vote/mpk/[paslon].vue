<script setup lang="ts">
import type { Candidate } from '~/types/candidate'
import paslonData from '~/data/paslon.json'

const route = useRoute()

const paslonNumber = Number(
  String(route.params.paslon).replace('paslon', '')
)

const candidate = paslonData.find(
  item =>
    item.category === 'MPK' && item.number === paslonNumber
) as Candidate | undefined

if (!candidate) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Pasangan calon MPK tidak ditemukan'
  })
}

const otherNumber = 3 - paslonNumber

const nextTarget = computed(() => {
  if (route.query.next === 'vote') {
    return '/vote/mpk/vote'
  }

  return `/vote/mpk/paslon0${otherNumber}?next=vote`
})
</script>

<template>
  <main class="flex min-h-screen flex-col items-center bg-white px-6 py-8">
    <PaslonDetail :candidate="candidate" />

    <nav class="mt-8 flex items-center justify-center gap-4">
      <ButtonVote
        to="/vote/mpk"
        variant="back"
        size="md"
      >
        BACK
      </ButtonVote>

      <ButtonVote
        :to="nextTarget"
        variant="next"
        size="md"
      >
        NEXT
      </ButtonVote>
    </nav>
  </main>
</template>
