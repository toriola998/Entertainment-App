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
    let bookmarked = bookmarkList.value.find((item) => item.title === payload.title)
    if (!bookmarked) {
      bookmarkList.value.push(payload)
    } else return
  }

  return { BOOKMARK_MOVIE, addToBookmarkList, movieList, searchList, isBookmarked, bookmarkList }
})
