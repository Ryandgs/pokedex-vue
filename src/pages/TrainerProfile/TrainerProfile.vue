<script setup>
import ProfileForm from './components/ProfileForm/ProfileForm.vue'
import ProfileBox from './components/ProfileBox/ProfileBox.vue'
import ProfileDex from './components/ProfileDex/ProfileDex.vue'
</script>

<template>
  <div class="trainer-profile">
    <ProfileForm class="mb-5" />
    <ProfileBox />
    <ProfileDex />
  </div>
</template>
