<template>
  <v-container>
    <v-form class="pl-6 pr-6" ref="form" v-model="valid">
      <!-- Titulo -->
      <v-layout justify-center class="pb-5 pt-3 blue--text">
        <h5 class="font-weight text-h5">Vinculos</h5>
      </v-layout>

      <!-- Panel de  -->
      <v-layout v-for="(item, index) in vinculo" :key="index">
        <v-container pb-0 pt-0>
          <v-card color="#F2F2F2" class="mt-6 pl-8 pr-8">
            <v-layout justify-end>
              <v-layout>
                <!-- Titulo -->
                <v-layout justify-center class="pt-2">
                  <h3></h3>
                </v-layout>
                <!-- Boton Eliminar vinculo-->
                <v-btn icon color="red" @click="deleteVinculo(index)">
                  <v-icon>delete</v-icon>
                </v-btn>
              </v-layout>
            </v-layout>
            <!-- Panel -->
            <v-row>
              <!-- Sector Select -->
              <v-col>
                <v-select
                  v-model="item.sector"
                  label="Sectores"
                  :items="sectores"
                  :rules="inputRules"
                  required
                ></v-select>
              </v-col>
              <!-- Socios TextField -->
              <v-col>
                <v-select
                  v-model="item.socio"
                  label="Socio"
                  :items="socios"
                  :rules="inputRules"
                  required
                ></v-select>
              </v-col>
              
              <!-- Tipo de colaboración TextField -->
              <v-col>
                <v-select
                  v-model="item.colaboracion"
                  label="Tipo de colaboración"
                  :items="tipos"
                  :rules="inputRules"
                  required
                ></v-select>
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
      <!-- Boton agregar vinculo -->
      <v-layout class="pt-2 pr-3" flex-row-reverse>
        <v-btn @click="nuevoVinculo" x-small fab dark>
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
          <v-btn :disabled="valid" @click="goTo('Socio')" color="success" class="mr-4">Siguiente</v-btn>
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
      sectores: [
        "Público",
        "Privado",
        "Otros"
      ],
      socios:["Empresas", "Asoc. Gremiales", "Otros"],
      tipos: ["Postulación proyecto I+D", "Levantamiento y difusión de información", "Actividades de transferencia tecnológica e innovación", "Actividades de docencia", "Otros"],      // Validacion
      inputRules: [v => v.length > 0 || "Requerido"],
      inputAño: [v => v.length == 4 || "Ingresa un año válido"],
      valid: false
    };
  },
  computed: {
    ...mapState(["vinculo"])
  },
  methods: {
    ...mapMutations(["nuevoVinculo", "deleteVinculo", "goTo"])
  }
};
</script>
