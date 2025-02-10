<script setup>
import { ref } from 'vue'

const show = ref(false)

defineProps({
  data: {
    type: Object,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <div
    v-if="data"
    class="pokeMoves mb-5"
  >
    <h2 class="mb-3">{{ title }}</h2>

    <AppButton
      label="Show/Hide"
      class="mb-3"
      @click="show = !show"
    />

    <table v-if="show">
      <thead>
        <th v-for="header in data.header">{{ header }}</th>
      </thead>
      <tbody>
        <tr v-for="body in data.body">
          <td v-for="bodyData in body">{{ bodyData }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
