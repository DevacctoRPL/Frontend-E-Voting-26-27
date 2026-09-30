<script setup lang="ts">
const { clearSession } = useAuth()

onMounted(clearSession)
</script>

<template>
  <main
    class="flex min-h-screen flex-col items-center justify-center gap-6 bg-size-[100%_100%] bg-no-repeat bg-fixed bg-Background-utama-50 px-6 text-center text-white"
    style="background-image: url('/background.png')"
  >
    <!-- Checkmark Circle -->
    <div class="flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-linear-to-b from-[#0776FC] to-[#58B4FD] shadow-[0_0_24px_rgba(88,180,253,0.6)]">
      <svg
        class="h-10 w-10 md:h-12 md:w-12 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </div>

    <!-- Title & Description -->
    <div class="flex flex-col items-center gap-1">
      <h2 class="font-['Poppins',sans-serif] text-xl font-bold leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] md:text-3xl lg:text-4xl">
        Suaramu Telah
      </h2>
      <h1 class="font-['Poppins',sans-serif] text-3xl font-extrabold tracking-wide text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] md:text-5xl lg:text-6xl">
        Tercatat
      </h1>
      <p class="mt-2 max-w-md text-xs leading-relaxed text-white/80 md:text-sm lg:text-base">
        Terima kasih telah menggunakan hak pilihmu dalam Pemilihan Ketua & Wakil MPK & OSIS periode 2026/2027.
      </p>
    </div>

    <!-- Tagline Card (Figma After Vote) -->
    <div
      class="flex w-full max-w-[340px] md:max-w-[560px] items-center justify-center gap-3 sm:gap-6 rounded-[8px] md:rounded-[12px] border border-[#0674FD] bg-[#072750]/85 px-4 py-3 md:px-7 md:py-4 shadow-lg backdrop-blur-sm"
    >
      <!-- Emblem Icon -->
      <div class="flex h-10 w-10 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full bg-linear-to-b from-[#0776FC]/30 to-[#58B4FD]/20 border border-[#58B4FD]/40">
        <svg
          class="h-5 w-5 md:h-8 md:w-8 text-[#58B4FD]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>

      <!-- Vertical Divider -->
      <div class="h-10 md:h-16 w-px bg-linear-to-b from-[#0674FD]/20 via-[#58B4FD] to-[#0674FD]/20" />

      <!-- Three Pillars -->
      <div class="flex flex-col items-start gap-1 font-['Poppins',sans-serif] text-[11px] sm:text-xs md:text-sm text-white/95 text-left">
        <span>
          Karakter <strong class="italic underline text-[#58B4FD]">dikenali</strong>
        </span>
        <span>
          Integritas <strong class="italic underline text-[#58B4FD]">diseleksi</strong>
        </span>
        <span>
          Kepemimpinan <strong class="italic underline text-[#58B4FD]">dibentuk</strong>
        </span>
      </div>
    </div>

    <ButtonVote
      to="/"
      variant="vote"
      size="lg"
      class="mt-2 md:mt-4"
    >
      KEMBALI KE BERANDA
    </ButtonVote>

  </main>
</template>
