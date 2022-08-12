<template>
  <v-container>
    <v-row v-if="loading">
      <section-loader />
    </v-row>

    <v-row v-else>
      <v-col cols="10" xs="12" md="12">
<div v-show="!mode" class="details" v-if="productData !== null ? productData : ''">

        <card-product :mode.sync="mode" :id="productData.id" :data="productData">
        </card-product>
        
      </div>
      
      </v-col>
      <div class="mt-4">
          <h1>Description</h1>
          <p class="text-justify">{{ this.productData?.description }}</p>
          
        </div>

    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import CardProduct from '@/components/CardProduct.vue'
import rutas from "../utileria/rutas.js"

import SectionLoader from '@/components/loaders/SectionLoader.vue'
export default {
  components: { CardProduct, SectionLoader },
  name: 'ProductDetail',

  data() {
    return {
      id: null,
      productData: null,
      mode: false,
      loading: true
    }
  },
  methods: {
    async getDataForID(id) {
      try {
        this.loading = true
        id=this.$route.params.id
        const instace = axios.create({
          baseURL: `${rutas.ALL_PRODUCTS}/${id}`,
        })

        const { data } = await instace.get()
        if(!data){
          
          this.$router.push({name : '404'});
        }
        
        this.productData = data
        this.loading = false

      } catch (error) {
        this.loading = false
        console.log(error)
      }

    },


  },
  created() {
    this.loading = true
    this.getDataForID(this.id)
  },
}

</script>

<style scoped>
.section {
  padding: 5px;
  list-style: none;
  display: flex;
  background-size: cover;
  align-items: center;
}

.details {
  margin-top: 50px;
}
</style>