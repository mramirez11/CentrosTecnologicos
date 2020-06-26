<template>
  <v-container>
    <v-form class="pl-6 pr-6" ref="form" v-model="valid">
      <!-- Titulo -->
      <v-layout justify-center class="pb-5 pt-3 blue--text">
        <h5 class="font-weight text-h5">Equipo Humano</h5>
      </v-layout>

      <!-- Boton agregar miembro-->
      <v-layout flex-row-reverse>
        <v-btn @click="nuevoMiembro" small>Nuevo miembro</v-btn>
      </v-layout>

      <!-- Panel de miembro -->
      <v-layout v-for="(miembro, index) in miembrosEH" :key="index">
        <v-container pb-0 pt-0>
          <v-card color="#F2F2F2" class="mt-6 pl-8 pr-8">
            <v-layout justify-end>
              <v-layout>
                <!-- Titulo -->
                <v-layout justify-center class="pt-2">
                  <h3>Miembro {{miembro.nombre}}</h3>
                </v-layout>
                <!-- Boton Eliminar miembro-->
                <v-btn icon color="red" @click="deleteMiembro(index)">
                  <v-icon>delete</v-icon>
                </v-btn>
              </v-layout>
            </v-layout>
            <!-- Director -->
            <v-row>
              <!-- Nombre TextField -->
              <v-col>
                <v-text-field v-model="miembro.nombre" label="Nombre" :rules="inputNombre" required></v-text-field>
              </v-col>

              <!-- Rut TextField -->
              <v-col>
                <v-text-field
                  type="number"
                  v-model="miembro.rut"
                  label="Rut(Sin puntos ni guión)"
                  :rules="inputRut"
                  required
                ></v-text-field>
              </v-col>

              <!-- Género  Selected-->
              <v-col>
                <v-select v-model="miembro.generoSeleccionado" label="Género" :items="genero"></v-select>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-layout>
      <v-row align-end justify-end>
        <!-- Boton volver-->
        <v-layout pt-4>
          <v-btn color="success" class="mr-4">Volver</v-btn>
        </v-layout>

        <!-- Boton siguiente-->
        <v-layout pt-4 flex-row-reverse>
          <v-btn :disabled="!valid" @click="submit" color="success" class="mr-4">Siguiente</v-btn>
        </v-layout>
      </v-row>
    </v-form>
  </v-container>
</template>
<script>

import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      genero: ["Masculino", "Femenino"],

      // Validacion
      inputNombre: [v => v.length > 0 || "Ingresa un nombre"],
      inputRut: [
        v => (v.length > 7 && v.length < 10) || "Ingresa un rut válido"
      ],
      valid: false,
    };
  },
  computed: {
    ...mapState(["miembrosEH"])
  },
  methods: {
    ...mapMutations(["nuevoMiembro", "deleteMiembro"]),
    submit() {
      if (this.$refs.form.validate()) {
        console.log("Formulario validado");
        // this.$router.push("/PyGEstrategica")
      } else {
        console.log("Formulario no validao");
      }
    }
  },
};
</script>