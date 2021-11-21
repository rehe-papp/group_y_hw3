<template>
  <div class="main">
    <img alt="monkee" src="../assets/logo.png" />
    <MainComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainComponent from "@/components/MainComponent.vue";

export default {
  name: "Main",
  components: {
    MainComponent,
  },
};
</script>

