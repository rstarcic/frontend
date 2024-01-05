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
            <div class="forgot-password-class">
              <v-btn
                class="forgot-password-btn"
                variant="plain"
                color="#f7f8f9"
                @click="openPasswordResetDialog"
                >Forgot password?</v-btn
              >
            </div>
            <div class="sign-in-class">
              <v-btn
                class="sign-in-btn"
                variant="plain"
                elevation="4"
                color="#f7f8f9"
                type="submit"
                @click.prevent="signIn"
              >
                SIGN IN</v-btn
              >
            </div>
          </v-form>
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
          <v-btn class="reset-email-btn" text @click="sendPasswordResetEmail"
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
  background-color: #642b73 !important;
}

.text-field {
  width: 300px;
  height: 20px !important;
  padding: 50px;
}

.login-text,
.login-subtext {
  color: #f7f8f9;
}
.forgot-password-class,
.sign-in-class {
  margin: 20px 0px 25px 0px;
}
.forgot-password-btn {
  font-size: 10px !important;
}
</style>

<script>
import axios from "axios";
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
    signIn() {
      const userData = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("http://localhost:3000/api/auth/login", userData)
        .then((response) => {
          console.log("Server response:", response);
          const userRole = response.data.user.role;
          if (userRole === "job seeker") {
            this.$router.push("/job-seeker/profile");
          } else if (userRole === "employer") {
            this.$router.push("/employer/profile");
          } else {
            console.error("Unknown role:", userRole);
          }
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
  },
};
</script>
