<script setup lang="ts">
interface Props {
  visi?: string
}

const props = withDefaults(defineProps<Props>(), {
  visi: ''
})
</script>

<template>
  <section
    class="relative w-full max-w-135 pt-3.75"
    aria-labelledby="visi-title"
  >
    <!-- VISI Badge -->
    <div
      id="visi-title"
      class="absolute left-6 top-0 z-10
             flex h-7.5 w-25 items-center justify-center
             rounded-full
             border border-[#0674FD]
             bg-linear-to-b from-[#06264F] to-[#0776FC]
             shadow-md"
    >
      <span class="font-sans text-[16px] font-bold tracking-wide text-white">
        VISI
      </span>
    </div>

    <!-- Card -->
    <div
      class="min-h-45 w-full
             rounded-[14px]
             border border-[#0674FD]
             bg-[#072750]/85
             px-5 pb-4 pt-7
             text-white
             shadow-lg
             backdrop-blur-sm"
    >
      <!-- Visi Content -->
      <div class="flex-1">
        <slot>
          <p
            v-if="props.visi"
            class="font-sans text-[15px] font-medium leading-6
                   text-white/95 md:text-[16px] md:leading-6.5"
          >
            {{ props.visi }}
          </p>

          <p
            v-else
            class="font-sans text-xs italic text-white/60"
          >
            Belum ada data visi.
          </p>
        </slot>
      </div>
    </div>
  </section>
</template>
