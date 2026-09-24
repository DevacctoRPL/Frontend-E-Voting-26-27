<script setup lang="ts">
// Data calon MPK yang disesuaikan dengan data Figma dan data/paslon.json
const mpkCandidates = [
  {
    slug: 'paslon01',
    number: 1,
    image: '/images/paslon/paslon01.png',
    names: {
      ketua: 'Syaira Ramadina Maulana',
      ketuaClass: 'XI RPL 1',
      wakil: 'Eza Vrandino',
      wakilClass: 'XI DKV 3'
    }
  },
  {
    slug: 'paslon02',
    number: 2,
    image: '/images/paslon/paslon02.png',
    names: {
      ketua: 'Keisya Widya Ayuningrum Andico',
      ketuaClass: 'XI DKV 1',
      wakil: 'Anastasya Putri Rahmawati',
      wakilClass: 'XI LPB 2'
    }
  }
]
</script>

<template>
  <main
    class="min-h-screen bg-[length:100%_100%] bg-no-repeat bg-fixed bg-[#071A33] px-6 py-10 flex flex-col items-center justify-between text-white"
    style="background-image: url('/background.png')"
  >
    <!-- Header Judul Pemilihan MPK Sesuai Figma Desktop -->
    <header class="flex flex-col items-center text-center gap-1 my-4">
      <h2 class="font-sans font-bold text-lg md:text-2xl tracking-wider text-white">
        SMK <span class="text-[#57B3FC]">PLUS</span> PELITA NUSANTARA
      </h2>
      <h1 class="font-sans font-extrabold text-2xl md:text-4xl text-white tracking-wide">
        CALON KETUA & WAKIL <span class="text-[#58B4FD]">MPK</span>
      </h1>
      <p class="text-sm md:text-base text-[#AAB7C4] mt-1">
        Pilih dan pelajari visi misi calon pemimpin pilihanmu
      </p>
    </header>

    <!-- Kontainer Kartu Paslon (Berdampingan di Desktop) -->
    <section class="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 my-8">
      <div
        v-for="candidate in mpkCandidates"
        :key="candidate.number"
        class="flex flex-col items-center gap-5"
      >
        <!-- Komponen Kartu Foto Asimetris Glowing -->
        <CardFoto
          :number="candidate.number"
          :image="candidate.image"
          :names="candidate.names"
          size="md"
        />

        <!-- Tombol Aksi: Lihat Profil & Tombol Vote -->
        <div class="flex items-center gap-3">
          <Button
            :to="`/vote/mpk/${candidate.slug}`"
            variant="secondary"
            size="sm"
          >
            DETAIL & VISI
          </Button>
          <Button
            variant="primary"
            size="sm"
          >
            VOTE
          </Button>
        </div>
      </div>
    </section>

    <!-- Tombol Navigasi Kembali -->
    <footer class="mt-6">
      <Button
        to="/vote"
        variant="secondary"
        size="md"
      >
        KEMBALI
      </Button>
    </footer>
  </main>
</template>
