<script setup lang="ts">
interface VoteCandidate {
  number: number
  image: string
  ketua: string
  ketuaClass: string
  wakil: string
  wakilClass: string
}

const candidates: VoteCandidate[] = [
  {
    number: 1,
    image: '/images/paslon/mpk/paslon01.png',
    ketua: 'Syaira Ramadina Maulana',
    ketuaClass: 'XI RPL 1',
    wakil: 'Eza Vrandino',
    wakilClass: 'XI DKV 3'
  },
  {
    number: 2,
    image: '/images/paslon/mpk/paslon02.png',
    ketua: 'Keisya Widya Ayuningrum Andico',
    ketuaClass: 'XI DKV 1',
    wakil: 'Anastasya Putri Rahmawati',
    wakilClass: 'XI LPB 2'
  }
]

const handleVote = () => {
  navigateTo('/vote/osis')
}
</script>

<template>
  <main class="flex min-h-screen flex-col items-center bg-white">
    <header class="relative flex w-full flex-col items-center gap-1.5 px-4 py-4 md:py-6">
      <div class="absolute inset-x-0 top-0 h-19 bg-linear-to-r from-[#59B4FD]/0 via-[#59B4FD]/70 to-[#59B4FD]/0" />

      <h1 class="relative z-10 text-center font-['Poppins',sans-serif] text-[16px] font-bold leading-tight text-white [text-shadow:0_1.96px_1.96px_rgba(0,0,0,0.25)] md:text-2xl lg:text-[30px]">
        SMK
        <span class="text-[#57B3FC]">PLUS</span>
        PELITA NUSANTARA
      </h1>

      <h2 class="relative z-10 text-center font-['Poppins',sans-serif] text-[17px] font-bold leading-tight text-white [text-shadow:0_1.96px_1.96px_rgba(0,0,0,0.25)] md:text-3xl lg:text-[32px]">
        KETUA & WAKIL
        <span class="text-[#58B4FD]">MPK</span>
      </h2>
    </header>

    <section class="flex w-full max-w-5xl flex-1 flex-row flex-wrap items-start justify-center gap-4 px-6 py-8 sm:gap-8 md:flex-nowrap md:gap-16">
      <VotePaslon
        v-for="candidate in candidates"
        :key="candidate.number"
        :number="candidate.number"
        :image="candidate.image"
        :alt="`Foto pasangan calon ${candidate.ketua} & ${candidate.wakil}`"
        :ketua="candidate.ketua"
        :ketua-class="candidate.ketuaClass"
        :wakil="candidate.wakil"
        :wakil-class="candidate.wakilClass"
        @vote="handleVote"
      />
    </section>

    <footer class="flex justify-center px-6 pb-8">
      <ButtonVote
        to="/vote/mpk/paslon02"
        variant="back"
        size="md"
      >
        BACK
      </ButtonVote>
    </footer>
  </main>
</template>
