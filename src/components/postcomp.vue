<template>
  <div>
    <div class="post-header">
      <img v-bind:src="require(`../assets/${postInfo.profilePic}`)" alt="profilePicture" />
      <h4>{{postInfo.author}}</h4>
      <p>{{ postInfo.date }}</p>
    </div>
    <h1>{{postInfo.title}}</h1>
    <img :src="require(`../assets/${postInfo.image}`)" alt="postPicture" />
    <p>{{ postInfo.body }}</p>
    <button v-on:click="IncreaseLikes(post.id)" class="like-button">
      <img class="like-button-img" src="../assets/like.png" alt="like" />
    </button>
    <p>{{ likes }}</p>
  </div>
</template>

<script>
export default {
  name: "postcomp",
  props: ["post","likes", "postInfo"],
  methods: {
    IncreaseLikes(id) {
      this.$store.dispatch("IncreaseLikesAct", id);
    },
  },
  
};
</script>

<style scoped>
.post-header {
  height: 50px;
  margin: 10px;
}
.post-header img {
  float: left;
  height: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.post-header p {
  float: right;
  text-align: right;
  font-size: small;
}
.like-button {
  float: left;
  cursor: pointer;
  border: none;
  width: 60px;
  height: 60px;
  background: none;
}
.like-button-img {
  width: 50px;
  height: 50px;
}

div ~ img {
  width: 100%;
}

img + p {
  font-weight: bold;
  color: black;
}

img + h4 {
  color: white;
  float: left;
  text-align: center;
}

div ~ h1 {
  color: white;
  text-align: left;
}

div ~ p {
  color: white;
  text-align: left;
}
</style>
