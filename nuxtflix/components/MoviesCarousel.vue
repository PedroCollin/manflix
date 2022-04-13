<template>
  <div class="mb-12">
    <client-only>
      <h1 class="text-white font-bold text-xl mb-3 mx-10">
        {{ sectionTitle }}
      </h1>
      <carousel
        :navigation-enabled="false"
        :pagination-enabled="false"
        :per-page-custom="[
          [0, 3],
          [640, 5],
          [768, 6],
          [1024, 7],
          [1280, 8],
        ]"
      >
        <slide v-for="movie in movies" :key="movie.id" class="mx-1 box-content">
          <img :src="base_url + movie.poster_path" class="rounded-md" />
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'MoviesCarousel',
  props: {
    sectionTitle: {
      type: String,
      default: 'Movies',
    },
    apiRoute: {
      type: String,
      default: 'GetTrending',
    },
  },
  data() {
    return {
      movies: [],
      base_url: 'https://image.tmdb.org/t/p/original/',
    }
  },
  mounted() {
    this.$store.dispatch(this.apiRoute).then((response) => {
      const { results } = response.data
      this.movies = results
    })
  },
})
</script>

<style lang="scss" scoped>
.discover {
  color: white;
  -o-object-fit: contain;
  object-fit: contain;
  height: 448px;
  width: 100%;
  position: relative;

  .content {
    padding-top: 100px;
    height: 190px;
  }

  .title {
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
  }
  .description {
    width: 45rem;
    margin-top: 1rem;
    line-height: 1.5;
    padding-top: 1rem;
    font-size: 0.9rem;
    max-width: 360px;
    height: 80px;
  }

  .button {
    background-color: rgb(51, 51, 51, 0.5);
    color: white;
    padding: 0.5rem 2rem;
  }
  .image_overlay {
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 40%,
      rgba(0, 0, 0, 0) 75%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: 2;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
}
</style>
