<template>
  <v-container>
    <v-form class="pl-6 pr-6" ref="form" v-model="valid">
      <!-- Titulo -->
      <v-layout justify-center class="pb-5 pt-3 blue--text">
        <h5 class="font-weight text-h5">Contratos Tecnológicos</h5>
      </v-layout>

      <!-- Panel de  -->
      <v-layout v-for="(item, index) in contrato" :key="index">
        <v-container pb-0 pt-0>
          <v-card color="#F2F2F2" class="mt-6 pl-8 pr-8">
            <v-layout justify-end>
              <v-layout>
                <!-- Titulo -->
                <v-layout justify-center class="pt-2">
                  <h3>{{item.nombre}} - {{item.anio}}</h3>
                </v-layout>
                <!-- Boton Eliminar miembro-->
                <v-btn icon color="red" @click="deleteContrato(index)">
                  <v-icon>delete</v-icon>
                </v-btn>
              </v-layout>
            </v-layout>
            <!-- Panel -->
            <v-row>
              <!-- Nombre Contrato TextField -->
              <v-col>
                <v-text-field v-model="item.nombre" label="Nombre" :rules="inputRules" required></v-text-field>
              </v-col>
              <!--  Tipo de Contrato Selected-->
              <v-col>
                <v-select
                  v-model="item.tipoContrato"
                  label="Tipo de Contrato"
                  :items="tiposDeContrato"
                  :rules="inputRules"
                ></v-select>
              </v-col>
              <!-- Empresa Selected-->
              <v-col>
                <v-select
                  v-model="item.empresa"
                  label="Empresa"
                  :items="empresa"
                  item-text="nombre"
                  item-value="rut"
                  :rules="inputRules"
                ></v-select>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="item.anio"
                  type="number"
                  label="Año"
                  :rules="inputRules"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <!-- Area de Investigacion vinculada TextField -->
              <v-col>
                <v-text-field
                  v-model="item.areaInvestigacion"
                  label="Area de investigación vinculada"
                  :rules="inputRules"
                  required
                ></v-text-field>
              </v-col>
              <!-- Monto TextField -->
              <v-col>
                <v-currency-field v-model="item.monto" label="Monto" :rules="inputRules"></v-currency-field>
              </v-col>
              <!-- Gestion Comercial TextField -->
              <v-col >
                <h5 >¿Existe gestión comercial de la DTT?</h5>
                <v-col>
                  <v-radio-group required v-model="item.gestionDTT" row>
                    <v-radio label="Si" value="true"></v-radio>
                    <v-radio label="No" value="false"></v-radio>
                  </v-radio-group>
                </v-col>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-layout>
      <!-- Boton agregar Direccion -->
      <v-layout class="pt-2 pr-3" flex-row-reverse>
        <v-btn @click="nuevoContrato" x-small fab dark>
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-layout>
      <v-row align-end justify-end>
        <!-- Boton volver-->
        <v-layout pt-4>
          <v-btn @click="goTo('Empresa')" color="success" class="mr-4">Volver</v-btn>
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
      tiposDeContrato: [
        "Licencia",
        "Prestación de servicios",
        "Acuerdo de Transferencia de Material (ATM)",
        "Memorando de Entendimiento (MOU)",
        "Otros"
      ],
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
    ...mapState(["contrato", "empresa"])
  },
  methods: {
    ...mapMutations(["nuevoContrato", "deleteContrato", "goTo"])
  }
};
</script>
