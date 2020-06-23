<template>
  <v-form class="pl-6 pr-6" ref="form" v-model="valid" lazy-validation>
    <!-- Titulo -->
    <div class="text-center colorBlue ma-5">
      <h5 class="font-weight text-h5">Datos generales del Centro Tecnológico</h5>
    </div>

    <!-- Formulario Row 1 -->

    <v-card color="#F2F2F2" class="pa-4">
      <v-row>
        <!--  Nombre TextField-->
        <v-col>
          <v-text-field v-model="nombre" label="Nombre Centro Tecnológico" required></v-text-field>
        </v-col>
        <!-- Fecha de Creacion DatePicker -->
        <v-col>
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="fechaCreacion"
                label="Fecha de Creación"
                readonly
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

    <v-card color="#F2F2F2" class="pa-4 mt-6">
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
    <v-card color="#F2F2F2" class="pa-4 mt-6">
      <v-row>
        <!--  Tipo Select-->
        <v-col class="d-flex">
          <v-select :items="tipo " label="Tipo Dirección" solo></v-select>
        </v-col>
        <!-- Direccion TextField -->
        <v-col>
          <v-text-field v-model="direccion" label="Direccion" required></v-text-field>
        </v-col>
        <!--  Region Select-->
        <v-col class="d-flex">
          <v-select
            label="Region"
            :items="regiones"
            item-text="region"
            item-value="region_number"
            solo
          ></v-select>
        </v-col>

        <!-- Ciudad TextField-->
         <v-col>
          <v-text-field v-model="ciudad" label="Ciudad" required></v-text-field>
        </v-col>
      </v-row>
    </v-card>
  </v-form>
</template>
<script>
// Para obtener json desde la red
import axios from "axios";
// Para importar json desde archivo local
import regionesJSON from "../assets/json/regiones.json";

export default {
  data() {
    return {
      valid: true,
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
    };
  }
};
</script>