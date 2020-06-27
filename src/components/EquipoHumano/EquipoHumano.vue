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
            <!-- Panel -->
            <v-row>
              <!-- Nombre TextField -->
              <v-col>
                <v-text-field v-model="miembro.nombre" label="Nombre" :rules="inputRules" required></v-text-field>
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
            <v-row>
              <!-- Cargo  Selected-->
              <v-col>
                <v-select
                  v-model="miembro.cargoSeleccionado"
                  label="Cargo"
                  :items="cargo"
                  :rules="inputRules"
                ></v-select>
              </v-col>
              <!-- Funciones Selected-->
              <v-col>
                <v-select
                  v-model="miembro.funcionSeleccionada"
                  label="Funciones"
                  :items="funciones"
                  :rules="inputRules"
                ></v-select>
              </v-col>
              <!-- Tipo Contrato Selected-->
              <v-col>
                <v-select
                  v-model="miembro.tipoContratoSeleccionado"
                  label="Tipo Contrato"
                  :items="tipoContrato"
                  :rules="inputRules"
                ></v-select>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-layout>
      <v-row align-end justify-end>
        <!-- Boton volver-->
        <v-layout pt-4>
          <v-btn @click="goTo('PyGEstrategica')" color="success" class="mr-4">Volver</v-btn>
        </v-layout>

        <!-- Boton siguiente-->
        <v-layout pt-4 flex-row-reverse>
          <v-btn :disabled="!valid" @click="goTo('')" color="success" class="mr-4">Siguiente</v-btn>
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
      cargo: [
        "Director",
        "Gerente",
        "Investigador Permanente",
        "Investigador Asociado",
        "Asistente de Investigación",
        "Tesista Pregrado",
        "Tesista Postgrado",
        "Profesional",
        "Técnico",
        "Administrativo",
        "Otro"
      ],
      funciones: [
        "Gestión Directiva",
        "Gestión Financiera",
        "Investigación",
        "Soporte Técnico",
        "Servicios Tecnológicos",
        "Soporte Administrativo",
        "Docencia Pregrado",
        "Docencia Postgrado",
        "Otro"
      ],
      tipoContrato: [
        "Honorarios con cargo a proyecto",
        "Honorarios con cargo a presupuesto UTALCA",
        "Presupuesto interno del Centro Tecnológico",
        "Planta UTALCA",
        "Contrata UTALCA",
        "Otro"
      ],
      // Validacion
      inputRules: [v => v.length > 0 || "Requerido"],
      inputRut: [
        v => v.length > 7  || "Ingresa un rut válido",
        v =>  v.length < 10 || "Ingresa un rut válido"
      ],
      valid: false
    };
  },
  computed: {
    ...mapState(["miembrosEH"])
  },
  methods: {
    ...mapMutations(["nuevoMiembro", "deleteMiembro", "goTo"])
  }
};
</script>