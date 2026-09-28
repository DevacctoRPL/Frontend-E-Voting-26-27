<template>
  <main class="flex min-h-screen flex-col items-center justify-center gap-8 bg-white px-6 text-center">
    <div class="flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-b from-[#22C55E] to-[#007F45] shadow-[0_8px_24px_rgba(34,197,94,0.4)]">
      <svg
        class="h-12 w-12 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </div>

    <div class="flex flex-col gap-2">
      <h1 class="font-['Poppins',sans-serif] text-2xl font-extrabold tracking-wide text-[#00224F] md:text-4xl">
        Voting Berhasil
      </h1>
      <p class="max-w-md text-sm leading-relaxed text-Teks-sekunder-icon-non-aktif-500 md:text-base">
        Terima kasih, suara kamu sudah tercatat. Tunggu hasil pemilihan diumumkan ya!
      </p>
    </div>

    <ButtonVote
      to="/"
      variant="vote"
      size="lg"
    >
      KEMBALI KE BERANDA
    </ButtonVote>
  </main>
</template>
