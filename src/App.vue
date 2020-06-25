<template>
  <v-app>
    <v-card class="mx-auto" color="black" max-width="344">
      <NavBar />
    </v-card>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Formulario from "./components/Formulario";
import PanelEH from "./components/EquipoHumano/PanelEH";
import NavBar from "./components/NavBar";
import Direccion from "./components/Direccion"
//import Contacto from "./components/Contacto"

export default {
  name: "App",

  components: {
    NavBar,
    Formulario,
    PanelEH,
    Direccion,
  //  Contacto,
  },

  data: () => ({
  })
};
</script>

