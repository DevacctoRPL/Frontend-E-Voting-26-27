<script setup lang="ts">
import paslonData from '~/data/paslon.json'

const route = useRoute()
const paslonSlug = computed(() => (route.params.paslon as string) || 'paslon01')

// Tentukan nomor paslon berdasarkan parameter URL (paslon01 / paslon02)
const candidateNumber = computed(() => {
  return paslonSlug.value.toLowerCase().includes('02') ? 2 : 1
})

// Ambil data paslon MPK dari file data/paslon.json secara modular
const currentCandidate = computed(() => {
  const found = paslonData.find(
    item => item.category === 'MPK' && item.number === candidateNumber.value
  )
  return found || paslonData[0]
})

// Path foto paslon sesuai nomor
const candidateImage = computed(() => {
  return candidateNumber.value === 2
    ? '/images/paslon/paslon02.png'
    : '/images/paslon/paslon01.png'
})

// Rute navigasi tombol NEXT (ke paslon berikutnya atau kembali ke daftar)
const nextRoute = computed(() => {
  return candidateNumber.value === 1 ? '/vote/mpk/paslon02' : '/vote/mpk'
})
</script>

<template>
  <main
    class="min-h-screen bg-[length:100%_100%] bg-no-repeat bg-fixed bg-[#071A33] px-6 py-10 flex flex-col items-center justify-between text-white"
    style="background-image: url('/background.png')"
  >
    <!-- Header Informasi Nama Paslon -->
    <header class="mb-6">
      <CardNama
        :candidate="{
          category: 'MPK',
          name: currentCandidate.name,
          number: currentCandidate.number
        }"
      />
    </header>

    <!-- Konten Utama: Foto Paslon + Kartu Visi & Misi (Responsif Desktop & Mobile) -->
    <section class="w-full max-w-6xl flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-12 my-4">
      <!-- Kolom Foto Paslon -->
      <div class="shrink-0 flex justify-center">
        <CardFoto
          :number="currentCandidate.number"
          :image="candidateImage"
          size="lg"
        />
      </div>

      <!-- Kolom Kartu Visi & Misi -->
      <div class="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-8">
        <CardVisi :visi="currentCandidate.vision" />
        <CardMisi :misi="currentCandidate.mission" />
      </div>
    </section>

    <!-- Tombol Aksi Navigasi Sesuai Figma -->
    <footer class="flex items-center gap-6 mt-8">
      <Button
        to="/vote/mpk"
        variant="secondary"
        size="md"
      >
        KEMBALI
      </Button>
      <Button
        :to="nextRoute"
        variant="primary"
        size="md"
      >
        NEXT
      </Button>
    </footer>
  </main>
</template>
