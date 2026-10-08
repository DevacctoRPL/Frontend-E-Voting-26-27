<script setup lang="ts">
interface Candidate {
  number: number
  image: string
  ketua: string
  ketuaClass: string
  wakil: string
  wakilClass: string
}

interface Props {
  candidate: Candidate
  logo: string
  isSubmitting?: boolean
}

withDefaults(defineProps<Props>(), {
  isSubmitting: false
})

const emit = defineEmits<{
  confirm: []
  cancel: []
}>()
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        class="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
        @click.self="!isSubmitting && emit('cancel')"
      >
        <Transition
          appear
          enter-active-class="transition duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          enter-from-class="scale-90 opacity-0 translate-y-4"
          enter-to-class="scale-100 opacity-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <section
            class="relative w-full max-w-[360px] overflow-visible font-['Poppins',sans-serif]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="verification-title"
          >
            <!-- Floating shield icon -->
            <div class="absolute -top-6 left-1/2 z-30 -translate-x-1/2">
              <div class="relative flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-[#0675FC] to-[#58B4FD] shadow-[0_4px_20px_rgba(6,117,252,0.5)] ring-3 ring-[#071A33]">
                <img :src="logo" alt="Logo organisasi" class="size-9 rounded-full object-contain" />
                <!-- Animated glow ring -->
                <div class="absolute inset-[-3px] animate-[verification-pulse_2s_ease-in-out_infinite] rounded-full border-2 border-[#58B4FD]/40" />
              </div>
            </div>

            <!-- Main card -->
            <div class="overflow-hidden rounded-2xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5),0_0_80px_rgba(6,117,252,0.08)]">
              <!-- Background layers -->
              <div
                class="absolute inset-0 rounded-2xl bg-cover bg-center bg-no-repeat"
                style="background-image: url('/background.webp')"
              />
              <div class="absolute inset-0 rounded-2xl bg-[#071A33]/85 backdrop-blur-md" />

              <!-- Decorative top gradient line -->
              <div class="relative z-10 h-[2px] bg-linear-to-r from-transparent via-[#58B4FD] to-transparent" />

              <!-- Header -->
              <header class="relative z-10 px-5 pt-9 pb-2 text-center">
                <h2
                  id="verification-title"
                  class="text-base font-bold tracking-[0.12em] text-white uppercase md:text-lg"
                >
                  Verifikasi Pilihan
                </h2>
                <p class="mt-1 text-xs text-[#58B4FD]/80">
                  Periksa kembali pilihanmu
                </p>
              </header>

              <!-- Candidate card -->
              <div class="relative z-10 px-5 py-3">
                <div class="flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.05] px-4 py-3.5">
                  <!-- Photo with glow -->
                  <div class="relative shrink-0">
                    <div class="overflow-hidden rounded-lg border border-[#58B4FD]/30 shadow-[0_0_16px_rgba(88,180,253,0.2)]">
                      <img
                        :src="candidate.image"
                        :alt="`Foto ${candidate.ketua} & ${candidate.wakil}`"
                        class="h-[80px] w-[60px] object-cover object-top"
                      >
                    </div>
                    <!-- Number badge -->
                    <div class="absolute -right-1.5 -top-1.5 flex h-5.5 w-5.5 items-center justify-center rounded-full bg-linear-to-br from-[#0675FC] to-[#58B4FD] text-[10px] font-extrabold text-white shadow-md ring-2 ring-[#0D2A4A]">
                      {{ String(candidate.number).padStart(2, '0') }}
                    </div>
                  </div>

                  <!-- Names -->
                  <div class="min-w-0 flex-1">
                    <!-- Ketua -->
                    <div>
                      <p class="text-[11px] font-semibold uppercase tracking-wider text-[#58B4FD]/70">Ketua</p>
                      <h3 class="truncate text-sm font-bold leading-snug text-white">
                        {{ candidate.ketua }}
                      </h3>
                      <p class="text-[11px] text-white/50">{{ candidate.ketuaClass }}</p>
                    </div>

                    <!-- Divider -->
                    <div class="my-1.5 h-px bg-linear-to-r from-transparent via-[#58B4FD]/20 to-transparent" />

                    <!-- Wakil -->
                    <div>
                      <p class="text-[11px] font-semibold uppercase tracking-wider text-[#58B4FD]/70">Wakil</p>
                      <h3 class="truncate text-sm font-bold leading-snug text-white">
                        {{ candidate.wakil }}
                      </h3>
                      <p class="text-[11px] text-white/50">{{ candidate.wakilClass }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Warning banner -->
              <div class="relative z-10 mx-5 mb-3.5 flex items-start gap-2.5 rounded-lg border border-amber-500/15 bg-amber-500/[0.06] px-3.5 py-2.5">
                <Icon name="i-lucide-triangle-alert" class="mt-0.5 size-4 shrink-0 text-amber-400/80" />
                <p class="text-[11px] leading-relaxed text-amber-200/70">
                  Pilihan yang telah dikirim <span class="font-semibold text-amber-200/90">tidak dapat diubah</span>. Pastikan pilihanmu sudah benar.
                </p>
              </div>

              <!-- Actions -->
              <footer class="relative z-10 flex gap-2.5 px-5 pb-5 pt-1">
                <button
                  type="button"
                  class="flex-1 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2.5 text-xs font-bold tracking-wide text-white/70 transition-all duration-300 hover:border-white/25 hover:bg-white/12 hover:text-white active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                  :disabled="isSubmitting"
                  @click="emit('cancel')"
                >
                  KEMBALI
                </button>

                <button
                  type="button"
                  class="relative flex-1 overflow-hidden rounded-full bg-linear-to-r from-[#0675FC] to-[#58B4FD] px-4 py-2.5 text-xs font-bold tracking-wide text-white shadow-[0_4px_16px_rgba(6,117,252,0.35)] transition-all duration-300 hover:shadow-[0_4px_24px_rgba(6,117,252,0.5)] hover:brightness-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
                  :disabled="isSubmitting"
                  @click="emit('confirm')"
                >
                  <!-- Shimmer effect -->
                  <div class="pointer-events-none absolute inset-0 animate-[verification-shimmer_2.5s_ease-in-out_infinite] bg-linear-to-r from-transparent via-white/15 to-transparent" />
                  <span v-if="isSubmitting" class="relative">
                    MENGIRIM...
                  </span>
                  <span v-else class="relative">
                    YA, SAYA YAKIN
                  </span>
                </button>
              </footer>
            </div>
          </section>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
@keyframes verification-pulse {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.08); }
}

@keyframes verification-shimmer {
  0% { transform: translateX(-100%); }
  50%, 100% { transform: translateX(100%); }
}
</style>
