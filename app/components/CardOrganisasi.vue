<script setup lang="ts">
interface Props {
  name?: string
  logo?: string
  alt?: string
  size?: 'sm' | 'md' | 'lg'
  bgcolor?: string
}

const props = withDefaults(defineProps<Props>(), {
  logo: '',
  alt: 'Foto organisasi',
  size: 'md'
})

const cardDimensions = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-[210px] w-[150px]'

    case 'lg':
      return 'h-[340px] w-[250px] md:h-[400px] md:w-[280px] lg:h-[430px] lg:w-[290px]'

    case 'md':
    default:
      return 'h-[280px] w-[210px] sm:h-[330px] sm:w-[240px] md:h-[375px] md:w-[260px]'
  }
})
</script>

<template>
  <div
    class="group relative inline-flex select-none flex-col items-center"
  >
    <!-- Card Frame -->
    <div class="relative">
      <div
        class="relative overflow-hidden rounded-[16px] md:rounded-[20px] shadow-[0_0_12px_2px_rgba(255,255,255,0.85)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_5px_rgba(89,181,254,0.95)]"
        :class="cardDimensions"
        :style="{ backgroundColor: props.bgcolor }"
      >
        <div class="flex h-full w-full flex-col items-center justify-center gap-3 p-4 text-center">
          <h1 class="font-['Poppins',sans-serif] text-2xl font-extrabold tracking-wide text-slate-900 md:text-3xl">
            {{ props.name }}
          </h1>
          <img
            v-if="props.logo"
            :src="props.logo"
            :alt="props.alt"
            class="h-36 w-36 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-44 sm:w-44 md:h-52 md:w-52"
          >
        </div>
      </div>
    </div>
  </div>
</template>
