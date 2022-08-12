<template>
    <v-carousel hide-delimiters>
    <v-carousel-item contain
      v-for="(product,index) in products"
      :key="index"
      :src="product.image"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:'carouselProductsComponent',
    computed:{
         ...mapGetters('products',['products']),
        },
        created(){
            this.$store.dispatch('products/getData');
            }
}
</script>

<style>

</style>