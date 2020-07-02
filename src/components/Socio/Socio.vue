<template>
  <v-container>
    <v-form class="pl-6 pr-6" ref="form" v-model="valid">
      <!-- Titulo -->
      <v-layout justify-center class="pb-5 pt-3 blue--text">
        <h5 class="font-weight text-h5">Socios Estratégicos</h5>
      </v-layout>

      <!-- Panel de Socio -->
      <v-layout v-for="(item, index) in socioState" :key="index">
        <v-container pb-0 pt-0>
          <v-card color="#F2F2F2" class="mt-6 pl-8 pr-8">
            <v-layout justify-end>
              <v-layout>
                <!-- Titulo -->
                <v-layout justify-center class="pt-2">
                  <h3></h3>
                </v-layout>
                <!-- Boton Eliminar Socio-->
                <v-btn icon color="red" @click="deleteSocio(index)">
                  <v-icon>delete</v-icon>
                </v-btn>
              </v-layout>
            </v-layout>
            <!-- Panel -->
            <v-row>
              <!-- Nombre TextField -->
              <v-col>
                <v-text-field v-model="item.nombre" label="Nombre" :rules="inputRules" required></v-text-field>
              </v-col>
              <!-- Rut TextField -->
              <v-col>
                <v-text-field
                  v-model="item.rut"
                  label="Rut(Sin puntos, solo guión)"
                  :rules="[ validaRut ]"
                  required
                  min="0"
                ></v-text-field>
              </v-col>
              <!-- Genero Selected-->
              <v-col>
                <v-select v-model="item.genero" label="Género" :items="generos"></v-select>
              </v-col>
              <!-- Tipo de Vinculacion Selected-->
              <v-col>
                <v-select
                  v-model="item.rol"
                  label="Tipo de Vinculacion"
                  :items="roles"
                  :rules="inputRules"
                ></v-select>
              </v-col>
            </v-row>

            <v-row>
              <!-- Institucion Select -->
              <v-col>
                <v-select
                  v-model="item.institucion"
                  label="Instituciones"
                  :items="instituciones"
                  :rules="inputRules"
                  required
                ></v-select>
              </v-col>
              <!-- Sector TextField -->
              <v-col>
                <v-select
                  v-model="item.sector"
                  label="Sector"
                  :items="sectores"
                  :rules="inputRules"
                  required
                ></v-select>
              </v-col>

              <!-- Tipo de colaboración TextField -->
              <v-col>
                <v-select
                  v-model="item.colaboracion"
                  label="Tipo de colaboración"
                  :items="colaboraciones"
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
                  min="0"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row></v-row>
          </v-card>
        </v-container>
      </v-layout>
      <!-- Boton agregar socio -->
      <v-layout class="pt-2 pr-3" flex-row-reverse>
        <v-btn @click="nuevoSocio" x-small fab dark>
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-layout>
      <v-row align-end justify-end>
        <!-- Boton volver-->
        <v-layout pt-4>
          <v-btn @click="goTo('Vinculo')" color="success" class="mr-4">Volver</v-btn>
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
      roles: ["Utalca", "Nacional", "Internacional"],
      instituciones: ["Facultad", "Centro Tecnológico", "Unidad Académica"],
      sectores: ["A definir"],
      colaboraciones: [
        "Proyecto I+D",
        "Levantamiento y difusión de información",
        "Actividades de transferencia tecnológica e innovación",
        "Actividades de docencia",
        "Publicaciones",
        "Otros"
      ],
      generos: ["Masculino", "Femenino"],
      inputRules: [v => v.length > 0 || "Requerido"],
      inputAño: [v => v.length == 4 || "Ingresa un año válido"],
      valid: false
    };
  },
  computed: {
    ...mapState("Socio", ["socioState"])
  },
  methods: {
    ...mapMutations("Socio", ["nuevoSocio", "deleteSocio"]),
    ...mapMutations(["goTo"]),
    //Para validar rut
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut: function(rutCompleto) {
      rutCompleto = rutCompleto.replace("‐", "-");
      if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) return false;
      var tmp = rutCompleto.split("-");
      var digv = tmp[1];
      var rut = tmp[0];
      if (digv == "K") digv = "k";
      return this.dv(rut) == digv;
    },
    dv: function(T) {
      var M = 0,
        S = 1;
      for (; T; T = Math.floor(T / 10))
        S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
      return S ? S - 1 : "k";
    }
  }
};
</script>
