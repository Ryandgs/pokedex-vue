<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  disabled: Boolean,
})
</script>

<template>
  <button
    class="btn"
    type="button"
    :disabled="disabled"
    @click="$emit('onClick')"
  >
    {{ label }}
  </button>
</template>

<style lang="scss" scoped>
@import './AppButton.scss';
</style>
