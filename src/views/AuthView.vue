<template>
  <v-container>
    <v-form>
      <v-container class="my-5">
        <v-row >          
         <v-col cols="12" sm="6" offset-sm="3" md="6" offset-md="3" >
            <Login></Login>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>

import Login from '@/components/Login.vue'
export default {
  components: { 

     Login },
  name: 'AuthView'
}
</script>

<style >

</style>