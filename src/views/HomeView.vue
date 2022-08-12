<template>

  <v-row>
    <v-col cols="12" class="mb-12">

      <top-bar ></top-bar>
    </v-col>

    <v-col   class="hidden-xs-only" cols="2" sm="2" md="2" lg="2">
      <side-bar></side-bar>
    </v-col>

    <v-col cols="8" sm="8" md="8" lg="8">
      <router-view />
    </v-col>

    <v-col cols="2"  class="hidden-xs-only" >
      <Aside></Aside>
    </v-col>

  </v-row>





</template>

<script>
import SideBar from "../components/SideBar.vue";

import TopBar from "../components/TopBar.vue"
import Aside from "@/components/Aside.vue";



export default {
  name: 'HomePage',
  data() {
    return {
      mostrar: true
    }
  },

  components: {
    SideBar,
    TopBar,
    Aside
  },
  mounted() {

  }
}
</script>

