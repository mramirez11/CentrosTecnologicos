<template>
  <v-app>
    <v-card class="mx-auto" color="black" max-width="344">
      <NavBar />
    </v-card>

    <!-- 
    <v-content>
      <HelloWorld />
    </v-content>
    -->
    <v-main>
      <Formulario />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Formulario from "./components/Formulario";
import NavBar from "./components/NavBar";

export default {
  name: "App",

  components: {
    HelloWorld,
    Formulario,
    NavBar
  },

  data: () => ({
    //
  })
};
</script>

