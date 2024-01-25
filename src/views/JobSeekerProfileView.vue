<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col align="center" justify="center" cols="6">
        <v-card class="card-design">
          <v-tabs
            v-model="tab"
            color="deep-purple-accent-4"
            align-tabs="center"
          >
            <v-tab :value="'update'">Update profile</v-tab>
            <v-tab :value="'add'">Add information</v-tab>
            <v-tab :value="'settings'">Account settings</v-tab>
          </v-tabs>
          <v-window v-model="tab">
            <v-window-item :value="'update'">
              <div>
                <UpdateProfileComponent
                  @updateUserData="handleUserData"
                ></UpdateProfileComponent>
              </div>
            </v-window-item>

            <v-window-item :value="'add'"
              ><div>
                <v-row>
                  <v-col cols="12">
                    <h2>About Me</h2>
                    <v-textarea
                      class="text-field-design"
                      label="Summary"
                      variant="underlined"
                      maxlength="500"
                    ></v-textarea>
                  </v-col>

                  <v-col cols="12">
                    <h2>Education</h2>
                    <EducationComponent></EducationComponent>
                  </v-col>

                  <v-col cols="12">
                    <h2>Work Experience</h2>
                    <WorkExperienceComponent></WorkExperienceComponent>
                  </v-col>
                  <v-col cols="12">
                    <h2>Languages</h2>
                    <LanguageComponent></LanguageComponent>
                  </v-col>
                  <v-col cols="12">
                    <h2>Hobbies & Interests</h2>
                    <HobbiesAndInterestsComponent></HobbiesAndInterestsComponent>
                  </v-col>
                  <v-col cols="12">
                    <h2>Skills</h2>
                    <SkillsComponent></SkillsComponent>
                  </v-col>

                  <v-col cols="12">
                    <v-btn color="primary">Save Profile</v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-window-item>

            <v-window-item :value="'settings'">
              <div>
                <AccountSettingsComponent
                  @updateUserData="handleUserData"
                ></AccountSettingsComponent></div
            ></v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UpdateProfileComponent from "@/components/UpdateProfileComponent.vue";
import EducationComponent from "@/components/EducationComponent.vue";
import WorkExperienceComponent from "@/components/WorkExperienceComponent.vue";
import LanguageComponent from "@/components/LanguageComponent.vue";
import HobbiesAndInterestsComponent from "@/components/HobbiesAndInterestsComponent.vue";
import SkillsComponent from "@/components/SkillsComponent.vue";
import AccountSettingsComponent from "@/components/AccountSettingsComponent.vue";

export default {
  data: () => ({
    tab: "update",
  }),
  components: {
    UpdateProfileComponent,
    EducationComponent,
    WorkExperienceComponent,
    LanguageComponent,
    HobbiesAndInterestsComponent,
    SkillsComponent,
    AccountSettingsComponent,
  },
  methods: {
    handleUserData(userData) {
      const userSessionData = sessionStorage.getItem("user");
      if (userSessionData) {
        const user = JSON.parse(userSessionData);
        userData._id = user._id;
        const role = "job seeker";
        const updatedUserData = { ...userData, role };
        console.log("userData being sent:", updatedUserData);
        this.$apiClient
          .post("http://localhost:3000/api/job-seeker/profile", updatedUserData)
          .then((response) => {
            console.log("Server response:", response);
            sessionStorage.setItem("user", JSON.stringify(response.data.user));
          })
          .catch((error) => {
            console.error("There was an error!", error);
          });
      } else {
        console.error("User session data not found");
      }
    },
  },
};
</script>

<style>
.card-design {
  width: 800px;
  height: fit-content;
}
.text-field-design {
  font-size: 16px;
  width: 300px;
  height: 48px;
  margin-bottom: 50px;
  color: #000000;
}
</style>