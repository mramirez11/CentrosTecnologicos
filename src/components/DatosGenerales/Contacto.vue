<template>
  <v-container pb-0 pt-0 > 
    <v-card color="#F2F2F2" class="mt-6 pl-8 pr-8">
      <v-row>
        <!--  Correo Electronico TextField-->
        <v-col>
          <v-text-field v-model="correoElectronico" label="Correo Electronico" :rules="emailRules"></v-text-field>
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
  </v-container>
</template>
<script>
export default {
  name: "Contacto",
  data() {
    return {
      correoElectronico: "",
      telefono: "",
      paginaWeb: "",
      facebook: "",
      instagram: "",
      twitter: "",
      youtube: "",
      linkedin: "",
      // Validacion
      emailRules: [
        v => !!v || "Correo Electronico es requerido",
        v => /.+@.+\..+/.test(v) || "Correo Electronico debe ser valido"
      ]
    };
  }
};
</script>