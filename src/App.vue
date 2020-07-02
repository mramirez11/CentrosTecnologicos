<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
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
    DatosGenerales
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  },

  data: () => ({})
};
</script>

