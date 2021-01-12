<template>
  <b-container>
    <Loja />
  </b-container>
</template>

<script>
// @ is an alias to /src
import Loja from "@/components/Loja.vue";

export default {
  name: "Home",
  components: {
    Loja,
  },
};
</script>
