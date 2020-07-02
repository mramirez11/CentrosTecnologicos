<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-form class="pl-6 pr-6" ref="form" v-model="valid">
          <!-- Titulo -->
          <v-layout justify-center class="pb-5 pt-3 blue--text">
            <h5 class="font-weight text-h5">Propósito y Gestión Estratégica</h5>
          </v-layout>

          <!-- Descripcion y Objetivos -->
          <v-container pb-0>
            <v-card color="#F2F2F2" class="pl-8 pr-8">
              <v-row>
                <!--  Descripcion TextArea-->
                <v-col>
                  <v-textarea
                    counter
                    label="Descripcion"
                    v-model="pygState.descripcion"
                    required
                  ></v-textarea>
                </v-col>
                <!--  Objetivos TextArea-->
                <v-col>
                  <v-textarea rows="4" label="Objetivos" v-model="pygState.objetivo" required></v-textarea>
                </v-col>
              </v-row>
            </v-card>
          </v-container>
          <!-- Lineas de Investigacion y Servicios Tecnológicos -->
          <v-container pb-0>
            <v-card color="#F2F2F2" class="pl-8 pr-8">
              <v-row>
                <!--  Lineas de Investigacion TextArea -->
                <v-col>
                  <v-textarea
                    rows="4"
                    label="Lineas de Investigacion"
                    v-model="pygState.lineasInvestigacion"
                    required
                  ></v-textarea>
                </v-col>
                <!--  Servicios Tecnológicos TextArea -->
                <v-col>
                  <v-textarea
                    rows="4"
                    label="Servicios Tecnológicos"
                    v-model="pygState.servicioTecnologico"
                    required
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-card>
          </v-container>
          <!-- Productos y Formacion de Capital Humano -->
          <v-container pb-0>
            <v-card color="#F2F2F2" class="pl-8 pr-8">
              <v-row>
                <!--  Productos TextArea -->
                <v-col>
                  <v-textarea rows="4" label="Productos" v-model="pygState.producto" required></v-textarea>
                </v-col>
                <!--  Formacion de Capital Humano TextArea -->
                <v-col>
                  <v-textarea
                    rows="4"
                    label="Formacion de Capital Humano"
                    v-model="pygState.formacion"
                    required
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-card>
          </v-container>

          <v-row>
            <!-- Boton volver-->
            <v-layout pt-4>
              <v-btn @click="goTo('DatosGenerales')" color="success" class="mr-4">Volver</v-btn>
            </v-layout>

            <!-- Boton siguiente-->
            <v-layout pt-4 flex-row-reverse>
              <v-btn
                :disabled="!valid"
                @click="goTo('EquipoHumano')"
                color="success"
                class="mr-4"
              >Siguiente</v-btn>
            </v-layout>
          </v-row>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "PyGEstrategica",
  data() {
    return {
      // Para validar
      valid: false,
    };
  },
  computed: {
    ...mapState("PyGEstrategica", ["pygState"])
  },
  methods: {
    ...mapMutations(["goTo"])
  }
};
</script>