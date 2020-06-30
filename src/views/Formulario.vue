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
import InstanciasParticipacion from "../components/Instancias/InstanciasParticipacion.vue";
import InstanciasCaracter from "../components/Instancias/InstanciasCaracter.vue";
import Infraestructura from "../components/Infraestructura/Infraestructura.vue";
import FlujosPresupuestarios from "../components/Flujos/FlujosPresupuestarios.vue";
import Empresa from "../components/Empresa/Empresa.vue";
import Contrato from "../components/Contrato/Contrato.vue";

import { mapState } from "vuex";
export default {
  components: {
    DatosGenerales,
    PyGEstrategica,
    EquipoHumano,
    InstanciasParticipacion,
    InstanciasCaracter,
    Infraestructura,
    FlujosPresupuestarios,
    Empresa,
    Contrato,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["route"])
  }
};
</script>
