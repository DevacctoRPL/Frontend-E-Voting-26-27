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
</script>

<template>
  <PaslonDetail :candidate="candidate" />
</template>
