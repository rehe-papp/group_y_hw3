<template>
  <div class="main">
    <img alt="monkee" src="../assets/logo.png" />
    <MainMessage msg="Welcome to our app" />
  </div>
</template>

<script>
// @ is an alias to /src
import MainMessage from "@/components/MainComponent.vue";

export default {
  name: "Main",
  components: {
    MainMessage,
  },
};
</script>

