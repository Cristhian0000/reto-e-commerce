<template>
   
  <v-card
    max-width="500"
    class="mx-auto"
    elevation="0"
  >
  <v-card-title >The best in fashion</v-card-title>
    <v-container class="pa-1">
        
      <v-item-group
        v-model="selected"
        multiple
      >
        <v-row>
            
          <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="12"
            md="12"
          >
            <v-item v-slot="{ active, toggle }">
              <v-img
                :src="item.src"
                height="150"
                contain
                class="text-right pa-2"
                @click="toggle"
              >
                <v-btn
                  icon
                  dark
                  color="red"
                >
                  <v-icon>
                    {{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
                  </v-icon>
                </v-btn>
              </v-img>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
    </v-container>
  </v-card>
</template>


<script>
export default {
name:"asideComponent",
data() {
    return {
        items: [
        {
          src: 'https://gamarraclick.com/modules/ph_simpleblog/featured/79.jpg',
        },
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5607l7Q0SgatqOAjju8pjc6AK1K7LWE2PA&usqp=CAU ',
        },
        {
          src: 'https://joyeriaonlinepriority.com/blog-joyeria/wp-content/uploads/2019/08/JOYAS-DE-MODA.jpg',
        },
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV7IAVsNJ2Lka05QdAsDoPCMKJvs8Q2K-GTw&usqp=CAU',
        },
      ],
      selected: [],
    }
},
}
</script>

<style>

</style>