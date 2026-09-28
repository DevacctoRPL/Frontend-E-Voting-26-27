<script setup lang="ts">
const organizations = [
  {
    logo: '/images/paslon/mpk/logo_mpk.png',
    name: 'MPK',
    route: '/vote/mpk',
    bgcolor: '#9BEBFC'
  },
  {
    logo: '/images/paslon/osis/logo_osis.png',
    name: 'OSIS',
    route: '/vote/osis',
    bgcolor: '#FFF178'
  },
]
</script>

<template>
  <main
    class="min-h-screen bg-size-[100%_100%] bg-no-repeat bg-fixed bg-Background-utama-50 px-6 py-10 flex flex-col items-center justify-between text-white"
    style="background-image: url('/background.png')"
  >
    <!-- Header Judul Pemilihan MPK Sesuai Figma Desktop -->
    <header class="flex flex-col items-center text-center gap-1 my-4">
      <h2 class="font-sans font-bold text-lg md:text-2xl tracking-wider text-white">
        SMK <span class="text-[#57B3FC]">PLUS</span> PELITA NUSANTARA
      </h2>
      <h1 class="font-sans font-extrabold text-2xl md:text-4xl text-white tracking-wide">
        PEMILIHAN KETUA & WAKIL <span class="text-[#58B4FD]">MPK & OSIS</span>
      </h1>
      <p class="text-sm md:text-base text-Teks-sekunder-icon-non-aktif-500 mt-1">
        Pilih dan pelajari visi misi calon pemimpin pilihanmu
      </p>
    </header>

    <!-- Kontainer Kartu Paslon (Berdampingan di Desktop) -->
    <section class="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 my-8">
      <div
        v-for="organization in organizations"
        :key="organization.name"
        class="flex flex-col items-center gap-5">
        <!-- Komponen Kartu Foto Asimetris Glowing -->
         <NuxtLink :to="organization.route">
        <CardOrganisasi
          :logo="organization.logo"
          :name="organization.name"
          :bgcolor="organization.bgcolor"
          size="md"
        />
        </NuxtLink>

      </div>
    </section>
  </main>
</template>
