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

    <!-- Tagline (Figma After Vote) -->
    <div class="flex flex-wrap items-center justify-center gap-4 text-xs italic text-white/90 md:gap-8 md:text-sm">
      <span class="flex items-center gap-1.5">
        <span class="size-1.5 rounded-full bg-[#58B4FD]" />
        Karakter <span class="font-bold underline">dikenali</span>
      </span>
      <span class="flex items-center gap-1.5">
        <span class="size-1.5 rounded-full bg-[#58B4FD]" />
        Integritas <span class="font-bold underline">diseleksi</span>
      </span>
      <span class="flex items-center gap-1.5">
        <span class="size-1.5 rounded-full bg-[#58B4FD]" />
        Kepemimpinan <span class="font-bold underline">dibentuk</span>
      </span>
    </div>

    <ButtonVote
      to="/"
      variant="vote"
      size="lg"
      class="mt-4"
    >
      KEMBALI KE BERANDA
    </ButtonVote>
  </main>
</template>
