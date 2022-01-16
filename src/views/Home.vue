<template>
  <b-container>
    <StoreProduct />
  </b-container>
</template>

<script>
// @ is an alias to /src
import StoreProduct from "@/components/StoreProduct.vue";

export default {
  name: "Home",
  components: {
    StoreProduct,
  },
};
</script>
