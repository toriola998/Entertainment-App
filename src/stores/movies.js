import { ref } from 'vue'
import { defineStore } from 'pinia'
import data from '/data.json'

export const useMoviesStore = defineStore('movies', () => {
  const movieList = ref(data)
  const isBookmarked = ref(false)
  const bookmarkList = ref([])
  const bookmarkedMovies = ref([])
  const bookmarkedSeries = ref([])
  const searchList = ref([])

  function BOOKMARK_MOVIE() {
    isBookmarked.value = true
  }

  function addToBookmarkList(payload) {
    let movie = bookmarkedMovies.value.find((item) => item.title === payload.title)
    let tvSeries = bookmarkedSeries.value.find((item) => item.title === payload.title)

    if (!movie && payload.category === 'Movie') {
      bookmarkedMovies.value.push(payload)
    } else if (!tvSeries && payload.category === 'TV Series') {
      bookmarkedSeries.value.push(payload)
    } else return
  }

  return {
    BOOKMARK_MOVIE,
    addToBookmarkList,
    movieList,
    searchList,
    isBookmarked,
    bookmarkList,
    bookmarkedMovies,
    bookmarkedSeries
  }
})
