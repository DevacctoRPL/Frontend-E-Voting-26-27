<script setup lang="ts">
const { clearSession } = useAuth()

onMounted(clearSession)
</script>

<template>
  <main
    class="flex min-h-screen flex-col items-center justify-center gap-6 bg-size-[100%_100%] bg-no-repeat bg-fixed bg-Background-utama-50 px-6 text-center text-white"
    style="background-image: url('/background.png')">
    <!-- Checkmark Circle -->
    <div
      class="flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-linear-to-b from-[#0776FC] to-[#58B4FD] shadow-[0_0_24px_rgba(88,180,253,0.6)]">
      <svg class="h-10 w-10 md:h-12 md:w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"
           stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </div>

    <!-- Title & Description -->
    <div class="flex flex-col items-center gap-1">
      <h2
        class="font-['Poppins',sans-serif] text-xl font-bold leading-tight tracking-wider text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] md:text-2xl lg:text-4xl">
        Suaramu Telah
      </h2>
      <h1
        class="font-['Poppins',sans-serif] text-xl font-extrabold tracking-wider text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] md:text-4xl">
        Tercatat
      </h1>
      <p class="mt-2 max-w-md text-xs leading-relaxed text-white md:text-sm lg:text-base">
        Terima kasih telah menggunakan hak pilihmu dalam Pemilihan Ketua & Wakil MPK & OSIS periode 2026/2027.
      </p>
    </div>

    <!-- Tagline Card (Figma After Vote) -->
    <div
      class="flex w-full max-w-95 items-start gap-3 rounded-[8px] border border-[#0674FD] bg-[#072750]/85 py-3 shadow-lg backdrop-blur-sm sm:gap-6 md:max-w-95 md:rounded-[12px] md:py-4">
      <!-- Emblem Icon -->
      <div class="flex shrink-0">
        <img src="/icons/Vector.svg" alt="Emblem icon" class="h-20 w-20 mx-3">
      </div>

      <!-- Vertical Divider + Text -->
      <div class="flex items-center gap-3 sm:gap-6 mt-1">
        <!-- Vertical Divider -->
        <div class="h-16 w-1 shrink-0 bg-[#0674FD]" />
        <!-- Three Pillars -->
        <div
          class="flex flex-col items-start gap-1 mx-2 font-['Poppins',sans-serif] text-left text-base text-white/95 sm:pr-6">
          <div>
            <span class="font-bold">Karakter </span>
            <span class="italic">dikenali</span>
          </div>
          <div>
            <span class="font-bold">Integritas </span>
            <span class="italic">diseleksi</span>
          </div>
          <div>
            <span class="font-bold">Kepemimpinan </span>
            <span class="italic">dibentuk</span>
          </div>
        </div>
      </div>
    </div>

    <ButtonVote to="/" variant="vote" size="lg" class="mt-2 md:mt-4">
      KEMBALI KE BERANDA
    </ButtonVote>
  </main>
</template>
