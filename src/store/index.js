import { createStore } from "vuex";
import Posts from "@/assets/json/posts.json";

export default createStore({
  state: {
    posts: Posts,
  },
  mutations: {
    INCREASE_LIKES: state => {
      state.posts.forEach( post  => {
          post.likes += 1;
      })
    },
    RESET_LIKES: state => {
      state.posts.forEach( post  => {
          post.likes = 0;
      })
    },
  },
  actions: {
    IncreaseLikesAct: act => {
    setTimeout(function() {
    act.commit("INCREASE_LIKES")
    }, 500)
    },
    ResetLikesAct: act => {
      setTimeout(function() {
        act.commit("RESET_LIKES")
        }, 500)
    }
  },
  modules: {},
});
