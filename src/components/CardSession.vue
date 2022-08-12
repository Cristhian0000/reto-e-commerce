<template>
  <v-menu
        bottom
        min-width="200px"
        rounded
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            x-large
            v-on="on"
          >
            <v-avatar
              size="36"
            >
              <v-img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      ></v-img>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              
            <v-avatar
              size="36"
            >
              <v-img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      ></v-img>
            </v-avatar>
              <h3> {{auth.username}} </h3>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
                color="lime"
              >
                Edit Account
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
                color="lime"
                @click="Disconnect()"
              >
                Disconnect
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
</template>

<script>
import { mapGetters } from 'vuex';
import VueCookies from 'vue-cookies'
export default {
name:'CardSessionComponent',
computed:{
    ...mapGetters('auth',['auth'])
},
methods:{
  Disconnect(){
    const token=VueCookies.isKey('token_ecommerce')
    if(token){
      
      VueCookies.remove('token_ecommerce')
    this.$router.push({name:'auth'})

    }
  }
}
}
</script>

<style>

</style>