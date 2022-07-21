<template>
    <v-list dense nav>

        <v-list-item>
            <v-list-item-title class="text">
                {{ title }}
            </v-list-item-title>
        </v-list-item>

        <v-list-item id="items" v-for="(item, index) in items" :key="index" link 
        @click="getCategory(item.name)  ">
            <v-list-item-icon>
                <v-icon id="items">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>

</template>

<script>
import bus from '../utileria/eventBus'
export default {
    name: 'navigationComponent',
    props: ['title', 'items'],
    data() {

        return {

        }
    },
    methods: {
        getCategory(category){
            bus.$emit('getDataForCategories',category)
        },
        
    },
    mounted() {
        

    }
}

</script>

<style scoped>
#items {
    color: rgb(165, 177, 189);
    padding-left: 10px;

}
</style>