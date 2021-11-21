<template>
    <div>
        <div class="post-header">
            <img src="../assets/harambe_profile.jpg" alt= "lamp1">
            <p>15.03.2021</p>
        </div>
        <img src="../assets/harambe.jpg" alt="lamp2">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
        <button class="like-button"><img class = "like-button-img" src="../assets/like.jpg" alt="like"></button>
    </div>
</template>

<script>
export default {
    name: "postcomp"
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
        width:50px;
        height:50px;
        background: none;
    }
    .like-button-img{
        border: black;
        box-shadow: 5px  10px 20px 0px black;
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