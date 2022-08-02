<template>

  <v-toolbar color="#AAD500" dense class="mb-5">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Check our products</v-toolbar-title>
    <v-autocomplete id="search" :items="productsTitle"  class="mx-5" prepend-inner-icon="mdi-magnify"
      :search-input.sync="search"
      clearable
      hide-details
      hide-selected
      item-text="title"
      item-value="id"
      label="Search for a Product..."
      solo
       >
      <template  v-slot:item="{ item}">
        <v-avatar size="50" rounded>
          <v-img  @click="productDetail(item.id)"  width="mx-auto" spect-ratio="1.7" :src="item.image" contain></v-img>
        </v-avatar>
        <v-list-item-content @click="productDetail(item.id)">
          <v-list-item-title v-text="item.title"></v-list-item-title>
          <v-list-item-subtitle v-text="item.price"></v-list-item-subtitle>
        </v-list-item-content>

      </template>
    </v-autocomplete>
  </v-toolbar>

</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'topBarComponent',
  data() {
    return {
      search: '',
      
    }
  },
  methods: {
   autoCompleteProducts(val){
     this.$store.dispatch('products/searchTopBar', { search: val });
   },
    productDetail(id) {
      this.$router.push({name :'product-detail', params : { id}})
      this.search = ''
    },
  },
  created() {
    
  },
  computed: {
    ...mapGetters('products', ['products','productsTitle']),

  },
  watch: {
    search(value) {
      this.$store.dispatch('products/searchTopBar', { search: value });
    }
  }

}
</script>

<style>
</style>