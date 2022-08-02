<template>
  <div class="my-5" v-if="products.length">
    <ul class="product-list-table-header">
      <li>Product</li>
      <li>Price</li>
      <li>Category</li>
      <li>Rate</li>

    </ul>
    <ul @click="productDetail(item.id)" class="product-list-rows" v-for="(item,index)  in productData" :key="index" >
      <li>
        <v-avatar size="50" rounded>
          <v-img width="mx-auto" spect-ratio="1.7" :src="item.image" contain></v-img>
        </v-avatar>
        {{ item.title }}
      </li>
      <li>{{ item.price }}</li>
      <li>{{ item.category }}</li>
      <li>{{ item.rating.rate }}</li>
    </ul>
     <div class="text-align-center">
                <v-pagination
      v-model="page"
      @input="navigationProducts(page)"
      :length="4"
      circle
    ></v-pagination>
            </div>
  </div>
  <div v-else>
<h2 >Product Not Found</h2>
    
  </div>
</template>

<script>
import { mapGetters} from 'vuex'

export default {
  name: "listProductComponent",
  data () {
    return{
      page:1,
      productData:[]
    }
  },
  methods:{
    productDetail(id) {
      this.$router.push({name :'product-detail', params : { id}})
    },

    navigationProducts(page){
    let inicio=page
    let final=5
     if(inicio===1){
      this.productData = this.products.slice(0,final)  
     }
     else{
      inicio=(final*page-5)
      final=final*page  
      this.productData = this.products.slice(inicio,final)  
      }
    
    }
    
  },
  created(){
    this.$store.dispatch('products/getData');
     this.navigationProducts(this.page)
  },
  computed:{
    ...mapGetters('products',['products']),
  }

}
</script>

<style scoped>
.product-list-table-header {
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 1fr;
  margin: 0;
  padding: 0;
  font-size: 90%;
  letter-spacing: 1px;
  border-bottom: solid 1px black;
  padding-bottom: .5rem;

}

.product-list-rows {
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 1fr;
  margin: 0;
  padding: 1rem 0 0 0;
  font-size: .9rem;

}

.product-list-rows:hover {
  cursor: pointer;

}
</style>