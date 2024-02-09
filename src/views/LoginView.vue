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
            <v-alert
              v-if="errorMessage"
              color="error"
              icon="$error"
              class="alert-class"
            >
              <template #title>
                <span
                  style="
                    font-family: 'Poppins', sans-serif;
                    font-size: 18px;
                    font-weight: bold;
                    color: #f2f2f2;
                  "
                  >Login failed</span
                >
              </template>
              <span
                style="
                  font-family: 'Poppins', sans-serif;
                  font-size: 14px;
                  font-style: italic;
                  color: #f2f2f2;
                "
                >{{ errorMessage }}</span
              >
            </v-alert>

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
  </v-container>
</template>

<script>
export default {
  data: () => ({
    email: "",
    password: "",
    IsPasswordShowed: false,
    isPasswordResetDialogOpen: false,
    resetEmail: "",
    errorMessage: "",
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
      this.$apiClient
        .post("http://localhost:3000/api/auth/login", userData)
        .then((response) => {
          console.log("Server response:", response);
          localStorage.setItem("token", response.data.token);
          sessionStorage.setItem("user", JSON.stringify(response.data.user));
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
          if (error.response && error.response.status === 401) {
            this.errorMessage = "Incorrect email or password.";
          } else {
            console.error("There was an error!", error);
            this.errorMessage = "An error occurred. Please try again later.";
          }
        });
    },
  },
};
</script>

<style scoped>
.login-card {
  width: 400px;
  padding: 10px;
  background-color: #642b73 !important;
  margin-top: 50px;
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
  margin: 50px 0px 25px 0px;
}

.alert-class {
  margin-top: 50px;
  width: 300px;
}
.sign-in-btn {
  width: 150px !important;
  height: 40px !important;
  background-color: #874faa !important;
  color: #f9f9f9;
}
</style>
