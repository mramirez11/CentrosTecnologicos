<template>
  <v-container>
    <v-form class="pl-6 pr-6" ref="form" v-model="valid">
      <!-- Titulo -->
      <v-layout justify-center class="pb-5 pt-3 blue--text">
        <h5 class="font-weight text-h5">Proyectos de Investigación</h5>
      </v-layout>

      <!-- Panel de  -->
      <v-layout v-for="(item, index) in proyecto" :key="index">
        <v-container pb-0 pt-0>
          <v-card color="#F2F2F2" class="mt-6 pl-8 pr-8">
            <v-layout justify-end>
              <v-layout>
                <!-- Titulo -->
                <v-layout justify-center class="pt-2">
                  <h3>{{item.titulo}}</h3>
                </v-layout>
                <!-- Boton Eliminar miembro-->
                <v-btn icon color="red" @click="deleteProyecto(index)">
                  <v-icon>delete</v-icon>
                </v-btn>
              </v-layout>
            </v-layout>
            <!-- Panel -->
            <v-row>
              <!-- Titulo proyecto TextField -->
              <v-col>
                <v-text-field v-model="item.titulo" label="Titulo proyecto" :rules="inputRules" required></v-text-field>
              </v-col>
              <!--  Código Selected-->
              <v-col>
                <v-text-field v-model="item.codigo" label="Código" :rules="inputRules"></v-text-field>
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
              <!-- Año adjudicacion TextField -->
              <v-col>
                <v-text-field
                  v-model="item.anioAdjudicacion"
                  label="Año de adjudicación"
                  :rules="inputRules"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <!-- Categoria Selected-->
              <v-col>
                <v-select
                  v-model="item.categoria"
                  label="Categoria"
                  :items="categorias"
                  :rules="inputRules"
                ></v-select>
              </v-col>
              <!-- Empresa Selected-->
              <v-col>
                <v-select
                  v-model="item.empresa"
                  label="Empresa participante"
                  :items="empresa"
                  item-text="nombre"
                  item-value="rut"
                  :rules="inputRules"
                ></v-select>
              </v-col>
              <!-- Monto comprometido por Empresa TextField -->
              <v-col>
                <v-currency-field
                  v-model="item.montoEmpresa"
                  label="Monto comprometido por empresa"
                  :rules="inputRules"
                ></v-currency-field>
              </v-col>
              <!-- Año inicio TextField -->
              <v-col>
                <v-text-field
                  v-model="item.anio"
                  label="Año de inicio"
                  :rules="inputRules"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <!-- Fuente de Financiamiento TextField -->
              <v-col>
                <v-text-field
                  v-model="item.fuenteFinanciamiento"
                  label="Fuente de financiamiento"
                  :rules="inputRules"
                  required
                ></v-text-field>
              </v-col>
              <!--  Monto entregado por fuente de Financiamiento Selected-->
              <v-col>
                <v-currency-field
                  v-model="item.monto"
                  label="Monto entregado fuente de financiamiento (MM)"
                  :rules="inputRules"
                ></v-currency-field>
              </v-col>
              <!-- Fondo de financiamiento TextField -->
              <v-col>
                <v-text-field
                  v-model="item.fondoFinanciamiento"
                  label="Fondo de financiamiento"
                  :rules="inputRules"
                  required
                  min="0"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-layout>
      <!-- Boton agregar Direccion -->
      <v-layout class="pt-2 pr-3" flex-row-reverse>
        <v-btn @click="nuevoProyecto" x-small fab dark>
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-layout>
      <v-row align-end justify-end>
        <!-- Boton volver-->
        <v-layout pt-4>
          <v-btn @click="goTo('Contrato')" color="success" class="mr-4">Volver</v-btn>
        </v-layout>

        <!-- Boton siguiente-->
        <v-layout pt-4 flex-row-reverse>
          <v-btn :disabled="valid" @click="goTo('Participante')" color="success" class="mr-4">Siguiente</v-btn>
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
      categorias: ["Nacional", "Internacional", "Regional"],
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
    ...mapState(["proyecto", "empresa"])
  },
  methods: {
    ...mapMutations(["nuevoProyecto", "deleteProyecto", "goTo"])
  }
};
</script>
