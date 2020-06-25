<template>
  <div>
    <!-- <DatosGenerales /> -->

    <PyGEstrategica />
  </div>
</template>

<script>
import DatosGenerales from "@/components/DatosGenerales/DatosGenerales.vue";
import PyGEstrategica from "../components/PygEstrategica/PygEstrategica.vue";

export default {
  components: {
    DatosGenerales,
    PyGEstrategica
  }
};
</script>
