<script setup>
import { reactive } from 'vue'
import useProfileStore from '@/stores/ProfileStore'
import AppButton from '@/components/AppButton/AppButton.vue';

const profileStore = useProfileStore()

const form = reactive({
  name: profileStore.name
})

const submit = () => {
  profileStore.updateName(form.name)
}
</script>

<template>
  <form 
    class="form mt-1"
    @submit.prevent="submit"
  >
    <label for="name">Trainer's name: </label>
    <input
      v-model="form.name"
      id="name"
      type="text"
    />
    <br />
    <AppButton
      :label="'Save'"
      class="mt-1"
      @click="submit"
    />
  </form>
</template>
