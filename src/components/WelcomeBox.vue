<script setup lang="ts"></script>

<template>
  <div>
    <Card class="welcomeBoxCard">
      <div class="welcomeBoxContent">
        <h1 class="greeting">Hello there.</h1>
        <p>
          My name is Bruce Schultz. I am a software engineer / bioinformatician excelling at
          constructing analysis pipelines and (occasionally) designing frontends for visualizing
          data.
        </p>
      </div>
    </Card>
  </div>
</template>

<style scoped>
.welcomeBoxContent {
  align-content: center;
  width: 50%;
}

.welcomeBoxCard {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.greeting {
  margin: 0 auto;
}
</style>
