<template>
  <v-row>
    <v-col>
      <div class="d-flex align-center justify-center">
        <strong class="mr-4">loading content...</strong>
        <v-progress-circular indeterminate />
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SectionLoader",
};
</script>