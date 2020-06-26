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
import DatosGenerales from "./components/DatosGenerales/DatosGenerales";
import NavBar from "./components/NavBar";


export default {
  name: "App",

  components: {
    NavBar,
    DatosGenerales,
  },

  data: () => ({})
};
</script>

