<template>
  <v-container>
    <v-form class="pl-6 pr-6" ref="form" v-model="valid">
      <!-- Titulo -->
      <v-layout justify-center class="pb-5 pt-3 blue--text">
        <h5 class="font-weight text-h5">Transferencia Tecnológica</h5>
      </v-layout>

      <!-- Panel de  -->
      <v-layout v-for="(item, index) in transferencia" :key="index">
        <v-container pb-0 pt-0>
          <v-card color="#F2F2F2" class="mt-6 pl-8 pr-8">
            <v-layout justify-end>
              <v-layout>
                <!-- Titulo -->
                <v-layout justify-center class="pt-2">
                  <h3>{{item.producto}}</h3>
                </v-layout>
                <!-- Boton Eliminar Transferencia-->
                <v-btn icon color="red" @click="deleteTransferencia(index)">
                  <v-icon>delete</v-icon>
                </v-btn>
              </v-layout>
            </v-layout>
            <!-- Panel -->
            <v-row>
              <!-- Producto Selected-->
              <v-col>
                <v-select
                  v-model="item.producto"
                  label="Producto"
                  :items="productos"
                  :rules="inputRules"
                ></v-select>
              </v-col>
              <!-- Tipo TT Selected-->
              <v-col>
                <v-select
                  v-model="item.tipoTT"
                  label="Tipo Transferencia"
                  :items="tipoTTs"
                  :rules="inputRules"
                ></v-select>
              </v-col>
              <!-- Año adjudicacion TextField -->
              <v-col>
                <v-text-field
                  type="number"
                  v-model="item.anioAdjudicacion"
                  label="Año adjudicación"
                  :rules="inputAño"
                  required
                ></v-text-field>
              </v-col>
              <!-- Duracion TextField -->
              <v-col>
                <v-text-field
                  type="number"
                  v-model="item.duracion"
                  label="Duracion (en meses)"
                  :rules="inputRules"
                  required
                  min="0"
                ></v-text-field>
              </v-col>
              <!-- Estado actual Selected-->
              <v-col>
                <v-select
                  v-model="item.estado"
                  label="Estado actual"
                  :items="estados"
                  :rules="inputRules"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
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

              <!-- Monto currency-field -->
              <v-col>
                <v-currency-field v-model="item.monto" label="Monto total (M)"></v-currency-field>
              </v-col>
              <!-- Detalle TextArea -->
              <v-col>
                <v-textarea rows="1" label="Detalle" v-model="item.detalle"></v-textarea>
              </v-col>
              <!-- Gestion Comercial TextField -->
              <v-col>
                <h5>¿Existe gestión comercial de la DTT?</h5>
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
      <!-- Boton agregar Transferencia -->
      <v-layout class="pt-2 pr-3" flex-row-reverse>
        <v-btn @click="nuevaTransferencia" x-small fab dark>
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-layout>
      <v-row align-end justify-end>
        <!-- Boton volver-->
        <v-layout pt-4>
          <v-btn @click="goTo('Servicio')" color="success" class="mr-4">Volver</v-btn>
        </v-layout>

        <!-- Boton siguiente-->
        <v-layout pt-4 flex-row-reverse>
          <v-btn :disabled="valid" @click="goTo('Extension')" color="success" class="mr-4">Siguiente</v-btn>
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
      productos: ["Contratos I+D", "ATM", "Licencias", "Voucher", "Otros"],
      tipoTTs: ["Contratos de licencia", "Contratos de Know How", "EBT"],
      estados: ["Ejecución", "Suspendido", "Terminado"],
      // Validacion
      inputRules: [v => v.length > 0 || "Requerido"],
      inputAño: [v => v.length == 4 || "Ingresa un año válido"],

      valid: false
    };
  },
  computed: {
    ...mapState(["transferencia"])
  },
  methods: {
    ...mapMutations(["nuevaTransferencia", "deleteTransferencia", "goTo"])
  }
};
</script>
