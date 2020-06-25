<template>
  <v-container pb-0 pt-0 >
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
          <v-select label="Region" :items="regiones" item-text="region" item-value="region_number"></v-select>
        </v-col>

        <!-- Ciudad TextField-->
        <v-col>
          <v-text-field v-model="ciudad" label="Ciudad" :rules="inputCiudad"></v-text-field>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
// Para importar json desde archivo local
import regionesJSON from "../assets/json/regiones.json";

export default {
data() {
    return {
      direccion: "",
      ciudad: "",
      tipo: ["Principal", "Sede"],
      regiones: regionesJSON,

      // Validacion
      inputDireccion: [v => v.length > 0 || "Ingresa una Direccion"],
      inputCiudad: [v => v.length > 0 || "Ingresa una ciudad"]
    };
  }
};
</script>