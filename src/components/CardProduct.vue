<template>

    <div>
        <!-- card small -->
        <div v-show="mode">
            <v-card width="250" height="400" class="card mx-4 mb-5">

                <v-img @click="productDetail(data.id)" class="pointer mt-5 mx-auto" aspect-ratio="1.7" contain
                    :src="data.image"></v-img>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <span v-bind="attrs" v-on="on">
                            <v-card-title class="title">{{ data.title?.substring(0, 30) }}...
                            </v-card-title>
                        </span>
                    </template>

                    <span>{{ data.title }}</span>
                </v-tooltip>

                <v-card-text>

                    <div class="description">

                        <span>{{ data.description?.substring(0, 40) }}...</span>


                    </div>
                    <div class="price">

                        S/ {{ data.price }}

                    </div>

                </v-card-text>
                <v-card-actions class="mb-5 ">
                    <v-spacer></v-spacer>
                    <v-btn @click="addCartProduct(data.id)" block outlined rounded color='error'>
                        ADD TO CART
                    </v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>

             
            


        </div>
        <!-- Card big -->
        <div v-show="!mode">
            <v-card elevation="0" width="90%" height="300" class="mx-3 mb-5">
                <div class="d-flex flex-no-wrap">
                    <v-avatar size="300" rounded>
                        <v-img class="mx-auto" aspect-ratio="1.7" contain :src="data.image"></v-img>
                    </v-avatar>
                    <div>
                        <v-card-title class="text-h5">{{ data.title }}</v-card-title>
                        <v-card-text>
                            <div class="price">

                                S/ {{ data.price }}

                            </div>
                            <v-rating background-color="red lighten-3" color="red" size="12" :value="data.rating?.rate">
                            </v-rating>


                        </v-card-text>


                        <v-card-actions>

                            <v-btn @click="addCartProduct(data.id)" x-large rounded color="#AAD500" dark>
                                ADD TO CART
                            </v-btn>
                            <strong class="mx-3">{{ data.rating?.count }}+ units available</strong>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </div>
                </div>

            </v-card>
        </div>
    </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "CardProductComponent",
    props: ['id', 'data', 'mode'],
    data() { return { countProducts: 0 } },
    computed: {
        ...mapGetters('products', ['cart', 'products'])
    },
    methods: {
        addCartProduct(id) {
            this.$store.dispatch('products/addCartProduct', { product: this.products[id] })
        },
        productDetail() {
            this.$router.push({ name: 'product-detail', params: { id: this.id } })
        },


    },
}
</script>

<style scoped>
.card:hover button {
    background-color: #AAD500 !important;
    color: white !important;

}

.title {
    width: 250px;
    height: 80px;
}

.pointer {
    cursor: pointer;
}



.description {
    font-size: 16px;
    font-weight: bolder;

}

.price {
    font-size: 16px;
    font-weight: 600;
    color: red;
    margin-top: 3px;

}
</style>