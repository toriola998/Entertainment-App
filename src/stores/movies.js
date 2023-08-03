import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import data from '/data.json'

export const useMoviesStore = defineStore('movies', () => {
  const movieList = ref(data)
  const isBookmarked = ref(false)
  const bookmarkList = ref([])
  const searchList = ref([])

  //const trendingList = computed(() => {})

  // getters: {
  //     trendingList(state: any) {
  //     // return JSON.parse(JSON.stringify(this.movie))
  //     const movie : [] = JSON.parse(JSON.stringify(state.movie))
  //         movie.filter((item: any): any => {
  //         return item.isTrending === true;
  //     })
  //     }
  // },

  function BOOKMARK_MOVIE() {
    isBookmarked.value = true
  }

  function ADD_TO_BOOKMARK(payload) {
    bookmarkList.push(payload)
  }

  return { BOOKMARK_MOVIE, ADD_TO_BOOKMARK, movieList, searchList, isBookmarked, bookmarkList }
})
