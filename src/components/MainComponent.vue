<template>
  <section class="main">
    <button v-on:click="ResetLikes" class="reset">Reset</button>
    Today's news
    <postcomp
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:likes="post.likes"
      v-bind:post="post.post"
    />
  </section>
</template>

<script>
import postcomp from "./postcomp.vue";

export default {
  name: "main",

  data() {
    return {};
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  methods: {
      ResetLikes : function() {
         this.$store.dispatch("ResetLikesAct")
      }
  },
  components: { postcomp },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .main {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      background-color: #722929;
      width: 30%;
      margin: 10px auto;
      color: #e0e0e0;
  }
  .main > div {
      margin: 10px;
      background-color: rgb(207, 123, 193);
      box-shadow: 5px  10px 10px #888888;
  }

  .reset {
    background-color: #00ffff;
    margin: auto;
  }
</style>
