<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col align="center" justify="center" cols="6">
        <v-card outlined>
          <v-card-title>Sign Up</v-card-title>
          <v-card-subtitle>Dear user, please sign up</v-card-subtitle>
          <v-card-text></v-card-text>
          <v-form @submit.prevent="onSubmit">
            <v-text-field
              v-model="firstName"
              label="First Name"
              underlined
              placeholder="Enter your first name"
              :rules="[rule.required, rule.name, rule.nameFormat]"
            ></v-text-field>
            <v-text-field
              v-model="lastName"
              label="Last Name"
              underlined
              placeholder="Enter your last name"
              :rules="[rule.required, rule.name, rule.nameFormat]"
            ></v-text-field>
            <v-autocomplete
              ref="gender"
              v-model="selectedGender"
              label="Gender"
              :items="genders"
            ></v-autocomplete>
            <v-text-field
              v-model="dateOfBirth"
              label="Date of birth"
              underlined
              placeholder="dd.mm.YYYY."
              :rules="[rule.required, rule.dateOfBirth]"
            ></v-text-field>
            <v-autocomplete
              ref="docs"
              label="Document type"
              v-model="documentType"
              :rules="[rule.required]"
              :items="documentTypes"
            ></v-autocomplete>
            <v-text-field
              v-model="documentNumber"
              label="Document number"
              underlined
              placeholder="Enter your document number"
              :rules="[
                () => !!documentNumber || 'This field is required',
                (value) =>
                  (value && value.length >= 6 && value.length <= 14) ||
                  'The input must be between 6 and 14 characters',
              ]"
            ></v-text-field>
            <v-text-field
              v-model="email"
              label="Email"
              underlined
              placeholder="Enter your email"
              :rules="[rule.required, rule.email]"
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              underlined
              placeholder="Enter your password"
              :rules="[rule.required, rule.password]"
              hint="At least 8 characters, 1 uppercase letter, 1 special character, and 1 number"
            >
            </v-text-field>
            <v-text-field
              dense
              v-model="phoneNumber"
              label="Phone number"
              underlined
              placeholder="Enter your phone number"
              :rules="[rule.required]"
            ></v-text-field>
            <v-autocomplete
              v-model="country"
              label="Country"
              underlined
              placeholder="Enter your country"
              :items="countries"
              :rules="[rule.required]"
            ></v-autocomplete>
            <v-autocomplete
              v-if="country === 'Croatia'"
              v-model="city"
              label="City"
              underlined
              placeholder="Enter your city"
              :items="getCroatiaCities()"
              :rules="[rule.required]"
            ></v-autocomplete>
            <v-text-field
              v-if="country != 'Croatia'"
              v-model="city"
              label="City"
              underlined
              placeholder="Enter your city"
              :rules="[rule.required]"
            ></v-text-field>
            <v-text-field
              v-model="address"
              label="Address"
              underlined
              placeholder="Enter your address"
              :rules="[rule.required]"
            ></v-text-field>
            <v-text-field
              v-model="postalCode"
              label="ZIP / Postal Code"
              underlined
              placeholder="Enter your postal code"
              :rules="[rule.required]"
            ></v-text-field>
          </v-form>
          <v-btn elevation="4" @click="signUp">SIGN UP</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { countries, cities } from "../utils/location.js";
export default {
  name: "RegistrationView",
  data: () => ({
    firstName: "",
    lastName: "",
    selectedGender: "",
    dateOfBirth: "",
    documentType: "",
    documentNumber: "",
    email: "",
    password: "",
    phoneNumber: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
    genders: ["Male", "Female"],
    countries: countries,
    cities: cities,
    rule: {
      required: (value) => !!value || "Required.",
      email: (v) =>
        !v ||
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid",
      name: (v) =>
        (v && v.length >= 2 && v.length <= 50) ||
        "First name must be between 2 and 50 characters",
      nameFormat: (v) => /^[A-ZŠĐČĆŽ][a-zšđčćž]*$/.test(v) || "Invalid format",
      docNumber: (value) =>
        (value && value.length >= 6 && value.length <= 14) ||
        "The input must be between 6 and 14 characters",
      dateOfBirth: (v) => this.validDateOfBirth(v),
      password: (v) =>
        !v ||
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/.test(v) ||
        "Password must be valid",
    },
    documentTypes: [
      "ID",
      "Passport",
      "Driving license",
      "Health insurance card",
    ],
  }),
  methods: {
    getCroatiaCities() {
      return cities;
    },
    validDateOfBirth(value) {
      if (!value.match(/^(\d{2})\.(\d{2})\.(\d{4})$/)) {
        return "Please enter a valid date in the format dd.mm.yyyy.";
      }
      const today = new Date();
      const birthDate = new Date(value);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();

      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      if (age < 18) {
        return "You must be at least 18 years old.";
      }
      return true;
    },
    IsIconPasswordToggled() {
      this.IsPasswordShowed = !this.IsPasswordShowed;
    },
    onSubmit() {
      console.log(
        "Form submitted",
        this.firstName,
        this.lastName,
        this.selectedGender
      );
    },
  },
  computed: {},
};
</script>

<style scoped>
</style>
