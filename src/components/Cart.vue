<template>
  <b-container>
    <b-col cols="12" class="text-justify">
      <h4 class="font-weight-bold text-primary">Carrinho</h4>
    </b-col>
    <b-row class="col-12">
      <b-col cols="6">
        <p class="text-left">Taxa de instalação</p>
      </b-col>
      <b-col cols="6">
        <p class="text-right">Grátis</p>
      </b-col>
    </b-row>

    <b-row class="col-12" v-for="(item, index) in items" :key="index">
      <b-col cols="6">
        <p class="text-left">{{ item.title }}</p>
      </b-col>
      <b-col cols="6">
        <p class="text-right">R$ {{ item.price | formatPrice }}</p>
      </b-col>
    </b-row>

    <b-row class="col-12 font-weight-bold text-primary">
      <b-col cols="6">
        <p class="text-left">Total</p>
      </b-col>
      <b-col cols="6">
        <p class="text-right">R$ {{ total | formatPrice }}/mês</p>
      </b-col>
    </b-row>

    <b-row class="col-12 pt-2">
      <b-col cols="6">
        <b-button class="px-4" @click="cleanCart">Limpar Carrinho</b-button>
      </b-col>
      <b-col cols="6 text-right">
        <b-button
          variant="primary"
          class="px-4"
          :disabled="isDisabled"
          @click="confirmSolicitation"
          >Confirmar</b-button
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import clean from "@/mixins/clean.js";
export default {
  mixins: [clean],
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    items() {
      return this.$store.state.cart.items;
    },
    total() {
      return this.$store.getters.total;
    }
  },
  methods: {
    confirmSolicitation() {
      alert("Solicitação\nConfirmar solicitação de compra?");
      this.cleanCart();
    }
  }
};
</script>
