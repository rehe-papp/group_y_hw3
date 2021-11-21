<template>
    <div>
        <div class="post-header" >
            <img v-bind:src="post.profilePic" alt= "lamp1">
            <p>{{post.date}}</p>
        </div>
        <img v-bind:src="post.image" alt="lamp2">
        <p>{{post.body}}</p>
        <button v-on:click="IncreaseLikes" class="like-button">
            <img class = "like-button-img" src="../assets/like.png" alt="like">
        </button>

        <p>{{likes}}</p>
    </div>
</template>

<script>
export default {
    name: "postcomp",
    props: ["id", "likes", "post"],
    methods: {
        IncreaseLikes: function() {
            this.$store.dispatch("IncreaseLikesAct")
        },
    }
}
</script>

<style scoped>
    .post-header{
        height: 50px;
        margin: 10px;
    }
    .post-header img{
        float: left;
        height:40px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .post-header p {
        float: right;
        text-align: right;
        font-size: small;
    }
    .like-button{
        float: left;
        cursor:pointer;
        border: none;
        width:60px;
        height:60px;
        background: none;
    }
    .like-button-img{
        width: 50px;
        height: 50px;
    }

    div ~ img {
      width: 100%;
    }

    img + p{
        font-weight: bold;
        color: black;
    }

    div ~ p {
        color: white;
        text-align: left;
    }
</style>