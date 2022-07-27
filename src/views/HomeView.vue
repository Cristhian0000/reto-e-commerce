<template>

  <v-row>
    <v-col cols="12">
      <TopBar></TopBar>
    </v-col>
    <v-col cols="2" sm="2" md="2" lg="2">
      <side-bar></side-bar>
    </v-col>
    <v-col cols="10" sm="10" md="10" lg="10">
      <router-view/>
    </v-col>
  </v-row>





</template>

<script>
import SideBar from "../components/SideBar.vue";

import TopBar from "../components/TopBar.vue"



export default {
  name: 'HomePage',
  data() {
    return {
      mostrar:true
    }
  },

  components: {
    SideBar,
    TopBar,

  },
  mounted() {

  }
}
</script>

