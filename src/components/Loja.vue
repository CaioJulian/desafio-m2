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
        <b-button class="px-4" @click="limparCarrinho"
          >Limpar Carrinho</b-button
        >
      </b-col>
      <b-col cols="6 text-right">
        <b-button
          variant="primary"
          class="px-4"
          :disabled="isDisabled"
          @click="confirmarSolicitacao"
          >Confirmar</b-button
        >
      </b-col>
    </b-row>
  </b-row>
</template>

<script>
import NewCard from "./NewCard.vue";
export default {
  components: { NewCard },
  name: "Compras",
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
    items() {
      return this.$store.state.carrinho.items;
    },
    total() {
      return this.$store.getters.total;
    },
    isDisabled() {
      let disabled = this.$store.getters.disabledList;
      if (disabled) this.limparCarrinho();
      return disabled;
    },
  },
  methods: {
    limparCarrinho() {
      this.$store.dispatch("resetStateAll");
      this.$store.commit("resetItems");
    },
    confirmarSolicitacao() {
      alert("Solicitação\nConfirmar solicitação de compra?");
      this.limparCarrinho();
    },
  },
};
</script>

