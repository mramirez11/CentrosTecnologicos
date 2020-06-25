<template>
  <v-navigation-drawer class="deep-purple accent-4" width="240" dark app>
    <v-list dense>
      <!-- Logo Utalca-->
      <v-list-item>
        <v-layout column align-center>
          <img
            height="150px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Utalca.svg/1200px-Utalca.svg.png"
          />
        </v-layout>
      </v-list-item>

      <!-- Elemento divisor-->
      <v-divider class="pa-1"></v-divider>

      <!-- Imagen de Perfil-->

      <v-layout class="pa-6">
        <v-list-item-avatar height="60px" width="60px">
          <img src="https://randomuser.me/api/portraits/women/81.jpg" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Jane Smith</v-list-item-title>
          <v-list-item-subtitle>Logged In</v-list-item-subtitle>
        </v-list-item-content>
      </v-layout>

      <!-- Elemento divisor-->
      <v-divider class="pa-4"></v-divider>

      <!-- Elementos del navbar-->
      <v-list-item link>
        <v-list-item-action>
          <v-icon color="white" x-small>mdi-radiobox-blank</v-icon>
        </v-list-item-action>
        <v-list-item-content class="colorWhite">
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link>
        <v-list-item-action>
          <v-icon color="white" x-small>mdi-radiobox-blank</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Ingreso Informe CT</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>


<script>
export default {
  data() {
    return {};
  }
};
</script>


