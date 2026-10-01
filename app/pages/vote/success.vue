<script setup lang="ts">
import confetti from 'canvas-confetti'

const { clearSession } = useAuth()

const triggerCelebration = () => {
  if (typeof window === 'undefined') return

  // Central burst
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.55 },
    colors: ['#0776FC', '#58B4FD', '#FBBF24', '#FFFFFF', '#00DC82', '#38BDF8'],
    disableForReducedMotion: true
  })

  // Left cannon stream
  setTimeout(() => {
    confetti({
      particleCount: 45,
      angle: 60,
      spread: 55,
      origin: { x: 0.05, y: 0.65 },
      colors: ['#0776FC', '#58B4FD', '#FBBF24', '#FFFFFF'],
      disableForReducedMotion: true
    })
  }, 220)

  // Right cannon stream
  setTimeout(() => {
    confetti({
      particleCount: 45,
      angle: 120,
      spread: 55,
      origin: { x: 0.95, y: 0.65 },
      colors: ['#0776FC', '#58B4FD', '#FBBF24', '#FFFFFF'],
      disableForReducedMotion: true
    })
  }, 380)
}

onMounted(() => {
  clearSession()
  // Trigger after smooth page transition
  setTimeout(triggerCelebration, 150)
})
</script>

<template>
  <main
    class="flex min-h-screen flex-col items-center justify-center gap-6 bg-size-[100%_100%] bg-no-repeat bg-fixed bg-Background-utama-50 px-6 text-center text-white overflow-hidden"
    style="background-image: url('/background.png')"
  >
    <!-- Checkmark Circle with Radiant Glow -->
    <div
      class="animate-pop-in relative flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
      role="button"
      tabindex="0"
      aria-label="Rayakan lagi"
      title="Klik untuk kembang api lagi!"
      @click="triggerCelebration"
      @keydown.enter="triggerCelebration"
    >
      <!-- Radiant Ripple Ring 1 -->
      <div
        class="animate-ripple-1 pointer-events-none absolute -inset-3 rounded-full bg-[#58B4FD]/25 blur-sm"
      />

      <!-- Radiant Ripple Ring 2 -->
      <div
        class="animate-ripple-2 pointer-events-none absolute -inset-6 rounded-full bg-[#0776FC]/15 blur-md"
      />

      <!-- Main Circle Badge -->
      <div
        class="relative flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-linear-to-b from-[#0776FC] to-[#58B4FD] shadow-[0_0_30px_rgba(88,180,253,0.85)] ring-4 ring-white/20"
      >
        <!-- Animated SVG Checkmark -->
        <svg
          class="h-10 w-10 md:h-12 md:w-12 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path
            class="animate-draw-check"
            d="M20 6L9 17l-5-5"
          />
        </svg>
      </div>
    </div>

    <!-- Title & Description -->
    <div class="flex flex-col items-center gap-1">
      <h2
        class="animate-fade-up-1 font-['Poppins',sans-serif] text-xl font-bold leading-tight tracking-wider text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] md:text-2xl lg:text-4xl"
      >
        Suaramu Telah
      </h2>
      <h1
        class="animate-fade-up-2 font-['Poppins',sans-serif] text-2xl md:text-4xl font-extrabold tracking-wider bg-linear-to-r from-white via-[#80CAFF] to-white bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(88,180,253,0.5)]"
      >
        Tercatat
      </h1>
      <p class="animate-fade-up-3 mt-2 max-w-md text-xs leading-relaxed text-white/90 md:text-sm lg:text-base">
        Terima kasih telah menggunakan hak pilihmu dalam Pemilihan Ketua & Wakil MPK & OSIS periode 2026/2027.
      </p>
    </div>

    <!-- Tagline Card (Figma After Vote) -->
    <div
      class="animate-fade-up-4 group relative flex w-full max-w-95 items-start gap-3 rounded-[8px] border border-[#0674FD] bg-[#072750]/85 py-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-[#58B4FD] hover:shadow-[0_0_20px_rgba(88,180,253,0.3)] sm:gap-6 md:max-w-95 md:rounded-[12px] md:py-4"
    >
      <!-- Emblem Icon -->
      <div class="flex shrink-0">
        <img
          src="/icons/Vector.svg"
          alt="Emblem icon"
          class="h-20 w-20 mx-3 transition-transform duration-500 group-hover:scale-105"
        >
      </div>

      <!-- Vertical Divider + Text -->
      <div class="flex items-center gap-3 sm:gap-6 mt-1">
        <!-- Vertical Divider -->
        <div class="h-16 w-1 shrink-0 bg-[#0674FD] rounded-full" />
        <!-- Three Pillars -->
        <div
          class="flex flex-col items-start gap-1 mx-2 font-['Poppins',sans-serif] text-left text-base text-white/95 sm:pr-6"
        >
          <div class="transition-transform duration-200 hover:translate-x-1">
            <span class="font-bold text-white">Karakter </span>
            <span class="italic text-[#80CAFF]">dikenali</span>
          </div>
          <div class="transition-transform duration-200 hover:translate-x-1">
            <span class="font-bold text-white">Integritas </span>
            <span class="italic text-[#80CAFF]">diseleksi</span>
          </div>
          <div class="transition-transform duration-200 hover:translate-x-1">
            <span class="font-bold text-white">Kepemimpinan </span>
            <span class="italic text-[#80CAFF]">dibentuk</span>
          </div>
        </div>
      </div>
    </div>

    <div class="animate-fade-up-5 mt-2 md:mt-4">
      <ButtonVote
        to="/"
        variant="vote"
        size="lg"
      >
        KEMBALI KE BERANDA
      </ButtonVote>
    </div>
  </main>
</template>

<style scoped>
/* Pop-in bounce for the checkmark circle */
@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  60% {
    opacity: 1;
    transform: scale(1.15);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-pop-in {
  animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

/* Pulsing ripple rings around the checkmark */
@keyframes ripplePulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.18);
    opacity: 0.25;
  }
}

.animate-ripple-1 {
  animation: ripplePulse 2.4s ease-in-out infinite;
}

.animate-ripple-2 {
  animation: ripplePulse 2.4s ease-in-out 0.6s infinite;
}

/* Checkmark SVG drawing stroke animation */
@keyframes drawCheck {
  0% {
    stroke-dashoffset: 40;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

.animate-draw-check {
  stroke-dasharray: 40;
  stroke-dashoffset: 40;
  animation: drawCheck 0.65s cubic-bezier(0.65, 0, 0.45, 1) 0.3s forwards;
}

/* Staggered Fade In & Slide Up for Content */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(18px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up-1 {
  animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards;
}

.animate-fade-up-2 {
  animation: fadeInUp 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.35s backwards;
}

.animate-fade-up-3 {
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s backwards;
}

.animate-fade-up-4 {
  animation: fadeInUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.65s backwards;
}

.animate-fade-up-5 {
  animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.8s backwards;
}
</style>
