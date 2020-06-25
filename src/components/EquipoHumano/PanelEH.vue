<template>
  <v-layout>
    <h1>{{numero}}</h1>
    <v-btn @click="aumentar(2)">+</v-btn>
  </v-layout>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["numero"])
  },
  methods: {
      ...mapMutations(["aumentar"])
  }
};
</script>
