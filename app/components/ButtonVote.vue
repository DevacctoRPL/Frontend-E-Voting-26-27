<script setup lang="ts">
interface Props {
  variant?: 'vote' | 'primary' | 'secondary' | 'next' | 'back' | 'login' | 'voted' | 'dark'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  to?: string
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
  block?: boolean
  icon?: string
  trailingIcon?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'vote',
  size: 'md',
  to: '',
  disabled: false,
  loading: false,
  type: 'button',
  block: false,
  icon: '',
  trailingIcon: ''
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) {
    event.preventDefault()
    return
  }
  emit('click', event)
}

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'vote':
    case 'primary':
      return 'bg-linear-to-b from-[#0675FC] to-[#58B4FD] text-white shadow-[0_4px_16px_rgba(6,117,252,0.4)] hover:from-[#003574] hover:to-[#003574] active:scale-95 rounded-[35px] md:rounded-[45.2px]'

    case 'secondary':
      return 'border-[1.89px] border-[#0674FD] bg-[#072750]/82 text-white shadow-[0_2px_10px_rgba(6,116,253,0.2)] hover:bg-[#0674FD]/25 hover:border-[#58B4FD] active:bg-[#0674FD]/40 active:scale-95 rounded-[35px] md:rounded-[45.2px]'

    case 'next':
      return 'bg-linear-to-b from-[#0776FC] to-[#57B3FC] text-white shadow-[0_4px_16px_rgba(7,118,252,0.35)] hover:from-[#00316C] hover:to-[#00316C] active:scale-95 rounded-[55px] md:rounded-[72px]'

    case 'back':
      return 'bg-linear-to-b from-[#0776FC] to-[#57B3FC] text-white shadow-[0_4px_16px_rgba(7,118,252,0.35)] hover:from-[#023C83] hover:to-[#023C83] active:scale-95 rounded-[55px] md:rounded-[72px]'

    case 'login':
      return 'bg-linear-to-r from-[#0775FE] to-[#58B4FD] text-white shadow-[0_4px_18px_rgba(7,117,254,0.4)] hover:from-[#032B5E] hover:to-[#032B5E] active:scale-95 rounded-[66px] md:rounded-[95.4px]'

    case 'voted':
      return 'bg-Status-berhasil-terpilih-konfirmasi-600 text-white shadow-[0_4px_16px_rgba(34,197,94,0.4)] hover:bg-green-700 active:scale-95 rounded-[35px] md:rounded-[45.2px]'

    case 'dark':
      return 'bg-[#003574] text-white hover:bg-[#002756] active:scale-95 rounded-[35px] md:rounded-[45.2px]'

    default:
      return 'bg-linear-to-b from-[#0675FC] to-[#58B4FD] text-white hover:from-[#003574] hover:to-[#003574] active:scale-95 rounded-[35px] md:rounded-[45.2px]'
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-7.5 md:h-8.5 min-w-20 px-3.5 md:px-4 text-xs md:text-sm font-bold tracking-wider'

    case 'lg':
      return 'h-10 md:h-12 min-w-26 md:min-w-32 px-6 md:px-7 text-[16px] md:text-[18px] font-bold tracking-wider'

    case 'xl':
      return 'h-10 md:h-12 min-w-35 md:min-w-45 px-8 md:px-12 text-base md:text-lg font-bold tracking-widest'

    case 'md':
    default:
      return 'h-9 md:h-11 min-w-22.5 md:min-w-27.5 px-5 md:px-6.5 text-[16px] md:text-[20px] font-bold tracking-wider'
  }
})
</script>

<template>
  <NuxtLink
    v-if="to && !disabled && !loading"
    :to="to"
    class="inline-flex items-center justify-center gap-2 font-['Poppins',sans-serif] uppercase leading-none transition-all duration-300 select-none cursor-pointer text-center hover:scale-105 active:scale-95"
    :class="[
      variantClasses,
      sizeClasses,
      block ? 'w-full' : 'w-auto'
    ]"
    @click="handleClick"
  >
    <Icon
      v-if="icon"
      :name="icon"
      class="size-4.5 shrink-0"
    />
    <span>
      <slot>VOTE</slot>
    </span>
    <Icon
      v-if="trailingIcon"
      :name="trailingIcon"
      class="size-4.5 shrink-0"
    />
  </NuxtLink>

  <button
    v-else
    :type="type"
    :disabled="disabled || loading"
    class="inline-flex items-center justify-center gap-2 font-['Poppins',sans-serif] uppercase leading-none transition-all duration-300 select-none text-center hover:scale-105 active:scale-95"
    :class="[
      variantClasses,
      sizeClasses,
      block ? 'w-full' : 'w-auto',
      disabled || loading ? 'cursor-not-allowed opacity-60 pointer-events-none' : 'cursor-pointer'
    ]"
    @click="handleClick"
  >
    <Icon
      v-if="loading"
      name="i-lucide-loader-2"
      class="size-4.5 animate-spin shrink-0"
    />

    <Icon
      v-else-if="icon"
      :name="icon"
      class="size-4.5 shrink-0"
    />

    <span>
      <slot>VOTE</slot>
    </span>

    <Icon
      v-if="trailingIcon && !loading"
      :name="trailingIcon"
      class="size-4.5 shrink-0"
    />
  </button>
</template>
