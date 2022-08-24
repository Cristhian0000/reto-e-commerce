<template>
  <v-data-table  v-if="products"
  item-key="name"
  item-class="row"
   light :headers="headers" :items="products">
   <!-- eslint-disable-next-line -->
     <template   v-slot:item.title="{ item } " >
      <v-avatar @click="productDetail(item.id)" size="40" rounded class="m-3 poiter">
        <v-img class="mx-auto" aspect-ratio="1.7" contain :src="item.image"></v-img>
      </v-avatar>
      {{ item.title }}
    </template>
  </v-data-table>
<v-data-table v-else 
light :headers="headers" loading
loading-text="Loading... Please wait"
>

</v-data-table>

</template>

<script>
import { mapGetters } from 'vuex'
  
export default {
  name: "listProductComponent",
  data() {
    return {
      page: 1,
      productData: [],
      headers: [
        { text: 'Product', value: 'title',width:'100vh'},
        { text: 'Price', value: 'price',width:'100%' },
        { text: 'Category', value: 'category',width:'100%' },
        { text: 'Rate', value: 'rating.rate',sortable: false,}
        
        ]
    }
  },
  methods: {
    productDetail(id) {
      this.$router.push({ name: 'product-detail', params: { id } })
    },

  },
  created() {
    this.$store.dispatch('products/getData');
    

  },

  computed: {
    ...mapGetters('products', ['products']),

  }

}
</script>

<style scoped>

.poiter{
  cursor: pointer;
}

</style>