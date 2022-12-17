<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-carousel cycle hide-delimiters progress="primary" class="my-transo">
            <v-carousel-item
              v-for="(movieImage, i) in movieImages"
              :key="i"
              :width="movieImage.resolutions.original.width"
              :height="movieImage.resolutions.original.height"
              :src="movieImage.resolutions.original.url"
              class="mx-auto"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8">
          <v-card class="elevation-0">
            <v-card-title class="mb-5">
              <v-alert border="start" density="default">
                <h2>Movie Details</h2>
              </v-alert>
            </v-card-title>
            <v-card-text>
              <span class="mr-3">- NAME:</span>
              <span class="text-grey">{{ movie.name }}</span>
            </v-card-text>
            <v-card-text>
              <span class="mr-3">- TYPE:</span>
              <span v-for="(genre, i) in movie.genres" :key="i" class="mr-1 text-grey">{{ genre }}</span>
            </v-card-text>
            <v-card-text class="d-flex align-center py-0 my-0">
              <span class="mr-2">- RATE:</span>
              <span>
                <v-rating
                  v-model="movie.rating.average"
                  length="10"
                  density="compact"
                  color="orange"
                  half-increments
                ></v-rating>
              </span>
            </v-card-text>
            <v-card-text>
              <span class="mr-3">- LANGUAGE:</span>
              <span class="text-grey">{{ movie.language }}</span>
            </v-card-text>
            <v-card-text>
              <span class="mr-3">- PREMIERED:</span>
              <span class="text-grey font-italic">{{ movie.premiered }}</span>
            </v-card-text>
            <v-card-text class="d-flex">
              <div><span class="mr-3">- CONTENT:</span></div>
              <div v-html="movie.summary" class="ml-3 text-grey"></div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-img
            width="100%"
            :src="movie.image.original"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
let movie = null
let movieImages = null
const { id } = useRoute().params
const uri = 'https://api.tvmaze.com/shows/' + id
const data = await useFetch(uri)
const images = await useFetch(`https://api.tvmaze.com/shows/${id}/images`)
movieImages = images.data.value
movie = data.data
</script>
<style>
.my-transo {
  background-color: #EEEEEE;
}
</style>