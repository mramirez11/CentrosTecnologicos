<template>
  <v-container grid-list-mdfluid>
    <v-layout>
      <v-flex xs12>
        <v-form class="pl-6 pr-6" ref="form" v-model="valid">
          <!-- Titulo -->
          <v-layout justify-center class="pb-5 pt-3 blue--text">
            <h5 class="font-weight text-h5">Datos generales del Centro Tecnológico</h5>
          </v-layout>

          <!-- Formulario Row 1 -->

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

          <!-- Formulario Row 2 -->

          <v-card color="#F2F2F2" class="mt-6 pl-8 pr-8">
            <v-row>
              <!--  Correo Electronico TextField-->
              <v-col>
                <v-text-field
                  v-model="correoElectronico"
                  label="Correo Electronico"
                  :rules="emailRules"
                ></v-text-field>
              </v-col>
              <!-- Telefono TextField -->
              <v-col>
                <v-text-field v-model="telefono" label="Telefono"></v-text-field>
              </v-col>
              <!-- Pagina Web-->
              <v-col>
                <v-text-field v-model="paginaWeb" label="Pagina Web"></v-text-field>
              </v-col>
              <!-- Facebook-->
              <v-col>
                <v-text-field v-model="facebook" label="Facebook"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <!--  Instagram TextField-->
              <v-col>
                <v-text-field v-model="instagram" label="Instagram" required></v-text-field>
              </v-col>
              <!-- Twitter TextField -->
              <v-col>
                <v-text-field v-model="twitter" label="Twitter" required></v-text-field>
              </v-col>
              <!-- Youtube TextField-->
              <v-col>
                <v-text-field v-model="youtube" label="Youtube"></v-text-field>
              </v-col>
              <!-- Linkedin-->
              <v-col>
                <v-text-field v-model="linkedin" label="Linkedin"></v-text-field>
              </v-col>
            </v-row>
          </v-card>

          <!-- Formulario Row 3 -->
          <v-card color="#F2F2F2" class="mt-6 pl-8 pr-8">
            <v-row>
              <!--  Tipo Select-->
              <v-col>
                <v-select :items="tipo" label="Tipo Dirección"></v-select>
              </v-col>
              <!-- Direccion TextField -->
              <v-col>
                <v-text-field v-model="direccion" label="Direccion" :rules="inputDireccion"></v-text-field>
              </v-col>
              <!--  Region Select-->
              <v-col>
                <v-select
                  label="Region"
                  :items="regiones"
                  item-text="region"
                  item-value="region_number"
                ></v-select>
              </v-col>

              <!-- Ciudad TextField-->
              <v-col>
                <v-text-field v-model="ciudad" label="Ciudad" :rules="inputCiudad"></v-text-field>
              </v-col>
            </v-row>
          </v-card>

          <!-- Formulario Row 4 -->

          <!-- Gerente-->
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
            <v-btn :disabled="!valid" @click="submit" color="success" class="mr-4">Siguiente</v-btn>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
// Para importar json desde archivo local
import regionesJSON from "../assets/json/regiones.json";
import PanelEH from "../components/EquipoHumano/PanelEH";
export default {
  components: {
    PanelEH
  },
  //name: "Formulario",
  data() {
    return {
      // Para validar Formulario
      inputRules: [v => v.length >= 10 || "Minimo 10 caracteres"],
      emailRules: [
        v => !!v || "E-mail es requerido",
        v => /.+@.+\..+/.test(v) || "E-mail debe ser valido"
      ],
      inputDireccion: [v => v.length > 0 || "Ingresa una Direccion"],
      inputCiudad: [v => v.length > 0 || "Ingresa una ciudad"],
      valid: false, // Para activar/desactivar boton

      // Datos del formulario
      nombre: "",
      dependencia: "",
      correoElectronico: "",
      telefono: "",
      paginaWeb: "",
      facebook: "",
      instagram: "",
      twitter: "",
      youtube: "",
      linkedin: "",
      direccion: "",
      ciudad: "",
      modal: false,
      fechaCreacion: new Date().toISOString().substr(0, 10),
      menu: false,
      tipo: ["Principal", "Sede"],
      regiones: regionesJSON
    };
  },

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        console.log("Formulario validado");
      } else {
        console.log("Formulario no validao");
      }
    }
  }
};
</script>