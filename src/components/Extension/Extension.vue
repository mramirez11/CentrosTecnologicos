<template>
  <v-container>
    <v-form class="pl-6 pr-6" ref="form" v-model="valid">
      <!-- Titulo -->
      <v-layout justify-center class="pb-5 pt-3 blue--text">
        <h5 class="font-weight text-h5">Actividades de Extensión</h5>
      </v-layout>

      <!-- Panel de  -->
      <v-layout v-for="(item, index) in extension" :key="index">
        <v-container pb-0 pt-0>
          <v-card color="#F2F2F2" class="mt-6 pl-8 pr-8">
            <v-layout justify-end>
              <v-layout>
                <!-- Titulo -->
                <v-layout justify-center class="pt-2">
                  <h3>Titulo {{item.nombre}}</h3>
                </v-layout>
                <!-- Boton Eliminar miembro-->
                <v-btn icon color="red" @click="deleteExtension(index)">
                  <v-icon>delete</v-icon>
                </v-btn>
              </v-layout>
            </v-layout>
            <!-- Panel -->
            <v-row>
              <!-- Actividades Select -->
              <v-col>
                <v-select
                  v-model="item.nombre"
                  label="Actividad"
                  :items="actividades"
                  :rules="inputRules"
                  required
                ></v-select>
              </v-col>
              <!-- Publico Objetivo TextField -->
              <v-col>
                <v-text-field
                  v-model="item.publico"
                  label="Público objetivo"
                  :rules="inputRules"
                  required
                ></v-text-field>
              </v-col>
              <!-- Nro participantes TextField -->
              <v-col>
                <v-text-field
                  type="number"
                  v-model="item.nroParticipantes"
                  label="N° Participantes"
                  :rules="inputRules"
                  required
                ></v-text-field>
              </v-col>
              <!-- Año actual TextField -->
              <v-col>
                <v-text-field
                  type="number"
                  v-model="item.anio"
                  label="Año actual"
                  :rules="inputAño"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row></v-row>
          </v-card>
        </v-container>
      </v-layout>
      <!-- Boton agregar Extension -->
      <v-layout class="pt-2 pr-3" flex-row-reverse>
        <v-btn @click="nuevaExtension" x-small fab dark>
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-layout>
      <v-row align-end justify-end>
        <!-- Boton volver-->
        <v-layout pt-4>
          <v-btn @click="goTo('Transferencia')" color="success" class="mr-4">Volver</v-btn>
        </v-layout>

        <!-- Boton siguiente-->
        <v-layout pt-4 flex-row-reverse>
          <v-btn :disabled="valid" @click="goTo('Vinculo')" color="success" class="mr-4">Siguiente</v-btn>
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
      actividades: [
        "Seminarios",
        "Talleres",
        "Reuniones",
        "Boletines",
        "Otros"
      ],
      // Validacion
      inputRules: [v => v.length > 0 || "Requerido"],
      inputAño: [v => v.length == 4 || "Ingresa un año válido"],
      valid: false
    };
  },
  computed: {
    ...mapState(["extension"])
  },
  methods: {
    ...mapMutations(["nuevaExtension", "deleteExtension", "goTo"])
  }
};
</script>
