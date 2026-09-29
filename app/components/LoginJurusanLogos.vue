<script setup lang="ts">
// Bottom jurusan logos pill for login
</script>

<template>
  <div
    class="flex items-center justify-center gap-3 px-5 py-2 rounded-[36.4px] bg-linear-to-r from-[#59B4FD] to-[#0674FD] shadow-[0px_2.24px_4.98px_1.68px_rgba(0,0,0,0.25)]"
  >
    <!-- Logo TKJ -->
    <img
      :src="'/images/login/logo_tkj.png'"
      alt="Logo TKJ"
      class="h-10 w-auto object-contain drop-shadow"
    />

    <!-- Logo DKV -->
    <img
      :src="'/images/login/logo_dkv.png'"
      alt="Logo DKV"
      class="h-10 w-auto object-contain drop-shadow"
    />

    <!-- Logo RPL -->
    <img
      :src="'/images/login/logo_rpl.png'"
      alt="Logo RPL"
      class="h-10.5 w-auto object-contain drop-shadow"
    />
  </div>
</template>
