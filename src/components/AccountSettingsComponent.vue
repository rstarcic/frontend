<template>
  <h2>Edit Account Settings</h2>
  <p>Here you can change your account settings.</p>

  <v-form>
    <v-text-field
      v-model="password"
      label="Current Password"
      type="password"
      :rules="[rules.required, rules.min]"
    ></v-text-field>

    <v-text-field
      v-model="newPassword"
      label="New Password"
      type="password"
      :rules="[rules.required, rules.min]"
    ></v-text-field>

    <v-text-field
      v-model="confirmPassword"
      label="Confirm New Password"
      type="password"
      :rules="[rules.required, rules.passwordMatch]"
    ></v-text-field>

    <v-file-input
      prepend-icon="mdi-camera"
      v-model="avatar"
      type="file"
      label="Profile Image"
      accept="image/*"
      @change="handleFileUpload"
    ></v-file-input>

    <v-btn
      @click="saveAccountSettings"
      tile
      class="save-changes-btn rounded-lg"
      text
      color="#FFFFFF"
    >
      Save Changes
    </v-btn>
  </v-form>
</template>
<script>
export default {
  data() {
    return {
      password: "",
      newPassword: "",
      confirmPassword: "",
      avatar: null,
      rules: {
        required: (value) => !!value || "Required.",
        min: (value) => (value && value.length >= 8) || "Min 8 characters.",
        passwordMatch: () =>
          this.newPassword === this.confirmPassword ||
          "Passwords do not match.",
      },
    };
  },
  methods: {
    handleFileUpload() {
      // Logika za obradu uploada slike
    },
    saveAccountSettings() {
      // Logika za spremanje promijenjenih postavki računa
    },
  },
};
</script>

<style scoped>
.save-changes-btn {
  background-color: #4caf50; /* Primjer boje, promijenite prema potrebi */
  color: white;
}
</style>

