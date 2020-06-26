<template>
  
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "PanelEH",
  data() {
    return {
     
    };
  },
  computed: {
    ...mapState(["miembrosEH"])
  },
  methods: {
    ...mapMutations(["aumentar"])
  }
};
</script>
