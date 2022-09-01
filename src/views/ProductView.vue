<template>

    <div>

        <v-row v-if="loading">
            <SectionLoader />
        </v-row>
        <v-row v-else>
            <h1 class="ml-3">Products</h1>
            <v-tabs v-model="tab" align-with-title color="black">
                <v-tabs-slider color="green"></v-tabs-slider>
                <v-tab @click="getProductsForMaxRate()">
                    Ranking
                </v-tab>
                <v-tab @click="getProductsForLowCost()">
                    Low Cost
                </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <v-row v-if="loading">

                        <section-loader />


                    </v-row>
                    <v-row v-else>
                        <div v-show="mode" class="section" v-for="(item, index) in productRating" :key="index">
                            <card-product :mode.sync="mode" :id="item.id" :data="item">
                            </card-product>
                        </div>
                    </v-row>


                </v-tab-item>
                <v-tab-item>

                    <v-row>
                        <div v-show="mode" class="section" v-for="(item, index) in productLowCost" :key="index">
                            <card-product :mode.sync="mode" :id="item.id" :data="item">
                            </card-product>
                        </div>
                    </v-row>

                </v-tab-item>
            </v-tabs-items>

        </v-row>
        <v-row>

            <h1>List Products</h1>

        </v-row>
        <v-row>
            <list-product></list-product>
        </v-row>



    </div>


</template>

<script>
import axios from 'axios'
import CardProduct from '@/components/CardProduct.vue'
import rutas from "../utileria/rutas.js"
import SectionLoader from '@/components/loaders/SectionLoader.vue'
import VueCookies from "vue-cookies";
import ListProduct from '@/components/ListProduct.vue'



export default {
    components: {
        CardProduct,
        SectionLoader,
        ListProduct,

    },
    name: 'ProductPage',

    data() {
        return {
            id: null,

            productRating: null,
            productLowCost: null,
            mode: true,
            loading: true,
            tab: null

        }
    },
    methods: {
        async getProductsForLowCost() {
            try {

                const instance = axios.
                    create({
                        baseURL: rutas.ALL_PRODUCTS,
                    })
                    const token = VueCookies.get("token_ecommerce");
                    instance.defaults.headers.common["Authorization"] = "Bearer " + token;
                const { data } = await instance.get()
                const LowCost = data.sort((a, b) => (a.price - b.price)).slice(0, 4)
                this.productLowCost = LowCost


            } catch (error) {
                console.log(error)
            }

        },
        async getProductsForMaxRate() {
            try {

                const instance = axios.
                    create({
                        baseURL: rutas.ALL_PRODUCTS,
                    })
                const token = VueCookies.get("token_ecommerce");
                instance.defaults.headers.common["Authorization"] = "Bearer " + token;
                const { data } = await instance.get()

                const maxRanking = data.sort((a, b) => (a.rating.rate - b.rating.rate)).reverse().slice(0, 4)
                this.productRating = maxRanking





            } catch (error) {
                console.log(error)
            }

        },
        async getDataForCategories(category) {

            try {
                this.loading = true


                const instance = axios.create({
                    baseURL: `${rutas.PRODUCTS_FOR_CATEGORY}/${category.toLowerCase()}`

                })
                const token = VueCookies.get("token_ecommerce");
                instance.defaults.headers.common["Authorization"] = "Bearer " + token;
                const { data } = await instance.get()


                this.loading = false
                this.productData = data

            } catch (error) {
                console.log(error)
                this.loading = false
            }
            this.mode = true



        },


    },
    created() {

        this.loading = false
        this.getProductsForMaxRate()
        this.getProductsForLowCost()
    },

    mounted() {

    },

    watch: {

    }
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