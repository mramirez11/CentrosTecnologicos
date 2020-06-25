<template>
  <v-container grid-list-mdfluid>
    <v-layout>
      <v-flex xs12>
        <v-form class="pl-6 pr-6" ref="form" v-model="valid" lazy-validation>
          <!-- Titulo -->
          <v-layout justify-center class="pb-5 pt-3 blue--text">
            <h5 class="font-weight text-h5">Datos generales del Centro Tecnológico</h5>
          </v-layout>

          <!-- Formulario Row 1 -->

          <v-card color="#F2F2F2" class="pl-8 pr-8">
            <v-row>
              <!--  Nombre TextField-->
              <v-col>
                <v-text-field v-model="nombre" label="Nombre Centro Tecnológico" required></v-text-field>
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
                <v-text-field v-model="dependencia" label="Dependencia" required></v-text-field>
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
                <v-text-field v-model="correoElectronico" label="Correo Electronico" required></v-text-field>
              </v-col>
              <!-- Telefono TextField -->
              <v-col>
                <v-text-field v-model="telefono" label="Telefono" required></v-text-field>
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
                <v-select :items="tipo " label="Tipo Dirección"></v-select>
              </v-col>
              <!-- Direccion TextField -->
              <v-col>
                <v-text-field v-model="direccion" label="Direccion" required></v-text-field>
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
                <v-text-field v-model="ciudad" label="Ciudad" required></v-text-field>
              </v-col>
            </v-row>
          </v-card>

          <!-- Formulario Row 4 -->
          <v-card color="#F2F2F2" class="mt-6 pl-8 pr-8">
            <!-- Director -->
            <v-row>
              <!-- Nombre Director TextField -->
              <v-col>
                <v-text-field v-model="nombreDirector" label="Nombre Director" required></v-text-field>
              </v-col>

              <!-- Rut Director TextField -->
              <v-col>
                <v-text-field v-model="rutDirector" label="Rut Director" required></v-text-field>
              </v-col>

              <!-- Género Director Selected-->
              <v-col>
                <v-select v-model="generoDirector" label="Género Director" :items="genero"></v-select>
              </v-col>
            </v-row>

            <!-- Gerente-->
            <v-row>
              <!-- Nombre Gerente TextField -->
              <v-col>
                <v-text-field v-model="nombreGerente" label="Nombre Gerente" required></v-text-field>
              </v-col>

              <!-- Rut Gerente TextField -->
              <v-col>
                <v-text-field v-model="rutGerente" label="Rut Gerente" required></v-text-field>
              </v-col>

              <!-- Género Gerente Selected-->
              <v-col class="d-flex">
                <v-select v-model="generoGerente" label="Género Gerente" :items="genero"></v-select>
              </v-col>
            </v-row>
          </v-card>

          <!-- Boton siguiente-->
          <v-layout pt-4 flex-row-reverse>
            <v-btn :disabled="validate" color="success" class="mr-4">Siguiente</v-btn>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
// Para importar json desde archivo local
import regionesJSON from "../assets/json/regiones.json";

export default {
  //name: "Formulario",
  data() {
    return {
      validate: false,
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
      regiones: regionesJSON,
      genero: ["Masculino", "Femenino"],
      nombreDirector: "",
      rutDirector: "",
      generoDirector: "",
      nombreGerente: "",
      rutGerente: "",
      generoGerente: ""
    };
  }
};
</script>