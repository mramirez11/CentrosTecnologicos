<template>
  <v-container>
    <v-form class="pl-6 pr-6" ref="form" v-model="valid">
      <!-- Titulo -->
      <v-layout justify-center class="pb-5 pt-3 blue--text">
        <h5 class="font-weight text-h5">Flujos Presupuestarios</h5>
      </v-layout>

      <!-- Panel de  -->
      <v-layout v-for="(item, index) in flujos " :key="index">
        <v-container pb-0 pt-0>
          <v-card color="#F2F2F2" class="mt-6 pl-8 pr-8">
            <v-layout justify-end>
              <v-layout>
                <!-- Titulo -->
                <v-layout justify-center class="pt-2">
                  <h3>Ingresos año {{item.anio}}</h3>
                </v-layout>
                <!-- Boton Eliminar miembro-->
                <v-btn icon color="red" @click="deleteFlujo(index)">
                  <v-icon>delete</v-icon>
                </v-btn>
              </v-layout>
            </v-layout>
            <!-- Panel -->
            <v-row>
              <!--  Año TextField -->

              <v-col>
                <v-text-field
                  v-model="item.anio"
                  type="number"
                  label="Año"
                  :rules="inputRules"
                  required
                ></v-text-field>
              </v-col>
              <!-- Ingresos por Proyectos TextField -->
              <v-col>
                <v-currency-field v-model="item.proyectos" label="Proyectos" :rules="inputRules"></v-currency-field>
              </v-col>
              <!-- Ingresos por Servicios Tecnológicos TextField -->
              <v-col>
                <v-currency-field
                  v-model="item.servicios"
                  label="Servicios Tecnológicos"
                  :rules="inputRules"
                ></v-currency-field>
              </v-col>
              <!-- Ingresos por Aporte Institucional -->
              <v-col>
                <v-currency-field
                  v-model="item.aporteInstitucional"
                  label="Aporte Institucional"
                  :rules="inputRules"
                ></v-currency-field>
              </v-col>
            </v-row>
            <v-row>
              <!-- Ingresos por Transferencia Tecnológica TextField -->
              <v-col>
                <v-currency-field
                  v-model="item.transferenciaTecnologica"
                  label="Transferencia Tecnológica"
                  :rules="inputRules"
                ></v-currency-field>
              </v-col>
              <!-- Ingresos por Contrato TextField -->
              <v-col>
                <v-currency-field v-model="item.contratos" label="Contrato" :rules="inputRules"></v-currency-field>
              </v-col>
              <!-- Ingresos por Egreso Promedio anual TextField -->
              <v-col>
                <v-currency-field
                  v-model="item.promAnual"
                  label="Egresos promedio anual"
                  :rules="inputRules"
                ></v-currency-field>
              </v-col>
              <!-- Resultados totales TextField -->
              <v-col>
                <v-currency-field
                  v-model="item.total"
                  label="Resultados totales"
                  :rules="inputRules"
                ></v-currency-field>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-layout>
      <!-- Boton agregar Flujo -->
      <v-layout class="pt-2 pr-3" flex-row-reverse>
        <v-btn @click="nuevoFlujo" x-small fab dark>
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-layout>
      <v-row align-end justify-end>
        <!-- Boton volver-->
        <v-layout pt-4>
          <v-btn @click="goTo('Infraestructura')" color="success" class="mr-4">Volver</v-btn>
        </v-layout>

        <!-- Boton siguiente-->
        <v-layout pt-4 flex-row-reverse>
          <v-btn :disabled="valid" @click="goTo('Empresa')" color="success" class="mr-4">Siguiente</v-btn>
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
      // Validacion
      inputRules: [v => v.length > 0 || "Requerido"],
      valid: false,

      rate: 0
    };
  },
  computed: {
    ...mapState(["flujos"])
  },
  methods: {
    ...mapMutations(["nuevoFlujo", "deleteFlujo", "goTo"])
  }
};
</script>
