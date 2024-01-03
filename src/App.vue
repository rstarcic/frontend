<template>
  <v-app class="main">
    <v-app-bar app color="#050301" dense class="topNavbar">
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="Jobify logo"
            contain
            :src="require('@/assets/blackJobifyLogo.png')"
            class="logo-bar"
          />
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <v-btn class="loginBtn" variant="plain" to="/login" color="#FFFFFF"
        >Login</v-btn
      >
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            class="signupBtn"
            variant="plain"
            v-bind="props"
            color="#FFFFFF"
          >
            Sign Up
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
            :to="`/signup/${item.title.toLowerCase().replace(/ /g, '-')}`"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-app-bar app class="bottomNavbar" color="#12151B">
      <v-btn to="/about" color="#FFFFFF" variant="plain" size="small"
        >About</v-btn
      >
      <v-btn text to="/jobs" color="#FFFFFF" variant="plain" size="small"
        >Find Jobs</v-btn
      >
      <v-btn text to="/hire" color="#FFFFFF" variant="plain" size="small"
        >Hire job seeker</v-btn
      >
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer color="#8e68b2" class="d-flex">
      <v-container>
        <v-row no-gutters>
          <v-col cols="5" align="center" class="logo-col">
            <v-img
              alt="Jobify logo"
              contain
              :src="require('@/assets/purpleJobifyLogo.png')"
              class="logo-footer"
            />
          </v-col>
          <v-col class="text-center icons-col">
            <h4>Find Us On Social Media:</h4>
            <div>
              <v-btn
                v-for="icon in icons"
                :key="icon.name"
                color="white"
                text
                class="social-media-buttons"
                size="small"
                fab
              >
                <v-icon :size="25" :color="icon.color" class="rounded-icon">{{
                  icon.name
                }}</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    items: [{ title: "Job seeker" }, { title: "Employer" }],
    icons: [
      { name: "mdi-facebook", color: "#3b5998" },
      { name: "mdi-twitter", color: "#1DA1F2" },
      { name: "mdi-linkedin", color: "#0A66C2" },
      { name: "mdi-instagram", color: "#E1306C" },
    ],
  }),
};
</script>
<style>
.main {
  background-color: #8e68b2 !important;
  padding: auto;
  margin: 0px;
  overflow-x: hidden;
  overflow-y: hidden;
}
.logo-bar {
  width: 200px;
  height: max-content;
  margin-left: 200px;
}

.v-btn.loginBtn {
  width: 80px;
  height: 35px !important;
  border: 3px solid;
  border-image: linear-gradient(100deg, #ce9ffc, #a582f7, #8e68b2) 1;
  border-radius: 0%;
}

.v-btn.signupBtn {
  width: 120px;
  background: linear-gradient(180deg, #ce9ffc 0%, #a582f7 50%, #8e68b2 100%);
  border-radius: 0px;
  height: 35px !important;
  margin-right: 150px !important;
}

.v-btn.loginBtn,
.v-btn.signupBtn {
  margin-right: 10px;
}

.bottomNavbar {
  padding-left: 40%;
  height: 50px;
}
.logo-footer {
  width: 150px;
  height: max-content;
  margin-left: 0px;
  margin-top: 30px;
}

.footer-bg {
  height: 100px;
  width: 100%;
  margin-top: 50px;
}

.social-media-buttons {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
}
</style>

