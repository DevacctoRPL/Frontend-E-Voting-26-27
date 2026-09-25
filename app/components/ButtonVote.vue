<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'back' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  to: '',
  disabled: false,
  type: 'button'
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'border-[1.89px] border-[#0674FD] bg-[#072750]/80 text-white hover:bg-[#0674FD]/20 active:bg-[#0674FD]/40'
    case 'back':
      return 'bg-gradient-to-b from-[#0776FC] to-[#57B3FC] hover:from-[#023C83] hover:to-[#023C83] text-white active:scale-95'
    case 'dark':
      return 'bg-[#003574] hover:bg-[#002756] text-white active:scale-95'
    case 'primary':
    default:
      return 'bg-gradient-to-b from-[#0776FC] to-[#57B3FC] hover:from-[#00316C] hover:to-[#00316C] text-white shadow-lg active:scale-95'
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-6 py-1.5 text-sm font-semibold'
    case 'lg':
      return 'px-10 py-3.5 text-xl font-bold tracking-wider'
    case 'md':
    default:
      return 'px-8 py-2.5 text-base md:text-lg font-bold tracking-wider'
  }
})
</script>

<template>
  <NuxtLink
    v-if="to && !disabled"
    :to="to"
    class="inline-flex items-center justify-center rounded-full font-sans transition-all duration-300 select-none cursor-pointer"
    :class="[variantClasses, sizeClasses]"
  >
    <slot />
  </NuxtLink>

  <button
    v-else
    :type="type"
    :disabled="disabled"
    class="inline-flex items-center justify-center rounded-full font-sans transition-all duration-300 select-none"
    :class="[
      variantClasses,
      sizeClasses,
      disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
    ]"
  >
    <slot />
  </button>
</template>
