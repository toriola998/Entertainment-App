import { ref } from 'vue'
import { defineStore } from 'pinia'
import data from '/data.json'

export const useMoviesStore = defineStore('movies', () => {
  const movieList = ref(data)
  const isBookmarked = ref(false)
  const bookmarkedMovies = ref([])
  const bookmarkedSeries = ref([])
  const searchList = ref([])
  const info = ref('')

  function bookmarkMovie(payload) {
    let movie = bookmarkedMovies.value.find((item) => item.title === payload.title)
    let tvSeries = bookmarkedSeries.value.find((item) => item.title === payload.title)

    if (!movie && payload.category === 'Movie') {
      bookmarkedMovies.value.push(payload)
      info.value = `${payload.title} added to bookmark list`
    } else if (movie) {
      info.value = `${payload.title} removed from bookmark list`
      let index = bookmarkedMovies.value.findIndex((item) => item === payload) // Find the index of the item
      if (index !== -1) {
        bookmarkedMovies.value.splice(index, 1) // Remove the item at the found index
      }
    }

    if (!tvSeries && payload.category === 'TV Series') {
      bookmarkedSeries.value.push(payload)
      info.value = `${payload.title} added to bookmark list`
    } else if (tvSeries) {
      info.value = `${payload.title} removed from bookmark list`
      let index = bookmarkedSeries.value.findIndex((item) => item === payload) // Find the index of the item
      if (index !== -1) {
        bookmarkedSeries.value.splice(index, 1) // Remove the item at the found index
      }
    }
  }

  return {
    bookmarkMovie,
    movieList,
    searchList,
    isBookmarked,
    bookmarkedMovies,
    bookmarkedSeries
  }
})
