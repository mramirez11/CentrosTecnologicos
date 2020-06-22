<template>
  <v-form class="pa-6" ref="form" v-model="valid" lazy-validation>
    <!-- Titulo -->
    <div class="text-center colorBlue ma-5">
      <v-text class="font-weight text-h5">Datos generales del Centro Tecnológico</v-text>
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

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>

    <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

    <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
  </v-form>
</template>
<script>
export default {
  data() {
    return {
      //datePicker: null,
      modal: false,
      fechaCreacion: new Date().toISOString().substr(0, 10),
      menu: false
    };
  }
};
</script>