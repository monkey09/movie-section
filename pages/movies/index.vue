<template>
  <v-main>
    <v-container fluid>
      <v-responsive
        class="ml-auto mb-5"
        max-width="344"
      >
        <v-text-field
          density="compact"
          variant="solo"
          label="Search"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
          @keyup="handleChange"
          v-model="testSearch"
        ></v-text-field>
      </v-responsive>
      <v-row v-if="movies">
        <v-col v-for="(movie, i) in movies" :key="i" cols="12" sm="6" md="4" lg="3">
          <v-card class="elevation-0 rounded-0">
            <v-img v-if="movie.show.image" :src="movie.show.image.original" height="300" cover></v-img>
            <v-card-title class="mt-3">{{ movie.show.name }}</v-card-title>
            <v-card-text v-if="movie.show.genres.length">
              <v-chip v-for="(genre, i) in movie.show.genres" :key="i" size="small" class="mr-2 mt-2">
                {{ genre }}
              </v-chip>
            </v-card-text>
            <v-card-text v-else>
              <v-chip size="small" class="mr-2 mt-2">action</v-chip>
            </v-card-text>
            <v-card-subtitle class="font-italic">
              {{ movie.show.premiered }}
            </v-card-subtitle>
            <v-card-text class="d-flex">
              <div class="text-truncate mr-1" style="" v-html="movie.show.summary"></div>
              <div class="">...</div>
            </v-card-text> 
            <v-card-text class="my-0 py-0">
              <span>
                <v-rating
                  v-model="movie.show.rating.average"
                  length="10"
                  density="compact"
                  color="orange"
                  half-increments
                ></v-rating>
              </span>
            </v-card-text>
            <v-card-actions>
              <NuxtLink :to="`/movies/${movie.show.id}`">
                <v-btn block color="green-lighten-1">view</v-btn>
              </NuxtLink>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import getMovies from '~/composables/getMovies'

const testSearch = ref('reacher')
const { movies, load } = getMovies(testSearch.value)
await load()
const handleChange = async () => { await handleFetch() }
const handleFetch = async () => {
  const { movies, load } = getMovies(testSearch.value)
  await load()
}
</script>
<style scoped>
a{
  text-decoration: none;
  color: inherit;
  width: 100%;
  display: block;
}
</style>