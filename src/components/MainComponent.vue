<template>
  <section class="index">
    <div>
      yo
    </div>

    <div>
      yo
    </div>

    <div>
      yo
    </div>


    <div>
      yo
    </div>

  </section>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .index {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      background-color: #722929;
      width: 30%;
      margin: 10px auto;
      color: #e0e0e0;
  }
  .index > div {
      margin: 10px;
      background-color: rgb(207, 123, 193);
      box-shadow: 5px  10px 10px #888888;
  }
  .index > div > img {
      width: 100%;
  }
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

  img + p{
      font-weight: bold;
      color: black;
  }

  div ~ p {
      color: white;
      text-align: left;
    }
</style>
