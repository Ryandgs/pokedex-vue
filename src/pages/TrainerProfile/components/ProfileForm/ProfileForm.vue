<script setup>
import { reactive } from 'vue'
import useProfileStore from '@/stores/Profile/ProfileStore'

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

    <div class="mt-2">
      <input
        v-model="form.name"
        type="text"
        id="name"
        class="py-2 px-2 ring-1"
      >
    </div>
    
    <AppButton
      label="Save"
      class="mt-3"
      @click="submit"
    />
  </form>
</template>
