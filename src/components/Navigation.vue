<template>
    <v-list dense nav>

        <v-list-item>
            <v-list-item-title class="text">
                {{ title }}
            </v-list-item-title>
        </v-list-item>

        <v-list-item id="items" v-for="(item, index) in items" :key="index" link @click="getCategory()">
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>

</template>

<script>

export default {
    name: 'navigationComponent',
    props: ['title', 'items'],
    data() {

        return {

        }
    },
    methods: {
         // eslint-disable-next-line 
        getCategory() {
            
            this.$router.push({ name : 'products'}).catch(console.log)
            

            

        },

    },
    mounted() {


    }
}

</script>

<style scoped>
#items {
    
    padding-left: 10px;

}
#items:hover{
    background-color:#AAD500;
    color:white
}
</style>