import { ref } from 'vue'
import { defineStore } from 'pinia'
import data from '/data.json'

export const useMoviesStore = defineStore('movies', () => {
  const movieList = ref(data)
  const isBookmarked = ref(false)
  const bookmarkList = ref([])
  const searchList = ref([])

  function BOOKMARK_MOVIE() {
    isBookmarked.value = true
  }

  function addToBookmarkList(payload) {
    bookmarkList.value.push(payload)
  }

  return { BOOKMARK_MOVIE, addToBookmarkList, movieList, searchList, isBookmarked, bookmarkList }
})
