<script setup lang="ts">
// Top organization logos pill for login
</script>

<template>
  <div
    class="flex items-center justify-center gap-3 px-5 py-2 rounded-[38.5px] bg-linear-to-r from-[#58B4FD] to-[#0775FE] shadow-[0px_2.37px_5.28px_1.78px_rgba(0,0,0,0.25)]"
  >
    <!-- Logo SMK Plus Penus -->
    <img
      :src="'/images/login/logo_smk.png'"
      alt="Logo SMK Plus Pelita Nusantara"
      class="h-12 w-auto object-contain drop-shadow"
    />

    <!-- Logo OSIS -->
    <img
      :src="'/images/paslon/osis/logo_osis.png'"
      alt="Logo OSIS"
      class="h-14 w-auto object-contain drop-shadow"
    />

    <!-- Logo MPK -->
    <img
      :src="'/images/paslon/mpk/logo_mpk.png'"
      alt="Logo MPK"
      class="h-11 w-auto object-contain drop-shadow"
    />

    <!-- Logo KPU -->
    <img
      :src="'/images/login/logo_kpu.png'"
      alt="Logo KPU"
      class="h-11 w-auto object-contain drop-shadow"
    />
  </div>
</template>
