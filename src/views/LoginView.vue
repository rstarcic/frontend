<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col align="center" justify="center" cols="6">
        <v-card class="login-card" outlined>
          <v-card-title class="login-text">LOGIN</v-card-title>
          <v-card-subtitle class="login-subtext"
            >Dear user, please login</v-card-subtitle
          >
          <v-card-text class="card-text-border"></v-card-text>
          <v-form>
            <v-text-field
              v-model="email"
              class="text-field"
              type="email"
              outlined
              dense
              label="Email"
              placeholder="Enter your email"
            ></v-text-field>
            <v-text-field
              v-model="password"
              class="text-field"
              outlined
              dense
              label="Password"
              placeholder="Enter your password"
              :append-icon="IsPasswordShowed ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="IsPasswordShowed = !IsPasswordShowed"
              :type="IsPasswordShowed ? 'text' : 'password'"
            ></v-text-field>
            <v-btn
              class="sign-in-btn rounded-lg"
              text
              color="#FFFFFF"
              @click="LoggedIn"
              >SIGN IN</v-btn
            >
          </v-form>
          <div class="password-class">
            <v-btn text x-small color="blue" @click="openPasswordResetDialog"
              >Forgot password?</v-btn
            >
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog
      v-model="isPasswordResetDialogOpen"
      max-width="450px"
      outlined
      persistent
      class="dialog-class"
    >
      <v-card class="card-class">
        <v-card-title class="login-text">Reset Password</v-card-title>
        <v-card-subtitle
          >We'll assist you in resetting your password. You'll receive an email
          shortly.</v-card-subtitle
        >
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="resetEmail"
              class="text-field email-field"
              type="email"
              dense
              outlined
              label="Email"
              placeholder="Enter your email"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="rounded-lg reset-email-btn"
            text
            @click="PasswordResetEmail"
            >Send Reset Email</v-btn
          >
          <v-btn color="red" text @click="closePasswordResetDialog"
            >Cancel</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
  
  <style>
.login-card {
  width: 400px;
  padding: 16px;
}

.text-field {
  width: 300px;
  height: 20px !important;
  padding: 50px;
}
</style>

<script>
export default {
  data: () => ({
    email: "",
    password: "",
    IsPasswordShowed: false,
    isPasswordResetDialogOpen: false,
    resetEmail: "",
  }),
  methods: {
    openPasswordResetDialog() {
      this.isPasswordResetDialogOpen = true;
    },
    closePasswordResetDialog() {
      this.isPasswordResetDialogOpen = false;
    },
  },
};
</script>