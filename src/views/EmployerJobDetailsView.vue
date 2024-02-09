<template>
  <div class="d-flex align-center job-detail-card" v-if="job">
    <v-card class="card-style">
      <v-toolbar flat class="toolbar-style" color="#642b73">
        <v-toolbar-title class="toolbar-title font-weight-light">
          Job details
        </v-toolbar-title>

        <v-btn icon @click="toggleEditing">
          <v-fade-transition leave-absolute>
            <v-icon v-if="isEditing">mdi-close</v-icon>

            <v-icon v-else>mdi-pencil</v-icon>
          </v-fade-transition>
        </v-btn>
      </v-toolbar>
      <div class="title-subtitle-container">
        <v-card-title class="text-h4"
          ><v-text-field
            class="title-text-field"
            v-model="job.title"
            label="Title"
            :disabled="!isEditing"
            placeholder="job.title"
          ></v-text-field
        ></v-card-title>
        <v-card-subtitle class="mb-2">
          <v-text-field
            class="subtitle-text-field"
            v-model="job.category"
            label="Category"
            :disabled="!isEditing"
          ></v-text-field
        ></v-card-subtitle>
      </div>
      <v-card-text>
        <div class="info-item">
          <div class="label-container">
            <v-icon class="info-icon">mdi-information</v-icon>
            <p>Description:</p>
          </div>
          <v-text-field
            v-model="job.description"
            :disabled="!isEditing"
          ></v-text-field>
        </div>
        <div class="info-item">
          <div class="label-container">
            <v-icon class="info-icon">mdi-map-marker</v-icon>
            <p>Location:</p>
          </div>
          <v-text-field
            v-model="job.location"
            :disabled="!isEditing"
          ></v-text-field>
        </div>
        <div class="info-item">
          <div class="label-container">
            <v-icon class="info-icon">mdi-cash</v-icon>
            <p>Payment:</p>
          </div>
          <v-text-field
            v-model="job.payment"
            :disabled="!isEditing"
          ></v-text-field>
        </div>
        <div class="info-item">
          <div class="label-container">
            <v-icon class="info-icon">mdi-briefcase-variant</v-icon>
            <p>Job Type:</p>
          </div>
          <v-text-field
            v-model="job.jobType"
            :disabled="!isEditing"
            readonly
          ></v-text-field>
        </div>
        <div class="info-item">
          <div class="label-container">
            <v-icon class="info-icon">mdi-bank</v-icon>
            <p>Payment Method:</p>
          </div>
          <v-text-field
            v-model="job.paymentMethod"
            :disabled="!isEditing"
            readonly
          ></v-text-field>
        </div>
        <div class="info-item">
          <div class="label-container">
            <v-icon class="info-icon">mdi-timer-sand</v-icon>
            <p>Duration:</p>
          </div>
          <v-text-field
            v-model="job.duration"
            :disabled="!isEditing"
          ></v-text-field>
        </div>
        <div class="info-item">
          <div class="label-container">
            <v-icon class="info-icon">mdi-school</v-icon>
            <p>Qualifications:</p>
          </div>
          <v-text-field
            v-model="job.qualifications"
            :disabled="!isEditing"
          ></v-text-field>
        </div>
        <div class="info-item">
          <div class="label-container">
            <v-icon class="info-icon">mdi-hammer-screwdriver</v-icon>
            <p>Equipment Needed:</p>
          </div>
          <v-text-field
            v-model="job.equipmentNeeded"
            :disabled="!isEditing"
          ></v-text-field>
        </div>
        <div class="info-item">
          <div class="label-container">
            <v-icon class="info-icon">mdi-email</v-icon>
            <p>Contact Info:</p>
          </div>
          <v-text-field
            v-model="job.contactInfo"
            :disabled="!isEditing"
          ></v-text-field>
        </div>
        <div class="info-item">
          <div class="label-container">
            <v-icon class="info-icon">mdi-calendar-clock</v-icon>
            <p>Application Deadline:</p>
          </div>
          <v-text-field
            v-model="job.applicationDeadline"
            :disabled="!isEditing"
          ></v-text-field>
        </div>
        <div class="info-item">
          <div class="label-container">
            <v-icon class="info-icon">mdi-seat-recline-normal</v-icon>
            <p>Work Conditions:</p>
          </div>
          <v-text-field
            v-model="job.workConditions"
            :disabled="!isEditing"
          ></v-text-field>
        </div>
        <div class="info-item">
          <div class="label-container">
            <v-icon class="info-icon">mdi-account-circle</v-icon>

            <p>Created By:</p>
          </div>
          <v-text-field
            readonly
            v-model="job.createdBy"
            :disabled="!isEditing"
          ></v-text-field>
        </div>
      </v-card-text>

      <v-card-actions class="d-flex justify-center align-center">
        <div class="save-delete-button-container">
          <v-btn icon @click="updateJobDetails" v-if="isEditing">
            <v-icon>mdi-check</v-icon>
          </v-btn>

          <v-btn icon color="red" @click="deleteJob()">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>
      </v-card-actions>
      <v-divider :thickness="2"></v-divider>
      <v-container class="applicant-cards align-center">
        <h2>Applications</h2>
        <v-row no-gutters justify="center">
          <v-col
            cols="12"
            md="4"
            v-for="applicant in applicants"
            :key="applicant.id"
          >
            <v-card class="applicant-card">
              <v-avatar color="#643f7d" size="150" class="mx-auto">
                <span
                  class="white--text headline"
                  style="
                    font-family: 'Poppins', sans-serif;
                    font-weight: 600;
                    font-size: 30px;
                    font-style: italic;
                  "
                >
                  {{
                    applicant.firstName.charAt(0) +
                    ". " +
                    applicant.lastName.charAt(0) +
                    ". "
                  }}
                </span>
              </v-avatar>
              <v-card-title>{{
                applicant.firstName + " " + applicant.lastName
              }}</v-card-title>
              <v-card-subtitle>{{ applicant.email }}</v-card-subtitle>
              <v-card-actions>
                <v-btn text>View profile</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-snackbar
      v-model="showSnackbar"
      :timeout="4000"
      :color="snackbarColor"
      elevation="24"
    >
      {{ snackbarMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="showSnackbar = false">Close</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>


<script>
export default {
  data() {
    return {
      job: {
        title: "",
        category: "",
        description: "",
        location: "",
        payment: "",
        jobType: "",
        paymentMethod: "",
        duration: "",
        qualifications: "",
        equipmentNeeded: "",
        contactInfo: "",
        applicationDeadline: "",
        workConditions: "",
        createdBy: "",
        createdAt: "",
      },
      isEditing: false,
      applicants: [],
      showSnackbar: false,
      snackbarMessage: "",
      snackbarColor: "",
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    await this.fetchJobDetails(id);
  },
  methods: {
    async fetchJobDetails(id) {
      try {
        const response = await this.$apiClient.get(
          `http://localhost:3000/api/employer/jobs/${id}`
        );
        if (response && response.data) {
          this.job = response.data.jobDetails;
          console.log("Details:", response.data.jobDetails);
          console.log("Details:", response.data.jobDetails.applicantDetails);
          const applicantsInfo = response.data.jobDetails.applicantDetails;
          this.applicants.push(...applicantsInfo);
        } else {
          console.log("No job details found for the provided job ID.");
          this.job = null;
        }
      } catch (error) {
        console.error("Error fetching job details:", error);
        this.job = null;
      }
    },
    async updateJobDetails() {
      try {
        const id = this.$route.params.id;
        const response = await this.$apiClient.put(
          `http://localhost:3000/api/employer/jobs/${id}`,
          this.job
        );
        if (response && response.data) {
          this.job = response.data.updatedJobDetails;
          this.showSnackbar = true;
          this.snackbarMessage = "Job successfully updated";
          this.snackbarColor = "success";
          this.isEditing = false;
        } else {
          this.job = null;
          console.log("No job details found for the provided job ID.");
          this.snackbarMessage = "Update failed. Please try again.";
          this.snackbarColor = "error";
          this.showSnackbar = true;
          this.openDialog = false;
        }
      } catch (error) {
        console.error("Error updating job:", error);
        this.job = null;
        this.showSnackbar = true;
        this.snackbarMessage = "An error occurred.";
        this.snackbarColor = "error";
      }
    },
    async deleteJob() {
      try {
        const id = this.$route.params.id;
        const response = await this.$apiClient.delete(
          `http://localhost:3000/api/employer/jobs/${id}`
        );
        if (response && response.data) {
          this.showSnackbar = true;
          this.snackbarMessage = "Job successfully deleted";
          this.snackbarColor = "success";
          this.$router.push("/employer/jobs");
        } else {
          this.job = null;
          console.log("No job details found for the provided job ID.");
          this.snackbarMessage = "Delete failed. Please try again.";
          this.snackbarColor = "error";
          this.showSnackbar = true;
          this.openDialog = false;
        }
      } catch (error) {
        console.error("Error deleting job:", error);
        this.job = null;
        this.showSnackbar = true;
        this.snackbarMessage = "An error occurred.";
        this.snackbarColor = "error";
      }
    },
    toggleEditing() {
      this.isEditing = !this.isEditing;
    },
  },
};
</script>

<style>
* {
  font-family: "Poppins", sans-serif;
  font-style: normal;
}
.job-detail-card {
  padding: 20px;
}

.card-style {
  margin: 50px;
}
.toolbar-title {
  font-weight: 400;
  font-size: 25px !important;
  color: #f5f5f5;
}

.toolbar-style {
  font-size: 35px !important;
  height: 70px;
  margin-bottom: 20px;
}

.label-container {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 20px !important;
}

.title-subtitle-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.save-delete-button-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.applicant-card {
  width: 200px;
  margin: 30px 10px;
}
.v-text-field .v-label,
.v-text-field input {
  font-size: 16px !important;
  width: 300px;
}
.v-text-field {
  width: 300px;
}
.label-container {
  width: 150px;
  font-size: 20px !important;
}
</style>