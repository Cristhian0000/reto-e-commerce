<template>

  <v-toolbar color="#AAD500" class="mb-5">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Check our products</v-toolbar-title>
    <v-autocomplete class="mx-5" hide-details hide-no-data label="What are you looking for" rounded solo width="5px">
    </v-autocomplete>
  </v-toolbar>


</template>

<script>
export default {
  name: 'TopBarComponent'
}
</script>

<style>
</style>