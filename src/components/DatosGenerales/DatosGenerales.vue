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
          <v-layout v-for="(direccion, index) in direccionesState" :key="index">
            <v-container pb-0 pt-0>
              <v-card color="#F2F2F2" class="mt-6 pl-8 pr-8">
                <v-layout justify-end>
                  <v-layout>
                    <!-- Titulo -->
                    <v-layout justify-center>
                      <h3>Direccion {{direccion.tipoDireccion}}</h3>
                    </v-layout>
                    <!-- Boton Eliminar miembro-->
                    <v-btn @click="deleteDireccion(index)" icon color="red">
                      <v-icon>delete</v-icon>
                    </v-btn>
                  </v-layout>
                </v-layout>
                <v-row>
                  <!--  Tipo Select-->
                  <v-col>
                    <v-select
                      v-model="direccion.tipoDireccion"
                      :items="tipo"
                      label="Tipo Dirección"
                      :rules="inputRules"
                    ></v-select>
                  </v-col>
                  <!-- Direccion TextField -->
                  <v-col>
                    <v-text-field
                      v-model="direccion.direccion"
                      label="Direccion"
                      :rules="inputRules"
                    ></v-text-field>
                  </v-col>
                  <!--  Region Select-->
                  <v-col>
                    <v-select
                      v-model="direccion.region"
                      label="Region"
                      :items="regiones"
                      item-text="region"
                      item-value="region_number"
                      :rules="inputRules"
                    ></v-select>
                  </v-col>

                  <!-- Ciudad TextField-->
                  <v-col>
                    <v-text-field v-model="direccion.ciudad" label="Ciudad" :rules="inputRules"></v-text-field>
                  </v-col>
                </v-row>
              </v-card>
            </v-container>
          </v-layout>

          <!-- Boton agregar Direccion -->
          <v-layout class="pt-2 pr-3" flex-row-reverse>
            <v-btn @click="nuevaDireccion" x-small fab dark>
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </v-layout>

          <!-- Personal Component -->
          <v-layout v-for="(item, index) in personaState" :key="'P'+ index">
            <v-container>
              <v-card color="#F2F2F2" class="mt-6 pl-8 pr-8">
                <v-layout justify-end>
                  <v-layout>
                    <!-- Titulo -->
                    <v-layout justify-center class="mt-2">
                      <h1 class="text-h6">{{item.rol}}</h1>
                    </v-layout>
                    <!-- Boton Eliminar EBT -->
                    <v-btn icon color="red" @click="deleteParticipante(index)">
                      <v-icon>delete</v-icon>
                    </v-btn>
                  </v-layout>
                </v-layout>
                <v-row>
                  <v-col>
                    <v-layout>
                      <!-- Rol  Selected-->
                      <v-col>
                        <v-select v-model="item.rol" label="Rol" :items="roles" :rules="inputRules"></v-select>
                      </v-col>
                      <!-- Nombre TextField -->
                      <v-col>
                        <v-text-field
                          v-model="item.nombre"
                          label="Nombre"
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

                      <!-- Género  Selected-->
                      <v-col>
                        <v-select v-model="item.genero" label="Género" :items="genero"></v-select>
                      </v-col>
                    </v-layout>
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

          <!-- Boton siguiente-->
          <v-layout pt-4 flex-row-reverse>
            <v-btn
              :disabled="valid"
              @click="goTo('PyGEstrategica')"
              color="success"
              class="mr-4"
            >Siguiente</v-btn>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Contacto from "@/components/DatosGenerales/Contacto";
// Para importar json desde archivo local
import regionesJSON from "@/assets/json/regiones.json";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    Contacto
  },
  name: "DatosGenerales",
  data() {
    return {
      // Para validar campos del Formulario
      inputRules: [
        v => v.length <= 50 || "Requerido",
        v => v.length > 0 || "Requerido"
      ],
      valid: false, // Para activar/desactivar boton

      // Datos del formulario
      nombre: "",
      dependencia: "",
      // DatePicker
      modal: false,
      fechaCreacion: new Date().toISOString().substr(0, 10),
      menu: false,
      // Direccion
      tipo: ["Principal", "Sede"],
      regiones: regionesJSON,
      genero: ["Masculino", "Femenino"],
      roles: ["Director", "Gerente"]
    };
  },
  computed: {
    // DatosGenerales para llamar al namespaced, direccionesState y personaState es para los datos
    ...mapState("DatosGenerales", ["direccionesState", "personaState"])
  },
  methods: {
    // Direcciones para el namespaced y traer sus respectivas mutationes
    ...mapMutations("DatosGenerales", [
      "nuevaDireccion",
      "deleteDireccion",
      "nuevoParticipante",
      "deleteParticipante"
    ]),
    // Para traer goTo directo desde index.js
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