<template>


  
<v-app-bar fixed color="#AAD500" dense class="mb-5">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title class="hidden-xs-only">Check our products</v-toolbar-title>
    <v-autocomplete dense id="search" :items="items" class="mx-5" prepend-inner-icon="mdi-magnify"
      :search-input.sync="search" clearable hide-details hide-selected item-text="title" item-value="id"
      label="Search for a Product..." solo>
      <template v-slot:item="{ item }">
        <v-avatar size="50" rounded>
          <v-img @click="productDetail(item.id)" width="mx-auto" spect-ratio="1.7" :src="item.image" contain></v-img>
        </v-avatar>
        <v-list-item-content @click="productDetail(item.id)">
          <v-list-item-title v-text="item.title"></v-list-item-title>
          <v-list-item-subtitle v-text="item.price"></v-list-item-subtitle>
        </v-list-item-content>
      </template>
    </v-autocomplete>
    <v-spacer></v-spacer>
    <v-btn icon class="hidden-xs-only">
      <v-icon>mdi-message-text-outline </v-icon>
    </v-btn>

    <v-btn icon class="hidden-xs-only">
      <v-icon>mdi-bell-outline</v-icon>
    </v-btn>
    <card-session></card-session>

    <v-btn icon>
      <v-icon>mdi-cart-outline</v-icon>
      <p v-show="false">0</p>
    </v-btn>

  </v-app-bar>
  
  
    

</template>

<script>

import { mapGetters } from 'vuex';
import CardSession from './CardSession.vue';

export default {
  components: { CardSession },
  name: 'topBarComponent',
  data() {
    return {
      search: '',
      clear: true,
      items: []
    }
  },
  methods: {

    productDetail(id) {

      this.$router.push({ name: 'product-detail', params: { id } })
      this.search = ''



    },
  },
  created() {
    this.$store.dispatch('products/getData')
  },
  computed: {
    ...mapGetters('products', ['products', 'products']),


  },
  watch: {
    search(value) {
      if (!value) {

        this.items = []

      }
      else {
        this.items = this.products
        this.$store.dispatch('products/searchTopBar', { search: value })
      }

    },

  }

}
</script>

<style >
.fixed-bar {
  position: sticky;
  position: -webkit-sticky; /* for Safari */
  top: 6em;
  z-index: 2;
}
</style>