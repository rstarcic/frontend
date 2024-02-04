<template>
  <div class="container">
    <h2>Edit Account Settings</h2>
    <p>Here you can change your account settings.</p>

    <v-form>
      <v-text-field
        v-model="password"
        label="Current Password"
        :rules="[rule.required, rule.min, rule.password]"
        :append-icon="passwordIsShowed ? 'mdi-eye' : 'mdi-eye-off'"
        :type="passwordIsShowed ? 'text' : 'password'"
        @click:append="togglePasswordVisibility('passwordIsShowed')"
      ></v-text-field>

      <v-text-field
        v-model="newPassword"
        label="New Password"
        :rules="[rule.required, rule.min, rule.password]"
        :append-icon="newPasswordIsShowed ? 'mdi-eye' : 'mdi-eye-off'"
        :type="newPasswordIsShowed ? 'text' : 'password'"
        @click:append="togglePasswordVisibility('newPasswordIsShowed')"
      ></v-text-field>

      <v-text-field
        v-model="confirmPassword"
        label="Confirm New Password"
        :rules="[rule.required, rule.passwordMatch, rule.password]"
        :append-icon="confirmPasswordIsShowed ? 'mdi-eye' : 'mdi-eye-off'"
        :type="confirmPasswordIsShowed ? 'text' : 'password'"
        @click:append="togglePasswordVisibility('confirmPasswordIsShowed')"
      ></v-text-field>

      <v-btn
        @click="saveAccountSettings"
        tile
        class="save-changes-btn"
        text
        variant="plain"
        color="#FFFFFF"
      >
        Save Changes
      </v-btn>
    </v-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: "",
      newPassword: "",
      confirmPassword: "",
      passwordIsShowed: false,
      newPasswordIsShowed: false,
      confirmPasswordIsShowed: false,
      avatar: null,
      rule: {
        required: (value) => !!value || "Required.",
        min: (value) => (value && value.length >= 8) || "Min 8 characters.",
        password: (v) =>
          !v ||
          /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/.test(v) ||
          "Password must be valid",
        passwordMatch: () =>
          this.newPassword === this.confirmPassword ||
          "Passwords do not match.",
      },
    };
  },
  methods: {
    togglePasswordVisibility(fieldName) {
      this[fieldName] = !this[fieldName];
    },
    async saveAccountSettings() {
      try {
        const userSessionData = sessionStorage.getItem("user");
        if (userSessionData) {
          const user = JSON.parse(userSessionData);
          const id = user._id;
          const role = user.role;
          const passwordData = {
            id,
            currentPassword: this.password,
            newPassword: this.newPassword,
          };
          let apiEndpointBasedOnUserRole;
          if (role === "job seeker") {
            apiEndpointBasedOnUserRole =
              "http://localhost:3000/api/job-seeker/profile/settings";
          } else if (role === "employer") {
            apiEndpointBasedOnUserRole =
              "http://localhost:3000/api/employer/profile/settings";
          } else {
            throw new Error("Invalid user type.");
          }

          const response = await this.$apiClient.put(
            apiEndpointBasedOnUserRole,
            passwordData
          );
          console.log("Profile settings successfully updated", response);
        } else {
          throw new Error("User not found.");
        }
      } catch (error) {
        console.error("Error updating profile settings:", error);
      }
    },
  },
};
</script>

<style>
.save-changes-btn {
  background-color: #cf5dc0 !important;
  color: #f9f9f9;
}

h2 {
  color: #070303;
  font-weight: bold;
}

p {
  margin-bottom: 50px !important;
  color: #555;
}
</style>
