<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

import type { Candidate } from '~/types/candidate'
import paslonData from '~/data/paslon.json'

const route = useRoute()
const { getVotingStatus } = useAuth()

onMounted(async () => {
  try {
    const status = await getVotingStatus()

    if (status?.sudah_vote_osis && status?.sudah_vote_mpk) {
      await navigateTo('/vote/success')
      return
    } else if (status?.sudah_vote_mpk == false){
      await navigateTo('/vote/mpk/paslon01')
      return
    } else {
      return
    }
  } catch {
    return
  }
})

const paslonNumber = Number(
  String(route.params.paslon).replace('paslon', '')
)

const candidate = paslonData.find(
  item =>
    item.category === 'OSIS' && item.number === paslonNumber
) as Candidate | undefined

if (!candidate) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Pasangan calon OSIS tidak ditemukan'
  })
}

const otherNumber = 3 - paslonNumber

const nextTarget = computed(() => {
  if (route.query.next === 'vote') {
    return '/vote/osis/vote'
  }

  return `/vote/osis/paslon0${otherNumber}`
})
</script>

<template>
  <main
    class="flex min-h-screen flex-col items-center justify-between bg-size-[100%_100%] bg-no-repeat bg-fixed bg-Background-utama-50 px-4 py-6 md:px-8 md:py-10 text-white"
    style="background-image: url('/background.png')"
  >
    <PaslonDetail :candidate="candidate" />

    <nav class="my-6 md:my-8 flex items-center justify-center gap-6">
      <ButtonVote
        v-if="otherNumber == 1"
        to="/vote/osis/paslon01"
        variant="back"
        size="md"
      >
        BACK
      </ButtonVote>

      <ButtonVote
        v-if="otherNumber == 2"
        :to="nextTarget"
        variant="next"
        size="md"
      >
        NEXT
      </ButtonVote>

      <ButtonVote v-else to="/vote/osis" variant="next" size="md">
        NEXT
      </ButtonVote>
    </nav>
  </main>
</template>
