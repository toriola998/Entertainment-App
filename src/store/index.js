import { createStore } from 'vuex'
import data from '@/data.json'

export default createStore({
  state: {
    movie: data,
    isBookmarked: false,
    bookmarkList: [],
  },
  getters: {
    trendingList(state) {
      // return JSON.parse(JSON.stringify(this.movie))
      const movie = JSON.parse(JSON.stringify(state.movie))
          movie.filter((item)=> {
          return item.isTrending === true;
      })
      }
  },
  mutations: {
    BOOKMARK_MOVIE(state) {
      state.isBookmarked = true;
  },
  ADD_TO_BOOKMARK(state, payload) {
      state.bookmarkList.push(payload)
  }
  },
  actions: {
  },
  modules: {
  }
})
