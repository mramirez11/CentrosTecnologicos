<template>
  <div>
    <!-- <DatosGenerales /> -->
    <!-- KeepAlive guarda los datos en cache /> -->
    <!-- A través del atributo component, se maneja que componente se desplega en el formulario /> -->
    <keep-alive>
      <component v-bind:is="route"></component>
    </keep-alive>
  </div>
</template>

<script>
import DatosGenerales from "@/components/DatosGenerales/DatosGenerales.vue";
import PyGEstrategica from "../components/PygEstrategica/PygEstrategica.vue";
import EquipoHumano from "../components/EquipoHumano/EquipoHumano.vue";
import Instancias from "../components/Instancias/Instancias.vue";
import { mapState } from "vuex";
export default {
  components: {
    DatosGenerales,
    PyGEstrategica,
    EquipoHumano,
    Instancias
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["route"])
  }
};
</script>
