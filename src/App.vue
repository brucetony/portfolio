<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavMenu from '@/components/NavMenu.vue'
import WelcomeBox from '@/components/WelcomeBox.vue'
</script>

<template>
  <NavMenu />
  <header>
    <div class="wrapper">
      <!--      <nav>-->
      <!--        <RouterLink to="/">Home</RouterLink>-->
      <!--        <RouterLink to="/about">About</RouterLink>-->
      <!--      </nav>-->
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
