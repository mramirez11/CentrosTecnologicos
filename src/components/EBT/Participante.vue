<template>
  <v-container>
    <v-form class="pl-6 pr-6" ref="form" v-model="valid">
      <!-- Titulo -->
      <v-layout justify-center class="pb-5 pt-3 blue--text">
        <h5 class="font-weight text-h5">Participantes en EBT</h5>
      </v-layout>

      <!-- Panel de Participantes en EBT -->
      <!-- En bd se trabaja como persona, en el Front es participante -->
      <v-layout v-for="(item, index) in persona" :key="index">
        <v-container pb-0 pt-0>
          <v-card color="#F2F2F2" class="mt-6 pl-8 pr-8">
            <v-layout justify-end>
              <v-layout>
                <!-- Titulo EBT -->
                <v-layout justify-center class="pt-2">
                  <h3>EBT {{item.codigoProyecto}}</h3>
                </v-layout>
                <!-- Boton Eliminar Participante -->
                <v-btn icon color="red" @click="deleteParticipante(index)">
                  <v-icon>delete</v-icon>
                </v-btn>
              </v-layout>
            </v-layout>
            <!-- Panel Participante-->
            <v-row>
              <!--  Código Selected-->
              <v-col>
                <v-select
                  v-model="item.codigoProyecto"
                  label="Código Proyecto"
                  :items="ebt"
                  item-text="codigo"
                  item-value="codigo"
                  :rules="inputRules"
                ></v-select>
              </v-col>
              <!-- Nombre TextField -->
              <v-col>
                <v-text-field v-model="item.nombre" label="Nombre" :rules="inputRules" required></v-text-field>
              </v-col>
              <!-- Rut TextField -->
              <v-col>
                <v-text-field
                  type="number"
                  v-model="item.rut"
                  label="Rut(Sin puntos ni guión)"
                  :rules="inputRut"
                  required
                  min="0"
                ></v-text-field>
              </v-col>
              <!-- Genero Selected-->
              <v-col>
                <v-select v-model="item.genero" label="Género" :items="generos" ></v-select>
              </v-col>
              <!-- Tipo de Participación Selected-->
              <v-col>
                <v-select
                  v-model="item.rol"
                  label="Tipo de participación"
                  :items="roles"
                  :rules="inputRules"
                ></v-select>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-layout>
      <!-- Boton agregar Participante -->
      <v-layout class="pt-2 pr-3" flex-row-reverse>
        <v-btn @click="nuevoParticipante" x-small fab dark>
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-layout>
      <v-row align-end justify-end>
        <!-- Boton volver-->
        <v-layout pt-4>
          <v-btn @click="goTo('EBT')" color="success" class="mr-4">Volver</v-btn>
        </v-layout>

        <!-- Boton siguiente-->
        <v-layout pt-4 flex-row-reverse>
          <v-btn :disabled="valid" @click="goTo('')" color="success" class="mr-4">Siguiente</v-btn>
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
      generos: ["Masculino", "Femenino"],
      roles: ["Director", "Codirector", "Investigador", "Patrocinador"],
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
    ...mapState(["persona", "ebt"])
  },
  methods: {
    ...mapMutations(["nuevoParticipante", "deleteParticipante", "goTo"])
  }
};
</script>
