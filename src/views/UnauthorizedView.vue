<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6" lg="4" align="center" justify="center">
        <v-img
          alt="Jobify logo"
          contain
          :src="require('@/assets/Fire.png')"
          class="logo"
        />
        <h1 class="font-weight-bold">401 Unauthorized - Access Denied</h1>
        <h2 class="font-weight-medium">
          You do not have permission to view this page.
        </h2>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
export default {
  data: () => ({}),
};
</script>

<style scoped>
.logo {
  height: 350px;
  margin-top: 30%;
}
</style>