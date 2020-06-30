<template>
  <v-container>
    <v-form class="pl-6 pr-6" ref="form" v-model="valid">
      <!-- Titulo -->
      <v-layout justify-center class="pb-5 pt-3 blue--text">
        <h5 class="font-weight text-h5">Infraestructura</h5>
      </v-layout>

      <!-- Panel -->
      <v-layout>
        <v-container pb-0 pt-0>
          <v-card color="#F2F2F2" class="mt-6 pl-8 pr-8">
            <!-- Panel -->
            <v-row >
              <!-- Donde funciona CT -->
              <v-layout >
                <!-- CheckBox -->
                <v-layout >
                  <v-col>
                    <h4>¿Donde funciona el Centro Tecnológico?</h4>
                    <v-col>
                      <v-radio-group required v-model="infraestructura.localizacion" column>
                        <v-radio label="Dentro de la facultad" value="Dentro de la Facultad"></v-radio>
                        <v-radio label="Fuera de la Facultad" value="Fuera de la Facultad"></v-radio>
                      </v-radio-group>
                    </v-col>
                  </v-col>
                </v-layout>
                <!--  Cantidad Oficinas Selected -->
                <v-layout justify-center align-center>
                  <v-col>
                    <v-text-field
                      type="number"
                      v-model="infraestructura.cantOficinas"
                      label="N° Oficinas"
                      :rules="inputRules"
                      required
                      min="0"
                    ></v-text-field>
                  </v-col>
                </v-layout>
              </v-layout>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <!--Labotorios? -->
              <v-layout>
                <!-- CheckBox -->
                <v-layout >
                  <v-col>
                    <h4>¿El centro cuenta con laboratorios?</h4>
                    <v-col>
                      <v-radio-group v-model="lab" column>
                        <v-radio label="Si"></v-radio>
                        <v-radio label="No"></v-radio>
                      </v-radio-group>
                    </v-col>
                  </v-col>
                </v-layout>
                <!--  Cantidad m2 Selected -->
                <v-layout v-if="!lab" justify-center align-center>
                  <v-col>
                    <v-text-field
                      type="number"
                      v-model="infraestructura.Mt"
                      label="Cantidad metros cuadrados"
                      :rules="inputRules"
                      required
                      min="0"
                    ></v-text-field>
                  </v-col>
                </v-layout>
              </v-layout>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <!--Equipamiento tecnológico? -->
              <v-layout class="align-items: stretch">
                <!-- CheckBox -->
                <v-layout >
                  <v-col>
                    <h4>¿El centro cuenta con equipamiento tecnológico propio?</h4>
                    <v-col>
                      <v-radio-group  v-model="equip" column>
                        <v-radio label="Si"></v-radio>
                        <v-radio label="No"></v-radio>
                      </v-radio-group>
                    </v-col>
                  </v-col>
                </v-layout>
                <!--  Valor avaluo Selected -->
                <v-layout warning v-if="!equip" justify-center align-center>
                  <v-col>
                    <v-text-field
                      type="number"
                      v-model="infraestructura.valorAvaluo"
                      label="Indique avalúo"
                      :rules="inputRules"
                      required
                      min="0"
                    ></v-text-field>
                  </v-col>
                  
                </v-layout>
              </v-layout>
            </v-row>
          </v-card>
        </v-container>
      </v-layout>
      <v-row align-end justify-end>
        <!-- Boton volver-->
        <v-layout pt-4>
          <v-btn @click="goTo('InstanciasCaracter')" color="success" class="mr-4">Volver</v-btn>
        </v-layout>

        <!-- Boton siguiente-->
        <v-layout pt-4 flex-row-reverse>
          <v-btn :disabled="valid" @click="goTo('FlujosPresupuestarios')" color="success" class="mr-4">Siguiente</v-btn>
        </v-layout>
      </v-row>
    </v-form>
  </v-container>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Infraestructura",
  data() {
    return {
      // Validacion
      inputRules: [v => v > 0 || "Requerido"],
      valid: false,
      lab: true,
      equip: true,
    };
  },
  computed: {
    ...mapState(["infraestructura"])
  },
  methods: {
    ...mapMutations(["goTo"])
  }
};
</script>
