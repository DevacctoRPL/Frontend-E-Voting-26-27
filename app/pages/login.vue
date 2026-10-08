<script setup lang="ts">
const { login, isAuthenticated, clearSession } = useAuth()

if (import.meta.client) {
  clearSession()
}

const nis = ref('') 
const password = ref('')
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
      password: password.value
    })

    if (!('data' in res)) {
      errorMessage.value = res.message || res.error || 'Login gagal'
      return
    }

    if (!isAuthenticated()) {
      errorMessage.value = res.message || 'Login gagal'
      return
    }

    if (res.data.status_pemilihan?.sudah_vote_mpk && res.data.status_pemilihan.sudah_vote_osis) {
      await navigateTo('/vote/success')
      return
    } else if (res.data.status_pemilihan?.sudah_vote_mpk) {
      await navigateTo('/vote/osis/paslon01')
      return
    } else {
      await navigateTo('/vote/mpk/paslon01')
      return
    }
  } catch {
    errorMessage.value = 'Login gagal. Periksa koneksi Anda dan coba lagi.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <main
    class="relative min-h-screen w-full flex flex-col justify-between items-center bg-size-[100%_100%] bg-center bg-no-repeat px-4 py-8 overflow-y-auto"
    style="background-image: url('/background.webp')"
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
            for="nis"
            class="font-['Inter',sans-serif] font-medium italic text-[#58B4FD] text-[20px] md:text-[24px] select-none"
          >
            NIS/NIG
          </label>
          <input
            id="nama"
            v-model="nis"
            type="text"
            required
            class="w-full h-[39px] rounded-full bg-white text-[#072750] px-5 font-['Inter',sans-serif] font-medium text-[15px] outline-none text-center shadow-[0_2px_8px_rgba(0,0,0,0.15)] focus:ring-2 focus:ring-[#58B4FD] transition-all"
          />
        </div>

        <!-- Field NIS/NIG -->
        <div class="w-full flex flex-col items-center gap-1.5">
          <label
            for="password"
            class="font-['Inter',sans-serif] font-medium italic text-[#58B4FD] text-[20px] md:text-[24px] select-none"
          >
            PASSWORD
          </label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
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
