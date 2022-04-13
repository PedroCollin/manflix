<template>
  <div>
    <div class="discover" :style="headerStyle">
      <div class="z-10 relative content container">
        <h1 class="title">{{ movie.name }}</h1>
        <p class="description">{{ truncateOverview }}</p>
      </div>
      <div class="image_overlay"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'DiscoverPage',
  data() {
    return {
      showLoading: true,
      movie: {
        title: '',
        original_name: '',
        name: '',
        backdrop_path: '',
      },
      size: 'cover',
      position: 'center center',
      image: '',
    }
  },
  computed: {
    truncateOverview() {
      const n = 150
      // @ts-ignore
      const movieOverview = this.movie.overview
      return movieOverview?.length > n
        ? movieOverview.substr(0, n - 1) + '...'
        : movieOverview
    },
    headerStyle() {
      return {
        backgroundSize: this.size,
        backgroundPosition: this.position,
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${this.image}")`,
      }
    },
  },
  mounted() {
    this.showLoading = true
    this.$store.dispatch('GetDiscover').then((response) => {
      const { results } = response.data
      const movieIndex = Math.floor(Math.random() * results.length - 1)
      this.movie = results[movieIndex]
      this.image = results[movieIndex]?.backdrop_path
      this.showLoading = false
    })
  },
})
</script>

<style lang="scss" scoped>
.discover {
  color: white;
  -o-object-fit: contain;
  object-fit: contain;
  height: 500px;
  width: 100%;
  position: relative;
  @apply flex items-center;

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
      rgb(0 0 0 / 95%) 0,
      rgb(0 0 0 / 26%) 40%,
      rgba(0, 0, 0, 0) 75%,
      rgb(0 0 0 / 68%) 100%
    );
    z-index: 2;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
}
</style>
