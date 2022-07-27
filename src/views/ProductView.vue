<template>

    <div>

        <v-row v-if="loading">
            <SectionLoader />
        </v-row>

        <v-row v-else>


            <div v-show="mode" class="section" v-for="(item, index) in productData" :key="index">
                <card-product :mode.sync="mode" :id="item.id" :data="item">
                </card-product>
            </div>



            <div v-show="!mode" class="details" v-if="productData!==null? productData:''">

                <card-product :mode.sync="mode" :id="productData.id" :data="productData">
                </card-product>


                <div>
                    <h1>Description</h1>
                    <p class="text-justify">{{ this.productData?.description }}</p>
                </div>

            </div>


        </v-row>
    </div>


</template>

<script>
import axios from 'axios'
import CardProduct from '@/components/CardProduct.vue'
import rutas from "../utileria/rutas.js"
import bus from '../utileria/eventBus'
import SectionLoader from '@/components/loaders/SectionLoader.vue'
export default {
    components: { CardProduct, SectionLoader },
    name: 'ProductPage',

    data() {
        return {
            id: null,
            productData: null,
            mode: true,
            loading: true,
            
        }
    },
    methods: {
        async getData() {
            try {
                this.loading = true
                const instace = axios.
                    create({
                        baseURL: rutas.ALL_PRODUCTS,
                    })
                const { data } = await instace.get()
                this.productData = data

            } catch (error) {

                console.log(error)
            }


        },
        async getDataForCategories(category) {
            
            try {
                this.loading = true
                

                const instace = axios.create({
                    baseURL: `${rutas.PRODUCTS_FOR_CATEGORY}/${category.toLowerCase()}`

                })
                const { data } = await instace.get()
                

                this.loading = false
                this.productData = data

            } catch (error) {
                console.log(error)
                this.loading = false
            }
            this.mode = true
            
            

        }


    },
    created() {
        
        this.loading = false
        bus.$on('getDataForCategories', (category) => { this.getDataForCategories(category) })
        bus.$on('getDataForID', (id) => { this.getDataForID(id) })

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