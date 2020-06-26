<template>
  <v-container pb-0 pt-0>
    <!-- <h1>{{numero}}</h1>
    <v-btn @click="aumentar(2)">+</v-btn>-->

    <v-card color="#F2F2F2" class="mt-6 pl-8 pr-8">
      <!-- Director -->
      <v-row>
        <!-- Nombre TextField -->
        <v-col>
          <v-text-field v-model="nombre" label="Nombre" :rules="inputNombre" required></v-text-field>
        </v-col>

        <!-- Rut TextField -->
        <v-col>
          <v-text-field
            type="number"
            v-model="rut"
            label="Rut(Sin puntos ni guión)"
            :rules="inputRut"
            required
          ></v-text-field>
        </v-col>

        <!-- Género  Selected-->
        <v-col>
          <v-select v-model="generoSeleccionado" label="Género" :items="genero"></v-select>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "PanelEH",
  data() {
    return {
      nombre: "",
      rut: "",
      genero: ["Masculino", "Femenino"],
      generoSeleccionado: "",
      // Validacion
      inputNombre: [v => v.length > 0 || "Ingresa un nombre"],
      inputRut: [
        v => (v.length > 7 && v.length < 10) || "Ingresa un rut válido"
      ]
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
