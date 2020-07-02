<template>
  <v-container>
    <v-form class="pl-6 pr-6" ref="form" v-model="valid">
      <!-- Titulo -->
      <v-layout justify-center class="pb-5 pt-3 blue--text">
        <h5 class="font-weight text-h5">Equipo Humano</h5>
      </v-layout>

      <!-- Panel de miembro -->
      <v-layout v-for="(miembro, index) in personaState" :key="index">
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
                  v-model="miembro.rut"
                  label="Rut(Sin puntos, solo guión)"
                  :rules="[validaRut]"
                  required
                  min="0"
                ></v-text-field>
              </v-col>
              <!-- Género  Selected-->
              <v-col>
                <v-select v-model="miembro.genero" label="Género" :items="genero"></v-select>
              </v-col>
            </v-row>
            <v-row>
              <!-- Cargo  Selected-->
              <v-col>
                <v-select v-model="miembro.rol" label="Cargo" :items="cargo" :rules="inputRules"></v-select>
              </v-col>
              <!-- Funciones Selected-->
              <v-col>
                <v-select
                  v-model="miembro.funcion"
                  label="Funciones"
                  :items="funciones"
                  :rules="inputRules"
                ></v-select>
              </v-col>
              <!-- Tipo Contrato Selected-->
              <v-col>
                <v-select
                  v-model="miembro.tipoContrato"
                  label="Tipo Contrato"
                  :items="tipoContrato"
                  :rules="inputRules"
                ></v-select>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-layout>
      <!-- Boton agregar miembro -->
      <v-layout class="pt-2 pr-3" flex-row-reverse>
        <v-btn @click="nuevoMiembro" x-small fab dark>
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-layout>
      <v-row align-end justify-end>
        <!-- Boton volver-->
        <v-layout pt-4>
          <v-btn @click="goTo('PyGEstrategica')" color="success" class="mr-4">Volver</v-btn>
        </v-layout>

        <!-- Boton siguiente-->
        <v-layout pt-4 flex-row-reverse>
          <v-btn
            :disabled="valid"
            @click="goTo('InstanciasParticipacion')"
            color="success"
            class="mr-4"
          >Siguiente</v-btn>
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

      valid: false
    };
  },
  computed: {
    ...mapState("EquipoHumano", ["personaState"])
  },
  methods: {
    ...mapMutations(["goTo"]),
    ...mapMutations("EquipoHumano", ["nuevoMiembro", "deleteMiembro"]),
    //Para validar rut
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut: function(rutCompleto) {
      rutCompleto = rutCompleto.replace("‐", "-");
      if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) return false;
      var tmp = rutCompleto.split("-");
      var digv = tmp[1];
      var rut = tmp[0];
      if (digv == "K") digv = "k";
      return this.dv(rut) == digv;
    },
    dv: function(T) {
      var M = 0,
        S = 1;
      for (; T; T = Math.floor(T / 10))
        S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
      return S ? S - 1 : "k";
    }
  }
};
</script>