<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col align="center" justify="center" cols="6">
        <v-card outlined class="card-design">
          <v-card-title>Sign up</v-card-title>
          <v-card-subtitle>Dear employer, please sign up</v-card-subtitle>
          <v-card-text></v-card-text>
          <v-form class="form-design">
            <v-row class="subtitle-color">Personal Information</v-row>
            <v-row no-gutters>
              <v-col cols="6">
                <v-text-field
                  class="text-field-design"
                  v-model="firstName"
                  label="First Name"
                  underlined
                  placeholder="Enter your first name"
                  :rules="[
                    rule.required,
                    rule.name,
                    rule.nameLength,
                    rule.nameFormat,
                  ]"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  class="text-field-design"
                  v-model="lastName"
                  label="Last Name"
                  underlined
                  placeholder="Enter your last name"
                  :rules="[
                    rule.required,
                    rule.name,
                    rule.nameLength,
                    rule.nameFormat,
                  ]"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="6">
                <v-autocomplete
                  class="text-field-design"
                  v-model="gender"
                  label="Gender"
                  :items="genders"
                  :rules="[rule.required]"
                ></v-autocomplete>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  class="text-field-design"
                  v-model="dateOfBirth"
                  label="Date of birth"
                  underlined
                  placeholder="dd.mm.YYYY."
                  :rules="[rule.required, rule.validDateOfBirth]"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="subtitle-color">Contact information</v-row>
            <v-row no-gutters>
              <v-col cols="6">
                <v-text-field
                  class="text-field-design"
                  v-model="phoneNumber"
                  label="Phone number"
                  underlined
                  placeholder="Enter your phone number"
                  :rules="[rule.required, rule.phoneNumber]"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-autocomplete
                  class="text-field-design"
                  v-model="country"
                  label="Country"
                  underlined
                  placeholder="Enter your country"
                  :items="countries"
                  :rules="[rule.required]"
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="4" v-if="country === 'Croatia'">
                <v-autocomplete
                  class="text-field-design"
                  v-model="city"
                  label="City"
                  underlined
                  placeholder="Enter your city"
                  :items="getCroatiaCities()"
                  :rules="[rule.required, rule.name, rule.nameFormat]"
                  style="max-width: 200px"
                ></v-autocomplete>
              </v-col>
              <v-col cols="4" v-if="country != 'Croatia'">
                <v-text-field
                  class="text-field-design"
                  v-model="city"
                  label="City"
                  underlined
                  placeholder="Enter your city"
                  :rules="[rule.required]"
                  style="max-width: 200px"
                ></v-text-field
              ></v-col>
              <v-col cols="4">
                <v-text-field
                  class="text-field-design"
                  v-model="address"
                  label="Address"
                  placeholder="Enter your address"
                  :rules="[rule.required]"
                  style="max-width: 200px"
                ></v-text-field
              ></v-col>
              <v-col cols="4">
                <v-text-field
                  class="text-field-design"
                  v-model="postalCode"
                  label="ZIP / Postal Code"
                  underlined
                  placeholder="Enter your postal code"
                  :rules="[rule.required, rule.postalCode]"
                  style="max-width: 200px"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="subtitle-color">Documents</v-row>
            <v-row no-gutters>
              <v-col cols="6">
                <v-autocomplete
                  class="text-field-design"
                  ref="docs"
                  label="Document type"
                  v-model="documentType"
                  :rules="[rule.required]"
                  :items="documentTypes"
                ></v-autocomplete>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  class="text-field-design"
                  v-model="documentNumber"
                  label="Document number"
                  underlined
                  placeholder="Enter your document number"
                  :rules="[rule.required, rule.docNumber]"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="subtitle-color">Account</v-row>
            <v-row no-gutters>
              <v-col cols="6">
                <v-text-field
                  class="text-field-design"
                  v-model="email"
                  label="Email"
                  underlined
                  placeholder="Enter your email"
                  :rules="[rule.required, rule.email]"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  class="text-field-design"
                  v-model="password"
                  label="Password"
                  underlined
                  placeholder="Enter your password"
                  :rules="[rule.required, rule.password]"
                  hint="At least 8 characters, 1 uppercase letter, 1 special character, and 1 number"
                  :append-icon="IsPasswordShowed ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="IsPasswordShowed = !IsPasswordShowed"
                  :type="IsPasswordShowed ? 'text' : 'password'"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-form>
          <v-card-actions class="d-flex align-center justify-center">
            <v-row justify="center">
              <v-col cols="6" sm="3">
                <v-btn
                  class="btn-design"
                  variant="plain"
                  elevation="4"
                  :disabled="!isFormValid"
                  @click="signUp"
                  >SIGN UP</v-btn
                >
              </v-col>
              <v-col cols="6" sm="3">
                <v-btn
                  class="btn-design"
                  variant="plain"
                  elevation="4"
                  @click="clearForm"
                  >Clear</v-btn
                ></v-col
              >
            </v-row>
          </v-card-actions>
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
    gender: "",
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
    IsPasswordShowed: false,
    countries: countries,
    cities: cities,
    rule: {
      required: (value) => !!value || "Required.",
      email: (v) =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid",
      name: (v) =>
        /^[A-Za-zŠĐČĆŽšđčćž ]+$/.test(v) || "Name must not contain numbers",
      nameLength: (v) =>
        (v && v.length >= 2 && v.length <= 50) ||
        "First name must be between 2 and 50 characters",
      nameFormat: (v) => /^[A-ZŠĐČĆŽ][a-zšđčćž]*$/.test(v) || "Invalid format",
      docNumber: (value) =>
        (value && value.length >= 6 && value.length <= 14) ||
        "The input must be between 6 and 14 characters",
      password: (v) =>
        !v ||
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/.test(v) ||
        "Password must be valid",
      phoneNumber: (v) =>
        /^\d{1,15}$/.test(v) ||
        "Phone number must be up to 15 digits and contain only numbers",
      postalCode: (v) =>
        /^\d{5,9}$/.test(v) ||
        "ZIP / Postal Code must be between 5 and 9 digits",
      dateOfBirth: (v) => {
        if (typeof v !== "string" || !v.match(/^(\d{2})\.(\d{2})\.(\d{4})$/)) {
          return "Please enter a valid date in the format dd.mm.yyyy";
        }
        return true;
      },
      validDateOfBirth(value) {
        if (
          typeof value !== "string" ||
          !value.match(/^(\d{2})\.(\d{2})\.(\d{4})$/)
        ) {
          return "Please enter a valid date in the format dd.mm.yyyy";
        }
        const parts = value.split(".");
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10);
        const year = parseInt(parts[2], 10);

        if (month < 1 || month > 12 || year < 1900) {
          return "Month must be between 1 and 12, and year must be after 1900";
        }

        const daysInMonth = new Date(year, month, 0).getDate();
        if (day < 1 || day > daysInMonth) {
          return `Invalid day, month ${month} has only ${daysInMonth} days`;
        }
        const today = new Date();
        const birthDate = new Date(value);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        if (age < 18) {
          return "You must be at least 18 years old";
        }
        return true;
      },
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
    clearForm() {
      (this.firstName = null),
        (this.lastName = null),
        (this.gender = null),
        (this.dateOfBirth = null),
        (this.documentType = null),
        (this.documentNumber = null),
        (this.email = null),
        (this.password = null),
        (this.phoneNumber = null),
        (this.country = null),
        (this.city = null),
        (this.address = null),
        (this.postalCode = null);
    },
    signUp() {
      const userData = {
        firstName: this.firstName,
        lastName: this.lastName,
        gender: this.gender,
        dateOfBirth: this.dateOfBirth,
        documentType: this.documentType,
        documentNumber: this.documentNumber,
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber,
        country: this.country,
        city: this.city,
        address: this.address,
        postalCode: this.postalCode,
      };
      this.$apiClient
        .post(`/api/auth/signup/employer`, userData)
        .then((response) => {
          console.log("Server response:", response);
          localStorage.setItem("token", response.data.token);
          sessionStorage.setItem("user", JSON.stringify(response.data.user));
          this.$router.push("/employer/profile");
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
  },
  computed: {
    isFormValid() {
      return (
        this.rule.required(this.firstName) &&
        this.rule.name(this.firstName) &&
        this.rule.nameLength(this.firstName) &&
        this.rule.nameFormat(this.firstName) &&
        this.rule.required(this.lastName) &&
        this.rule.name(this.lastName) &&
        this.rule.nameLength(this.lastName) &&
        this.rule.nameFormat(this.lastName) &&
        this.rule.required(this.gender) &&
        this.rule.required(this.dateOfBirth) &&
        this.rule.validDateOfBirth(this.dateOfBirth) &&
        this.rule.required(this.documentType) &&
        this.rule.required(this.documentNumber) &&
        this.rule.docNumber(this.documentNumber) &&
        this.rule.required(this.email) &&
        this.rule.email(this.email) &&
        this.rule.required(this.password) &&
        this.rule.password(this.password) &&
        this.rule.required(this.phoneNumber) &&
        this.rule.phoneNumber(this.phoneNumber) &&
        this.rule.required(this.country) &&
        this.rule.required(this.city) &&
        this.rule.name(this.city) &&
        this.rule.nameFormat(this.city) &&
        this.rule.required(this.address) &&
        this.rule.required(this.postalCode) &&
        this.rule.postalCode(this.postalCode)
      );
    },
  },
};
</script>

<style scoped>
.v-card-title,
.v-card-subtitle {
  color: #f7f8f9;
}
.card-design {
  width: 700px;
  background-color: #642b73;
}
.form-design {
  padding: 20px 35px;
}
.text-field-design {
  font-size: 12px;
  max-width: 300px;
  height: 48px;
  margin-bottom: 50px;
  color: #000000;
}

.subtitle-color {
  color: #f7f8f9;
  margin-left: 10px;
  margin-bottom: 10px;
}
.btn-design {
  color: #f7f8f9;
  margin-left: 20px;
}
@media screen and (max-width: 600px) {
  .text-field-design {
    width: 100%;
    max-width: none;
  }
}
</style>
