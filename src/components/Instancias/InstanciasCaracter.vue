<template>
  <v-container>
    <v-form class="pl-6 pr-6" ref="form" v-model="valid">
      <!-- Titulo -->
      <v-layout justify-center class="pb-5 pt-3 blue--text">
        <h5 class="font-weight text-h5">Instancias de Carácter Estratégico</h5>
      </v-layout>

      <!-- Panel de  -->
      <v-layout v-for="(item, index) in instanciasCaracter " :key="index">
        <v-container pb-0 pt-0>
          <v-card color="#F2F2F2" class="mt-6 pl-8 pr-8">
            <v-layout justify-end>
              <v-layout>
                <!-- Titulo -->
                <v-layout justify-center class="pt-2">
                  <h3>Miembro</h3>
                </v-layout>
                <!-- Boton Eliminar miembro-->
                <v-btn icon color="red" @click="deleteInstanciaCaracter(index)">
                  <v-icon>delete</v-icon>
                </v-btn>
              </v-layout>
            </v-layout>
            <!-- Panel -->
            <v-row>
              <!-- Nombre Instancia TextField -->
              <v-col>
                <v-text-field
                  v-model="item.nombreInstancia"
                  label="Nombre Instancia"
                  :rules="inputRules"
                  required
                ></v-text-field>
              </v-col>
              <!--  Entidad Selected-->
              <v-col>
                <v-select
                  v-model="item.entidad"
                  label="Entidad"
                  :items="entidades"
                  :rules="inputRules"
                ></v-select>
              </v-col>
              <!-- Tipo Selected-->
              <v-col>
                <v-select v-model="item.tipo" label="Tipo" :items="tipos" :rules="inputRules"></v-select>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-layout>
      <!-- Boton agregar Direccion -->
      <v-layout class="pt-2 pr-3" flex-row-reverse>
        <v-btn @click="nuevaInstanciaCaracter" x-small fab dark>
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-layout>
      <v-row align-end justify-end>
        <!-- Boton volver-->
        <v-layout pt-4>
          <v-btn @click="goTo('InstanciasParticipacion')" color="success" class="mr-4">Volver</v-btn>
        </v-layout>

        <!-- Boton siguiente-->
        <v-layout pt-4 flex-row-reverse>
          <v-btn :disabled="valid" @click="goTo('Infraestructura')" color="success" class="mr-4">Siguiente</v-btn>
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
      entidades: ["Público", "Privada"],
      tipos: ["Regional", "Nacional"],
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
    ...mapState(["instanciasCaracter"])
  },
  methods: {
    ...mapMutations([
      "nuevaInstanciaCaracter",
      "deleteInstanciaCaracter",
      "goTo"
    ])
  }
};
</script>
