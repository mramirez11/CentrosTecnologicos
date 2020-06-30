<template>
  <v-container>
    <v-form class="pl-6 pr-6" ref="form" v-model="valid">
      <!-- Titulo -->
      <v-layout justify-center class="pb-5 pt-3 blue--text">
        <h5 class="font-weight text-h5">Emprendimiento de Base Tecnológica</h5>
      </v-layout>

      <!-- Panel de  -->
      <v-layout v-for="(item, index) in ebt" :key="index">
        <v-container pb-0 pt-0>
          <v-card color="#F2F2F2" class="mt-6 pl-8 pr-8">
            <v-layout justify-end>
              <v-layout>
                <!-- Titulo -->
                <v-layout justify-center class="pt-2">
                  <h3>{{item.nombre}}</h3>
                </v-layout>
                <!-- Boton Eliminar EBT -->
                <v-btn icon color="red" @click="deleteEBT(index)">
                  <v-icon>delete</v-icon>
                </v-btn>
              </v-layout>
            </v-layout>
            <!-- Panel -->
            <v-row>
              <!-- Nombre TextField -->
              <v-col>
                <v-text-field v-model="item.nombre" label="Nombre EBT" :rules="inputRules" required></v-text-field>
              </v-col>
              <!--  Código TextField-->
              <v-col>
                <v-text-field v-model="item.codigo" label="Código EBT" :rules="inputRules"></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  type="number"
                  v-model="item.cantTrabajadores"
                  label="Cantidad de trabajadores"
                  :rules="inputRules"
                  min=0
                  required
                ></v-text-field>
              </v-col>
              <!-- Monto apalancado currency-field -->
              <v-col>
                <v-currency-field v-model="item.monto" label="Monto apalancado" :rules="inputRules"></v-currency-field>
              </v-col>
            </v-row>
            <v-row></v-row>
          </v-card>
        </v-container>
      </v-layout>
      <!-- Boton agregar EBT -->
      <v-layout class="pt-2 pr-3" flex-row-reverse>
        <v-btn @click="nuevoEBT" x-small fab dark>
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-layout>
      <v-row align-end justify-end>
        <!-- Boton volver-->
        <v-layout pt-4>
          <v-btn @click="goTo('ParticipanteProyecto')" color="success" class="mr-4">Volver</v-btn>
        </v-layout>

        <!-- Boton siguiente-->
        <v-layout pt-4 flex-row-reverse>
          <v-btn :disabled="valid" @click="goTo('ParticipanteEBT')" color="success" class="mr-4">Siguiente</v-btn>
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
      inputRut: [
        v => v.length > 7 || "Ingresa un rut válido",
        v => v.length < 10 || "Ingresa un rut válido"
      ],
      valid: false
    };
  },
  computed: {
    ...mapState(["ebt"])
  },
  methods: {
    ...mapMutations(["nuevoEBT", "deleteEBT", "goTo"])
  }
};
</script>
