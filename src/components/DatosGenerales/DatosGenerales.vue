<template>
  <v-container grid-list-mdfluid>
    <v-layout>
      <v-flex xs12>
        <v-form class="pl-6 pr-6" v-model="valid">
          <!-- Titulo -->
          <v-layout justify-center class="pb-5 pt-3 blue--text">
            <h5 class="font-weight text-h5">Datos generales del Centro Tecnológico</h5>
          </v-layout>

          <!-- Info CT Component -->
          <v-container pb-0>
            <v-card color="#F2F2F2" class="pl-8 pr-8">
              <v-row>
                <!--  Nombre TextField-->
                <v-col>
                  <v-text-field
                    v-model="nombre"
                    label="Nombre Centro Tecnológico"
                    :rules="inputRules"
                  ></v-text-field>
                </v-col>
                <!-- Fecha de Creacion DatePicker -->
                <v-col>
                  <v-row>
                    <v-menu
                      v-model="menu"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <!-- <v-btn v-bind="attrs" v-on="on" flat icon>
                        <v-icon class="pr-2 pt-8">calendar_today</v-icon>
                        </v-btn>-->
                        <v-text-field
                          v-model="fechaCreacion"
                          label="Fecha de Creación"
                          readonly
                          prepend-icon="calendar_today"
                          :rules="inputRules"
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        ref="picker"
                        v-model="fechaCreacion"
                        @input="menu = false"
                        :max="new Date().toISOString().substr(0, 10)"
                        min="1950-01-01"
                        locale="es"
                      ></v-date-picker>
                    </v-menu>
                  </v-row>
                </v-col>
                <!-- Dependencia TextField -->
                <v-col>
                  <v-text-field v-model="dependencia" label="Dependencia" :rules="inputRules"></v-text-field>
                </v-col>
                <!-- Subir Logo -->
                <v-col>
                  <v-file-input accept="image/*" chips show-size label="Subir Logo"></v-file-input>
                </v-col>
              </v-row>
            </v-card>
          </v-container>

          <!-- Contacto Component -->
          <Contacto />

          <!-- Direccion Component -->
          <Direccion />

          <!-- Director y Gerente Components -->
          <v-row>
            <v-col>
              <v-layout justify-center class="mt-2">
                <h1 class="text-h6">Director</h1>
              </v-layout>
              <v-layout>
                <PanelEH />
              </v-layout>
            </v-col>
            <v-col>
              <v-layout justify-center class="mt-2">
                <h1 class="text-h6">Gerente</h1>
              </v-layout>
              <PanelEH />
            </v-col>
          </v-row>
          <!-- Boton siguiente-->
          <v-layout pt-4 flex-row-reverse>
            <v-btn :disabled="valid" @click="goTo('PyGEstrategica')" color="success" class="mr-4">Siguiente</v-btn>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import PanelEH from "@/components/DatosGenerales/PanelEH";
import Direccion from "@/components/Direccion";
import Contacto from "@/components/DatosGenerales/Contacto";


import { mapState, mapMutations } from "vuex";

export default {
  components: {
    PanelEH,
    Direccion,
    Contacto
  },
  name: "DatosGenerales",
  data() {
    return {
      // Para validar Formulario
      inputRules: [v => v.length >= 10 || "Minimo 10 caracteres"],
      valid: false, // Para activar/desactivar boton

      // Datos del formulario
      nombre: "",
      dependencia: "",
      modal: false,
      fechaCreacion: new Date().toISOString().substr(0, 10),
      menu: false
    };
  },
  computed: {
  },
  methods: {
    ...mapMutations(["goTo"])
  }
};
</script>