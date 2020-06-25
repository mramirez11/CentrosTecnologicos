<template>
  <div>
    <DatosGenerales /> 

    <!-- <PyGEstrategica /> -->

    <!-- <EquipoHumano /> -->
  </div>
</template>

<script>
import DatosGenerales from "@/components/DatosGenerales/DatosGenerales.vue";
import PyGEstrategica from "../components/PygEstrategica/PygEstrategica.vue";
import EquipoHumano from "../components/EquipoHumano/EquipoHumano.vue";

export default {
  components: {
    DatosGenerales,
    PyGEstrategica,
    EquipoHumano
  }
};
</script>
