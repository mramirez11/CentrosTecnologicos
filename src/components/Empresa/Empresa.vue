<template>
  <v-container>
    <v-form class="pl-6 pr-6" ref="form" v-model="valid">
      <!-- Titulo -->
      <v-layout justify-center class="pb-5 pt-3 blue--text">
        <h5 class="font-weight text-h5">Detalle Empresa</h5>
      </v-layout>

      <!-- Panel de Empresa -->
      <v-layout v-for="(item, index) in empresaState" :key="index">
        <v-container pb-0 pt-0>
          <v-card color="#F2F2F2" class="mt-6 pl-8 pr-8">
            <v-layout justify-end>
              <v-layout>
                <!-- Titulo -->
                <v-layout justify-center class="pt-2">
                  <h3>{{item.nombre}}</h3>
                </v-layout>
                <!-- Boton Eliminar Empresa-->
                <v-btn icon color="red" @click="deleteEmpresa(index)">
                  <v-icon>delete</v-icon>
                </v-btn>
              </v-layout>
            </v-layout>
            <!-- Panel -->
            <v-row>
              <!-- Razon Social TextField -->
              <v-col>
                <v-text-field
                  v-model="item.nombre"
                  label="Razon Social"
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
              <!-- Representante TextField -->
              <v-col>
                <v-text-field
                  type="text"
                  v-model="item.representante"
                  label="Representante legal"
                  :rules="inputRules"
                  required
                ></v-text-field>
              </v-col>
              <!-- Correo TextField -->
              <v-col>
                <v-text-field
                  type="text"
                  v-model="item.correo"
                  label="Correo Empresa"
                  :rules="emailRules"
                  required
                ></v-text-field>
              </v-col>
              <!-- Telefono TextField -->
              <v-col>
                <v-text-field
                  v-model="item.telefono"
                  label="Telefono Empresa"
                  :rules="inputRules"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <!-- Tamaño TextField -->
              <v-col>
                <v-text-field
                  v-model="item.tamanio"
                  label="Tamaño Empresa"
                  :rules="inputRules"
                  required
                ></v-text-field>
              </v-col>

              <!--  Region Select-->
              <v-col>
                <v-select
                  v-model="item.region"
                  label="Region"
                  :items="regiones"
                  item-text="region"
                  item-value="region_number"
                  :rules="inputRules"
                ></v-select>
              </v-col>
              <!-- Ciudad TextField -->
              <v-col>
                <v-text-field v-model="item.ciudad" label="Ciudad" :rules="inputRules" required></v-text-field>
              </v-col>
              <!-- Direccion TextField -->
              <v-col>
                <v-text-field
                  v-model="item.direccion"
                  label="Dirección empresa"
                  :rules="inputRules"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-layout>
      <!-- Boton agregar Empresa -->
      <v-layout class="pt-2 pr-3" flex-row-reverse>
        <v-btn @click="nuevaEmpresa" x-small fab dark>
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-layout>
      <v-row align-end justify-end>
        <!-- Boton volver-->
        <v-layout pt-4>
          <v-btn @click="goTo('FlujosPresupuestarios')" color="success" class="mr-4">Volver</v-btn>
        </v-layout>

        <!-- Boton siguiente-->
        <v-layout pt-4 flex-row-reverse>
          <v-btn :disabled="valid" @click="goTo('Contrato')" color="success" class="mr-4">Siguiente</v-btn>
        </v-layout>
      </v-row>
    </v-form>
  </v-container>
</template>
<script>
import { mapState, mapMutations } from "vuex";
// Importar regiones
import regionesJSON from "@/assets/json/regiones.json";
export default {
  data() {
    return {
      regiones: regionesJSON,
      // Validacion
      inputRules: [v => v.length > 0 || "Requerido"],
      valid: false,
      emailRules: [
        v => !!v || "Correo Electronico es requerido",
        v => /.+@.+\..+/.test(v) || "Correo Electronico debe ser valido"
      ]
    };
  },
  computed: {
    ...mapState("Empresa", ["empresaState"])
  },
  methods: {
    ...mapMutations("Empresa", ["nuevaEmpresa", "deleteEmpresa"]),
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
