<template>
  <v-container>
    <v-form class="pl-6 pr-6" ref="form" v-model="valid">
      <!-- Titulo -->
      <v-layout justify-center class="pb-5 pt-3 blue--text">
        <h5 class="font-weight text-h5">Servicios Tecnológicos</h5>
      </v-layout>

      <!-- Panel de Servicios -->
      <v-layout v-for="(item, index) in servicioState" :key="index">
        <v-container pb-0 pt-0>
          <v-card color="#F2F2F2" class="mt-6 pl-8 pr-8">
            <v-layout justify-end>
              <v-layout>
                <!-- Titulo -->
                <v-layout justify-center class="pt-2">
                  <h3>{{item.tipo}}</h3>
                </v-layout>
                <!-- Boton Eliminar Servicio-->
                <v-btn icon color="red" @click="deleteServicio(index)">
                  <v-icon>delete</v-icon>
                </v-btn>
              </v-layout>
            </v-layout>
            <!-- Panel -->
            <v-row>
              <!-- Tipo de servicio prestado TextField -->
              <v-col>
                <v-text-field
                  v-model="item.tipo"
                  label="Tipo de servicio prestado"
                  :rules="inputRules"
                  required
                ></v-text-field>
              </v-col>
              <!-- Nro clientes TextField -->
              <v-col>
                <v-text-field
                  type="number"
                  v-model="item.nroClientes"
                  label="N° Clientes"
                  required
                  min="0"
                ></v-text-field>
              </v-col>
              <!-- Tipo Solicitante Selected-->
              <v-col>
                <v-select
                  v-model="item.tipoSolicitante"
                  label="Tipo solicitante"
                  :items="tipoSolicitantes"
                  :rules="inputRules"
                ></v-select>
              </v-col>
              <!-- Monto Total currency-field -->
              <v-col>
                <v-currency-field v-model="item.monto" label="Monto total (M)" ></v-currency-field>
              </v-col>
            </v-row>
            <v-row>
              <!-- Comentarios TextArea -->
              <v-col>
                <v-textarea
                  rows="2"
                  label="Comentarios"
                  v-model="item.comentarios"
                ></v-textarea>
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
              <!-- Año TextField -->
              <v-col>
                <v-text-field
                  v-model="item.anio"
                  type="number"
                  label="Año"
                  :rules="inputAño"
                  required             
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-layout>
      <!-- Boton agregar Servicio -->
      <v-layout class="pt-2 pr-3" flex-row-reverse>
        <v-btn @click="nuevoServicio" x-small fab dark>
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-layout>
      <v-row align-end justify-end>
        <!-- Boton volver-->
        <v-layout pt-4>
          <v-btn @click="goTo('ParticipanteEBT')" color="success" class="mr-4">Volver</v-btn>
        </v-layout>

        <!-- Boton siguiente-->
        <v-layout pt-4 flex-row-reverse>
          <v-btn :disabled="valid" @click="goTo('Transferencia')" color="success" class="mr-4">Siguiente</v-btn>
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
      tipoSolicitantes: ["Público", "Privado"],
      // Validacion
      inputRules: [v => v.length > 0 || "Requerido"],
      inputAño: [v => v.length == 4 || "Ingresa un año válido"],
      valid: false
    };
  },
  computed: {
    ...mapState("Servicio", ["servicioState"])
  },
  methods: {
    ...mapMutations("Servicio", ["nuevoServicio", "deleteServicio", ]),
    ...mapMutations(["goTo"])
  }
};
</script>
