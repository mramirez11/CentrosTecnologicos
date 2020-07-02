<template>
  <v-container>
    <v-form class="pl-6 pr-6" ref="form" v-model="valid">
      <!-- Titulo -->
      <v-layout justify-center class="pb-5 pt-3 blue--text">
        <h5 class="font-weight text-h5">Instancias de Participación Estratégica</h5>
      </v-layout>

      <!-- Panel de Instancias -->
      <v-layout v-for="(item, index) in participacionState" :key="index">
        <v-container pb-0 pt-0>
          <v-card color="#F2F2F2" class="mt-6 pl-8 pr-8">
            <v-layout justify-end>
              <v-layout>
                <!-- Titulo -->
                <v-layout justify-center class="pt-2">
                  <h3>Comité Asesor</h3>
                </v-layout>
                <!-- Boton Eliminar instancia-->
                <v-btn icon color="red" @click="deleteInstanciaParticipacion(index)">
                  <v-icon>delete</v-icon>
                </v-btn>
              </v-layout>
            </v-layout>
            <!-- Panel -->
            <v-row>
              <!-- Nombre TextField -->
              <v-col>
                <v-text-field
                  v-model="item.nombre"
                  label="Nombre Participante"
                  :rules="inputRules"
                  required
                ></v-text-field>
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
              <!--  Género Selected-->
              <v-col>
                <v-select v-model="item.generoSeleccionado" label="Género" :items="genero"></v-select>
              </v-col>
              <!-- Cargo Selected-->
              <v-col>
                <v-select
                  v-model="item.cargoSeleccionado"
                  label="Cargo"
                  :items="cargos"
                  :rules="inputRules"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <!-- Nombre EntidadTextField -->
              <v-col>
                <v-text-field
                  v-model="item.nombreEntidad"
                  label="Nombre Entidad"
                  :rules="inputRules"
                  required
                ></v-text-field>
              </v-col>
              <!-- Tipo Entidad Selected-->
              <v-col>
                <v-select
                  v-model="item.entidad"
                  label="Tipo Entidad"
                  :items="tiposEntidad"
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
      <!-- Boton agregar participacion -->
      <v-layout class="pt-2 pr-3" flex-row-reverse>
        <v-btn @click="nuevaInstanciaParticipacion" x-small fab dark>
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-layout>
      <v-row align-end justify-end>
        <!-- Boton volver-->
        <v-layout pt-4>
          <v-btn @click="goTo('EquipoHumano')" color="success" class="mr-4">Volver</v-btn>
        </v-layout>

        <!-- Boton siguiente-->
        <v-layout pt-4 flex-row-reverse>
          <v-btn
            :disabled="valid"
            @click="goTo('InstanciasCaracter')"
            color="success"
            class="mr-4"
          >Siguiente</v-btn>
        </v-layout>
      </v-row>
    </v-form>
  </v-container>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Instancias",
  data() {
    return {
      genero: ["Masculino", "Femenino"],
      cargos: ["Directorio", "Consejo asesor"],
      tiposEntidad: ["Pública", "Privada", "Gremial", "Otra"],
      tipos: ["Nacional", "Regional"],
      // Validacion
      inputRules: [v => v.length > 0 || "Requerido"],

      valid: false
    };
  },
  computed: {
    ...mapState("Instancias", ["participacionState"])
  },
  methods: {
    ...mapMutations("Instancias", [
      "nuevaInstanciaParticipacion",
      "deleteInstanciaParticipacion"
    ]),
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