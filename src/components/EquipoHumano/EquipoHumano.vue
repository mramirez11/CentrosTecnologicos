<template>
  <v-container>
    <v-form class="pl-6 pr-6" ref="form" >
      <PanelEH />
      <v-row>
        <!-- Boton volver-->
        <v-layout pt-4>
          <v-btn color="success" class="mr-4">Volver</v-btn>
        </v-layout>

        <!-- Boton siguiente-->
        <v-layout pt-4 flex-row-reverse>
          <v-btn  color="success" class="mr-4">Siguiente</v-btn>
        </v-layout>
      </v-row>
    </v-form>
  </v-container>
</template>
<script>
import PanelEH from "@/components/EquipoHumano/PanelEH";
export default {
  data() {
    return {};
  },
  components: {
    PanelEH
  }
};
</script>