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
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <section
            class="w-full max-w-md overflow-hidden rounded-2xl bg-white font-['Poppins',sans-serif] shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="verification-title"
          >
            <!-- Header -->
            <header
              class="bg-[#59B4FD] px-6 py-5 text-center text-white"
            >
              <h2
                id="verification-title"
                class="text-xl font-bold md:text-2xl"
              >
                VERIFIKASI PILIHAN
              </h2>

              <p class="mt-1 text-sm text-white/90">
                Periksa kembali pilihanmu
              </p>
            </header>

            <!-- Candidate information -->
            <div class="px-6 py-6">
              <div class="flex flex-col items-center">
                <!-- Candidate photo -->
                <div
                  class="overflow-hidden rounded-xl border-2 border-[#59B4FD] shadow-md"
                >
                  <img
                    :src="candidate.image"
                    :alt="`Foto ${candidate.ketua} & ${candidate.wakil}`"
                    class="h-40 w-32 object-cover md:h-44 md:w-36"
                  >
                </div>

                <!-- Candidate number -->
                <span
                  class="mt-4 text-sm font-bold uppercase tracking-widest text-[#59B4FD]"
                >
                  PASLON
                  {{ String(candidate.number).padStart(2, '0') }}
                </span>

                <!-- Names -->
                <div class="mt-3 text-center">
                  <h3
                    class="text-base font-bold text-gray-900 md:text-lg"
                  >
                    {{ candidate.ketua }}
                  </h3>

                  <p class="text-xs text-gray-500 md:text-sm">
                    {{ candidate.ketuaClass }}
                  </p>

                  <p class="my-1 text-sm font-semibold text-gray-400">
                    &
                  </p>

                  <h3
                    class="text-base font-bold text-gray-900 md:text-lg"
                  >
                    {{ candidate.wakil }}
                  </h3>

                  <p class="text-xs text-gray-500 md:text-sm">
                    {{ candidate.wakilClass }}
                  </p>
                </div>
              </div>

              <!-- Confirmation message -->
              <div
                class="mt-6 rounded-xl bg-gray-100 px-4 py-3 text-center"
              >
                <p
                  class="text-xs leading-relaxed text-gray-600 md:text-sm"
                >
                  Apakah kamu yakin ingin memilih pasangan calon ini?
                </p>

                <p
                  class="mt-1 text-xs font-semibold leading-relaxed text-gray-800 md:text-sm"
                >
                  Pilihan yang telah dikirim tidak dapat diubah.
                </p>
              </div>
            </div>

            <!-- Actions -->
            <footer
              class="flex gap-3 border-t border-gray-100 px-6 py-5"
            >
              <button
                type="button"
                class="flex-1 rounded-xl border-2 border-gray-300 px-4 py-3 text-sm font-bold text-gray-600 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                :disabled="isSubmitting"
                @click="emit('cancel')"
              >
                KEMBALI
              </button>

              <button
                type="button"
                class="flex-1 rounded-xl bg-[#59B4FD] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#45A8F5] disabled:cursor-not-allowed disabled:opacity-70"
                :disabled="isSubmitting"
                @click="emit('confirm')"
              >
                <span v-if="isSubmitting">
                  MENGIRIM...
                </span>

                <span v-else>
                  YA, SAYA YAKIN
                </span>
              </button>
            </footer>
          </section>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
