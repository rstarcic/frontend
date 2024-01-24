<template>
  <v-form>
    <v-row no-gutters>
      <v-col cols="6">
        <v-text-field
          class="text-field-design"
          v-model="firstName"
          label="First name"
          prepend-icon="mdi-account"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field
          class="text-field-design"
          v-model="lastName"
          label="Last name"
          :placeholder="lastName"
          prepend-icon="mdi-account"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="6">
        <v-text-field
          class="text-field-design"
          v-model="gender"
          label="Gender"
          :placeholder="gender"
          prepend-icon="mdi-human"
        ></v-text-field
      ></v-col>
      <v-col cols="6">
        <v-text-field
          class="text-field-design"
          v-model="dateOfBirth"
          label="Date of birth"
          :placeholder="dateOfBirth"
          prepend-icon="mdi-calendar"
        ></v-text-field
      ></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="6">
        <v-text-field
          class="text-field-design"
          v-model="phoneNumber"
          label="Phone number"
          :placeholder="phoneNumber"
          prepend-icon="mdi-phone"
        ></v-text-field
      ></v-col>
      <v-col cols="6">
        <v-text-field
          class="text-field-design"
          v-model="country"
          label="Country"
          :placeholder="country"
          prepend-icon="mdi-earth"
        ></v-text-field></v-col
    ></v-row>
    <v-row no-gutters>
      <v-col cols="6">
        <v-text-field
          class="text-field-design"
          v-model="city"
          label="City"
          :placeholder="city"
          prepend-icon="mdi-city"
        ></v-text-field></v-col
      ><v-col cols="6">
        <v-text-field
          class="text-field-design"
          v-model="address"
          label="Address"
          :placeholder="address"
          prepend-icon="mdi-home-map-marker"
        ></v-text-field
      ></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="6">
        <v-text-field
          class="text-field-design"
          v-model="postalCode"
          label="Postal code"
          :placeholder="postalCode"
          prepend-icon="mdi-mailbox"
        ></v-text-field
      ></v-col>
      <v-col cols="6">
        <v-text-field
          class="text-field-design"
          v-model="documentType"
          label="Document type"
          :placeholder="documentType"
          prepend-icon="mdi-file-document"
        ></v-text-field
      ></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="6">
        <v-text-field
          class="text-field-design"
          v-model="documentNumber"
          label="Document number"
          :placeholder="documentNumber"
          prepend-icon="mdi-numeric"
        ></v-text-field> </v-col
    ></v-row>
    <v-btn @click="saveChanges">Save changes</v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    phoneNumber: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
    documentType: "",
    documentNumber: "",
  }),
  methods: {
    loadUserData() {
      const user = JSON.parse(sessionStorage.getItem("user"));
      if (user) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.gender = user.gender;
        this.dateOfBirth = user.dateOfBirth;
        this.phoneNumber = user.phoneNumber;
        this.country = user.country;
        this.city = user.city;
        this.address = user.address;
        this.postalCode = user.postalCode;
        this.documentType = user.documentType;
        this.documentNumber = user.documentNumber;
      }
    },
    saveChanges() {
      this.$emit("updateUserData", {
        firstName: this.firstName,
        lastName: this.lastName,
        gender: this.gender,
        dateOfBirth: this.dateOfBirth,
        phoneNumber: this.phoneNumber,
        country: this.country,
        city: this.city,
        address: this.address,
        postalCode: this.postalCode,
        documentType: this.documentType,
        documentNumber: this.documentNumber,
      });
    },
  },
  created() {
    this.loadUserData();
  },
};
</script>

<style>
.text-field-design {
  font-size: 12px;
  width: 300px;
  height: 48px;
  margin-bottom: 50px;
  color: #000000;
}
</style>