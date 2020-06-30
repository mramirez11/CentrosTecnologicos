<template>
  <v-container>
    <v-form class="pl-6 pr-6" ref="form" v-model="valid">
      <!-- Titulo -->
      <v-layout justify-center class="pb-5 pt-3 blue--text">
        <h5 class="font-weight text-h5">Instancias de Participación Estratégica</h5>
      </v-layout>

      <!-- Panel de Instancias -->
      <v-layout v-for="(item, index) in instanciasParticipacion" :key="index">
        <v-container pb-0 pt-0>
          <v-card color="#F2F2F2" class="mt-6 pl-8 pr-8">
            <v-layout justify-end>
              <v-layout>
                <!-- Titulo -->
                <v-layout justify-center class="pt-2">
                  <h3>Comité Asesor</h3>
                </v-layout>
                <!-- Boton Eliminar miembro-->
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
                  type="number"
                  v-model="item.rut"
                  label="Rut(Sin puntos ni guión)"
                  :rules="inputRut"
                  min=0
                  required
                ></v-text-field>
              </v-col>
              <!--  Género Selected-->
              <v-col>
                <v-select
                  v-model="item.generoSeleccionado"
                  label="Género"
                  :items="genero"
                ></v-select>
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
      <!-- Boton agregar Direccion -->
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
          <v-btn :disabled="valid" @click="goTo('InstanciasCaracter')" color="success" class="mr-4">Siguiente</v-btn>
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
      inputRut: [
        v => v.length > 7 || "Ingresa un rut válido",
        v => v.length < 10 || "Ingresa un rut válido"
      ],
      valid: false
    };
  },
  computed: {
    ...mapState(["instanciasParticipacion"])
  },
  methods: {
    ...mapMutations([
      "nuevaInstanciaParticipacion",
      "deleteInstanciaParticipacion",
      "goTo"
    ])
  }
};
</script>