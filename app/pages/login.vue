<script setup lang="ts">
const { login } = useAuth()

const nama = ref('')
const nis = ref('')
const loading = ref(false)
const errorMessage = ref('')

useHead({
  title: 'Login - E-Voting SMK Plus Pelita Nusantara'
})

const handleLogin = async () => {
  if (!nis.value) {
    errorMessage.value = 'NIS/NIG wajib diisi'
    return
  }

  loading.value = true
  errorMessage.value = ''

  try {
    const res = await login({
      nis: nis.value,
      password: nis.value
    })

    if (res && 'errors' in res && res.errors) {
      errorMessage.value = typeof res.message === 'string' ? res.message : 'Login gagal'
      return
    }

    await navigateTo('/vote/mpk')
  } catch {
    // Fallback navigasi jika backend belum terhubung
    await navigateTo('/vote/mpk')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <main
    class="relative min-h-screen w-full flex flex-col justify-between items-center bg-cover bg-center bg-no-repeat px-4 py-8 overflow-y-auto"
    style="background-image: url('/background.png')"
  >
    <!-- Top Header: Logo OSIS, SMK, MPK, KPU Pill -->
    <header class="w-full flex justify-center pt-2 md:pt-4">
      <LoginHeaderLogos />
    </header>

    <!-- Center Section: Title, Form, & Action Button -->
    <section class="w-full max-w-[396px] flex flex-col items-center my-8">
      <!-- Title Banner -->
      <LoginTitleBanner class="w-[319px] max-w-full mb-6" />

      <!-- Subtitle -->
      <h2
        class="font-['Inter',sans-serif] font-medium italic text-white text-[20px] md:text-[26px] leading-tight mb-8 text-center select-none"
      >
        Masukan Data Diri Anda
      </h2>

      <!-- Login Form -->
      <form
        class="w-full flex flex-col items-center gap-5"
        @submit.prevent="handleLogin"
      >
        <!-- Field NAMA -->
        <div class="w-full flex flex-col items-center gap-1.5">
          <label
            for="nama"
            class="font-['Inter',sans-serif] font-medium italic text-[#58B4FD] text-[20px] md:text-[24px] select-none"
          >
            NAMA
          </label>
          <input
            id="nama"
            v-model="nama"
            type="text"
            required
            autocomplete="name"
            class="w-full h-[39px] rounded-full bg-white text-[#072750] px-5 font-['Inter',sans-serif] font-medium text-[15px] outline-none text-center shadow-[0_2px_8px_rgba(0,0,0,0.15)] focus:ring-2 focus:ring-[#58B4FD] transition-all"
          />
        </div>

        <!-- Field NIS/NIG -->
        <div class="w-full flex flex-col items-center gap-1.5">
          <label
            for="nis"
            class="font-['Inter',sans-serif] font-medium italic text-[#58B4FD] text-[20px] md:text-[24px] select-none"
          >
            NIS/NIG
          </label>
          <input
            id="nis"
            v-model="nis"
            type="text"
            required
            autocomplete="username"
            class="w-full h-[39px] rounded-full bg-white text-[#072750] px-5 font-['Inter',sans-serif] font-medium text-[15px] outline-none text-center shadow-[0_2px_8px_rgba(0,0,0,0.15)] focus:ring-2 focus:ring-[#58B4FD] transition-all"
          />
        </div>

        <!-- Error Message -->
        <p
          v-if="errorMessage"
          class="text-red-300 text-sm font-medium text-center"
        >
          {{ errorMessage }}
        </p>

        <!-- Submit Button: ButtonVote variant="login" -->
        <div class="pt-2">
          <ButtonVote
            variant="login"
            type="submit"
            :loading="loading"
            class="w-[145px] h-[39px] text-[16px] font-bold"
          >
            MASUK
          </ButtonVote>
        </div>
      </form>
    </section>

    <!-- Bottom Section: Jurusan Logos & Footer -->
    <footer class="w-full flex flex-col items-center gap-4 pb-2 md:pb-4">
      <LoginJurusanLogos />

      <p class="font-['Inter',sans-serif] text-[18px] md:text-[22px] text-center select-none">
        <span class="font-semibold text-white">Powered by </span>
        <span class="font-extrabold text-[#58B4FD]">DEVACCTO IT</span>
      </p>
    </footer>
  </main>
</template>
