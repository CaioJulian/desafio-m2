<template>
  <b-row class="col-12">
    <b-col cols="12" class="text-justify">
      <h4 class="font-weight-bold text-primary">{{ title }}</h4>
      <p>{{ description }}</p>
    </b-col>
    <b-col lg="2" md="3" sm="4" v-for="(item, index) in list" :key="index">
      <b-card no-body class="mb-4 font-weight-bold">
        <b-link
          class="btn btn-white"
          :class="{ 'active-selected': item.state == true }"
          @click="toggleItemState(list, index)"
          :disabled="disabled"
        >
          <b-card-title class="text-left h5 mb-4"
            ><b> {{ item.title }}</b></b-card-title
          >
          <b-card-text class="text-left"
            >R$ {{ item.price | formatPrice }}</b-card-text
          >
          <b-card-text class="text-right">
            <b-link
              class="text-muted small"
              :class="{ 'active-selected': item.state == true }"
              >+ Detalhes</b-link
            ></b-card-text
          >
        </b-link>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    list: Array,
    disabled: Boolean
  },
  methods: {
    toggleItemState(list, index) {
      if (!list[index].state) {
        this.$store.commit("resetState", list);
      }
      this.$store.commit("toggleItemState", { list, index });

      this.$store.dispatch("checkItem", list);
    }
  }
};
</script>
