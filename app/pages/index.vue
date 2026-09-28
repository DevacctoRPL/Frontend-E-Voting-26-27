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
  }
]
</script>

<template>
  <main
    class="min-h-screen bg-size-[100%_100%] bg-no-repeat bg-fixed bg-Background-utama-50 px-4 py-8 md:px-6 md:py-12 flex flex-col items-center justify-center text-white"
    style="background-image: url('/background.png')"
  >
    <!-- Header Judul Pemilihan MPK Sesuai Figma Desktop -->
    <header class="flex flex-col items-center text-center gap-1.5 mb-8 md:mb-12">
      <h2 class="font-['Poppins',sans-serif] font-bold text-base md:text-2xl tracking-wider text-white">
        SMK <span class="text-[#57B3FC]">PLUS</span> PELITA NUSANTARA
      </h2>
      <h1 class="font-['Poppins',sans-serif] font-extrabold text-2xl md:text-4xl text-white tracking-wide">
        PEMILIHAN KETUA & WAKIL <span class="text-[#58B4FD]">MPK & OSIS</span>
      </h1>
      <p class="text-xs md:text-base text-Teks-sekunder-icon-non-aktif-500 mt-1">
        Pilih dan pelajari visi misi calon pemimpin pilihanmu
      </p>
    </header>

    <!-- Kontainer Kartu Paslon (Berdampingan di Desktop, Terpusat) -->
    <section class="flex w-full flex-col md:flex-row items-center justify-center gap-8 md:gap-14 lg:gap-16">
      <div
        v-for="organization in organizations"
        :key="organization.name"
        class="flex flex-col items-center"
      >
        <NuxtLink
          :to="organization.route"
          class="focus:outline-none transition-transform duration-300 hover:scale-105"
        >
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
