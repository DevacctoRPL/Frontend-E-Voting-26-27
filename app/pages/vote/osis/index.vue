<script setup lang="ts">
interface CandidatePick {
  slug: string
  number: number
  image: string
  ketua: string
  wakil: string
}

const osisCandidates: CandidatePick[] = [
  {
    slug: 'paslon01',
    number: 1,
    image: '/images/paslon/osis/paslon01.png',
    ketua: 'Kevin Mahardika Kumaeni',
    wakil: 'Kamila Siti Aryna'
  },
  {
    slug: 'paslon02',
    number: 2,
    image: '/images/paslon/osis/paslon02.png',
    ketua: 'Arfa Alfahim',
    wakil: 'Nafisa Asqiyah Ananta Gunawan'
  }
]
</script>

<template>
  <main
    class="flex min-h-screen flex-col items-center justify-between bg-size-[100%_100%] bg-no-repeat bg-fixed bg-Background-utama-50 px-6 py-10 text-white"
    style="background-image: url('/background.png')"
  >
    <header class="my-4 flex flex-col items-center gap-1 text-center">
      <h2 class="font-sans text-lg font-bold tracking-wider text-white md:text-2xl">
        SMK
        <span class="text-[#57B3FC]">PLUS</span>
        PELITA NUSANTARA
      </h2>
      <h1 class="text-2xl font-extrabold tracking-wide text-white md:text-4xl">
        CALON KETUA & WAKIL
        <span class="text-[#58B4FD]">OSIS</span>
      </h1>
      <p class="mt-1 text-sm text-Teks-sekunder-icon-non-aktif-500 md:text-base">
        Pilih dan pelajari visi misi calon pemimpin pilihanmu
      </p>
    </header>

    <section class="my-8 flex flex-col items-center justify-center gap-10 md:flex-row md:gap-16">
      <div
        v-for="candidate in osisCandidates"
        :key="candidate.number"
        class="flex flex-col items-center gap-5"
      >
        <CardFoto
          :number="candidate.number"
          :image="candidate.image"
          :alt="`Foto pasangan calon ${candidate.ketua} & ${candidate.wakil}`"
          size="md"
        />

        <ButtonVote
          :to="`/vote/osis/${candidate.slug}`"
          variant="secondary"
          size="sm"
        >
          DETAIL & VISI
        </ButtonVote>
      </div>
    </section>

    <footer class="mt-6">
      <ButtonVote
        to="/"
        variant="back"
        size="md"
      >
        KEMBALI
      </ButtonVote>
    </footer>
  </main>
</template>
