<template>
    <v-card elevation="0">
        <v-navigation-drawer permanent>
            <v-list>
                <v-list-item>

                    <v-list-item-content id="title">
                        <v-list-item-title @click="Home()" class="title"><i class="uil uil-circle"></i> Omni. </v-list-item-title>
                    </v-list-item-content>

                </v-list-item>


                <Navigation :title="'Categories'" :items="categories"></Navigation>

                <v-divider></v-divider>

                <Navigation :title="'Account'" :items="account"></Navigation>
                <v-divider></v-divider>
                <v-list-item class="mt-13">

                    <v-list-item-content>
                        <v-card max-width="230">
                            <v-img src="@/assets/img/cart.svg" contain></v-img>
                        </v-card>

                    </v-list-item-content>
                </v-list-item>
            </v-list>

        </v-navigation-drawer>


    </v-card>


</template>

<script>
import Navigation from "./Navigation.vue";

export default {
    name: "sideBarComponent",
    components: {
        Navigation,
    },
    data() {
        return {
            categories: [
                {
                    name: "Electronics",
                    icon: "uil uil-plug",
                },
                {
                    name: "jewelery",
                    icon: "uil  uil-diamond",
                },
                {
                    name: "men's clothing",
                    icon: 'uil uil-mars'
                },
                {
                    name: "women's clothing",
                    icon: 'uil uil-venus'
                }
            ],

            account: [
                {
                    name: 'Messages',
                    icon: 'uil uil-comment-dots'
                },
                {
                    name: 'Settings',
                    icon: 'uil uil-cog'
                }]
        };
    },
    methods:{
        Home(){
            this.$router.push({name:"products"})
        }
    }
};
</script>

<style scoped>
#title:hover{
    cursor: pointer
}
</style>