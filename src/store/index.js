import { createStore } from "vuex";
import Posts from "@/assets/json/posts.json";

export default createStore({
  state: {
    posts: Posts
  },
  mutations: {
    INCREASE_LIKES (state,idNr) {
      console.log(idNr)
      const item = state.posts.find(Posts => Posts.id == idNr); 
      item.likes++;
      console.log("Increment done");
    },
    RESET_LIKES (state) {
      state.posts.forEach( post  => {
          post.likes = 0;
      })
    },
  },
  actions: {
    IncreaseLikesAct (act, id) {
    setTimeout(function() {
    act.commit("INCREASE_LIKES",id)
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
