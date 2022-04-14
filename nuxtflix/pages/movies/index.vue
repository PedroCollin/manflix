<template>
  <div class="mb-20">
    <MoviesHeader />
    <Discover />
    <MoviesCarousel
      :section-title="'My favourites'"
      :api-route="'GetTrending'"
    />
    <MoviesCarousel
      :section-title="'Comedy Movies'"
      :api-route="'ComedyMovies'"
    />
    <MoviesCarousel
      :section-title="'Horror Movies'"
      :api-route="'HorrorMovies'"
    />
    <MoviesCarousel
      :section-title="'Action Movies'"
      :api-route="'ActionMovies'"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'MovieList',
  middleware: 'auth',
}
</script>
