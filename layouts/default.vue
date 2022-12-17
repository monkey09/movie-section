<template>
  <v-app :theme="theme">
    <v-app-bar>
      <NuxtLink class="my-icon" to="/">
        <v-btn icon="mdi-youtube"></v-btn>
      </NuxtLink>
      <v-spacer></v-spacer>
      <NuxtLink to="/">
        <v-btn stacked>home</v-btn>
      </NuxtLink>
      <NuxtLink to="/movies">
        <v-btn stacked>movies</v-btn>
      </NuxtLink>
      <v-btn
        :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click="onClick"
      ></v-btn>
    </v-app-bar>
    <slot></slot>
  </v-app>
</template>

<script setup>
const theme = ref('dark')
const onClick = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>
<style>
.router-link-active button{
  background-color: #393939;
}
.v-theme--light .router-link-active button{
  background-color: #E4E4E4;
}
.my-icon button{
  background-color: inherit !important;
}
</style>