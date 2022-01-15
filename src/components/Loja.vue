<template>
  <b-row class="pb-4">
    <hr class="col-sm-11 col-md-12 my-4" />

    <!-- Internet -->
    <new-card
      title="Internet"
      description="Selecione um plano de internet para continuar"
      :list="list_net"
    ></new-card>

    <!-- TV -->
    <new-card
      title="TV"
      description="Agora escolha seu pacote de televisão"
      :list="list_tv"
      :disabled="isDisabled"
    ></new-card>

    <!-- Fixo -->
    <new-card
      title="Fixo"
      description="Agora escolha seu pacote de telefone fixo"
      :list="list_fixo"
      :disabled="isDisabled"
    ></new-card>

    <hr class="col-sm-11 col-md-12 my-4" />

    <!-- Carrinho -->
    <cart :isDisabled="isDisabled" />
  </b-row>
</template>

<script>
import Cart from "./Cart.vue";
import NewCard from "./NewCard.vue";
export default {
  components: { NewCard, Cart },
  created() {
    this.$store.dispatch("getLists");
  },
  computed: {
    list_net() {
      return this.$store.state.list_net;
    },
    list_tv() {
      return this.$store.state.list_tv;
    },
    list_fixo() {
      return this.$store.state.list_fixo;
    },
    isDisabled() {
      let disabled = this.$store.getters.disabledList;
      if (disabled) this.cleanCart();
      return disabled;
    }
  },
  methods: {
    cleanCart() {
      this.$store.dispatch("resetStateAll");
      this.$store.commit("resetItems");
    }
  }
};
</script>
