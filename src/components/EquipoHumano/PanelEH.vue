<template>
  <v-layout>
    <!-- <h1>{{numero}}</h1>
    <v-btn @click="aumentar(2)">+</v-btn>-->

    <v-card color="#F2F2F2" class="mt-6 pl-8 pr-8">
      <!-- Director -->
      <v-row>
        <!-- Nombre Director TextField -->
        <v-col>
          <v-text-field v-model="nombreDirector" label="Nombre" required></v-text-field>
        </v-col>

        <!-- Rut Director TextField -->
        <v-col>
          <v-text-field v-model="rutDirector" label="Rut(Sin puntos ni guión)" required></v-text-field>
        </v-col>

        <!-- Género Director Selected-->
        <v-col>
          <v-select v-model="generoDirector" label="Género" :items="genero"></v-select>
        </v-col>
      </v-row>
    </v-card>
  </v-layout>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      genero: ["Masculino", "Femenino"],
      nombreDirector: "",
      rutDirector: "",
      generoDirector: "",
      nombreGerente: "",
      rutGerente: "",
      generoGerente: ""
    };
  },
  computed: {
    ...mapState(["numero"])
  },
  methods: {
    ...mapMutations(["aumentar"])
  }
};
</script>
