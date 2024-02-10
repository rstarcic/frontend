<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col align="center" justify="center" cols="6">
        <v-card class="card-design">
          <v-tabs
            v-model="tab"
            color="deep-purple-accent-4"
            align-tabs="center"
            class="tabs"
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

            <v-window-item :value="'add'">
              <div class="d-flex align-center justify-center">
                <div class="my-6">
                  <h2>About Me</h2>
                  <v-textarea
                    v-model="aboutMe"
                    class="text-field-design"
                    label="Summary"
                    variant="underlined"
                    maxlength="500"
                  ></v-textarea>
                </div>

                <div class="my-6">
                  <h2>Education</h2>
                  <EducationComponent
                    :educationData="educationData"
                    @education-updated="handleEducationUpdate"
                  ></EducationComponent>
                </div>

                <div class="my-6">
                  <h2>Work Experience</h2>
                  <WorkExperienceComponent
                    :workData="workData"
                    @work-experience-updated="handleWorkExperienceUpdate"
                  ></WorkExperienceComponent>
                </div>

                <div class="my-6">
                  <h2>Languages</h2>
                  <LanguageComponent
                    :languagesData="languagesData"
                    @language-updated="handleLanguageUpdate"
                  ></LanguageComponent>
                </div>

                <div class="my-3">
                  <h2>Hobbies & Interests</h2>
                  <HobbiesAndInterestsComponent
                    :hobbiesAndInterestsData="hobbiesAndInterestsData"
                    @hobbies-interests-updated="handleHobbiesAndInterestUpdate"
                  ></HobbiesAndInterestsComponent>
                </div>

                <div class="my-3">
                  <h2>Skills</h2>
                  <SkillsComponent
                    :skillsData="skillsData"
                    @skills-updated="handleSkillsUpdate"
                  ></SkillsComponent>
                </div>

                <div class="my-3">
                  <v-btn
                    tile
                    class="save-changes-btn"
                    text
                    variant="plain"
                    color="#FFFFFF"
                    @click="updateUserProfile"
                  >
                    Save Profile
                  </v-btn>
                </div>
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
    aboutMe: [],
    educationData: [
      { institution: "", degree: "", startYear: "", endYear: "" },
    ],
    workData: [
      { company: "", title: "", startDate: "", endDate: "", description: "" },
    ],
    languagesData: [{ name: "", proficiency: "" }],
    hobbiesAndInterestsData: [{ name: "" }],
    skillsData: [{ name: "" }],
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
  mounted() {
    this.loadAllData();
  },
  methods: {
    async handleUserData(userData) {
      const userSessionData = sessionStorage.getItem("user");
      if (userSessionData) {
        const user = JSON.parse(userSessionData);
        userData._id = user._id;
        const role = "job seeker";
        const updatedUserData = { ...userData, role };
        console.log("userData being sent:", updatedUserData);
        await this.$apiClient
          .patch(`/api/job-seeker/profile`, updatedUserData)
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
    handleEducationUpdate(updatedEducationEntries) {
      this.educationData = updatedEducationEntries;
      console.log("Education data updated:", this.educationData);
    },
    handleWorkExperienceUpdate(updatedWorkEntries) {
      this.workData = updatedWorkEntries;
      console.log("Work data updated:", updatedWorkEntries);
    },
    handleLanguageUpdate(updatedLanguageEntries) {
      this.languagesData = updatedLanguageEntries;
      console.log("Language data updated:", updatedLanguageEntries);
    },
    handleHobbiesAndInterestUpdate(updatedHobbiesAndInterestsEntries) {
      this.hobbiesAndInterestsData = updatedHobbiesAndInterestsEntries;
      console.log(
        "Hobbies and interests data updated:",
        updatedHobbiesAndInterestsEntries
      );
    },
    handleSkillsUpdate(updatedSkillsEntries) {
      this.skillsData = updatedSkillsEntries;
      console.log("Language data updated:", updatedSkillsEntries);
    },
    async updateUserProfile() {
      const userSessionData = sessionStorage.getItem("user");
      if (userSessionData) {
        const user = JSON.parse(userSessionData);
        const userId = user._id;
        const profileData = {
          _id: userId,
          aboutMe: this.aboutMe,
          education: this.educationData,
          workExperience: this.workData,
          languages: this.languagesData,
          hobbiesAndInterests: this.hobbiesAndInterestsData,
          skills: this.skillsData,
        };
        await this.$apiClient
          .post(`/api/job-seeker/profile/edit`, profileData)
          .then((response) => {
            console.log("Profile successfully updated", response);
          })
          .catch((error) => {
            console.error("Error updating profile:", error);
          });
      }
    },
    loadAllData() {
      const user = JSON.parse(sessionStorage.getItem("user"));
      if (user) {
        if (user.Biography) {
          this.aboutMe = user.Biography;
        }
        if (user.Education) {
          this.educationData = user.Education;
        }
        if (user.WorkExperience) {
          this.workData = user.WorkExperience;
        }
        if (user.Languages) {
          this.languagesData = user.Languages;
        }
        if (user.HobbiesAndInterests) {
          this.hobbiesAndInterestsData = user.HobbiesAndInterests;
        }
        if (user.Skills) {
          this.skillsData = user.Skills;
        }
      }
    },
  },
};
</script>

<style>
.text-field-design {
  font-size: 16px;
  width: 300px;
  height: 48px;
  margin-bottom: 50px;
  color: #000000;
}
.save-changes-btn {
  width: 150px !important;
  height: 40px !important;
  background-color: #cf5dc0 !important;
  color: #f9f9f9;
  margin: 50px;
}
.tabs {
  margin-bottom: 50px;
}

.d-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
