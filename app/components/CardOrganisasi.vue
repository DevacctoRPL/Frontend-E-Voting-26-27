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
      return 'h-[270px] w-[190px]'

    case 'lg':
      return 'h-[390px] w-[280px] md:h-[440px] md:w-[310px]'

    case 'md':
    default:
      return 'h-[330px] w-[230px] md:h-[380px] md:w-[260px]'
  }
})
</script>

<template>
  <div
    class="group relative inline-flex select-none flex-col items-center"
  >
    <!-- Photo Card -->
    <div class="relative pr-3 pt-3">
      <!-- Photo Frame -->
      <div
        class="relative overflow-hidden rounded-[15px] shadow-[0_0_14px_3px_rgba(255,255,255,0.85)] transition-all duration-300 group-hover:shadow-[0_0_20px_5px_rgba(89,181,254,0.95)]"
        :class="cardDimensions"
        :style="{ backgroundColor: props.bgcolor }"
      >
        <div class="flex h-full w-full flex-col items-center justify-center gap-2 text-center">
          <h1 class="text-2xl font-bold text-slate-900 md:text-3xl">
            {{ props.name }}
          </h1>
          <img
            v-if="props.logo"
            :src="props.logo"
            :alt="props.alt"
            class="h-48 w-48 object-contain md:h-56 md:w-56"
          >
        </div>
      </div>
    </div>
  </div>
</template>
