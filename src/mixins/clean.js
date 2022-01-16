export default {
  methods: {
    cleanCart() {
      this.$store.dispatch("resetStateAll");
      this.$store.commit("resetItems");
    }
  }
};
