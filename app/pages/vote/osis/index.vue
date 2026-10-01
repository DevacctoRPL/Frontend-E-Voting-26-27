<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const { submit } = useVote()
const { markVoteComplete } = useAuth()

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
    image: '/images/paslon/osis/paslon01.png',
    ketua: 'Kevin Mahardika Kumaeni',
    ketuaClass: 'XI RPL 1',
    wakil: 'Kamila Siti Aryna',
    wakilClass: 'XI DKV 2'
  },
  {
    number: 2,
    image: '/images/paslon/osis/paslon02.png',
    ketua: 'Arfa Alfahim',
    ketuaClass: 'XI RPL 1',
    wakil: 'Nafisa Asqiyah Ananta Gunawan',
    wakilClass: 'XI RPL 1'
  }

]

const handleVote = async (candidateNumber: number) => {
  const response = await submit({
    kandidat_id: candidateNumber + 2,
    pemilihan_umum_id: 1
  })

  if (!('data' in response)) {
    return
  }

  markVoteComplete('osis')
  await navigateTo('/vote/success')
}
</script>

<template>
  <main
    class="flex min-h-screen flex-col items-center justify-between bg-size-[100%_100%] bg-no-repeat bg-fixed bg-Background-utama-50 px-4 py-6 text-white md:px-6 md:py-8"
    style="background-image: url(&quot;/background.png&quot;)"
  >
    <header class="flex w-full justify-center px-4 py-4 md:py-6">
      <!-- Wrapper container tightly bounding the titles -->
      <div class="relative flex flex-col items-center gap-1 px-8 py-2">
        <!-- Glow Background (Constrained to the wrapper) -->
        <div
          class="absolute inset-0 bg-linear-to-r from-[#59B4FD]/0 via-[#59B4FD]/70 to-[#59B4FD]/0"
        />

        <h1
          class="relative z-10 text-center font-['Poppins',sans-serif] text-[16px] font-bold leading-tight text-white [text-shadow:0_1.96px_1.96px_rgba(0,0,0,0.25)] md:text-2xl lg:text-[30px]"
        >
          KETUA & WAKIL
          <span class="text-[#57B3FC]">OSIS</span>
        </h1>

        <h2
          class="relative z-10 text-center font-['Poppins',sans-serif] text-[17px] font-bold leading-tight text-white [text-shadow:0_1.96px_1.96px_rgba(0,0,0,0.25)] md:text-3xl lg:text-[32px]"
        >
          SMK <span class="text-[#58B4FD]">PLUS</span> PELITA NUSANTARA
        </h2>
      </div>
    </header>

    <section
      class="flex w-full max-w-5xl flex-1 flex-row items-center justify-center gap-2.5 px-2 py-4 sm:gap-6 sm:px-6 sm:py-8 md:gap-16"
    >
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

    <footer class="flex justify-center px-4 pb-6 md:px-6 md:pb-8">
      <ButtonVote
        to="/vote/osis/paslon02"
        variant="back"
        size="md"
      >
        BACK
      </ButtonVote>
    </footer>
  </main>
</template>
